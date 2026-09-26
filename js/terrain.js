import * as THREE from 'three';

// ---------- 世界の共通設定 ----------
// 北が -Z、東が +X。単位は m。

export const SEA_LEVEL = 0;
export const SEA_FLOOR = -9; // 島と島の間の海の底
export const WORLD_HALF = 1340; // 世界の広さ（-1340〜1340）
const CELL = 4; // 地形の 1 マス（m）
const CHUNK = 64; // 地形メッシュを区切る大きさ（マス数）。画面に映る区画だけ描かれる

// ---------- 計算の道具 ----------

export const clamp01 = (x) => Math.min(1, Math.max(0, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (e0, e1, x) => {
  const t = clamp01((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};

/** 毎回同じ結果になる乱数 */
export function seeded(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(x, z) {
  let h = Math.imul(x, 374761393) + Math.imul(z, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
export function noise(x, z) {
  const xi = Math.floor(x), zi = Math.floor(z);
  const xf = x - xi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf);
  const a = hash(xi, zi), b = hash(xi + 1, zi), c = hash(xi, zi + 1), d = hash(xi + 1, zi + 1);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}
/** なめらかなでこぼこ（0〜1） */
export function fbm(x, z) {
  return noise(x, z) * 0.55 + noise(x * 2.1 + 7, z * 2.1 + 3) * 0.3 + noise(x * 4.3 + 1, z * 4.3 + 9) * 0.15;
}

export function distToSegment(px, pz, ax, az, bx, bz) {
  const dx = bx - ax, dz = bz - az;
  const t = clamp01(((px - ax) * dx + (pz - az) * dz) / (dx * dx + dz * dz));
  return Math.hypot(px - (ax + dx * t), pz - (az + dz * t));
}
export function distToPolyline(x, z, pts) {
  let d = Infinity;
  for (let i = 0; i < pts.length - 1; i++) {
    d = Math.min(d, distToSegment(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]));
  }
  return d;
}
/**
 * 道（折れ線の集まり）までの距離。道の線分を 32m 四方のマスに振り分けておき、
 * 近くのマスの線分だけを調べる（同じ paths なら振り分けは 1 回だけ）。
 * 近くに道が無ければ、大きな値（PATH_FAR）を返す。
 */
const PATH_CELL = 32;
const PATH_FAR = 1e9;
const pathGrids = new WeakMap();
function pathGrid(paths) {
  let grid = pathGrids.get(paths);
  if (grid) return grid;
  grid = new Map();
  for (const pts of paths) {
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i], [bx, bz] = pts[i + 1];
      const seg = [ax, az, bx, bz];
      // 線分のまわり 1 マス分も含めて登録する（マスの境目でも近い線分を見つけられるように）
      const x0 = Math.floor(Math.min(ax, bx) / PATH_CELL) - 1, x1 = Math.floor(Math.max(ax, bx) / PATH_CELL) + 1;
      const z0 = Math.floor(Math.min(az, bz) / PATH_CELL) - 1, z1 = Math.floor(Math.max(az, bz) / PATH_CELL) + 1;
      for (let ix = x0; ix <= x1; ix++) {
        for (let iz = z0; iz <= z1; iz++) {
          const k = ix * 100000 + iz;
          if (!grid.has(k)) grid.set(k, []);
          grid.get(k).push(seg);
        }
      }
    }
  }
  pathGrids.set(paths, grid);
  return grid;
}
export const distToPaths = (x, z, paths) => {
  const list = pathGrid(paths).get(Math.floor(x / PATH_CELL) * 100000 + Math.floor(z / PATH_CELL));
  if (!list) return PATH_FAR;
  let d = PATH_FAR;
  for (const [ax, az, bx, bz] of list) d = Math.min(d, distToSegment(x, z, ax, az, bx, bz));
  return d;
};

/** 中心 (cx, cz)・半径 r・高さ h の、なだらかな丘 */
export const bump = (x, z, cx, cz, r, h) => h * smoothstep(r, 0, Math.hypot(x - cx, z - cz));

/** 島のふちの形：角度ごとの中心からの距離 */
export function makeEdge(R, [a1, p1, a2, p2, a3, p3]) {
  return (angle) => R + a1 * Math.sin(3 * angle + p1) + a2 * Math.sin(5 * angle + p2) + a3 * Math.sin(7 * angle + p3);
}

/** 島の陸の高さに、海岸線（砂浜から海の底へ下がる）をかける。ふちの外 30m で海の底になる */
export function applyCoast(island, x, z, land) {
  const dx = x - island.cx, dz = z - island.cz;
  const r = Math.hypot(dx, dz);
  const edge = island.edge(Math.atan2(dz, dx));
  return lerp(SEA_FLOOR, land, smoothstep(-30, 55, edge - r));
}

// ---------- 地形の組み立て ----------

/**
 * すべての島の地形メッシュと、高さを調べる関数を作る。
 * island.height(x, z) は海岸線込みの高さ、island.color(x, z, h, slope, out) は地面の色。
 */
export function buildTerrain(islands) {
  const built = islands.map((island) => {
    const half = Math.ceil(island.maxR / CELL) * CELL;
    const segs = (half * 2) / CELL;
    const N = segs + 1;
    const x0 = island.cx - half, z0 = island.cz - half;
    const heights = new Float32Array(N * N);
    for (let iz = 0; iz < N; iz++) {
      for (let ix = 0; ix < N; ix++) heights[iz * N + ix] = island.height(x0 + ix * CELL, z0 + iz * CELL);
    }
    return { island, half, segs, N, x0, z0, heights };
  });

  /** その地点を受け持つ島の格子から高さを取り出す（双線形補間）。島の外は海の底 */
  function sample(x, z) {
    for (const b of built) {
      const fx = (x - b.x0) / CELL, fz = (z - b.z0) / CELL;
      if (fx < 0 || fz < 0 || fx >= b.segs || fz >= b.segs) continue;
      const ix = Math.floor(fx), iz = Math.floor(fz);
      const tx = fx - ix, tz = fz - iz;
      const i = iz * b.N + ix;
      const h = b.heights;
      return lerp(lerp(h[i], h[i + 1], tx), lerp(h[i + b.N], h[i + b.N + 1], tx), tz);
    }
    return SEA_FLOOR;
  }
  function slopeAt(x, z) {
    const e = CELL;
    return Math.hypot(sample(x + e, z) - sample(x - e, z), sample(x, z + e) - sample(x, z - e)) / (2 * e);
  }
  /** その地点がどの島に属するか（海なら null） */
  function islandAt(x, z) {
    for (const b of built) {
      const dx = x - b.island.cx, dz = z - b.island.cz;
      if (Math.hypot(dx, dz) < b.island.edge(Math.atan2(dz, dx)) * 1.02) return b.island;
    }
    return null;
  }

  // 島ごとのメッシュ（CHUNK マスごとの区画に分ける）
  const group = new THREE.Group();
  const col = new THREE.Color();
  const material = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 });
  for (const b of built) {
    // 格子の各点の色を先に求めておく（地図の絵にも使い回す）
    const colors = new Float32Array(b.N * b.N * 3);
    b.colors = colors;
    for (let iz = 0; iz < b.N; iz++) {
      for (let ix = 0; ix < b.N; ix++) {
        const x = b.x0 + ix * CELL, z = b.z0 + iz * CELL;
        const i = iz * b.N + ix;
        b.island.color(x, z, b.heights[i], slopeAt(x, z), col);
        colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b;
      }
    }
    for (let cz0 = 0; cz0 < b.segs; cz0 += CHUNK) {
      for (let cx0 = 0; cx0 < b.segs; cx0 += CHUNK) {
        const nx = Math.min(CHUNK, b.segs - cx0), nz = Math.min(CHUNK, b.segs - cz0);
        // 区画がすべて深い海の底なら作らない
        let any = false;
        for (let j = 0; j <= nz && !any; j++) for (let i = 0; i <= nx; i++) {
          if (b.heights[(cz0 + j) * b.N + cx0 + i] > SEA_FLOOR + 0.5) { any = true; break; }
        }
        if (!any) continue;
        const pos = new Float32Array((nx + 1) * (nz + 1) * 3);
        const cols = new Float32Array((nx + 1) * (nz + 1) * 3);
        for (let j = 0; j <= nz; j++) {
          for (let i = 0; i <= nx; i++) {
            const gi = (cz0 + j) * b.N + cx0 + i;
            const k = (j * (nx + 1) + i) * 3;
            pos[k] = b.x0 + (cx0 + i) * CELL;
            pos[k + 1] = b.heights[gi];
            pos[k + 2] = b.z0 + (cz0 + j) * CELL;
            cols[k] = colors[gi * 3]; cols[k + 1] = colors[gi * 3 + 1]; cols[k + 2] = colors[gi * 3 + 2];
          }
        }
        const index = [];
        for (let j = 0; j < nz; j++) {
          for (let i = 0; i < nx; i++) {
            const a = j * (nx + 1) + i, bb = a + 1, c = a + nx + 1, d = c + 1;
            index.push(a, c, bb, bb, c, d);
          }
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
        geo.setIndex(index);
        geo.computeVertexNormals();
        geo.computeBoundingSphere();
        const mesh = new THREE.Mesh(geo, material);
        mesh.receiveShadow = true;
        group.add(mesh);
      }
    }
  }

  // 水のシェーダー用：世界全体の高さテクスチャ（8m ごと、-12〜24m を 0〜255 に）
  const TSTEP = 8;
  const TN = Math.round((WORLD_HALF * 2) / TSTEP) + 1;
  const hdata = new Uint8Array(TN * TN);
  for (let iz = 0; iz < TN; iz++) {
    for (let ix = 0; ix < TN; ix++) {
      const h = sample(-WORLD_HALF + ix * TSTEP, -WORLD_HALF + iz * TSTEP);
      hdata[iz * TN + ix] = Math.round(clamp01((h + 12) / 36) * 255);
    }
  }
  const heightTex = new THREE.DataTexture(hdata, TN, TN, THREE.RedFormat, THREE.UnsignedByteType);
  heightTex.unpackAlignment = 1;
  heightTex.magFilter = THREE.LinearFilter;
  heightTex.minFilter = THREE.LinearFilter;
  heightTex.needsUpdate = true;

  /** 地面の色（格子の色から取る。地図の絵を作る時に使う） */
  function colorAt(x, z, out) {
    for (const b of built) {
      const ix = Math.round((x - b.x0) / CELL), iz = Math.round((z - b.z0) / CELL);
      if (ix < 0 || iz < 0 || ix > b.segs || iz > b.segs) continue;
      const i = (iz * b.N + ix) * 3;
      return out.setRGB(b.colors[i], b.colors[i + 1], b.colors[i + 2]);
    }
    return out.setRGB(0, 0, 0);
  }

  return { group, heightTex, sample, slopeAt, islandAt, colorAt };
}

export const MAP_PX = 5; // ミニマップの絵の 1px が何 m か

/** ミニマップ用の、上から見た世界の絵（1px = MAP_PX m）。陸の色は地形の色 colorAt から取る */
export function buildMapImage(colorAt, sample) {
  const size = Math.round((WORLD_HALF * 2) / MAP_PX);
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const img = g.createImageData(size, size);
  const col = new THREE.Color();
  const shallow = new THREE.Color('#7fd8d0'), deep = new THREE.Color('#3b7fc0');
  for (let py = 0; py < size; py++) {
    for (let px = 0; px < size; px++) {
      const x = px * MAP_PX - WORLD_HALF + MAP_PX / 2, z = py * MAP_PX - WORLD_HALF + MAP_PX / 2;
      const h = sample(x, z);
      if (h < SEA_LEVEL) col.copy(shallow).lerp(deep, smoothstep(0, 6, -h));
      else colorAt(x, z, col).offsetHSL(0, 0, smoothstep(4, 30, h) * 0.08);
      const i = (py * size + px) * 4;
      col.convertLinearToSRGB();
      img.data[i] = col.r * 255; img.data[i + 1] = col.g * 255; img.data[i + 2] = col.b * 255; img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  return c;
}

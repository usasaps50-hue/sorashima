import * as THREE from 'three';
import { std, makeBatch } from './props.js';
import { distToPaths, distToPolyline } from './terrain.js';

// 形は使い回す（原点が根元になるようにずらしておく）
const unitCyl = (rTop, rBottom, seg = 6) => new THREE.CylinderGeometry(rTop, rBottom, 1, seg).translate(0, 0.5, 0);
const GEO = {
  trunk: unitCyl(0.45, 0.7),
  pineTrunk: unitCyl(0.35, 0.5),
  cone: new THREE.ConeGeometry(1, 1, 7).translate(0, 0.5, 0),
  blob: new THREE.IcosahedronGeometry(1, 0),
  cactus: unitCyl(0.5, 0.55, 8),
  cactusTop: new THREE.SphereGeometry(0.5, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2),
  branch: unitCyl(0.12, 0.22, 5),
  rock: new THREE.DodecahedronGeometry(1, 0),
  blade: new THREE.ConeGeometry(0.18, 0.9, 3),
  flower: new THREE.IcosahedronGeometry(0.22, 0),
  palmSeg: new THREE.CylinderGeometry(0.3, 0.36, 1.25, 6),
  frond: new THREE.ConeGeometry(0.9, 4.2, 3, 1, true).translate(0, 2.1, 0),
  nut: new THREE.SphereGeometry(0.28, 6, 5),
};

/** ヤシの木をまとめて置く道具（浜辺やオアシス用） */
export function makePalms(max) {
  const segs = makeBatch(GEO.palmSeg, std(0xa9825a), max * 6);
  const fronds = makeBatch(GEO.frond, std(0x4fae55, { side: THREE.DoubleSide }), max * 7);
  const nuts = makeBatch(GEO.nut, std(0x6b4630), max * 3);
  return {
    /** (x, y, z) に、(lx, lz) の方向へ傾いたヤシを置く */
    add(x, y, z, lx, lz, rand) {
      const lean = new THREE.Vector2(lx, lz).normalize().multiplyScalar(0.35 + rand() * 0.3);
      const top = new THREE.Vector3();
      for (let i = 0; i < 6; i++) {
        const k = i / 6;
        const px = x + lean.x * k * k * 4, py = y + i * 1.15 + 0.6, pz = z + lean.y * k * k * 4;
        segs.add(px, py, pz, 1 - i * 0.05, 1, 1 - i * 0.05, lean.y * k * 0.6, 0, -lean.x * k * 0.6);
        top.set(px, py + 0.7, pz);
      }
      for (let f = 0; f < 7; f++) {
        fronds.add(top.x, top.y, top.z, 1, 1, 0.25, 0, (f / 7) * Math.PI * 2, 1.15 + rand() * 0.25, null, 'YXZ');
      }
      for (let c = 0; c < 3; c++) nuts.add(top.x + Math.cos(c * 2.1) * 0.4, top.y - 0.4, top.z + Math.sin(c * 2.1) * 0.4);
    },
    finish(group) {
      group.add(segs.finish(), fronds.finish(), nuts.finish());
    },
  };
}

/**
 * 島の設定（island.nature）に従って、木・ヤシ・岩・草花を置く。
 */
export function makeNature(island, colliders, ground, slopeAt, rand, weightAt = () => 1, density = 1) {
  const cfg = island.nature;
  // 地方の変わり目では、その地方らしさ（重み）の割合でだけ置く → 木や草が自然に混ざり合う
  const belongs = (x, z) => rand() < weightAt(x, z);
  const group = new THREE.Group();
  const R = island.maxR;
  const avoid = cfg.avoid || [];
  const randomPoint = () => [island.cx + (rand() - 0.5) * 2 * R, island.cz + (rand() - 0.5) * 2 * R];
  const blocked = (x, z, pad) => avoid.some(([ax, az, ar]) => Math.hypot(x - ax, z - az) < ar + pad);
  const addCollider = (x, z, r, y0, h, color, kind) => {
    colliders.push({
      box: new THREE.Box3(new THREE.Vector3(x - r, y0, z - r), new THREE.Vector3(x + r, y0 + h, z + r)),
      cyl: { x, z, r },
      color,
      kind,
    });
  };

  // ---------- 木 ----------
  const t = cfg.trees;
  if (t && t.count) {
    const max = t.count;
    const trunkMat = std(t.trunkColor ?? 0x8a5a3b, { roughness: 1 });
    const leafMats = (t.leafColors || [0x4f9a4a]).map((c) => std(c));
    const leafBatches = leafMats.map((m) => makeBatch(t.style === 'pine' ? GEO.cone : GEO.blob, m, max * 3));
    const trunks = makeBatch(t.style === 'pine' ? GEO.pineTrunk : t.style === 'cactus' ? GEO.cactus : GEO.trunk, t.style === 'cactus' ? leafMats[0] : trunkMat, max * (t.style === 'cactus' ? 3 : 1));
    const extras = t.style === 'cactus'
      ? makeBatch(GEO.cactusTop, leafMats[0], max * 3)
      : t.style === 'dead' ? makeBatch(GEO.branch, trunkMat, max * 3)
      : t.snowy ? makeBatch(GEO.cone, std(0xf4f8fb), max * 3) : null;

    let placed = 0;
    for (let tries = 0; placed < max && tries < max * 40; tries++) {
      const [x, z] = randomPoint();
      const h0 = ground(x, z);
      if (h0 < (t.minH ?? 2.6) || h0 > (t.maxH ?? 999) || slopeAt(x, z) > (t.maxSlope ?? 0.45)) continue;
      if (blocked(x, z, 4) || distToPaths(x, z, island.paths) < 4) continue;
      if (t.avoidRiver && distToPolyline(x, z, t.avoidRiver) < 10) continue;
      if (!belongs(x, z)) continue;
      placed++;
      const leafIdx = t.accentChance && rand() < t.accentChance ? leafMats.length - 1 : Math.floor(rand() * (leafMats.length - (t.accentChance ? 1 : 0)));
      let h;
      if (t.style === 'round') {
        h = 4 + rand() * 3;
        trunks.add(x, h0 - 0.3, z, 1, h, 1);
        const blobs = 2 + Math.floor(rand() * 2);
        for (let k = 0; k < blobs; k++) {
          const s = 2.4 + rand() * 1.4 - k * 0.4;
          leafBatches[leafIdx].add(x + (rand() - 0.5) * 1.5, h0 + h + k * 1.8, z + (rand() - 0.5) * 1.5, s, s, s, rand() * 3, rand() * 3, rand() * 3);
        }
        addCollider(x, z, 0.7, h0 - 1, h + 3, leafMats[leafIdx].color.getHex(), 'tree');
      } else if (t.style === 'pine') {
        h = 7 + rand() * 5;
        trunks.add(x, h0 - 0.3, z, 1, 2.2, 1);
        for (let k = 0; k < 3; k++) {
          const r = (2.6 - k * 0.7) * (h / 10);
          const th = h * 0.42;
          const y = h0 + 1.6 + k * h * 0.26;
          leafBatches[leafIdx].add(x, y, z, r, th, r, 0, rand() * 3, 0);
          if (extras) extras.add(x, y + th * 0.55, z, r * 0.55, th * 0.45, r * 0.55, 0, rand() * 3, 0);
        }
        addCollider(x, z, 0.6, h0 - 1, h + 2, leafMats[leafIdx].color.getHex(), 'tree');
      } else if (t.style === 'cactus') {
        h = 2.5 + rand() * 2.2;
        trunks.add(x, h0 - 0.2, z, 1, h, 1);
        extras.add(x, h0 - 0.2 + h, z);
        const arms = 1 + Math.floor(rand() * 2);
        for (let k = 0; k < arms; k++) {
          const a = rand() * Math.PI * 2 + k * Math.PI;
          const ax = x + Math.cos(a) * 0.9, az = z + Math.sin(a) * 0.9;
          const ay = h0 + h * (0.35 + rand() * 0.25);
          const ah = 1 + rand() * 1.2;
          trunks.add(ax, ay, az, 0.6, ah, 0.6);
          extras.add(ax, ay + ah, az, 0.6, 0.6, 0.6);
        }
        addCollider(x, z, 0.8, h0 - 1, h + 1, leafMats[0].color.getHex(), 'tree');
      } else if (t.style === 'dead') {
        h = 4 + rand() * 3;
        trunks.add(x, h0 - 0.3, z, 0.8, h, 0.8);
        for (let k = 0; k < 2; k++) {
          const a = rand() * Math.PI * 2;
          extras.add(x, h0 + h * (0.5 + k * 0.2), z, 1, 1.6 + rand() * 1.5, 1, Math.cos(a) * 0.9, 0, Math.sin(a) * 0.9);
        }
        addCollider(x, z, 0.5, h0 - 1, h + 1, 0x3a3030, 'tree');
      }
    }
    group.add(trunks.finish());
    leafBatches.forEach((b) => group.add(b.finish()));
    if (extras) group.add(extras.finish());
  }

  // ---------- 浜辺のヤシ ----------
  if (cfg.palms) {
    const palms = makePalms(cfg.palms);
    let placed = 0;
    for (let tries = 0; placed < cfg.palms && tries < cfg.palms * 300; tries++) {
      const [x, z] = randomPoint();
      const h0 = ground(x, z);
      if (h0 < 1.0 || h0 > 2.6 || blocked(x, z, 2) || distToPaths(x, z, island.paths) < 5) continue;
      if (!belongs(x, z)) continue;
      placed++;
      // 海の方（低い方）へ傾ける
      const lx = ground(x - 3, z) - ground(x + 3, z), lz = ground(x, z - 3) - ground(x, z + 3);
      palms.add(x, h0 - 0.2, z, lx || 1, lz, rand);
      addCollider(x, z, 0.45, h0 - 1, 7, 0x4fae55, 'tree');
    }
    palms.finish(group);
  }

  // ---------- 岩 ----------
  if (cfg.rocks) {
    const rocks = makeBatch(GEO.rock, std(cfg.rockColor ?? 0x9d97a3), cfg.rocks);
    let placed = 0;
    for (let tries = 0; placed < cfg.rocks && tries < cfg.rocks * 80; tries++) {
      const [x, z] = randomPoint();
      const h0 = ground(x, z);
      if (h0 < 0.3 || blocked(x, z, 3) || distToPaths(x, z, island.paths) < 3) continue;
      if (slopeAt(x, z) < 0.35 && rand() > 0.35) continue; // 斜面の近くに多めに
      if (!belongs(x, z)) continue;
      placed++;
      const s = 0.8 + rand() * 1.8;
      rocks.add(x, h0 + s * 0.3, z, s * 1.3, s, s * 1.1, rand(), rand() * 3, rand());
      addCollider(x, z, s * 1.1, h0 - 0.5, s * 1.3, cfg.rockColor ?? 0x9d97a3, 'rock');
    }
    group.add(rocks.finish());
  }

  // ---------- 草と花（見た目だけ） ----------
  const scatter = (geo, mat, count, lift, colors) => {
    const b = makeBatch(geo, mat, count);
    b.mesh.castShadow = false;
    let n = 0;
    const palette = colors?.map((c) => new THREE.Color(c));
    for (let tries = 0; n < count && tries < count * 20; tries++) {
      const [x, z] = randomPoint();
      const h0 = ground(x, z);
      if (h0 < 2.2 || slopeAt(x, z) > 0.5 || distToPaths(x, z, island.paths) < 2.5 || blocked(x, z, -2)) continue;
      if (!belongs(x, z)) continue;
      const s = 0.7 + rand() * 0.6;
      b.add(x, h0 + lift, z, s, s, s, 0, rand() * 3, (rand() - 0.5) * 0.4, palette ? palette[Math.floor(rand() * palette.length)] : null);
      n++;
    }
    group.add(b.finish());
  };
  // 草花は見た目だけなので、軽くしたい時（スマホなど）は density で減らす
  if (cfg.grass?.count) scatter(GEO.blade, std(cfg.grass.color, { flatShading: false }), Math.round(cfg.grass.count * density), 0.35);
  if (cfg.flowers?.count) scatter(GEO.flower, std(0xffffff), Math.round(cfg.flowers.count * density), 0.3, cfg.flowers.colors);

  return group;
}

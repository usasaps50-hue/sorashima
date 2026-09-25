import * as THREE from 'three';
import { buildTerrain, buildMapImage, seeded, SEA_LEVEL, WORLD_HALF } from './terrain.js';
import { makeContinent } from './continent.js';
import { ISLANDS, ALL_PLACES, SANCTUARIES, BRIDGES } from './islands/index.js';
import { PLACES } from './islands/start.js';
import { createSea, createWaterfall } from './water.js';
import { buildVillage } from './village.js';
import { buildBridges } from './bridges.js';
import { makeNature } from './nature.js';
import { std, shadow, makePlacer } from './props.js';

export { ISLANDS, ALL_PLACES, SANCTUARIES, PLACES };

// ---------- 空 ----------

function makeSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      top: { value: new THREE.Color('#4f8fe0') },
      horizon: { value: new THREE.Color('#fde8d2') },
      bottom: { value: new THREE.Color('#8fc3e0') },
    },
    vertexShader: `
      varying vec3 vPos;
      void main() {
        vPos = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      uniform vec3 top;
      uniform vec3 horizon;
      uniform vec3 bottom;
      varying vec3 vPos;
      void main() {
        float h = vPos.y;
        vec3 col = h > 0.0 ? mix(horizon, top, pow(h, 0.5)) : mix(horizon, bottom, pow(-h, 0.5));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`,
  });
  return new THREE.Mesh(new THREE.SphereGeometry(1700, 32, 16), mat);
}

function makeClouds(rand) {
  const group = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0xb8c0cc, flatShading: true });
  const geo = new THREE.IcosahedronGeometry(1, 1);
  for (let i = 0; i < 90; i++) {
    const cloud = new THREE.Group();
    const puffs = 4 + Math.floor(rand() * 4);
    for (let j = 0; j < puffs; j++) {
      const r = 10 + rand() * 12;
      const puff = new THREE.Mesh(geo, mat);
      puff.scale.set(r, r * 0.6, r);
      puff.position.set((j - puffs / 2) * 15 + rand() * 6, rand() * 6, rand() * 12 - 6);
      cloud.add(puff);
    }
    const a = rand() * Math.PI * 2;
    const r = rand() * 1600;
    cloud.position.set(Math.cos(a) * r, 130 + rand() * 90, Math.sin(a) * r);
    group.add(cloud);
  }
  return group;
}

// ---------- 祭壇 ----------

function makeRuneTexture() {
  const size = 512;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const m = size / 2;
  g.strokeStyle = '#ffffff';
  g.fillStyle = '#ffffff';
  g.lineCap = 'round';
  g.lineWidth = 10;
  g.beginPath(); g.arc(m, m, 236, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 4;
  g.beginPath(); g.arc(m, m, 206, 0, Math.PI * 2); g.stroke();
  g.beginPath(); g.arc(m, m, 110, 0, Math.PI * 2); g.stroke();
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    g.save();
    g.translate(m + Math.cos(a) * 221, m + Math.sin(a) * 221);
    g.rotate(a);
    g.lineWidth = 4;
    g.beginPath();
    if (i % 2) { g.moveTo(-6, -6); g.lineTo(6, 6); g.moveTo(6, -6); g.lineTo(-6, 6); }
    else { g.arc(0, 0, 5, 0, Math.PI * 2); }
    g.stroke();
    g.restore();
  }
  g.lineWidth = 5;
  for (const off of [0, Math.PI / 3]) {
    g.beginPath();
    for (let i = 0; i <= 3; i++) {
      const a = off + (i / 3) * Math.PI * 2 - Math.PI / 2;
      g.lineTo(m + Math.cos(a) * 200, m + Math.sin(a) * 200);
    }
    g.stroke();
  }
  g.beginPath(); g.arc(m, m, 22, 0, Math.PI * 2); g.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeAltar(colliders) {
  const A = PLACES.altar;
  const y0 = A.h;
  const group = new THREE.Group();
  group.position.set(A.x, y0, A.z);
  const stoneMat = std(0xd9d2c3, { roughness: 0.85 });

  const base = shadow(new THREE.Mesh(new THREE.CylinderGeometry(7.6, 8, 0.4, 16), stoneMat));
  base.position.y = 0.2;
  const top = shadow(new THREE.Mesh(new THREE.CylinderGeometry(7, 7.3, 0.4, 16), stoneMat));
  top.position.y = 0.6;
  group.add(base, top);
  colliders.push({
    box: new THREE.Box3(new THREE.Vector3(A.x - 7.3, y0 - 1, A.z - 7.3), new THREE.Vector3(A.x + 7.3, y0 + 0.8, A.z + 7.3)),
    cyl: { x: A.x, z: A.z, r: 7.3 },
    color: 0xd9d2c3,
    kind: 'spawn',
  });

  const rune = new THREE.Mesh(
    new THREE.CircleGeometry(6.4, 48),
    new THREE.MeshBasicMaterial({ map: makeRuneTexture(), color: 0x7ff0e0, transparent: true, depthWrite: false })
  );
  rune.rotation.x = -Math.PI / 2;
  rune.position.y = 0.82;
  group.add(rune);

  const pillarMat = std(0xbdb5a6);
  const glowMat = new THREE.MeshStandardMaterial({ color: 0x9ff6ea, emissive: 0x3fd6c0, emissiveIntensity: 1.2 });
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 4 + (i / 4) * Math.PI * 2;
    const x = Math.cos(a) * 10, z = Math.sin(a) * 10;
    const p = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 3.2, 6), pillarMat));
    p.position.set(x, 1.6, z);
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.45, 0), glowMat);
    gem.position.set(x, 3.8, z);
    group.add(p, gem);
    colliders.push({
      box: new THREE.Box3(new THREE.Vector3(A.x + x - 0.7, y0 - 1, A.z + z - 0.7), new THREE.Vector3(A.x + x + 0.7, y0 + 3.2, A.z + z + 0.7)),
      cyl: { x: A.x + x, z: A.z + z, r: 0.7 },
      color: 0xbdb5a6,
      kind: 'part',
    });
  }

  const count = 60;
  const pos = new Float32Array(count * 3);
  const seeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2, r = Math.random() * 6;
    pos[i * 3] = Math.cos(a) * r;
    pos[i * 3 + 1] = Math.random() * 6;
    pos[i * 3 + 2] = Math.sin(a) * r;
    seeds[i] = Math.random();
  }
  const sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  group.add(new THREE.Points(sparkGeo, new THREE.PointsMaterial({
    color: 0xaafff2, size: 0.25, transparent: true, opacity: 0.85, depthWrite: false,
  })));

  return {
    group,
    update(dt, t) {
      rune.rotation.z = t * 0.15;
      rune.material.opacity = 0.75 + Math.sin(t * 2) * 0.2;
      const p = sparkGeo.attributes.position;
      for (let i = 0; i < count; i++) {
        let y = p.getY(i) + dt * (0.6 + seeds[i]);
        if (y > 7) y = 0.8;
        p.setY(i, y);
      }
      p.needsUpdate = true;
    },
  };
}

// ---------- 古代遺跡の台地 ----------

function makeRuins(colliders, ground) {
  const group = new THREE.Group();
  const put = makePlacer(group, colliders);
  const P = PLACES.plateau;
  const base = P.h;
  const moss = std(0x6fae4f, { roughness: 1 });
  const stone = (c) => std(c);

  // 塔
  put.cyl(5, 25, P.x, base - 1, P.z, stone(0xb0a79a), 0xb0a79a, 'part', 12);
  for (let y = 4; y < 24; y += 6) {
    const band = new THREE.Mesh(new THREE.CylinderGeometry(5.15, 5.15, 0.6, 12), stone(0x8f8578));
    band.position.set(P.x, base + y, P.z);
    group.add(band);
  }
  put.cyl(6.5, 2, P.x, base + 24, P.z, stone(0xcfc6b6), 0xcfc6b6, 'part', 12);

  // 塔のまわりの浮かぶ飛び石
  const stepTop = new THREE.CylinderGeometry(2.2, 2.0, 1, 8);
  const stepBottom = new THREE.ConeGeometry(2.0, 2.4, 8);
  for (let i = 0; i < 8; i++) {
    const a = 0.9 + i * 0.72;
    const top = base + 3 + i * 3;
    const x = P.x + Math.cos(a) * 12, z = P.z + Math.sin(a) * 12;
    const s = new THREE.Group();
    const t = shadow(new THREE.Mesh(stepTop, moss));
    const b = shadow(new THREE.Mesh(stepBottom, stone(0x9a8f90)));
    b.rotation.x = Math.PI;
    b.position.y = -1.7;
    s.add(t, b);
    s.position.set(x, top - 0.5, z);
    group.add(s);
    put.cyl(2.2, 1, x, top - 1, z, null, 0x6fae4f);
  }

  // 頂上のゴール
  put.cyl(2, 0.4, P.x, base + 26, P.z, new THREE.MeshStandardMaterial({ color: 0xf2e6c9, roughness: 0.6 }), 0xffd76a, 'goal', 16);
  const crystal = new THREE.Mesh(
    new THREE.OctahedronGeometry(1.2, 0),
    new THREE.MeshStandardMaterial({ color: 0x8fe8ff, emissive: 0x3fb6e0, emissiveIntensity: 0.9, flatShading: true, transparent: true, opacity: 0.9 })
  );
  crystal.scale.y = 1.6;
  crystal.position.set(P.x, base + 30, P.z);
  group.add(crystal);
  const light = new THREE.PointLight(0x7fdcff, 30, 30);
  light.position.copy(crystal.position);
  group.add(light);

  // 塔を囲む崩れた列柱
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + 0.3;
    const x = P.x + Math.cos(a) * 19, z = P.z + Math.sin(a) * 19;
    const g = ground(x, z);
    const h = [7, 3, 5.5, 1.5, 8, 2.5, 6, 4, 7.5, 2][i];
    put.cyl(1.3, h, x, g - 0.5, z, stone(0xd8d0c0), 0xd8d0c0, 'part', 8);
    if (h > 5) {
      const cap = shadow(new THREE.Mesh(new THREE.CylinderGeometry(1.7, 1.7, 0.5, 8), stone(0xe6dfd0)));
      cap.position.set(x, g - 0.5 + h + 0.25, z);
      group.add(cap);
    }
  }
  // 倒れた柱
  const fallen = shadow(new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 8, 8), stone(0xd8d0c0)));
  const fx = P.x - 8, fz = P.z + 15;
  fallen.rotation.z = Math.PI / 2;
  fallen.rotation.y = 0.6;
  fallen.position.set(fx, ground(fx, fz) + 1, fz);
  group.add(fallen);

  // 坂道を登りきった所の門
  const gx = PLACES.plateau.x - 9, gz = PLACES.plateau.z + 22;
  const gy = ground(gx, gz);
  const gateMat = stone(0xcfc6b6);
  put.box(1.6, 7, 1.6, gx - 4, gy - 0.5, gz, gateMat, 0xcfc6b6);
  put.box(1.6, 7, 1.6, gx + 4, gy - 0.5, gz, gateMat, 0xcfc6b6);
  const lintel = shadow(new THREE.Mesh(new THREE.BoxGeometry(10.4, 1.4, 2), gateMat));
  lintel.position.set(gx, gy + 7.2, gz);
  group.add(lintel);

  return { group, crystal, crystalBaseY: base + 30 };
}

// ---------- ひかりの洞窟 ----------

function makeCave(colliders) {
  const group = new THREE.Group();
  const put = makePlacer(group, colliders);
  const Cv = PLACES.cave;
  const y0 = Cv.h;
  const R = 13;
  const opening = 0.6; // 入り口の半分の角度（東向き）

  // 岩のドーム（東側に入り口の切れ目）
  const domeMat = std(0x7d7470, { side: THREE.DoubleSide, transparent: true, opacity: 1 });
  const dome = shadow(new THREE.Mesh(
    new THREE.SphereGeometry(R, 22, 12, Math.PI + opening, Math.PI * 2 - opening * 2, 0, Math.PI / 2),
    domeMat
  ));
  dome.scale.y = 0.8;
  dome.position.set(Cv.x, y0 - 0.5, Cv.z);
  group.add(dome);

  // 入り口の岩
  const rockMat = std(0x8d8278);
  for (const s of [-1, 1]) {
    const a = s * (opening + 0.05);
    const r = shadow(new THREE.Mesh(new THREE.DodecahedronGeometry(2.6, 0), rockMat));
    r.position.set(Cv.x + Math.cos(a) * R, y0 + 1.2, Cv.z + Math.sin(a) * R);
    r.scale.set(1, 1.6, 1);
    group.add(r);
  }

  // 壁の当たり判定：円周に並べた円柱（入り口を空ける）
  for (let i = 0; i < 28; i++) {
    const a = (i / 28) * Math.PI * 2;
    const d = Math.atan2(Math.sin(a), Math.cos(a));
    if (Math.abs(d) < opening) continue;
    put.cyl(2.2, 14, Cv.x + Math.cos(a) * (R + 0.5), y0 - 1, Cv.z + Math.sin(a) * (R + 0.5), null, 0x7d7470, 'wall');
  }

  // 光るクリスタルの群れ
  const crystalMat = new THREE.MeshStandardMaterial({ color: 0x9fe8ff, emissive: 0x3fb6e0, emissiveIntensity: 1.1, flatShading: true });
  const pinkMat = new THREE.MeshStandardMaterial({ color: 0xffb8e0, emissive: 0xd060a8, emissiveIntensity: 0.9, flatShading: true });
  const crystalGeo = new THREE.OctahedronGeometry(1, 0);
  const clusters = [[-7, -4], [-8, 3], [-3, -8], [-2, 8], [3, -9]];
  clusters.forEach(([dx, dz], ci) => {
    for (let k = 0; k < 4; k++) {
      const c = new THREE.Mesh(crystalGeo, ci % 2 ? pinkMat : crystalMat);
      const s = 0.5 + Math.random() * 0.7;
      c.scale.set(s * 0.6, s * 2, s * 0.6);
      c.position.set(Cv.x + dx + (Math.random() - 0.5) * 2, y0 + s, Cv.z + dz + (Math.random() - 0.5) * 2);
      c.rotation.set((Math.random() - 0.5) * 0.6, Math.random() * 3, (Math.random() - 0.5) * 0.6);
      group.add(c);
    }
    put.cyl(1.4, 3, Cv.x + dx, y0 - 0.5, Cv.z + dz, null, ci % 2 ? 0xffb8e0 : 0x9fe8ff, 'part');
  });
  const glow = new THREE.PointLight(0x7fdcff, 60, 22);
  glow.position.set(Cv.x - 3, y0 + 5, Cv.z);
  group.add(glow);

  // 宝箱
  const chest = new THREE.Group();
  const woodMat = std(0x8a5a3b);
  const goldMat = std(0xf4c25b, { metalness: 0.6, roughness: 0.35 });
  const bottom = shadow(new THREE.Mesh(new THREE.BoxGeometry(2, 1.1, 1.3), woodMat));
  bottom.position.y = 0.55;
  const lid = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.65, 2, 10, 1, false, 0, Math.PI), woodMat));
  lid.rotation.z = Math.PI / 2;
  lid.position.y = 1.1;
  const band = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.18, 1.35), goldMat);
  band.position.y = 1.0;
  const lock = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.35, 0.1), goldMat);
  lock.position.set(0, 0.95, 0.68);
  chest.add(bottom, lid, band, lock);
  chest.position.set(Cv.x - 9, y0, Cv.z);
  chest.rotation.y = Math.PI / 2; // 入り口の方を向ける
  group.add(chest);
  put.cyl(1.2, 1.7, Cv.x - 9, y0, Cv.z, null, 0xf4c25b, 'chest');

  return {
    group,
    /** 中にいる時は、ドームを半透明にして中が見えるようにする */
    update(dt, focus) {
      const inside = focus && Math.hypot(focus.x - Cv.x, focus.z - Cv.z) < R + 1;
      const target = inside ? 0.18 : 1;
      domeMat.opacity += (target - domeMat.opacity) * Math.min(1, dt * 6);
      domeMat.depthWrite = domeMat.opacity > 0.95;
    },
  };
}

// ---------- 当たり判定の検索を速くする格子 ----------

/**
 * 当たり判定を 24m 四方のマスに振り分けておき、近くのマスの物だけを取り出せるようにする。
 * 物が何千個あっても、プレイヤーや敵は近くの数十個だけを調べればよくなる。
 */
function buildColliderGrid(colliders) {
  const CELL = 24;
  const cells = new Map();
  const key = (ix, iz) => ix * 100000 + iz;
  for (const c of colliders) {
    const x0 = Math.floor(c.box.min.x / CELL), x1 = Math.floor(c.box.max.x / CELL);
    const z0 = Math.floor(c.box.min.z / CELL), z1 = Math.floor(c.box.max.z / CELL);
    for (let ix = x0; ix <= x1; ix++) {
      for (let iz = z0; iz <= z1; iz++) {
        const k = key(ix, iz);
        if (!cells.has(k)) cells.set(k, []);
        cells.get(k).push(c);
      }
    }
  }
  let stamp = 0;
  const result = [];
  return (x, z) => {
    stamp++;
    result.length = 0;
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
    for (let ix = cx - 1; ix <= cx + 1; ix++) {
      for (let iz = cz - 1; iz <= cz + 1; iz++) {
        const list = cells.get(key(ix, iz));
        if (!list) continue;
        for (const c of list) {
          if (c._stamp === stamp) continue; // 2つ以上のマスにまたがる物は1回だけ
          c._stamp = stamp;
          result.push(c);
        }
      }
    }
    return result.slice();
  };
}

// ---------- 組み立て ----------

/** options.lite: スマホ向けの軽い設定（影を小さく、草花を少なく、遠くを早めに霞ませる） */
export function buildWorld(scene, renderer, options = {}) {
  const lite = !!options.lite;
  const rand = seeded(2024);
  scene.background = new THREE.Color('#fde8d2');
  scene.fog = new THREE.Fog('#e6eef2', 300, lite ? 1000 : 1500);

  const sky = makeSky();
  scene.add(sky);
  const clouds = makeClouds(rand);
  scene.add(clouds);

  // ライト（影はプレイヤーのまわりだけ描くので、太陽はプレイヤーに追従させる）
  scene.add(new THREE.HemisphereLight(0xdcecff, 0x7a8f5a, 1.0));
  const sunOffset = new THREE.Vector3(50, 80, 20);
  const sun = new THREE.DirectionalLight(0xfff0dc, 2.4);
  sun.position.copy(sunOffset);
  sun.castShadow = true;
  sun.shadow.mapSize.set(lite ? 1024 : 2048, lite ? 1024 : 2048);
  sun.shadow.camera.left = -60;
  sun.shadow.camera.right = 60;
  sun.shadow.camera.top = 60;
  sun.shadow.camera.bottom = -60;
  sun.shadow.camera.far = 250;
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.05;
  scene.add(sun);
  scene.add(sun.target);

  // 地形と水：すべての地方を混ぜ合わせた、ひとつながりの大陸
  const continent = makeContinent(ISLANDS);
  continent.maxR = WORLD_HALF - 30;
  const terrain = buildTerrain([continent]);
  scene.add(terrain.group);
  const ground = terrain.sample;
  /** その地点でいちばん強い地方（海なら null） */
  const regionAt = (x, z) => ISLANDS[continent.regionIndexAt(x, z)];
  const islandAt = (x, z) => (ground(x, z) > 0.3 ? regionAt(x, z) : null);
  const sea = createSea(terrain.heightTex);
  scene.add(sea.mesh);
  const waterfall = createWaterfall(ground);
  scene.add(waterfall.group);

  const colliders = [];
  const updaters = [];

  // 始まりの島の建物など
  const altar = makeAltar(colliders);
  scene.add(altar.group);
  const ruins = makeRuins(colliders, ground);
  scene.add(ruins.group);
  const cave = makeCave(colliders);
  scene.add(cave.group);
  const village = buildVillage(colliders, ground);
  scene.add(village.group);

  // ほかの島の名所と、すべての島の自然
  ISLANDS.forEach((island, i) => {
    if (island.decorate) {
      const d = island.decorate(colliders, ground, seeded(island.cx * 7 + island.cz * 13 + 5));
      scene.add(d.group);
      updaters.push(d.update);
    }
    const weightAt = (x, z) => continent.weightOf(i, x, z);
    scene.add(makeNature(island, colliders, ground, terrain.slopeAt, seeded(island.cx * 3 + island.cz * 11 + 1), weightAt, lite ? 0.35 : 1));
  });

  // 川の橋
  const bridges = buildBridges(BRIDGES, colliders, ground);
  scene.add(bridges.group);

  const mapImage = buildMapImage([continent], ground, terrain.slopeAt, () => continent);
  const collidersNear = buildColliderGrid(colliders);
  const spawnPoint = new THREE.Vector3(PLACES.altar.x, PLACES.altar.h + 0.8, PLACES.altar.z);
  let t = 0;

  return {
    sun,
    spawnPoint,
    colliders,
    /** (x, z) のまわり（約 24m 以内）にある当たり判定だけを返す */
    collidersNear,
    mapImage,
    bridges: bridges.bridges,
    waterLevel: SEA_LEVEL,
    /** 地面の高さ */
    groundHeight: ground,
    slopeAt: terrain.slopeAt,
    /** その地点の地方（海なら null） */
    islandAt,
    /** その地点でいちばん強い地方（海の上でも返す） */
    regionAt,
    update(dt, focus, cameraPos) {
      t += dt;
      if (cameraPos) sky.position.copy(cameraPos);
      clouds.rotation.y += dt * 0.004;
      sea.update(t);
      if (focus) sea.mesh.position.set(focus.x, SEA_LEVEL, focus.z);
      waterfall.update(dt, t);
      altar.update(dt, t);
      village.update(t);
      cave.update(dt, focus);
      for (const u of updaters) u(dt, t, focus);
      ruins.crystal.rotation.y += dt * 0.8;
      ruins.crystal.position.y = ruins.crystalBaseY + Math.sin(t * 1.5) * 0.4;
      if (focus) {
        sun.target.position.copy(focus);
        sun.position.copy(focus).add(sunOffset);
      }
    },
  };
}

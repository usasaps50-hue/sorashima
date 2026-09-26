import * as THREE from 'three';
import { fbm, lerp, smoothstep, distToPaths, makeEdge } from '../terrain.js';
import { std, shadow, makePlacer, makeBatch } from '../props.js';
import { DIAG } from './layout.js';

// 水晶の高地（北西）：高い台地、天を突く石柱の森、光る水晶の群れ、浮かぶ巨大な水晶

const CX = -DIAG, CZ = -DIAG;
const PLACES = {
  heart: { name: '水晶の心臓', x: CX - 40, z: CZ - 40, r: 18, h: 26 },
  pillars: { name: '天柱の森', x: CX + 130, z: CZ + 110, r: 70 },
};
const HT = PLACES.heart, PF = PLACES.pillars;
const PATHS = [
  [[-340, -330], [CX + 180, CZ + 170], [CX + 40, CZ + 30], [HT.x + 20, HT.z + 18]], // 始まりの草原 → 水晶の心臓
  [[CX + 180, CZ + 170], [PF.x + 30, PF.z - 10]], // → 天柱の森
];

const C = {
  rock: new THREE.Color('#8a82a0'),
  rockDark: new THREE.Color('#6a6282'),
  moss: new THREE.Color('#6a9a6a'),
  crystal: new THREE.Color('#b8b0d8'),
  path: new THREE.Color('#b0a8c0'),
};

export const highlandsIsland = {
  id: 'highlands',
  name: '水晶の高地',
  cx: CX,
  cz: CZ,
  edge: makeEdge(400, [24, 0.2, 14, 1.1, 11, 2.6]),
  maxR: 460,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [],

  land(x, z) {
    // 高い台地。ところどころ岩がごつごつ盛り上がる
    let h = 14 + fbm(x / 60, z / 60) * 10 + fbm(x / 200 + 7, z / 200) * 14;
    const ridge = 1 - Math.abs(fbm(x / 40 + 9, z / 40) * 2 - 1); // 尾根
    h += ridge * ridge * 6;
    h = lerp(h, HT.h, smoothstep(HT.r + 16, HT.r, Math.hypot(x - HT.x, z - HT.z)));
    return h;
  },

  color(x, z, h, slope, out) {
    if (h < 1.7) return out.copy(C.rockDark);
    out.copy(C.moss).lerp(C.rock, smoothstep(0.35, 0.65, fbm(x / 14, z / 14)));
    if (fbm(x / 7 + 4, z / 7) > 0.68) out.lerp(C.crystal, 0.6); // 水晶の砂
    if (slope > 0.65) out.lerp(C.rockDark, smoothstep(0.65, 0.95, slope));
    const pd = distToPaths(x, z, PATHS);
    if (pd < 2.4) out.lerp(C.path, smoothstep(2.4, 1.4, pd));
    return out;
  },

  nature: {
    trees: { style: 'pine', count: 330, leafColors: [0x3a5a4a, 0x4a6a5a, 0x2f4a40], trunkColor: 0x4a3a34, maxSlope: 0.55 },
    rocks: 180,
    rockColor: 0x7a7090,
    grass: { count: 4500, color: 0x6a9a6a },
    flowers: { count: 900, colors: [0xc8b8ff, 0x9fe8ff, 0xffffff] },
    avoid: Object.values(PLACES).map((p) => [p.x, p.z, p.r + 4]),
  },

  enemies: {
    kumodama: { name: 'ショウダマ', tint: 0x9fb8e8, mult: 3.2, count: 32 },
    ishimori: { name: 'スイショウモリ', tint: 0x8a78b0, mult: 3.2, count: 11 },
  },

  decorate(colliders, ground, rand) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);

    // --- 天柱の森：天を突く石柱（上に苔と小さな木） ---
    const pillarMat = std(0x8a82a0);
    const mossMat = std(0x5f9a5a);
    const pineMat = std(0x3a5a4a);
    for (let i = 0, tries = 0; i < 22 && tries < 400; tries++) {
      const a = rand() * Math.PI * 2, r = Math.sqrt(rand()) * (PF.r + 60);
      const x = PF.x + Math.cos(a) * r, z = PF.z + Math.sin(a) * r;
      if (distToPaths(x, z, PATHS) < 10) continue;
      i++;
      const g = ground(x, z);
      const h = 22 + rand() * 38;
      const rad = 3.5 + rand() * 5;
      const p = shadow(new THREE.Mesh(new THREE.CylinderGeometry(rad * 0.8, rad, h, 7), pillarMat));
      p.position.set(x, g + h / 2 - 1, z);
      p.rotation.y = rand() * 3;
      group.add(p);
      const cap = shadow(new THREE.Mesh(new THREE.SphereGeometry(rad * 0.85, 8, 5, 0, Math.PI * 2, 0, Math.PI / 2), mossMat));
      cap.scale.y = 0.4;
      cap.position.set(x, g + h - 1, z);
      group.add(cap);
      for (let k = 0; k < 2; k++) {
        const tree = shadow(new THREE.Mesh(new THREE.ConeGeometry(1.2, 4, 6), pineMat));
        tree.position.set(x + (rand() - 0.5) * rad, g + h + 1.5, z + (rand() - 0.5) * rad);
        group.add(tree);
      }
      put.cyl(rad, h, x, g - 1, z, null, 0x8a82a0);
    }

    // --- 光る水晶の群れ ---
    const crystalMats = [
      new THREE.MeshStandardMaterial({ color: 0x9fe8ff, emissive: 0x3fb6e0, emissiveIntensity: 0.9, flatShading: true, transparent: true, opacity: 0.9 }),
      new THREE.MeshStandardMaterial({ color: 0xc8b8ff, emissive: 0x8060e0, emissiveIntensity: 0.9, flatShading: true, transparent: true, opacity: 0.9 }),
    ];
    const shards = crystalMats.map((m) => makeBatch(new THREE.OctahedronGeometry(1, 0), m, 200));
    for (let i = 0, tries = 0; i < 34 && tries < 600; tries++) {
      const x = CX + (rand() - 0.5) * 620, z = CZ + (rand() - 0.5) * 620;
      const g = ground(x, z);
      if (g < 6 || distToPaths(x, z, PATHS) < 6 || Math.hypot(x - HT.x, z - HT.z) < HT.r + 6) continue;
      i++;
      const b = shards[i % 2];
      for (let k = 0; k < 5; k++) {
        const s = 0.6 + rand() * 1.4;
        b.add(x + (rand() - 0.5) * 2.5, g + s, z + (rand() - 0.5) * 2.5, s * 0.55, s * 2.2, s * 0.55, (rand() - 0.5) * 0.7, rand() * 3, (rand() - 0.5) * 0.7);
      }
      put.cyl(1.8, 4, x, g - 0.5, z, null, i % 2 ? 0xc8b8ff : 0x9fe8ff);
    }
    shards.forEach((b) => { b.mesh.castShadow = false; group.add(b.finish()); });

    // --- 水晶の心臓：石の台座の上に浮かぶ、巨大な水晶 ---
    const y0 = HT.h;
    const stone = std(0xb0a8c0);
    put.cyl(11, 1.2, HT.x, y0 - 0.6, HT.z, stone, 0xb0a8c0, 'part', 16);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      put.cyl(0.8, 5, HT.x + Math.cos(a) * 12.5, y0 - 0.5, HT.z + Math.sin(a) * 12.5, stone, 0xb0a8c0, 'part', 6);
    }
    const heart = new THREE.Mesh(new THREE.OctahedronGeometry(3.4, 0), new THREE.MeshStandardMaterial({
      color: 0xd8f4ff, emissive: 0x6fb8ff, emissiveIntensity: 1.2, flatShading: true, transparent: true, opacity: 0.88,
    }));
    heart.scale.y = 1.7;
    heart.position.set(HT.x, y0 + 12, HT.z);
    group.add(heart);
    const orbit = [];
    for (let i = 0; i < 6; i++) {
      const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.8, 0), crystalMats[i % 2]);
      m.scale.y = 1.8;
      group.add(m);
      orbit.push(m);
    }
    const light = new THREE.PointLight(0x9fd0ff, 80, 60);
    light.position.set(HT.x, y0 + 12, HT.z);
    group.add(light);

    return {
      group,
      update(dt, t) {
        heart.rotation.y += dt * 0.5;
        heart.position.y = y0 + 12 + Math.sin(t) * 0.8;
        orbit.forEach((m, i) => {
          const a = t * 0.6 + (i / orbit.length) * Math.PI * 2;
          m.position.set(HT.x + Math.cos(a) * 8, y0 + 11 + Math.sin(t * 1.3 + i) * 1.5, HT.z + Math.sin(a) * 8);
          m.rotation.y += dt * 2;
        });
      },
    };
  },
};

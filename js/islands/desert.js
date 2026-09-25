import * as THREE from 'three';
import { fbm, lerp, smoothstep, distToPaths, applyCoast, makeEdge } from '../terrain.js';
import { std, shadow, makePlacer } from '../props.js';
import { makePalms } from '../nature.js';
import { D, BRIDGE_AT } from './layout.js';

// 陽炎の島（南）：砂丘・赤い岩の台地・オアシス・砂の神殿

const CX = 0, CZ = D;
const PLACES = {
  oasis: { name: '風待ちのオアシス', x: CX + 95, z: CZ + 47, r: 20 },
  temple: { name: '砂の神殿', x: CX - 114, z: CZ - 63, r: 16, h: 5 },
  arch: { name: '岩のアーチ', x: CX + 40, z: CZ - 190, r: 14 },
  camp: { name: '隊商の野営地', x: CX - 170, z: CZ + 130, r: 16, h: 4 },
};
const O = PLACES.oasis, T = PLACES.temple, AR = PLACES.arch, CP = PLACES.camp;
// 赤い岩の台地 [x, z, 半径, 高さ]
const MESAS = [
  [CX + 133, CZ - 152, 22, 17], [CX - 164, CZ + 133 - 60, 24, 14], [CX + 183, CZ + 196, 18, 22],
  [CX - 38, CZ + 247, 15, 12], [CX + 260, CZ + 40, 20, 16], [CX - 250, CZ - 40, 18, 15],
];
const PATHS = [
  [[BRIDGE_AT.south, CZ - 420], [BRIDGE_AT.south, CZ - 250], [-60, CZ - 120], [T.x + 8, T.z - 14]], // 街道 → 神殿
  [[-60, CZ - 120], [20, CZ - 20], [O.x - 22, O.z - 10]], // → オアシス
  [[BRIDGE_AT.south, CZ - 250], [AR.x - 10, AR.z - 20], [AR.x, AR.z + 20]], // → 岩のアーチ（くぐれる）
  [[-60, CZ - 120], [-130, CZ + 40], [CP.x + 10, CP.z - 14]], // → 野営地
];

const C = {
  sand: new THREE.Color('#ecd08e'),
  sandShade: new THREE.Color('#d9b872'),
  sandDeep: new THREE.Color('#c9a96c'),
  red1: new THREE.Color('#c4704a'),
  red2: new THREE.Color('#a85a3c'),
  red3: new THREE.Color('#d99a6c'),
  green: new THREE.Color('#7cbf5a'),
  path: new THREE.Color('#c09058'),
  stone: new THREE.Color('#d8c7a0'),
};

export const desertIsland = {
  id: 'desert',
  name: '陽炎の砂漠',
  cx: CX,
  cz: CZ,
  edge: makeEdge(350, [22, 2.1, 18, 0.8, 9, 1.5]),
  maxR: 435,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [],

  land(x, z) {
    // 風で流れる砂丘
    const n = fbm(x / 60, z / 60);
    let h = 3 + (Math.sin(x * 0.07 + z * 0.02 + n * 6) * 0.5 + 0.5) * 3.2 + fbm(x / 25, z / 25) * 2 + fbm(x / 160, z / 160 + 4) * 8;
    for (const [mx, mz, r, top] of MESAS) {
      h = lerp(h, top + 6 + (fbm(x / 10, z / 10) - 0.5), smoothstep(r + 5, r, Math.hypot(x - mx, z - mz)));
    }
    for (const p of [T, CP]) h = lerp(h, p.h, smoothstep(p.r + 14, p.r, Math.hypot(x - p.x, z - p.z)));
    h = lerp(h, -2, smoothstep(O.r + 10, O.r - 5, Math.hypot(x - O.x, z - O.z)));
    return h;
  },

  color(x, z, h, slope, out) {
    if (h < 1.7) return out.copy(C.sandDeep).lerp(C.sand, smoothstep(-2, 1.2, h));
    out.copy(C.sandShade).lerp(C.sand, fbm(x / 14, z / 14));
    out.offsetHSL(0, 0, Math.sin(x * 0.9 + z * 0.35 + fbm(x / 5, z / 5) * 4) * 0.015); // 風紋
    // 台地の岩肌（高さで縞模様）
    if (h > 15 || slope > 0.7) {
      const band = Math.floor(h / 2.2) % 3;
      out.copy(band === 0 ? C.red1 : band === 1 ? C.red2 : C.red3);
    }
    const od = Math.hypot(x - O.x, z - O.z);
    if (od < O.r + 9) out.lerp(C.green, smoothstep(O.r + 9, O.r + 3, od));
    if (Math.hypot(x - T.x, z - T.z) < T.r - 2) out.lerp(C.stone, 0.6);
    const pd = distToPaths(x, z, PATHS);
    if (pd < 2.4) out.lerp(C.path, smoothstep(2.4, 1.4, pd) * 0.7);
    return out;
  },

  nature: {
    trees: { style: 'cactus', count: 250, leafColors: [0x5f9f55], minH: 2.4, maxSlope: 0.4 },
    rocks: 150,
    rockColor: 0xc98a64,
    grass: { count: 3000, color: 0xc9b36a },
    avoid: [
      ...Object.values(PLACES).map((p) => [p.x, p.z, p.r + 6]),
      ...MESAS.map(([x, z, r]) => [x, z, r + 6]),
    ],
  },

  enemies: {
    kumodama: { name: 'スナダマ', tint: 0xc9a46b, mult: 2.2, count: 28 },
    ishimori: { name: 'スナモリ', tint: 0xb07a55, mult: 2.2, count: 9 },
  },

  decorate(colliders, ground, rand) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);
    const stone = std(0xe0cfa6);
    const stoneDark = std(0xc4b08a);

    // --- 砂の神殿 ---
    const y0 = T.h;
    const floor = shadow(new THREE.Mesh(new THREE.BoxGeometry(22, 0.8, 18), stoneDark));
    floor.position.set(T.x, y0 - 0.1, T.z);
    group.add(floor);
    colliders.push({ box: new THREE.Box3().setFromObject(floor), color: 0xc4b08a, kind: 'part' });
    const heights = [8, 8, 3, 8, 5, 8, 8, 2.5, 8, 6];
    for (let i = 0; i < 10; i++) {
      const side = i < 5 ? -1 : 1;
      const x = T.x - 8 + (i % 5) * 4, z = T.z + side * 7;
      const h = heights[i];
      put.cyl(0.9, h, x, y0 + 0.3, z, stone, 0xe0cfa6, 'part', 8);
      if (h >= 8) {
        const cap = shadow(new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.6, 2.2), stoneDark));
        cap.position.set(x, y0 + 0.3 + h + 0.3, z);
        group.add(cap);
      }
    }
    const beam = shadow(new THREE.Mesh(new THREE.BoxGeometry(13, 0.9, 2.2), stoneDark));
    beam.position.set(T.x - 2, y0 + 9.3, T.z - 7);
    group.add(beam);
    put.box(18, 9, 1.6, T.x, y0 + 0.3, T.z - 11, stone, 0xe0cfa6);
    const door = new THREE.Mesh(new THREE.BoxGeometry(4.5, 6, 0.3), std(0x8a6a44));
    door.position.set(T.x, y0 + 3.3, T.z - 10.1);
    group.add(door);
    const sun = new THREE.Mesh(new THREE.CircleGeometry(1.2, 12), new THREE.MeshStandardMaterial({ color: 0xffd76a, emissive: 0xe0a030, emissiveIntensity: 0.8 }));
    sun.position.set(T.x, y0 + 7.2, T.z - 10.15);
    group.add(sun);
    const head = shadow(new THREE.Mesh(new THREE.BoxGeometry(4, 4.5, 4), stone));
    head.position.set(T.x + 13, y0 + 1.2, T.z + 2);
    head.rotation.set(0.15, -0.5, 0.1);
    group.add(head);
    put.cyl(2.8, 4, T.x + 13, y0 - 0.5, T.z + 2, null, 0xe0cfa6);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x9ff6ea, emissive: 0x3fd6c0, emissiveIntensity: 1 });
    for (const s of [-1, 1]) {
      const e = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 0.1), eyeMat);
      e.position.set(s * 0.9, 0.6, 2.02);
      head.add(e);
    }

    // --- オアシスのヤシと葦 ---
    const palms = makePalms(18);
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * Math.PI * 2 + rand() * 0.3;
      const r = O.r + 3 + rand() * 6;
      const x = O.x + Math.cos(a) * r, z = O.z + Math.sin(a) * r;
      const g = ground(x, z);
      if (g < 0.6) continue;
      palms.add(x, g - 0.2, z, -Math.cos(a), -Math.sin(a), rand);
      put.cyl(0.45, 7, x, g - 1, z, null, 0x4fae55, 'tree');
    }
    palms.finish(group);
    const reedMat = std(0x6f9f4a);
    for (let i = 0; i < 70; i++) {
      const a = rand() * Math.PI * 2, r = O.r - 2 + rand() * 4;
      const x = O.x + Math.cos(a) * r, z = O.z + Math.sin(a) * r;
      const reed = new THREE.Mesh(new THREE.ConeGeometry(0.08, 1.8, 3), reedMat);
      reed.position.set(x, Math.max(ground(x, z), 0) + 0.8, z);
      reed.rotation.z = (rand() - 0.5) * 0.3;
      group.add(reed);
    }

    // --- 岩のアーチ（下をくぐれる） ---
    const red = std(0xc4704a);
    const ay = ground(AR.x, AR.z);
    for (const s of [-1, 1]) {
      const px = AR.x + s * 7;
      const pillar = shadow(new THREE.Mesh(new THREE.CylinderGeometry(2.2, 3, 12, 7), red));
      pillar.position.set(px, ay + 5.5, AR.z);
      group.add(pillar);
      put.cyl(2.6, 12, px, ay - 1, AR.z, null, 0xc4704a);
    }
    const span = shadow(new THREE.Mesh(new THREE.TorusGeometry(7, 2.2, 7, 14, Math.PI), std(0xb0603c)));
    span.position.set(AR.x, ay + 10.5, AR.z);
    group.add(span);

    // --- 隊商の野営地：テント・たき火・荷物 ---
    const cy = CP.h;
    const tentColors = [0xd9644a, 0x2bb5a0, 0xf4c25b];
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + 0.4;
      const x = CP.x + Math.cos(a) * 8, z = CP.z + Math.sin(a) * 8;
      const tent = shadow(new THREE.Mesh(new THREE.ConeGeometry(3.4, 4.5, 6), std(tentColors[i])));
      tent.position.set(x, cy + 2.25, z);
      const flap = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 2.2), std(0x5a3a24, { side: THREE.DoubleSide }));
      const toCenter = Math.atan2(CP.x - x, CP.z - z);
      flap.position.set(x + Math.sin(toCenter) * 2.1, cy + 1.1, z + Math.cos(toCenter) * 2.1);
      flap.rotation.y = toCenter;
      group.add(tent, flap);
      put.cyl(3, 4.5, x, cy - 0.5, z, null, tentColors[i], 'house');
    }
    // たき火
    const logMat = std(0x6b4630);
    for (let i = 0; i < 4; i++) {
      const log = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 1.8, 6), logMat));
      log.position.set(CP.x, cy + 0.25, CP.z);
      log.rotation.set(Math.PI / 2 - 0.3, (i / 4) * Math.PI, 0);
      group.add(log);
    }
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.6, 1.6, 6), new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.9 }));
    flame.position.set(CP.x, cy + 0.9, CP.z);
    const fireLight = new THREE.PointLight(0xff9a40, 30, 18);
    fireLight.position.set(CP.x, cy + 1.5, CP.z);
    group.add(flame, fireLight);
    const crate = std(0xc49a6c);
    for (const [dx, dz] of [[4, -3], [4.9, -2.2], [-3, 4]]) {
      const c = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), crate));
      c.position.set(CP.x + dx, cy + 0.55, CP.z + dz);
      c.rotation.y = dx;
      group.add(c);
    }
    const rug = new THREE.Mesh(new THREE.PlaneGeometry(3, 2), std(0x9a5fb0));
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(CP.x - 3.5, cy + 0.05, CP.z - 2);
    group.add(rug);

    // 陽炎（台地の上のちらつく光）
    const shimmer = [];
    for (const [mx, mz, r, top] of MESAS) {
      const m = new THREE.Mesh(new THREE.CircleGeometry(r * 0.5, 16), new THREE.MeshBasicMaterial({ color: 0xfff1d0, transparent: true, opacity: 0.12, depthWrite: false }));
      m.rotation.x = -Math.PI / 2;
      m.position.set(mx, top + 6.6, mz);
      group.add(m);
      shimmer.push(m);
    }

    return {
      group,
      update(dt, t) {
        shimmer.forEach((m, i) => { m.material.opacity = 0.08 + Math.sin(t * 2 + i) * 0.05; });
        flame.scale.set(1 + Math.sin(t * 13) * 0.1, 1 + Math.sin(t * 9) * 0.18, 1 + Math.cos(t * 11) * 0.1);
        fireLight.intensity = 26 + Math.sin(t * 15) * 6;
      },
    };
  },
};

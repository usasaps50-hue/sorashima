import * as THREE from 'three';
import { fbm, lerp, smoothstep, bump, distToPaths, applyCoast, makeEdge } from '../terrain.js';
import { std, shadow, makePlacer } from '../props.js';
import { house } from '../village.js';
import { D, BRIDGE_AT } from './layout.js';

// 深緑の島（東）：深い森と千年樹

const CX = D, CZ = 0;
const PLACES = {
  greatTree: { name: '千年樹', x: CX, z: CZ, r: 22, h: 8 },
  mushroom: { name: 'キノコの谷', x: CX + 133, z: CZ + 152, r: 30 },
  spring: { name: '妖精の泉', x: CX - 150, z: CZ - 170, r: 14, h: 5 },
  cabin: { name: '木こりの小屋', x: CX + 170, z: CZ - 140, r: 16, h: 6 },
};
const T = PLACES.greatTree, M = PLACES.mushroom, SP = PLACES.spring, CB = PLACES.cabin;
const PATHS = [
  [[CX - 420, BRIDGE_AT.east], [CX - 200, BRIDGE_AT.east - 2], [CX - 60, 5], [T.x - 22, T.z]], // 街道 → 千年樹
  [[CX - 60, 5], [CX + 40, 80], [M.x - 20, M.z - 14]], // → キノコの谷
  [[CX - 200, BRIDGE_AT.east - 2], [CX - 180, -90], [SP.x - 4, SP.z + 16]], // → 妖精の泉
  [[CX - 60, 5], [CX + 60, -70], [CB.x - 16, CB.z + 4]], // → 木こりの小屋
];

const C = {
  sand: new THREE.Color('#e6d3a0'),
  sandDeep: new THREE.Color('#c4ad7c'),
  moss: new THREE.Color('#5f9a4a'),
  dark: new THREE.Color('#3f7a3c'),
  clearing: new THREE.Color('#86c263'),
  valley: new THREE.Color('#6f8a6a'),
  path: new THREE.Color('#a8845a'),
  rock: new THREE.Color('#7f7f72'),
};

export const forestIsland = {
  id: 'forest',
  name: '深緑の森',
  cx: CX,
  cz: CZ,
  edge: makeEdge(420, [26, 1.2, 16, 0.3, 10, 2.4]),
  maxR: 480,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [],

  land(x, z) {
    let h = 4 + fbm(x / 35, z / 35) * 6 + fbm(x / 140, z / 140 + 9) * 10;
    h += bump(x, z, CX + 174, CZ - 63, 82, 8);
    h += bump(x, z, CX - 60, CZ + 200, 90, 9);
    h += bump(x, z, CX - 230, CZ + 90, 70, 7);
    for (const p of [T, SP, CB]) h = lerp(h, p.h, smoothstep(p.r + 16, p.r, Math.hypot(x - p.x, z - p.z)));
    h = lerp(h, 3, smoothstep(M.r + 16, M.r - 4, Math.hypot(x - M.x, z - M.z)));
    return h;
  },

  color(x, z, h, slope, out) {
    if (h < 1.7) return out.copy(C.sandDeep).lerp(C.sand, smoothstep(-2, 1.2, h));
    const n = fbm(x / 8, z / 8);
    out.copy(C.dark).lerp(C.moss, n);
    out.lerp(C.sand, smoothstep(2.4, 1.7, h));
    out.lerp(C.clearing, smoothstep(T.r + 6, T.r - 6, Math.hypot(x - T.x, z - T.z)) * 0.8);
    out.lerp(C.clearing, smoothstep(SP.r + 6, SP.r - 2, Math.hypot(x - SP.x, z - SP.z)) * 0.7);
    out.lerp(C.valley, smoothstep(M.r + 8, M.r - 6, Math.hypot(x - M.x, z - M.z)));
    const pd = distToPaths(x, z, PATHS);
    if (pd < 2.4) out.lerp(C.path, smoothstep(2.4, 1.4, pd));
    if (slope > 0.75) out.lerp(C.rock, smoothstep(0.75, 1.1, slope));
    return out;
  },

  nature: {
    trees: { style: 'round', count: 1250, leafColors: [0x3f7a3c, 0x2f6b3a, 0x4f8f45, 0x5a9a50], trunkColor: 0x6b4630 },
    palms: 30,
    rocks: 130,
    rockColor: 0x7f7f72,
    grass: { count: 9500, color: 0x4f8f3f },
    flowers: { count: 2500, colors: [0xcfe8ff, 0xffffff, 0x9fd0ff] },
    avoid: Object.values(PLACES).map((p) => [p.x, p.z, p.r + 4]),
  },

  enemies: {
    kumodama: { name: 'モリダマ', tint: 0x4f8f5a, mult: 1.6, count: 34 },
    ishimori: { name: 'コケイワ', tint: 0x6f7f5a, mult: 1.6, count: 11 },
  },

  decorate(colliders, ground, rand) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);
    const y0 = T.h;

    // --- 千年樹：太い幹・根・巨大な葉 ---
    const bark = std(0x6b4a33, { roughness: 1 });
    const trunk = shadow(new THREE.Mesh(new THREE.CylinderGeometry(3.6, 6.5, 34, 10), bark));
    trunk.position.set(T.x, y0 + 17, T.z);
    group.add(trunk);
    put.cyl(6, 40, T.x, y0 - 1, T.z, null, 0x6b4a33);
    for (let i = 0; i < 7; i++) {
      const a = (i / 7) * Math.PI * 2 + 0.3;
      const root = shadow(new THREE.Mesh(new THREE.ConeGeometry(1.6, 9, 6), bark));
      root.position.set(T.x + Math.cos(a) * 7, y0 + 1, T.z + Math.sin(a) * 7);
      root.rotation.set(Math.sin(a) * 1.2, 0, -Math.cos(a) * 1.2);
      group.add(root);
    }
    const leaf = [std(0x3f8a45), std(0x4f9a4a), std(0x2f7a40)];
    for (let i = 0; i < 12; i++) {
      const a = rand() * Math.PI * 2, r = i < 3 ? 0 : 6 + rand() * 10;
      const s = 9 + rand() * 6;
      const m = shadow(new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), leaf[i % 3]));
      m.scale.setScalar(s);
      m.position.set(T.x + Math.cos(a) * r, y0 + 32 + rand() * 12 - r * 0.3, T.z + Math.sin(a) * r);
      m.rotation.set(rand() * 3, rand() * 3, 0);
      group.add(m);
    }
    const shrineStone = std(0xcfc6b6);
    const altar = shadow(new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.2, 1.6), shrineStone));
    altar.position.set(T.x - 9, y0 + 0.6, T.z);
    altar.rotation.y = Math.PI / 2;
    group.add(altar);
    put.cyl(1.4, 1.2, T.x - 9, y0, T.z, null, 0xcfc6b6);
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 8), new THREE.MeshStandardMaterial({ color: 0xc8ffb0, emissive: 0x8fe070, emissiveIntensity: 1.3 }));
    orb.position.set(T.x - 9, y0 + 1.7, T.z);
    group.add(orb);

    // --- 光るキノコの谷 ---
    const caps = [
      new THREE.MeshStandardMaterial({ color: 0x9ff6ea, emissive: 0x3fd6c0, emissiveIntensity: 0.9, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xffb8e0, emissive: 0xd060a8, emissiveIntensity: 0.8, flatShading: true }),
      new THREE.MeshStandardMaterial({ color: 0xfff1a8, emissive: 0xe0b040, emissiveIntensity: 0.7, flatShading: true }),
    ];
    const stemMat = std(0xf2ead8);
    for (let i = 0; i < 32; i++) {
      const a = rand() * Math.PI * 2, r = rand() * (M.r + 6);
      const x = M.x + Math.cos(a) * r, z = M.z + Math.sin(a) * r;
      const g = ground(x, z);
      const s = 0.8 + rand() * 2.8;
      const stem = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.25 * s, 0.35 * s, 2 * s, 8), stemMat));
      stem.position.set(x, g + s, z);
      const cap = shadow(new THREE.Mesh(new THREE.SphereGeometry(1.1 * s, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), caps[i % 3]));
      cap.scale.y = 0.7;
      cap.position.set(x, g + 2 * s - 0.1, z);
      group.add(stem, cap);
      if (s > 1.4) put.cyl(0.35 * s, 2 * s + 0.6, x, g - 0.5, z, null, caps[i % 3].color.getHex());
    }
    const glow = new THREE.PointLight(0x7ff0e0, 60, 45);
    glow.position.set(M.x, ground(M.x, M.z) + 5, M.z);
    group.add(glow);

    // --- 妖精の泉：光る水面と、まわりを舞う光 ---
    const springWater = new THREE.Mesh(new THREE.CircleGeometry(8, 28), new THREE.MeshStandardMaterial({
      color: 0x9ff6ea, emissive: 0x3fb6c0, emissiveIntensity: 0.6, transparent: true, opacity: 0.85, roughness: 0.1,
    }));
    springWater.rotation.x = -Math.PI / 2;
    springWater.position.set(SP.x, SP.h + 0.25, SP.z);
    group.add(springWater);
    const ringStone = std(0xcfc6b6);
    for (let i = 0; i < 14; i++) {
      const a = (i / 14) * Math.PI * 2;
      const s = 0.7 + rand() * 0.5;
      const st = shadow(new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), ringStone));
      st.position.set(SP.x + Math.cos(a) * 8.8, SP.h + s * 0.4, SP.z + Math.sin(a) * 8.8);
      group.add(st);
    }
    const sparkCount = 40;
    const sparkPos = new Float32Array(sparkCount * 3);
    const sparkGeo = new THREE.BufferGeometry();
    sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkPos, 3));
    const sparks = new THREE.Points(sparkGeo, new THREE.PointsMaterial({ color: 0xffe8ff, size: 0.45, transparent: true, opacity: 0.9, depthWrite: false }));
    sparks.frustumCulled = false;
    group.add(sparks);
    const springLight = new THREE.PointLight(0xb8fff0, 25, 20);
    springLight.position.set(SP.x, SP.h + 2, SP.z);
    group.add(springLight);

    // --- 木こりの小屋：丸太小屋・薪の山・切り株と斧 ---
    const cabin = house({ w: 8, d: 6.5, wall: 0x9a6a44, roof: 0x5a7a44, trim: 0x5a3a24 });
    cabin.position.set(CB.x, CB.h, CB.z);
    cabin.rotation.y = -Math.PI / 2; // ドアを西（道の方）へ
    group.add(cabin);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(8.4, 7, 6.9));
    hit.position.set(CB.x, CB.h + 3.5, CB.z);
    hit.rotation.y = -Math.PI / 2;
    hit.updateMatrixWorld(true);
    colliders.push({ box: new THREE.Box3().setFromObject(hit), color: 0x5a7a44, kind: 'house' });
    const logMat = std(0x8a5a3b);
    for (let row = 0; row < 3; row++) {
      for (let i = 0; i < 4 - row; i++) {
        const log = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 3.2, 8), logMat));
        log.rotation.x = Math.PI / 2;
        log.position.set(CB.x - 8 + i * 0.85 + row * 0.42, CB.h + 0.4 + row * 0.72, CB.z + 7);
        group.add(log);
      }
    }
    colliders.push({
      box: new THREE.Box3(new THREE.Vector3(CB.x - 8.5, CB.h - 0.5, CB.z + 5.3), new THREE.Vector3(CB.x - 4.9, CB.h + 2, CB.z + 8.7)),
      color: 0x8a5a3b,
      kind: 'prop',
    });
    const stump = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.95, 0.9, 10), logMat));
    stump.position.set(CB.x - 7, CB.h + 0.45, CB.z - 5);
    const axeHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.4, 6), std(0x6b4630));
    axeHandle.position.set(CB.x - 7, CB.h + 1.4, CB.z - 5);
    axeHandle.rotation.z = 0.4;
    const axeHead = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.08), std(0xc0c8d0, { metalness: 0.6 }));
    axeHead.position.set(CB.x - 6.8, CB.h + 1.0, CB.z - 5);
    group.add(stump, axeHandle, axeHead);
    put.cyl(0.95, 0.9, CB.x - 7, CB.h - 0.2, CB.z - 5, null, 0x8a5a3b);

    // --- ホタル（千年樹のまわり） ---
    const count = 180;
    const pos = new Float32Array(count * 3);
    const seeds = [];
    for (let i = 0; i < count; i++) {
      const a = rand() * Math.PI * 2, r = 8 + rand() * 60;
      const x = CX + Math.cos(a) * r, z = CZ + Math.sin(a) * r;
      seeds.push({ x, z, y: ground(x, z) + 1 + rand() * 4, p: rand() * 10 });
    }
    const flyGeo = new THREE.BufferGeometry();
    flyGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const flies = new THREE.Points(flyGeo, new THREE.PointsMaterial({ color: 0xdfff8a, size: 0.35, transparent: true, opacity: 0.9, depthWrite: false }));
    flies.frustumCulled = false;
    group.add(flies);

    return {
      group,
      update(dt, t) {
        orb.position.y = y0 + 1.7 + Math.sin(t * 2) * 0.15;
        for (let i = 0; i < count; i++) {
          const s = seeds[i];
          pos[i * 3] = s.x + Math.sin(t * 0.7 + s.p) * 1.5;
          pos[i * 3 + 1] = s.y + Math.sin(t * 1.3 + s.p * 2) * 0.8;
          pos[i * 3 + 2] = s.z + Math.cos(t * 0.6 + s.p) * 1.5;
        }
        flyGeo.attributes.position.needsUpdate = true;
        flies.material.opacity = 0.6 + Math.sin(t * 3) * 0.3;
        // 泉のまわりをくるくる舞う光
        for (let i = 0; i < sparkCount; i++) {
          const a = t * 0.6 + (i / sparkCount) * Math.PI * 2;
          const r = 3 + (i % 5) * 1.1;
          sparkPos[i * 3] = SP.x + Math.cos(a * (1 + (i % 3) * 0.2)) * r;
          sparkPos[i * 3 + 1] = SP.h + 1 + Math.sin(t * 2 + i) * 0.8 + (i % 4) * 0.6;
          sparkPos[i * 3 + 2] = SP.z + Math.sin(a * (1 + (i % 3) * 0.2)) * r;
        }
        sparkGeo.attributes.position.needsUpdate = true;
        springWater.material.emissiveIntensity = 0.5 + Math.sin(t * 1.5) * 0.2;
      },
    };
  },
};

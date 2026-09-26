import * as THREE from 'three';
import { fbm, lerp, smoothstep, distToPaths, makeEdge } from '../terrain.js';
import { std, shadow, makePlacer } from '../props.js';
import { DIAG } from './layout.js';

// 花冠の丘陵（北東）：パステル色の木と一面の花畑、巨大な花、風鈴の塔、花の湖

const CX = DIAG, CZ = -DIAG;
const PLACES = {
  garden: { name: '大輪の花畑', x: CX + 40, z: CZ - 30, r: 34 },
  tower: { name: '風鈴の塔', x: CX + 170, z: CZ + 120, r: 12, h: 12 },
  // 始まりの草原から流れてくる川が、この湖に注ぐ
  lake: { name: '花の湖', x: CX - 275, z: CZ + 180, r: 30 },
};
const G = PLACES.garden, TW = PLACES.tower, LK = PLACES.lake;
const PATHS = [
  [[330, -330], [CX - 140, CZ + 110], [G.x - 30, G.z + 20]], // 始まりの草原 → 花畑
  [[CX - 140, CZ + 110], [LK.x + 20, LK.z - 30]], // → 花の湖
  [[G.x - 30, G.z + 20], [CX + 110, CZ + 90], [TW.x - 12, TW.z]], // → 風鈴の塔
];

const C = {
  grass: new THREE.Color('#8fd46b'),
  grassDark: new THREE.Color('#6fb850'),
  pink: new THREE.Color('#f4b8cf'),
  yellow: new THREE.Color('#f4e08a'),
  lilac: new THREE.Color('#c9b4ec'),
  sand: new THREE.Color('#efdcae'),
  path: new THREE.Color('#d8b882'),
};
const tmp = new THREE.Color();

export const flowersIsland = {
  id: 'flowers',
  name: '花冠の丘陵',
  cx: CX,
  cz: CZ,
  edge: makeEdge(400, [26, 0.9, 14, 2.2, 10, 0.4]),
  maxR: 460,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [],

  land(x, z) {
    // ふっくらとなだらかな丘
    let h = 5 + fbm(x / 50, z / 50) * 8 + fbm(x / 180 + 11, z / 180) * 12;
    h = lerp(h, TW.h, smoothstep(TW.r + 16, TW.r, Math.hypot(x - TW.x, z - TW.z)));
    h = lerp(h, -3, smoothstep(LK.r + 14, LK.r - 4, Math.hypot(x - LK.x, z - LK.z)));
    return h;
  },

  color(x, z, h, slope, out) {
    if (h < 1.7) return out.copy(C.sand);
    out.copy(C.grassDark).lerp(C.grass, fbm(x / 9, z / 9));
    // 花の色のまだら模様（ピンク・黄・薄紫）
    const n = fbm(x / 22 + 3, z / 22);
    const m = fbm(x / 30 - 7, z / 30 + 2);
    const petal = n > 0.62 ? C.pink : m > 0.64 ? C.yellow : m < 0.32 ? C.lilac : null;
    if (petal) out.lerp(petal, 0.55);
    if (Math.hypot(x - G.x, z - G.z) < G.r) out.lerp(tmp.copy(C.pink).lerp(C.yellow, fbm(x / 6, z / 6)), 0.5);
    const pd = distToPaths(x, z, PATHS);
    if (pd < 2.4) out.lerp(C.path, smoothstep(2.4, 1.4, pd));
    return out;
  },

  nature: {
    trees: { style: 'round', count: 420, leafColors: [0xf2a6c2, 0xc8a8f0, 0x9fd66b, 0xffd0e0], accentChance: 0.25 },
    rocks: 60,
    rockColor: 0xc9c0b8,
    grass: { count: 8000, color: 0x7cc25a },
    flowers: { count: 11000, colors: [0xff8fb0, 0xffd45c, 0xb9a6ff, 0xffffff, 0xff6a6a, 0xffa8e0] },
    avoid: Object.values(PLACES).map((p) => [p.x, p.z, p.r + 4]),
  },

  enemies: {
    kumodama: { name: 'ハナダマ', tint: 0xf2a6c2, mult: 1.3, count: 32 },
    ishimori: { name: 'ツタイワ', tint: 0x8fb080, mult: 1.3, count: 9 },
  },

  decorate(colliders, ground, rand) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);

    // --- 巨大な花 ---
    const stemMat = std(0x5fae4a);
    const petalColors = [0xff8fb0, 0xffd45c, 0xb9a6ff, 0xff6a6a, 0xffffff];
    const heads = [];
    for (let i = 0; i < 12; i++) {
      const a = rand() * Math.PI * 2, r = rand() * G.r;
      const x = G.x + Math.cos(a) * r, z = G.z + Math.sin(a) * r;
      const g = ground(x, z);
      const h = 7 + rand() * 8;
      const stem = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.5, h, 7), stemMat));
      stem.position.set(x, g + h / 2 - 0.3, z);
      group.add(stem);
      put.cyl(0.6, h, x, g - 0.5, z, null, 0x5fae4a, 'tree');
      // 葉
      const leaf = shadow(new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), stemMat));
      leaf.scale.set(1.6, 0.2, 0.7);
      leaf.position.set(x + 1, g + h * 0.4, z);
      leaf.rotation.z = -0.4;
      group.add(leaf);
      // 花びらと花の中心
      const head = new THREE.Group();
      head.position.set(x, g + h, z);
      head.rotation.set((rand() - 0.5) * 0.5, rand() * 3, (rand() - 0.5) * 0.5);
      const petalMat = std(petalColors[i % petalColors.length]);
      const size = 1.6 + rand() * 1.2;
      for (let k = 0; k < 7; k++) {
        const p = shadow(new THREE.Mesh(new THREE.SphereGeometry(1, 10, 6), petalMat));
        const pa = (k / 7) * Math.PI * 2;
        p.scale.set(size, 0.25, size * 0.55);
        p.position.set(Math.cos(pa) * size, 0, Math.sin(pa) * size);
        p.rotation.y = -pa;
        head.add(p);
      }
      const center = new THREE.Mesh(new THREE.CylinderGeometry(size * 0.55, size * 0.5, 0.5, 12), new THREE.MeshStandardMaterial({ color: 0xffc83a, emissive: 0x8a5a00, emissiveIntensity: 0.4 }));
      head.add(center);
      group.add(head);
      heads.push({ head, p: rand() * 10 });
    }

    // --- 風鈴の塔：白い塔と、揺れる風鈴 ---
    const white = std(0xf6f0e4);
    put.cyl(2.8, 16, TW.x, TW.h - 0.5, TW.z, white, 0xf6f0e4, 'part', 10);
    const deck = shadow(new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.6, 0.6, 10), white));
    deck.position.set(TW.x, TW.h + 15.8, TW.z);
    group.add(deck);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const post = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.4, 4, 0.4), white));
      post.position.set(TW.x + Math.cos(a) * 3, TW.h + 18, TW.z + Math.sin(a) * 3);
      group.add(post);
    }
    const roof = shadow(new THREE.Mesh(new THREE.ConeGeometry(4.4, 4, 10), std(0x2bb5a0)));
    roof.position.set(TW.x, TW.h + 22, TW.z);
    group.add(roof);
    const chimes = [];
    const glass = [0x9fe8ff, 0xffb8e0, 0xfff1a8, 0xc8b8ff];
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const pivot = new THREE.Group();
      pivot.position.set(TW.x + Math.cos(a) * 3.8, TW.h + 19.8, TW.z + Math.sin(a) * 3.8);
      const bell = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: glass[i % 4], transparent: true, opacity: 0.8, emissive: glass[i % 4], emissiveIntensity: 0.3 }));
      bell.position.y = -0.8;
      const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 0.9), std(0xffffff, { side: THREE.DoubleSide }));
      strip.position.y = -1.6;
      pivot.add(bell, strip);
      group.add(pivot);
      chimes.push({ pivot, p: i });
    }

    // --- 蝶（色とりどりの光の粒が、ひらひら舞う） ---
    const count = 90;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const seeds = [];
    const palette = [0xff8fb0, 0xffd45c, 0xb9a6ff, 0x9fe8ff, 0xffffff].map((c) => new THREE.Color(c));
    for (let i = 0; i < count; i++) {
      const a = rand() * Math.PI * 2, r = rand() * 260;
      const x = CX + Math.cos(a) * r, z = CZ + Math.sin(a) * r;
      seeds.push({ x, z, y: Math.max(ground(x, z), 0) + 1.5 + rand() * 3, p: rand() * 10 });
      const c = palette[i % palette.length];
      cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
    }
    const bGeo = new THREE.BufferGeometry();
    bGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    bGeo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const butterflies = new THREE.Points(bGeo, new THREE.PointsMaterial({ size: 0.45, vertexColors: true, transparent: true, opacity: 0.95, depthWrite: false }));
    butterflies.frustumCulled = false;
    group.add(butterflies);

    return {
      group,
      update(dt, t) {
        for (const { head, p } of heads) head.rotation.z = Math.sin(t * 0.8 + p) * 0.08;
        for (const { pivot, p } of chimes) {
          pivot.rotation.x = Math.sin(t * 2.2 + p) * 0.25;
          pivot.rotation.z = Math.cos(t * 1.7 + p) * 0.2;
        }
        for (let i = 0; i < count; i++) {
          const s = seeds[i];
          pos[i * 3] = s.x + Math.sin(t * 0.5 + s.p) * 6;
          pos[i * 3 + 1] = s.y + Math.abs(Math.sin(t * 6 + s.p * 3)) * 0.5;
          pos[i * 3 + 2] = s.z + Math.cos(t * 0.4 + s.p) * 6;
        }
        bGeo.attributes.position.needsUpdate = true;
      },
    };
  },
};

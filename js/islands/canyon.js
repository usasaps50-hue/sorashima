import * as THREE from 'three';
import { fbm, lerp, smoothstep, distToPaths, distToPolyline, makeEdge } from '../terrain.js';
import { std, shadow, makePlacer } from '../props.js';
import { DIAG } from './layout.js';

// 紅葉の渓谷（南西）：赤や黄色の紅葉、川の流れる深い谷、谷にかかる吊り橋、朱色の鳥居と社

const CX = -DIAG, CZ = DIAG;
// 谷の通り道（西北西 → 東南東）
const GORGE = [[CX - 330, CZ - 150], [CX - 120, CZ - 60], [CX, CZ - 20], [CX + 150, CZ + 40], [CX + 320, CZ + 110]];
// 吊り橋をかける場所（谷の上、x = CX の南北の線）
export const CANYON_BRIDGE = { x: CX, z: CZ - 20 };
const PLACES = {
  gorge: { name: '紅葉の吊り橋', x: CX, z: CZ - 20, r: 20 },
  shrine: { name: '紅葉の社', x: CX - 150, z: CZ + 150, r: 16, h: 12 },
};
const SH = PLACES.shrine;
const PATHS = [
  [[-330, 330], [CX + 30, CZ - 110], [CX, CZ - 62]], // 始まりの草原 → 吊り橋の北のたもと
  [[CX, CZ + 22], [CX - 70, CZ + 100], [SH.x + 14, SH.z - 6]], // 吊り橋の南 → 社
];

const C = {
  gold: new THREE.Color('#c0a450'),
  dry: new THREE.Color('#a89048'),
  leaves: new THREE.Color('#d0703a'),
  red: new THREE.Color('#c04a30'),
  rock: new THREE.Color('#a06c4a'),
  rockDark: new THREE.Color('#7c5038'),
  path: new THREE.Color('#c8a070'),
};

export const canyonIsland = {
  id: 'canyon',
  name: '紅葉の渓谷',
  cx: CX,
  cz: CZ,
  edge: makeEdge(400, [22, 2.4, 16, 1.3, 10, 0.7]),
  maxR: 460,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [],

  land(x, z) {
    let h = 9 + fbm(x / 45, z / 45) * 6 + fbm(x / 170 + 3, z / 170) * 10;
    h = lerp(h, SH.h, smoothstep(SH.r + 14, SH.r, Math.hypot(x - SH.x, z - SH.z)));
    // 深い谷（底は川になる）
    h = lerp(h, -2.5, smoothstep(34, 9, distToPolyline(x, z, GORGE)));
    return h;
  },

  color(x, z, h, slope, out) {
    if (h < 1.7) return out.copy(C.rockDark);
    out.copy(C.dry).lerp(C.gold, fbm(x / 9, z / 9));
    // 落ち葉のじゅうたん
    const n = fbm(x / 16 + 8, z / 16);
    if (n > 0.55) out.lerp(n > 0.66 ? C.red : C.leaves, smoothstep(0.55, 0.7, n) * 0.8);
    // 谷の岩肌（赤みがかった縞）
    if (slope > 0.6) out.lerp(Math.floor(h / 3) % 2 ? C.rock : C.rockDark, smoothstep(0.6, 0.9, slope));
    const pd = distToPaths(x, z, PATHS);
    if (pd < 2.4) out.lerp(C.path, smoothstep(2.4, 1.4, pd));
    return out;
  },

  nature: {
    trees: { style: 'round', count: 520, leafColors: [0xe0602a, 0xf0a030, 0xc83a2a, 0xe8c040], trunkColor: 0x5a3a28 },
    rocks: 140,
    rockColor: 0x9a6a4a,
    grass: { count: 6500, color: 0xb09a4a },
    flowers: { count: 1500, colors: [0xf0a030, 0xffd45c, 0xc83a2a] },
    avoid: [...Object.values(PLACES).map((p) => [p.x, p.z, p.r + 4])],
  },

  enemies: {
    kumodama: { name: 'モミジダマ', tint: 0xe06a3a, mult: 2.5, count: 32 },
    ishimori: { name: 'カレイワ', tint: 0x9a6a4a, mult: 2.5, count: 10 },
  },

  decorate(colliders, ground, rand) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);
    const y0 = SH.h;

    // --- 紅葉の社：朱色の鳥居・小さな社・石灯籠 ---
    const vermilion = std(0xd8402a);
    const black = std(0x2a2226);
    const torii = new THREE.Group();
    for (const s of [-1, 1]) {
      const post = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.5, 7, 10), vermilion));
      post.position.set(s * 3, 3.5, 0);
      torii.add(post);
    }
    const kasagi = shadow(new THREE.Mesh(new THREE.BoxGeometry(8.6, 0.7, 1), black));
    kasagi.position.y = 7.3;
    const shimaki = shadow(new THREE.Mesh(new THREE.BoxGeometry(7.8, 0.4, 0.8), vermilion));
    shimaki.position.y = 6.8;
    const nuki = shadow(new THREE.Mesh(new THREE.BoxGeometry(7.4, 0.4, 0.5), vermilion));
    nuki.position.y = 5.6;
    torii.add(kasagi, shimaki, nuki);
    torii.position.set(SH.x + 10, y0, SH.z - 4);
    torii.rotation.y = Math.atan2(-10, 4) + Math.PI / 2; // 社の正面に向ける
    group.add(torii);
    put.cyl(0.5, 7, SH.x + 10 + Math.cos(torii.rotation.y) * 3, y0 - 0.5, SH.z - 4 - Math.sin(torii.rotation.y) * 3, null, 0xd8402a);
    put.cyl(0.5, 7, SH.x + 10 - Math.cos(torii.rotation.y) * 3, y0 - 0.5, SH.z - 4 + Math.sin(torii.rotation.y) * 3, null, 0xd8402a);

    const hall = new THREE.Group();
    const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(7, 0.8, 6), std(0xa89c8c)));
    base.position.y = 0.4;
    const walls = shadow(new THREE.Mesh(new THREE.BoxGeometry(5.2, 3.2, 4.4), std(0xf4ead8)));
    walls.position.y = 2.4;
    const beams = shadow(new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.4, 4.8), vermilion));
    beams.position.y = 4.1;
    const roof = shadow(new THREE.Mesh(new THREE.ConeGeometry(5.2, 2.6, 4), std(0x3a3440)));
    roof.position.y = 5.5;
    roof.rotation.y = Math.PI / 4;
    roof.scale.z = 0.8;
    const bell = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), std(0xf4c25b, { metalness: 0.6, roughness: 0.3 }));
    bell.position.set(0, 3.5, 2.4);
    hall.add(base, walls, beams, roof, bell);
    hall.position.set(SH.x, y0, SH.z);
    hall.rotation.y = Math.atan2(10, -4); // 鳥居の方を向く
    group.add(hall);
    put.cyl(3.6, 6, SH.x, y0 - 0.5, SH.z, null, 0xd8402a, 'house');
    const stone = std(0xa89c8c);
    const lampGlow = new THREE.MeshStandardMaterial({ color: 0xfff0b0, emissive: 0xffa040, emissiveIntensity: 1.2 });
    for (const [dx, dz] of [[6, -9], [9, 2], [-4, -9]]) {
      const l = new THREE.Group();
      const post = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 1.6, 6), stone));
      post.position.y = 0.8;
      const fire = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.5, 0.6), lampGlow);
      fire.position.y = 1.85;
      const cap = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.6, 0.5, 4), stone));
      cap.position.y = 2.35;
      l.add(post, fire, cap);
      l.position.set(SH.x + dx, y0, SH.z + dz);
      group.add(l);
    }

    // --- 舞い散る紅葉（プレイヤーのまわりに） ---
    const count = 160;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const palette = [0xe0602a, 0xf0a030, 0xc83a2a, 0xe8c040].map((c) => new THREE.Color(c));
    const seeds = Array.from({ length: count }, (_, i) => {
      const c = palette[i % 4];
      cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
      return { x: (rand() - 0.5) * 70, y: rand() * 22, z: (rand() - 0.5) * 70, p: rand() * 10 };
    });
    const leafGeo = new THREE.BufferGeometry();
    leafGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    leafGeo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const leaves = new THREE.Points(leafGeo, new THREE.PointsMaterial({ size: 0.4, vertexColors: true, transparent: true, depthWrite: false }));
    leaves.frustumCulled = false;
    group.add(leaves);

    return {
      group,
      update(dt, t, focus) {
        bell.position.x = Math.sin(t * 1.3) * 0.08;
        const near = focus && Math.hypot(focus.x - CX, focus.z - CZ) < 420;
        leaves.visible = !!near;
        if (!near) return;
        for (let i = 0; i < count; i++) {
          const s = seeds[i];
          s.y -= dt * 1.4;
          if (s.y < 0) s.y += 22;
          pos[i * 3] = focus.x + s.x + Math.sin(t * 1.5 + s.p) * 1.5;
          pos[i * 3 + 1] = focus.y + s.y - 4;
          pos[i * 3 + 2] = focus.z + s.z + Math.cos(t * 1.2 + s.p) * 1.5;
        }
        leafGeo.attributes.position.needsUpdate = true;
      },
    };
  },
};

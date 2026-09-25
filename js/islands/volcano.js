import * as THREE from 'three';
import { fbm, lerp, smoothstep, distToPaths, applyCoast, makeEdge } from '../terrain.js';
import { std, shadow, makePlacer } from '../props.js';
import { D, BRIDGE_AT } from './layout.js';

// 焔の島（西）：火山・溶岩・黒曜石・温泉・鍛冶場の跡

const CX = -D, CZ = 0;
const CONE = { r: 200, h: 90, crater: 22 };
const PLACES = {
  crater: { name: '焔の火口', x: CX, z: CZ, r: 22 },
  obsidian: { name: '黒曜の原', x: CX + 133, z: CZ + 183, r: 26, h: 4 },
  spring: { name: '湯けむりの温泉', x: CX + 240, z: CZ - 120, r: 12, h: 4 },
  forge: { name: '鍛冶場の跡', x: CX + 232, z: CZ + 62, r: 14, h: 5 },
};
const O = PLACES.obsidian, HS = PLACES.spring, F = PLACES.forge;
const W = BRIDGE_AT.west;
const PATHS = [
  [[CX + 420, W], [CX + 262, W + 2], [F.x - 2, F.z - 16]], // 街道 → 鍛冶場の跡
  [[CX + 262, W + 2], [CX + 205, 120], [O.x + 12, O.z - 22]], // → 黒曜の原
  [[CX + 262, W + 2], [CX + 252, -90], [HS.x, HS.z + 15]], // → 温泉
  // 火口への登山道（らせん）
  [[CX + 262, W + 2], [CX + 170, -70], [CX + 70, -140], [CX - 60, -130], [CX - 120, -30], [CX - 80, 70], [CX + 10, 70], [CX + 40, 20], [CX + 26, 0]],
];
// 溶岩の流れる向き（角度）
const FLOWS = [2.2, 3.4, 4.6];

const C = {
  basalt: new THREE.Color('#4a4550'),
  ash: new THREE.Color('#6d6570'),
  rim: new THREE.Color('#7a4a40'),
  sand: new THREE.Color('#3d3a40'),
  sandDeep: new THREE.Color('#2e2c32'),
  path: new THREE.Color('#8a7a70'),
  obsidian: new THREE.Color('#2e2a36'),
  scorch: new THREE.Color('#5a3a34'),
  spring: new THREE.Color('#8a8078'),
};

export const volcanoIsland = {
  id: 'volcano',
  name: '焔の火山地帯',
  cx: CX,
  cz: CZ,
  edge: makeEdge(345, [18, 2.6, 18, 1.9, 9, 0.2]),
  maxR: 425,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [],

  land(x, z) {
    let h = 3 + fbm(x / 30, z / 30) * 4 + fbm(x / 130, z / 130 + 7) * 6;
    const d = Math.hypot(x - CX, z - CZ);
    h += CONE.h * smoothstep(CONE.r, CONE.crater, d) + (fbm(x / 10, z / 10) - 0.5) * 3 * smoothstep(CONE.r, 40, d);
    // 火口のくぼみ
    h = lerp(h, CONE.h - 14, smoothstep(CONE.crater, CONE.crater - 8, d));
    for (const p of [O, HS, F]) h = lerp(h, p.h, smoothstep(p.r + 14, p.r, Math.hypot(x - p.x, z - p.z)));
    // 温泉はくぼませる
    h = lerp(h, HS.h - 1.2, smoothstep(HS.r - 2, HS.r - 6, Math.hypot(x - HS.x, z - HS.z)));
    return h;
  },

  color(x, z, h, slope, out) {
    if (h < 1.7) return out.copy(C.sandDeep).lerp(C.sand, smoothstep(-2, 1.2, h));
    out.copy(C.basalt).lerp(C.ash, fbm(x / 10, z / 10));
    const d = Math.hypot(x - CX, z - CZ);
    out.lerp(C.rim, smoothstep(90, 30, d) * 0.8);
    out.lerp(C.obsidian, smoothstep(O.r + 6, O.r - 6, Math.hypot(x - O.x, z - O.z)));
    out.lerp(C.spring, smoothstep(HS.r + 4, HS.r - 2, Math.hypot(x - HS.x, z - HS.z)) * 0.7);
    const pd = distToPaths(x, z, PATHS);
    if (pd < 2.4) out.lerp(C.path, smoothstep(2.4, 1.4, pd));
    // 溶岩が流れた跡
    const a = Math.atan2(z - CZ, x - CX);
    for (const f of FLOWS) {
      const da = Math.abs(Math.atan2(Math.sin(a - f), Math.cos(a - f))) * d;
      if (d > CONE.crater && d < 170 && da < 5) out.lerp(C.scorch, smoothstep(5, 2.5, da));
    }
    return out;
  },

  nature: {
    trees: { style: 'dead', count: 180, trunkColor: 0x3a3030, maxH: 30, maxSlope: 0.5 },
    rocks: 250,
    rockColor: 0x4a4550,
    grass: { count: 1500, color: 0x8a7a50 },
    avoid: Object.values(PLACES).map((p) => [p.x, p.z, p.r + 4]),
  },

  enemies: {
    kumodama: { name: 'ヒダマ', tint: 0xd9644a, mult: 3.5, count: 28 },
    ishimori: { name: 'ヨウガンモリ', tint: 0x5a4a48, mult: 3.5, count: 10 },
  },

  decorate(colliders, ground, rand) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);

    // 溶岩の見た目（明るさが脈打つ）
    const lavaMat = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0 } },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          vUv = uv;
          vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
        }`,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          float n = sin(vWorld.x * 0.6 + time * 0.8) * sin(vWorld.z * 0.5 - time * 0.6) + sin(vUv.y * 12.0 - time * 1.5) * 0.5;
          vec3 col = mix(vec3(1.0, 0.35, 0.05), vec3(1.0, 0.85, 0.3), smoothstep(-0.2, 1.0, n));
          col = mix(col, vec3(0.35, 0.08, 0.03), smoothstep(0.55, 1.0, sin(vWorld.x * 1.7 + vWorld.z * 1.3) * 0.5 + 0.5) * 0.5);
          gl_FragColor = vec4(col, 1.0);
          #include <colorspace_fragment>
        }`,
    });

    // 火口の溶岩だまり
    const poolY = CONE.h - 13.2;
    const pool = new THREE.Mesh(new THREE.CircleGeometry(CONE.crater - 4, 32), lavaMat);
    pool.rotation.x = -Math.PI / 2;
    pool.position.set(CX, poolY, CZ);
    group.add(pool);
    const glow = new THREE.PointLight(0xff7a30, 200, 90);
    glow.position.set(CX, poolY + 6, CZ);
    group.add(glow);

    // 斜面を流れ下る溶岩の帯
    for (const f of FLOWS) {
      const verts = [], uvs = [], index = [];
      const rows = 70;
      for (let i = 0; i <= rows; i++) {
        const d = CONE.crater + 1 + i * 2.2;
        const a = f + Math.sin(i * 0.35 + f * 3) * 0.08;
        const w = 2.2 + Math.sin(i * 0.5) * 0.7;
        const cx = CX + Math.cos(a) * d, cz = CZ + Math.sin(a) * d;
        const sx = -Math.sin(a), sz = Math.cos(a);
        for (const s of [-1, 1]) {
          const x = cx + sx * s * w, z = cz + sz * s * w;
          verts.push(x, ground(x, z) + 0.15, z);
          uvs.push(s < 0 ? 0 : 1, i / 6);
        }
        if (i > 0) {
          const k = (i - 1) * 2;
          index.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
        }
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geo.setIndex(index);
      group.add(new THREE.Mesh(geo, lavaMat));
    }

    // 黒曜石のとげ
    const obsidian = new THREE.MeshStandardMaterial({ color: 0x1d1b26, roughness: 0.15, metalness: 0.4, flatShading: true });
    for (let i = 0; i < 26; i++) {
      const a = rand() * Math.PI * 2, r = rand() * O.r;
      const x = O.x + Math.cos(a) * r, z = O.z + Math.sin(a) * r;
      const g = ground(x, z);
      const s = 0.8 + rand() * 1.8;
      const m = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.9 * s, 4 * s, 5), obsidian));
      m.position.set(x, g + 1.6 * s, z);
      m.rotation.set((rand() - 0.5) * 0.5, rand() * 3, (rand() - 0.5) * 0.5);
      group.add(m);
      put.cyl(0.8 * s, 3.5 * s, x, g - 0.5, z, null, 0x1d1b26);
    }

    // 丸くぼかした煙の粒（火口と温泉で使う）
    const puff = document.createElement('canvas');
    puff.width = puff.height = 64;
    const pg = puff.getContext('2d');
    const grad = pg.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    pg.fillStyle = grad;
    pg.fillRect(0, 0, 64, 64);
    const puffTex = new THREE.CanvasTexture(puff);
    const makeSmoke = (count, spread, size, color, opacity) => {
      const pos = new Float32Array(count * 3);
      const life = new Float32Array(count);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color, size, map: puffTex, transparent: true, opacity, depthWrite: false }));
      pts.frustumCulled = false;
      group.add(pts);
      return { pos, life, geo, count, spread };
    };

    // 火口の煙
    const smoke = makeSmoke(110, 22, 14, 0x8a8088, 0.45);
    const resetSmoke = (i) => {
      smoke.pos[i * 3] = CX + (rand() - 0.5) * smoke.spread;
      smoke.pos[i * 3 + 1] = poolY + 2;
      smoke.pos[i * 3 + 2] = CZ + (rand() - 0.5) * smoke.spread;
      smoke.life[i] = 0;
    };
    for (let i = 0; i < smoke.count; i++) { resetSmoke(i); smoke.life[i] = rand() * 8; smoke.pos[i * 3 + 1] += smoke.life[i] * 6; }

    // --- 湯けむりの温泉 ---
    const water = new THREE.Mesh(new THREE.CircleGeometry(HS.r - 2.5, 28), new THREE.MeshStandardMaterial({
      color: 0x9fe8e0, emissive: 0x3fa8a0, emissiveIntensity: 0.25, transparent: true, opacity: 0.85, roughness: 0.15,
    }));
    water.rotation.x = -Math.PI / 2;
    water.position.set(HS.x, HS.h - 0.5, HS.z);
    group.add(water);
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const s = 0.8 + rand() * 0.7;
      const st = shadow(new THREE.Mesh(new THREE.DodecahedronGeometry(s, 0), std(0x6d6570)));
      st.position.set(HS.x + Math.cos(a) * (HS.r - 1.5), HS.h + s * 0.3, HS.z + Math.sin(a) * (HS.r - 1.5));
      group.add(st);
    }
    const steam = makeSmoke(50, HS.r * 1.2, 4, 0xffffff, 0.35);
    const resetSteam = (i) => {
      steam.pos[i * 3] = HS.x + (rand() - 0.5) * steam.spread;
      steam.pos[i * 3 + 1] = HS.h - 0.3;
      steam.pos[i * 3 + 2] = HS.z + (rand() - 0.5) * steam.spread;
      steam.life[i] = 0;
    };
    for (let i = 0; i < steam.count; i++) { resetSteam(i); steam.life[i] = rand() * 3; steam.pos[i * 3 + 1] += steam.life[i] * 1.5; }
    const wood = std(0x6b4630);
    const sign = new THREE.Group();
    const post = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.2, 2.2, 0.2), wood));
    post.position.y = 1.1;
    const board = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.8, 0.12), std(0xc49a6c));
    board.position.y = 2;
    sign.add(post, board);
    sign.position.set(HS.x, HS.h, HS.z + HS.r + 2);
    group.add(sign);

    // --- 鍛冶場の跡：崩れた石壁・炉・金床 ---
    const fy = F.h;
    const wallMat = std(0x6d6570);
    put.box(12, 3.5, 1.2, F.x, fy - 0.3, F.z - 6, wallMat, 0x6d6570);
    put.box(1.2, 2.2, 8, F.x - 6, fy - 0.3, F.z - 1.6, wallMat, 0x6d6570);
    put.box(1.2, 1.2, 5, F.x + 6, fy - 0.3, F.z - 3, wallMat, 0x6d6570);
    // 炉（口が赤く光る）
    put.box(4, 4.2, 3, F.x + 2, fy - 0.3, F.z - 3.8, std(0x5a4a48), 0x5a4a48);
    const mouth = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.4), new THREE.MeshBasicMaterial({ color: 0xff7a30 }));
    mouth.position.set(F.x + 2, fy + 1.2, F.z - 2.28);
    group.add(mouth);
    const chimney = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1, 5, 8), std(0x5a4a48)));
    chimney.position.set(F.x + 2, fy + 6, F.z - 4.2);
    group.add(chimney);
    const forgeLight = new THREE.PointLight(0xff8a40, 25, 14);
    forgeLight.position.set(F.x + 2, fy + 1.5, F.z - 1);
    group.add(forgeLight);
    // 金床
    const iron = std(0x3a3a44, { metalness: 0.6, roughness: 0.4 });
    const anvilBase = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.9, 0.6), iron));
    anvilBase.position.set(F.x - 2, fy + 0.45, F.z + 1);
    const anvilTop = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.45, 0.7), iron));
    anvilTop.position.set(F.x - 2, fy + 1.1, F.z + 1);
    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.8, 6), iron);
    horn.rotation.z = Math.PI / 2;
    horn.position.set(F.x - 3.2, fy + 1.1, F.z + 1);
    group.add(anvilBase, anvilTop, horn);
    put.cyl(1, 1.4, F.x - 2, fy - 0.3, F.z + 1, null, 0x3a3a44);
    // 折れた剣が何本か刺さっている
    const steel = std(0xb8c0c8, { metalness: 0.6 });
    for (let i = 0; i < 4; i++) {
      const bl = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.4, 0.3), steel);
      bl.position.set(F.x + 4 + i * 0.6, fy + 0.6, F.z + 3 + (i % 2) * 0.5);
      bl.rotation.set(0, i, (rand() - 0.5) * 0.5);
      group.add(bl);
    }

    return {
      group,
      update(dt, t) {
        lavaMat.uniforms.time.value = t;
        glow.intensity = 190 + Math.sin(t * 3) * 40;
        forgeLight.intensity = 22 + Math.sin(t * 12) * 5;
        for (let i = 0; i < smoke.count; i++) {
          smoke.life[i] += dt;
          smoke.pos[i * 3 + 1] += dt * 6;
          smoke.pos[i * 3] += dt * 2; // 風で流れる
          if (smoke.life[i] > 8) resetSmoke(i);
        }
        smoke.geo.attributes.position.needsUpdate = true;
        for (let i = 0; i < steam.count; i++) {
          steam.life[i] += dt;
          steam.pos[i * 3 + 1] += dt * 1.5;
          steam.pos[i * 3] += Math.sin(t + i) * dt * 0.3;
          if (steam.life[i] > 3) resetSteam(i);
        }
        steam.geo.attributes.position.needsUpdate = true;
      },
    };
  },
};

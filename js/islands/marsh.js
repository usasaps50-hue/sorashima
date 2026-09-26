import * as THREE from 'three';
import { fbm, lerp, smoothstep, distToPaths, makeEdge } from '../terrain.js';
import { std, shadow, makePlacer, makeBatch } from '../props.js';
import { DIAG } from './layout.js';

// 霧の湿原（南東）：沼と水たまりだらけの低地、睡蓮、霧、沈んだ祠へ渡る木道

const CX = DIAG, CZ = DIAG;
const PLACES = {
  pond: { name: '沈んだ祠', x: CX + 60, z: CZ + 40, r: 45 },
  reeds: { name: '葦の迷い道', x: CX - 120, z: CZ + 170, r: 40 },
};
const PD = PLACES.pond;
export const MARSH_BOARDWALK = { z: PD.z, mid: PD.x - 27 }; // 木道をかける線（index.js の橋で使う）
const ISLET = 10;
const PATHS = [
  [[360, 360], [CX - 60, CZ + 30], [PD.x - 52, PD.z]], // 始まりの草原 → 木道のたもと
  [[CX - 60, CZ + 30], [PLACES.reeds.x + 20, PLACES.reeds.z - 30]], // → 葦の迷い道
];

const C = {
  moss: new THREE.Color('#7a9a5a'),
  dark: new THREE.Color('#5f7a4a'),
  mud: new THREE.Color('#6b5a44'),
  shallow: new THREE.Color('#5a6a4a'),
  path: new THREE.Color('#9a8060'),
};

/** 小さな沼（まだらに散らばる） */
const puddle = (x, z) => smoothstep(0.6, 0.68, fbm(x / 35 + 50, z / 35));

export const marshIsland = {
  id: 'marsh',
  name: '霧の湿原',
  cx: CX,
  cz: CZ,
  edge: makeEdge(400, [24, 1.7, 16, 0.6, 9, 2.9]),
  maxR: 460,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [],

  land(x, z) {
    // 低くて平らな湿地。あちこちに沼がある
    let h = 2 + fbm(x / 40, z / 40) * 2.2 + fbm(x / 150 + 5, z / 150) * 2.5;
    // 道の上には沼を作らない
    const onPath = smoothstep(8, 3, distToPaths(x, z, PATHS));
    h = lerp(h, -1.6, puddle(x, z) * (1 - onPath));
    // 祠のある大きな沼と、まん中の小島
    const d = Math.hypot(x - PD.x, z - PD.z);
    h = lerp(h, -2.2, smoothstep(PD.r + 10, PD.r - 5, d));
    h = lerp(h, 3, smoothstep(ISLET + 4, ISLET - 2, d));
    return h;
  },

  color(x, z, h, slope, out) {
    if (h < 1.7) return out.copy(C.mud).lerp(C.shallow, smoothstep(-2, 1.5, h));
    out.copy(C.dark).lerp(C.moss, fbm(x / 8, z / 8));
    out.lerp(C.mud, puddle(x, z) * 0.5 + (fbm(x / 5, z / 5) > 0.7 ? 0.3 : 0));
    const pd = distToPaths(x, z, PATHS);
    if (pd < 2.4) out.lerp(C.path, smoothstep(2.4, 1.4, pd));
    return out;
  },

  nature: {
    trees: { style: 'round', count: 300, leafColors: [0x4a6a3a, 0x3a5a34, 0x5a7a44], trunkColor: 0x4a3a2a, minH: 2.2 },
    rocks: 50,
    rockColor: 0x7a7a6a,
    grass: { count: 9000, color: 0x7a8a4a },
    flowers: { count: 900, colors: [0xffffff, 0xc8a8f0, 0xe0e8ff] },
    avoid: Object.values(PLACES).map((p) => [p.x, p.z, p.r + 4]),
  },

  enemies: {
    kumodama: { name: 'ヌマダマ', tint: 0x6a8a6a, mult: 1.9, count: 32 },
    ishimori: { name: 'ドロイワ', tint: 0x6b5a44, mult: 1.9, count: 10 },
  },

  decorate(colliders, ground, rand) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);
    const stone = std(0x8a8a7a);
    const mossMat = std(0x6a8a4a);

    // --- 沈んだ祠：小島の上の、傾いた門と石灯籠と小さな社 ---
    const y0 = ground(PD.x, PD.z);
    const gate = new THREE.Group();
    gate.position.set(PD.x - 6, y0 - 0.6, PD.z);
    gate.rotation.set(0, Math.PI / 2, 0.12); // 沈んで傾いている
    for (const s of [-1, 1]) {
      const post = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 6, 8), stone));
      post.position.set(s * 2.4, 3, 0);
      gate.add(post);
    }
    const beam = shadow(new THREE.Mesh(new THREE.BoxGeometry(6.6, 0.6, 0.8), stone));
    beam.position.y = 6.1;
    const beam2 = shadow(new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.4, 0.6), stone));
    beam2.position.y = 5.1;
    gate.add(beam, beam2);
    group.add(gate);
    put.cyl(0.5, 6, PD.x - 6, y0 - 1, PD.z - 2.4, null, 0x8a8a7a);
    put.cyl(0.5, 6, PD.x - 6, y0 - 1, PD.z + 2.4, null, 0x8a8a7a);

    const shrine = new THREE.Group();
    const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(4, 0.6, 3.4), stone));
    base.position.y = 0.3;
    const hall = shadow(new THREE.Mesh(new THREE.BoxGeometry(3, 2.6, 2.4), std(0x5a4030)));
    hall.position.y = 1.9;
    const roof = shadow(new THREE.Mesh(new THREE.ConeGeometry(3, 1.6, 4), std(0x3a3a44)));
    roof.position.y = 4;
    roof.rotation.y = Math.PI / 4;
    const mossCap = new THREE.Mesh(new THREE.ConeGeometry(2.4, 0.8, 4), mossMat);
    mossCap.position.y = 4.35;
    mossCap.rotation.y = Math.PI / 4;
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 8), new THREE.MeshStandardMaterial({ color: 0xd0fff0, emissive: 0x6fe0c0, emissiveIntensity: 1.4 }));
    orb.position.set(-1.25, 1.7, 0);
    shrine.add(base, hall, roof, mossCap, orb);
    shrine.position.set(PD.x + 3, y0, PD.z);
    group.add(shrine);
    put.box(4, 4.5, 3.4, PD.x + 3, y0 - 0.5, PD.z, null, 0x5a4030);

    // 石灯籠（ぼんやり光る）
    const lampGlow = new THREE.MeshStandardMaterial({ color: 0xfff0b0, emissive: 0xffc860, emissiveIntensity: 1.2 });
    const lanterns = [[PD.x - 2, PD.z - 5], [PD.x - 2, PD.z + 5], [PD.x - 32, PD.z - 5], [PD.x - 32, PD.z + 5]];
    for (const [x, z] of lanterns) {
      const g = Math.max(ground(x, z), -0.2);
      const l = new THREE.Group();
      const post = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 1.8, 6), stone));
      post.position.y = 0.9;
      const fire = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.6, 0.7), lampGlow);
      fire.position.y = 2.1;
      const cap = shadow(new THREE.Mesh(new THREE.ConeGeometry(0.7, 0.6, 4), stone));
      cap.position.y = 2.7;
      cap.rotation.y = Math.PI / 4;
      l.add(post, fire, cap);
      l.position.set(x, g, z);
      group.add(l);
    }
    const shrineLight = new THREE.PointLight(0xa8ffe0, 30, 30);
    shrineLight.position.set(PD.x, y0 + 3, PD.z);
    group.add(shrineLight);

    // --- 睡蓮の葉と蓮の花（水面に浮かぶ） ---
    const pads = makeBatch(new THREE.CircleGeometry(1, 10, 0.3, Math.PI * 2 - 0.6).rotateX(-Math.PI / 2), std(0x4f8a3f, { side: THREE.DoubleSide }), 700);
    pads.mesh.castShadow = false;
    const lotus = makeBatch(new THREE.ConeGeometry(0.35, 0.5, 6), std(0xffa8c8), 120);
    let n = 0;
    for (let tries = 0; n < 700 && tries < 20000; tries++) {
      const x = CX + (rand() - 0.5) * 700, z = CZ + (rand() - 0.5) * 700;
      const g = ground(x, z);
      if (g > -0.6 || g < -2.4) continue;
      const s = 0.5 + rand() * 0.9;
      pads.add(x, 0.05, z, s, 1, s, 0, rand() * 6, 0);
      if (rand() < 0.15) lotus.add(x + 0.2, 0.3, z, 1, 1, 1, Math.PI, 0, 0);
      n++;
    }
    group.add(pads.finish(), lotus.finish());

    // --- 霧（プレイヤーのまわりに、ぼんやり白い靄が漂う） ---
    const puff = document.createElement('canvas');
    puff.width = puff.height = 64;
    const pg = puff.getContext('2d');
    const grad = pg.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    pg.fillStyle = grad;
    pg.fillRect(0, 0, 64, 64);
    const count = 70;
    const pos = new Float32Array(count * 3);
    const seeds = Array.from({ length: count }, () => ({ x: (rand() - 0.5) * 140, z: (rand() - 0.5) * 140, y: 0.5 + rand() * 3, v: 0.5 + rand() }));
    const mistGeo = new THREE.BufferGeometry();
    mistGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mist = new THREE.Points(mistGeo, new THREE.PointsMaterial({
      color: 0xe8f0ec, size: 22, map: new THREE.CanvasTexture(puff), transparent: true, opacity: 0.22, depthWrite: false,
    }));
    mist.frustumCulled = false;
    group.add(mist);

    return {
      group,
      update(dt, t, focus) {
        orb.position.y = 1.7 + Math.sin(t * 1.8) * 0.12;
        const near = focus && Math.hypot(focus.x - CX, focus.z - CZ) < 420;
        mist.visible = !!near;
        if (!near) return;
        // 霧はプレイヤーのまわりに置き、ゆっくり流す
        for (let i = 0; i < count; i++) {
          const s = seeds[i];
          s.x += s.v * dt * 1.5;
          if (s.x > 70) s.x -= 140;
          pos[i * 3] = focus.x + s.x;
          pos[i * 3 + 1] = Math.max(0, focus.y - 2) + s.y;
          pos[i * 3 + 2] = focus.z + s.z;
        }
        mistGeo.attributes.position.needsUpdate = true;
      },
    };
  },
};

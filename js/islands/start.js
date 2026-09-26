import * as THREE from 'three';
import {
  fbm, lerp, smoothstep, bump, distToSegment, distToPolyline, distToPaths, applyCoast,
} from '../terrain.js';
import { std, shadow, makePlacer } from '../props.js';
import { BRIDGE_AT } from './layout.js';

// 始まりの島（中央）

const edge = (angle) => 380 + 26 * Math.sin(3 * angle + 0.5) + 14 * Math.sin(7 * angle + 2) + 8 * Math.sin(11 * angle + 1);
const coastPoint = (angle, inset) => [Math.cos(angle) * (edge(angle) - inset), Math.sin(angle) * (edge(angle) - inset)];

// 滝の向き（台地の中心から湖へ）
export const FALL_DIR = new THREE.Vector2(44, 10).normalize();
// 台地の坂道の向き（台地の中心から見て南南西）
const RAMP_DIR = new THREE.Vector2(-0.39, 0.92).normalize();

const plateau = { name: '古代遺跡の台地', x: -164, z: -215, r: 24, h: 22 };
const [lhx, lhz] = coastPoint(2.2, 22);

export const PLACES = {
  altar: { name: '星の祭壇', x: 0, z: 0, r: 16, h: 5 },
  village: { name: '潮風の村 シオカゼ', x: 190, z: 152, r: 30, h: 4.5 },
  plateau,
  lake: { name: '鏡の湖', x: plateau.x + FALL_DIR.x * 51, z: plateau.z + FALL_DIR.y * 51, r: 20 },
  cave: { name: 'ひかりの洞窟', x: -202, z: 114, r: 13, h: 5 },
  windmill: { name: '風車の丘', x: 262, z: -88, r: 14 },
  lighthouse: { name: '岬の灯台', x: lhx, z: lhz, r: 10 },
  stones: { name: '古の環状列石', x: -255, z: -60, r: 15, h: 7 },
};

// 台地の上の泉
export const POND = {
  x: plateau.x + FALL_DIR.x * 18,
  z: plateau.z + FALL_DIR.y * 18,
  r: 4,
};

const L = PLACES.lake;
export const RIVER = [[L.x, L.z], [-70, -225], [-20, -250], [40, -275], [100, -300], [170, -330], [260, -380], [340, -440]];

const rampFoot = [plateau.x + RAMP_DIR.x * 62, plateau.z + RAMP_DIR.y * 62];
const rampTop = [plateau.x + RAMP_DIR.x * 20, plateau.z + RAMP_DIR.y * 20];
const V = PLACES.village, CV = PLACES.cave, W = PLACES.windmill, ST = PLACES.stones;

const PATHS = [
  [[0, 0], [60, 50], [130, 105], [V.x, V.z]], // 祭壇 → 村
  [[V.x, V.z], [V.x + 12, V.z + 48], [V.x + 12, V.z + 190]], // 村 → 桟橋
  [[0, 0], [-30, -80], [-70, -150], [L.x + 12, L.z + 20]], // 祭壇 → 湖
  [[0, 0], [-60, -40], [-130, -110], rampFoot], // 祭壇 → 台地のふもと
  [rampFoot, [(rampFoot[0] + rampTop[0]) / 2 + 4, (rampFoot[1] + rampTop[1]) / 2], rampTop], // 台地の坂道
  [[0, 0], [-80, 40], [-150, 90], [CV.x + 13, CV.z]], // 祭壇 → 洞窟
  [[0, 0], [90, -20], [180, -60], [W.x - 12, W.z + 3]], // 祭壇 → 風車の丘
  [[0, 0], [-60, 90], [-150, 200], [lhx + 8, lhz - 8]], // 祭壇 → 灯台
  [[-130, -110], [-200, -80], [ST.x + 12, ST.z]], // → 環状列石
  // 大橋へ向かう道
  [[0, 0], [130, BRIDGE_AT.east - 5], [260, BRIDGE_AT.east], [480, BRIDGE_AT.east]],
  [[-60, -40], [-150, -20], [-300, BRIDGE_AT.west], [-480, BRIDGE_AT.west]],
  [[0, 0], [-20, 100], [BRIDGE_AT.south, 250], [BRIDGE_AT.south, 480]],
  [[0, 0], [-20, -120], [BRIDGE_AT.north, -240], [BRIDGE_AT.north, -480]],
  // 斜めの地方へ向かう道
  [[0, 0], [150, -140], [330, -330]], // 北東：花冠の丘陵
  [[V.x, V.z], [270, 250], [360, 360]], // 南東：霧の湿原
  [[0, 0], [-120, 150], [-330, 330]], // 南西：紅葉の渓谷
  [[-130, -110], [-230, -230], [-340, -330]], // 北西：水晶の高地
];

const C = {
  sandDeep: new THREE.Color('#c7ae78'),
  sand: new THREE.Color('#f0dba3'),
  grass: new THREE.Color('#7cbf5a'),
  grassDark: new THREE.Color('#5f9f45'),
  grassHigh: new THREE.Color('#93bf62'),
  rock: new THREE.Color('#9a8f86'),
  rockDark: new THREE.Color('#7d7470'),
  path: new THREE.Color('#cfab72'),
  plaza: new THREE.Color('#dccdaa'),
};
const tmp = new THREE.Color();

export const startIsland = {
  id: 'start',
  name: '始まりの草原',
  cx: 0,
  cz: 0,
  edge,
  maxR: 465,
  places: PLACES,
  paths: PATHS,
  sanctuaries: [
    { x: PLACES.altar.x, z: PLACES.altar.z, r: 14 },
    { x: V.x, z: V.z, r: 36 },
  ],

  land(x, z) {
    const r = Math.hypot(x, z);
    let h = 3.5 + fbm(x / 45, z / 45) * 4.5;
    // 島の外側ほど大きくうねる（中央の祭壇のまわりは平原）
    h += fbm(x / 150 + 20, z / 150) * 9 * smoothstep(70, 220, r);
    h += bump(x, z, W.x, W.z, 90, 13); // 風車の丘
    h += bump(x, z, -38, 234, 76, 9);
    h += bump(x, z, 107, -120, 50, 4);
    h += bump(x, z, 250, 230, 70, 8);

    // 台地：ほとんどの方向は崖、坂道の方向だけゆるやか
    const P = plateau;
    const pdx = x - P.x, pdz = z - P.z;
    const pd = Math.hypot(pdx, pdz);
    const facing = pd > 0.001 ? (pdx * RAMP_DIR.x + pdz * RAMP_DIR.y) / pd : 0;
    const width = lerp(8, 42, smoothstep(0.82, 0.97, facing));
    const top = P.h + (fbm(x / 12, z / 12) - 0.5) * 0.8;
    h = lerp(h, top, smoothstep(P.r + width, P.r, pd));

    // 台地の上の泉と、崖へ流れ出す小川
    h = lerp(h, P.h - 1.3, smoothstep(POND.r + 1.5, POND.r - 1, Math.hypot(x - POND.x, z - POND.z)));
    const streamD = distToSegment(x, z, POND.x, POND.z, P.x + FALL_DIR.x * 25, P.z + FALL_DIR.y * 25);
    if (pd < P.r + 1) h = Math.min(h, lerp(P.h - 0.8, h, smoothstep(0.8, 2.2, streamD)));

    // 平らにならす場所
    for (const key of ['altar', 'village', 'cave', 'stones']) {
      const p = PLACES[key];
      h = lerp(h, p.h, smoothstep(p.r + 16, p.r, Math.hypot(x - p.x, z - p.z)));
    }

    return h;
  },

  /** 湖と川：ほかの地方と混ぜた後に削る（川が地方の境目をまたいでも途切れないように） */
  carve(x, z, h) {
    h = lerp(h, -3.5, smoothstep(L.r + 10, L.r - 3, Math.hypot(x - L.x, z - L.z)));
    return lerp(h, -2.5, smoothstep(22, 5, distToPolyline(x, z, RIVER)));
  },

  color(x, z, h, slope, out) {
    if (h < 1.7) {
      out.copy(C.sandDeep).lerp(C.sand, smoothstep(-2, 1.2, h));
    } else {
      const n = fbm(x / 9, z / 9);
      out.copy(C.grassDark).lerp(C.grass, n);
      out.lerp(C.grassHigh, smoothstep(12, 22, h) * 0.8);
      out.lerp(C.sand, smoothstep(2.4, 1.7, h));
      const pd = distToPaths(x, z, PATHS);
      if (pd < 2.6) out.lerp(tmp.copy(C.path).offsetHSL(0, 0, (n - 0.5) * 0.06), smoothstep(2.6, 1.6, pd));
      if (Math.hypot(x - V.x, z - V.z) < 14) out.lerp(C.plaza, smoothstep(14, 12, Math.hypot(x - V.x, z - V.z)));
      if (Math.hypot(x - CV.x, z - CV.z) < 12) out.copy(C.rockDark);
    }
    if (slope > 0.75) out.lerp(fbm(x / 4, z / 4) > 0.5 ? C.rock : C.rockDark, smoothstep(0.75, 1.1, slope));
    return out;
  },

  nature: {
    trees: { style: 'round', count: 320, minH: 2.6, avoidRiver: RIVER, accentChance: 0.15, leafColors: [0x4f9a4a, 0x65b556, 0x3f8a52, 0xf2a6c2] },
    palms: 90,
    rocks: 180,
    grass: { count: 9000, color: 0x5f9f45 },
    flowers: { count: 2500, colors: [0xfff4f0, 0xffd45c, 0xff9fbf, 0xb9a6ff] },
    avoid: [
      ...Object.values(PLACES).map((p) => [p.x, p.z, p.r]),
      [V.x + 12, V.z + 175, 12], // 桟橋
    ],
  },

  enemies: {
    kumodama: { count: 30 },
    ishimori: { count: 7 },
  },

  // 新しい名所：風車・灯台・環状列石
  decorate(colliders, ground) {
    const group = new THREE.Group();
    const put = makePlacer(group, colliders);

    // --- 風車 ---
    const wy = ground(W.x, W.z);
    const plaster = std(0xf2ead8);
    put.cyl(4.2, 14, W.x, wy - 0.5, W.z, null, 0xf2ead8);
    const tower = shadow(new THREE.Mesh(new THREE.CylinderGeometry(3, 4.4, 14, 8), plaster));
    tower.position.set(W.x, wy + 6.5, W.z);
    const roof = shadow(new THREE.Mesh(new THREE.ConeGeometry(4, 4.5, 8), std(0xd9644a)));
    roof.position.set(W.x, wy + 15.7, W.z);
    const door = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.6, 0.3), std(0x7a4e36));
    // 祭壇の方を向ける
    const face = Math.atan2(-W.x, -W.z);
    door.position.set(W.x + Math.sin(face) * 4.1, wy + 1.3, W.z + Math.cos(face) * 4.1);
    door.rotation.y = face;
    group.add(tower, roof, door);
    const blades = new THREE.Group();
    blades.position.set(W.x + Math.sin(face) * 3.6, wy + 12, W.z + Math.cos(face) * 3.6);
    blades.rotation.y = face;
    const wood = std(0x8a5a3b);
    const cloth = std(0xfff6e4, { side: THREE.DoubleSide });
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.8, 8), wood);
    hub.rotation.x = Math.PI / 2;
    blades.add(hub);
    for (let i = 0; i < 4; i++) {
      const arm = new THREE.Group();
      arm.rotation.z = (i / 4) * Math.PI * 2;
      const spar = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.35, 10, 0.25), wood));
      spar.position.y = 5;
      const sail = shadow(new THREE.Mesh(new THREE.PlaneGeometry(2, 7.5), cloth));
      sail.position.set(1.15, 5.8, 0.05);
      arm.add(spar, sail);
      blades.add(arm);
    }
    group.add(blades);

    // --- 灯台 ---
    const [lx, lz] = [PLACES.lighthouse.x, PLACES.lighthouse.z];
    const ly = ground(lx, lz);
    const stone = std(0xbdb5a6);
    const base = shadow(new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.6, 2.5, 10), stone));
    base.position.set(lx, ly + 0.8, lz);
    group.add(base);
    for (let i = 0; i < 6; i++) {
      const r0 = 3.2 - i * 0.18, r1 = 3.2 - (i + 1) * 0.18;
      const seg = shadow(new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, 3.4, 12), std(i % 2 ? 0xd9644a : 0xfaf6ee)));
      seg.position.set(lx, ly + 2 + i * 3.4 + 1.7, lz);
      group.add(seg);
    }
    const topY = ly + 2 + 6 * 3.4;
    const gallery = shadow(new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 0.4, 12), std(0x4a4e69)));
    gallery.position.set(lx, topY + 0.2, lz);
    const lamp = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 2.2, 10), new THREE.MeshStandardMaterial({ color: 0xfff1a8, emissive: 0xffd060, emissiveIntensity: 1.4 }));
    lamp.position.set(lx, topY + 1.5, lz);
    const cap = shadow(new THREE.Mesh(new THREE.ConeGeometry(1.9, 2, 10), std(0x4a4e69)));
    cap.position.set(lx, topY + 3.6, lz);
    group.add(gallery, lamp, cap);
    put.cyl(3.6, 27, lx, ly - 0.5, lz, null, 0xd9644a);
    // 回る光の筋
    const beam = new THREE.Group();
    beam.position.set(lx, topY + 1.5, lz);
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xfff1a8, transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
    for (const s of [1, -1]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(6, 60, 16, 1, true), beamMat);
      cone.rotation.z = (s * Math.PI) / 2;
      cone.position.x = s * 30;
      beam.add(cone);
    }
    group.add(beam);
    const light = new THREE.PointLight(0xffe0a0, 40, 40);
    light.position.set(lx, topY + 1.5, lz);
    group.add(light);

    // --- 古の環状列石 ---
    const sy = ST.h;
    const monolith = std(0xa9a196);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const x = ST.x + Math.cos(a) * 11, z = ST.z + Math.sin(a) * 11;
      const h = i % 4 === 3 ? 2.2 : 4.5 + (i % 3) * 0.6;
      const m = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.5, h, 0.9), monolith));
      m.position.set(x, sy + h / 2 - 0.3, z);
      m.rotation.y = -a + Math.PI / 2;
      group.add(m);
      put.cyl(0.9, h, x, sy - 0.5, z, null, 0xa9a196);
    }
    // 2本の石にかけた横石
    for (const i of [0, 4, 8]) {
      const a = ((i + 0.5) / 12) * Math.PI * 2;
      const lintel = shadow(new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 6.4), monolith));
      lintel.position.set(ST.x + Math.cos(a) * 11, sy + 5.2, ST.z + Math.sin(a) * 11);
      lintel.rotation.y = -a;
      group.add(lintel);
    }
    const center = shadow(new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.4, 0.9, 10), monolith));
    center.position.set(ST.x, sy + 0.45, ST.z);
    group.add(center);
    put.cyl(2.3, 0.9, ST.x, sy - 0.5, ST.z, null, 0xa9a196);
    const rune = new THREE.Mesh(new THREE.OctahedronGeometry(0.6, 0), new THREE.MeshStandardMaterial({ color: 0xc8b8ff, emissive: 0x8f6fe0, emissiveIntensity: 1.2 }));
    rune.position.set(ST.x, sy + 2, ST.z);
    group.add(rune);

    return {
      group,
      update(dt, t) {
        blades.rotateZ(dt * 0.6);
        beam.rotation.y += dt * 0.7;
        rune.rotation.y += dt;
        rune.position.y = sy + 2 + Math.sin(t * 1.5) * 0.25;
      },
    };
  },
};

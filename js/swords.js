import * as THREE from 'three';

/**
 * 血の魔剣の 3D モデル。
 * どれも「握りが原点、刃が +Z 方向に伸びる」向きで作る（キャラクターの右手にそのまま付けられる）。
 */

// 反射させる景色が無いので、金属っぽさは控えめにして明るさを保つ
const metal = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, metalness: 0.3, roughness: 0.32, flatShading: true, ...extra });
const glow = (color, emissive, intensity = 1.2, extra = {}) =>
  new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: intensity, flatShading: true, ...extra });

/**
 * 刃の輪郭（長さ方向 u、幅方向 v の点の列）から、厚み thick の板を作る。
 * できた形は、u が +Z、v が +Y、厚みが X 方向になる。
 */
function bladeFromOutline(points, thick) {
  const shape = new THREE.Shape();
  points.forEach(([u, v], i) => (i ? shape.lineTo(u, v) : shape.moveTo(u, v)));
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: thick, bevelEnabled: true, bevelThickness: thick * 0.35, bevelSize: 0.02, bevelSegments: 1 });
  geo.translate(0, 0, -thick / 2);
  geo.rotateY(-Math.PI / 2); // shape の x → +Z、押し出し → X
  return geo;
}

function grip(color = 0x2a1418, len = 0.5) {
  const g = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.085, len, 8), new THREE.MeshStandardMaterial({ color, roughness: 0.8 }));
  g.rotation.x = Math.PI / 2;
  g.position.z = -0.02;
  return g;
}

// ---------- 魔剣サングレア：黒い刃に脈打つ赤い芯 ----------
function sangrea() {
  const g = new THREE.Group();
  // 背の側にギザギザの棘がある、長めの黒い刃
  const pts = [[0.3, -0.17], [1.4, -0.22], [2.05, -0.15], [2.65, 0]];
  for (let i = 5; i >= 0; i--) {
    const u = 0.5 + i * 0.3;
    pts.push([u + 0.2, 0.17 + (i > 3 ? -0.02 : 0)], [u + 0.1, 0.27], [u, 0.18]);
  }
  pts.push([0.3, 0.17]);
  const blade = new THREE.Mesh(bladeFromOutline(pts, 0.07), metal(0x2a2430, { roughness: 0.3 }));
  // 刃の中を走る、脈打つ血の芯
  const vein = new THREE.Mesh(bladeFromOutline([[0.4, -0.06], [1.6, -0.08], [2.35, 0], [1.6, 0.08], [0.4, 0.06]], 0.1), glow(0xff2030, 0xe01020, 1.6));
  // 刃に刻まれた光る文字
  const runeMat = glow(0xff6a7a, 0xff2040, 1.8);
  for (let i = 0; i < 4; i++) {
    for (const side of [-1, 1]) {
      const r = new THREE.Mesh(new THREE.BoxGeometry(0.02, i % 2 ? 0.1 : 0.06, 0.06), runeMat);
      r.position.set(side * 0.055, i % 2 ? 0.12 : -0.13, 0.7 + i * 0.35);
      r.rotation.x = i * 0.7;
      g.add(r);
    }
  }
  // 蝙蝠の翼の鍔
  const wingMat = metal(0x241018);
  for (const s of [-1, 1]) {
    const wingPts = [[0, 0], [0.1, s * 0.25], [0.02, s * 0.5], [0.16, s * 0.42], [0.12, s * 0.66], [0.26, s * 0.3], [0.18, 0]];
    const wing = new THREE.Mesh(bladeFromOutline(wingPts, 0.05), wingMat);
    wing.position.z = 0.2;
    g.add(wing);
  }
  // 鍔の中央の瞳
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), glow(0xffd0d0, 0xff2030, 1.2));
  eye.scale.set(0.6, 1, 0.6);
  eye.position.set(0, 0, 0.26);
  const pupil = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.02), new THREE.MeshBasicMaterial({ color: 0x1a0005 }));
  pupil.scale.set(1, 0.25, 1);
  pupil.position.set(0, 0, 0.27);
  pupil.rotation.y = Math.PI / 2;
  // 柄頭から下がる鎖と、赤い宝石
  const pommel = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 6), wingMat);
  pommel.rotation.x = -Math.PI / 2;
  pommel.position.z = -0.36;
  const chainMat = metal(0x4a3a44);
  for (let i = 0; i < 3; i++) {
    const link = new THREE.Mesh(new THREE.TorusGeometry(0.035, 0.012, 4, 8), chainMat);
    link.position.set(0, -0.06 - i * 0.06, -0.44);
    link.rotation.y = i % 2 ? Math.PI / 2 : 0;
    g.add(link);
  }
  const charm = new THREE.Mesh(new THREE.OctahedronGeometry(0.06, 0), glow(0xff2a3a, 0xc00018, 1.5));
  charm.position.set(0, -0.25, -0.44);
  g.add(blade, vein, eye, pupil, grip(0x1a0c12, 0.5), pommel, charm);
  return { group: g, pulse: [vein.material, eye.material, runeMat, charm.material] };
}

// ---------- 木こりの斧：木の柄に、あご髭のような鉄の刃（刃は -Y 側） ----------
function axe() {
  const g = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: 0x9a6a3e, roughness: 0.85, flatShading: true });
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 2.15, 7), wood);
  handle.rotation.x = Math.PI / 2;
  handle.position.z = 0.7;
  const wrap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.42, 7), new THREE.MeshStandardMaterial({ color: 0x5a3a28, roughness: 0.9 }));
  wrap.rotation.x = Math.PI / 2;
  const iron = metal(0x8a96a4, { roughness: 0.45 });
  const head = new THREE.Mesh(bladeFromOutline([[1.3, 0.12], [1.74, 0.12], [1.92, -0.2], [2.08, -0.66], [1.62, -0.56], [1.36, -0.14]], 0.13), iron);
  // よく研がれた刃のふち（明るい）
  const edge = new THREE.Mesh(bladeFromOutline([[1.9, -0.18], [2.0, -0.2], [2.16, -0.7], [2.06, -0.68]], 0.07), metal(0xe8eef4, { roughness: 0.2 }));
  const poll = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.36), iron);
  poll.position.set(0, 0.2, 1.53);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.03, 5, 10), iron);
  ring.position.z = 1.2;
  g.add(handle, wrap, head, edge, poll, ring);
  g.scale.setScalar(1.15);
  return { group: g, pulse: [], tip: 2.3 };
}

// ---------- 血斧ガルムヘッド：黒い三日月の大刃、赤く光るふち、背の棘 ----------
function bloodAxe() {
  const g = new THREE.Group();
  const bone = new THREE.MeshStandardMaterial({ color: 0x2a2026, roughness: 0.6, flatShading: true });
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 2.5, 7), bone);
  handle.rotation.x = Math.PI / 2;
  handle.position.z = 0.8;
  const wrapMat = glow(0x8a1020, 0x600010, 0.8);
  for (let i = 0; i < 3; i++) {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.1, 7), wrapMat);
    w.rotation.x = Math.PI / 2;
    w.position.z = -0.1 + i * 0.28;
    g.add(w);
  }
  // 三日月の刃（外側の弧と、ギザギザの内側の弧）
  const crescent = (R, r, thick, teeth) => {
    const pts = [];
    const u0 = 1.72, v0 = 0.08;
    for (let i = 0; i <= 12; i++) {
      const a = -1.15 + (i / 12) * 2.3;
      pts.push([u0 + Math.sin(a) * R, v0 - Math.cos(a) * R]);
    }
    for (let i = 12; i >= 0; i--) {
      const a = -1.0 + (i / 12) * 2.0;
      const rr = r + (teeth && i % 2 ? 0.1 : 0);
      pts.push([u0 + Math.sin(a) * rr * 0.8, v0 - Math.cos(a) * rr + 0.05]);
    }
    return bladeFromOutline(pts, thick);
  };
  const head = new THREE.Mesh(crescent(0.98, 0.42, 0.12, true), metal(0x16121a, { roughness: 0.3 }));
  const rim = new THREE.Mesh(crescent(1.06, 0.6, 0.06, false), glow(0xff2030, 0xe01020, 1.6));
  // 背の棘と、先の棘
  const spikeMat = metal(0x241018);
  const back = new THREE.Mesh(bladeFromOutline([[1.5, 0.1], [1.62, 0.72], [1.78, 0.52], [1.96, 0.1]], 0.1), spikeMat);
  const top = new THREE.Mesh(bladeFromOutline([[1.95, 0.1], [2.55, 0], [1.95, -0.1]], 0.1), spikeMat);
  // 刃の中央の、赤い瞳
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), glow(0xffd0d0, 0xff2030, 1.3));
  eye.scale.set(1.3, 1, 1);
  eye.position.set(0, -0.28, 1.72);
  const pommel = new THREE.Mesh(new THREE.OctahedronGeometry(0.13, 0), glow(0xff2a3a, 0xc00018, 1.5));
  pommel.position.z = -0.5;
  g.add(handle, head, rim, back, top, eye, pommel);
  g.scale.setScalar(1.3);
  return { group: g, pulse: [rim.material, eye.material, wrapMat, pommel.material], tip: 3.1 };
}

const BUILDERS = { sangrea, axe, bloodAxe };

/** 剣のモデルを作る。pulse は脈打たせるマテリアル（光の強さを時間で変える） */
export function buildSword(id) {
  const built = BUILDERS[id]();
  built.group.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  built.base = built.pulse.map((m) => m.emissiveIntensity);
  return built;
}

export const SWORD_IDS = Object.keys(BUILDERS);

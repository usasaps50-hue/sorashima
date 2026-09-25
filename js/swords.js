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

const BUILDERS = { sangrea };

/** 剣のモデルを作る。pulse は脈打たせるマテリアル（光の強さを時間で変える） */
export function buildSword(id) {
  const built = BUILDERS[id]();
  built.group.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  built.base = built.pulse.map((m) => m.emissiveIntensity);
  return built;
}

export const SWORD_IDS = Object.keys(BUILDERS);

import * as THREE from 'three';
import { SEA_LEVEL } from './terrain.js';
import { PLACES } from './islands/start.js';

const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, flatShading: true, ...extra });
const shadow = (m) => { m.castShadow = m.receiveShadow = true; return m; };

/** 三角屋根（切妻）の形。幅 w、奥行き d、高さ h */
function gableRoof(w, d, h, mat) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2 - 0.6, 0);
  shape.lineTo(0, h);
  shape.lineTo(w / 2 + 0.6, 0);
  shape.lineTo(-w / 2 - 0.6, 0);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: d + 1.2, bevelEnabled: false });
  geo.translate(0, 0, -(d + 1.2) / 2);
  return shadow(new THREE.Mesh(geo, mat));
}

/** 家（ドアは +Z 側） */
export function house({ w, d, wall, roof, trim }) {
  const g = new THREE.Group();
  const H = 4.4;
  const walls = shadow(new THREE.Mesh(new THREE.BoxGeometry(w, H, d), std(wall)));
  walls.position.y = H / 2;
  g.add(walls);

  // 土台と柱
  const trimMat = std(trim);
  const base = shadow(new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 0.5, d + 0.4), std(0xa89f94)));
  base.position.y = 0.25;
  g.add(base);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.35, H, 0.35), trimMat);
    post.position.set(sx * (w / 2), H / 2, sz * (d / 2));
    g.add(post);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, 0.3, d + 0.2), trimMat);
  beam.position.y = H;
  g.add(beam);

  // 屋根と煙突
  const r = gableRoof(w, d, 2.8, std(roof));
  r.position.y = H;
  g.add(r);
  const chimney = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.8, 2.4, 0.8), std(0xb3a69a)));
  chimney.position.set(w * 0.25, H + 2.2, -d * 0.2);
  g.add(chimney);

  // ドアと窓
  const door = new THREE.Mesh(new THREE.BoxGeometry(1.3, 2.3, 0.15), std(0x7a4e36));
  door.position.set(0, 1.4, d / 2 + 0.05);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 4), std(0xf4c25b, { metalness: 0.6 }));
  knob.position.set(0.4, 1.4, d / 2 + 0.15);
  g.add(door, knob);
  const winMat = std(0xfff1c4, { emissive: 0xffc870, emissiveIntensity: 0.35 });
  const shutterMat = std(trim);
  const addWindow = (x, z, rotY) => {
    const win = new THREE.Group();
    const glass = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 0.1), winMat);
    const frameH = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.12, 0.14), shutterMat);
    const frameV = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.3, 0.14), shutterMat);
    const sill = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.15, 0.4), shutterMat);
    sill.position.y = -0.65;
    win.add(glass, frameH, frameV, sill);
    win.position.set(x, 2.6, z);
    win.rotation.y = rotY;
    g.add(win);
  };
  addWindow(-w / 2 + 1.4, d / 2 + 0.05, 0);
  addWindow(w / 2 - 1.4, d / 2 + 0.05, 0);
  addWindow(w / 2 + 0.05, 0, Math.PI / 2);
  addWindow(-w / 2 - 0.05, 0, -Math.PI / 2);

  // 花の植木鉢
  const box = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.35, 0.35), std(0x8a5a3b));
  box.position.set(-w / 2 + 1.4, 1.95, d / 2 + 0.3);
  g.add(box);
  for (let i = 0; i < 3; i++) {
    const f = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16, 0), std([0xff9fbf, 0xffd45c, 0xfff4f0][i]));
    f.position.set(-w / 2 + 1.0 + i * 0.4, 2.25, d / 2 + 0.3);
    g.add(f);
  }
  return g;
}

/**
 * 村を組み立てる。colliders に当たり判定を追加し、アニメーション用の更新関数を返す。
 */
export function buildVillage(colliders, ground) {
  const group = new THREE.Group();
  const V = PLACES.village;
  const y0 = V.h;

  const addBoxCollider = (obj, kind = 'house', color = 0xb07a55) => {
    obj.updateMatrixWorld(true);
    colliders.push({ box: new THREE.Box3().setFromObject(obj), color, kind });
  };

  // --- 家 ---
  // [村の中心からの位置x, z, 向き, 幅, 奥行き, 壁, 屋根, 柱]
  const houses = [
    [-19, -10, Math.PI / 2, 8, 7, 0xf4ead8, 0xd9644a, 0x8a5a3b],
    [0, -20, 0, 9, 7, 0xeae3f2, 0x3f8f9c, 0x6b4630],
    [19, -11, -Math.PI / 2, 8, 7, 0xf6e7c8, 0x5a78c4, 0x8a5a3b],
    [-19, 11, Math.PI / 2, 7, 6, 0xe9f1e4, 0xe0a13c, 0x6b4630],
    [20, 12, -Math.PI / 2, 8, 6.5, 0xf4ead8, 0x9a5fb0, 0x8a5a3b],
  ];
  for (const [dx, dz, rot, w, d, wall, roof, trim] of houses) {
    const h = house({ w, d, wall, roof, trim });
    h.position.set(V.x + dx, y0, V.z + dz);
    h.rotation.y = rot;
    group.add(h);
    // 当たり判定は壁の部分だけ（向きは 90 度単位なので AABB で十分）
    const hit = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 7, d + 0.4));
    hit.position.set(V.x + dx, y0 + 3.5, V.z + dz);
    hit.rotation.y = rot;
    addBoxCollider(hit, 'house', roof);
  }

  // --- 井戸（広場の中心） ---
  const well = new THREE.Group();
  const stone = std(0xbdb5a6);
  const ring = shadow(new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.7, 1.1, 12, 1, true), stone));
  ring.material.side = THREE.DoubleSide;
  ring.position.y = 0.55;
  const rim = shadow(new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.2, 6, 16), stone));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 1.1;
  const water = new THREE.Mesh(new THREE.CircleGeometry(1.5, 16), std(0x3b7fc0, { roughness: 0.2 }));
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.5;
  well.add(ring, rim, water);
  const wood = std(0x8a5a3b);
  for (const s of [-1, 1]) {
    const post = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.25, 3.2, 0.25), wood));
    post.position.set(s * 1.5, 1.6, 0);
    well.add(post);
  }
  const wellRoof = gableRoof(2.6, 2.2, 1.1, std(0xd9644a));
  wellRoof.position.y = 3.1;
  wellRoof.rotation.y = Math.PI / 2;
  const bucket = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.25, 0.45, 8), wood);
  bucket.position.set(0, 2.2, 0);
  well.add(wellRoof, bucket);
  well.position.set(V.x, y0, V.z);
  group.add(well);
  colliders.push({
    box: new THREE.Box3(new THREE.Vector3(V.x - 1.8, y0, V.z - 1.8), new THREE.Vector3(V.x + 1.8, y0 + 4, V.z + 1.8)),
    cyl: { x: V.x, z: V.z, r: 1.8 },
    color: 0xbdb5a6,
    kind: 'house',
  });

  // --- 市場の屋台 ---
  const stall = (x, z, rot, stripe) => {
    const s = new THREE.Group();
    const counter = shadow(new THREE.Mesh(new THREE.BoxGeometry(4, 1.1, 1.6), wood));
    counter.position.y = 0.55;
    s.add(counter);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(0.18, 3, 0.18), wood);
      p.position.set(sx * 1.9, 1.5, sz * 0.9 - 0.3);
      s.add(p);
    }
    // しま模様のひさし
    for (let i = 0; i < 6; i++) {
      const c = new THREE.Mesh(new THREE.BoxGeometry(4.4 / 6, 0.12, 2.6), std(i % 2 ? 0xffffff : stripe));
      c.position.set(-2.2 + 4.4 / 12 + (i * 4.4) / 6, 3.05, -0.3);
      c.rotation.x = 0.25;
      c.castShadow = true;
      s.add(c);
    }
    // 売り物（果物・魚）
    const goods = [0xff6b5a, 0xffd45c, 0x8fd46b, 0xffa23c, 0x9fc6e8];
    for (let i = 0; i < 7; i++) {
      const item = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 0), std(goods[i % goods.length]));
      item.position.set(-1.5 + i * 0.5, 1.28, (i % 2) * 0.35 - 0.15);
      s.add(item);
    }
    s.position.set(x, y0, z);
    s.rotation.y = rot;
    group.add(s);
    const hit = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 1.6));
    hit.position.set(x, y0 + 1, z);
    hit.rotation.y = rot;
    addBoxCollider(hit, 'house', stripe);
  };
  stall(V.x + 8, V.z + 7, -Math.PI / 2, 0x2bb5a0);
  stall(V.x - 8, V.z + 7, Math.PI / 2, 0xe0475a);

  // --- 樽と木箱 ---
  const barrelMat = std(0x9a6a44);
  const crateMat = std(0xc49a6c);
  const props = [
    ['barrel', 5, -14], ['barrel', 6.2, -13.2], ['crate', -5, -14], ['crate', -5, -12.7, 1.1],
    ['barrel', 13, 3], ['crate', -13, -3], ['barrel', -14, 20], ['crate', 14, 21],
  ];
  for (const [type, dx, dz, lift = 0] of props) {
    const m = shadow(type === 'barrel'
      ? new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 1.2, 10), barrelMat)
      : new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, 1.1), crateMat));
    m.position.set(V.x + dx, y0 + 0.6 + lift, V.z + dz);
    m.rotation.y = dx;
    group.add(m);
    if (!lift) {
      colliders.push({
        box: new THREE.Box3(new THREE.Vector3(V.x + dx - 0.6, y0, V.z + dz - 0.6), new THREE.Vector3(V.x + dx + 0.6, y0 + 1.2, V.z + dz + 0.6)),
        cyl: { x: V.x + dx, z: V.z + dz, r: 0.6 },
        color: 0x9a6a44,
        kind: 'prop',
      });
    }
  }

  // --- 街灯 ---
  const lampGlow = std(0xffe6a8, { emissive: 0xffc870, emissiveIntensity: 1.2 });
  const lampPos = [[-9, -6], [9, -6], [-9, 16], [9, 16], [3, 26]];
  for (const [dx, dz] of lampPos) {
    const x = V.x + dx, z = V.z + dz;
    const pole = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 4, 6), std(0x4a4e69)));
    pole.position.set(x, y0 + 2, z);
    const lamp = new THREE.Mesh(new THREE.OctahedronGeometry(0.35, 0), lampGlow);
    lamp.position.set(x, y0 + 4.2, z);
    group.add(pole, lamp);
    colliders.push({
      box: new THREE.Box3(new THREE.Vector3(x - 0.2, y0, z - 0.2), new THREE.Vector3(x + 0.2, y0 + 4, z + 0.2)),
      cyl: { x, z, r: 0.2 },
      color: 0x4a4e69,
      kind: 'prop',
    });
  }

  // --- 村の看板 ---
  const sign = new THREE.Group();
  for (const s of [-1, 1]) {
    const p = shadow(new THREE.Mesh(new THREE.BoxGeometry(0.25, 3.2, 0.25), wood));
    p.position.set(s * 1.8, 1.6, 0);
    sign.add(p);
  }
  const boardTex = (() => {
    const c = document.createElement('canvas');
    c.width = 256; c.height = 96;
    const g = c.getContext('2d');
    g.fillStyle = '#c49a6c';
    g.fillRect(0, 0, 256, 96);
    g.fillStyle = '#5a3a24';
    g.font = 'bold 40px "M PLUS Rounded 1c", sans-serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText('シオカゼ村', 128, 50);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  })();
  const board = new THREE.Mesh(new THREE.BoxGeometry(4, 1.4, 0.2), [wood, wood, wood, wood, new THREE.MeshStandardMaterial({ map: boardTex }), new THREE.MeshStandardMaterial({ map: boardTex })]);
  board.position.y = 2.6;
  sign.add(board);
  // 祭壇からの道の入り口に、祭壇の方を向けて立てる
  sign.position.set(V.x - 22, ground(V.x - 22, V.z - 10), V.z - 10);
  sign.rotation.y = Math.atan2(-(V.x - 22), -(V.z - 10));
  group.add(sign);

  // --- 桟橋（南の浜から海へまっすぐ伸びる） ---
  const pierX = V.x + 12;
  let startZ = V.z + 40;
  while (startZ < V.z + 400 && ground(pierX, startZ) > 0.9) startZ += 1;
  startZ -= 4;
  const pierLen = 28;
  const deckY = 1.4;
  const plankMat = std(0xb58a5e);
  for (let i = 0; i < pierLen / 1.2; i++) {
    const plank = shadow(new THREE.Mesh(new THREE.BoxGeometry(4, 0.25, 1.1), plankMat));
    plank.position.set(pierX + (Math.random() - 0.5) * 0.1, deckY - 0.12, startZ + i * 1.2 + 0.6);
    group.add(plank);
  }
  for (let i = 0; i <= pierLen; i += 4) {
    for (const s of [-1, 1]) {
      const post = shadow(new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 5, 6), std(0x7a4e36)));
      post.position.set(pierX + s * 1.9, deckY - 2, startZ + i);
      group.add(post);
    }
  }
  colliders.push({
    box: new THREE.Box3(new THREE.Vector3(pierX - 2, deckY - 0.5, startZ), new THREE.Vector3(pierX + 2, deckY, startZ + pierLen)),
    color: 0xb58a5e,
    kind: 'pier',
  });

  // 小舟
  const boat = new THREE.Group();
  const hullShape = new THREE.Shape();
  hullShape.moveTo(-1.3, 0.8);
  hullShape.lineTo(1.3, 0.8);
  hullShape.lineTo(0.9, 0);
  hullShape.lineTo(-0.9, 0);
  hullShape.lineTo(-1.3, 0.8);
  const hull = shadow(new THREE.Mesh(new THREE.ExtrudeGeometry(hullShape, { depth: 5, bevelEnabled: false }), std(0xd9644a)));
  hull.position.z = -2.5;
  const seat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.15, 0.6), std(0xf4ead8));
  seat.position.y = 0.6;
  boat.add(hull, seat);
  boat.position.set(pierX + 4.2, SEA_LEVEL - 0.3, startZ + pierLen - 5);
  group.add(boat);

  return {
    group,
    update(t) {
      boat.position.y = SEA_LEVEL - 0.3 + Math.sin(t * 1.3) * 0.15;
      boat.rotation.z = Math.sin(t * 1.1) * 0.05;
    },
  };
}

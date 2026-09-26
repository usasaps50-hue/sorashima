import * as THREE from 'three';
import { ITEMS, HAZARDS } from './items.js';

/**
 * 柵と扉を建てる・壊す・開け閉めする。
 *
 * 置き方：4m 四方の格子の線の上に、4m の長さで置く（端どうしがぴったりつながる）。
 * 向き：プレイヤーの正面を横切る向きが基本で、rotate で 90° 回せる。
 * 耐久力：使った木材の耐久力。その土地の環境（寒さ・暑さ…）に弱い木材だと下がる。
 */

const GRID = 4;
const HALF_LEN = 2;
const THICK = 0.3;
const HEIGHT = 2.8;
const SINK = 1.2; // 坂でも浮かないよう、柱を地面にうめる深さ

// 地方ごとの環境（items.js の HAZARDS のキー）
const REGION_HAZARDS = {
  snow: ['cold'],
  highlands: ['cold'],
  desert: ['heat'],
  volcano: ['heat', 'fire'],
  marsh: ['water'],
  forest: ['water'],
};
const WEAK_MULT = 0.6; // 環境に弱い木材の耐久力の倍率

const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.85, flatShading: true, ...extra });
const box = (w, h, d, mat, x, y, z) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = m.receiveShadow = true;
  return m;
};

/** 板の色から、柱の色（少し暗い）を作る */
const darker = (hex, k = 0.72) => new THREE.Color(hex).multiplyScalar(k).getHex();

/**
 * 柵の形。長さの向きがローカル X、地面の高さが y = 0
 * mats: { plank, post }
 */
function fenceShape(mats) {
  const g = new THREE.Group();
  for (const x of [-HALF_LEN + 0.18, 0, HALF_LEN - 0.18]) {
    const h = x === 0 ? 2.3 : 2.6;
    g.add(box(0.34, h + SINK, 0.34, mats.post, x, (h - SINK) / 2, 0));
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.4, 4), mats.post);
    cap.position.set(x, h + 0.2, 0);
    cap.rotation.y = Math.PI / 4;
    cap.castShadow = true;
    g.add(cap);
  }
  g.add(box(HALF_LEN * 2, 0.26, 0.14, mats.plank, 0, 0.85, 0.12));
  g.add(box(HALF_LEN * 2, 0.26, 0.14, mats.plank, 0, 1.75, 0.12));
  return { group: g };
}

/** 扉つきの柵。panel は蝶番（左の柱）を中心に回る */
function doorShape(mats) {
  const g = new THREE.Group();
  for (const x of [-HALF_LEN + 0.2, HALF_LEN - 0.2]) {
    g.add(box(0.4, 3.3 + SINK, 0.4, mats.post, x, (3.3 - SINK) / 2, 0));
  }
  g.add(box(HALF_LEN * 2, 0.34, 0.44, mats.post, 0, 3.4, 0));
  const hinge = new THREE.Group();
  hinge.position.set(-HALF_LEN + 0.42, 0, 0);
  const W = HALF_LEN * 2 - 0.84;
  const panel = new THREE.Group();
  panel.position.x = W / 2;
  // 縦の板を並べ、Z 字の筋交いで留める
  const n = 4;
  for (let i = 0; i < n; i++) {
    panel.add(box(W / n - 0.04, 2.8, 0.16, mats.plank, -W / 2 + (i + 0.5) * (W / n), 1.5, 0));
  }
  panel.add(box(W, 0.24, 0.1, mats.post, 0, 0.6, 0.12));
  panel.add(box(W, 0.24, 0.1, mats.post, 0, 2.4, 0.12));
  const brace = box(Math.hypot(W, 1.8) - 0.2, 0.2, 0.08, mats.post, 0, 1.5, 0.13);
  brace.rotation.z = Math.atan2(1.8, W);
  panel.add(brace);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), mats.knob);
  knob.position.set(W / 2 - 0.35, 1.5, 0.22);
  const knob2 = knob.clone();
  knob2.position.z = -0.22;
  panel.add(knob, knob2);
  hinge.add(panel);
  g.add(hinge);
  return { group: g, hinge };
}

const SHAPES = { fence: fenceShape, door: doorShape };

export function createBuilding(scene, world) {
  const structures = [];
  const matCache = new Map();
  const knobMat = std(0xf4c25b, { metalness: 0.5, roughness: 0.35 });

  function matsFor(woodId) {
    if (!matCache.has(woodId)) {
      const plank = ITEMS[woodId].plank;
      const glow = woodId === 'woodCrystal' ? { emissive: 0x6050a0, emissiveIntensity: 0.35 } : {};
      matCache.set(woodId, { plank: std(plank, glow), post: std(darker(plank), glow), knob: knobMat });
    }
    return matCache.get(woodId);
  }

  // ---------- 置く場所の下見（半透明の形） ----------
  const ghostOk = new THREE.MeshBasicMaterial({ color: 0x7ff0c0, transparent: true, opacity: 0.45, depthWrite: false });
  const ghostNg = new THREE.MeshBasicMaterial({ color: 0xff6a5a, transparent: true, opacity: 0.45, depthWrite: false });
  const ghostMats = { plank: ghostOk, post: ghostOk, knob: ghostOk };
  const ghosts = {};
  for (const [type, shape] of Object.entries(SHAPES)) {
    const s = shape(ghostMats);
    s.group.traverse((o) => { if (o.isMesh) o.castShadow = o.receiveShadow = false; });
    s.group.visible = false;
    scene.add(s.group);
    ghosts[type] = s.group;
  }
  let plan = null; // 今の下見 { type, x, z, y, alongX, ok, reason }

  /** 当たり判定の箱（長さの向きが X か Z か） */
  function footprint(x, y, z, alongX, pad = 0) {
    const hx = alongX ? HALF_LEN : THICK, hz = alongX ? THICK : HALF_LEN;
    return new THREE.Box3(
      new THREE.Vector3(x - hx + pad, y - SINK + pad, z - hz + pad),
      new THREE.Vector3(x + hx - pad, y + HEIGHT + 0.6 - pad, z + hz - pad),
    );
  }

  /** プレイヤーの前に、置ける場所を探す */
  function makePlan(type, pos, facing, rotated) {
    const fx = Math.sin(facing), fz = Math.cos(facing);
    const tx = pos.x + fx * 4.5, tz = pos.z + fz * 4.5;
    // 正面を横切る向き（正面が X 寄りなら、柵は Z 方向に伸びる）
    let alongX = Math.abs(fz) >= Math.abs(fx);
    if (rotated) alongX = !alongX;
    const snapMid = (v) => Math.floor(v / GRID) * GRID + GRID / 2;
    const snapLine = (v) => Math.round(v / GRID) * GRID;
    const x = alongX ? snapMid(tx) : snapLine(tx);
    const z = alongX ? snapLine(tz) : snapMid(tz);
    const ends = alongX ? [[x - HALF_LEN, z], [x, z], [x + HALF_LEN, z]] : [[x, z - HALF_LEN], [x, z], [x, z + HALF_LEN]];
    const hs = ends.map(([ex, ez]) => world.groundHeight(ex, ez));
    const y = hs[1];
    const p = { type, x, z, y, alongX, ok: true, reason: '' };
    const fail = (reason) => { p.ok = false; p.reason = reason; return p; };
    if (Math.min(...hs) < world.waterLevel + 0.2) return fail('水の上には建てられない');
    if (Math.max(...hs) - Math.min(...hs) > 2.4) return fail('坂が急すぎて建てられない');
    const fp = footprint(x, y, z, alongX, 0.15);
    fp.min.y = y + 0.2; // 地面にうまった柱どうしは気にしない
    for (const c of world.collidersNear(x, z)) {
      if (!c.box.isEmpty() && c.box.intersectsBox(fp)) return fail('ほかの物とぶつかる');
    }
    const pb = new THREE.Box3(new THREE.Vector3(pos.x - 0.9, pos.y, pos.z - 0.9), new THREE.Vector3(pos.x + 0.9, pos.y + 5, pos.z + 0.9));
    if (pb.intersectsBox(fp)) return fail('自分と重なっている');
    return p;
  }

  /** その場所の環境と木材の相性（耐久力の倍率と説明） */
  function climate(woodId, x, z) {
    const wood = ITEMS[woodId];
    const region = world.regionAt(x, z);
    const hazards = REGION_HAZARDS[region?.id] ?? [];
    const weak = hazards.filter((h) => !wood.resist[h]);
    const strong = hazards.filter((h) => wood.resist[h]);
    return {
      mult: weak.length ? WEAK_MULT : 1,
      weak: weak.map((h) => `${region.name}では${HAZARDS[h].effect}`),
      strong: strong.map((h) => `${HAZARDS[h].name}に強いので、${region.name}でも平気`),
    };
  }

  // ---------- 建てた物 ----------
  function place(woodId) {
    if (!plan || !plan.ok) return { ok: false, reason: plan?.reason ?? '' };
    const { type, x, y, z, alongX } = plan;
    const shape = SHAPES[type](matsFor(woodId));
    const group = shape.group;
    group.position.set(x, y, z);
    group.rotation.y = alongX ? 0 : Math.PI / 2;
    scene.add(group);
    const wood = ITEMS[woodId];
    const env = climate(woodId, x, z);
    const maxHp = Math.round(wood.durability * (type === 'door' ? 1.2 : 1) * env.mult);
    const s = { type, woodId, x, y, z, alongX, group, hinge: shape.hinge, hp: maxHp, maxHp, colliders: [], shake: 0, open: false, angle: 0, target: 0 };
    const mapColor = wood.plank;
    if (type === 'fence') {
      s.colliders.push({ box: footprint(x, y, z, alongX), color: mapColor, kind: 'fence', structure: s });
    } else {
      // 扉は、両側の柱と、開け閉めする板に分ける
      const post = (off) => {
        const px = alongX ? x + off : x, pz = alongX ? z : z + off;
        return { box: new THREE.Box3(new THREE.Vector3(px - 0.3, y - SINK, pz - 0.3), new THREE.Vector3(px + 0.3, y + 3.6, pz + 0.3)), color: mapColor, kind: 'fence', structure: s };
      };
      s.colliders.push(post(-HALF_LEN + 0.2), post(HALF_LEN - 0.2));
      const pb = footprint(x, y, z, alongX);
      if (alongX) { pb.min.x += 0.45; pb.max.x -= 0.45; } else { pb.min.z += 0.45; pb.max.z -= 0.45; }
      s.panel = { box: pb, color: mapColor, kind: 'fence', structure: s };
      s.colliders.push(s.panel);
    }
    s.colliders.forEach((c) => world.addCollider(c));
    structures.push(s);
    return { ok: true, structure: s, env };
  }

  function remove(s) {
    scene.remove(s.group);
    s.group.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
    for (const c of s.colliders) if (!(c === s.panel && s.open)) world.removeCollider(c);
    structures.splice(structures.indexOf(s), 1);
  }

  const tmp = new THREE.Vector3();
  return {
    get count() { return structures.length; },

    /** 下見を更新する（type が null なら隠す）。今の下見を返す */
    preview(type, pos, facing, rotated, woodId) {
      for (const [k, g] of Object.entries(ghosts)) g.visible = k === type;
      if (!type) { plan = null; return null; }
      plan = makePlan(type, pos, facing, rotated);
      const g = ghosts[type];
      g.position.set(plan.x, plan.y, plan.z);
      g.rotation.y = plan.alongX ? 0 : Math.PI / 2;
      const m = plan.ok ? ghostOk : ghostNg;
      g.traverse((o) => { if (o.isMesh) o.material = m; });
      ghostOk.color.set(ITEMS[woodId].plank).lerp(new THREE.Color(0x7ff0c0), 0.5);
      return plan;
    },

    /** 下見の場所に建てる */
    place,

    /** その場所の環境と、木材の相性 */
    climate,

    /**
     * 攻撃が当たった柵や扉を削る。
     * @returns {{ pos: THREE.Vector3, damage: number, destroyed: boolean, name: string, hp: number, maxHp: number, woodId: string }[]}
     */
    hit(origin, facing, { range, arc, damage }) {
      const out = [];
      const fx = Math.sin(facing), fz = Math.cos(facing);
      for (const s of [...structures]) {
        // 柵の線の上で、いちばん近い点までの距離
        const qx = s.alongX ? THREE.MathUtils.clamp(origin.x, s.x - HALF_LEN, s.x + HALF_LEN) : s.x;
        const qz = s.alongX ? s.z : THREE.MathUtils.clamp(origin.z, s.z - HALF_LEN, s.z + HALF_LEN);
        const dx = qx - origin.x, dz = qz - origin.z;
        const d = Math.hypot(dx, dz);
        if (d > range + 0.6 || Math.abs(s.y - origin.y) > 5) continue;
        if (d > 1.2 && Math.acos(THREE.MathUtils.clamp((dx * fx + dz * fz) / d, -1, 1)) > arc / 2) continue;
        // 紅葉の堅木は「しなやか」で、衝撃に強い
        const soft = s.woodId === 'woodMaple' ? 0.8 : 1;
        const dmg = Math.max(1, Math.round(damage * soft * (0.9 + Math.random() * 0.2)));
        s.hp -= dmg;
        s.shake = 0.3;
        const destroyed = s.hp <= 0;
        const pos = tmp.set(qx, s.y + 1.6, qz).clone();
        if (destroyed) remove(s);
        out.push({ pos, damage: dmg, destroyed, name: ITEMS[s.type].name, hp: Math.max(0, s.hp), maxHp: s.maxHp, woodId: s.woodId });
      }
      return out;
    },

    /** pos から近い扉（なければ null） */
    nearestDoor(pos, maxDist = 5) {
      let best = null, bd = maxDist;
      for (const s of structures) {
        if (s.type !== 'door') continue;
        const d = Math.hypot(pos.x - s.x, pos.z - s.z);
        if (d < bd && Math.abs(pos.y - s.y) < 4) { bd = d; best = s; }
      }
      return best;
    },

    /** 扉を開け閉めする。閉められない時（人が挟まる）は false */
    toggleDoor(s, pos, playerBox) {
      if (!s.open) {
        // 押した人から見て、向こう側へ開く
        const side = s.alongX ? Math.sign(pos.z - s.z) : Math.sign(pos.x - s.x);
        s.target = (side || 1) * 1.7;
        s.open = true;
        world.removeCollider(s.panel);
        return true;
      }
      if (playerBox && playerBox.intersectsBox(s.panel.box)) return false;
      s.target = 0;
      s.open = false;
      world.addCollider(s.panel);
      return true;
    },

    update(dt) {
      for (const s of structures) {
        if (s.hinge && s.angle !== s.target) {
          const step = dt * 6;
          s.angle += THREE.MathUtils.clamp(s.target - s.angle, -step, step);
          s.hinge.rotation.y = s.angle;
        }
        if (s.shake > 0) {
          s.shake = Math.max(0, s.shake - dt);
          const w = Math.sin(s.shake * 60) * 0.12 * (s.shake / 0.3);
          s.group.position.set(s.x + (s.alongX ? 0 : w), s.y, s.z + (s.alongX ? w : 0));
        }
      }
    },
  };
}

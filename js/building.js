import * as THREE from 'three';
import { ITEMS, HAZARDS } from './items.js';

/**
 * 柵・壁・門扉を建てる・壊す・開け閉めする。
 *
 * 置き方：4m 四方の格子の線の上に置く。柵と壁は 4m、門扉は 8m。
 *   端の柱がちょうど格子の点に来るので、横にも角でもぴったりつながる。
 * 囲う：格子の点を 2 つ（対角の角）選ぶと、その四角形のふちを柵や壁で一気に囲う（一直線なら 1 列）。
 * 門扉は、すでに建っている柵や壁の列の上に置くと、その部分と入れ替わる。
 * 耐久力：使った木材の耐久力 × 種類ごとの倍率。その土地の環境（寒さ・暑さ…）に弱い木材だと下がる。
 */

const GRID = 4;
const SINK = 1.2; // 坂でも浮かないよう、柱を地面にうめる深さ
const MAX_SIDE = 12; // 囲う時の、1 辺の最大の枚数（4m × 12 = 48m）

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
const cap = (r, mat, x, y) => {
  const m = new THREE.Mesh(new THREE.ConeGeometry(r, r * 1.5, 4), mat);
  m.position.set(x, y + r * 0.75, 0);
  m.rotation.y = Math.PI / 4;
  m.castShadow = true;
  return m;
};

/** 板の色から、柱の色（少し暗い）を作る */
const darker = (hex, k = 0.72) => new THREE.Color(hex).multiplyScalar(k).getHex();

// ---------- 形（長さの向きがローカル X、地面の高さが y = 0） ----------

/** 柵：格子の点に立つ柱と、2 本の横木 */
function fenceShape(mats) {
  const g = new THREE.Group();
  for (const x of [-2, 0, 2]) {
    const h = x === 0 ? 2.3 : 2.7;
    g.add(box(0.36, h + SINK, 0.36, mats.post, x, (h - SINK) / 2, 0));
    g.add(cap(0.27, mats.post, x, h));
  }
  g.add(box(4, 0.26, 0.14, mats.plank, 0, 0.85, 0.14));
  g.add(box(4, 0.26, 0.14, mats.plank, 0, 1.8, 0.14));
  return { group: g };
}

/** 壁：丸太を積み重ねたログ壁と、両端の太い柱 */
function wallShape(mats) {
  const g = new THREE.Group();
  const logGeo = new THREE.CylinderGeometry(0.42, 0.42, 4, 8).rotateZ(Math.PI / 2);
  for (let i = -1; i < 5; i++) {
    const log = new THREE.Mesh(logGeo, i % 2 ? mats.plank : mats.log);
    log.position.y = 0.42 + i * 0.8;
    log.castShadow = log.receiveShadow = true;
    g.add(log);
  }
  for (const x of [-2, 2]) {
    g.add(box(0.72, 4.5 + SINK, 0.95, mats.post, x, (4.5 - SINK) / 2, 0));
    g.add(cap(0.5, mats.post, x, 4.5));
  }
  return { group: g };
}

/** 門扉の片方の扉（sign = 1 なら右へ、-1 なら左へ伸びる） */
function gatePanel(mats, W, H, sign) {
  const panel = new THREE.Group();
  panel.position.x = (sign * W) / 2;
  const n = 4;
  for (let i = 0; i < n; i++) {
    const px = -W / 2 + (i + 0.5) * (W / n);
    panel.add(box(W / n - 0.05, H - (i % 2) * 0.15, 0.18, mats.plank, px, H / 2 + 0.25, 0));
  }
  for (const y of [0.8, H - 0.5]) panel.add(box(W, 0.26, 0.12, mats.post, 0, y, 0.14));
  const brace = box(Math.hypot(W, H - 1.3) - 0.3, 0.22, 0.1, mats.post, 0, H / 2 + 0.15, 0.15);
  brace.rotation.z = sign * Math.atan2(H - 1.3, W);
  panel.add(brace);
  for (const z of [0.26, -0.26]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.05, 6, 12), mats.knob);
    ring.position.set(sign * (W / 2 - 0.45), H / 2, z); // 門の真ん中寄りの取っ手
    panel.add(ring);
  }
  return panel;
}

/** 門扉：8m の両開き。太い門柱と、上の横木 */
function gateShape(mats) {
  const g = new THREE.Group();
  for (const x of [-4, 4]) {
    g.add(box(0.7, 4.9 + SINK, 0.7, mats.post, x, (4.9 - SINK) / 2, 0));
    g.add(cap(0.5, mats.post, x, 4.9));
  }
  g.add(box(8.8, 0.45, 0.55, mats.post, 0, 4.75, 0));
  g.add(box(3, 0.7, 0.2, mats.plank, 0, 4.2, 0.2)); // 看板
  const W = 4 - 0.4, H = 4;
  const hinges = [-1, 1].map((side) => {
    const hinge = new THREE.Group();
    hinge.position.x = side * (4 - 0.38);
    hinge.add(gatePanel(mats, W, H, -side));
    g.add(hinge);
    return hinge;
  });
  return { group: g, hinges };
}

// half: 長さの半分  thick: 当たり判定の厚みの半分  height: 高さ  hpMult: 耐久力の倍率
const TYPES = {
  fence: { half: 2, thick: 0.3, height: 3.0, hpMult: 1, shape: fenceShape },
  wall: { half: 2, thick: 0.48, height: 4.6, hpMult: 2.2, shape: wallShape },
  door: { half: 4, thick: 0.35, height: 5.0, hpMult: 1.6, shape: gateShape },
};

/** 線分としての形：固定された座標 f と、長さの向きの範囲 [a0, a1] */
const segOf = (s) => {
  const half = TYPES[s.type].half;
  const along = s.alongX ? s.x : s.z;
  return { f: s.alongX ? s.z : s.x, a0: along - half, a1: along + half, alongX: s.alongX };
};

/**
 * 新しく置く物 p と、建っている物 o の関係。
 * 'ok'（重ならない・角でつながるだけ） / 'replace'（門扉で入れ替える） / 'block'
 */
function relation(p, o) {
  const a = segOf(p), b = segOf(o);
  const E = 0.01;
  if (a.alongX === b.alongX) {
    if (Math.abs(a.f - b.f) > E) return 'ok';
    if (Math.min(a.a1, b.a1) - Math.max(a.a0, b.a0) <= E) return 'ok'; // 端と端でつながる
    if (p.type === 'door' && o.type !== 'door' && b.a0 >= a.a0 - E && b.a1 <= a.a1 + E) return 'replace';
    return 'block';
  }
  // 直角：どちらかの内側を横切る・突き当たるなら、ぶつかる（角どうしならつながる）
  const inside = (v, lo, hi) => v > lo + E && v < hi - E;
  const within = (v, lo, hi) => v >= lo - E && v <= hi + E;
  if (inside(b.f, a.a0, a.a1) && within(a.f, b.a0, b.a1)) return 'block';
  if (inside(a.f, b.a0, b.a1) && within(b.f, a.a0, a.a1)) return 'block';
  return 'ok';
}

export function createBuilding(scene, world) {
  const structures = [];
  const matCache = new Map();
  const knobMat = std(0x3a3238, { metalness: 0.5, roughness: 0.4 });

  function matsFor(woodId) {
    if (!matCache.has(woodId)) {
      const plank = ITEMS[woodId].plank;
      const glow = woodId === 'woodCrystal' ? { emissive: 0x6050a0, emissiveIntensity: 0.35 } : {};
      matCache.set(woodId, {
        plank: std(plank, glow),
        log: std(darker(plank, 0.88), glow),
        post: std(darker(plank), glow),
        knob: knobMat,
      });
    }
    return matCache.get(woodId);
  }

  // ---------- 置く場所の下見（半透明の形。囲う時は何枚も出す） ----------
  const ghostOk = new THREE.MeshBasicMaterial({ color: 0x7ff0c0, transparent: true, opacity: 0.42, depthWrite: false });
  const ghostNg = new THREE.MeshBasicMaterial({ color: 0xff6a5a, transparent: true, opacity: 0.42, depthWrite: false });
  const ghostMats = { plank: ghostOk, log: ghostOk, post: ghostOk, knob: ghostOk };
  const ghostPool = { fence: [], wall: [], door: [] };
  function ghost(type, i) {
    const pool = ghostPool[type];
    while (pool.length <= i) {
      const g = TYPES[type].shape(ghostMats).group;
      g.traverse((o) => { if (o.isMesh) o.castShadow = o.receiveShadow = false; });
      g.visible = false;
      scene.add(g);
      pool.push(g);
    }
    return pool[i];
  }
  // 囲う時の、最初の角の目印
  const marker = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 7, 8), new THREE.MeshBasicMaterial({ color: 0xf4c25b, transparent: true, opacity: 0.8 }));
  marker.visible = false;
  scene.add(marker);

  let plans = []; // 今の下見

  /** 当たり判定の箱 */
  function footprint(type, x, y, z, alongX, pad = 0) {
    const T = TYPES[type];
    const hx = alongX ? T.half : T.thick, hz = alongX ? T.thick : T.half;
    return new THREE.Box3(
      new THREE.Vector3(x - hx + pad, y - SINK + pad, z - hz + pad),
      new THREE.Vector3(x + hx - pad, y + T.height - pad, z + hz - pad),
    );
  }

  /** (x, z) に、この向きで置けるかを調べる */
  function planAt(type, x, z, alongX, playerPos) {
    const T = TYPES[type];
    const pts = alongX ? [[x - T.half, z], [x, z], [x + T.half, z]] : [[x, z - T.half], [x, z], [x, z + T.half]];
    const hs = pts.map(([px, pz]) => world.groundHeight(px, pz));
    const y = hs[1];
    const p = { type, x, z, y, alongX, ok: true, reason: '', replace: [] };
    const fail = (reason) => { p.ok = false; p.reason = reason; return p; };
    if (Math.min(...hs) < world.waterLevel + 0.2) return fail('水の上には建てられない');
    if (Math.max(...hs) - Math.min(...hs) > (type === 'door' ? 3 : 2.4)) return fail('坂が急すぎて建てられない');
    const fp = footprint(type, x, y, z, alongX, 0.15);
    fp.min.y = y + 0.2; // 地面にうまった柱どうしは気にしない
    const seen = new Set();
    for (const c of world.collidersNear(x, z)) {
      if (c.structure) {
        const o = c.structure;
        if (seen.has(o)) continue;
        seen.add(o);
        const r = relation(p, o);
        if (r === 'block') return fail('もう建っている物とぶつかる');
        if (r === 'replace') p.replace.push(o);
      } else if (!c.box.isEmpty() && c.box.intersectsBox(fp)) {
        return fail('ほかの物とぶつかる');
      }
    }
    const pb = new THREE.Box3(new THREE.Vector3(playerPos.x - 0.9, playerPos.y, playerPos.z - 0.9), new THREE.Vector3(playerPos.x + 0.9, playerPos.y + 5, playerPos.z + 0.9));
    if (pb.intersectsBox(fp)) return fail('自分と重なっている');
    return p;
  }

  /** プレイヤーの正面の少し先 */
  const aim = (pos, facing, dist = 4.5) => ({ x: pos.x + Math.sin(facing) * dist, z: pos.z + Math.cos(facing) * dist });

  /** いちばん近い格子の点 */
  const snapPoint = (p) => ({ x: Math.round(p.x / GRID) * GRID, z: Math.round(p.z / GRID) * GRID });

  /** 1 つだけ置く時の下見 */
  function singlePlan(type, pos, facing, rotated) {
    const t = aim(pos, facing);
    const fx = Math.sin(facing), fz = Math.cos(facing);
    let alongX = Math.abs(fz) >= Math.abs(fx); // 正面を横切る向き
    if (rotated) alongX = !alongX;
    const snapMid = (v) => Math.floor(v / GRID) * GRID + GRID / 2;
    const snapLine = (v) => Math.round(v / GRID) * GRID;
    // 4m の物は格子の線の中ほど、8m の門扉は格子の点が真ん中に来る
    const along = TYPES[type].half === 2 ? snapMid : snapLine;
    const x = alongX ? along(t.x) : snapLine(t.x);
    const z = alongX ? snapLine(t.z) : along(t.z);
    return [planAt(type, x, z, alongX, pos)];
  }

  /** 角 a から角 b までの四角形のふち（一直線なら 1 列）の下見 */
  function rectPlans(type, a, b, pos) {
    const clampSide = (from, to) => from + THREE.MathUtils.clamp(to - from, -MAX_SIDE * GRID, MAX_SIDE * GRID);
    b = { x: clampSide(a.x, b.x), z: clampSide(a.z, b.z) };
    const x0 = Math.min(a.x, b.x), x1 = Math.max(a.x, b.x);
    const z0 = Math.min(a.z, b.z), z1 = Math.max(a.z, b.z);
    const out = [];
    const rowX = (z) => { for (let x = x0; x < x1 - 0.01; x += GRID) out.push(planAt(type, x + GRID / 2, z, true, pos)); };
    const rowZ = (x) => { for (let z = z0; z < z1 - 0.01; z += GRID) out.push(planAt(type, x, z + GRID / 2, false, pos)); };
    if (z0 === z1) rowX(z0);
    else if (x0 === x1) rowZ(x0);
    else { rowX(z0); rowX(z1); rowZ(x0); rowZ(x1); }
    return { plans: out, w: (x1 - x0) / GRID, d: (z1 - z0) / GRID };
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

  const maxHpOf = (type, woodId, env) => Math.round(ITEMS[woodId].durability * TYPES[type].hpMult * env.mult);

  // ---------- 建てた物 ----------
  function build(p, woodId) {
    const { type, x, y, z, alongX } = p;
    for (const o of p.replace) if (structures.includes(o)) remove(o);
    const shape = TYPES[type].shape(matsFor(woodId));
    const group = shape.group;
    group.position.set(x, y, z);
    group.rotation.y = alongX ? 0 : Math.PI / 2;
    scene.add(group);
    const env = climate(woodId, x, z);
    const maxHp = maxHpOf(type, woodId, env);
    const s = { type, woodId, x, y, z, alongX, group, hinges: shape.hinges, hp: maxHp, maxHp, colliders: [], panels: [], shake: 0, open: false, angle: 0, target: 0 };
    const color = ITEMS[woodId].plank;
    const collider = (b) => ({ box: b, color, kind: 'fence', structure: s });
    if (type !== 'door') {
      s.colliders.push(collider(footprint(type, x, y, z, alongX)));
    } else {
      // 門扉は、両側の門柱と、開け閉めする 2 枚の扉に分ける
      const T = TYPES.door;
      const at = (a0, a1, th) => {
        const b = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
        if (alongX) b.set(new THREE.Vector3(x + a0, y - SINK, z - th), new THREE.Vector3(x + a1, y + T.height, z + th));
        else b.set(new THREE.Vector3(x - th, y - SINK, z + a0), new THREE.Vector3(x + th, y + T.height, z + a1));
        return b;
      };
      s.colliders.push(collider(at(-4.4, -3.6, 0.4)), collider(at(3.6, 4.4, 0.4)));
      s.panels = [collider(at(-3.6, 0, T.thick)), collider(at(0, 3.6, T.thick))];
      s.colliders.push(...s.panels);
    }
    s.colliders.forEach((c) => world.addCollider(c));
    structures.push(s);
    return { s, env };
  }

  function remove(s) {
    scene.remove(s.group);
    s.group.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
    for (const c of s.colliders) if (!(s.open && s.panels.includes(c))) world.removeCollider(c);
    structures.splice(structures.indexOf(s), 1);
  }

  const tmp = new THREE.Vector3();
  return {
    get count() { return structures.length; },

    /** 囲う時の角（プレイヤーの正面に近い格子の点） */
    cornerAt(pos, facing) {
      return snapPoint(aim(pos, facing));
    },

    /**
     * 下見を更新する。type が null なら隠す。
     * start（格子の点）があれば、そこから正面の格子の点までを囲う下見にする。
     * @returns {{ plans, ok: number, reason: string, w?: number, d?: number, hp: number } | null}
     */
    preview(type, pos, facing, rotated, woodId, start = null) {
      marker.visible = !!(type && start);
      if (!type) {
        plans = [];
      } else if (start) {
        const r = rectPlans(type, start, snapPoint(aim(pos, facing)), pos);
        plans = r.plans;
        marker.position.set(start.x, world.groundHeight(start.x, start.z) + 3.5, start.z);
        plans.w = r.w;
        plans.d = r.d;
      } else {
        plans = singlePlan(type, pos, facing, rotated);
      }
      // 下見の形を並べる
      const used = { fence: 0, wall: 0, door: 0 };
      ghostOk.color.set(woodId ? ITEMS[woodId].plank : 0xffffff).lerp(new THREE.Color(0x7ff0c0), 0.5);
      for (const p of plans) {
        const g = ghost(p.type, used[p.type]++);
        g.visible = true;
        g.position.set(p.x, p.y, p.z);
        g.rotation.y = p.alongX ? 0 : Math.PI / 2;
        const m = p.ok ? ghostOk : ghostNg;
        g.traverse((o) => { if (o.isMesh) o.material = m; });
      }
      for (const [t, pool] of Object.entries(ghostPool)) for (let i = used[t]; i < pool.length; i++) pool[i].visible = false;
      if (!type) return null;
      const okCount = plans.filter((p) => p.ok).length;
      const first = plans[0];
      const env = first ? climate(woodId, first.x, first.z) : { mult: 1, weak: [], strong: [] };
      return {
        plans,
        count: plans.length,
        ok: okCount,
        reason: plans.find((p) => !p.ok)?.reason ?? '',
        w: plans.w,
        d: plans.d,
        env,
        hp: maxHpOf(type, woodId, env),
      };
    },

    /** 下見のうち、置ける物をすべて建てる */
    place(woodId) {
      const good = plans.filter((p) => p.ok);
      if (!good.length) return { placed: 0, reason: plans[0]?.reason ?? '' };
      const built = good.map((p) => build(p, woodId));
      plans = [];
      return { placed: built.length, skipped: 0, structures: built.map((b) => b.s), env: built[0].env };
    },

    /** その場所の環境と、木材の相性 */
    climate,

    /**
     * 攻撃が当たった柵・壁・門扉を削る。
     * @returns {{ pos: THREE.Vector3, damage: number, destroyed: boolean, name: string, hp: number, maxHp: number, woodId: string }[]}
     */
    hit(origin, facing, { range, arc, damage }) {
      const out = [];
      const fx = Math.sin(facing), fz = Math.cos(facing);
      for (const s of [...structures]) {
        const half = TYPES[s.type].half;
        // 線の上で、いちばん近い点までの距離
        const qx = s.alongX ? THREE.MathUtils.clamp(origin.x, s.x - half, s.x + half) : s.x;
        const qz = s.alongX ? s.z : THREE.MathUtils.clamp(origin.z, s.z - half, s.z + half);
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

    /** pos から近い門扉（なければ null） */
    nearestDoor(pos, maxDist = 7) {
      let best = null, bd = maxDist;
      for (const s of structures) {
        if (s.type !== 'door') continue;
        const d = Math.hypot(pos.x - s.x, pos.z - s.z);
        if (d < bd && Math.abs(pos.y - s.y) < 5) { bd = d; best = s; }
      }
      return best;
    },

    /** 門扉を開け閉めする。閉められない時（人が挟まる）は false */
    toggleDoor(s, pos, playerBox) {
      if (!s.open) {
        // 押した人から見て、向こう側へ開く
        const side = s.alongX ? Math.sign(pos.z - s.z) : Math.sign(pos.x - s.x);
        s.target = (side || 1) * 1.7;
        s.open = true;
        s.panels.forEach((c) => world.removeCollider(c));
        return true;
      }
      if (playerBox && s.panels.some((c) => playerBox.intersectsBox(c.box))) return false;
      s.target = 0;
      s.open = false;
      s.panels.forEach((c) => world.addCollider(c));
      return true;
    },

    update(dt) {
      for (const s of structures) {
        if (s.hinges && s.angle !== s.target) {
          const step = dt * 4;
          s.angle += THREE.MathUtils.clamp(s.target - s.angle, -step, step);
          // 左の扉と右の扉は、同じ側へ逆回りに開く
          s.hinges[0].rotation.y = s.angle;
          s.hinges[1].rotation.y = -s.angle;
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

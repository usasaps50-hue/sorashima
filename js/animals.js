import * as THREE from 'three';
import { SANCTUARIES } from './world.js';

/**
 * 動物（いまはシロクマだけ）。野生のクマと、仲間になったペットの両方を扱う。
 *
 * 野生：雪原にたまに現れる。ふだんはおとなしいが、攻撃すると怒って襲ってくる。
 *   子グマを攻撃すると、親グマも怒る。
 *   怒ったまま木のわなに入ると、檻が落ちて閉じこめられる。そこで肉をあげると仲間になる。
 * ペット：「ついてくる」か「休憩」（拠点の牧場の中で休み、HP が回復する）。
 */

const inSanctuary = (x, z, pad = 0) => SANCTUARIES.some((s) => Math.hypot(x - s.x, z - s.z) < s.r + pad);

// 親と子の違い。slots: 牧場で使う場所の広さ
export const BEAR_KINDS = {
  adult: {
    label: '親', hp: 260, walk: 3.2, run: 12.5, radius: 2.1, height: 5.2, scale: 1.25,
    damage: 18, reach: 5.2, windup: 0.55, cooldown: 1.8, knockback: 0.35, exp: 45, slots: 2,
    fur: 0xf2ecdc, trapR: 2.4,
  },
  cub: {
    label: '子', hp: 80, walk: 3.6, run: 12, radius: 1.1, height: 2.9, scale: 0.62,
    damage: 6, reach: 3.2, windup: 0.4, cooldown: 1.4, knockback: 0.9, exp: 15, slots: 1,
    fur: 0xffffff, trapR: 2.6,
  },
};

const PET_NAMES = ['ユキ', 'モコ', 'シロ', 'フブキ', 'ミゾレ', 'アラレ', 'コオリ', 'ポポ', 'マシュ', 'ワタ', 'ツララ', 'ハク'];
const ANGER_TIME = 25; // 攻撃されてから怒っている時間（秒）
const TRAP_TIME = 40; // わなの中で暴れて、抜け出すまでの時間（秒）
const SPAWN_EVERY = 20; // 雪原で、クマが現れるかを調べる間隔（秒）
const SPAWN_CHANCE = 0.3; // そのたびに現れる確率
const MAX_WILD_FAMILIES = 2;

// ---------- 見た目 ----------

const BODY_Y = 1.75; // 胴の高さ（脚の長さ）

export function buildBear(K, cub) {
  const root = new THREE.Group();
  const furMat = new THREE.MeshStandardMaterial({ color: K.fur, roughness: 0.95, flatShading: true });
  const pawMat = new THREE.MeshStandardMaterial({ color: 0xd8cfbf, roughness: 1, flatShading: true });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1820, roughness: 0.4 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x1a1820, roughness: 0.3, emissive: 0x000000 });
  const ico = new THREE.IcosahedronGeometry(1, 1);
  const shadowed = (m) => { m.castShadow = true; m.receiveShadow = true; return m; };

  const body = new THREE.Group();
  body.position.y = BODY_Y;
  root.add(body);
  const torso = shadowed(new THREE.Mesh(ico, furMat));
  torso.scale.set(1.35, 1.15, 2.0);
  const hump = shadowed(new THREE.Mesh(ico, furMat));
  hump.scale.set(1.25, 1.15, 1.1);
  hump.position.set(0, 0.25, -0.9);
  const tail = new THREE.Mesh(new THREE.IcosahedronGeometry(0.25, 0), furMat);
  tail.position.set(0, 0.35, -2.0);
  body.add(torso, hump, tail);

  // 頭（子グマは頭が大きめで、丸い）
  const head = new THREE.Group();
  head.position.set(0, 0.65, 1.8);
  const hs = cub ? 1.3 : 1;
  const skull = shadowed(new THREE.Mesh(ico, furMat));
  skull.scale.set(0.8 * hs, 0.72 * hs, 0.88 * hs);
  const snout = shadowed(new THREE.Mesh(ico, furMat));
  snout.scale.set(0.38 * hs, 0.3 * hs, 0.45 * hs);
  snout.position.set(0, -0.2 * hs, 0.75 * hs);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.13 * hs, 8, 6), darkMat);
  nose.position.set(0, -0.1 * hs, 1.17 * hs);
  head.add(skull, snout, nose);
  for (const side of [-1, 1]) {
    const ear = shadowed(new THREE.Mesh(new THREE.IcosahedronGeometry(0.22 * hs, 0), furMat));
    ear.position.set(side * 0.5 * hs, 0.55 * hs, -0.1);
    const eye = new THREE.Mesh(new THREE.SphereGeometry((cub ? 0.12 : 0.09) * hs, 8, 6), eyeMat);
    eye.position.set(side * 0.32 * hs, 0.14 * hs, 0.64 * hs);
    head.add(ear, eye);
  }
  body.add(head);

  // 脚（肩・腰を支点に振る）
  const legs = [];
  for (const [x, z] of [[-0.75, 1.05], [0.75, 1.05], [-0.8, -1.1], [0.8, -1.1]]) {
    const hip = new THREE.Group();
    hip.position.set(x, -0.3, z);
    const leg = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.45, 1.45, 7), furMat));
    leg.position.y = -0.72;
    const paw = new THREE.Mesh(new THREE.IcosahedronGeometry(0.46, 0), pawMat);
    paw.scale.set(1, 0.5, 1.25);
    paw.position.set(0, -1.38, 0.12);
    hip.add(leg, paw);
    body.add(hip);
    legs.push(hip);
  }

  // 休んでいる時の「Zzz」
  const zzz = new THREE.Group();
  const zMat = new THREE.MeshBasicMaterial({ color: 0xbfe8ff, transparent: true, opacity: 0.85 });
  for (let i = 0; i < 3; i++) {
    const z = new THREE.Mesh(new THREE.TorusGeometry(0.16 + i * 0.05, 0.04, 4, 4), zMat);
    z.position.set(0.3 + i * 0.3, i * 0.55, 0);
    zzz.add(z);
  }
  zzz.position.set(0, 3.3, 1.4);
  zzz.visible = false;
  root.add(zzz);

  return { root, body, head, legs, zzz, mats: [furMat, pawMat], eyeMat };
}

// ---------- 動物の管理 ----------

export function createAnimals(scene, world, labelLayer) {
  const list = [];
  let spawnTimer = 6;
  let buildingRef = null; // わなを片づけるため（update で受け取る）
  let spawnedOnce = false;
  let nameIndex = Math.floor(Math.random() * PET_NAMES.length);
  const tmp = new THREE.Vector3();

  function makeLabel() {
    const el = document.createElement('div');
    el.className = 'enemy-label';
    el.innerHTML = '<span class="enemy-name"></span><div class="enemy-hp"><div></div></div><small class="enemy-status"></small>';
    el.style.display = 'none';
    labelLayer.appendChild(el);
    return { el, name: el.querySelector('.enemy-name'), fill: el.querySelector('.enemy-hp div'), status: el.querySelector('.enemy-status'), text: '' };
  }

  function makeBear(kind, x, z, parent = null) {
    const K = BEAR_KINDS[kind];
    const model = buildBear(K, kind === 'cub');
    scene.add(model.root);
    const e = {
      kind, K,
      // スキルなどから使う共通の情報（enemies と同じ形）
      T: { name: `シロクマ（${K.label}）`, radius: K.radius, height: K.height, knockback: K.knockback, hp: K.hp },
      model,
      pos: new THREE.Vector3(x, world.groundHeight(x, z), z),
      home: new THREE.Vector3(x, 0, z),
      vel: new THREE.Vector2(),
      target: new THREE.Vector3(x, 0, z),
      facing: Math.random() * Math.PI * 2,
      hp: K.hp,
      state: 'wander',
      timer: Math.random() * 2,
      cooldown: 0,
      anger: 0,
      wild: true,
      parent,
      name: null,
      mode: null, // ペットの時：'follow' / 'rest'
      trap: null,
      phase: Math.random() * 10,
      pose: 0, // 0 = 立つ、1 = 寝そべる
      flash: 0,
      labelTimer: 0,
      spawnT: 0,
      bleed: null,
      label: makeLabel(),
    };
    list.push(e);
    return e;
  }

  /** 雪原に、親子のクマを出す */
  function spawnFamily(x, z) {
    const mom = makeBear('adult', x, z);
    const r = Math.random();
    const cubs = r < 0.45 ? 0 : r < 0.8 ? 1 : 2;
    for (let i = 0; i < cubs; i++) makeBear('cub', x + (i ? 3 : -3), z - 3, mom);
    return mom;
  }

  function trySpawn(p, force, onEvent) {
    const region = world.regionAt(p.x, p.z);
    if (region?.id !== 'snow') return;
    const families = list.filter((e) => e.wild && e.kind === 'adult' && e.state !== 'dead').length;
    if (families >= MAX_WILD_FAMILIES) return;
    if (!force && Math.random() > SPAWN_CHANCE) return;
    for (let tries = 0; tries < 30; tries++) {
      const a = Math.random() * Math.PI * 2, d = 55 + Math.random() * 60;
      const x = p.x + Math.cos(a) * d, z = p.z + Math.sin(a) * d;
      if (world.regionAt(x, z)?.id !== 'snow') continue;
      if (world.groundHeight(x, z) < 2.5 || world.slopeAt(x, z) > 0.5 || inSanctuary(x, z, 10)) continue;
      const mom = spawnFamily(x, z);
      onEvent?.(mom.parent === null && list.some((c) => c.parent === mom)
        ? 'どこかでシロクマの親子の気配がする…'
        : 'どこかでシロクマの気配がする…');
      return;
    }
  }

  function removeBear(e) {
    scene.remove(e.model.root);
    e.model.root.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
    e.label.el.remove();
    list.splice(list.indexOf(e), 1);
    for (const c of list) if (c.parent === e) c.parent = null;
  }

  function setAngryEyes(e, angry) {
    e.model.eyeMat.emissive.setHex(angry ? 0xff2030 : 0x000000);
    e.model.eyeMat.emissiveIntensity = angry ? 1.2 : 0;
  }

  function anger(e, onEvent) {
    if (!e.wild || e.state === 'dead') return;
    const was = e.anger > 0;
    e.anger = ANGER_TIME;
    if (e.state === 'wander') e.state = 'chase';
    setAngryEyes(e, true);
    if (!was && e.kind === 'adult') onEvent?.('シロクマが怒った！');
  }

  /**
   * 位置を陸の上・障害物の外に保つ。野生のクマは安全地帯に入らない。
   */
  function constrain(e, prevX, prevZ) {
    const r = e.K.radius;
    if (e.wild) {
      for (const s of SANCTUARIES) {
        const dx = e.pos.x - s.x, dz = e.pos.z - s.z;
        const d = Math.hypot(dx, dz);
        if (d < s.r + r) {
          const k = (s.r + r) / Math.max(d, 0.001);
          e.pos.x = s.x + dx * k;
          e.pos.z = s.z + dz * k;
        }
      }
    }
    const g = world.groundHeight(e.pos.x, e.pos.z);
    const g0 = world.groundHeight(prevX, prevZ);
    const step = Math.hypot(e.pos.x - prevX, e.pos.z - prevZ);
    if (g < 1.2 || g - g0 > step * 1.2 + 0.05 || g0 - g > step * 2.2 + 0.05) {
      e.pos.x = prevX;
      e.pos.z = prevZ;
      e.vel.set(0, 0);
      if (e.state === 'wander' || e.mode === 'rest') e.timer = 0;
    }
    for (const c of world.collidersNear(e.pos.x, e.pos.z)) {
      if (c.box.isEmpty() || c.box.min.y > e.pos.y + 2 || c.box.max.y < e.pos.y + 0.3 || c.kind === 'spawn') continue;
      let qx, qz;
      if (c.cyl) { qx = c.cyl.x; qz = c.cyl.z; }
      else {
        qx = THREE.MathUtils.clamp(e.pos.x, c.box.min.x, c.box.max.x);
        qz = THREE.MathUtils.clamp(e.pos.z, c.box.min.z, c.box.max.z);
      }
      const minD = r * 0.8 + (c.cyl ? c.cyl.r : 0);
      const dx = e.pos.x - qx, dz = e.pos.z - qz;
      const dd = Math.hypot(dx, dz);
      if (dd < minD && dd > 0.0001) {
        e.pos.x = qx + (dx / dd) * minD;
        e.pos.z = qz + (dz / dd) * minD;
      }
    }
  }

  function faceTo(e, dx, dz, dt, rate = 6) {
    const target = Math.atan2(dx, dz);
    let diff = target - e.facing;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    e.facing += diff * Math.min(1, dt * rate);
  }

  /** (tx, tz) へ歩く。着いた距離を返す。歩いた速さ（アニメ用）を e.speedNow に入れる */
  function moveToward(e, tx, tz, speed, dt, stopAt = 0.4) {
    const dx = tx - e.pos.x, dz = tz - e.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < stopAt) return d;
    const step = Math.min(d - stopAt * 0.5, speed * dt);
    e.pos.x += (dx / d) * step;
    e.pos.z += (dz / d) * step;
    e.speedNow = speed;
    faceTo(e, dx, dz, dt);
    return d;
  }

  /** 近くに瞬間移動する（ペットを呼ぶ・牧場へ送る時） */
  function teleport(e, x, z) {
    e.pos.set(x, world.groundHeight(x, z), z);
    e.vel.set(0, 0);
    e.spawnT = 0.2;
    e.timer = 0.5;
  }

  /** 野生のクマ 1 頭にダメージ */
  function damageBear(e, damage, from, knockback, onEvent, flinch = true) {
    const dmg = Math.max(1, Math.round(damage * (0.85 + Math.random() * 0.3)));
    e.hp -= dmg;
    e.flash = 0.15;
    e.labelTimer = 6;
    const trapped = e.state === 'trapped';
    if (from && knockback > 0 && !trapped) {
      const dx = e.pos.x - from.x, dz = e.pos.z - from.z;
      const len = Math.max(Math.hypot(dx, dz), 0.001);
      const kb = 12 * e.K.knockback * knockback;
      e.vel.set((dx / len) * kb, (dz / len) * kb);
    }
    const hitPos = new THREE.Vector3(e.pos.x, e.pos.y + e.K.height, e.pos.z);
    if (e.hp <= 0) {
      e.state = 'dead';
      e.timer = 2;
      e.bleed = null;
      e.label.el.style.display = 'none';
      if (e.trap) { buildingRef?.removeTrap(e.trap); e.trap = null; }
      onEvent?.(`${e.T.name}は逃げていった…`);
      return { enemy: e, pos: hitPos, damage: dmg, killed: true, exp: e.K.exp, name: e.T.name };
    }
    anger(e, onEvent);
    // 子グマがやられると、親も怒る
    if (e.parent && e.parent.wild && e.parent.state !== 'dead' && e.parent.anger <= 0) {
      anger(e.parent);
      onEvent?.('子グマを守ろうと、親グマが怒った！');
    }
    if (flinch && !trapped && e.state !== 'swipe') { e.state = 'hurt'; e.timer = 0.25; }
    return { enemy: e, pos: hitPos, damage: dmg, killed: false, exp: 0, name: e.T.name };
  }

  // ---------- 毎フレームの処理 ----------

  /**
   * @param {number} dt
   * @param {{ playerPos, playerFacing, playerActive, playerSwimming, onHitPlayer, onBleed, onEvent, building, pen, forceSpawn }} ctx
   */
  function update(dt, ctx) {
    const p = ctx.playerPos;
    const playerSafe = inSanctuary(p.x, p.z) || ctx.playerSwimming;
    buildingRef = ctx.building;

    // たまに、雪原にクマが現れる（デモでは初めて雪原に来た時に必ず出す）
    spawnTimer -= dt;
    if (spawnTimer <= 0 && ctx.playerActive) {
      spawnTimer = SPAWN_EVERY;
      const force = ctx.forceSpawn && !spawnedOnce;
      const before = list.length;
      trySpawn(p, force, ctx.onEvent);
      if (list.length > before) spawnedOnce = true;
    }

    let petIndex = 0;
    for (const e of [...list]) {
      const K = e.K;
      if (e.state === 'dead') {
        e.timer -= dt;
        e.model.root.rotation.z = Math.min(1.4, (2 - e.timer) * 2);
        if (e.timer <= 0) removeBear(e);
        continue;
      }
      const dist = Math.hypot(p.x - e.pos.x, p.z - e.pos.z);
      if (e.wild) {
        // 遠く離れた野生のクマは、いなくなる
        if (dist > 450 && e.state !== 'trapped') { removeBear(e); continue; }
        e.model.root.visible = dist < 300;
        if (dist > 200) continue;
      } else {
        e.model.root.visible = dist < 300;
      }

      // 出血
      if (e.bleed && e.wild) {
        e.bleed.tick -= dt;
        if (e.bleed.tick <= 0) {
          e.bleed.tick = 1;
          e.bleed.left--;
          const hit = damageBear(e, e.bleed.dmg, null, 0, ctx.onEvent, false);
          ctx.onBleed?.(hit);
          if (e.bleed && e.bleed.left <= 0) e.bleed = null;
          if (e.state === 'dead') continue;
        }
      }

      const prevX = e.pos.x, prevZ = e.pos.z;
      const dx = p.x - e.pos.x, dz = p.z - e.pos.z;
      const dy = Math.abs(p.y - e.pos.y);
      const targetable = ctx.playerActive && !playerSafe && dy < 15; // 追いかけられる
      const reachable = targetable && dy < 4; // 前足が届く
      e.timer -= dt;
      e.cooldown -= dt;
      e.labelTimer -= dt;
      e.speedNow = 0;
      let rear = 0; // 立ち上がる強さ（攻撃の前）
      let lie = 0; // 寝そべる強さ

      if (e.wild) {
        if (e.anger > 0) {
          e.anger -= dt * (targetable && dist < 110 ? 1 : 4);
          if (e.anger <= 0 && e.state !== 'trapped') {
            e.state = 'wander';
            e.home.set(e.pos.x, 0, e.pos.z);
            setAngryEyes(e, false);
          }
        }
        switch (e.state) {
          case 'wander': {
            // 子グマは親のそばを歩く
            if (e.parent && e.parent.state !== 'dead' && e.parent.wild) {
              const px = e.parent.pos.x - Math.sin(e.parent.facing) * 3, pz = e.parent.pos.z - Math.cos(e.parent.facing) * 3;
              if (Math.hypot(px - e.pos.x, pz - e.pos.z) > 4) moveToward(e, px, pz, K.walk * 1.6, dt, 2);
              break;
            }
            if (e.timer > 0) break;
            const d = moveToward(e, e.target.x, e.target.z, K.walk, dt);
            if (d < 0.8) {
              e.timer = 2 + Math.random() * 4;
              const a = Math.random() * Math.PI * 2, r = 4 + Math.random() * 14;
              e.target.set(e.home.x + Math.cos(a) * r, 0, e.home.z + Math.sin(a) * r);
            }
            break;
          }
          case 'chase': {
            if (!targetable) { faceTo(e, dx, dz, dt); break; }
            if (reachable && dist < K.reach && e.cooldown <= 0) { e.state = 'windup'; e.timer = K.windup; break; }
            if (dist > K.radius + 1.4) moveToward(e, p.x, p.z, K.run, dt, K.radius + 1);
            else faceTo(e, dx, dz, dt);
            break;
          }
          case 'windup': {
            faceTo(e, dx, dz, dt);
            rear = 1 - Math.max(0, e.timer) / K.windup;
            if (e.timer <= 0) {
              e.state = 'swipe';
              e.timer = 0.3;
              // 前足でなぎ払う：正面の近くにいれば当たる
              const ang = Math.abs(Math.atan2(Math.sin(Math.atan2(dx, dz) - e.facing), Math.cos(Math.atan2(dx, dz) - e.facing)));
              if (reachable && dist < K.reach + 0.8 && ang < 1.2) ctx.onHitPlayer(K.damage, e.pos.x, e.pos.z);
            }
            break;
          }
          case 'swipe': {
            rear = Math.max(0, e.timer) / 0.3;
            if (e.timer <= 0) { e.state = 'recover'; e.timer = 0.5; e.cooldown = K.cooldown; }
            break;
          }
          case 'recover':
          case 'hurt': {
            if (e.timer <= 0) e.state = e.anger > 0 ? 'chase' : 'wander';
            break;
          }
          case 'trapped': {
            // 檻の中で暴れる。時間がたつと檻を壊して出てくる
            if (e.timer <= 0) {
              ctx.building.removeTrap(e.trap);
              e.trap = null;
              e.state = 'chase';
              anger(e);
              ctx.onEvent?.('シロクマがわなを壊して、抜け出した！');
            }
            break;
          }
        }
        // わなの踏み板を踏んだら、閉じこめられる
        if (e.state !== 'trapped') {
          const trap = ctx.building.armedTrapAt(e.pos.x, e.pos.z, K.trapR);
          if (trap) {
            ctx.building.springTrap(trap);
            e.trap = trap;
            e.state = 'trapped';
            e.timer = TRAP_TIME;
            e.vel.set(0, 0);
            e.pos.x = trap.x;
            e.pos.z = trap.z;
            e.labelTimer = 99;
            ctx.onEvent?.(`${e.T.name}がわなにかかった！　生肉をあげて仲間にしよう`);
          }
        }
      } else {
        // ---------- ペット ----------
        e.hp = Math.min(K.hp, e.hp + dt * (e.mode === 'rest' ? 8 : 1));
        if (e.mode === 'follow') {
          // プレイヤーの後ろに並んでついてくる
          const back = 5 + petIndex * 3.5, side = (petIndex % 2 ? 1 : -1) * 2;
          const f = ctx.playerFacing;
          const tx = p.x - Math.sin(f) * back + Math.cos(f) * side;
          const tz = p.z - Math.cos(f) * back - Math.sin(f) * side;
          const d = Math.hypot(tx - e.pos.x, tz - e.pos.z);
          if (d > 45 || Math.abs(p.y - e.pos.y) > 12) teleport(e, tx, tz);
          else if (d > 1.5) moveToward(e, tx, tz, d > 10 ? 20 : d > 4 ? 12 : K.walk * 1.5, dt, 1);
          else faceTo(e, dx, dz, dt, 2);
          petIndex++;
        } else if (e.mode === 'rest') {
          // 牧場の中を歩いたり、寝そべったりする
          if (ctx.pen) {
            if (e.state === 'sleep') {
              lie = 1;
              if (e.timer <= 0) { e.state = 'idle'; e.timer = 0; }
            } else if (e.timer <= 0) {
              const d = moveToward(e, e.target.x, e.target.z, K.walk, dt);
              if (d < 0.8) {
                if (Math.random() < 0.5) { e.state = 'sleep'; e.timer = 8 + Math.random() * 10; }
                else e.timer = 1 + Math.random() * 3;
                const q = ctx.pen.randomPoint();
                e.target.set(q.x, 0, q.z);
              }
            }
          }
        }
      }

      // ノックバック
      e.pos.x += e.vel.x * dt;
      e.pos.z += e.vel.y * dt;
      e.vel.multiplyScalar(Math.exp(-dt * 6));
      if (e.state !== 'trapped') constrain(e, prevX, prevZ);
      e.pos.y = world.groundHeight(e.pos.x, e.pos.z);

      // クマどうしが重ならないように
      for (const o of list) {
        if (o === e || o.state === 'dead' || e.state === 'trapped') continue;
        const ox = e.pos.x - o.pos.x, oz = e.pos.z - o.pos.z;
        const od = Math.hypot(ox, oz);
        const min = (e.K.radius + o.K.radius) * 0.8;
        if (od < min && od > 0.001) {
          e.pos.x += (ox / od) * (min - od) * 0.5;
          e.pos.z += (oz / od) * (min - od) * 0.5;
        }
      }

      // ---------- 見た目 ----------
      const m = e.model;
      e.spawnT = Math.min(1, e.spawnT + dt * 2);
      e.pose += ((lie ? 1 : 0) - e.pose) * Math.min(1, dt * 3);
      const moving = e.speedNow > 0.1;
      e.phase += dt * (moving ? 2 + e.speedNow * 0.5 : 0);
      const sw = moving ? Math.sin(e.phase) * Math.min(0.7, 0.25 + e.speedNow * 0.04) : 0;
      m.root.position.set(e.pos.x, e.pos.y, e.pos.z);
      m.root.rotation.set(0, e.facing, 0);
      m.root.scale.setScalar(K.scale * e.spawnT);
      const lieK = e.pose;
      m.body.position.y = BODY_Y - lieK * 1.05 + (moving ? Math.abs(Math.sin(e.phase)) * 0.12 : Math.sin(e.phase * 0 + performance.now() / 700) * 0.03);
      m.body.rotation.x = -rear * 0.6;
      m.body.rotation.z = 0;
      m.legs[0].rotation.x = sw - rear * 1.1 - lieK * 1.3;
      m.legs[1].rotation.x = -sw - rear * 1.1 - lieK * 1.3;
      m.legs[2].rotation.x = -sw + lieK * 1.3;
      m.legs[3].rotation.x = sw + lieK * 1.3;
      m.head.rotation.x = rear * -0.4 + lieK * 0.35;
      m.head.rotation.y = 0;
      if (e.state === 'trapped') {
        // 檻の中で暴れる
        const t = performance.now() / 1000;
        m.body.rotation.z = Math.sin(t * 17) * 0.08;
        m.head.rotation.x = -0.35 + Math.sin(t * 5) * 0.2;
        m.legs[0].rotation.x = -0.8 + Math.sin(t * 14) * 0.5;
      }
      m.zzz.visible = lieK > 0.7;
      if (m.zzz.visible) {
        const t = performance.now() / 1000;
        m.zzz.children.forEach((z, i) => { z.position.y = i * 0.55 + (t * 0.4 % 0.55); });
      }

      // ダメージを受けた時に白く光る
      e.flash = Math.max(0, e.flash - dt);
      for (const mat of m.mats) {
        mat.emissive.setHex(0xffffff);
        mat.emissiveIntensity = e.flash > 0 ? 0.7 : 0;
      }
    }
  }

  /** 名前と HP を頭の上に出す */
  function updateLabels(camera) {
    for (const e of list) {
      const el = e.label.el;
      const pet = !e.wild;
      const show = e.state !== 'dead' && (pet || e.labelTimer > 0 || e.anger > 0 || e.state === 'trapped');
      if (!show || !e.model.root.visible) { el.style.display = 'none'; continue; }
      tmp.set(e.pos.x, e.pos.y + e.K.height * (e.pose > 0.5 ? 0.7 : 1) + 0.8, e.pos.z);
      if (tmp.distanceTo(camera.position) > (pet ? 60 : 90)) { el.style.display = 'none'; continue; }
      tmp.project(camera);
      if (tmp.z > 1) { el.style.display = 'none'; continue; }
      el.style.display = '';
      el.classList.toggle('pet', pet);
      const x = (tmp.x + 1) / 2 * window.innerWidth;
      const y = (1 - tmp.y) / 2 * window.innerHeight;
      el.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`;
      e.label.fill.style.width = (Math.max(0, e.hp) / e.K.hp) * 100 + '%';
      const name = pet ? `${e.name}（${e.K.label}）` : e.T.name;
      const status = pet
        ? (e.mode === 'rest' ? (e.state === 'sleep' ? '休憩中 zzz' : '休憩中') : 'ついてくる')
        : e.state === 'trapped' ? `わなの中！ 生肉をあげよう（${Math.ceil(e.timer)}）` : e.anger > 0 ? '怒っている' : '';
      const text = name + '|' + status;
      if (e.label.text !== text) {
        e.label.name.textContent = name;
        e.label.status.textContent = status;
        e.label.status.style.display = status ? '' : 'none';
        e.label.text = text;
      }
    }
  }

  const pets = () => list.filter((e) => !e.wild && e.state !== 'dead');

  return {
    list,
    update,
    updateLabels,

    /** 仲間のクマ */
    get pets() { return pets(); },

    /**
     * プレイヤーの攻撃。origin の前方 arc・range 以内の野生のクマにダメージ。
     * @returns {{ enemy, pos: THREE.Vector3, damage: number, killed: boolean, exp: number, name: string }[]}
     */
    attack(origin, facing, { range, arc, damage, knockback = 1, bleed = false, onEvent }) {
      const fx = Math.sin(facing), fz = Math.cos(facing);
      return this.hitArea((e) => {
        const dx = e.pos.x - origin.x, dz = e.pos.z - origin.z;
        const len = Math.hypot(dx, dz);
        if (len - e.K.radius > range) return false;
        if (Math.abs(origin.y - e.pos.y) > 4) return false;
        const cos = (dx * fx + dz * fz) / Math.max(len, 0.001);
        return len <= e.K.radius + 0.5 || Math.acos(THREE.MathUtils.clamp(cos, -1, 1)) <= arc / 2;
      }, { damage, knockback, from: origin, bleed, onEvent });
    },

    /** test(e) が true になる野生のクマすべてにダメージ（スキル用） */
    hitArea(test, { damage, knockback = 1, from, bleed = false, onEvent }) {
      const hits = [];
      for (const e of [...list]) {
        if (!e.wild || e.state === 'dead' || e.spawnT < 1) continue;
        if (!test(e)) continue;
        const hit = damageBear(e, damage, from, knockback, onEvent ?? this.onEvent);
        if (bleed && !hit.killed) e.bleed = { left: 3, tick: 1, dmg: Math.max(1, Math.round(damage * 0.2)) };
        hits.push(hit);
      }
      return hits;
    },

    /** 知らせ（main.js が設定する） */
    onEvent: null,

    /**
     * 生肉をあげる。わなの中のクマなら仲間になり、ペットなら元気になる。
     * @returns {{ result: 'tamed' | 'fed' | 'notTrapped' | 'none', bear? }}
     */
    feed(pos, building) {
      const near = (e, r) => Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z) < r + e.K.radius;
      const trapped = list.find((e) => e.wild && e.state === 'trapped' && near(e, 6));
      if (trapped) {
        building.removeTrap(trapped.trap);
        trapped.trap = null;
        trapped.wild = false;
        trapped.anger = 0;
        trapped.bleed = null;
        trapped.hp = trapped.K.hp;
        trapped.state = 'idle';
        trapped.mode = 'follow';
        trapped.name = PET_NAMES[nameIndex++ % PET_NAMES.length];
        setAngryEyes(trapped, false);
        return { result: 'tamed', bear: trapped };
      }
      const pet = list.find((e) => !e.wild && e.state !== 'dead' && near(e, 5));
      if (pet) {
        pet.hp = Math.min(pet.K.hp, pet.hp + pet.K.hp * 0.5);
        return { result: 'fed', bear: pet };
      }
      if (list.some((e) => e.wild && e.state !== 'dead' && near(e, 10))) return { result: 'notTrapped' };
      return { result: 'none' };
    },

    /** ペットを牧場で休ませる */
    rest(e, pen) {
      const q = pen.randomPoint();
      teleport(e, q.x, q.z);
      e.mode = 'rest';
      e.state = 'idle';
      const q2 = pen.randomPoint();
      e.target.set(q2.x, 0, q2.z);
    },

    /** ペットを呼んで、連れて行く */
    follow(e, playerPos) {
      teleport(e, playerPos.x + (Math.random() - 0.5) * 6, playerPos.z + 4);
      e.mode = 'follow';
      e.state = 'idle';
    },

    /** 牧場で使っている広さ（親 2・子 1） */
    usedSlots() {
      return pets().filter((e) => e.mode === 'rest').reduce((n, e) => n + e.K.slots, 0);
    },

    /** プレイヤーが倒れた時などに、全員を落ち着かせる */
    calmDown() {
      for (const e of list) {
        if (!e.wild || e.state === 'dead') continue;
        e.anger = 0;
        if (e.state !== 'trapped') { e.state = 'wander'; e.home.set(e.pos.x, 0, e.pos.z); }
        setAngryEyes(e, false);
      }
    },

    /** ミニマップ用 */
    alive() {
      return list.filter((e) => e.state !== 'dead').map((e) => ({ x: e.pos.x, z: e.pos.z, big: e.kind === 'adult', pet: !e.wild }));
    },

    /** 近くの雪原にクマの親子を出す（テスト・デモ用） */
    spawnNear(x, z) {
      return spawnFamily(x, z);
    },
  };
}

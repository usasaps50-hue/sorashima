import * as THREE from 'three';
import { SANCTUARIES, PLACES, ISLANDS } from './world.js';
import { seeded } from './terrain.js';

const RESPAWN_TIME = 20;

/** 安全地帯（祭壇・村）の中か */
const inSanctuary = (x, z, pad = 0) => SANCTUARIES.some((s) => Math.hypot(x - s.x, z - s.z) < s.r + pad);

// ---------- 見た目 ----------

/** クモダマ：ふわふわ浮かぶ紫の雲 */
function buildKumodama(tint = 0x6d5f93) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 2;
  root.add(body);
  const puffMat = new THREE.MeshStandardMaterial({ color: tint, roughness: 0.9, flatShading: true });
  const geo = new THREE.IcosahedronGeometry(1, 1);
  const puffs = [
    [0, 0, 0, 1.25], [0.9, 0.2, -0.2, 0.85], [-0.9, 0.15, -0.1, 0.9],
    [0.3, 0.75, -0.3, 0.8], [-0.4, 0.6, 0.3, 0.7], [0, -0.35, -0.6, 0.8],
  ];
  for (const [x, y, z, s] of puffs) {
    const m = new THREE.Mesh(geo, puffMat);
    m.position.set(x, y, z);
    m.scale.setScalar(s);
    m.castShadow = true;
    body.add(m);
  }
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffe36b, emissive: 0xffc93b, emissiveIntensity: 1 });
  for (const side of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), eyeMat);
    e.scale.set(1, 0.7, 0.5);
    e.position.set(side * 0.42, 0.1, 1.18);
    e.rotation.z = side * -0.35;
    body.add(e);
  }
  return { root, body, mats: [puffMat], eyeMat, baseY: 2, calmEye: 0xffc93b };
}

/** イシモリ：苔の生えた岩の魔物 */
function buildIshimori(tint = 0x8f8a99) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  body.position.y = 1.7;
  root.add(body);
  const rockMat = new THREE.MeshStandardMaterial({ color: tint, roughness: 1, flatShading: true });
  const mossMat = new THREE.MeshStandardMaterial({ color: 0x6fae4f, roughness: 1, flatShading: true });

  const torso = new THREE.Mesh(new THREE.DodecahedronGeometry(1.5, 0), rockMat);
  torso.scale.set(1.1, 0.95, 1);
  torso.castShadow = true;
  const moss = new THREE.Mesh(new THREE.SphereGeometry(1.4, 8, 6, 0, Math.PI * 2, 0, Math.PI * 0.33), mossMat);
  moss.position.y = 0.3;
  body.add(torso, moss);

  const small = new THREE.DodecahedronGeometry(0.55, 0);
  const arms = [];
  for (const side of [-1, 1]) {
    const arm = new THREE.Mesh(small, rockMat);
    arm.position.set(side * 2.0, -0.2, 0.3);
    arm.castShadow = true;
    body.add(arm);
    arms.push(arm);
    const foot = new THREE.Mesh(small, rockMat);
    foot.scale.set(1, 0.7, 1.2);
    foot.position.set(side * 0.75, -1.35, 0.1);
    foot.castShadow = true;
    body.add(foot);
  }
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x9ff6ea, emissive: 0x3fd6c0, emissiveIntensity: 1.2 });
  for (const side of [-1, 1]) {
    const e = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.1), eyeMat);
    e.position.set(side * 0.5, 0.15, 1.4);
    e.rotation.z = side * 0.2;
    body.add(e);
  }
  return { root, body, mats: [rockMat, mossMat], eyeMat, arms, baseY: 1.7, calmEye: 0x3fd6c0 };
}

const TYPES = {
  kumodama: {
    name: 'クモダマ', hp: 30, speed: 7, radius: 1.4, height: 3.6, damage: 8, exp: 6,
    aggro: 22, attackRange: 7, windup: 0.45, cooldown: 1.4, knockback: 1, color: 0x8f7fc0,
    build: buildKumodama,
  },
  ishimori: {
    name: 'イシモリ', hp: 80, speed: 4.5, radius: 1.8, height: 3.6, damage: 15, exp: 18,
    aggro: 18, attackRange: 8, windup: 0.6, cooldown: 2.2, knockback: 0.45, color: 0x8f8a99,
    build: buildIshimori,
  },
};

// 決まった場所に置く敵（遺跡の台地と洞窟の番人）。そのほかは各島の設定で自動的に置く
const P = PLACES.plateau, CV = PLACES.cave;
const SPAWNS = [
  ['ishimori', P.x + 14, P.z - 14], ['ishimori', P.x - 16, P.z + 4], ['ishimori', P.x + 4, P.z + 16],
  ['ishimori', CV.x - 3, CV.z + 5],
];

// ---------- 敵の管理 ----------

export function createEnemies(scene, world, labelLayer) {
  const list = [];
  const effects = [];
  const tmp = new THREE.Vector3();

  function makeLabel(T) {
    const el = document.createElement('div');
    el.className = 'enemy-label';
    el.innerHTML = `<span class="enemy-name">${T.name} <small>Lv${T.level}</small></span><div class="enemy-hp"><div></div></div>`;
    el.style.display = 'none';
    labelLayer.appendChild(el);
    return { el, fill: el.querySelector('.enemy-hp div') };
  }

  // ほかの島の敵：島の設定（island.enemies）に従って、陸の上にランダムに置く
  const spawns = SPAWNS.map(([type, x, z]) => [type, x, z, null]);
  for (const island of ISLANDS) {
    if (!island.enemies) continue;
    const rand = seeded(island.cx * 17 + island.cz * 29 + 3);
    for (const [type, v] of Object.entries(island.enemies)) {
      let placed = 0;
      for (let tries = 0; placed < v.count && tries < 800; tries++) {
        const x = island.cx + (rand() - 0.5) * island.maxR * 1.6;
        const z = island.cz + (rand() - 0.5) * island.maxR * 1.6;
        if (world.groundHeight(x, z) < 2.5 || world.slopeAt(x, z) > 0.5 || inSanctuary(x, z, 8)) continue;
        if (world.regionAt(x, z) !== island) continue; // その地方らしい場所だけ
        if (Object.values(island.places).some((pl) => Math.hypot(x - pl.x, z - pl.z) < pl.r)) continue;
        if (spawns.some(([, sx, sz]) => Math.hypot(x - sx, z - sz) < 14)) continue;
        spawns.push([type, x, z, v]);
        placed++;
      }
    }
  }

  for (const [type, x, z, variant] of spawns) {
    const base = TYPES[type];
    const mult = variant?.mult ?? 1;
    // 島ごとの強さ（HP・攻撃・経験値に倍率をかける）
    const T = {
      ...base,
      name: variant?.name ?? base.name,
      hp: Math.round(base.hp * mult),
      damage: Math.round(base.damage * mult),
      exp: Math.round(base.exp * mult),
      speed: base.speed * (1 + (mult - 1) * 0.15),
      color: variant?.tint ?? base.color,
      level: Math.round(1 + (mult - 1) * 5.5),
    };
    const model = base.build(variant?.tint);
    scene.add(model.root);
    const e = {
      T, type, model,
      home: new THREE.Vector3(x, 0, z),
      pos: new THREE.Vector3(),
      vel: new THREE.Vector2(),
      facing: 0,
      hp: T.hp,
      state: 'wander',
      timer: 0,
      cooldown: 0,
      target: new THREE.Vector3(),
      dir: new THREE.Vector2(),
      jumpFrom: new THREE.Vector3(),
      jumpTo: new THREE.Vector3(),
      hitDone: false,
      flash: 0,
      labelTimer: 0,
      spawnT: 1,
      bob: Math.random() * 10,
      bleed: null,
      label: makeLabel(T),
    };
    list.push(e);
    respawn(e, true);
  }

  function respawn(e, instant = false) {
    e.hp = e.T.hp;
    e.pos.copy(e.home);
    e.pos.y = world.groundHeight(e.home.x, e.home.z);
    e.vel.set(0, 0);
    e.state = 'wander';
    e.timer = Math.random() * 2;
    e.target.copy(e.home);
    e.cooldown = 0;
    e.spawnT = instant ? 1 : 0;
    e.model.root.visible = true;
    setAngry(e, false);
  }

  function setAngry(e, angry) {
    const c = angry ? 0xff5a4a : e.model.calmEye;
    e.model.eyeMat.emissive.setHex(c);
    e.model.eyeMat.color.setHex(angry ? 0xff8a7a : e.model.calmEye);
  }

  function pickWanderTarget(e) {
    const a = Math.random() * Math.PI * 2;
    const r = 3 + Math.random() * 10;
    e.target.set(e.home.x + Math.cos(a) * r, 0, e.home.z + Math.sin(a) * r);
  }

  /**
   * 位置を安全地帯の外・陸の上・障害物の外に保つ。
   * 水の中や急な崖に入ったら、前の位置に戻す。
   */
  function constrain(e, prevX, prevZ) {
    const r = e.T.radius;
    for (const s of SANCTUARIES) {
      const dx = e.pos.x - s.x, dz = e.pos.z - s.z;
      const d = Math.hypot(dx, dz);
      if (d < s.r + r) {
        const k = (s.r + r) / Math.max(d, 0.001);
        e.pos.x = s.x + dx * k;
        e.pos.z = s.z + dz * k;
      }
    }
    const g = world.groundHeight(e.pos.x, e.pos.z);
    const g0 = world.groundHeight(prevX, prevZ);
    const step = Math.hypot(e.pos.x - prevX, e.pos.z - prevZ);
    if (g < 1.2 || (e.state !== 'attack' && (g - g0 > step * 1.1 + 0.05 || g0 - g > step * 2 + 0.05))) {
      e.pos.x = prevX;
      e.pos.z = prevZ;
      e.vel.set(0, 0);
      if (e.state === 'wander') pickWanderTarget(e);
    }
    for (const c of world.collidersNear(e.pos.x, e.pos.z)) {
      if (c.box.min.y > e.pos.y + 2 || c.box.max.y < e.pos.y + 0.3 || c.kind === 'spawn') continue;
      let qx, qz;
      if (c.cyl) { qx = c.cyl.x; qz = c.cyl.z; }
      else {
        qx = THREE.MathUtils.clamp(e.pos.x, c.box.min.x, c.box.max.x);
        qz = THREE.MathUtils.clamp(e.pos.z, c.box.min.z, c.box.max.z);
      }
      const minD = r + (c.cyl ? c.cyl.r : 0);
      const dx = e.pos.x - qx, dz = e.pos.z - qz;
      const dd = Math.hypot(dx, dz);
      if (dd < minD && dd > 0.0001) {
        e.pos.x = qx + (dx / dd) * minD;
        e.pos.z = qz + (dz / dd) * minD;
      }
    }
  }

  function moveToward(e, tx, tz, speed, dt) {
    const dx = tx - e.pos.x, dz = tz - e.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.3) return d;
    const step = Math.min(d, speed * dt);
    e.pos.x += (dx / d) * step;
    e.pos.z += (dz / d) * step;
    faceTo(e, dx, dz, dt);
    return d;
  }

  function faceTo(e, dx, dz, dt) {
    const target = Math.atan2(dx, dz);
    let diff = target - e.facing;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    e.facing += diff * Math.min(1, dt * 8);
  }

  // ---------- 演出 ----------

  const burstGeo = new THREE.IcosahedronGeometry(0.3, 0);
  function burst(pos, color, count = 14) {
    const mat = new THREE.MeshStandardMaterial({ color, flatShading: true, transparent: true });
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(burstGeo, mat);
      m.position.copy(pos);
      const a = Math.random() * Math.PI * 2;
      const s = 4 + Math.random() * 6;
      effects.push({
        mesh: m, t: 0, life: 0.7 + Math.random() * 0.3,
        vel: new THREE.Vector3(Math.cos(a) * s, 5 + Math.random() * 8, Math.sin(a) * s),
      });
      scene.add(m);
    }
  }

  const ringGeo = new THREE.RingGeometry(0.8, 1, 32);
  function shockwave(pos, radius) {
    const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
      color: 0xffe0a0, transparent: true, side: THREE.DoubleSide, depthWrite: false,
    }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(pos.x, pos.y + 0.15, pos.z);
    scene.add(m);
    effects.push({ mesh: m, t: 0, life: 0.4, ring: radius });
  }

  function updateEffects(dt) {
    for (let i = effects.length - 1; i >= 0; i--) {
      const f = effects[i];
      f.t += dt;
      const k = f.t / f.life;
      if (k >= 1) {
        scene.remove(f.mesh);
        effects.splice(i, 1);
        continue;
      }
      if (f.ring) {
        f.mesh.scale.setScalar(1 + k * f.ring);
        f.mesh.material.opacity = 1 - k;
      } else {
        f.vel.y -= 30 * dt;
        f.mesh.position.addScaledVector(f.vel, dt);
        const floor = world.groundHeight(f.mesh.position.x, f.mesh.position.z) + 0.2;
        if (f.mesh.position.y < floor) { f.mesh.position.y = floor; f.vel.multiplyScalar(0.5); f.vel.y = Math.abs(f.vel.y); }
        f.mesh.scale.setScalar(1 - k * 0.8);
        f.mesh.material.opacity = 1 - k * k;
        f.mesh.rotation.x += dt * 8;
      }
    }
  }

  /** 敵 1 体にダメージを与える（from から外向きに吹き飛ばす） */
  function damageEnemy(e, damage, from, knockback = 1, flinch = true) {
    const dmg = Math.max(1, Math.round(damage * (0.85 + Math.random() * 0.3)));
    e.hp -= dmg;
    e.flash = 0.15;
    e.labelTimer = 5;
    if (from && knockback > 0) {
      const dx = e.pos.x - from.x, dz = e.pos.z - from.z;
      const len = Math.max(Math.hypot(dx, dz), 0.001);
      const kb = 12 * e.T.knockback * knockback;
      e.vel.set((dx / len) * kb, (dz / len) * kb);
    }
    const hitPos = new THREE.Vector3(e.pos.x, e.pos.y + e.T.height, e.pos.z);
    if (e.hp <= 0) {
      kill(e);
      return { enemy: e, pos: hitPos, damage: dmg, killed: true, exp: e.T.exp, name: e.T.name };
    }
    if (flinch && e.state !== 'attack') { e.state = 'hurt'; e.timer = 0.35; }
    setAngry(e, true);
    return { enemy: e, pos: hitPos, damage: dmg, killed: false, exp: 0, name: e.T.name };
  }

  function kill(e) {
    e.state = 'dead';
    e.bleed = null;
    e.timer = RESPAWN_TIME;
    e.model.root.visible = false;
    e.label.el.style.display = 'none';
    burst(tmp.copy(e.pos).setY(e.pos.y + e.model.baseY), e.T.color);
  }

  // ---------- 毎フレームの処理 ----------

  /**
   * @param {number} dt
   * @param {{ playerPos: THREE.Vector3, playerActive: boolean, playerSwimming: boolean, onHitPlayer: (damage:number, fromX:number, fromZ:number) => void }} ctx
   */
  function update(dt, ctx) {
    const p = ctx.playerPos;
    const playerSafe = inSanctuary(p.x, p.z) || ctx.playerSwimming;

    for (const e of list) {
      if (e.state === 'dead') {
        e.timer -= dt;
        if (e.timer <= 0) respawn(e);
        continue;
      }
      // 遠くの敵は止めておく（描くのも省略）
      const far = Math.hypot(p.x - e.pos.x, p.z - e.pos.z);
      e.model.root.visible = far < 260;
      if (far > 180) continue;
      // 出血：1 秒ごとに少しずつダメージ
      if (e.bleed) {
        e.bleed.tick -= dt;
        if (e.bleed.tick <= 0) {
          e.bleed.tick = 1;
          e.bleed.left--;
          const hit = damageEnemy(e, e.bleed.dmg, null, 0, false);
          ctx.onBleed?.(hit);
          if (e.bleed && e.bleed.left <= 0) e.bleed = null;
          if (e.state === 'dead') continue;
        }
      }
      const T = e.T;
      const prevX = e.pos.x, prevZ = e.pos.z;
      const dx = p.x - e.pos.x, dz = p.z - e.pos.z;
      const dist = Math.hypot(dx, dz);
      // 高さが大きく違うプレイヤー（塔の上など）には届かない
      const targetable = ctx.playerActive && !playerSafe && Math.abs(p.y - e.pos.y) < 4;
      e.cooldown -= dt;
      e.timer -= dt;
      e.labelTimer -= dt;
      let jumpY = 0;

      switch (e.state) {
        case 'wander': {
          if (targetable && dist < T.aggro) { e.state = 'chase'; setAngry(e, true); break; }
          if (e.timer > 0) break;
          const d = moveToward(e, e.target.x, e.target.z, T.speed * 0.35, dt);
          if (d < 0.5) { e.timer = 1 + Math.random() * 3; pickWanderTarget(e); }
          break;
        }
        case 'return': {
          if (targetable && dist < T.aggro) { e.state = 'chase'; setAngry(e, true); break; }
          const d = moveToward(e, e.home.x, e.home.z, T.speed * 0.7, dt);
          if (d < 1) { e.state = 'wander'; e.timer = 1; }
          break;
        }
        case 'chase': {
          if (!targetable || dist > T.aggro * 1.8) { e.state = 'return'; setAngry(e, false); break; }
          if (dist < T.attackRange && e.cooldown <= 0) {
            e.state = 'windup';
            e.timer = T.windup;
            break;
          }
          if (dist > T.radius + 1.2) moveToward(e, p.x, p.z, T.speed, dt);
          else faceTo(e, dx, dz, dt);
          break;
        }
        case 'windup': {
          faceTo(e, dx, dz, dt);
          if (e.timer <= 0) {
            e.state = 'attack';
            e.hitDone = false;
            const len = Math.max(dist, 0.001);
            e.dir.set(dx / len, dz / len);
            if (e.type === 'ishimori') {
              // プレイヤーのいた場所へ飛びかかる（最大 8m）
              const reach = Math.min(dist, 8);
              e.jumpFrom.copy(e.pos);
              e.jumpTo.set(e.pos.x + e.dir.x * reach, 0, e.pos.z + e.dir.y * reach);
              e.timer = 0.55;
            } else {
              e.timer = 0.35;
            }
          }
          break;
        }
        case 'attack': {
          if (e.type === 'ishimori') {
            const k = 1 - Math.max(e.timer, 0) / 0.55;
            e.pos.lerpVectors(e.jumpFrom, e.jumpTo, k);
            jumpY = Math.sin(k * Math.PI) * 3.5;
            if (e.timer <= 0) {
              shockwave(e.pos, 5);
              const d = Math.hypot(p.x - e.pos.x, p.z - e.pos.z);
              if (targetable && d < 4.5 && p.y - e.pos.y < 1.5) ctx.onHitPlayer(T.damage, e.pos.x, e.pos.z);
              e.state = 'recover';
              e.timer = 0.7;
              e.cooldown = T.cooldown;
            }
          } else {
            e.pos.x += e.dir.x * 20 * dt;
            e.pos.z += e.dir.y * 20 * dt;
            const d = Math.hypot(p.x - e.pos.x, p.z - e.pos.z);
            if (!e.hitDone && targetable && d < T.radius + 1.1) {
              e.hitDone = true;
              ctx.onHitPlayer(T.damage, e.pos.x, e.pos.z);
            }
            if (e.timer <= 0) {
              e.state = 'recover';
              e.timer = 0.5;
              e.cooldown = T.cooldown;
            }
          }
          break;
        }
        case 'recover':
        case 'hurt': {
          if (e.timer <= 0) e.state = targetable ? 'chase' : 'return';
          break;
        }
      }

      // ノックバック
      e.pos.x += e.vel.x * dt;
      e.pos.z += e.vel.y * dt;
      e.vel.multiplyScalar(Math.exp(-dt * 6));

      constrain(e, prevX, prevZ);
      e.pos.y = world.groundHeight(e.pos.x, e.pos.z);

      // 敵どうしが重ならないように
      for (const o of list) {
        if (o === e || o.state === 'dead') continue;
        const ox = e.pos.x - o.pos.x, oz = e.pos.z - o.pos.z;
        const od = Math.hypot(ox, oz);
        const min = e.T.radius + o.T.radius;
        if (od < min && od > 0.001) {
          e.pos.x += (ox / od) * (min - od) * 0.5;
          e.pos.z += (oz / od) * (min - od) * 0.5;
        }
      }

      // 見た目の更新
      const m = e.model;
      e.bob += dt;
      e.spawnT = Math.min(1, e.spawnT + dt * 2);
      m.root.position.set(e.pos.x, e.pos.y + jumpY, e.pos.z);
      m.root.rotation.y = e.facing;
      m.root.scale.setScalar(e.spawnT);
      let squash = 1;
      if (e.state === 'windup') squash = 1 - (1 - e.timer / T.windup) * 0.25 + Math.sin(e.bob * 50) * 0.03;
      if (e.type === 'kumodama') {
        m.body.position.y = m.baseY + Math.sin(e.bob * 3) * 0.25;
        m.body.rotation.z = Math.sin(e.bob * 2) * 0.08;
      } else {
        const walking = e.state === 'chase' || e.state === 'return' || (e.state === 'wander' && e.timer <= 0);
        m.body.position.y = m.baseY + (walking ? Math.abs(Math.sin(e.bob * 8)) * 0.2 : 0);
        m.arms[0].position.y = -0.2 + Math.sin(e.bob * 3) * 0.15;
        m.arms[1].position.y = -0.2 + Math.sin(e.bob * 3 + 1) * 0.15;
      }
      m.body.scale.set(1 / Math.sqrt(squash), squash, 1 / Math.sqrt(squash));

      // ダメージを受けた時に白く光る
      e.flash = Math.max(0, e.flash - dt);
      for (const mat of m.mats) {
        mat.emissive.setHex(0xffffff);
        mat.emissiveIntensity = e.flash > 0 ? 0.8 : 0;
      }
    }

    updateEffects(dt);
  }

  /** 敵の頭上の名前と HP バーを画面上に配置する */
  function updateLabels(camera) {
    for (const e of list) {
      const el = e.label.el;
      const show = e.state !== 'dead' && (e.labelTimer > 0 || e.state === 'chase' || e.state === 'windup' || e.state === 'attack');
      if (!show) { el.style.display = 'none'; continue; }
      tmp.set(e.pos.x, e.pos.y + e.T.height + 0.9, e.pos.z);
      if (tmp.distanceTo(camera.position) > 70) { el.style.display = 'none'; continue; }
      tmp.project(camera);
      if (tmp.z > 1) { el.style.display = 'none'; continue; }
      el.style.display = '';
      const x = (tmp.x + 1) / 2 * window.innerWidth;
      const y = (1 - tmp.y) / 2 * window.innerHeight;
      el.style.transform = `translate(-50%, -100%) translate(${x}px, ${y}px)`;
      e.label.fill.style.width = (Math.max(0, e.hp) / e.T.hp) * 100 + '%';
    }
  }

  return {
    list,
    update,
    updateLabels,

    /**
     * プレイヤーの攻撃。origin の前方 arc（ラジアン）・range（m）以内の敵にダメージ。
     * @returns {{ enemy, pos: THREE.Vector3, damage: number, killed: boolean, exp: number, name: string }[]}
     */
    attack(origin, facing, { range, arc, damage, knockback = 1, bleed = false }) {
      const fx = Math.sin(facing), fz = Math.cos(facing);
      return this.hitArea((e) => {
        const dx = e.pos.x - origin.x, dz = e.pos.z - origin.z;
        const len = Math.hypot(dx, dz);
        if (len - e.T.radius > range) return false;
        if (Math.abs(origin.y - e.pos.y) > 3.5) return false;
        const cos = (dx * fx + dz * fz) / Math.max(len, 0.001);
        return len <= e.T.radius + 0.5 || Math.acos(THREE.MathUtils.clamp(cos, -1, 1)) <= arc / 2;
      }, { damage, knockback, from: origin, bleed });
    },

    /**
     * test(e) が true になる敵すべてにダメージ（スキル用）。
     * from から外向きに吹き飛ばす。bleed: 出血させる  lift: 上に打ち上げる見た目の強さ
     */
    hitArea(test, { damage, knockback = 1, from, bleed = false }) {
      const hits = [];
      for (const e of list) {
        if (e.state === 'dead' || e.spawnT < 1) continue;
        if (!test(e)) continue;
        const hit = damageEnemy(e, damage, from, knockback);
        if (bleed && !hit.killed) e.bleed = { left: 3, tick: 1, dmg: Math.max(1, Math.round(damage * 0.2)) };
        hits.push(hit);
      }
      return hits;
    },

    /** プレイヤーが倒れた時などに、全員を落ち着かせる */
    calmDown() {
      for (const e of list) {
        if (e.state === 'dead') continue;
        e.state = 'return';
        setAngry(e, false);
      }
    },

    /** ミニマップ用 */
    alive() {
      return list.filter((e) => e.state !== 'dead').map((e) => ({ x: e.pos.x, z: e.pos.z, big: e.type === 'ishimori' }));
    },
  };
}

import * as THREE from 'three';

// 移動の数値（単位：m, 秒）。ジャンプの高さは JUMP_POWER² / (2 * GRAVITY) ≒ 6m
const WALK_SPEED = 14;
const JUMP_POWER = 38;
const GRAVITY = 120;
const STEP_HEIGHT = 1.1; // これ以下の段差は自動で登る
const HALF = 0.85; // 当たり判定の横幅の半分
const HEIGHT = 5;
const FALL_LIMIT = -40; // 念のため：これより落ちたらリスポーン
const MAX_SLOPE = 1.15; // 歩いて登れる坂の傾き（高さ/距離）。これより急な崖は登れない
const SWIM_DEPTH = 3.0; // 泳いでいる時、足が水面からこれだけ下にある
const SWIM_SPEED = 0.55; // 泳ぐ速さ（歩きに対する割合）
const WORLD_LIMIT = 1060; // 沖へ出られる限界（世界の端）
const EPS = 0.001;

/**
 * プレイヤーの移動・ジャンプ・当たり判定を担当する。
 * 見た目（character）は object として受け取り、位置と向きだけ動かす。
 */
export function createPlayer(character, world) {
  const obj = character.object;
  const pos = obj.position;
  const vel = new THREE.Vector3();
  const push = new THREE.Vector2(); // ノックバックなど外から受けた水平方向の速度
  let grounded = true;
  let facing = 0;
  let moveAmount = 0;
  let groundKind = null;
  let swimming = false;
  let near = []; // 近くにある当たり判定（毎フレーム取り直す）

  const pmin = new THREE.Vector3();
  const pmax = new THREE.Vector3();
  /** 円柱の中心から見た、プレイヤーの四角形のいちばん近い点 */
  const closestTo = (cyl) => ({
    x: THREE.MathUtils.clamp(cyl.x, pos.x - HALF, pos.x + HALF),
    z: THREE.MathUtils.clamp(cyl.z, pos.z - HALF, pos.z + HALF),
  });

  const overlaps = (c) => {
    const b = c.box;
    pmin.set(pos.x - HALF, pos.y, pos.z - HALF);
    pmax.set(pos.x + HALF, pos.y + HEIGHT, pos.z + HALF);
    const hit =
      pmin.x < b.max.x - EPS && pmax.x > b.min.x + EPS &&
      pmin.y < b.max.y - EPS && pmax.y > b.min.y + EPS &&
      pmin.z < b.max.z - EPS && pmax.z > b.min.z + EPS;
    if (!hit || !c.cyl) return hit;
    const q = closestTo(c.cyl);
    return Math.hypot(q.x - c.cyl.x, q.z - c.cyl.z) < c.cyl.r - EPS;
  };

  /** 円柱から外へ押し出す */
  function pushOutOfCylinder(cyl) {
    const q = closestTo(cyl);
    let nx = q.x - cyl.x, nz = q.z - cyl.z;
    let d = Math.hypot(nx, nz);
    if (d < 1e-6) {
      // 中心がプレイヤーの中に入っている場合は、プレイヤーの中心方向へ
      nx = pos.x - cyl.x; nz = pos.z - cyl.z;
      d = Math.hypot(nx, nz) || 1;
      if (Math.hypot(nx, nz) < 1e-6) nx = 1;
    }
    const push = cyl.r - d + EPS * 2;
    pos.x += (nx / d) * push;
    pos.z += (nz / d) * push;
  }

  /** 水平方向に1軸ずつ動かして、ぶつかったら押し戻す（低い段差は登る） */
  function moveHorizontal(axis, delta) {
    if (delta === 0) return;
    pos[axis] += delta;
    // 地形の急な崖は登れない（歩いている時は坂の傾きで、空中では地面より下に入らないように）
    const g = world.groundHeight(pos.x, pos.z);
    const allowed = pos.y + (grounded || swimming ? Math.abs(delta) * MAX_SLOPE + 0.02 : 0);
    if (g > allowed) {
      pos[axis] -= delta;
      return;
    }
    for (const c of near) {
      const b = c.box;
      if (!overlaps(c)) continue;
      const rise = b.max.y - pos.y;
      if (grounded && rise > 0 && rise <= STEP_HEIGHT) {
        const oldY = pos.y;
        pos.y = b.max.y;
        if (!near.some((o) => o !== c && overlaps(o))) continue;
        pos.y = oldY;
      }
      if (c.cyl) pushOutOfCylinder(c.cyl);
      else pos[axis] = delta > 0 ? b.min[axis] - HALF - EPS : b.max[axis] + HALF + EPS;
    }
  }

  function moveVertical(delta) {
    const wasGrounded = grounded;
    pos.y += delta;
    const wasFalling = delta <= 0;
    grounded = false;
    swimming = false;
    groundKind = null;
    for (const c of near) {
      if (!overlaps(c)) continue;
      if (wasFalling) {
        pos.y = Math.max(pos.y, c.box.max.y);
        grounded = true;
        groundKind = c.kind;
      } else {
        pos.y = c.box.min.y - HEIGHT - EPS;
      }
      vel.y = 0;
    }
    const g = world.groundHeight(pos.x, pos.z);
    if (pos.y <= g) {
      pos.y = g;
      vel.y = 0;
      grounded = true;
      groundKind = 'ground';
    } else if (!grounded && wasGrounded && wasFalling && pos.y - g < 0.7) {
      // 下り坂では地面に吸いつかせる（小さく跳ねないように）
      pos.y = g;
      vel.y = 0;
      grounded = true;
      groundKind = 'ground';
    }
    // 橋などの下り坂でも、足場に吸いつかせる
    if (!grounded && wasGrounded && wasFalling) {
      const y0 = pos.y;
      pos.y -= 0.7;
      let top = -Infinity, kind = null;
      for (const c of near) {
        if (c.box.max.y <= y0 + 0.01 && c.box.max.y > top && overlaps(c)) { top = c.box.max.y; kind = c.kind; }
      }
      pos.y = y0;
      if (kind) {
        pos.y = top;
        vel.y = 0;
        grounded = true;
        groundKind = kind;
      }
    }
    // 深い水では浮いて泳ぐ
    const floatY = world.waterLevel - SWIM_DEPTH;
    if (!grounded && pos.y < floatY && g < floatY) {
      pos.y = floatY;
      if (vel.y < 0) vel.y = 0;
      grounded = true;
      swimming = true;
      groundKind = 'water';
    }
    // 真下に床がある状態で止まっているかを、少しだけ下を調べて判定
    if (!grounded && vel.y <= 0) {
      pos.y -= 0.05;
      const touching = near.find((c) => overlaps(c));
      pos.y += 0.05;
      if (touching) {
        grounded = true;
        groundKind = touching.kind;
      }
    }
  }

  return {
    get grounded() { return grounded; },
    get groundKind() { return groundKind; },
    get facing() { return facing; },
    get position() { return pos; },
    get swimming() { return swimming; },

    /** スポーン地点に戻す。facing は向き（0 = +Z、π = -Z/北） */
    respawn(dir = 0) {
      pos.copy(world.spawnPoint);
      vel.set(0, 0, 0);
      push.set(0, 0);
      facing = dir;
      obj.rotation.y = dir;
      grounded = true;
    },

    /** 向きをすぐに変える（攻撃の方向を決める時など） */
    setFacing(dir) {
      facing = dir;
      obj.rotation.y = dir;
    },

    /** 吹き飛ばす（x/z は水平方向の速度、up は上向きの速度） */
    knockback(x, z, up = 0) {
      push.set(x, z);
      if (up > 0) {
        vel.y = up;
        grounded = false;
      }
    },

    /**
     * @param {number} dt
     * @param {{ x: number, z: number, jump: boolean }} input  x/z はワールド座標系の移動方向（長さ 0〜1）
     */
    update(dt, input) {
      near = world.collidersNear(pos.x, pos.z);
      const len = Math.min(1, Math.hypot(input.x, input.z));
      moveAmount = len;
      const speed = WALK_SPEED * (swimming ? SWIM_SPEED : 1);
      vel.x = input.x * speed + push.x;
      vel.z = input.z * speed + push.y;
      push.multiplyScalar(Math.exp(-dt * 5));

      if (input.jump && grounded) {
        vel.y = JUMP_POWER * (swimming ? 0.55 : 1);
        grounded = false;
      }
      vel.y -= GRAVITY * dt;

      moveHorizontal('x', vel.x * dt);
      moveHorizontal('z', vel.z * dt);
      moveVertical(vel.y * dt);

      // 世界の端から出ないように
      pos.x = THREE.MathUtils.clamp(pos.x, -WORLD_LIMIT, WORLD_LIMIT);
      pos.z = THREE.MathUtils.clamp(pos.z, -WORLD_LIMIT, WORLD_LIMIT);

      // 進行方向へなめらかに向きを変える
      if (len > 0.05 && !input.lockFacing) {
        const target = Math.atan2(input.x, input.z);
        let diff = target - facing;
        diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        facing += diff * Math.min(1, dt * 14);
      }
      obj.rotation.y = facing;

      if (pos.y < FALL_LIMIT) this.respawn(facing);

      character.update(dt, { speed: moveAmount, grounded, swimming });
    },
  };
}

import * as THREE from 'three';
import { ANIM_DURATION } from './attacks.js';
import { buildSword, SWORD_IDS } from './swords.js';

// 主人公の配色
export const DEFAULT_COLORS = {
  skin: 0xffe0c7,
  hair: 0x3b3f7a,
  tunic: 0x2bb5a0,
  scarf: 0xf08a3c,
  pants: 0x4a4e69,
  boots: 0x7a4e36,
  belt: 0x6b4630,
};

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.6, ...extra });

function shadowed(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

/** 頭の表面上の点（前が +Z）。u = 横方向, v = 縦方向（どちらも半径に対する割合） */
function onHead(r, u, v, lift = 0) {
  const x = u * r, y = v * r;
  const z = Math.sqrt(Math.max(0, r * r - x * x - y * y)) + lift;
  return new THREE.Vector3(x, y, z);
}

/**
 * 丸い頭のデフォルメ冒険者。原点は足元、+Z が正面。身長は約 5m。
 */
export function createCharacter(colors = DEFAULT_COLORS) {
  const root = new THREE.Group();
  // 体全体（倒れる動きのために、足元を支点にしたグループへ入れる）
  const body = new THREE.Group();
  root.add(body);

  // 手足（付け根で回転させるためピボット用のグループに入れる）
  const makeLimb = (x, pivotY, len, radius, color, endColor, endScale) => {
    const pivot = new THREE.Group();
    pivot.position.set(x, pivotY, 0);
    const limb = shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(radius, len, 4, 10), mat(color)));
    limb.position.y = -len / 2 - radius * 0.5;
    pivot.add(limb);
    const end = shadowed(new THREE.Mesh(new THREE.SphereGeometry(radius * endScale, 12, 10), mat(endColor)));
    end.position.y = -len - radius * 0.7;
    pivot.add(end);
    body.add(pivot);
    return { pivot, end };
  };

  // 脚
  const legL = makeLimb(-0.42, 1.5, 0.7, 0.34, colors.pants, colors.boots, 1.3).pivot;
  const legR = makeLimb(0.42, 1.5, 0.7, 0.34, colors.pants, colors.boots, 1.3).pivot;
  // ブーツは少し前に伸ばす
  for (const leg of [legL, legR]) leg.children[1].scale.set(1, 0.8, 1.35);

  // 胴（すそが広がったチュニック）
  const torso = new THREE.Group();
  torso.position.y = 1.4;
  const tunic = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.72, 1.0, 1.7, 16), mat(colors.tunic)));
  tunic.position.y = 0.85;
  const belt = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.86, 0.1, 6, 20), mat(colors.belt)));
  belt.rotation.x = Math.PI / 2;
  belt.position.y = 0.55;
  const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.22, 0.08), mat(0xf4c25b, { metalness: 0.6, roughness: 0.3 }));
  buckle.position.set(0, 0.55, 0.93);
  torso.add(tunic, belt, buckle);
  body.add(torso);

  // 腕
  const armL = makeLimb(-0.98, 2.95, 0.75, 0.26, colors.tunic, colors.skin, 1.15).pivot;
  const armR = makeLimb(0.98, 2.95, 0.75, 0.26, colors.tunic, colors.skin, 1.15).pivot;
  armL.rotation.z = -0.12;
  armR.rotation.z = 0.12;

  // 右手の剣（刃は手から前方 +Z に伸びる）
  const sword = new THREE.Group();
  sword.position.y = -0.95;
  sword.rotation.x = 0.35; // ふだんは少し下向き
  const steel = mat(0xe6eef5, { metalness: 0.7, roughness: 0.25 });
  const blade = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.3, 1.6), steel));
  blade.position.z = 1.05;
  const tip = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 4), steel));
  tip.rotation.x = Math.PI / 2;
  tip.scale.x = 0.5;
  tip.position.z = 1.95;
  const guard = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.62, 0.12), mat(0xf4c25b, { metalness: 0.6, roughness: 0.3 })));
  guard.position.z = 0.28;
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.45, 8), mat(0x6b4630));
  grip.rotation.x = Math.PI / 2;
  // 旅人の剣。血の剣は持った時に作って、同じ入れ物（sword）に入れる
  const travelBlade = new THREE.Group();
  travelBlade.add(blade, tip, guard, grip);
  sword.add(travelBlade);
  armR.add(sword);
  const bloodBlades = {};
  let heldBlood = null;

  // 右手に持つ回復薬のびん
  const potion = new THREE.Group();
  potion.position.set(0, -1.32, 0.18);
  potion.scale.setScalar(1.6);
  const glass = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), mat(0xdff4ff, { transparent: true, opacity: 0.55, roughness: 0.1 }));
  const liquid = new THREE.Mesh(new THREE.SphereGeometry(0.17, 12, 10), new THREE.MeshStandardMaterial({ color: 0xff5a6e, emissive: 0xd02040, emissiveIntensity: 0.6 }));
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 0.22, 8), mat(0xdff4ff, { transparent: true, opacity: 0.55 }));
  neck.position.y = 0.26;
  const cork = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.07, 0.1, 8), mat(0xb07a55));
  cork.position.y = 0.4;
  potion.add(liquid, glass, neck, cork);
  potion.visible = false;
  armR.add(potion);

  // 斬撃の軌跡（右肩の縦の面に、後ろ上から前下への弧）
  const trail = new THREE.Mesh(
    new THREE.RingGeometry(1.4, 3.9, 24, 1, -0.4, 3.0),
    new THREE.MeshBasicMaterial({
      color: 0xe8fffb, transparent: true, opacity: 0, side: THREE.DoubleSide,
      depthWrite: false, blending: THREE.AdditiveBlending,
    })
  );
  trail.position.set(0.9, 2.9, 0);
  trail.rotation.y = -Math.PI / 2; // リングの +X を前（+Z）へ
  trail.visible = false;
  body.add(trail);

  // 横薙ぎの軌跡（肩の高さの水平な面に、右後ろから左前への弧）
  // 水平に寝かせたリングの角度 φ は、腕の向き (cosφ, 0, -sinφ) と一致する
  const trailH = new THREE.Mesh(new THREE.RingGeometry(1.4, 4.4, 32, 1, -2.35, 3.4), trail.material.clone());
  trailH.rotation.x = -Math.PI / 2;
  trailH.position.y = 2.8;
  trailH.visible = false;
  body.add(trailH);

  // 回転斬りの軌跡（体のまわりの輪）
  const trailSpin = new THREE.Mesh(new THREE.RingGeometry(1.6, 5.2, 48), trail.material.clone());
  trailSpin.material.color.set(0xfff4c8);
  trailSpin.rotation.x = -Math.PI / 2;
  trailSpin.position.y = 2.4;
  trailSpin.visible = false;
  root.add(trailSpin); // 体と一緒に回らないように root に付ける

  // 斜めの斬撃の軌跡（逆袈裟・袈裟斬り）：縦の軌跡を、前向きの軸のまわりに傾けたもの
  const trailDiag = new THREE.Group();
  trailDiag.position.set(0, 2.9, 0);
  const trailDiagMesh = new THREE.Mesh(new THREE.RingGeometry(1.4, 4.2, 28, 1, -0.5, 3.1), trail.material.clone());
  trailDiagMesh.rotation.y = -Math.PI / 2;
  trailDiag.add(trailDiagMesh);
  trailDiag.visible = false;
  body.add(trailDiag);

  // 突きの軌跡：前へ細く伸びる光
  const trailThrust = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1, 10, 1, true).rotateX(-Math.PI / 2).translate(0, 0, 0.5), trail.material.clone());
  trailThrust.position.set(0.7, 2.8, 0.6);
  trailThrust.visible = false;
  body.add(trailThrust);

  // マフラー（首まわり＋後ろにたなびく端）
  const scarf = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.22, 8, 20), mat(colors.scarf)));
  scarf.rotation.x = Math.PI / 2;
  scarf.position.y = 3.1;
  body.add(scarf);
  const scarfTail = new THREE.Group();
  scarfTail.position.set(0.35, 3.05, -0.55);
  const tailMesh = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.2, 0.12), mat(colors.scarf)));
  tailMesh.position.y = -0.55;
  scarfTail.add(tailMesh);
  body.add(scarfTail);

  // 頭
  const R = 1.05;
  const headGroup = new THREE.Group();
  headGroup.position.y = 4.05;
  const head = shadowed(new THREE.Mesh(new THREE.SphereGeometry(R, 28, 20), mat(colors.skin, { roughness: 0.75, emissive: 0x5a3a2a, emissiveIntensity: 0.35 })));
  headGroup.add(head);

  // 髪：頭の上半分を覆うキャップ＋前髪＋アホ毛
  const hairMat = mat(colors.hair, { roughness: 0.5, flatShading: true });
  const hairCap = shadowed(new THREE.Mesh(new THREE.SphereGeometry(R * 1.08, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.52), hairMat));
  hairCap.rotation.x = -0.35; // 後ろに傾けて顔を出す
  headGroup.add(hairCap);
  for (let i = -2; i <= 2; i++) {
    const bang = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.55, 4), hairMat));
    const p = onHead(R, i * 0.22, 0.55, 0.02);
    bang.position.copy(p);
    bang.rotation.set(Math.PI + 0.5, 0, i * 0.15);
    headGroup.add(bang);
  }
  const tuft = shadowed(new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.7, 5), hairMat));
  tuft.position.set(0.1, R * 1.1, 0.1);
  tuft.rotation.set(0.3, 0, -0.5);
  headGroup.add(tuft);

  // 目（黒目＋光）
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x1d1b33, roughness: 0.3 });
  const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const eyes = [];
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.15, 12, 10), eyeMat);
    eye.scale.set(0.9, 1.35, 0.45);
    eye.position.copy(onHead(R, side * 0.34, -0.02, -0.03));
    eye.lookAt(eye.position.clone().multiplyScalar(2));
    headGroup.add(eye);
    eyes.push(eye);
    const shine = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), shineMat);
    shine.position.copy(onHead(R, side * 0.34 + 0.05, 0.07, 0.03));
    headGroup.add(shine);
  }
  // ほっぺ
  const blushMat = new THREE.MeshBasicMaterial({ color: 0xff9aa2, transparent: true, opacity: 0.6 });
  for (const side of [-1, 1]) {
    const blush = new THREE.Mesh(new THREE.CircleGeometry(0.13, 16), blushMat);
    blush.scale.x = 1.4;
    const p = onHead(R, side * 0.55, -0.25, 0.01);
    blush.position.copy(p);
    blush.lookAt(p.clone().multiplyScalar(2));
    headGroup.add(blush);
  }
  // 口（小さな笑顔）
  const mouth = new THREE.Mesh(
    new THREE.TorusGeometry(0.1, 0.025, 6, 12, Math.PI),
    new THREE.MeshBasicMaterial({ color: 0x5a2d2d })
  );
  mouth.position.copy(onHead(R, 0, -0.3, 0.005));
  mouth.rotation.z = Math.PI;
  mouth.rotation.x = -0.3;
  headGroup.add(mouth);

  body.add(headGroup);

  // アニメーション状態
  let t = Math.random() * 10;
  let waveTime = -1;
  let walkPhase = 0;
  let walkBlend = 0;
  let airBlend = 0;
  let runBlend = 0; // 走っている度合い
  let blinkTimer = 2 + Math.random() * 3;
  let attackTime = -1;
  let attackKind = 0;
  let attackSpeed = 1; // 剣ごとの振りの速さ
  let stance = 'fists'; // 待機の構え：'fists'（素手）/ 'sword'（旅人の剣）/ 'blood'（魔剣）/ 'item'
  let glowBoost = 1; // 魔剣の光の強さ（強化中は明るく）
  let hurtTime = 0;
  let fainted = false;
  let faintBlend = 0;

  // 細かい動きのための状態
  let wasGrounded = true;
  let landTime = -1; // 着地してからの時間（つぶれる動き）
  let takeoffTime = -1; // 踏み切ってからの時間（伸びる動き）
  let lastFacing = 0;
  let turnLean = 0;
  let idleTime = 0; // じっとしている時間
  let stretchTime = -1; // 伸びの動き
  const look = { yaw: 0, pitch: 0, targetYaw: 0, targetPitch: 0, timer: 2 };

  // コマ落とし：ポーズを 1 秒に STEP_FPS 回だけ更新する（移動そのものはなめらかなまま）
  const STEP_FPS = 12;
  let stepped = true;
  let stepAcc = 0;

  // ダメージ時に赤く光らせるため、元の発光色を覚えておく
  const flashMats = [];
  body.traverse((o) => {
    if (o.isMesh && o.material.isMeshStandardMaterial && !flashMats.includes(o.material)) flashMats.push(o.material);
  });
  const baseEmissive = flashMats.map((m) => ({ color: m.emissive.getHex(), intensity: m.emissiveIntensity }));

  const lerp = THREE.MathUtils.lerp;
  const approach = (cur, target, rate, dt) => cur + (target - cur) * Math.min(1, dt * rate);

  /** ポーズを計算する（dt はこのコマまでの経過時間） */
  function pose(dt, state) {
    const speed = state.speed ?? 0;
    const grounded = state.grounded ?? true;
    t += dt;
    walkBlend = approach(walkBlend, grounded ? speed : 0, 10, dt);
    airBlend = approach(airBlend, grounded ? 0 : 1, 12, dt);
    runBlend = approach(runBlend, state.run && grounded ? 1 : 0, 8, dt);
    walkPhase += dt * 10 * Math.max(walkBlend, 0.2) * (1 + 0.55 * runBlend);
    const idle = (1 - walkBlend) * (1 - airBlend);
    armL.rotation.y = 0;
    armR.rotation.y = 0;
    sword.rotation.x = 0.35;
    let spinY = 0;

    // 着地・踏み切りの瞬間を見つける
    if (grounded && !wasGrounded) landTime = 0;
    if (!grounded && wasGrounded) takeoffTime = 0;
    wasGrounded = grounded;

    // 方向転換の速さ（体を内側に傾けるため）
    let dYaw = root.rotation.y - lastFacing;
    dYaw = Math.atan2(Math.sin(dYaw), Math.cos(dYaw));
    lastFacing = root.rotation.y;
    turnLean = approach(turnLean, THREE.MathUtils.clamp(-(dYaw / Math.max(dt, 0.001)) * 0.04, -0.22, 0.22) * walkBlend, 8, dt);

    // じっとしている時間（しばらく放っておくと伸びをする）
    const busy = attackTime >= 0 || waveTime >= 0 || fainted;
    if (idle > 0.9 && !busy) idleTime += dt;
    else { idleTime = 0; stretchTime = -1; }
    if (stretchTime < 0 && idleTime > 7) stretchTime = 0;

    // ---- 呼吸と重心移動（待機中） ----
    const breathe = Math.sin(t * 2.2);
    const swayFB = (Math.sin(t * 1.3) * 0.7 + Math.sin(t * 0.47 + 1) * 0.3) * idle; // 前後
    const swayLR = Math.sin(t * 0.8 + 0.5) * idle; // 左右

    // ---- 歩き ----
    const swing = Math.sin(walkPhase) * 0.8 * walkBlend * (1 + 0.45 * runBlend);
    const bounce = Math.abs(Math.sin(walkPhase)) * 0.14 * walkBlend * (1 + 0.6 * runBlend);

    armL.rotation.x = swing + swayFB * 0.06 + breathe * 0.03 * idle;
    armR.rotation.x = -swing + swayFB * 0.06 - breathe * 0.03 * idle;
    armL.rotation.z = -0.12 - breathe * 0.035 * idle - walkBlend * 0.05;
    armR.rotation.z = 0.12 + breathe * 0.035 * idle + walkBlend * 0.05;
    legL.rotation.x = -swing + swayFB * 0.03;
    legR.rotation.x = swing + swayFB * 0.03;
    legL.rotation.z = swayLR * 0.025;
    legR.rotation.z = swayLR * 0.025;

    // 上半身：呼吸でふくらみ、歩くと腕と逆にひねる
    torso.position.y = 1.4 + bounce + breathe * 0.025 * idle;
    torso.scale.set(1 + breathe * 0.012 * idle, 1, 1 + breathe * 0.018 * idle);
    torso.rotation.y = -Math.sin(walkPhase) * 0.14 * walkBlend;

    // 頭：歩くと小さくうなずき、待機中はときどき辺りを見回す
    look.timer -= dt;
    if (look.timer <= 0) {
      const glance = Math.random() < 0.6;
      look.targetYaw = glance ? (Math.random() - 0.5) * 1.1 : 0;
      look.targetPitch = glance ? (Math.random() - 0.4) * 0.25 : 0;
      look.timer = 1.5 + Math.random() * 3;
    }
    look.yaw = approach(look.yaw, look.targetYaw * idle, 5, dt);
    look.pitch = approach(look.pitch, look.targetPitch * idle, 5, dt);
    headGroup.position.y = 4.05 + bounce * 1.1 + breathe * 0.04 * idle;
    headGroup.rotation.y = look.yaw;
    headGroup.rotation.x = look.pitch + Math.sin(walkPhase * 2) * 0.04 * walkBlend - swayFB * 0.03;
    headGroup.rotation.z = Math.sin(walkPhase) * 0.05 * walkBlend + swayLR * 0.03;

    scarf.position.y = 3.1 + bounce;
    scarfTail.position.y = 3.05 + bounce;
    // 走る時は、ひじを曲げたように腕を前寄りで大きく振る
    if (runBlend > 0.01) {
      armL.rotation.x -= 0.35 * runBlend;
      armR.rotation.x -= 0.35 * runBlend;
      armL.rotation.z -= 0.12 * runBlend;
      armR.rotation.z += 0.12 * runBlend;
    }
    scarfTail.rotation.x = -0.2 - walkBlend * 0.9 - runBlend * 0.5 - airBlend * 0.6 + Math.sin(t * 6) * 0.08 * (0.3 + walkBlend) + swayFB * 0.05;
    scarfTail.rotation.z = Math.sin(t * 2.3) * 0.08 * (0.4 + walkBlend);

    // ---- 体全体：重心移動・前傾・腰の揺れ・方向転換の傾き ----
    let bodyX = swayFB * 0.035 + walkBlend * 0.12 + runBlend * 0.18; // 歩くと少し前傾、走るともっと
    let bodyZ = swayLR * 0.025 + Math.sin(walkPhase) * 0.045 * walkBlend + turnLean;
    let scaleY = 1;

    // ---- 持っている物ごとの構え（待機中ほど強く、歩くと半分くらい残す） ----
    const guard = idle + walkBlend * 0.5;
    if (stance === 'fists') {
      // 素手：両拳をあごの前に構え、つま先で軽く弾む
      const hop = Math.abs(Math.sin(t * 5.5)) * idle;
      armL.rotation.x = lerp(armL.rotation.x, -1.15 + Math.sin(t * 5.5) * 0.06, guard);
      armL.rotation.z = lerp(armL.rotation.z, 0.42, guard);
      armR.rotation.x = lerp(armR.rotation.x, -0.95 - Math.sin(t * 5.5 + 1) * 0.06, guard);
      armR.rotation.z = lerp(armR.rotation.z, -0.42, guard);
      scaleY -= hop * 0.035;
      bodyX += 0.05 * idle;
      torso.rotation.y = lerp(torso.rotation.y, 0.18, idle);
      headGroup.rotation.x += 0.08 * idle;
    } else if (stance === 'sword') {
      // 旅人の剣：剣を体の横に下げた自然体。ときどき剣先を少し上げる
      armR.rotation.x = lerp(armR.rotation.x, -0.25 + Math.max(0, Math.sin(t * 0.7)) * 0.2, idle);
      sword.rotation.x = 0.35 + 0.3 * idle;
    } else if (stance === 'blood') {
      // 魔剣：前かがみになり、剣を低く斜めに構える。うつむき気味で、にらむ
      armR.rotation.x = lerp(armR.rotation.x, -0.55 + Math.sin(t * 1.1) * 0.05, guard);
      armR.rotation.z = lerp(armR.rotation.z, 0.35, guard);
      sword.rotation.x = 0.35 + 0.55 * guard;
      armL.rotation.x = lerp(armL.rotation.x, -0.35, idle);
      armL.rotation.z = lerp(armL.rotation.z, -0.55, idle); // 左手はだらりと外へ
      bodyX += 0.1 * idle;
      bodyZ += 0.05 * idle;
      headGroup.rotation.x += 0.14 * idle;
      look.yaw *= 0.4; // きょろきょろしない
      headGroup.rotation.y = look.yaw;
      legL.rotation.x -= 0.15 * idle; // 足を少し開いて踏ん張る
      legR.rotation.x += 0.2 * idle;
    }

    // 伸び（両腕を上げて、体を後ろにそらす）
    if (stretchTime >= 0) {
      stretchTime += dt;
      const k = Math.min(stretchTime / 2.4, 1);
      const s = Math.sin(Math.min(k * 3, 1) * Math.PI / 2) * (k > 0.7 ? (1 - k) / 0.3 : 1);
      armL.rotation.z = lerp(armL.rotation.z, -2.7, s);
      armR.rotation.z = lerp(armR.rotation.z, 2.7, s);
      armL.rotation.x = lerp(armL.rotation.x, -0.3, s);
      armR.rotation.x = lerp(armR.rotation.x, -0.3, s);
      bodyX -= 0.12 * s;
      headGroup.rotation.x -= 0.25 * s;
      scaleY += 0.04 * s;
      eyes.forEach((e) => { e.scale.y = lerp(1.35, 0.2, s); });
      if (k >= 1) { stretchTime = -1; idleTime = -6 - Math.random() * 6; }
    }

    // 着地でつぶれ、踏み切りで伸びる
    if (landTime >= 0) {
      landTime += dt;
      const k = landTime / 0.25;
      scaleY -= Math.sin(Math.min(k, 1) * Math.PI) * 0.16;
      legL.rotation.x -= Math.sin(Math.min(k, 1) * Math.PI) * 0.3;
      legR.rotation.x -= Math.sin(Math.min(k, 1) * Math.PI) * 0.3;
      if (k >= 1) landTime = -1;
    }
    if (takeoffTime >= 0) {
      takeoffTime += dt;
      const k = takeoffTime / 0.2;
      scaleY += Math.sin(Math.min(k, 1) * Math.PI) * 0.1;
      if (k >= 1) takeoffTime = -1;
    }

    // ジャンプ中：腕を広げ、片ひざを曲げる
    if (airBlend > 0.01) {
      armL.rotation.z = lerp(armL.rotation.z, -1.1, airBlend);
      armR.rotation.z = lerp(armR.rotation.z, 1.1, airBlend);
      armL.rotation.x = lerp(armL.rotation.x, -0.3, airBlend);
      armR.rotation.x = lerp(armR.rotation.x, -0.3, airBlend);
      legL.rotation.x = lerp(legL.rotation.x, -0.7, airBlend);
      legR.rotation.x = lerp(legR.rotation.x, 0.2, airBlend);
    }

    // まばたき
    blinkTimer -= dt;
    if (stretchTime < 0) {
      const closed = blinkTimer < 0.12;
      for (const e of eyes) e.scale.y = closed ? 0.15 : 1.35;
    }
    if (blinkTimer < 0) blinkTimer = 2 + Math.random() * 3;

    // 攻撃（3種類）
    trail.visible = trailH.visible = trailSpin.visible = trailDiag.visible = trailThrust.visible = false;
    if (attackTime >= 0) {
      attackTime += dt * attackSpeed;
      const a = attackTime;
      const dur = ANIM_DURATION[attackKind];
      const ease = (x) => 1 - Math.pow(1 - Math.min(Math.max(x, 0), 1), 3);
      // 区間 [t0, t1] の中での進み具合（0〜1）
      const seg = (t0, t1) => Math.min(Math.max((a - t0) / (t1 - t0), 0), 1);
      const back = seg(dur - 0.18, dur); // 最後の戻し

      if (attackKind === 0) {
        // ① 縦斬り：振りかぶって → 真上から振り下ろす
        let armX;
        if (a < 0.1) armX = lerp(armR.rotation.x, -2.8, ease(a / 0.1));
        else if (a < 0.22) armX = lerp(-2.8, -0.15, ease(seg(0.1, 0.22)));
        else armX = lerp(-0.15, armR.rotation.x, back);
        armR.rotation.x = armX;
        armR.rotation.z = 0.25;
        armL.rotation.x = lerp(armL.rotation.x, 0.5, 1 - back); // 左手は後ろへ引いてバランス
        torso.rotation.y = a < 0.1 ? -0.25 * (a / 0.1) : lerp(-0.25, 0.2, seg(0.1, 0.22)) * (1 - back);
        bodyX += a < 0.1 ? -0.05 : 0.12 * (1 - seg(0.1, 0.4));
        trail.visible = a > 0.1 && a < 0.36;
        trail.material.opacity = a < 0.22 ? 0.75 : 0.75 * (1 - seg(0.22, 0.36));
      } else if (attackKind === 1) {
        // ② 横薙ぎ：腕を横に伸ばし、体をひねって右後ろ → 左前へ大きく払う
        const up = ease(seg(0, 0.1)) * (1 - back);
        const sweep = ease(seg(0.1, 0.26));
        armR.rotation.z = lerp(armR.rotation.z, 1.45, up);
        armR.rotation.x = 0;
        armR.rotation.y = lerp(0, lerp(0.9, -2.3, sweep), up);
        sword.rotation.x = lerp(0.35, 1.25, up); // 刃を腕の延長に寝かせる
        armL.rotation.z = lerp(armL.rotation.z, -0.9, up);
        armL.rotation.y = lerp(0, lerp(0.6, -0.4, sweep), up);
        torso.rotation.y = lerp(0.4, -0.45, sweep) * up;
        bodyZ += lerp(0.08, -0.1, sweep) * up;
        bodyX += 0.08 * up;
        headGroup.rotation.y = lerp(0.3, -0.3, sweep) * up;
        trailH.visible = a > 0.1 && a < 0.4;
        trailH.material.opacity = a < 0.26 ? 0.7 : 0.7 * (1 - seg(0.26, 0.4));
      } else if (attackKind === 2) {
        // ③ 回転斬り：しゃがんでためる → 跳ねながら一回転 → 着地
        const charge = ease(seg(0, 0.12));
        const spin = seg(0.12, 0.42);
        const out = charge * (1 - back);
        armR.rotation.z = lerp(armR.rotation.z, 1.5, out);
        armR.rotation.x = 0;
        armR.rotation.y = lerp(0, 0.7, out) * (1 - spin * 0.6);
        sword.rotation.x = lerp(0.35, 1.3, out);
        armL.rotation.z = lerp(armL.rotation.z, -1.3, out);
        legL.rotation.x -= 0.5 * charge * (1 - spin);
        legR.rotation.x += 0.3 * charge * (1 - spin);
        scaleY -= 0.12 * charge * (1 - seg(0.12, 0.2));
        spinY = -Math.PI * 2 * (1 - Math.pow(1 - spin, 2)); // 体ごと一回転
        headGroup.rotation.y = 0;
        trailSpin.visible = a > 0.16 && a < 0.5;
        trailSpin.material.opacity = 0.75 * (1 - seg(0.3, 0.5));
        trailSpin.scale.setScalar(0.8 + seg(0.16, 0.5) * 0.35);
      } else if (attackKind === 3) {
        // 素手① ジャブ：左手をすばやく前に突き出す
        const hit = ease(seg(0, 0.07)) * (1 - seg(0.14, dur));
        armL.rotation.x = lerp(armL.rotation.x, -1.55, hit);
        armL.rotation.z = lerp(armL.rotation.z, 0.15, hit);
        armR.rotation.x = lerp(armR.rotation.x, -0.9, 0.7); // 右手はあごの前で構える
        armR.rotation.z = lerp(armR.rotation.z, -0.35, 0.7);
        torso.rotation.y = 0.25 * hit;
        bodyX += 0.06 * hit;
      } else if (attackKind === 4) {
        // 素手② ストレート：腰をひねって右手を思い切り突き出す
        const pull = ease(seg(0, 0.05)) * (1 - seg(0.05, 0.12));
        const hit = ease(seg(0.05, 0.12)) * (1 - seg(0.2, dur));
        armR.rotation.x = lerp(lerp(armR.rotation.x, -0.4, pull), -1.6, hit);
        armR.rotation.z = lerp(armR.rotation.z, -0.1, hit);
        armL.rotation.x = lerp(armL.rotation.x, -0.9, 0.7);
        armL.rotation.z = lerp(armL.rotation.z, 0.35, 0.7);
        torso.rotation.y = lerp(0.2 * pull, -0.35, hit);
        bodyX += 0.12 * hit - 0.04 * pull;
      } else if (attackKind === 5) {
        // 回復薬を飲む：びんを口元に運び、上を向いて飲む → ぷはっ
        const lift = ease(seg(0, 0.2)) * (1 - seg(0.72, dur));
        const gulp = seg(0.25, 0.65);
        armR.rotation.x = lerp(armR.rotation.x, -2.25, lift);
        armR.rotation.z = lerp(armR.rotation.z, -0.45, lift);
        headGroup.rotation.x = lerp(headGroup.rotation.x, -0.35 - Math.sin(gulp * Math.PI * 4) * 0.05, lift);
        headGroup.rotation.y = 0;
        bodyX -= 0.06 * lift;
        if (a > 0.72) eyes.forEach((e) => { e.scale.y = 0.2; }); // 満足げに目を閉じる
      } else if (attackKind === 6) {
        // 血風斬：剣を後ろに流して前傾で駆け抜け → すれ違いざまに一閃
        const hold = ease(seg(0, 0.06)) * (1 - seg(dur - 0.12, dur));
        const slash = ease(seg(0.16, 0.26));
        armR.rotation.z = lerp(armR.rotation.z, 1.45, hold);
        armR.rotation.x = 0;
        armR.rotation.y = lerp(0, lerp(1.3, -2.2, slash), hold);
        sword.rotation.x = lerp(0.35, 1.25, hold);
        armL.rotation.x = lerp(armL.rotation.x, 0.9, hold);
        legL.rotation.x = lerp(legL.rotation.x, -0.9, hold);
        legR.rotation.x = lerp(legR.rotation.x, 0.7, hold);
        torso.rotation.y = lerp(0.3, -0.4, slash) * hold;
        bodyX += 0.38 * hold;
        trailH.visible = a > 0.16 && a < 0.36;
        trailH.material.opacity = 0.8 * (1 - seg(0.26, 0.36));
      } else if (attackKind === 7) {
        // 紅月墜とし：しゃがんでため → 跳んで大剣を振りかぶる → 真下へ叩きつけ
        const crouch = ease(seg(0, 0.12)) * (1 - seg(0.12, 0.2));
        const up = ease(seg(0.1, 0.3)) * (1 - seg(0.55, 0.64));
        const slam = ease(seg(0.55, 0.64)) * (1 - seg(0.8, dur));
        scaleY -= 0.16 * crouch + 0.1 * slam;
        armR.rotation.x = lerp(lerp(armR.rotation.x, -2.95, up), -0.35, slam);
        armR.rotation.z = lerp(armR.rotation.z, -0.15, Math.max(up, slam));
        armL.rotation.x = lerp(lerp(armL.rotation.x, -2.7, up), -0.5, slam);
        armL.rotation.z = lerp(armL.rotation.z, 0.35, Math.max(up, slam)); // 両手で握る
        legL.rotation.x -= 0.6 * slam;
        legR.rotation.x += 0.3 * slam;
        bodyX += -0.18 * up + 0.4 * slam;
        trail.visible = a > 0.55 && a < 0.75;
        trail.material.opacity = 0.85 * (1 - seg(0.64, 0.75));
      } else if (attackKind === 8) {
        // 血棘の道：細剣を振り上げ → 切っ先から地面へ突き立てる
        const lift = ease(seg(0, 0.1)) * (1 - seg(0.1, 0.15));
        const stab = ease(seg(0.1, 0.16)) * (1 - seg(0.42, dur));
        armR.rotation.x = lerp(lerp(armR.rotation.x, -2.2, lift), -0.45, stab);
        armR.rotation.z = lerp(armR.rotation.z, 0.1, Math.max(lift, stab));
        sword.rotation.x = lerp(0.35, 1.9, stab); // 切っ先を下へ
        armL.rotation.x = lerp(armL.rotation.x, 0.6, stab);
        armL.rotation.z = lerp(armL.rotation.z, -0.6, stab);
        scaleY -= 0.12 * stab;
        legL.rotation.x -= 0.5 * stab;
        bodyX += 0.3 * stab;
      } else if (attackKind === 9) {
        // 血の契約：剣を顔の前に立て、刃に手を添えて血を捧げる → 腕を広げて力を解き放つ
        const raise = ease(seg(0, 0.2)) * (1 - seg(0.55, 0.68));
        const cut = seg(0.3, 0.45);
        const release = ease(seg(0.55, 0.68)) * (1 - seg(0.78, dur));
        armR.rotation.x = lerp(lerp(armR.rotation.x, -1.75, raise), -0.3, release);
        armR.rotation.z = lerp(lerp(armR.rotation.z, -0.55, raise), 1.1, release);
        sword.rotation.x = lerp(0.35, -0.95, raise); // 刃をまっすぐ上に
        armL.rotation.x = lerp(lerp(armL.rotation.x, -1.65 + cut * 0.35, raise), -0.3, release);
        armL.rotation.z = lerp(lerp(armL.rotation.z, 0.55, raise), -1.1, release);
        headGroup.rotation.x += 0.18 * raise - 0.25 * release;
        bodyX += -0.12 * release;
        if (a > 0.3 && a < 0.6) eyes.forEach((e) => { e.scale.y = 0.2; }); // 目を閉じて祈る
      } else if (attackKind === 10 || attackKind === 11) {
        // 魔剣① 逆袈裟（左下 → 右上へ斬り上げ）／② 袈裟斬り（右上 → 左下へ斬り下ろし）
        const up = attackKind === 10;
        const wind = ease(seg(0, 0.06)) * (1 - seg(0.06, 0.1));
        const cut = ease(seg(0.06, 0.16));
        const on = (1 - back);
        const fromX = up ? -0.2 : -2.7, toX = up ? -2.6 : -0.3;
        const fromZ = up ? -0.7 : 0.9, toZ = up ? 0.9 : -0.7;
        armR.rotation.x = lerp(armR.rotation.x, lerp(fromX, toX, cut), on);
        armR.rotation.z = lerp(armR.rotation.z, lerp(fromZ, toZ, cut), on);
        sword.rotation.x = lerp(0.35, 0.8, on);
        armL.rotation.x = lerp(armL.rotation.x, 0.5, on);
        torso.rotation.y = lerp(up ? 0.3 : -0.2, up ? -0.35 : 0.35, cut) * on;
        bodyX += (0.12 * cut - 0.05 * wind) * on;
        trailDiag.rotation.z = up ? -0.75 : 0.75;
        trailDiag.visible = a > 0.06 && a < 0.26;
        trailDiagMesh.material.opacity = 0.85 * (1 - seg(0.16, 0.26));
      } else if (attackKind === 12) {
        // 魔剣③ 血閃突き：引いてためて → 一直線に突く
        const pull = ease(seg(0, 0.08)) * (1 - seg(0.08, 0.12));
        const stab = ease(seg(0.08, 0.14)) * (1 - back);
        armR.rotation.x = lerp(lerp(armR.rotation.x, -0.9, pull), -1.55, stab);
        armR.rotation.z = lerp(armR.rotation.z, 0.05, Math.max(pull, stab));
        armR.rotation.y = 0.35 * pull;
        sword.rotation.x = lerp(0.35, -0.02, stab); // 刃をまっすぐ前へ
        armL.rotation.x = lerp(armL.rotation.x, 0.8, stab);
        legL.rotation.x -= 0.7 * stab;
        legR.rotation.x += 0.5 * stab;
        torso.rotation.y = lerp(0.35 * pull, -0.4, stab);
        bodyX += 0.3 * stab - 0.08 * pull;
        trailThrust.visible = a > 0.08 && a < 0.3;
        trailThrust.scale.set(1, 1, 1 + seg(0.08, 0.16) * 7);
        trailThrust.material.opacity = 0.8 * (1 - seg(0.16, 0.3));
      } else if (attackKind === 13) {
        // 魔剣④ 血旋：跳ねながら二回転して周りを斬り払う
        const out = ease(seg(0, 0.08)) * (1 - back);
        const spin = seg(0.08, 0.55);
        armR.rotation.z = lerp(armR.rotation.z, 1.5, out);
        armR.rotation.x = 0;
        armR.rotation.y = 0.5 * out;
        sword.rotation.x = lerp(0.35, 1.3, out);
        armL.rotation.z = lerp(armL.rotation.z, -1.2, out);
        spinY = -Math.PI * 4 * (1 - Math.pow(1 - spin, 2));
        scaleY -= 0.1 * ease(seg(0, 0.08)) * (1 - seg(0.08, 0.14));
        trailSpin.visible = a > 0.1 && a < 0.62;
        trailSpin.material.opacity = 0.8 * (1 - seg(0.45, 0.62));
        trailSpin.scale.setScalar(1 + seg(0.1, 0.6) * 0.3);
      } else if (attackKind === 14) {
        // 素手③ アッパー：しゃがんで → 右拳を真上へ突き上げる
        const dip = ease(seg(0, 0.08)) * (1 - seg(0.08, 0.14));
        const rise = ease(seg(0.08, 0.18)) * (1 - seg(0.3, dur));
        armR.rotation.x = lerp(lerp(armR.rotation.x, 0.3, dip), -2.7, rise);
        armR.rotation.z = lerp(armR.rotation.z, -0.2, Math.max(dip, rise));
        armL.rotation.x = lerp(armL.rotation.x, -0.9, 0.7);
        armL.rotation.z = lerp(armL.rotation.z, 0.4, 0.7);
        scaleY -= 0.14 * dip - 0.06 * rise;
        bodyX += -0.1 * rise + 0.1 * dip;
        torso.rotation.y = lerp(0.3 * dip, -0.3, rise);
      }
      if (a >= dur) {
        attackTime = -1;
        torso.rotation.y = 0;
      }
    }

    // ダメージの点滅と、のけぞり
    hurtTime = Math.max(0, hurtTime - dt);
    if (hurtTime > 0) bodyX -= 0.25 * (hurtTime / 0.25);
    flashMats.forEach((m, i) => {
      if (hurtTime > 0) {
        m.emissive.setHex(0xff3030);
        m.emissiveIntensity = 0.9 * (hurtTime / 0.25);
      } else {
        m.emissive.setHex(baseEmissive[i].color);
        m.emissiveIntensity = baseEmissive[i].intensity;
      }
    });

    // 倒れる
    faintBlend = approach(faintBlend, fainted ? 1 : 0, 6, dt);
    if (fainted) eyes.forEach((e) => { e.scale.y = 0.15; });

    body.rotation.x = lerp(bodyX, -1.45, faintBlend);
    body.rotation.y = spinY;
    body.rotation.z = bodyZ * (1 - faintBlend);
    body.scale.set(1 + (1 - scaleY) * 0.5, scaleY, 1 + (1 - scaleY) * 0.5);

    if (waveTime >= 0) {
      waveTime += dt;
      const dur = 2.2;
      const k = Math.min(waveTime / dur, 1);
      // 腕を上げ → 左右に振る → 下ろす
      const raise = Math.sin(Math.min(k * 4, 1) * Math.PI / 2) * (k > 0.85 ? (1 - k) / 0.15 : 1);
      armR.rotation.z = 0.12 + raise * 2.5;
      armR.rotation.x = -raise * 0.2 + Math.sin(waveTime * 12) * 0.35 * raise;
      headGroup.rotation.z += raise * 0.08; // 首をかしげる
      if (k >= 1 || walkBlend > 0.3 || airBlend > 0.3) waveTime = -1;
    }
  }

  return {
    object: root,
    /** 待機の構え（'fists' / 'sword' / 'blood' / 'item'） */
    setStance(v) { stance = v; },
    /** 魔剣の光の強さ（1 = ふつう） */
    setGlow(v) { glowBoost = v; },
    /** 手に持つ剣の切っ先の、世界での位置（なければ null） */
    bladeTip(out) {
      if (!sword.visible) return null;
      sword.updateWorldMatrix(true, false);
      return sword.localToWorld(out.set(0, 0, heldBlood ? 2.6 : 1.9));
    },
    /** 手に持つ物を見せる（'sword' / 'potion' / null = 素手） */
    setHeld(kind) {
      const isBlood = SWORD_IDS.includes(kind);
      if (isBlood && !bloodBlades[kind]) {
        bloodBlades[kind] = buildSword(kind);
        sword.add(bloodBlades[kind].group);
      }
      for (const [id, b] of Object.entries(bloodBlades)) b.group.visible = id === kind;
      heldBlood = isBlood ? bloodBlades[kind] : null;
      travelBlade.visible = kind === 'sword';
      sword.visible = kind === 'sword' || isBlood;
      potion.visible = kind === 'potion';
    },
    /** 斬撃の軌跡の色 */
    setTrailColor(hex = 0xe8fffb) {
      trail.material.color.setHex(hex);
      trailH.material.color.setHex(hex);
      trailSpin.material.color.setHex(hex === 0xe8fffb ? 0xfff4c8 : hex);
      trailDiagMesh.material.color.setHex(hex);
      trailThrust.material.color.setHex(hex);
    },
    /** 回復薬を飲む動き */
    drink() {
      if (fainted) return false;
      attackTime = 0;
      attackKind = 5;
      attackSpeed = 1;
      waveTime = -1;
      stretchTime = -1;
      return true;
    },
    /** 手を振る */
    wave() {
      if (waveTime < 0 && attackTime < 0) waveTime = 0;
    },
    /**
     * 剣を振る（kind: 0 = 縦斬り, 1 = 横薙ぎ, 2 = 回転斬り）。倒れている時は false。
     * 技の終わり際に次の段が来たら、そのまま上書きしてつなげる（コンボの管理は main.js）
     */
    attack(kind = 0, speed = 1) {
      if (fainted) return false;
      attackTime = 0;
      attackKind = kind;
      attackSpeed = speed;
      waveTime = -1;
      stretchTime = -1;
      return true;
    },
    get attacking() { return attackTime >= 0; },
    /** ダメージを受けた時の赤い点滅 */
    hurt() {
      hurtTime = 0.25;
    },
    /** 倒れる / 起き上がる */
    setFainted(v) {
      fainted = v;
      if (v) attackTime = -1;
      else faintBlend = 0;
    },
    /** コマ落とし風のアニメにするか */
    get stepped() { return stepped; },
    set stepped(v) { stepped = v; },
    /**
     * @param {number} dt
     * @param {{ speed?: number, grounded?: boolean }} state  speed は 0〜1（歩きの強さ）
     */
    update(dt, state = {}) {
      // 血の剣の光は、コマ落としに関係なくなめらかに脈打たせる
      if (heldBlood) {
        const k = 0.75 + 0.35 * (0.5 + 0.5 * Math.sin(t * 3.2 + stepAcc * 3.2));
        heldBlood.pulse.forEach((m, i) => { m.emissiveIntensity = heldBlood.base[i] * k * glowBoost; });
      }
      stepAcc += dt;
      if (stepped && stepAcc < 1 / STEP_FPS) return;
      const frameDt = Math.min(stepAcc, 0.2);
      stepAcc = 0;
      pose(frameDt, state);
    },
  };
}

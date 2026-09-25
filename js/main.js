import * as THREE from 'three';
import { buildWorld, ALL_PLACES } from './world.js';
import { createCharacter } from './character.js';
import { createPlayer } from './player.js';
import { createInput } from './input.js';
import { createMinimap } from './minimap.js';
import { createEnemies } from './enemies.js';
import { createPopups } from './popups.js';
import { MOVESETS, COMBO_WINDOW } from './attacks.js';
import { ITEMS, SLOT_COUNT, createInventory } from './items.js';
import { SKILLS } from './skills.js';
import { createFx } from './fx.js';

const $ = (id) => document.getElementById(id);

const TIPS = [
  'ヒント：旅は島の中央にある星の祭壇から始まります',
  'ヒント：古代遺跡の台地の塔のてっぺんに、クリスタルが眠っています',
  'ヒント：4本の大橋を渡ると、それぞれ別の島へ行けます',
  'ヒント：島はとても広い。M キーの地図で名所を探してみよう',
  'ヒント：遠くの地方ほど魔物が強くなります。レベルを上げてから行こう',
  'ヒント：海や湖では泳げます。泳いでいる間は魔物に襲われません',
  'ヒント：シオカゼ村は安全地帯です',
  'ヒント：M キーで島の地図を大きく表示できます',
  'ヒント：祭壇のまわりは安全地帯。魔物は入ってこられません',
  'ヒント：クリックか F キーで剣を振れます。続けて押すと3段コンボ',
  'ヒント：数字キー 1〜8 で持ち物を切り替え。空のマスを選ぶと素手になります',
  'ヒント：魔剣サングレアを持つと、Q・E・R で 3 つの技が使えます',
  'ヒント：B キーで星の祭壇に戻れます',
];

// ---------- レンダラー ----------
const canvas = $('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
// スマホ（指で操作する端末）では、解像度を少し下げて軽くする
const IS_MOBILE = window.matchMedia('(pointer: coarse)').matches;
renderer.setPixelRatio(Math.min(window.devicePixelRatio, IS_MOBILE ? 1.5 : 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2600);

let world, character, player, minimap, enemies, fx;
const popups = createPopups($('popup-layer'));

// ---------- ロード処理 ----------
// タブが非表示だと rAF が止まるので、タイムアウトでも進むようにする
const nextFrame = () => new Promise((r) => { requestAnimationFrame(() => r()); setTimeout(r, 50); });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

function setProgress(pct, text) {
  $('progress-fill').style.width = pct + '%';
  if (text) $('loading-status').textContent = text;
}

async function load() {
  $('loading-tip').textContent = TIPS[Math.floor(Math.random() * TIPS.length)];

  // 各ステップ。最低表示時間を入れてロード画面が一瞬で消えないようにする
  const steps = [
    ['フォントを読み込み中...', async () => { await document.fonts.ready; }],
    ['ベースプレートを生成中...', async () => { world = buildWorld(scene, renderer, { lite: IS_MOBILE }); if (IS_MOBILE) camera.far = 1300; }],
    ['キャラクターを生成中...', async () => {
      character = createCharacter();
      scene.add(character.object);
      renderHotbar();
      player = createPlayer(character, world);
      player.respawn();
      minimap = createMinimap($('minimap'), world);
      enemies = createEnemies(scene, world, $('label-layer'));
      fx = createFx(scene, world.groundHeight);
      updateMenuCamera();
    }],
    ['シーンを準備中...', async () => {
      renderer.compile(scene, camera);
      renderer.render(scene, camera);
    }],
  ];

  for (let i = 0; i < steps.length; i++) {
    const [label, fn] = steps[i];
    setProgress((i / steps.length) * 100, label);
    await nextFrame();
    await Promise.all([fn(), wait(450)]);
  }
  setProgress(100, '完了！');
  await wait(400);

  $('loading-screen').classList.add('fade');
  $('menu').classList.remove('hidden');
  setTimeout(() => $('loading-screen').remove(), 900);
  setTimeout(() => character.wave(), 900);
}

// ---------- カメラ ----------
let mode = 'menu'; // 'menu' | 'ingame'
let orbit = true;
let orbitTime = 0;
let transition = 0; // メニュー ⇄ ゲームの切り替えからの経過時間
const camPos = new THREE.Vector3();
const camLook = new THREE.Vector3();
const tmpPos = new THREE.Vector3();
const tmpLook = new THREE.Vector3();

// ゲーム中のカメラ（プレイヤーの頭を中心に回る）
const cam = { yaw: 0, pitch: 0.35, dist: 18 };
const CAM_MIN_DIST = 6;
const CAM_MAX_DIST = 60;

/** メニュー時：キャラの正面をゆっくり左右に回る。UI と重ならないよう注視点を左にずらす */
function menuCameraTarget(out, look) {
  const center = world.spawnPoint.clone().add(new THREE.Vector3(0, 3, 0));
  const angle = Math.sin(orbitTime * 0.15) * 0.45 + 0.35;
  const dist = 20;
  out.set(center.x + Math.sin(angle) * dist, center.y + 3.5, center.z + Math.cos(angle) * dist);

  // 画面が横長なら、キャラが右側に来るように注視点をカメラの左方向へずらす
  const wide = window.innerWidth > 700;
  const forward = center.clone().sub(out).normalize();
  const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
  look.copy(center).addScaledVector(right, wide ? -4.2 : 0);
  if (!wide) look.y -= 1.5; // スマホではパネルが下にあるのでキャラを少し上に
}

function ingameCameraTarget(out, look) {
  const p = player.position;
  look.set(p.x, p.y + 4.5, p.z);
  const cp = Math.cos(cam.pitch);
  out.set(
    look.x + Math.sin(cam.yaw) * cp * cam.dist,
    look.y + Math.sin(cam.pitch) * cam.dist,
    look.z + Math.cos(cam.yaw) * cp * cam.dist
  );
  // 地面にめり込まないように
  const floor = Math.max(world.groundHeight(out.x, out.z), world.waterLevel) + 0.8;
  if (out.y < floor) out.y = floor;
}

function updateMenuCamera() {
  menuCameraTarget(camPos, camLook);
  camera.position.copy(camPos);
  camera.lookAt(camLook);
}

function updateCamera(dt) {
  transition += dt;
  if (mode === 'menu') {
    if (orbit) orbitTime += dt;
    menuCameraTarget(tmpPos, tmpLook);
  } else {
    ingameCameraTarget(tmpPos, tmpLook);
  }
  // 切り替え直後はなめらかに移動し、その後はすぐ追従する
  const rate = mode === 'menu' ? 3 : 4 + transition * transition * 80;
  const k = 1 - Math.exp(-dt * rate);
  camPos.lerp(tmpPos, k);
  camLook.lerp(tmpLook, k);
  camera.position.copy(camPos);
  camera.lookAt(camLook);
}

// ---------- 入力 ----------
const input = createInput(canvas, {
  joystickEl: $('joystick'),
  jumpBtnEl: $('btn-jump'),
  attackBtnEl: $('btn-attack'),
  skillBtnsEl: $('skill-btns'),
  onKey(code) {
    if (code === 'Escape') {
      if (minimap.expanded) minimap.expanded = false;
      else backToMenu();
    } else if (code === 'KeyM') {
      minimap.expanded = !minimap.expanded;
    } else if (code === 'KeyH') {
      $('help').classList.toggle('hidden');
    } else if (/^Digit[1-8]$/.test(code)) {
      selectSlot(Number(code.slice(5)) - 1);
    } else if (code === 'KeyB' && !fainted) {
      player.respawn(Math.PI);
      cam.yaw = 0;
      toast('星の祭壇に戻りました');
    }
  },
});

function applyLook() {
  const { dx, dy, zoom } = input.consumeLook();
  cam.yaw -= dx * 0.006;
  cam.pitch = THREE.MathUtils.clamp(cam.pitch + dy * 0.005, -0.2, 1.35);
  cam.dist = THREE.MathUtils.clamp(cam.dist * (1 + zoom * 0.001), CAM_MIN_DIST, CAM_MAX_DIST);
}

/** カメラの向きを基準に、入力をワールド座標の移動方向へ変換する */
function worldMove() {
  const { forward, right } = input.move();
  const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw);
  const rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
  return { x: fx * forward + rx * right, z: fz * forward + rz * right };
}

// ---------- ステータスと戦闘 ----------
const stats = { level: 1, exp: 0, hp: 100, maxHp: 100, atk: 10 };
const expToNext = () => stats.level * 20;
let invuln = 0; // ダメージ後の無敵時間
let fainted = false;

function updateStatusHud() {
  $('lv').textContent = stats.level;
  $('hp-now').textContent = Math.max(0, Math.ceil(stats.hp));
  $('hp-max').textContent = stats.maxHp;
  const ratio = Math.max(0, stats.hp) / stats.maxHp;
  $('hp-fill').style.width = ratio * 100 + '%';
  $('hp-fill').classList.toggle('low', ratio < 0.3);
  $('exp-fill').style.width = (stats.exp / expToNext()) * 100 + '%';
}

const headPos = () => player.position.clone().setY(player.position.y + 5.5);

function gainExp(amount) {
  stats.exp += amount;
  popups.add(headPos(), `+${amount} EXP`, 'exp');
  while (stats.exp >= expToNext()) {
    stats.exp -= expToNext();
    stats.level++;
    stats.maxHp += 15;
    stats.hp = stats.maxHp;
    stats.atk += 3;
    popups.add(headPos().setY(player.position.y + 7), 'LEVEL UP!', 'levelup');
    toast(`レベル ${stats.level} になった！ HP と攻撃力が上がった`);
    character.wave();
  }
  updateStatusHud();
}

// ---------- 持ち物（アイテム欄） ----------
const inventory = createInventory();
let drinkTimer = -1; // 回復薬を飲み始めてからの時間

/** 今の持ち物に合った技のセット（武器でなければ素手） */
function currentMoveset() {
  const held = inventory.held;
  return MOVESETS[held?.moveset ?? 'fists'];
}

/** アイテム欄を描き直す */
function renderHotbar() {
  const bar = $('hotbar');
  if (!bar.children.length) {
    for (let i = 0; i < SLOT_COUNT; i++) {
      const b = document.createElement('button');
      b.className = 'slot';
      b.innerHTML = `<span class="slot-key">${i + 1}</span><span class="slot-icon"></span><span class="slot-count"></span>`;
      b.addEventListener('pointerdown', (e) => { e.preventDefault(); selectSlot(i); });
      bar.appendChild(b);
    }
  }
  inventory.slots.forEach((s, i) => {
    const b = bar.children[i];
    b.classList.toggle('selected', i === inventory.selected);
    b.classList.toggle('empty', !s);
    b.classList.toggle('blood', !!s && ITEMS[s.id].rarity === 'blood');
    b.title = s ? itemTooltip(ITEMS[s.id]) : '空き（素手）';
    b.querySelector('.slot-icon').innerHTML = s ? ITEMS[s.id].icon : '';
    b.querySelector('.slot-count').textContent = s && s.count > 1 ? s.count : '';
  });
  character.setHeld(inventory.held?.held ?? null);
  character.setTrailColor(inventory.held?.trail);
  const h = inventory.held;
  character.setStance(h ? h.stance ?? 'item' : 'fists');
}

/** アイテム欄にマウスを乗せた時の説明 */
function itemTooltip(item) {
  let text = `${item.name}：${item.desc}`;
  if (item.passive) text += `\n特性【${item.passive.name}】${item.passive.desc}`;
  for (const id of item.skills ?? []) text += `\n技【${SKILLS[id].name}】（${SKILLS[id].key}）${SKILLS[id].desc}`;
  if (item.power) text += `\n攻撃力 ×${item.power}`;
  return text;
}

let heldNameTimer;
function selectSlot(i) {
  // 技や薬を使っている途中は持ち替えない
  if (combo.current || drinkTimer >= 0 || skillState || fainted) return;
  inventory.selected = i;
  combo.step = -1;
  renderHotbar();
  const held = inventory.held;
  const el = $('held-name');
  el.textContent = held ? (held.skills ? `${held.name}　${held.skills.map((id) => `${SKILLS[id].key}「${SKILLS[id].name}」`).join(' ')}` : held.name) : '素手';
  el.classList.remove('hidden');
  clearTimeout(heldNameTimer);
  heldNameTimer = setTimeout(() => el.classList.add('hidden'), 1500);
}

/** 攻撃ボタン：持っている物によって、攻撃するか薬を飲む */
function useHeld() {
  const held = inventory.held;
  if (held?.kind === 'consumable') {
    if (combo.current || drinkTimer >= 0) return;
    if (held.heal && stats.hp >= stats.maxHp) {
      toast('HP は満タンです');
      return;
    }
    if (character.drink()) drinkTimer = 0;
    return;
  }
  tryAttack();
}

function updateDrink(dt) {
  if (drinkTimer < 0) return;
  const before = drinkTimer;
  drinkTimer += dt;
  // 飲み込んだ瞬間に回復する
  if (before < 0.55 && drinkTimer >= 0.55) {
    const held = inventory.held;
    if (held?.heal) {
      const amount = Math.min(held.heal, stats.maxHp - stats.hp);
      stats.hp += amount;
      popups.add(headPos(), `+${Math.round(amount)}`, 'heal');
      updateStatusHud();
    }
    inventory.consumeHeld();
    renderHotbar();
  }
  if (drinkTimer >= 0.9) drinkTimer = -1;
}

// ---------- コンボ（剣は3段、素手は2段） ----------
const combo = {
  current: null, // いま出している技
  moves: MOVESETS.sword, // いま使っている技のセット
  step: -1, // いま（または最後に）出した段
  time: 0, // 技を出してからの時間
  hit: false, // もう当たり判定を出したか
  queued: 0, // 技の途中で押された回数（この回数だけ次の段を続けて出す）
  sinceEnd: 99, // 最後の技が終わってからの時間
  speed: 1, // 振りの速さ
};
let hitStop = 0; // 当たった瞬間に時間を止める残り時間
let shake = 0; // 画面の揺れの強さ

function tryAttack() {
  if (fainted || skillState) return;
  const moves = currentMoveset();
  // 技の途中なら、次の段を予約しておく（終わったらすぐ出す）
  if (combo.current) {
    combo.queued = Math.min(combo.queued + 1, combo.moves.length - 1 - combo.step);
    return;
  }
  const chain = combo.moves === moves && combo.sinceEnd < COMBO_WINDOW && combo.step < moves.length - 1;
  combo.moves = moves;
  startAttack(chain ? combo.step + 1 : 0);
}

function startAttack(step) {
  // 移動キーを押していれば、その方向を向いて攻撃する
  const m = worldMove();
  if (Math.hypot(m.x, m.z) > 0.3) player.setFacing(Math.atan2(m.x, m.z));
  const atk = combo.moves[step];
  const speed = inventory.held?.speed ?? 1; // 剣ごとの振りの速さ
  if (!character.attack(atk.anim, speed)) return;
  Object.assign(combo, { current: atk, step, time: 0, hit: false, hitIdx: 0, speed });
  // 踏み込み（回転斬りは小さく跳ねる）
  const f = player.facing;
  player.knockback(Math.sin(f) * atk.lunge, Math.cos(f) * atk.lunge, atk.hop);
  showCombo(step);
}

function updateCombo(dt) {
  if (!combo.current) {
    combo.sinceEnd += dt;
    return;
  }
  combo.time += dt * combo.speed;
  // 当たる瞬間（hitTimes があれば何回も当たる）
  const times = combo.current.hitTimes ?? [combo.current.hitTime];
  while (combo.hitIdx < times.length && combo.time >= times[combo.hitIdx]) {
    combo.hitIdx++;
    resolveHit(combo.current);
  }
  if (combo.time >= combo.current.duration) {
    combo.current = null;
    combo.sinceEnd = 0;
    if (combo.queued > 0 && combo.step < combo.moves.length - 1) {
      combo.queued--;
      startAttack(combo.step + 1);
    } else {
      combo.queued = 0;
    }
  }
}

/** 今の攻撃力の倍率（剣の強さ・血の契約・渇き） */
function powerMult() {
  const held = inventory.held;
  let m = held?.kind === 'weapon' ? held.power ?? 1 : 1;
  if (buff) m *= buff.atk;
  if (held?.passive?.id === 'thirst' && stats.hp < stats.maxHp / 2) m *= 1.3;
  return m;
}

function resolveHit(atk) {
  const held = inventory.held;
  const heavy = held?.passive?.id === 'heavy';
  const hits = enemies.attack(player.position, player.facing, {
    range: atk.range * (heavy ? 1.1 : 1),
    arc: atk.arc,
    damage: stats.atk * atk.power * powerMult(),
    knockback: atk.knockback * (heavy ? 1.7 : 1),
    bleed: held?.passive?.id === 'bleed',
  });
  if (hits.length) {
    hitStop = atk.hitStop * (heavy ? 1.5 : 1);
    shake = Math.max(shake, atk.shake * (heavy ? 1.5 : 1));
    if (held?.rarity === 'blood') for (const h of hits) fx.burst(h.pos, 8, 5);
  }
  applyHits(hits);
  // 鮮血解放の間は、振るたびに血の斬撃波が飛ぶ
  if (buff?.waves && held?.rarity === 'blood') launchWave();
}

/** 前へ飛んでいく血の三日月。通った所の敵に 1 回ずつ当たる */
function launchWave() {
  const dir = new THREE.Vector3(Math.sin(player.facing), 0, Math.cos(player.facing));
  const start = player.position.clone().addScaledVector(dir, 1.5);
  start.y += 2.6;
  const hitSet = new Set();
  fx.crescent(start, dir, {
    onMove(pos) {
      const hits = enemies.hitArea(
        (e) => !hitSet.has(e) && Math.hypot(e.pos.x - pos.x, e.pos.z - pos.z) < 3 + e.T.radius && Math.abs(e.pos.y + 2 - pos.y) < 4,
        { damage: stats.atk * 0.9 * powerMult(), knockback: 0.8, from: pos },
      );
      for (const h of hits) { hitSet.add(h.enemy); fx.burst(h.pos, 10, 6); }
      applyHits(hits);
    },
  });
}

/** 当たった結果をまとめて処理：ダメージ表示・経験値・吸血 */
function applyHits(hits) {
  let total = 0;
  for (const h of hits) {
    total += h.damage;
    popups.add(h.pos, String(h.damage), h.damage > stats.atk * 1.6 ? 'crit' : '');
    if (h.killed) {
      toast(`${h.name} をたおした！`);
      gainExp(h.exp);
    }
  }
  const held = inventory.held;
  const rate = (held?.passive?.id === 'lifesteal' ? held.passive.rate : 0) + (buff?.lifesteal ?? 0);
  if (rate > 0 && total > 0 && stats.hp < stats.maxHp) {
    const heal = Math.max(1, Math.round(total * rate));
    stats.hp = Math.min(stats.maxHp, stats.hp + heal);
    popups.add(headPos(), `+${heal}`, 'heal');
    updateStatusHud();
  }
}

/** 出血のダメージ（敵の処理から呼ばれる） */
function onBleed(h) {
  popups.add(h.pos, String(h.damage), 'bleed');
  if (h.killed) {
    toast(`${h.name} は血を流して倒れた…`);
    gainExp(h.exp);
  }
}

// ---------- 魔剣の技（Q / E / R） ----------
let skillState = null; // 使っている最中の技 { def, t, s }
const cooldowns = {}; // 技ごとの残り待ち時間
let skillInvuln = 0; // 技の最中の無敵（点滅しない）
let buff = null; // 鮮血解放などの強化 { name, time, atk, lifesteal, waves, aura }
let fovKick = 0; // 視野を一瞬広げる／狭める量（度）

const skillCtx = {
  get player() { return player; },
  get character() { return character; },
  get enemies() { return enemies; },
  get fx() { return fx; },
  stats,
  power: (mult) => stats.atk * mult * powerMult(),
  applyHits: (hits) => applyHits(hits),
  invuln: (sec) => { skillInvuln = Math.max(skillInvuln, sec); },
  shake: (v) => { shake = Math.max(shake, v); },
  hitStop: (sec) => { hitStop = Math.max(hitStop, sec); },
  screenFlash: (v) => screenFlash(v),
  fovKick: (v) => { fovKick = v; },
  toast: (msg) => toast(msg),
  popup: (pos, text, cls) => popups.add(pos, text, cls),
  startBuff: (b) => startBuff(b),
};

/** 画面を一瞬赤く光らせる */
function screenFlash(v) {
  const el = $('blood-flash');
  el.style.transition = 'none';
  el.style.opacity = v;
  requestAnimationFrame(() => {
    el.style.transition = 'opacity .5s ease';
    el.style.opacity = 0;
  });
}

/** i 番目の技（0 = Q, 1 = E, 2 = R）を使う */
function useSkill(i) {
  const held = inventory.held;
  const id = held?.skills?.[i];
  if (!id || fainted || skillState || combo.current || drinkTimer >= 0) return;
  const def = SKILLS[id];
  const box = $('skills').children[i];
  if ((cooldowns[id] ?? 0) > 0) {
    box?.classList.remove('denied');
    void box?.offsetWidth;
    box?.classList.add('denied');
    return;
  }
  if (def.canUse && !def.canUse(skillCtx)) return;
  // 移動キーを押していれば、その方向へ向けて出す
  const m = worldMove();
  if (Math.hypot(m.x, m.z) > 0.3) player.setFacing(Math.atan2(m.x, m.z));
  character.attack(def.anim);
  skillState = { def, t: 0, s: {} };
  def.start(skillCtx, skillState.s);
  cooldowns[id] = def.cooldown;
  combo.step = -1;
  updateStatusHud();
  showSkillName(def.name);
}

function updateSkills(dt, realDt) {
  for (const id of Object.keys(cooldowns)) cooldowns[id] = Math.max(0, cooldowns[id] - dt);
  skillInvuln = Math.max(0, skillInvuln - dt);
  if (skillState) {
    skillState.t += dt;
    skillState.def.update(skillCtx, skillState.s, skillState.t, dt);
    if (skillState.t >= skillState.def.duration) skillState = null;
  }
  if (buff) {
    buff.time -= dt;
    if (buff.time <= 0) endBuff();
  }
  // 視野のキックは、なめらかに元へ戻す
  fovKick *= Math.exp(-realDt * 5);
  const fov = 60 + fovKick;
  if (Math.abs(camera.fov - fov) > 0.01) {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  }
}

function startBuff(b) {
  endBuff();
  buff = { ...b, aura: fx.aura(character.object) };
  character.setGlow(2.4);
  $('blood-vignette').classList.add('on');
  toast(`${b.name}：力が溢れ出す…！　剣を振ると血の斬撃が飛ぶ`);
}

function endBuff() {
  if (!buff) return;
  buff.aura.stop();
  buff = null;
  character.setGlow(1);
  $('blood-vignette').classList.remove('on');
}

/** 技の名前を大きく表示 */
let skillNameTimer;
function showSkillName(name) {
  const el = $('skill-name');
  el.textContent = name;
  el.classList.remove('hidden', 'show');
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(skillNameTimer);
  skillNameTimer = setTimeout(() => el.classList.add('hidden'), 1200);
}

/** 画面の技欄（Q / E / R の名前と待ち時間）と、強化の表示 */
function updateSkillHud() {
  const held = inventory.held;
  const ids = held?.skills ?? [];
  const wrap = $('skills');
  wrap.classList.toggle('hidden', !ids.length);
  $('skill-btns').classList.toggle('hidden', !ids.length);
  if (wrap.dataset.set !== ids.join()) {
    wrap.innerHTML = ids.map((id) => `<div class="skill"><span class="skill-key">${SKILLS[id].key}</span><span class="skill-cd"></span><span class="skill-label">${SKILLS[id].name}</span></div>`).join('');
    wrap.dataset.set = ids.join();
  }
  ids.forEach((id, i) => {
    const def = SKILLS[id];
    const left = cooldowns[id] ?? 0;
    const box = wrap.children[i];
    box.querySelector('.skill-cd').textContent = left > 0 ? Math.ceil(left) : '';
    box.style.setProperty('--cd', left / def.cooldown);
    box.classList.toggle('ready', left <= 0);
    const btn = $('skill-btns').children[i];
    if (btn) btn.style.setProperty('--cd', left / def.cooldown);
  });
  const b = $('buff');
  b.classList.toggle('hidden', !buff);
  if (buff) b.textContent = `${buff.name}　${buff.time.toFixed(1)}秒`;
}

// 魔剣の刃先からしたたる血
let dripTimer = 0;
const tipPos = new THREE.Vector3();
function updateDrips(dt) {
  if (inventory.held?.rarity !== 'blood') return;
  dripTimer -= dt;
  if (dripTimer > 0) return;
  dripTimer = buff ? 0.08 : 0.4;
  if (character.bladeTip(tipPos)) fx.burst(tipPos, 1, buff ? 2 : 0.4);
}

// 画面のコンボ表示（今の技のセットに合わせて並べ直す）
let comboHudTimer;
function showCombo(step) {
  const el = $('combo');
  const names = combo.moves.map((m, i) => `${'①②③④'[i]} ${m.name}`);
  if (el.dataset.set !== names.join()) {
    el.innerHTML = names.map((n) => `<span>${n}</span>`).join('');
    el.dataset.set = names.join();
  }
  el.classList.remove('hidden');
  el.querySelectorAll('span').forEach((s, i) => {
    s.classList.toggle('done', i < step);
    s.classList.toggle('now', i === step);
  });
  clearTimeout(comboHudTimer);
  comboHudTimer = setTimeout(() => el.classList.add('hidden'), 1400);
}

function hitPlayer(damage, fromX, fromZ) {
  if (invuln > 0 || skillInvuln > 0 || fainted) return;
  stats.hp -= damage;
  invuln = 1.0;
  character.hurt();
  popups.add(headPos(), `-${damage}`, 'hurt');
  const v = $('hurt-vignette');
  v.classList.add('on');
  requestAnimationFrame(() => v.classList.remove('on'));
  const dx = player.position.x - fromX, dz = player.position.z - fromZ;
  const d = Math.hypot(dx, dz) || 1;
  player.knockback((dx / d) * 14, (dz / d) * 14, 14);
  updateStatusHud();
  if (stats.hp <= 0) faint();
}

function faint() {
  fainted = true;
  combo.current = null;
  combo.queued = 0;
  drinkTimer = -1;
  skillState = null;
  endBuff();
  character.setFainted(true);
  enemies.calmDown();
  $('faint').classList.remove('hidden');
  setTimeout(() => {
    $('faint').classList.add('hidden');
    stats.hp = stats.maxHp;
    fainted = false;
    character.setFainted(false);
    player.respawn(Math.PI);
    cam.yaw = 0;
    invuln = 2;
    updateStatusHud();
  }, 2800);
}

// ---------- ゴール判定 ----------
let reachedGoal = false;
function checkGoal() {
  if (player.grounded && player.groundKind === 'goal' && !reachedGoal) {
    reachedGoal = true;
    character.wave();
    toast('塔のてっぺんのクリスタルにたどり着いた！', 3500);
  }
  if (player.groundKind === 'spawn') reachedGoal = false;
}

// ---------- 地名の表示 ----------
let currentArea = null;
function checkArea() {
  const p = player.position;
  let area = null;
  for (const place of ALL_PLACES) {
    if (Math.hypot(p.x - place.x, p.z - place.z) < place.r + 4) area = place.name;
  }
  if (!area && player.groundKind === 'bridge') {
    // いちばん近い橋の名前
    let best = Infinity;
    for (const b of world.bridges) {
      const mx = (b.from[0] + b.to[0]) / 2, mz = (b.from[1] + b.to[1]) / 2;
      const d = Math.hypot(p.x - mx, p.z - mz);
      if (d < best) { best = d; area = b.name; }
    }
  }
  if (!area) area = world.islandAt(p.x, p.z)?.name ?? currentArea;
  if (area && area !== currentArea) showAreaName(area);
  currentArea = area;
}
let areaTimer;
function showAreaName(name) {
  const el = $('area-banner');
  el.textContent = name;
  el.classList.remove('hidden', 'show');
  void el.offsetWidth; // アニメーションをやり直す
  el.classList.add('show');
  clearTimeout(areaTimer);
  areaTimer = setTimeout(() => el.classList.add('hidden'), 3200);
}

// ---------- 画面切り替え ----------
function startGame() {
  mode = 'ingame';
  transition = 0;
  // 北（塔のある方）を向いてスタート
  player.respawn(Math.PI);
  cam.yaw = 0;
  cam.pitch = 0.35;
  cam.dist = 18;
  input.enabled = true;
  stats.hp = stats.maxHp;
  updateStatusHud();
  $('menu').classList.add('hidden');
  $('ingame').classList.remove('hidden');
  minimap.resize();
  currentArea = null;
}

function backToMenu() {
  mode = 'menu';
  transition = 0;
  input.enabled = false;
  minimap.expanded = false;
  enemies.calmDown();
  popups.clear();
  player.respawn();
  $('ingame').classList.add('hidden');
  $('menu').classList.remove('hidden');
}

// ---------- UI ----------
let toastTimer;
function toast(msg, ms = 2200) {
  const el = $('toast-msg');
  el.textContent = msg;
  el.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('hidden'), ms);
}

$('btn-play').addEventListener('click', startGame);
$('btn-back').addEventListener('click', backToMenu);
$('minimap').addEventListener('click', () => { minimap.expanded = !minimap.expanded; });

$('btn-avatar').addEventListener('click', () => {
  character.wave();
  toast('キャラクター編集は準備中です');
});

// 全画面（対応している端末だけボタンを出す。iPhone の Safari は非対応）
const fsTarget = document.documentElement;
if (fsTarget.requestFullscreen && IS_MOBILE) {
  $('btn-fullscreen').classList.remove('hidden');
  $('btn-fullscreen').addEventListener('click', async () => {
    try {
      await fsTarget.requestFullscreen({ navigationUI: 'hide' });
      await screen.orientation?.lock?.('landscape').catch(() => {});
    } catch { /* 全画面にできなくても、そのまま遊べる */ }
  });
}
// スマホを縦に持っている時は、横向きをすすめる
const portraitQuery = window.matchMedia('(orientation: portrait)');
const updateRotateTip = () => $('rotate-tip').classList.toggle('hidden', !(IS_MOBILE && portraitQuery.matches));
portraitQuery.addEventListener?.('change', updateRotateTip);
updateRotateTip();
// iPhone の Safari は user-scalable=no を無視するので、ピンチ・ダブルタップでの拡大を止める
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('dblclick', (e) => e.preventDefault());

$('btn-settings').addEventListener('click', () => $('settings-panel').classList.remove('hidden'));
document.querySelectorAll('[data-close]').forEach((b) =>
  b.addEventListener('click', () => b.closest('.popup').classList.add('hidden'))
);

$('opt-shadows').addEventListener('change', (e) => {
  world.sun.castShadow = e.target.checked;
});
$('opt-orbit').addEventListener('change', (e) => {
  orbit = e.target.checked;
});
$('opt-stepped').addEventListener('change', (e) => {
  character.stepped = e.target.checked;
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  minimap?.resize();
});

// ---------- ループ ----------
const clock = new THREE.Clock();
const coordsEl = $('coords');
function loop() {
  requestAnimationFrame(loop);
  const realDt = Math.min(clock.getDelta(), 0.05);
  if (!world || !player) return;
  // ヒットストップ中は、ほぼ時間を止める
  const dt = hitStop > 0 ? realDt * 0.05 : realDt;
  hitStop = Math.max(0, hitStop - realDt);

  const active = mode === 'ingame' && !fainted;
  if (active) {
    applyLook();
    if (input.consumeAttack()) useHeld();
    const skillKey = input.consumeSkill();
    if (skillKey >= 0) useSkill(skillKey);
    // 攻撃中は足を止めて、その場で振る
    const move = character.attacking || drinkTimer >= 0 || skillState ? { x: 0, z: 0 } : worldMove();
    player.update(dt, { ...move, jump: input.jump() && !character.attacking });
    checkGoal();
    checkArea();
  } else {
    if (mode === 'ingame') applyLook();
    input.consumeAttack();
    player.update(dt, { x: 0, z: 0, jump: false });
  }

  updateCombo(dt);
  updateDrink(dt);
  updateSkills(dt, realDt);
  updateDrips(dt);
  fx.update(dt);
  invuln = Math.max(0, invuln - dt);
  // 無敵時間中は点滅
  character.object.visible = !(invuln > 0 && !fainted && Math.floor(invuln * 12) % 2 === 0);

  enemies.update(dt, { playerPos: player.position, playerActive: active, playerSwimming: player.swimming, onHitPlayer: hitPlayer, onBleed });
  world.update(dt, player.position, camera.position);
  updateCamera(realDt);
  // 画面の揺れ
  if (shake > 0.001) {
    camera.position.x += (Math.random() - 0.5) * shake;
    camera.position.y += (Math.random() - 0.5) * shake;
    shake *= Math.exp(-realDt * 14);
  }
  renderer.render(scene, camera);
  enemies.updateLabels(camera);
  popups.update(dt, camera);
  if (mode === 'ingame') updateSkillHud();

  if (mode === 'ingame') {
    minimap.draw(player.position, player.facing, cam.yaw, enemies.alive());
    const p = player.position;
    coordsEl.textContent = `X ${p.x.toFixed(0)}  Y ${p.y.toFixed(0)}  Z ${p.z.toFixed(0)}`;
  }
}

// 起動中にエラーが起きたら、ロード画面で止まったままにせず内容を表示する
window.addEventListener('error', (e) => {
  const status = $('loading-status');
  if (status) status.textContent = 'エラーが発生しました: ' + e.message;
});

load().catch((e) => {
  $('loading-status').textContent = 'エラーが発生しました: ' + e.message;
  console.error(e);
});
loop();

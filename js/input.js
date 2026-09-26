/**
 * キーボード・マウス・タッチの入力をまとめる。
 * enabled が false の間（メニュー表示中など）は何も受け付けない。
 */
export function createInput(canvas, { joystickEl, jumpBtnEl, attackBtnEl, skillBtnsEl, onKey }) {
  const keys = new Set();
  const look = { dx: 0, dy: 0 };
  let zoom = 0;
  let enabled = false;
  let touchJump = false;
  let attackQueued = false;
  let skillQueued = -1; // 押された技の番号（0 = Q, 1 = E, 2 = R）
  const stick = { x: 0, y: 0, id: null };

  // ---------- キーボード ----------
  window.addEventListener('keydown', (e) => {
    if (!enabled) return;
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    keys.add(e.code);
    if (!e.repeat) {
      if (e.code === 'KeyF' || e.code === 'KeyJ') attackQueued = true;
      const skillKeys = { KeyQ: 0, KeyE: 1, KeyR: 2 };
      if (e.code in skillKeys) skillQueued = skillKeys[e.code];
      onKey?.(e.code);
    }
  });
  window.addEventListener('keyup', (e) => keys.delete(e.code));
  window.addEventListener('blur', () => keys.clear());

  // ---------- カメラ操作（マウスドラッグ / タッチドラッグ） ----------
  const drags = new Map();
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('pointerdown', (e) => {
    if (!enabled) return;
    canvas.setPointerCapture(e.pointerId);
    drags.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, time: performance.now(), button: e.button });
    canvas.classList.add('dragging');
  });
  let pinchDist = 0;
  canvas.addEventListener('pointermove', (e) => {
    const d = drags.get(e.pointerId);
    if (!d) return;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    d.x = e.clientX;
    d.y = e.clientY;
    if (drags.size >= 2) {
      // 2 本指：ピンチでズーム（指の間が広がると寄る）
      const [a, b] = [...drags.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDist) zoom += (pinchDist - dist) * 4;
      pinchDist = dist;
      return;
    }
    pinchDist = 0;
    look.dx += dx;
    look.dy += dy;
  });
  const endDrag = (e) => {
    // 動かさずに短くクリック（タップ）したら攻撃
    const d = drags.get(e.pointerId);
    if (d && e.type === 'pointerup' && d.button === 0 && enabled &&
        Math.hypot(e.clientX - d.sx, e.clientY - d.sy) < 6 && performance.now() - d.time < 300) {
      attackQueued = true;
    }
    drags.delete(e.pointerId);
    if (drags.size < 2) pinchDist = 0;
    if (drags.size === 0) canvas.classList.remove('dragging');
  };
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', endDrag);
  canvas.addEventListener('wheel', (e) => {
    if (!enabled) return;
    e.preventDefault();
    zoom += e.deltaY;
  }, { passive: false });

  // ---------- タッチ用ジョイスティック ----------
  const knob = joystickEl.querySelector('.knob');
  const RADIUS = 48;
  const setStick = (e) => {
    const r = joystickEl.getBoundingClientRect();
    let x = e.clientX - (r.left + r.width / 2);
    let y = e.clientY - (r.top + r.height / 2);
    const len = Math.hypot(x, y);
    if (len > RADIUS) { x = (x / len) * RADIUS; y = (y / len) * RADIUS; }
    stick.x = x / RADIUS;
    stick.y = y / RADIUS;
    knob.style.transform = `translate(${x}px, ${y}px)`;
  };
  joystickEl.addEventListener('pointerdown', (e) => {
    stick.id = e.pointerId;
    joystickEl.setPointerCapture(e.pointerId);
    setStick(e);
  });
  joystickEl.addEventListener('pointermove', (e) => { if (e.pointerId === stick.id) setStick(e); });
  const endStick = (e) => {
    if (e.pointerId !== stick.id) return;
    stick.id = null;
    stick.x = stick.y = 0;
    knob.style.transform = '';
  };
  joystickEl.addEventListener('pointerup', endStick);
  joystickEl.addEventListener('pointercancel', endStick);

  jumpBtnEl.addEventListener('pointerdown', (e) => { e.preventDefault(); touchJump = true; });
  jumpBtnEl.addEventListener('pointerup', () => { touchJump = false; });
  jumpBtnEl.addEventListener('pointercancel', () => { touchJump = false; });
  jumpBtnEl.addEventListener('pointerleave', () => { touchJump = false; });

  attackBtnEl.addEventListener('pointerdown', (e) => { e.preventDefault(); if (enabled) attackQueued = true; });
  [...skillBtnsEl.children].forEach((btn, i) => {
    btn.addEventListener('pointerdown', (e) => { e.preventDefault(); if (enabled) skillQueued = i; });
  });

  const has = (...codes) => codes.some((c) => keys.has(c));

  return {
    get enabled() { return enabled; },
    set enabled(v) {
      enabled = v;
      if (!v) { keys.clear(); drags.clear(); touchJump = false; attackQueued = false; skillQueued = -1; }
    },
    /** 前後左右の入力（forward: +1 が前、right: +1 が右） */
    move() {
      let forward = (has('KeyW', 'ArrowUp') ? 1 : 0) - (has('KeyS', 'ArrowDown') ? 1 : 0);
      let right = (has('KeyD', 'ArrowRight') ? 1 : 0) - (has('KeyA', 'ArrowLeft') ? 1 : 0);
      forward += -stick.y;
      right += stick.x;
      const len = Math.hypot(forward, right);
      if (len > 1) { forward /= len; right /= len; }
      return { forward, right };
    },
    jump() {
      return enabled && (keys.has('Space') || touchJump);
    },
    /** 走る：Shift を押している、またはスティックを端まで倒している */
    run() {
      return enabled && (has('ShiftLeft', 'ShiftRight') || Math.hypot(stick.x, stick.y) > 0.92);
    },
    /** 攻撃の入力があったか（読むと消える） */
    consumeAttack() {
      const a = attackQueued;
      attackQueued = false;
      return a;
    },
    /** 押された技の番号（なければ -1。読むと消える） */
    consumeSkill() {
      const q = skillQueued;
      skillQueued = -1;
      return q;
    },
    /** 前回呼び出しからのマウス移動量とホイール量を取り出す */
    consumeLook() {
      const r = { dx: look.dx, dy: look.dy, zoom };
      look.dx = look.dy = 0;
      zoom = 0;
      return r;
    },
  };
}

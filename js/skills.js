import * as THREE from 'three';
import { distToSegment } from './terrain.js';

/**
 * 魔剣サングレアの技（Q / E / R）。
 *
 * cooldown: 次に使えるまでの時間（秒）  duration: 動けない時間（秒）  anim: キャラクターの動き
 * canUse?(ctx): 使えるかどうか  start(ctx, s): 使った瞬間  update(ctx, s, t): 使っている間、毎フレーム
 *
 * ctx（main.js が渡す道具）:
 *   player, character, enemies, fx, stats
 *   power(mult)          … 今の攻撃力 × 倍率（剣の強さや強化も込み）
 *   applyHits(hits)      … ダメージ表示・経験値・吸血をまとめて処理
 *   invuln(sec) / shake(v) / hitStop(sec) / screenFlash(v) / fovKick(v) / toast(msg) / popup(pos, text, cls)
 *   startBuff(buff)      … 一定時間の強化を始める
 */

const forward = (facing) => new THREE.Vector3(Math.sin(facing), 0, Math.cos(facing));
const chest = (p) => p.clone().setY(p.y + 3);

export const SKILLS = {
  // ---------- Q：血風斬 ----------
  bloodGale: {
    name: '血風斬',
    key: 'Q',
    desc: '残像を残して駆け抜け、通り道を斬る。少し遅れて、通り道から血の棘が噴き出す（駆け抜ける間は無敵）',
    cooldown: 5,
    duration: 0.62,
    anim: 6,
    start(ctx, s) {
      const dir = forward(ctx.player.facing);
      s.dir = dir;
      s.from = ctx.player.position.clone();
      s.to = s.from.clone().addScaledVector(dir, 14);
      s.ghosts = 0;
      s.cut = false;
      s.burst = false;
      ctx.invuln(0.55);
      ctx.player.knockback(dir.x * 58, dir.z * 58);
      ctx.fovKick(8);
    },
    update(ctx, s, t) {
      // 駆け抜けながら残像を置いていく
      while (s.ghosts < 5 && t >= s.ghosts * 0.04) {
        ctx.fx.afterimage(ctx.character.object, 0.35);
        s.ghosts++;
      }
      // すれ違いざまの一閃
      if (!s.cut && t >= 0.16) {
        s.cut = true;
        ctx.fx.streak(s.from, ctx.player.position.clone().addScaledVector(s.dir, 2), 3, 0.8);
        const a = s.from, b = s.to;
        s.hits = ctx.enemies.hitArea(
          (e) => distToSegment(e.pos.x, e.pos.z, a.x, a.z, b.x, b.z) < 2.8 + e.T.radius && Math.abs(e.pos.y - a.y) < 5,
          { damage: ctx.power(2.4), knockback: 0.6, from: a },
        );
        for (const h of s.hits) ctx.fx.burst(h.pos, 18, 9);
        if (s.hits.length) { ctx.hitStop(0.08); ctx.shake(0.5); }
        ctx.applyHits(s.hits);
      }
      // 少し遅れて、通り道から血の棘が噴き出す（2 撃目）
      if (!s.burst && t >= 0.5) {
        s.burst = true;
        const a = s.from, b = s.to;
        for (let i = 0; i <= 6; i++) {
          const p = a.clone().lerp(b, i / 6);
          ctx.fx.spike(p.x, p.z, 3.8, 1.1);
        }
        ctx.fx.flash(a.clone().lerp(b, 0.5), 90, 35, 0.4);
        const hits = ctx.enemies.hitArea(
          (e) => distToSegment(e.pos.x, e.pos.z, a.x, a.z, b.x, b.z) < 3 + e.T.radius && Math.abs(e.pos.y - a.y) < 5,
          { damage: ctx.power(1.5), knockback: 0.8, from: a, bleed: true },
        );
        for (const h of hits) ctx.fx.burst(h.pos, 12, 7);
        ctx.shake(0.35);
        ctx.applyHits(hits);
      }
    },
  },

  // ---------- E：紅月墜とし ----------
  crimsonMoon: {
    name: '紅月墜とし',
    key: 'E',
    desc: '高く跳び上がって叩きつけ、三重の衝撃波・血の棘の輪・血の柱を噴き上げる',
    cooldown: 8,
    duration: 0.95,
    anim: 7,
    start(ctx, s) {
      const dir = forward(ctx.player.facing);
      ctx.player.knockback(dir.x * 8, dir.z * 8, 36);
      ctx.invuln(0.8);
      s.done = false;
      s.wave = 0;
    },
    update(ctx, s, t) {
      if (!s.done && t >= 0.62) {
        s.done = true;
        s.c = ctx.player.position.clone();
        const c = s.c;
        ctx.fx.nova(c.clone().setY(c.y + 0.5), 6, 0.35);
        ctx.fx.flash(c, 160, 45, 0.5);
        ctx.fx.burst(c.clone().setY(c.y + 0.5), 40, 13);
        for (let i = 0; i < 14; i++) {
          const a = (i / 14) * Math.PI * 2;
          ctx.fx.spike(c.x + Math.cos(a) * 6, c.z + Math.sin(a) * 6, 3.4, 1.1);
        }
        for (let i = 0; i < 6; i++) {
          const a = (i / 6) * Math.PI * 2 + 0.3;
          ctx.fx.pillar(c.x + Math.cos(a) * 9, c.z + Math.sin(a) * 9, 16, 0.9, 1.3);
        }
        const hits = ctx.enemies.hitArea(
          (e) => Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 10 + e.T.radius && Math.abs(e.pos.y - c.y) < 6,
          { damage: ctx.power(3.2), knockback: 3, from: c },
        );
        for (const h of hits) ctx.fx.burst(h.pos, 14, 8);
        ctx.shake(1.0);
        ctx.screenFlash(0.6);
        ctx.fovKick(-6);
        if (hits.length) ctx.hitStop(0.14);
        ctx.applyHits(hits);
      }
      // 衝撃波を少しずつずらして三重に
      while (s.done && s.wave < 3 && t >= 0.62 + s.wave * 0.1) {
        ctx.fx.ring(s.c, 8 + s.wave * 4, 0.5 + s.wave * 0.15, s.wave === 1 ? 0x8a0818 : 0xff2a3a);
        s.wave++;
      }
    },
  },

  // ---------- R：鮮血解放（奥義） ----------
  bloodRelease: {
    name: '鮮血解放',
    key: 'R',
    desc: 'HP を 20% 捧げ、まわりを吹き飛ばす血の爆発を起こす。10 秒間、攻撃力 1.8 倍・吸血 25%、剣を振るたびに血の斬撃波が飛ぶ',
    cooldown: 25,
    duration: 1.0,
    anim: 9,
    canUse(ctx) {
      const cost = Math.ceil(ctx.stats.maxHp * 0.2);
      if (ctx.stats.hp <= cost + 1) {
        ctx.toast('HP が足りない…');
        return false;
      }
      return true;
    },
    start(ctx, s) {
      const cost = Math.ceil(ctx.stats.maxHp * 0.2);
      ctx.stats.hp -= cost;
      ctx.popup(ctx.player.position.clone().setY(ctx.player.position.y + 5.5), `-${cost}`, 'hurt');
      ctx.invuln(1.0);
      s.done = false;
    },
    update(ctx, s, t) {
      if (s.done || t < 0.5) return;
      s.done = true;
      const c = ctx.player.position.clone();
      ctx.fx.nova(chest(c), 14, 0.7);
      ctx.fx.ring(c, 16, 0.8);
      ctx.fx.ring(c, 10, 0.6, 0x8a0818);
      ctx.fx.burst(chest(c), 50, 12);
      ctx.fx.flash(c, 200, 50, 0.7);
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        ctx.fx.pillar(c.x + Math.cos(a) * 6, c.z + Math.sin(a) * 6, 20, 1.1, 1.1);
      }
      const hits = ctx.enemies.hitArea(
        (e) => Math.hypot(e.pos.x - c.x, e.pos.z - c.z) < 12 + e.T.radius && Math.abs(e.pos.y - c.y) < 6,
        { damage: ctx.power(2.6), knockback: 3.2, from: c },
      );
      ctx.applyHits(hits);
      ctx.shake(1.1);
      ctx.screenFlash(0.9);
      ctx.fovKick(10);
      ctx.startBuff({ name: '鮮血解放', time: 10, atk: 1.8, lifesteal: 0.25, waves: true });
    },
  },
};

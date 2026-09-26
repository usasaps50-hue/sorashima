/**
 * 持っている物ごとの技。攻撃ボタンを続けて押すと、配列の順につながる。
 *
 * anim: キャラクターの動きの番号（character.js）
 * duration: 技の長さ（秒）   hitTime: 当たる瞬間（秒）
 * range: 届く距離（m）       arc: 当たる角度の幅（ラジアン。2π なら全方向）
 * power: 攻撃力の倍率        knockback: 吹き飛ばしの倍率
 * lunge: 踏み込みの速さ      hop: 小さく跳ねる速さ
 * shake: 当たった時の画面の揺れ   hitStop: 当たった時に止まる時間（秒）
 */
export const MOVESETS = {
  // 剣の3段コンボ
  sword: [
    {
      anim: 0, name: '縦斬り',
      duration: 0.42, hitTime: 0.14,
      range: 4.6, arc: 1.7, power: 1.0, knockback: 1.0,
      lunge: 7, hop: 0,
      shake: 0.18, hitStop: 0.05,
    },
    {
      anim: 1, name: '横薙ぎ',
      duration: 0.46, hitTime: 0.17,
      range: 5.0, arc: 3.0, power: 1.1, knockback: 1.4,
      lunge: 9, hop: 0,
      shake: 0.25, hitStop: 0.06,
    },
    {
      anim: 2, name: '回転斬り',
      duration: 0.62, hitTime: 0.3,
      range: 5.6, arc: Math.PI * 2, power: 1.7, knockback: 2.2,
      lunge: 4, hop: 16,
      shake: 0.6, hitStop: 0.1,
    },
  ],
  // 素手の3段パンチ（弱いが速い）
  fists: [
    {
      anim: 3, name: 'ジャブ',
      duration: 0.28, hitTime: 0.08,
      range: 3.2, arc: 1.4, power: 0.45, knockback: 0.6,
      lunge: 5, hop: 0,
      shake: 0.08, hitStop: 0.03,
    },
    {
      anim: 4, name: 'ストレート',
      duration: 0.38, hitTime: 0.12,
      range: 3.6, arc: 1.4, power: 0.7, knockback: 1.2,
      lunge: 8, hop: 0,
      shake: 0.15, hitStop: 0.05,
    },
    {
      anim: 14, name: 'アッパー',
      duration: 0.46, hitTime: 0.15,
      range: 3.6, arc: 1.6, power: 1.0, knockback: 1.6,
      lunge: 6, hop: 10,
      shake: 0.25, hitStop: 0.07,
    },
  ],
  // 魔剣サングレアの4段コンボ（速く、重く、赤い軌跡）。hitTimes があれば複数回当たる
  blood: [
    {
      anim: 10, name: '逆袈裟',
      duration: 0.34, hitTime: 0.1,
      range: 4.9, arc: 2.0, power: 1.0, knockback: 0.8,
      lunge: 8, hop: 0,
      shake: 0.2, hitStop: 0.05,
    },
    {
      anim: 11, name: '袈裟斬り',
      duration: 0.36, hitTime: 0.11,
      range: 4.9, arc: 2.0, power: 1.1, knockback: 1.0,
      lunge: 8, hop: 0,
      shake: 0.24, hitStop: 0.05,
    },
    {
      anim: 12, name: '血閃突き',
      duration: 0.42, hitTime: 0.13,
      range: 7.5, arc: 0.7, power: 1.5, knockback: 1.8,
      lunge: 18, hop: 0,
      shake: 0.3, hitStop: 0.07,
    },
    {
      anim: 13, name: '血旋',
      duration: 0.72, hitTime: 0.22, hitTimes: [0.22, 0.44],
      range: 6.2, arc: Math.PI * 2, power: 1.3, knockback: 2.4,
      lunge: 4, hop: 12,
      shake: 0.55, hitStop: 0.09,
    },
  ],
  // 斧の3段（遅くて重い。魔物への威力は低いが、木や柵には強い）
  axe: [
    {
      anim: 15, name: '薪割り',
      duration: 0.58, hitTime: 0.27,
      range: 4.4, arc: 1.5, power: 1.0, knockback: 1.2,
      lunge: 5, hop: 0,
      shake: 0.35, hitStop: 0.07,
    },
    {
      anim: 1, name: '横振り',
      duration: 0.5, hitTime: 0.19,
      range: 4.8, arc: 2.6, power: 1.0, knockback: 1.6,
      lunge: 6, hop: 0,
      shake: 0.3, hitStop: 0.06,
    },
    {
      anim: 7, name: '兜割り',
      duration: 0.95, hitTime: 0.6,
      range: 5.2, arc: 2.2, power: 1.8, knockback: 2.4,
      lunge: 6, hop: 18,
      shake: 0.8, hitStop: 0.12,
    },
  ],
  // 血斧の4段（大きく振り回し、最後は跳んで叩き割る）
  bloodAxe: [
    {
      anim: 15, name: '血割り',
      duration: 0.54, hitTime: 0.26,
      range: 4.8, arc: 1.6, power: 1.0, knockback: 1.3,
      lunge: 7, hop: 0,
      shake: 0.4, hitStop: 0.07,
    },
    {
      anim: 1, name: '裂き払い',
      duration: 0.48, hitTime: 0.18,
      range: 5.2, arc: 2.8, power: 1.1, knockback: 1.6,
      lunge: 8, hop: 0,
      shake: 0.35, hitStop: 0.06,
    },
    {
      anim: 13, name: '血嵐',
      duration: 0.72, hitTime: 0.22, hitTimes: [0.22, 0.44],
      range: 6, arc: Math.PI * 2, power: 1.0, knockback: 2.0,
      lunge: 4, hop: 12,
      shake: 0.5, hitStop: 0.08,
    },
    {
      anim: 7, name: '断頭',
      duration: 0.95, hitTime: 0.6,
      range: 6, arc: 2.4, power: 2.2, knockback: 3,
      lunge: 8, hop: 20,
      shake: 1.0, hitStop: 0.14,
    },
  ],
};

// 互換用：剣の技
export const ATTACKS = MOVESETS.sword;

// キャラクターの動きの長さ（anim 番号ごと）。5 は回復薬を飲む動き、6〜9 はスキル、10〜13 は魔剣の連撃、14 はアッパー、15 は斧の振り下ろし
export const ANIM_DURATION = {
  0: 0.42, 1: 0.46, 2: 0.62, 3: 0.28, 4: 0.38, 5: 0.9, 6: 0.45, 7: 0.95, 8: 0.6, 9: 0.9,
  10: 0.34, 11: 0.36, 12: 0.42, 13: 0.72, 14: 0.46, 15: 0.58,
};

// 前の技が終わってから、この時間内に押せば次の段につながる
export const COMBO_WINDOW = 0.45;

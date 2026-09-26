/**
 * アイテムの種類と、持ち物（アイテム欄）の管理。
 *
 * kind: 'weapon'（持つと攻撃の技が変わる） / 'consumable'（使うとなくなる）
 * moveset: 武器の技（attacks.js の MOVESETS のキー）
 * held: キャラクターの手に見せる物（character.js の setHeld）
 */

// 血の剣のアイコン
const bloodIcon = (blade, edge, guard, extra = '') => `<svg viewBox="0 0 32 32">
  <path d="M25 3l4 0 0 4-13.5 13.5-4-4z" fill="${blade}" stroke="${edge}" stroke-width="1.2"/>
  ${extra}
  <path d="M8.5 16.5l7 7-2 2-7-7z" fill="${guard}"/>
  <path d="M8 22l2 2-4 4-2-2z" fill="#2a1418"/>
  <circle cx="4.6" cy="27.4" r="1.6" fill="#ff2a3a"/>
</svg>`;

// 斧のアイコン（柄の色・刃の色・刃のふちの色）
const axeIcon = (handle, head, edge, extra = '') => `<svg viewBox="0 0 32 32">
  <path d="M6 28l17-17" stroke="${handle}" stroke-width="3" stroke-linecap="round"/>
  <path d="M18 5c5 0 10 4 10 10l-6 1-3-3-3-3z" fill="${head}" stroke="${edge}" stroke-width="1.4" stroke-linejoin="round"/>
  ${extra}
</svg>`;

const ICONS = {
  axe: axeIcon('#9a6a3e', '#c8d2dc', '#6a7888'),
  bloodAxe: axeIcon('#2a1418', '#16121a', '#ff2030', '<path d="M20 8c3 1 5 3 6 6" stroke="#ff2030" stroke-width="1.4" fill="none"/><circle cx="7" cy="27" r="1.6" fill="#ff2a3a"/>'),
  fence: `<svg viewBox="0 0 32 32"><g fill="#c89a64" stroke="#7a5534" stroke-width="1"><path d="M5 9l2-3 2 3v18H5z"/><path d="M14 9l2-3 2 3v18h-4z"/><path d="M23 9l2-3 2 3v18h-4z"/><rect x="3" y="12" width="26" height="3"/><rect x="3" y="20" width="26" height="3"/></g></svg>`,
  door: `<svg viewBox="0 0 32 32"><rect x="4" y="4" width="4" height="24" fill="#7a5534"/><rect x="24" y="4" width="4" height="24" fill="#7a5534"/><rect x="8" y="6" width="16" height="22" fill="#c89a64" stroke="#7a5534"/><path d="M8 11h16M8 17h16M8 23h16" stroke="#9a6a3e"/><circle cx="21" cy="17" r="1.4" fill="#f4c25b"/></svg>`,
  sangrea: bloodIcon('#0e0c12', '#ff2030', '#241018', '<path d="M13 19l12-12" stroke="#ff2030" stroke-width="1.6"/><circle cx="12" cy="20" r="1.4" fill="#ffd0d0"/>'),
  sword: `<svg viewBox="0 0 32 32"><path d="M24 4l4 0 0 4-13 13-4-4z" fill="#e6eef5" stroke="#8fa3b5" stroke-width="1.2"/><path d="M9 17l6 6-2 2-6-6z" fill="#f4c25b"/><path d="M8 22l2 2-4 4-2-2z" fill="#8a5a3b"/></svg>`,
  potion: `<svg viewBox="0 0 32 32"><rect x="13" y="4" width="6" height="5" rx="1" fill="#b07a55"/><path d="M12 9h8v4l4 5v7a3 3 0 01-3 3H11a3 3 0 01-3-3v-7l4-5z" fill="#dff4ff" opacity=".8"/><path d="M9 18h14v7a2 2 0 01-2 2H11a2 2 0 01-2-2z" fill="#ff5a6e"/><circle cx="13" cy="21" r="1.4" fill="#fff" opacity=".8"/></svg>`,
};

// 丸太のアイコン（木肌の色・年輪の色を変える）
const logIcon = (bark, ring, core) => `<svg viewBox="0 0 32 32">
  <rect x="5" y="11" width="20" height="12" rx="2" fill="${bark}" transform="rotate(-20 15 17)"/>
  <ellipse cx="24" cy="13.5" rx="4" ry="6" fill="${ring}" transform="rotate(-20 24 13.5)"/>
  <ellipse cx="24" cy="13.5" rx="2" ry="3.2" fill="${core}" transform="rotate(-20 24 13.5)"/>
</svg>`;

/**
 * 地方ごとの木材。durability: 耐久力（建物にした時の丈夫さ）
 * resist: 環境への強さ（cold: 寒さ・凍結 / heat: 暑さ・乾燥 / fire: 火 / water: 水・湿気）
 * trait: その木材だけの特性
 * 環境に強くない木材は、その環境の地方では弱る（拠点を作れるようになったら効く）
 */
const wood = (name, desc, durability, resist, trait, icon, plank) => ({
  name, desc, kind: 'material', category: 'wood', durability, resist, trait, icon, plank, stack: 99,
});
export const WOODS = {
  start: 'woodYoung',
  flowers: 'woodBlossom',
  forest: 'woodElder',
  marsh: 'woodMarsh',
  desert: 'woodCactus',
  canyon: 'woodMaple',
  snow: 'woodFrost',
  highlands: 'woodCrystal',
  volcano: 'woodCharred',
};
const WOOD_ITEMS = {
  woodYoung: wood('若葉の木材', '始まりの草原の、素直で扱いやすい木材', 100, {},
    { name: '扱いやすい', desc: '特別な強さはないが、どこでも使える基本の木材' }, logIcon('#9a6a44', '#e8c890', '#c89a60'), 0xc89a64),
  woodBlossom: wood('花香る木材', '花冠の丘陵の、ほのかに甘く香る木材', 80, {},
    { name: '癒やしの香り', desc: '拠点に使うと、まわりのペットがなつきやすくなる' }, logIcon('#b88a8a', '#ffd8e4', '#f2a6c2'), 0xe0b0b8),
  woodElder: wood('深緑の古木材', '深緑の森の、年を経た重く硬い木材', 160, { water: true },
    { name: '腐りにくい', desc: '湿気に強く、長いあいだ傷まない' }, logIcon('#5a3a24', '#c8a870', '#6b8a4a'), 0x7a5534),
  woodMarsh: wood('湿原の水木', '霧の湿原の、水をはじく木材', 120, { water: true },
    { name: '防水', desc: '水辺や沼の上に建てても傷まない' }, logIcon('#4a4a34', '#b8b088', '#5a7a5a'), 0x6a6a4a),
  woodCactus: wood('サボテン材', '陽炎の砂漠の、乾いた軽い木材', 70, { heat: true },
    { name: '耐暑', desc: '暑さで乾いて割れたりしない' }, logIcon('#6a8a4a', '#d8d09a', '#9fbf6a'), 0xa8b870),
  woodMaple: wood('紅葉の堅木', '紅葉の渓谷の、しなやかで美しい木材', 140, {},
    { name: 'しなやか', desc: '衝撃に強く、攻撃を受けても壊れにくい' }, logIcon('#8a4a2a', '#f0b070', '#e0602a'), 0xc0603a),
  woodFrost: wood('雪嶺の針葉材', '白嶺の雪原の、寒さに耐えて育った木材', 200, { cold: true },
    { name: '耐寒', desc: '雪原でも凍らない。ほかの木材より丈夫' }, logIcon('#5a4030', '#e8f0f8', '#9fc0d8'), 0xd8dce4),
  woodCrystal: wood('水晶松の木材', '水晶の高地の、魔力を帯びた木材', 180, { cold: true },
    { name: '魔力を帯びる', desc: '夜になると淡く光る。魔法の力に強い' }, logIcon('#4a4458', '#c8b8ff', '#9fe8ff'), 0x8a80b0),
  woodCharred: wood('焼け炭の木材', '焔の火山地帯の、焼けても残った黒い木材', 150, { heat: true, fire: true },
    { name: '耐火', desc: '火山の熱でも燃えない' }, logIcon('#2a2226', '#6a5a50', '#ff7a30'), 0x3a3236),
};

/** 木材の番号の一覧（建てる時に選ぶ順） */
export const WOOD_IDS = Object.keys(WOOD_ITEMS);

/** 環境の名前（木材の弱点の説明に使う） */
export const HAZARDS = {
  cold: { name: '寒さ', where: '白嶺の雪原・水晶の高地', effect: '凍ってもろくなる' },
  heat: { name: '暑さ', where: '陽炎の砂漠・焔の火山地帯', effect: '乾いてひび割れる' },
  fire: { name: '火', where: '焔の火山地帯', effect: '燃えてしまう' },
  water: { name: '湿気', where: '霧の湿原・深緑の森', effect: '腐って弱くなる' },
};

export const ITEMS = {
  ...WOOD_ITEMS,
  sword: {
    name: '旅人の剣',
    desc: '使い慣れた片手剣。3段コンボが出せる',
    kind: 'weapon',
    moveset: 'sword',
    held: 'sword',
    stance: 'sword',
    power: 1.0,
    icon: ICONS.sword,
  },

  // ---------- 血の魔剣（特性と 3 つのスキルを持つ） ----------
  // power: 攻撃力の倍率  speed: 振りの速さ  trail: 斬撃の軌跡の色  stance: 待機の構え
  // passive: 持っているだけで効く特性  skills: Q / E / R で出すスキル（skills.js）
  sangrea: {
    name: '魔剣サングレア',
    desc: '血を吸って脈打つ、黒い魔剣。速く重い 4 段の連撃を放つ',
    kind: 'weapon', moveset: 'blood', held: 'sangrea', rarity: 'blood', stance: 'blood',
    power: 1.7, speed: 1.15, trail: 0xff2030,
    passive: { id: 'lifesteal', name: '吸血', desc: '与えたダメージの 10% だけ HP を回復する', rate: 0.1 },
    skills: ['bloodGale', 'crimsonMoon', 'bloodRelease'],
    icon: ICONS.sangrea,
  },

  // ---------- 斧：魔物には弱いが、木や柵を壊すのが得意 ----------
  // chop: 木を切る強さの倍率  breaker: 柵や扉を壊す強さの倍率
  axe: {
    name: '木こりの斧',
    desc: '重い鉄の斧。魔物にはあまり効かないが、木や柵をたやすく叩き割る',
    kind: 'weapon', moveset: 'axe', held: 'axe', stance: 'axe',
    power: 0.55, speed: 0.9, chop: 3, breaker: 3, trail: 0xfff0d0,
    icon: ICONS.axe,
  },
  bloodAxe: {
    name: '血斧ガルムヘッド',
    desc: '血を吸って赤く脈打つ、黒い大斧。城壁すら砕くと言われる',
    kind: 'weapon', moveset: 'bloodAxe', held: 'bloodAxe', rarity: 'blood', stance: 'bloodAxe',
    power: 0.9, speed: 0.95, chop: 4, breaker: 4.5, trail: 0xff2030,
    passive: { id: 'bleed', name: '裂傷', desc: '斬った魔物に出血を与え、じわじわと HP を削る' },
    icon: ICONS.bloodAxe,
  },

  // ---------- 建てる物（持って攻撃ボタンで置く） ----------
  fence: {
    name: '木の柵',
    desc: '4m の柵。まわりを囲えば、魔物が入ってこられない',
    kind: 'build', build: 'fence', held: null, stance: 'item', stack: 99,
    icon: ICONS.fence,
  },
  door: {
    name: '木の扉',
    desc: '開け閉めできる扉つきの柵。G キーで開け閉めする',
    kind: 'build', build: 'door', held: null, stance: 'item', stack: 99,
    icon: ICONS.door,
  },

  potion: {
    name: '回復薬',
    desc: '飲むと HP が 40 回復する',
    kind: 'consumable',
    held: 'potion',
    heal: 40,
    icon: ICONS.potion,
  },
};

export const SLOT_COUNT = 8;

// デモ用：すべての道具を持ち、薬や建てる物は減らない（無限）
export const DEMO = true;

/** 持ち物。slots[i] は { id, count } か null（空） */
export function createInventory() {
  const slots = Array(SLOT_COUNT).fill(null);
  const start = DEMO
    ? ['axe', 'bloodAxe', 'sword', 'sangrea', 'fence', 'door', 'potion']
    : ['axe', 'sword', 'potion'];
  start.forEach((id, i) => { slots[i] = { id, count: ITEMS[id].kind === 'weapon' ? 1 : DEMO ? 99 : 3 }; });
  let selected = 0;

  return {
    slots,
    /** 減らない（デモ用） */
    infinite: DEMO,
    get selected() { return selected; },
    set selected(i) { selected = Math.max(0, Math.min(SLOT_COUNT - 1, i)); },
    /** 今持っている物（空なら null） */
    get held() {
      const s = slots[selected];
      return s ? { ...ITEMS[s.id], id: s.id, count: s.count } : null;
    },
    /** 今持っている物を 1 つ減らす（なくなったら空にする） */
    consumeHeld() {
      const s = slots[selected];
      if (!s || DEMO) return;
      s.count--;
      if (s.count <= 0) slots[selected] = null;
    },
    /**
     * アイテムを加える（同じ物があれば重ね、なければ空いているマスへ）。
     * 入りきらなかった数を返す（0 なら全部入った）
     */
    add(id, count = 1) {
      const item = ITEMS[id];
      const max = item.stack ?? (item.kind === 'consumable' ? 99 : 1);
      for (const s of slots) {
        if (count <= 0) break;
        if (s && s.id === id && s.count < max) {
          const put = Math.min(count, max - s.count);
          s.count += put;
          count -= put;
        }
      }
      while (count > 0) {
        const empty = slots.indexOf(null);
        if (empty < 0) break;
        const put = Math.min(count, max);
        slots[empty] = { id, count: put };
        count -= put;
      }
      return count;
    },
  };
}

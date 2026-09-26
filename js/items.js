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

const ICONS = {
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
const wood = (name, desc, durability, resist, trait, icon) => ({
  name, desc, kind: 'material', category: 'wood', durability, resist, trait, icon, stack: 99,
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
    { name: '扱いやすい', desc: '特別な強さはないが、どこでも使える基本の木材' }, logIcon('#9a6a44', '#e8c890', '#c89a60')),
  woodBlossom: wood('花香る木材', '花冠の丘陵の、ほのかに甘く香る木材', 80, {},
    { name: '癒やしの香り', desc: '拠点に使うと、まわりのペットがなつきやすくなる' }, logIcon('#b88a8a', '#ffd8e4', '#f2a6c2')),
  woodElder: wood('深緑の古木材', '深緑の森の、年を経た重く硬い木材', 160, { water: true },
    { name: '腐りにくい', desc: '湿気に強く、長いあいだ傷まない' }, logIcon('#5a3a24', '#c8a870', '#6b8a4a')),
  woodMarsh: wood('湿原の水木', '霧の湿原の、水をはじく木材', 120, { water: true },
    { name: '防水', desc: '水辺や沼の上に建てても傷まない' }, logIcon('#4a4a34', '#b8b088', '#5a7a5a')),
  woodCactus: wood('サボテン材', '陽炎の砂漠の、乾いた軽い木材', 70, { heat: true },
    { name: '耐暑', desc: '暑さで乾いて割れたりしない' }, logIcon('#6a8a4a', '#d8d09a', '#9fbf6a')),
  woodMaple: wood('紅葉の堅木', '紅葉の渓谷の、しなやかで美しい木材', 140, {},
    { name: 'しなやか', desc: '衝撃に強く、攻撃を受けても壊れにくい' }, logIcon('#8a4a2a', '#f0b070', '#e0602a')),
  woodFrost: wood('雪嶺の針葉材', '白嶺の雪原の、寒さに耐えて育った木材', 200, { cold: true },
    { name: '耐寒', desc: '雪原でも凍らない。ほかの木材より丈夫' }, logIcon('#5a4030', '#e8f0f8', '#9fc0d8')),
  woodCrystal: wood('水晶松の木材', '水晶の高地の、魔力を帯びた木材', 180, { cold: true },
    { name: '魔力を帯びる', desc: '夜になると淡く光る。魔法の力に強い' }, logIcon('#4a4458', '#c8b8ff', '#9fe8ff')),
  woodCharred: wood('焼け炭の木材', '焔の火山地帯の、焼けても残った黒い木材', 150, { heat: true, fire: true },
    { name: '耐火', desc: '火山の熱でも燃えない' }, logIcon('#2a2226', '#6a5a50', '#ff7a30')),
};

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

/** 持ち物。slots[i] は { id, count } か null（空） */
export function createInventory() {
  const slots = Array(SLOT_COUNT).fill(null);
  slots[0] = { id: 'sword', count: 1 };
  slots[1] = { id: 'potion', count: 3 };
  slots[2] = { id: 'sangrea', count: 1 };
  let selected = 0;

  return {
    slots,
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
      if (!s) return;
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

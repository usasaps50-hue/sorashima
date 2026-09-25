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

export const ITEMS = {
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
    /** アイテムを加える（同じ物があれば重ね、なければ空いているマスへ） */
    add(id, count = 1) {
      const same = slots.find((s) => s && s.id === id);
      if (same && ITEMS[id].kind === 'consumable') { same.count += count; return true; }
      const empty = slots.indexOf(null);
      if (empty < 0) return false;
      slots[empty] = { id, count };
      return true;
    },
  };
}

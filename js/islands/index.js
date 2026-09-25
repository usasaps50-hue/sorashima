import { startIsland } from './start.js';
import { forestIsland } from './forest.js';
import { desertIsland } from './desert.js';
import { snowIsland } from './snow.js';
import { volcanoIsland } from './volcano.js';
import { BRIDGE_AT } from './layout.js';

// すべての島（最初が中央の始まりの島）
export const ISLANDS = [startIsland, forestIsland, desertIsland, snowIsland, volcanoIsland];

// すべての地名（エリア表示・地図用）
export const ALL_PLACES = ISLANDS.flatMap((isl) => Object.values(isl.places));

// 敵が入れない場所
export const SANCTUARIES = ISLANDS.flatMap((isl) => isl.sanctuaries);

/**
 * 橋：始まりの草原の北を流れる川にかかる小さな橋（北の雪原へ向かう街道の途中）。
 * axis: 'z' なら南北に伸び、x = at の線上。mid: 川の上の位置（ここから両側へ陸を探す）
 */
export const BRIDGES = [
  { name: '川の橋', axis: 'z', at: BRIDGE_AT.north, mid: -240, small: true },
];

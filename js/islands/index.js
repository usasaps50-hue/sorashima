import { startIsland } from './start.js';
import { forestIsland } from './forest.js';
import { desertIsland } from './desert.js';
import { snowIsland } from './snow.js';
import { volcanoIsland } from './volcano.js';
import { flowersIsland } from './flowers.js';
import { marshIsland, MARSH_BOARDWALK } from './marsh.js';
import { canyonIsland, CANYON_BRIDGE } from './canyon.js';
import { highlandsIsland } from './highlands.js';
import { BRIDGE_AT } from './layout.js';

// すべての地方（最初が中央の始まりの草原）
// 中央 → 東西南北 → 斜め（北東・南東・南西・北西）
export const ISLANDS = [
  startIsland, forestIsland, desertIsland, snowIsland, volcanoIsland,
  flowersIsland, marshIsland, canyonIsland, highlandsIsland,
];

// すべての地名（エリア表示・地図用）
export const ALL_PLACES = ISLANDS.flatMap((isl) => Object.values(isl.places));

// 敵が入れない場所
export const SANCTUARIES = ISLANDS.flatMap((isl) => isl.sanctuaries);

/**
 * 橋。axis: 'x' なら東西に伸び z = at の線上、'z' なら南北に伸び x = at の線上。
 * mid: 水や谷の上の位置（ここから両側へ陸を探す）  land: はしにする地面の高さ  arch: 反り（マイナスでたるむ）
 */
export const BRIDGES = [
  { name: '川の橋', axis: 'z', at: BRIDGE_AT.north, mid: -240, small: true },
  // 霧の湿原：沼の岸から、祠のある小島へ渡る木道
  { name: '湿原の木道', axis: 'x', at: MARSH_BOARDWALK.z, mid: MARSH_BOARDWALK.mid, small: true },
  // 紅葉の渓谷：深い谷の上、崖の上どうしをつなぐ吊り橋
  { name: '紅葉の吊り橋', axis: 'z', at: CANYON_BRIDGE.x, mid: CANYON_BRIDGE.z, land: 9, arch: -2.5 },
];

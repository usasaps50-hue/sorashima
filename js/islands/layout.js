// 島々の配置の共通設定（島どうしと橋で共有する数値）

// 島の広さの倍率：面積 10 倍 → 長さは √10 ≒ 3.16 倍
export const S = Math.sqrt(10);

// 中央の地方の中心から、まわりの地方の中心までの距離（重なり合って、ひとつの大陸になる）
export const D = 720;

// 斜めの地方（北東・南東・南西・北西）の中心の、x と z の距離
export const DIAG = 620;

// 地方どうしをつなぐ街道の線（東西の道は z = この値、南北の道は x = この値）
export const BRIDGE_AT = { east: 20, west: -10, south: -30, north: -40 };

/** 島の中心から、角度 angle の方向へ、ふちから inset だけ内側の点 */
export function nearCoast(island, angle, inset) {
  const r = island.edge(angle) - inset;
  return [island.cx + Math.cos(angle) * r, island.cz + Math.sin(angle) * r];
}

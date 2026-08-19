export const BUILDER_GAP = 7;

export const BUILDER_TUNING = {
  pauseBetweenBlocks: 200,
  pauseAfterBuild: 320,
  pauseAfterStyled: 720,
  revealDuration: 0.56,
  styleDuration: 0.48,
  resetDuration: 0.4,
} as const;

export type BuilderBlockSize = {
  height: number;
  width?: number;
};

export type BuilderBlockConfig = {
  id: string;
  wire: BuilderBlockSize;
  styled: BuilderBlockSize;
};

/** ~1.35× vs original portfolio wireframe (between 1× and 2×) */
export const BUILDER_BLOCKS: BuilderBlockConfig[] = [
  { id: "nav", wire: { height: 24, width: 100 }, styled: { height: 24, width: 100 } },
  { id: "hero", wire: { height: 112, width: 100 }, styled: { height: 116, width: 100 } },
  { id: "columns", wire: { height: 88, width: 100 }, styled: { height: 90, width: 100 } },
  { id: "cards", wire: { height: 100, width: 100 }, styled: { height: 102, width: 100 } },
  { id: "cta", wire: { height: 42, width: 38 }, styled: { height: 44, width: 42 } },
];

export const BUILDER_STAGE_MIN_HEIGHT =
  BUILDER_BLOCKS.reduce((sum, block) => sum + block.styled.height, 0) +
  (BUILDER_BLOCKS.length - 1) * BUILDER_GAP;

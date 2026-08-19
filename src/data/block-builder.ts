export const BUILDER_GAP = 10;

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

/** 2× scale vs original portfolio wireframe */
export const BUILDER_BLOCKS: BuilderBlockConfig[] = [
  { id: "nav", wire: { height: 36, width: 100 }, styled: { height: 36, width: 100 } },
  { id: "hero", wire: { height: 168, width: 100 }, styled: { height: 176, width: 100 } },
  { id: "columns", wire: { height: 128, width: 100 }, styled: { height: 132, width: 100 } },
  { id: "cards", wire: { height: 144, width: 100 }, styled: { height: 148, width: 100 } },
  { id: "cta", wire: { height: 60, width: 38 }, styled: { height: 64, width: 42 } },
];

export const BUILDER_STAGE_MIN_HEIGHT =
  BUILDER_BLOCKS.reduce((sum, block) => sum + block.styled.height, 0) +
  (BUILDER_BLOCKS.length - 1) * BUILDER_GAP;

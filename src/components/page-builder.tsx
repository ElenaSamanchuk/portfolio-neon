"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import {
  BUILDER_BLOCKS,
  BUILDER_GAP,
  BUILDER_STAGE_MIN_HEIGHT,
  BUILDER_TUNING,
} from "@/data/block-builder";

const EASE = [0.33, 1, 0.68, 1] as const;

type BlockPhase = "hidden" | "wire" | "styled";

export function PageBuilder() {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [phases, setPhases] = useState<Record<string, BlockPhase>>(
    Object.fromEntries(BUILDER_BLOCKS.map((b) => [b.id, "hidden"])),
  );
  const [polished, setPolished] = useState(false);
  const ghostX = useMotionValue(0);
  const ghostY = useMotionValue(0);
  const [ghostVisible, setGhostVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setPhases(Object.fromEntries(BUILDER_BLOCKS.map((b) => [b.id, "styled"])));
      setPolished(true);
      return;
    }

    let destroyed = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    const moveGhost = (el: HTMLElement) => {
      const stage = stageRef.current;
      if (!stage) return;
      const sRect = stage.getBoundingClientRect();
      const bRect = el.getBoundingClientRect();
      ghostX.set(bRect.right - sRect.left - 8);
      ghostY.set(bRect.top - sRect.top + 6);
      setGhostVisible(true);
    };

    const hideGhost = () => setGhostVisible(false);

    const resetAll = async () => {
      setPolished(false);
      hideGhost();
      setPhases(Object.fromEntries(BUILDER_BLOCKS.map((b) => [b.id, "hidden"])));
      await sleep(reducedMotion ? 0 : BUILDER_TUNING.resetDuration * 1000);
    };

    const revealAll = async () => {
      for (const cfg of BUILDER_BLOCKS) {
        if (destroyed) return;
        const el = rootRef.current?.querySelector<HTMLElement>(
          `[data-bb-block="${cfg.id}"]`,
        );
        if (el) moveGhost(el);
        setPhases((p) => ({ ...p, [cfg.id]: "wire" }));
        await sleep(
          reducedMotion ? 0 : BUILDER_TUNING.revealDuration * 1000 +
            BUILDER_TUNING.pauseBetweenBlocks,
        );
      }
      hideGhost();
      await sleep(BUILDER_TUNING.pauseAfterBuild);
    };

    const flashTheme = async () => {
      if (destroyed) return;
      setPolished(true);
      setPhases(Object.fromEntries(BUILDER_BLOCKS.map((b) => [b.id, "styled"])));
      await sleep(BUILDER_TUNING.pauseAfterStyled);
    };

    const runCycle = async () => {
      while (!destroyed) {
        await resetAll();
        if (destroyed) break;
        await revealAll();
        await flashTheme();
      }
    };

    void runCycle();

    return () => {
      destroyed = true;
    };
  }, [ghostX, ghostY]);

  return (
    <div
      ref={rootRef}
      className="page-builder mx-auto w-full max-w-[520px] transform-gpu"
      data-polish={polished ? "true" : "false"}
      aria-hidden="true"
    >
      <div
        ref={stageRef}
        className="page-builder__stage relative grid"
        style={{
          minHeight: BUILDER_STAGE_MIN_HEIGHT,
          gap: BUILDER_GAP,
        }}
      >
        <motion.span
          className="page-builder__ghost pointer-events-none absolute top-0 left-0 z-[6] h-3 w-3 rounded-sm bg-neon shadow-[0_0_14px_rgba(184,255,60,0.5)]"
          style={{ x: ghostX, y: ghostY, opacity: ghostVisible ? 0.85 : 0 }}
        />

        <BuilderBlock id="nav" phase={phases.nav} polished={polished}>
          <div className="flex h-full items-center gap-2 px-3">
            <i className="block h-2.5 flex-1 rounded-full bg-white/12" />
            <i className="block h-2.5 w-[18%] rounded-full bg-white/12" />
            <i className="block h-2.5 w-[12%] rounded-full bg-white/12" />
          </div>
        </BuilderBlock>

        <BuilderBlock id="hero" phase={phases.hero} polished={polished}>
          <div className="grid gap-2.5 p-4">
            <span className="block h-5 w-[72%] rounded-full bg-white/10" />
            <div className="grid grid-cols-[1fr_0.85fr] gap-2">
              <span className="block h-3 rounded-full bg-white/7" />
              <span className="block h-3 w-[88%] rounded-full bg-white/7" />
            </div>
            <span className="block h-4 w-[38%] rounded-full bg-white/8" />
          </div>
        </BuilderBlock>

        <BuilderBlock id="columns" phase={phases.columns} polished={polished}>
          <div className="grid h-full grid-cols-3 gap-2 p-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`grid gap-2 rounded-md bg-white/5 p-2.5 ${i === 1 ? "pb-columns__item--tall" : ""}`}
              >
                <b className="block h-3 w-[70%] rounded-full bg-white/10" />
                <i className="block h-2 rounded-full bg-white/7" />
                {i === 1 && <i className="block h-2 w-[82%] rounded-full bg-white/7" />}
              </div>
            ))}
          </div>
        </BuilderBlock>

        <BuilderBlock id="cards" phase={phases.cards} polished={polished}>
          <div className="flex h-full items-end gap-2 p-3">
            <i className="block h-full w-1/3 rounded-md bg-white/8" />
            <i className="block h-[88%] w-1/3 rounded-md bg-white/8" />
            <i className="block h-[76%] w-1/3 rounded-md bg-white/8" />
          </div>
        </BuilderBlock>

        <BuilderBlock id="cta" phase={phases.cta} polished={polished} narrow>
          <div className="h-full rounded-full bg-white/8" />
        </BuilderBlock>
      </div>
    </div>
  );
}

function BuilderBlock({
  id,
  phase,
  polished,
  narrow,
  children,
}: {
  id: string;
  phase: BlockPhase;
  polished: boolean;
  narrow?: boolean;
  children: React.ReactNode;
}) {
  const cfg = BUILDER_BLOCKS.find((b) => b.id === id);
  if (!cfg) return null;

  const size =
    phase === "styled" ? cfg.styled : phase === "wire" ? cfg.wire : { height: 0 };

  const width =
    narrow && size.width !== undefined ? `${size.width}%` : "100%";

  return (
    <motion.div
      data-bb-block={id}
      className={`pb pb-${id} overflow-hidden rounded-lg border border-dashed border-white/14 bg-white/[0.04] box-border transition-[background,border-color,box-shadow] duration-500 ${
        phase === "styled" ? "is-styled border-transparent shadow-[0_10px_28px_rgba(0,0,0,0.24)]" : ""
      } ${polished && phase === "styled" ? "is-polish" : ""}`}
      initial={false}
      animate={{
        height: size.height,
        width,
        opacity: phase === "hidden" ? 0 : 1,
      }}
      transition={{ duration: BUILDER_TUNING.revealDuration, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

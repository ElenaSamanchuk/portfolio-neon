"use client";

import { motion } from "framer-motion";
import { CaseDemo, getCaseDemoDomain } from "@/components/case-demos";

type CaseVisualProps = {
  id: string;
  accent: string;
  visualTag?: string;
  title: string;
  niches: string[];
};

export function CaseVisual({
  id,
  accent,
  visualTag,
  title,
  niches,
}: CaseVisualProps) {
  const tag = visualTag ?? title.split(/[·|]/)[0].trim();
  const domain = getCaseDemoDomain(id);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute -inset-[20%] opacity-45"
        style={{
          background: `radial-gradient(circle at 28% 22%, ${accent}55, transparent 58%)`,
        }}
        aria-hidden
      />
      <div
        className="absolute -inset-[12%] opacity-30"
        style={{
          background: `radial-gradient(circle at 72% 58%, ${accent}33, transparent 52%)`,
        }}
        aria-hidden
      />

      <div className="case-visual-grid absolute inset-0 opacity-[0.11]" aria-hidden />

      <p
        className="pointer-events-none absolute -left-[2%] top-[4%] select-none font-display text-[clamp(3rem,14vw,8rem)] font-black uppercase leading-none tracking-tighter opacity-[0.07]"
        style={{ color: accent }}
        aria-hidden
      >
        {tag}
      </p>

      <div
        className="case-visual-orbit pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed opacity-20"
        style={{
          width: "min(88%, 520px)",
          height: "min(88%, 520px)",
          borderColor: accent,
        }}
        aria-hidden
      />

      <div className="absolute inset-x-2 top-2 bottom-[30%] flex items-center justify-center sm:inset-x-4 sm:top-3 lg:inset-x-6">
        <motion.div
          className="relative w-full max-w-[min(100%,680px)]"
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="absolute -inset-px rounded-2xl opacity-55 blur-md"
            style={{
              background: `linear-gradient(135deg, ${accent}, transparent 60%)`,
            }}
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0a0a0f] shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
              <span className="flex gap-1.5" aria-hidden>
                <i className="block h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
                <i className="block h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
                <i className="block h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
              </span>
              <div className="mx-auto flex h-5 flex-1 max-w-[62%] items-center rounded-md bg-white/5 px-3">
                <span className="truncate font-mono text-[9px] text-muted-foreground">
                  {domain}
                </span>
              </div>
            </div>

            <CaseDemo id={id} accent={accent} />
          </div>

          {niches.slice(0, 2).map((niche, i) => (
            <span
              key={niche}
              className="absolute rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider backdrop-blur-sm"
              style={{
                borderColor: `${accent}45`,
                color: accent,
                background: `${accent}18`,
                top: i === 0 ? "-8px" : undefined,
                bottom: i === 1 ? "-8px" : undefined,
                right: i === 0 ? "-4px" : undefined,
                left: i === 1 ? "-4px" : undefined,
              }}
            >
              {niche}
            </span>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-[#050508] via-[#050508]/82 to-transparent"
        aria-hidden
      />
    </div>
  );
}

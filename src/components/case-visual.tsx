"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/utils";

type CaseVisualProps = {
  id: string;
  title: string;
  previewImage: string;
  accent: string;
  visualTag?: string;
  niches: string[];
  poster?: boolean;
};

function SmartLogicPoster({ accent }: { accent: string }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden bg-[#0c0a08] p-3"
      style={{
        backgroundImage: `linear-gradient(160deg, ${accent}18 0%, transparent 45%), radial-gradient(circle at 80% 20%, ${accent}22, transparent 40%)`,
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="font-mono text-[8px] uppercase tracking-[0.2em]"
          style={{ color: accent }}
        >
          smlogik.ru
        </span>
        <span
          className="rounded-full border px-2 py-0.5 font-mono text-[7px] uppercase tracking-wider"
          style={{ borderColor: `${accent}50`, color: accent }}
        >
          CRO
        </span>
      </div>
      <div className="mt-2 grid grid-cols-[1fr_0.9fr] gap-2">
        <div className="space-y-1.5">
          <div
            className="h-2.5 w-[78%] rounded-full"
            style={{ background: `${accent}35` }}
          />
          <div className="h-2 w-full rounded-full bg-white/10" />
          <div className="h-2 w-[88%] rounded-full bg-white/7" />
          <div
            className="mt-2 h-5 w-[42%] rounded-full"
            style={{ background: `${accent}40` }}
          />
        </div>
        <div className="grid grid-cols-2 gap-1">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded border border-white/10 bg-white/5 p-1"
              style={{ borderColor: i === 0 ? `${accent}35` : undefined }}
            >
              <div
                className="aspect-square rounded-sm"
                style={{
                  background: `linear-gradient(135deg, ${accent}${i === 0 ? "40" : "18"}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full"
            style={{ background: i === 1 ? accent : "rgba(255,255,255,0.08)" }}
          />
        ))}
      </div>
    </div>
  );
}

function AdminMosaic({ accent }: { accent: string }) {
  const tiles = [
    { label: "CRM", hue: accent },
    { label: "BOT", hue: "#3cc8ff" },
    { label: "TASK", hue: "#ff3c6e" },
    { label: "CMS", hue: "#b8ff3c" },
  ];

  return (
    <div className="relative aspect-[16/10] grid grid-cols-2 grid-rows-2 gap-1.5 bg-[#050508] p-2">
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.03]"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${tile.hue}44, transparent 70%)`,
            }}
          />
          <div className="relative flex h-full flex-col justify-between p-2">
            <span
              className="font-mono text-[7px] uppercase tracking-wider"
              style={{ color: tile.hue }}
            >
              {tile.label}
            </span>
            <div className="space-y-1">
              <div className="h-1 w-[70%] rounded-full bg-white/15" />
              <div className="h-1 w-[50%] rounded-full bg-white/8" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CaseVisual({
  id,
  title,
  previewImage,
  accent,
  visualTag,
  niches,
  poster,
}: CaseVisualProps) {
  const tag = visualTag ?? title.split(/[·|]/)[0].trim();
  const usePoster = poster ?? id === "smartlogic";
  const useMosaic = id === "admin-platforms";

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
        className="pointer-events-none absolute -left-[3%] top-[6%] select-none font-display text-[clamp(2.5rem,11vw,6.5rem)] font-black uppercase leading-none tracking-tighter opacity-[0.08]"
        style={{ color: accent }}
        aria-hidden
      >
        {tag}
      </p>

      <div
        className="case-visual-orbit pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed opacity-25"
        style={{
          width: "min(72%, 300px)",
          height: "min(72%, 300px)",
          borderColor: accent,
        }}
        aria-hidden
      />

      <div className="absolute inset-x-3 top-3 bottom-[42%] flex items-center justify-center sm:inset-x-5 sm:top-5">
        <motion.div
          className="relative w-full max-w-[min(100%,400px)]"
          animate={{ y: [-3, 3, -3] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="absolute -inset-px rounded-xl opacity-50 blur-sm"
            style={{
              background: `linear-gradient(135deg, ${accent}, transparent 65%)`,
            }}
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#0a0a0f] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-2 border-b border-white/10 px-3 py-1.5">
              <span className="flex gap-1" aria-hidden>
                <i className="block h-2 w-2 rounded-full bg-[#ff5f57]/80" />
                <i className="block h-2 w-2 rounded-full bg-[#febc2e]/80" />
                <i className="block h-2 w-2 rounded-full bg-[#28c840]/80" />
              </span>
              <div className="mx-auto flex h-4 flex-1 max-w-[58%] items-center rounded-md bg-white/5 px-2">
                <span className="truncate font-mono text-[7px] text-muted-foreground">
                  {id.replace(/-/g, ".")}.live
                </span>
              </div>
            </div>

            {useMosaic ? (
              <AdminMosaic accent={accent} />
            ) : usePoster ? (
              <SmartLogicPoster accent={accent} />
            ) : (
              <div className="relative aspect-[16/10] bg-[#050508]">
                <Image
                  src={assetPath(previewImage)}
                  alt={title}
                  fill
                  className="object-contain object-top p-1.5"
                  sizes="400px"
                />
                <div
                  className="case-visual-scanlines pointer-events-none absolute inset-0 opacity-[0.12]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    background: `linear-gradient(to bottom, transparent 55%, ${accent}28)`,
                  }}
                  aria-hidden
                />
              </div>
            )}
          </div>

          {niches.slice(0, 2).map((niche, i) => (
            <span
              key={niche}
              className="absolute rounded-full border px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider backdrop-blur-sm"
              style={{
                borderColor: `${accent}45`,
                color: accent,
                background: `${accent}18`,
                top: i === 0 ? "-6px" : undefined,
                bottom: i === 1 ? "-6px" : undefined,
                right: i === 0 ? "-2px" : undefined,
                left: i === 1 ? "-2px" : undefined,
              }}
            >
              {niche}
            </span>
          ))}
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-[#050508] via-[#050508]/78 to-transparent"
        aria-hidden
      />
    </div>
  );
}

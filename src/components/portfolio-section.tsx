"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  portfolioGroups,
  portfolioItems,
  getPortfolioGroupForItem,
  type PortfolioItem,
} from "@/lib/content";
import { CaseVisual } from "@/components/case-visual";

const DEFAULT_ITEM_ID = portfolioGroups[0]?.itemIds[0] ?? portfolioItems[0]?.id;

export function PortfolioSection() {
  const [activeId, setActiveId] = useState(DEFAULT_ITEM_ID);
  const item = portfolioItems.find((entry) => entry.id === activeId) ?? portfolioItems[0];
  const activeGroup = getPortfolioGroupForItem(item.id);

  return (
    <section id="cases" className="py-24 sm:py-32 defer-paint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl lg:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
            Портфолио
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Избранные проекты
          </h2>
          <p className="mt-4 text-muted-foreground">
            Сгруппировано для работодателя: клиенты в проде → механики → дизайн в прод →
            full-stack. Каждая карточка — с живыми ссылками.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          <nav
            className="flex flex-col gap-6 overflow-x-auto pb-2 lg:overflow-visible lg:pb-0"
            aria-label="Кейсы и демо"
          >
            {portfolioGroups.map((group) => (
              <div key={group.id} className="shrink-0">
                <div
                  className="mb-2 border-l-2 pl-3"
                  style={{ borderColor: group.accent }}
                >
                  <p
                    className="font-mono text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: group.accent }}
                  >
                    {group.label}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">
                    {group.hook}
                  </p>
                </div>

                <div className="flex flex-row gap-2 lg:flex-col">
                  {group.itemIds.map((id) => {
                    const entry = portfolioItems.find((p) => p.id === id);
                    if (!entry) return null;
                    const isActive = entry.id === activeId;

                    return (
                      <PortfolioNavButton
                        key={entry.id}
                        entry={entry}
                        isActive={isActive}
                        groupAccent={group.accent}
                        onSelect={() => setActiveId(entry.id)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>

          <div className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/8 bg-surface-elevated sm:min-h-[560px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <CaseVisual
                  id={item.id}
                  title={item.title}
                  accent={item.visualAccent}
                  visualTag={item.visualTag}
                  niches={item.niches}
                />

                <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-5 pt-16 sm:px-5 sm:pb-6 sm:pt-20">
                  {activeGroup && (
                    <p
                      className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em]"
                      style={{ color: activeGroup.accent }}
                    >
                      {activeGroup.label}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {item.badges?.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-full border border-neon/30 bg-black/40 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-neon backdrop-blur-sm"
                      >
                        {badge}
                      </span>
                    ))}
                    {item.niches.slice(0, 2).map((niche) => (
                      <span
                        key={niche}
                        className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm"
                      >
                        {niche}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-2 font-display text-xl font-bold leading-tight sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-snug text-muted-foreground line-clamp-2">
                    {item.proof}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {item.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-black/35 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive inline-flex min-h-11 w-full items-center justify-center rounded-full border border-white/20 bg-black/55 px-3 py-2.5 text-sm font-semibold leading-tight backdrop-blur-sm transition-[color,background,border-color,transform] hover:border-neon/50 hover:bg-neon/15 hover:text-neon active:scale-[0.98] sm:w-auto sm:justify-start sm:px-5 sm:py-3 sm:text-[15px]"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neon/5 via-transparent to-accent-hot/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioNavButton({
  entry,
  isActive,
  groupAccent,
  onSelect,
}: {
  entry: PortfolioItem;
  isActive: boolean;
  groupAccent: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`interactive shrink-0 rounded-2xl border px-4 py-3 text-left transition-all lg:w-full lg:px-4 lg:py-3 ${
        isActive
          ? "border-neon/50 bg-neon/5 shadow-[0_0_24px_rgba(184,255,60,0.08)]"
          : "border-white/8 bg-surface hover:border-white/15"
      }`}
      style={
        isActive
          ? { borderColor: `${groupAccent}55`, boxShadow: `0 0 28px ${groupAccent}12` }
          : undefined
      }
    >
      <p
        className="font-mono text-[10px] uppercase tracking-wider"
        style={{ color: isActive ? groupAccent : undefined }}
      >
        {entry.kind === "showcase" ? "демо" : "кейс"}
      </p>
      <p className="mt-1.5 font-display text-sm font-semibold leading-snug sm:text-[15px]">
        {entry.title}
      </p>
    </button>
  );
}

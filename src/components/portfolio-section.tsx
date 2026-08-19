"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "@/lib/content";
import { CaseVisual } from "@/components/case-visual";

export function PortfolioSection() {
  const [active, setActive] = useState(0);
  const item = portfolioItems[active];

  return (
    <section id="cases" className="py-24 sm:py-32 defer-paint">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
            Портфолио
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Избранные проекты
          </h2>
          <p className="mt-4 text-muted-foreground">
            Каждый кейс — с живым URL. Сверху — интерактивные примеры «под ключ».
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {portfolioItems.map((entry, index) => (
              <button
                key={entry.id}
                type="button"
                onClick={() => setActive(index)}
                className={`interactive shrink-0 rounded-2xl border px-4 py-3 text-left transition-all lg:px-5 lg:py-3.5 ${
                  active === index
                    ? "border-neon/50 bg-neon/5"
                    : "border-white/8 bg-surface hover:border-white/15"
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-neon">
                  {entry.kind === "showcase" ? "демо" : "кейс"}
                </p>
                <p className="mt-1.5 font-display text-sm font-semibold leading-snug sm:text-base">
                  {entry.title}
                </p>
              </button>
            ))}
          </div>

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

                <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-4 pt-16 sm:px-5 sm:pb-5 sm:pt-20">
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
                    {item.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-black/35 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-muted-foreground backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium backdrop-blur-sm transition-colors hover:border-neon/40 hover:bg-neon/10 hover:text-neon"
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

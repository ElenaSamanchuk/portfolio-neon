"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { PageBuilder } from "@/components/page-builder";
import { contacts, marqueeItems, site, stack } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[110vh] flex-col justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />
      <div className="scanlines pointer-events-none absolute inset-0" />

      <motion.div
        style={{ y: yBg }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden will-change-transform"
      >
        <p className="font-display text-[22vw] font-black leading-none tracking-tighter text-white/[0.03] select-none">
          WEB
        </p>
      </motion.div>

      <div className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-neon/10 blur-3xl transform-gpu" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-hot/10 blur-3xl transform-gpu" />

      <motion.div
        style={{ opacity, scale }}
        className="relative flex flex-1 flex-col justify-center will-change-transform"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-neon sm:text-sm">
              {site.name} · {site.tagline}
            </p>

            <motion.div style={{ y: yText }} className="will-change-transform">
              <h1 className="max-w-3xl font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-tight text-foreground">
                {site.headline}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
                {site.subhead}
              </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#cases"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "interactive h-14 rounded-full bg-neon px-8 text-base font-bold text-primary-foreground hover:bg-neon/90 glow-neon",
                )}
              >
                Смотреть кейсы
              </a>
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "interactive h-14 rounded-full border-white/15 bg-white/5 px-8 text-base font-medium backdrop-blur-sm hover:bg-white/10",
                )}
              >
                Написать в Telegram
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {stack.slice(0, 6).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative w-full lg:min-w-[520px] lg:max-w-[520px]">
            <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground lg:text-left">
              Сборка структуры страницы
            </p>
            <PageBuilder />
          </div>
        </div>
      </motion.div>

      <div className="relative mt-16 overflow-hidden border-y border-white/8 bg-surface py-4">
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-8 font-display text-2xl font-bold uppercase tracking-wider text-white/20 sm:text-4xl"
            >
              {item}
              <span className="mx-8 text-neon">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

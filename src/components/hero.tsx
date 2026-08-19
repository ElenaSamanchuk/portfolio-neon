"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { contacts, marqueeItems, portfolioItems, site, stack } from "@/lib/content";
import { assetPath, cn } from "@/lib/utils";

const featuredPreviews = portfolioItems
  .filter((item) => item.kind === "showcase")
  .slice(0, 4);

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [previewIndex, setPreviewIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPreviewIndex((i) => (i + 1) % featuredPreviews.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const activePreview = featuredPreviews[previewIndex];

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
              {stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <PreviewOrb item={activePreview} />
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

function PreviewOrb({ item }: { item: typeof featuredPreviews[number] }) {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-neon/20" />
      <div className="absolute inset-4 animate-spin-reverse rounded-full border border-white/10" />
      <motion.div
        key={item.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="animate-float relative h-56 w-56 overflow-hidden rounded-2xl border border-white/20 bg-background/50 shadow-[0_0_60px_rgba(184,255,60,0.15)] sm:h-72 sm:w-72"
      >
        <Image
          src={assetPath(item.previewImage)}
          alt={item.title}
          fill
          className="object-cover object-top"
          sizes="288px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
        <div className="absolute inset-0 rounded-2xl ring-2 ring-inset ring-neon/20" />
      </motion.div>
      <div className="absolute -bottom-2 left-1/2 max-w-[90%] -translate-x-1/2 truncate whitespace-nowrap rounded-full border border-neon/30 bg-background/90 px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-neon backdrop-blur-sm">
        {item.title}
      </div>
    </div>
  );
}

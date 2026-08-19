"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { contacts, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32 defer-paint">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neon/5 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-3xl transform-gpu" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ scale: 0.98 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-surface-elevated p-10 sm:p-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
            Связаться
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Telegram или email
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Продукт, задача и дата — в ответ формат и старт. {site.status} · удалённо.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "interactive h-14 rounded-full bg-neon px-10 text-base font-bold text-primary-foreground hover:bg-neon/90 glow-neon",
              )}
            >
              Написать в Telegram
            </a>
            <a
              href={contacts.email}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "interactive h-14 rounded-full border-white/15 px-10 text-base",
              )}
            >
              Написать на email
            </a>
          </div>
          <a
            href={contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive mt-6 inline-block text-sm text-muted-foreground underline-offset-4 hover:text-neon hover:underline"
          >
            GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { collaborationFormats } from "@/lib/content";

export function CollaborationSection() {
  return (
    <section id="collaboration" className="relative overflow-hidden py-24 sm:py-32 defer-paint">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neon/[0.02] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 24 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
            Сотрудничество
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">
            Спринт, ретейнер или роль в команде
          </h2>
          <p className="mt-4 text-muted-foreground">
            Срочность × длительность — куда попадает запрос. В первом сообщении:
            ниша, тип страницы и дедлайн.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {collaborationFormats.map((format, index) => (
            <motion.article
              key={format.id}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="interactive group rounded-3xl border border-white/8 bg-surface-elevated p-6 transition-colors hover:border-neon/30 sm:p-8"
            >
              <span className="rounded-full border border-neon/30 bg-neon/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-neon">
                {format.badge}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold sm:text-2xl">
                {format.title}
              </h3>
              <p className="mt-3 text-muted-foreground">{format.summary}</p>
              <ul className="mt-6 space-y-2">
                {format.hints.map((hint) => (
                  <li
                    key={hint}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-neon" />
                    {hint}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

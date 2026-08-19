"use client";

import { site, metrics } from "@/lib/content";

export function StatusBanner() {
  return (
    <div className="border-b border-white/8 bg-neon/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-neon sm:text-xs">
          <span className="text-foreground/90">● {site.status}</span>
          <span className="mx-2 text-white/20">·</span>
          <span className="text-muted-foreground">{site.statusNote}</span>
        </p>
        <div className="hidden items-center gap-4 sm:flex">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-sm font-bold tabular-nums text-foreground">
                {m.value}
              </p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                {m.label.split(" ")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

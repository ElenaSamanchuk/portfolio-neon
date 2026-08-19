"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navLinks, site, contacts } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-background/85 supports-[backdrop-filter]:backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="interactive min-w-0 font-display text-lg font-bold tracking-tight sm:text-xl"
        >
          {site.shortName}
          <span className="text-neon">.</span>
          <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:text-[11px]">
            {site.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="interactive text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={contacts.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants(),
            "interactive rounded-full bg-neon px-5 font-semibold text-primary-foreground hover:bg-neon/90 glow-neon",
          )}
        >
          Telegram
        </a>
      </div>
    </header>
  );
}

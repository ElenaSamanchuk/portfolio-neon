import { contacts, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 py-12 defer-paint">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="font-display text-lg font-bold">
            {site.name}
            <span className="text-neon">.</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          © {year} ·{" "}
          <a
            href={contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive hover:text-neon"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

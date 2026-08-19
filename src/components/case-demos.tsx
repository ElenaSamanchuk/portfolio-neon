type DemoProps = { accent: string };

const DEMO_DOMAINS: Record<string, string> = {
  "yandex-pet-day": "petday.yandex",
  knowembed: "knowembed.app",
  smartlogic: "smlogik.ru",
  growfood: "growfood.pro",
  priem: "priem.menu",
  "web-apps": "pwa.github.io",
  "admin-platforms": "admin.suite",
  "zero-awakening": "zero.awakening",
  "digital-landing-lab": "landing.lab",
  fitness: "coach.fit",
  nasha: "nashashop.ru",
  education: "ed.school",
};

export function getCaseDemoDomain(id: string): string {
  return DEMO_DOMAINS[id] ?? `${id.replace(/-/g, ".")}.live`;
}

function YandexPetDayDemo({ accent }: DemoProps) {
  return (
    <div
      className="relative aspect-[5/3] overflow-hidden p-4"
      style={{
        background: `linear-gradient(145deg, ${accent}22 0%, #0a0a12 42%, #050508 100%)`,
      }}
    >
      <div className="flex items-center justify-between">
        <div className="h-2 w-16 rounded-full bg-white/15" />
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full"
              style={{ background: i === 1 ? accent : "rgba(255,255,255,0.12)" }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 grid grid-cols-[1fr_0.55fr] gap-3">
        <div>
          <div
            className="h-4 w-[82%] rounded-full"
            style={{ background: `${accent}55` }}
          />
          <div className="mt-2 h-2.5 w-full rounded-full bg-white/10" />
          <div className="mt-1.5 h-2.5 w-[70%] rounded-full bg-white/7" />
          <div
            className="mt-4 h-7 w-[48%] rounded-full"
            style={{ background: accent }}
          />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex aspect-square items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[10px]"
              style={{ color: accent, borderColor: i === 0 ? `${accent}40` : undefined }}
            >
              {i === 0 ? "🐾" : "·"}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {["10:00", "14:30", "18:00"].map((t, i) => (
          <div
            key={t}
            className="flex-1 rounded-lg border border-white/10 p-2"
            style={{ borderColor: i === 1 ? `${accent}45` : undefined }}
          >
            <span className="font-mono text-[8px] text-white/50">{t}</span>
            <div className="mt-1 h-1.5 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

function KnowEmbedDemo({ accent }: DemoProps) {
  return (
    <div className="relative aspect-[5/3] grid grid-cols-[1.1fr_0.9fr] gap-2 bg-[#07070f] p-3">
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
        <span className="font-mono text-[8px] uppercase tracking-wider text-white/40">
          docs → bot
        </span>
        <div className="mt-2 space-y-2">
          {[72, 88, 56].map((w) => (
            <div
              key={w}
              className="h-2 rounded-full bg-white/8"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
        <div
          className="mt-3 rounded-md border border-dashed p-2"
          style={{ borderColor: `${accent}35` }}
        >
          <div className="h-8 rounded bg-white/5" />
        </div>
      </div>
      <div className="relative flex items-end justify-center">
        <div
          className="w-full rounded-xl border p-2 shadow-lg"
          style={{
            borderColor: `${accent}50`,
            background: `linear-gradient(160deg, ${accent}28, #0c0c14)`,
            boxShadow: `0 8px 32px ${accent}25`,
          }}
        >
          <div className="flex items-center gap-2">
            <div
              className="h-5 w-5 rounded-full"
              style={{ background: accent }}
            />
            <span className="font-mono text-[7px] text-white/60">AI widget</span>
          </div>
          <div className="mt-2 space-y-1.5">
            <div className="rounded-lg bg-black/30 p-1.5 text-[7px] text-white/50">
              Как подключить embed?
            </div>
            <div
              className="rounded-lg p-1.5 text-[7px]"
              style={{ background: `${accent}30`, color: accent }}
            >
              Скопируйте script…
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SmartLogicDemo({ accent }: DemoProps) {
  return (
    <div
      className="relative aspect-[5/3] overflow-hidden p-4"
      style={{
        backgroundImage: `linear-gradient(160deg, ${accent}18 0%, transparent 45%), radial-gradient(circle at 80% 20%, ${accent}22, transparent 40%)`,
        backgroundColor: "#0c0a08",
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="font-mono text-[9px] uppercase tracking-[0.2em]"
          style={{ color: accent }}
        >
          smlogik.ru
        </span>
        <span
          className="rounded-full border px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-wider"
          style={{ borderColor: `${accent}50`, color: accent }}
        >
          CRO
        </span>
      </div>
      <div className="mt-3 grid grid-cols-[1fr_0.95fr] gap-3">
        <div className="space-y-2">
          <div className="h-3 w-[78%] rounded-full" style={{ background: `${accent}35` }} />
          <div className="h-2.5 w-full rounded-full bg-white/10" />
          <div className="h-2.5 w-[88%] rounded-full bg-white/7" />
          <div className="mt-3 h-6 w-[42%] rounded-full" style={{ background: `${accent}40` }} />
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-white/5 p-1.5"
              style={{ borderColor: i === 0 ? `${accent}35` : undefined }}
            >
              <div
                className="aspect-square rounded-md"
                style={{
                  background: `linear-gradient(135deg, ${accent}${i === 0 ? "40" : "18"}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex gap-1.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="h-1.5 flex-1 rounded-full"
            style={{ background: i === 1 ? accent : "rgba(255,255,255,0.08)" }}
          />
        ))}
      </div>
    </div>
  );
}

function GrowfoodDemo({ accent }: DemoProps) {
  return (
    <div className="relative aspect-[5/3] grid grid-cols-2 gap-3 bg-[#050508] p-4">
      <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <div
          className="relative h-20 w-20 rounded-full border-4 border-dashed"
          style={{ borderColor: `${accent}60` }}
        >
          <div
            className="absolute inset-2 rounded-full"
            style={{ background: `conic-gradient(${accent} 0deg 90deg, rgba(255,255,255,0.08) 90deg)` }}
          />
          <span
            className="absolute inset-0 flex items-center justify-center font-mono text-[9px] uppercase"
            style={{ color: accent }}
          >
            spin
          </span>
        </div>
        <span className="mt-2 font-mono text-[8px] text-white/40">колесо</span>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
        <span className="font-mono text-[8px] uppercase text-white/40">ИМТ</span>
        <div className="mt-2 space-y-2">
          {["вес", "рост"].map((label) => (
            <div key={label}>
              <span className="font-mono text-[7px] text-white/35">{label}</span>
              <div className="mt-1 h-2 rounded-full bg-white/10">
                <div
                  className="h-full w-[65%] rounded-full"
                  style={{ background: accent }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-3 rounded-lg py-2 text-center font-mono text-[9px] uppercase"
          style={{ background: `${accent}25`, color: accent }}
        >
          результат
        </div>
      </div>
    </div>
  );
}

function PriemDemo({ accent }: DemoProps) {
  return (
    <div className="relative aspect-[5/3] bg-[#0a0610] p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[8px] uppercase tracking-wider text-white/40">
          сезон · т-банк
        </span>
        <div
          className="rounded-full border px-2 py-0.5 font-mono text-[9px] tabular-nums"
          style={{ borderColor: `${accent}50`, color: accent }}
        >
          00:14:32
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-lg border border-white/10 p-2"
            style={{
              transform: `rotate(${i === 1 ? 0 : i === 0 ? -4 : 4}deg)`,
              borderColor: i === 1 ? `${accent}45` : undefined,
              background: i === 1 ? `${accent}12` : "rgba(255,255,255,0.03)",
            }}
          >
            <div className="h-2 w-[70%] rounded-full bg-white/12" />
            <div className="mt-2 h-8 rounded-md bg-white/5" />
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <div
          className="flex-1 rounded-full py-2 text-center font-mono text-[8px] uppercase"
          style={{ background: accent, color: "#050508" }}
        >
          квиз
        </div>
        <div className="flex-1 rounded-full border border-white/15 py-2 text-center font-mono text-[8px] text-white/50">
          партнёрка
        </div>
      </div>
    </div>
  );
}

function WebAppsDemo({ accent }: DemoProps) {
  return (
    <div className="relative aspect-[5/3] flex items-center justify-center gap-4 bg-[#040810] p-4">
      <div
        className="relative w-[38%] rounded-[1.25rem] border-2 border-white/15 bg-[#0a0f18] p-2 shadow-xl"
        style={{ boxShadow: `0 12px 40px ${accent}20` }}
      >
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/20" />
        <div
          className="rounded-xl p-3"
          style={{ background: `linear-gradient(180deg, ${accent}30, transparent)` }}
        >
          <div className="h-2 w-[60%] rounded-full bg-white/15" />
          <div className="mt-3 h-16 rounded-lg bg-white/5" />
          <div className="mt-2 flex gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-6 flex-1 rounded-md bg-white/8" />
            ))}
          </div>
        </div>
        <span
          className="mt-2 block text-center font-mono text-[7px] uppercase"
          style={{ color: accent }}
        >
          PWA
        </span>
      </div>
      <div className="w-[32%] rounded-xl border border-white/10 bg-white/[0.04] p-2">
        <div
          className="aspect-video rounded-lg"
          style={{ background: `linear-gradient(135deg, #ff3c6e40, ${accent}30)` }}
        />
        <span className="mt-1.5 block font-mono text-[7px] text-white/40">game · apk</span>
      </div>
    </div>
  );
}

function AdminPlatformsDemo({ accent }: DemoProps) {
  const tiles = [
    { label: "CRM", hue: accent },
    { label: "BOT", hue: "#3cc8ff" },
    { label: "TASK", hue: "#ff3c6e" },
    { label: "CMS", hue: "#b8ff3c" },
  ];

  return (
    <div className="relative aspect-[5/3] grid grid-cols-[0.32fr_1fr] gap-2 bg-[#050508] p-3">
      <div className="flex flex-col gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-2">
        {["dash", "users", "bots", "tasks"].map((item, i) => (
          <div
            key={item}
            className="rounded-md px-2 py-1 font-mono text-[7px] uppercase"
            style={{
              background: i === 0 ? `${accent}25` : "transparent",
              color: i === 0 ? accent : "rgba(255,255,255,0.35)",
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
        {tiles.map((tile) => (
          <div
            key={tile.label}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]"
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${tile.hue}44, transparent 70%)`,
              }}
            />
            <div className="relative flex h-full flex-col justify-between p-2.5">
              <span
                className="font-mono text-[8px] uppercase tracking-wider"
                style={{ color: tile.hue }}
              >
                {tile.label}
              </span>
              <div className="space-y-1.5">
                <div className="h-1.5 w-[70%] rounded-full bg-white/15" />
                <div className="h-1.5 w-[50%] rounded-full bg-white/8" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FitnessDemo({ accent }: DemoProps) {
  const links = ["taplink", "итоги", "тарифы", "заявка"];
  return (
    <div className="relative aspect-[5/3] flex gap-4 bg-[#0c0808] p-4">
      <div className="flex flex-col items-center">
        <div
          className="h-16 w-16 rounded-full border-2"
          style={{ borderColor: `${accent}60`, background: `${accent}18` }}
        />
        <span className="mt-2 font-mono text-[7px] text-white/40">coach</span>
      </div>
      <div className="flex-1 space-y-2">
        {links.map((label, i) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl border border-white/10 px-3 py-2.5"
            style={{
              borderColor: i === 0 ? `${accent}45` : undefined,
              background: i === 0 ? `${accent}10` : "rgba(255,255,255,0.03)",
            }}
          >
            <span className="font-mono text-[9px] uppercase text-white/70">{label}</span>
            <span style={{ color: accent }}>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NashaDemo({ accent }: DemoProps) {
  return (
    <div className="relative aspect-[5/3] bg-[#0a0908] p-3">
      <div className="flex gap-2 mb-2">
        {["все", "новинки", "sale"].map((f, i) => (
          <span
            key={f}
            className="rounded-full px-2 py-0.5 font-mono text-[7px] uppercase"
            style={{
              background: i === 0 ? `${accent}30` : "rgba(255,255,255,0.06)",
              color: i === 0 ? accent : "rgba(255,255,255,0.4)",
            }}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="rounded-lg border border-white/10 bg-white/[0.03] p-1.5">
            <div
              className="aspect-square rounded-md"
              style={{
                background: `linear-gradient(145deg, ${accent}${i < 2 ? "35" : "15"}, transparent)`,
              }}
            />
            <div className="mt-1.5 h-1 w-[80%] rounded-full bg-white/10" />
            <span
              className="mt-1 font-mono text-[7px]"
              style={{ color: i === 0 ? accent : "rgba(255,255,255,0.35)" }}
            >
              ₽ ···
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ZeroAwakeningDemo({ accent }: DemoProps) {
  return (
    <div
      className="relative aspect-[5/3] overflow-hidden bg-[#030306] p-4"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 40%, ${accent}22, transparent 55%)`,
      }}
    >
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[8px] uppercase tracking-[0.35em]"
          style={{ color: accent }}
        >
          zero //
        </span>
        <span
          className="font-mono text-[9px] tabular-nums"
          style={{ color: accent }}
        >
          00:07:42
        </span>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center">
        <p
          className="font-display text-[clamp(1.5rem,6vw,2.5rem)] font-black uppercase tracking-[0.2em]"
          style={{
            color: accent,
            textShadow: `0 0 32px ${accent}55`,
          }}
        >
          ZERO
        </p>
        <div className="mt-3 h-1 w-24 rounded-full" style={{ background: accent }} />
        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.3em] text-white/35">
          пробуждение
        </p>
      </div>
      <div className="absolute inset-x-4 bottom-4 flex gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full"
            style={{
              background: i % 2 === 0 ? `${accent}35` : "rgba(255,255,255,0.06)",
            }}
          />
        ))}
      </div>
      <div
        className="case-visual-scanlines pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
      />
    </div>
  );
}

function DigitalLandingLabDemo({ accent }: DemoProps) {
  return (
    <div className="relative aspect-[5/3] flex items-center justify-center gap-3 bg-[#08080c] p-4">
      <div className="flex h-[88%] w-[58%] flex-col rounded-lg border border-white/12 bg-white/[0.03] p-2">
        <div className="mb-2 flex gap-1">
          <div className="h-1.5 w-10 rounded-full bg-white/15" />
          <div className="h-1.5 flex-1 rounded-full bg-white/8" />
        </div>
        <div
          className="flex-1 rounded-md p-2"
          style={{ background: `linear-gradient(160deg, ${accent}28, transparent)` }}
        >
          <div className="h-3 w-[70%] rounded-full" style={{ background: `${accent}45` }} />
          <div className="mt-2 h-2 w-full rounded-full bg-white/10" />
          <div className="mt-1.5 h-2 w-[80%] rounded-full bg-white/7" />
          <div className="mt-3 grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-8 rounded bg-white/6" />
            ))}
          </div>
        </div>
        <span className="mt-1 text-center font-mono text-[7px] text-white/30">1440</span>
      </div>
      <div className="flex h-[72%] w-[28%] flex-col rounded-xl border-2 border-white/15 bg-[#0a0a0f] p-1.5">
        <div className="mx-auto mb-1 h-0.5 w-6 rounded-full bg-white/20" />
        <div
          className="flex-1 rounded-lg p-1.5"
          style={{ background: `linear-gradient(180deg, ${accent}22, transparent)` }}
        >
          <div className="h-2 w-[75%] rounded-full" style={{ background: `${accent}40` }} />
          <div className="mt-2 h-12 rounded-md bg-white/6" />
          <div className="mt-1.5 h-5 rounded-full" style={{ background: accent }} />
        </div>
        <span className="mt-1 text-center font-mono text-[7px] text-white/30">360</span>
      </div>
    </div>
  );
}

function EducationDemo({ accent }: DemoProps) {
  const sections = ["курс", "отзывы", "тариф", "faq"];
  return (
    <div className="relative aspect-[5/3] bg-[#08080f] p-4">
      <div className="flex gap-3">
        <div className="w-1 rounded-full" style={{ background: `${accent}50` }} />
        <div className="flex-1 space-y-3">
          {sections.map((s, i) => (
            <div key={s}>
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-[8px] uppercase"
                  style={{ color: i === 0 ? accent : "rgba(255,255,255,0.35)" }}
                >
                  {s}
                </span>
                <div className="h-px flex-1 bg-white/8" />
              </div>
              <div className="mt-1.5 space-y-1">
                <div className="h-2 w-full rounded-full bg-white/8" />
                <div className="h-2 w-[85%] rounded-full bg-white/5" />
                {i === 0 && <div className="h-2 w-[60%] rounded-full bg-white/5" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DEMO_IDS = [
  "yandex-pet-day",
  "knowembed",
  "smartlogic",
  "growfood",
  "priem",
  "web-apps",
  "admin-platforms",
  "zero-awakening",
  "digital-landing-lab",
  "fitness",
  "nasha",
  "education",
] as const;

type DemoId = (typeof DEMO_IDS)[number];

function isDemoId(id: string): id is DemoId {
  return (DEMO_IDS as readonly string[]).includes(id);
}

export function CaseDemo({ id, accent }: { id: string; accent: string }) {
  if (!isDemoId(id)) {
    return (
      <div
        className="aspect-[5/3] flex items-center justify-center bg-[#050508] font-mono text-xs text-white/30"
      >
        demo
      </div>
    );
  }

  switch (id) {
    case "yandex-pet-day":
      return <YandexPetDayDemo accent={accent} />;
    case "knowembed":
      return <KnowEmbedDemo accent={accent} />;
    case "smartlogic":
      return <SmartLogicDemo accent={accent} />;
    case "growfood":
      return <GrowfoodDemo accent={accent} />;
    case "priem":
      return <PriemDemo accent={accent} />;
    case "web-apps":
      return <WebAppsDemo accent={accent} />;
    case "admin-platforms":
      return <AdminPlatformsDemo accent={accent} />;
    case "zero-awakening":
      return <ZeroAwakeningDemo accent={accent} />;
    case "digital-landing-lab":
      return <DigitalLandingLabDemo accent={accent} />;
    case "fitness":
      return <FitnessDemo accent={accent} />;
    case "nasha":
      return <NashaDemo accent={accent} />;
    case "education":
      return <EducationDemo accent={accent} />;
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}

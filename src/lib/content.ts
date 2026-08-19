export const site = {
  shortName: "Елена",
  name: "Елена Саманчук",
  tagline: "разработка сайтов полного цикла",
  headline: "Продукт, лендинги и механики — от Figma до prod URL.",
  subhead:
    "Full-stack витрины, AI-интеграции и кампании с живыми ссылками. Полный цикл или этап — без разрыва между текстом, макетом и кодом.",
  status: "Открыта к проекту",
  statusNote: "Удалённо · спринт, ретейнер или роль в команде",
} as const;

export const contacts = {
  telegram: "https://t.me/ElaneDmitrievna",
  email: "mailto:elenasamanchuk@gmail.com",
  github: "https://github.com/ElenaSamanchuk",
} as const;

export const metrics = [
  { value: "100+", label: "страниц и механик в продакшене" },
  { value: "26", label: "живых ссылок в портфолио" },
  { value: "4", label: "зоны: клиенты · механики · дизайн · код" },
] as const;

export const stack = [
  "React · Next.js",
  "Figma",
  "Tilda · Zero Block",
  "HTML / CSS / JS",
  "Supabase",
  "Cursor",
  "SEO · QA",
  "GitHub Pages",
  "Метрика · GA4",
] as const;

export const capabilityChapters = [
  {
    id: "01",
    label: "Этап I",
    title: "Постановка",
    focus: "Маркетинг",
    text:
      "Цель кампании, оффер и KPI — в брифе и ТЗ до макета. Чтобы страница сразу отвечала на «зачем» и «для кого».",
    tags: ["KPI", "бриф", "ТЗ", "сроки"],
    accent: "#b8ff3c",
  },
  {
    id: "02",
    label: "Этап II",
    title: "Контент и интерфейс",
    focus: "Копирайт · дизайн",
    text:
      "Иерархия блоков и тексты ведут к действию. UI и прототип не перебивают оффер — усиливают его.",
    tags: ["CTA", "UX", "UI", "прототип"],
    accent: "#ff3c6e",
  },
  {
    id: "03",
    label: "Этап III",
    title: "Разработка",
    focus: "Код",
    text:
      "Макет в прод: Tilda, Zero Block или свой код. Формы, механики, API и боты — без разрыва с макетом.",
    tags: ["Tilda", "JS", "формы"],
    accent: "#6e3cff",
  },
  {
    id: "04",
    label: "Этап IV",
    title: "Релиз",
    focus: "QA · продвижение",
    text:
      "Запуск без сюрпризов в проде: проверки, SEO, аналитика и итерации по метрикам витрины.",
    tags: ["SEO", "QA", "аналитика"],
    accent: "#3cc8ff",
  },
] as const;

export type PortfolioLink = { label: string; href: string };

export type PortfolioItem = {
  id: string;
  title: string;
  kind: "showcase" | "case";
  proof: string;
  role: string;
  previewImage: string;
  visualAccent: string;
  visualTag?: string;
  badges?: string[];
  niches: string[];
  tech: string[];
  links: PortfolioLink[];
};

export type PortfolioGroup = {
  id: string;
  label: string;
  hook: string;
  accent: string;
  itemIds: string[];
};

const portfolioCatalog: Record<string, PortfolioItem> = {
  knowembed: {
    id: "knowembed",
    title: "KnowEmbed · AI SaaS",
    kind: "showcase",
    proof:
      "Full-stack MVP: docs → chatbot → embed-виджет, Stripe, Android APK — end-to-end без «демо на слайдах».",
    role: "Продукт, UI, Supabase, Edge Functions, RLS, деплой GitHub Pages + Vercel.",
    previewImage: "/previews/knowembed-mobile.png",
    visualAccent: "#6e3cff",
    visualTag: "AI",
    badges: ["full-stack", "B2B SaaS", "embed"],
    niches: ["AI", "SaaS"],
    tech: ["Supabase", "Stripe", "Edge Fn", "APK", "embed"],
    links: [
      { label: "Демо", href: "https://elenasamanchuk.github.io/knowembed/" },
      { label: "Embed", href: "https://elenasamanchuk.github.io/knowembed/embed-demo.html" },
      { label: "APK", href: "https://elenasamanchuk.github.io/knowembed/downloads/knowembed.apk" },
      { label: "GitHub", href: "https://github.com/ElenaSamanchuk/knowembed" },
    ],
  },
  "admin-platforms": {
    id: "admin-platforms",
    title: "CRM · боты · админки",
    kind: "showcase",
    proof:
      "Связанный контур B2B-панелей: CRM для агентств, конструктор ботов, таск-трекер и виджеты с RBAC.",
    role: "React/Vite, формы, Telegram/API, PostgreSQL, QA и E2E-автотесты.",
    previewImage: "/previews/nn99.png",
    visualAccent: "#b8ff3c",
    visualTag: "ADMIN",
    badges: ["CRM", "RBAC", "боты"],
    niches: ["B2B", "SaaS", "HoReCa"],
    tech: ["React", "CMS", "боты", "PostgreSQL", "Playwright"],
    links: [
      { label: "NN99 · Sender", href: "https://nn99.ru/" },
      { label: "Platformax", href: "https://platformax.pro/" },
      { label: "Таск-трекер", href: "https://elenasamanchuk.github.io/task-tracker-mvp/" },
    ],
  },
  "web-apps": {
    id: "web-apps",
    title: "PWA · приложения",
    kind: "showcase",
    proof: "Офлайн, PWA и APK — от life-style трекера до игровых механик и job-matching.",
    role: "Cursor, адаптив, GitHub Pages, Android APK, vibe coding в прод.",
    previewImage: "/previews/vital-coach.png",
    visualAccent: "#3cc8ff",
    visualTag: "PWA",
    badges: ["PWA", "APK", "офлайн"],
    niches: ["Life style", "игры", "HR"],
    tech: ["Cursor", "PWA", "APK", "офлайн"],
    links: [
      { label: "Поток", href: "https://elenasamanchuk.github.io/vital-coach/onboarding/" },
      { label: "Republic 2077", href: "https://elenasamanchuk.github.io/republic-2077/" },
      { label: "Job Radar", href: "https://elenasamanchuk.github.io/job-radar/" },
    ],
  },
  "zero-awakening": {
    id: "zero-awakening",
    title: "ZERO // Пробуждение",
    kind: "showcase",
    proof:
      "Интерактивный креатив-лендинг: motion, custom cursor, countdown — Next.js, GPU-friendly анимации.",
    role: "Next.js 16, Framer Motion, static export, GitHub Pages, perf-tuning.",
    previewImage: "/previews/yandex-pet-day.png",
    visualAccent: "#b8ff3c",
    visualTag: "ZERO",
    badges: ["интерактив", "motion", "Next.js"],
    niches: ["креатив", "event"],
    tech: ["Next.js", "motion", "GH Pages", "perf"],
    links: [
      { label: "Демо", href: "https://elenasamanchuk.github.io/zero-awakening/" },
      { label: "GitHub", href: "https://github.com/ElenaSamanchuk/zero-awakening" },
    ],
  },
  "yandex-pet-day": {
    id: "yandex-pet-day",
    title: "Yandex Pet Day",
    kind: "showcase",
    proof:
      "Event-лендинг под ключ: Figma 1440+360, UI-kit, Play-прототип и код на GitHub Pages — тестовое Яндекс Крауд.",
    role: "UX/UI, прототип, адаптив 360–1440, HTML/CSS/JS (Vite), QA, handoff.",
    previewImage: "/previews/yandex-pet-day.png",
    visualAccent: "#ffcc00",
    visualTag: "PET DAY",
    badges: ["под ключ", "Figma Play"],
    niches: ["Event", "B2B"],
    tech: ["Figma", "HTML/CSS/JS", "Vite", "адаптив"],
    links: [
      { label: "Figma", href: "https://www.figma.com/design/3xau5j9A2ixWs7YnfHCvXi/Untitled" },
      { label: "Демо", href: "https://elenasamanchuk.github.io/yandex-pet-day/" },
      { label: "Кейс", href: "https://elenasamanchuk.github.io/yandex-pet-day/case.html" },
      { label: "GitHub", href: "https://github.com/ElenaSamanchuk/yandex-pet-day" },
    ],
  },
  "digital-landing-lab": {
    id: "digital-landing-lab",
    title: "Digital Landing Lab",
    kind: "showcase",
    proof: "Лендинг из Figma desktop + mobile — чистая вёрстка, сетка, адаптив и деплой без Tilda.",
    role: "Figma → HTML/CSS, mobile-first, типографика, GitHub Pages.",
    previewImage: "/previews/yandex-pet-day.png",
    visualAccent: "#ff6b4a",
    visualTag: "FIGMA",
    badges: ["Figma → код", "адаптив"],
    niches: ["B2B", "лендинг"],
    tech: ["Figma", "HTML/CSS", "адаптив", "GH Pages"],
    links: [
      { label: "Демо", href: "https://elenasamanchuk.github.io/digital-landing-lab/" },
      { label: "GitHub", href: "https://github.com/ElenaSamanchuk/digital-landing-lab" },
    ],
  },
  smartlogic: {
    id: "smartlogic",
    title: "SmartLogic · CRO",
    kind: "case",
    proof:
      "CRO-редизайн smlogik.ru: premium-бренд сохранён, конверсия в «видеообзор» усилена точечными патчами.",
    role: "Аудит, слой поверх Tilda, inline-каталог, FAQ, AI-консультант, shop UX.",
    previewImage: "/previews/smartlogic.png",
    visualAccent: "#d4af6a",
    visualTag: "CRO",
    badges: ["CRO", "конверсия"],
    niches: ["HoReCa", "E-commerce"],
    tech: ["Tilda", "CRO", "KnowEmbed", "HTML/CSS/JS"],
    links: [
      { label: "Лендинг", href: "https://elenasamanchuk.github.io/smartlogic-landing/" },
      { label: "Кейс", href: "https://elenasamanchuk.github.io/smartlogic-landing/case/" },
      { label: "smlogik.ru", href: "https://smlogik.ru" },
    ],
  },
  growfood: {
    id: "growfood",
    title: "Growfood · механики",
    kind: "case",
    proof: "Промо-виджеты с воронкой: калькулятор, колесо, баннеры — не декор, а следующий шаг к заказу.",
    role: "HTML/CSS/JS механики + посадочные на Tilda, HTML5-баннеры.",
    previewImage: "/previews/growfood.png",
    visualAccent: "#b8ff3c",
    visualTag: "GROW",
    niches: ["FoodTech", "B2C"],
    tech: ["Tilda", "HTML/CSS/JS", "баннеры", "калькулятор"],
    links: [
      { label: "ИМТ-калькулятор", href: "https://amb.growfood.pro/food-selection-1" },
      { label: "Колесо фортуны", href: "https://amb.growfood.pro/page79566396.html#reg" },
      { label: "HTML5-баннеры", href: "https://elenasamanchuk.github.io/html5-banners-vitrina/" },
      { label: "Плейлист", href: "https://gfmusic.tilda.ws/#rec943861591" },
      { label: "GF Gift", href: "https://gf-gift.ru/#podari" },
    ],
  },
  priem: {
    id: "priem",
    title: "Приём · кампании",
    kind: "case",
    proof: "Сезонные кампании и партнёрки: таймер, квиз и игровые карточки — срочность и сегментация.",
    role: "Таймер (Т-Банк), сезонный квиз, карточки — HTML/CSS/JS на Tilda.",
    previewImage: "/previews/priem.png",
    visualAccent: "#ff3c6e",
    visualTag: "ПРИЁМ",
    niches: ["FoodTech", "B2C"],
    tech: ["Tilda", "Zero Block", "таймер", "партнёрки"],
    links: [
      { label: "Таймер · Т-Банк", href: "https://priem.menu/?cmz=Kdw5" },
      { label: "Сезонный квиз", href: "https://priem.menu/?cmz=M3rW" },
      { label: "Игровые карточки", href: "https://amb.priem.menu/page101080486.html" },
    ],
  },
  fitness: {
    id: "fitness",
    title: "Фитнес · эксперты",
    kind: "case",
    proof: "Витрины коучей: taplink, итоги года, модули — доверие и заявка, не «красивая картинка».",
    role: "Лендинги на Tilda, Zero Block, кастомные блоки и адаптив.",
    previewImage: "/previews/fitness.png",
    visualAccent: "#ff6b4a",
    visualTag: "FIT",
    badges: ["личный бренд"],
    niches: ["B2C", "эксперт"],
    tech: ["Tilda", "Zero Block", "адаптив"],
    links: [
      { label: "Yourforma", href: "https://yourforma.ru/" },
      { label: "Popovichfit", href: "https://popovichfit.ru/taplink" },
      { label: "Kochfit", href: "https://kochfit.ru/year-results" },
      { label: "Kinezio", href: "https://kineziofitness.online/module-zero" },
    ],
  },
  nasha: {
    id: "nasha",
    title: "Nasha · e-commerce",
    kind: "case",
    proof: "Запуск витрины: каталог, контент и доводка UI в одном контуре с Tilda.",
    role: "Tilda, наполнение каталога, HTML/CSS/JS под макет.",
    previewImage: "/previews/nasha.png",
    visualAccent: "#ff9f43",
    visualTag: "NASHA",
    niches: ["E-commerce", "B2C"],
    tech: ["Tilda", "каталог", "адаптив"],
    links: [{ label: "Каталог", href: "https://nashashop.ru/catalog" }],
  },
  education: {
    id: "education",
    title: "EdTech · школы",
    kind: "case",
    proof: "Длинные лендинги, курсы и HR-витрины — много контента, спокойный тон, QA и автотесты.",
    role: "Tilda, адаптив, QA; embed-блоки для школ и курсов.",
    previewImage: "/previews/education.png",
    visualAccent: "#a78bfa",
    visualTag: "ED",
    niches: ["EdTech", "B2B", "эксперт"],
    tech: ["Tilda", "адаптив", "QA", "автотесты"],
    links: [
      { label: "Система Ясности", href: "https://sistemayasnosti.com/" },
      { label: "BI13", href: "https://bi13pro.ru/aestheticbi13" },
      { label: "Mostovoy", href: "https://mostovoyvv.com/" },
      { label: "Savinar", href: "https://savinarv.tilda.ws/" },
      { label: "HR-витрина", href: "https://sales-manager-chat.tilda.ws/" },
    ],
  },
};

/** Порядок: клиенты → механики → дизайн → full-stack */
export const portfolioGroups: PortfolioGroup[] = [
  {
    id: "clients",
    label: "Клиенты в проде",
    hook: "Витрины, которые уже принимают заявки",
    accent: "#3cc8ff",
    itemIds: ["fitness", "nasha", "education"],
  },
  {
    id: "growth",
    label: "Конверсия · кампании",
    hook: "Механики, которые ведут к действию",
    accent: "#ff3c6e",
    itemIds: ["growfood", "priem"],
  },
  {
    id: "craft",
    label: "Дизайн → прод",
    hook: "Figma, CRO и вёрстка до деплоя",
    accent: "#b8ff3c",
    itemIds: ["yandex-pet-day", "digital-landing-lab", "smartlogic"],
  },
  {
    id: "product",
    label: "Продукт · код",
    hook: "Full-stack, админки и приложения — живые демо",
    accent: "#6e3cff",
    itemIds: ["knowembed", "admin-platforms", "web-apps", "zero-awakening"],
  },
];

export const portfolioItems: PortfolioItem[] = portfolioGroups.flatMap((group) =>
  group.itemIds.map((id) => portfolioCatalog[id]),
);

export function getPortfolioGroupForItem(itemId: string): PortfolioGroup | undefined {
  return portfolioGroups.find((group) => group.itemIds.includes(itemId));
}

export const collaborationFormats = [
  {
    id: "sprint",
    badge: "проект",
    title: "Спринт",
    summary: "Лендинг, посадочная или блок механик — с ясным финишем и сроком.",
    hints: ["Жёсткий дедлайн", "Один понятный финиш", "Приёмка по ТЗ"],
  },
  {
    id: "retainer",
    badge: "пакеты часов",
    title: "Ретейнер",
    summary: "Пакет часов: очередь задач и правки без поиска подрядчика.",
    hints: ["Очередь правок", "Сезонные страницы", "Пакет часов / месяц"],
  },
  {
    id: "role",
    badge: "трудоустройство",
    title: "Роль в команде",
    summary: "Штат или контракт: витрина, релизы, встраивание в ваши ритуалы.",
    hints: ["Веб внутри процессов", "Стабильный контур", "Контракт или штат"],
  },
  {
    id: "custom",
    badge: "обсуждаемо",
    title: "Запрос клиента",
    summary: "Индивидуальный формат под задачу — scope и рамка вместе.",
    hints: ["Контекст в первом сообщении", "Scope и срок", "Гибкий формат"],
  },
] as const;

export const marqueeItems = [
  "ЕЛЕНА САМАНЧУК",
  "FULL-STACK",
  "AI · SaaS · CRM",
  "FIGMA → CODE",
  "100+ В ПРОДЕ",
  "OPEN TO WORK",
] as const;

export const navLinks = [
  { href: "#story", label: "Процесс" },
  { href: "#cases", label: "Кейсы" },
  { href: "#collaboration", label: "Форматы" },
  { href: "#contact", label: "Связаться" },
] as const;

export const site = {
  shortName: "Елена",
  name: "Елена Саманчук",
  tagline: "разработка сайтов полного цикла",
  headline: "Страницы для кампаний, которые можно запускать завтра.",
  subhead:
    "Полный цикл или промежуточный этап — без разрыва между текстом, макетом и кодом.",
  status: "Открыта к проекту",
  statusNote: "Удалённо · спринт, ретейнер или этап",
} as const;

export const contacts = {
  telegram: "https://t.me/ElaneDmitrievna",
  email: "mailto:elenasamanchuk@gmail.com",
  github: "https://github.com/ElenaSamanchuk",
} as const;

export const metrics = [
  { value: "100+", label: "страниц и механик в продакшене" },
  { value: "22", label: "живых ссылок в кейсах" },
  { value: "4", label: "зоны: стратегия · контент · код · QA" },
] as const;

export const stack = [
  "Figma",
  "Tilda · Zero Block",
  "HTML / CSS / JS",
  "Cursor",
  "SEO",
  "QA",
  "GitHub",
  "Метрика · GA4",
  "HTML5-баннеры",
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

export const portfolioItems: PortfolioItem[] = [
  {
    id: "yandex-pet-day",
    title: "Yandex Pet Day",
    kind: "showcase",
    proof:
      "Event-лендинг под ключ: Figma 1440+360, UI-kit, Play-прототип и интерактивный код на GitHub Pages.",
    role: "UX/UI, прототип, адаптив 360–1440, HTML/CSS/JS (Vite), QA, handoff.",
    previewImage: "/previews/yandex-pet-day.png",
    visualAccent: "#ffcc00",
    visualTag: "PET DAY",
    badges: ["под ключ", "Figma Play"],
    niches: ["Event", "B2B"],
    tech: ["Figma", "HTML/CSS/JS", "Vite", "адаптив", "прототип"],
    links: [
      { label: "Figma", href: "https://www.figma.com/design/3xau5j9A2ixWs7YnfHCvXi/Untitled" },
      { label: "Демо", href: "https://elenasamanchuk.github.io/yandex-pet-day/" },
      { label: "Кейс", href: "https://elenasamanchuk.github.io/yandex-pet-day/case.html" },
    ],
  },
  {
    id: "knowembed",
    title: "KnowEmbed · AI chatbot builder",
    kind: "showcase",
    proof: "Full-stack MVP: docs → chatbot → embed widget, Stripe, Android APK.",
    role: "Продукт, UI, Supabase, Edge Functions, деплой на GitHub Pages + Vercel.",
    previewImage: "/previews/knowembed-mobile.png",
    visualAccent: "#6e3cff",
    visualTag: "AI",
    badges: ["full-stack MVP", "B2B SaaS"],
    niches: ["AI", "SaaS"],
    tech: ["Supabase", "Stripe", "Android APK", "embed"],
    links: [
      { label: "Демо", href: "https://elenasamanchuk.github.io/knowembed/" },
      { label: "Embed", href: "https://elenasamanchuk.github.io/knowembed/embed-demo.html" },
    ],
  },
  {
    id: "smartlogic",
    title: "SmartLogic · CRO",
    kind: "case",
    proof:
      "CRO-редизайн smlogik.ru: premium-бренд сохранён, конверсия в заявку «видеообзор» усилена точечными патчами.",
    role: "Аудит, слой поверх Tilda, inline-каталог, FAQ, AI-консультант, shop UX.",
    previewImage: "/previews/smartlogic.png",
    visualAccent: "#d4af6a",
    visualTag: "CRO",
    badges: ["CRO", "под ключ"],
    niches: ["HoReCa", "E-commerce"],
    tech: ["Tilda", "CRO", "KnowEmbed", "HTML/CSS/JS"],
    links: [
      { label: "Демо CRO", href: "https://elenasamanchuk.github.io/conversionart-smlogik-test/" },
      { label: "Репорт", href: "https://elenasamanchuk.github.io/conversionart-smlogik-test/report/" },
      { label: "smlogik.ru", href: "https://smlogik.ru" },
    ],
  },
  {
    id: "growfood",
    title: "Growfood",
    kind: "case",
    proof: "Серия промо: вовлечение и следующий шаг в воронке — не декоративные виджеты.",
    role: "Механики на HTML/CSS/JS + посадочные на Tilda.",
    previewImage: "/previews/growfood.png",
    visualAccent: "#b8ff3c",
    visualTag: "GROW",
    niches: ["FoodTech", "B2C"],
    tech: ["Tilda", "HTML/CSS/JS", "баннеры", "калькулятор"],
    links: [
      { label: "ИМТ-калькулятор", href: "https://amb.growfood.pro/food-selection-1" },
      { label: "Колесо фортуны", href: "https://amb.growfood.pro/page79566396.html#reg" },
      { label: "HTML5-баннеры", href: "https://elenasamanchuk.github.io/html5-banners-vitrina/" },
    ],
  },
  {
    id: "priem",
    title: "Приём",
    kind: "case",
    proof: "Сезонные кампании и партнёрские лендинги: срочность, сегментация и путь клиента.",
    role: "Таймер, сезонный квиз и игровые карточки — код HTML/CSS/JS.",
    previewImage: "/previews/priem.png",
    visualAccent: "#ff3c6e",
    visualTag: "ПРИЁМ",
    niches: ["FoodTech", "B2C"],
    tech: ["Tilda", "Zero Block", "таймер", "партнёрки"],
    links: [
      { label: "Таймер · Т-Банк", href: "https://priem.menu/?cmz=Kdw5" },
      { label: "Сезонный квиз", href: "https://priem.menu/?cmz=M3rW" },
    ],
  },
  {
    id: "web-apps",
    title: "Веб-приложения · PWA и APK",
    kind: "showcase",
    proof: "PWA, офлайн, vibe coding — от life-style трекера до игровых механик.",
    role: "Cursor, адаптив, деплой на GitHub Pages, Android APK.",
    previewImage: "/previews/vital-coach.png",
    visualAccent: "#3cc8ff",
    visualTag: "PWA",
    badges: ["PWA", "APK", "vibe coding"],
    niches: ["Life style", "игры"],
    tech: ["Cursor", "PWA", "APK", "офлайн"],
    links: [
      { label: "Поток", href: "https://elenasamanchuk.github.io/vital-coach/onboarding/" },
      { label: "Republic 2077", href: "https://elenasamanchuk.github.io/republic-2077/" },
      { label: "Job Radar", href: "https://elenasamanchuk.github.io/job-radar/" },
    ],
  },
  {
    id: "admin-platforms",
    title: "Админки · CRM · боты",
    kind: "showcase",
    proof:
      "Связанный контур продуктовых панелей: CRM для рестов и агентств, конструктор ботов, таск-трекер и виджеты с админкой.",
    role: "React/Vite, RBAC, формы, деплой, Telegram/API, QA и автотесты.",
    previewImage: "/previews/nn99.png",
    visualAccent: "#b8ff3c",
    visualTag: "ADMIN",
    badges: ["CRM", "admin", "боты"],
    niches: ["B2B", "SaaS", "HoReCa"],
    tech: ["React", "CMS", "боты", "RBAC", "PostgreSQL"],
    links: [
      { label: "NN99 · Sender", href: "https://nn99.ru/" },
      { label: "Platformax", href: "https://platformax.pro/" },
      { label: "Таск-трекер", href: "https://elenasamanchuk.github.io/task-tracker-mvp/" },
      { label: "Админка тарифов", href: "https://elenasamanchuk.github.io/popovichfit-tariffs/admin.html" },
    ],
  },
  {
    id: "fitness",
    title: "Фитнес · эксперт",
    kind: "case",
    proof: "Витрины коучей: доверие и заявка важнее «красивой картинки».",
    role: "Лендинги и taplink на Tilda — итоги года, модули, страницы под продукты.",
    previewImage: "/previews/fitness.png",
    visualAccent: "#ff6b4a",
    visualTag: "FIT",
    badges: ["дизайн адаптива"],
    niches: ["B2C", "личный бренд"],
    tech: ["Tilda", "Zero Block", "адаптив"],
    links: [
      { label: "Yourforma", href: "https://yourforma.ru/" },
      { label: "Popovichfit", href: "https://popovichfit.ru/taplink" },
      { label: "Kochfit", href: "https://kochfit.ru/year-results" },
    ],
  },
  {
    id: "nasha",
    title: "Nasha",
    kind: "case",
    proof: "Запуск e-commerce-витрины: каталог, контент и доводка интерфейса.",
    role: "Tilda, наполнение каталога, доработки на HTML/CSS/JS.",
    previewImage: "/previews/nasha.png",
    visualAccent: "#ff9f43",
    visualTag: "NASHA",
    niches: ["E-commerce", "B2C"],
    tech: ["Tilda", "каталог", "адаптив"],
    links: [{ label: "Каталог", href: "https://nashashop.ru/catalog" }],
  },
  {
    id: "education",
    title: "Образование · психология",
    kind: "case",
    proof: "Школы и платформы: длинные лендинги, много контента, спокойный тон.",
    role: "Tilda, адаптив, QA и автотесты; курсы и HR-витрины.",
    previewImage: "/previews/education.png",
    visualAccent: "#a78bfa",
    visualTag: "ED",
    niches: ["EdTech", "B2B", "эксперт"],
    tech: ["Tilda", "адаптив", "QA", "автотесты"],
    links: [
      { label: "Система Ясности", href: "https://sistemayasnosti.com/" },
      { label: "BI13", href: "https://bi13pro.ru/aestheticbi13" },
      { label: "Mostovoy", href: "https://mostovoyvv.com/" },
    ],
  },
];

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
  "FULL-STACK LANDING",
  "TILDA · FIGMA · CODE",
  "100+ В ПРОДЕ",
  "GITHUB PAGES",
  "OPEN TO WORK",
] as const;

export const navLinks = [
  { href: "#story", label: "Процесс" },
  { href: "#cases", label: "Кейсы" },
  { href: "#collaboration", label: "Форматы" },
  { href: "#contact", label: "Связаться" },
] as const;

import type { Metadata } from "next";
import Link from "next/link";

const PUBLISHED = "2026-06-08";
const URL_PATH = "/blog/sozdanie-sajtov-nado-znat";
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`;

export const metadata: Metadata = {
  title: "Создать сайт легко — но это не значит, что он будет работать | Виталий Вронский",
  description:
    "No-code и ИИ-конструкторы дали всем возможность «сделать сайт». Но почему 80% таких сайтов не приносят клиентов? Разбираю разницу между «сделано» и «работает».",
  metadataBase: new URL("https://vitalyvronsky.ru"),
  alternates: { canonical: URL_PATH },
  keywords: [
    "создание сайта",
    "no-code сайт",
    "разработка сайтов профессионал",
    "почему сайт не приносит клиентов",
    "веб-разработчик заказать",
    "сайт на Tilda vs разработчик",
    "SEO оптимизация сайта",
    "скорость загрузки сайта",
  ],
  openGraph: {
    type: "article",
    url: FULL_URL,
    title: "Создать сайт легко — но это не значит, что он будет работать",
    description:
      "No-code инструменты дали всем возможность «сделать сайт». Разбираю, почему большинство таких сайтов не приносят клиентов.",
    locale: "ru_RU",
    siteName: "Виталий Вронский",
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ["Виталий Вронский"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Создать сайт легко — но это не значит, что он будет работать",
    description: "Почему 80% сайтов на конструкторах не приносят клиентов — разбираю честно.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Создать сайт легко — но это не значит, что он будет работать",
  description:
    "No-code и ИИ-конструкторы дали всем возможность «сделать сайт». Разбираю разницу между «сделано» и «работает» — SEO, скорость, UX, безопасность.",
  author: {
    "@type": "Person",
    name: "Виталий Вронский",
    url: "https://vitalyvronsky.ru",
  },
  publisher: {
    "@type": "Person",
    name: "Виталий Вронский",
    url: "https://vitalyvronsky.ru",
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: FULL_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": FULL_URL },
  inLanguage: "ru",
  keywords:
    "создание сайта, no-code сайт, разработка сайтов, почему сайт не приносит клиентов, SEO оптимизация, скорость загрузки",
};

const diffTable = [
  {
    aspect: "Внешний вид",
    constructor: "Выбираешь шаблон — готово за час",
    professional: "Адаптирован под бренд, целевую аудиторию и цели бизнеса",
  },
  {
    aspect: "SEO",
    constructor: "Базовые мета-теги, generic URL, нет структуры данных",
    professional: "Семантика, JSON-LD, canonical, sitemap, скорость Core Web Vitals",
  },
  {
    aspect: "Скорость",
    constructor: "50–70 баллов PageSpeed из-за лишнего JS и тяжёлых скриптов",
    professional: "90+ баллов, оптимизированные изображения, правильный порядок загрузки",
  },
  {
    aspect: "Безопасность",
    constructor: "Общая платформа, уязвимости третьих сторон, чужие трекеры",
    professional: "Контроль зависимостей, CSP-заголовки, аудит кода",
  },
  {
    aspect: "Конверсия",
    constructor: "Шаблонные формы, нет A/B тестов, нет аналитики поведения",
    professional: "CTA под аудиторию, тепловые карты, гипотезы и итерации",
  },
  {
    aspect: "Масштабирование",
    constructor: "Достигаешь лимита конструктора — начинаешь заново",
    professional: "Архитектура, которая растёт вместе с бизнесом",
  },
];

const misconceptions = [
  {
    myth: "«Хороший дизайн = хороший сайт»",
    reality:
      "Дизайн — это 20% работы. Остальное: архитектура информации, скорость, доступность, SEO-структура, правильный код. Можно сделать красивый сайт, который Google не увидит никогда.",
  },
  {
    myth: "«Тильда сама оптимизирует под поиск»",
    reality:
      "Конструкторы дают инструменты. Но заполнить их правильно — другая история. Без понимания семантики заголовков, кластеризации запросов и технического SEO инструменты бесполезны.",
  },
  {
    myth: "«Мой сайт грузится нормально»",
    reality:
      "«Нормально» — это не то же самое, что «быстро». Каждые 100ms задержки снижают конверсию на 1%. Сайт с 60 баллами PageSpeed теряет до 30% потенциальных клиентов ещё до того, как они прочитают первый абзац.",
  },
  {
    myth: "«ИИ сгенерирует сайт за 5 минут»",
    reality:
      "ИИ-конструкторы делают болванку. Это как Word с шаблоном резюме — можно получить что-то приемлемое, но не то, что выделит вас среди конкурентов и будет продавать.",
  },
];

const professionalKnowledge = [
  {
    area: "Производительность",
    icon: "⚡",
    color: "rgba(0,112,243,0.08)",
    borderColor: "rgba(0,112,243,0.2)",
    textColor: "#60a5fa",
    details: [
      "Core Web Vitals (LCP, INP, CLS) — метрики, по которым Google ранжирует страницы",
      "Ленивая загрузка изображений и компонентов — пользователь видит контент сразу",
      "Правильный порядок загрузки CSS/JS — блокирующие ресурсы убивают First Paint",
      "Кэширование и CDN — одни и те же данные не гоняются по сети снова и снова",
    ],
  },
  {
    area: "SEO и видимость",
    icon: "🔍",
    color: "rgba(125,44,200,0.08)",
    borderColor: "rgba(125,44,200,0.2)",
    textColor: "#c084fc",
    details: [
      "Семантическая разметка HTML — поисковик понимает структуру и контекст страницы",
      "JSON-LD и структурированные данные — звёздочки в выдаче, рейтинги, FAQ-блоки",
      "Техническое SEO: canonical, hreflang, robots.txt, XML sitemap",
      "Кластеризация ключевых слов — каждая страница бьёт в свой поисковый запрос",
    ],
  },
  {
    area: "Пользовательский опыт",
    icon: "🎯",
    color: "rgba(0,212,255,0.06)",
    borderColor: "rgba(0,212,255,0.15)",
    textColor: "#67e8f9",
    details: [
      "Иерархия информации — пользователь за 3 секунды понимает, что вы предлагаете",
      "Мобильная адаптация не как «уменьшить экран», а как отдельный сценарий использования",
      "Доступность (a11y) — ARIA, контрастность, навигация с клавиатуры",
      "Психология CTA — цвет, текст, расположение кнопки влияют на конверсию в разы",
    ],
  },
  {
    area: "Безопасность",
    icon: "🔒",
    color: "rgba(255,100,100,0.06)",
    borderColor: "rgba(255,100,100,0.15)",
    textColor: "#fca5a5",
    details: [
      "HTTPS и правильные заголовки безопасности (HSTS, CSP, X-Frame-Options)",
      "Защита форм от спама и инъекций — без этого база данных открыта для атак",
      "Контроль зависимостей — npm-пакет со скрытым трекером — реальная угроза",
      "Резервные копии и план восстановления — потеря сайта стоит намного дороже его создания",
    ],
  },
];

const faq = [
  {
    q: "Стоит ли вообще использовать конструкторы вроде Tilda?",
    a: "Да, для простых задач — вполне. Лендинг для тестирования гипотезы, событийная страница, визитка фрилансера. Конструктор плохо работает там, где важны SEO, скорость или уникальная функциональность. Если сайт должен приносить клиентов из поиска — конструктора часто недостаточно.",
  },
  {
    q: "Разработчик стоит дорого. Есть ли смысл вкладываться?",
    a: "Зависит от цели. Если сайт — визитка «для галочки», конструктора хватит. Если сайт — канал привлечения клиентов, то 50 000 ₽ за профессиональную разработку окупаются при одной продаже. Я видел клиентов, которые за год сэкономили на конструкторе 20 000 ₽, потеряв при этом клиентов на 500 000 ₽ из-за плохого SEO.",
  },
  {
    q: "Можно ли улучшить уже существующий сайт на конструкторе?",
    a: "Частично. Можно улучшить тексты, мета-теги, добавить аналитику. Но архитектурные проблемы — лишний код конструктора, отсутствие серверного рендеринга, ограниченный контроль заголовков — не решаются без переезда.",
  },
  {
    q: "Сколько времени занимает профессиональная разработка сайта?",
    a: "Лендинг — 3–7 дней. Корпоративный сайт — 2–4 недели. Это больше, чем пара часов в конструкторе, зато результат — сайт, который реально работает: грузится быстро, находится в поиске, конвертирует посетителей в клиентов.",
  },
];

export default function Page() {
  const publishedFormatted = new Date(PUBLISHED).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0a0a0a] text-white">
        {/* Фоновая сетка */}
        <div
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          aria-hidden="true"
          className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,112,243,0.06) 0%, rgba(125,44,200,0.04) 50%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-24">
          {/* Назад */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-12"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8l4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            На главную
          </Link>

          {/* Шапка статьи */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  border: "1px solid rgba(0,112,243,0.35)",
                  background: "rgba(0,112,243,0.1)",
                  color: "#60a5fa",
                }}
              >
                Разработка
              </span>
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500">
                {publishedFormatted}
              </span>
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500">
                12 мин чтения
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Создать сайт сейчас{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #0070f3, #00d4ff, #7d2cc8)",
                }}
              >
                легко. Но это ещё не сайт.
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              No-code платформы, ИИ-конструкторы и шаблоны сделали создание сайта доступным
              каждому. Но между «сделал сайт» и «сайт работает» — пропасть. Разбираю, что
              именно нужно знать, чтобы сайт реально приносил клиентов.
            </p>
          </header>

          <article className="space-y-14 text-gray-300 leading-relaxed">

            {/* Хук — проблема */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Каждый второй владелец малого бизнеса сделал сайт сам. И почти никто не знает,
                почему он не работает.
              </h2>
              <p className="mb-4">
                В 2020 году сделать сайт самостоятельно было подвигом. Нужно было знать HTML,
                хотя бы немного CSS, разобраться с хостингом. В 2026-м — это дело пары часов:
                выбрал шаблон в Tilda, подключил домен, написал текст. Готово.
              </p>
              <p className="mb-4">
                Только потом оказывается, что в Google этот сайт не найти. Что он грузится
                7 секунд на мобильном. Что форма обратной связи ломается в Safari. Что через
                три месяца с него пришло ноль заявок.
              </p>
              <p className="mb-6">
                Я работаю с клиентами, у которых уже есть сайт — и первое, что я делаю, это
                технический аудит. В 80% случаев проблемы одни и те же: сделано красиво,
                но не оптимизировано ни под один реальный запрос пользователя.
              </p>
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(0,112,243,0.08)",
                  border: "1px solid rgba(0,112,243,0.2)",
                }}
              >
                <p className="text-blue-200 font-medium leading-relaxed">
                  Проблема не в том, что конструкторы плохие. Проблема в том, что они дают
                  молоток, но не объясняют архитектуру. Можно построить дом с молотком — но
                  только если знаешь, что строишь.
                </p>
              </div>
            </section>

            {/* Почему кажется легко */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Почему создавать сайты сейчас действительно легко
              </h2>
              <p className="mb-4">
                Это не ирония — инструменты правда стали мощными. Вот что изменилось за
                последние пять лет:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  {
                    title: "No-code конструкторы",
                    desc: "Tilda, Webflow, Wix, Readymag — визуальные редакторы с готовыми блоками. Дизайн без единой строки кода.",
                  },
                  {
                    title: "ИИ-генераторы сайтов",
                    desc: "Описываешь бизнес текстом — сайт генерируется за минуту. Framer AI, Wix ADI, Durable и десятки других.",
                  },
                  {
                    title: "Шаблонные решения",
                    desc: "WordPress с премиум-темой, Shopify для магазина — установил, наполнил контентом, запустил.",
                  },
                  {
                    title: "Хостинг как сервис",
                    desc: "Vercel, Netlify, Timeweb Cloud — деплой в один клик. Не нужно разбираться с сервером.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.025)",
                    }}
                  >
                    <span className="text-blue-400 mt-0.5 shrink-0 font-bold">→</span>
                    <div>
                      <p className="font-semibold text-white mb-0.5">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                Всё это работает. Можно быстро получить приличный внешний вид. Но внешний
                вид — это меньше трети того, что делает сайт эффективным инструментом.
              </p>
            </section>

            {/* Мифы */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4 заблуждения, из-за которых сайты не работают
              </h2>
              <p className="mb-6">
                Вот самые частые ошибки, которые я вижу у клиентов, пришедших с
                «уже готовым» сайтом:
              </p>
              <div className="space-y-4">
                {misconceptions.map((item) => (
                  <div
                    key={item.myth}
                    className="p-5 rounded-2xl"
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.025)",
                    }}
                  >
                    <p className="font-semibold text-white mb-2">
                      <span className="text-red-400 mr-2">✗</span>
                      {item.myth}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.reality}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Что реально важно знать */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Что нужно знать, чтобы сайт работал
              </h2>
              <p className="mb-8">
                Профессиональная разработка сайтов — это не про «написать красивый код». Это
                про знания в четырёх ключевых областях, каждая из которых влияет на результат:
              </p>
              <div className="space-y-6">
                {professionalKnowledge.map((area) => (
                  <div
                    key={area.area}
                    className="p-6 rounded-2xl"
                    style={{
                      background: area.color,
                      border: `1px solid ${area.borderColor}`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{area.icon}</span>
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: area.textColor }}
                      >
                        {area.area}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {area.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="mt-0.5 shrink-0" style={{ color: area.textColor }}>
                            →
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Таблица сравнения */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Конструктор vs профессиональная разработка: честное сравнение
              </h2>
              <p className="mb-6">
                Я не против конструкторов — они решают свои задачи. Но вот как выглядит
                реальное сравнение по критериям, которые влияют на бизнес:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      className="text-left"
                      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <th className="py-3 pr-4 text-gray-400 font-medium w-32">Критерий</th>
                      <th className="py-3 pr-4 text-gray-400 font-medium">Конструктор</th>
                      <th className="py-3 text-gray-400 font-medium">Профессионал</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {diffTable.map((row) => (
                      <tr key={row.aspect}>
                        <td className="py-4 pr-4 font-medium text-white align-top">{row.aspect}</td>
                        <td className="py-4 pr-4 text-gray-400 align-top">{row.constructor}</td>
                        <td className="py-4 text-gray-300 align-top">{row.professional}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Inline CTA 1 */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl"
              style={{
                background: "rgba(0,112,243,0.07)",
                border: "1px solid rgba(0,112,243,0.2)",
              }}
            >
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">
                  Хотите знать, насколько хорошо работает ваш текущий сайт?
                </p>
                <p className="text-sm text-gray-400">
                  Сделаю быстрый технический аудит — бесплатно. Скажу честно, что мешает
                  приносить клиентов.
                </p>
              </div>
              <a
                href="https://t.me/vitalyvronsky"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #0070f3, #7d2cc8)" }}
              >
                Написать →
              </a>
            </div>

            {/* Реальные примеры что ломается */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Что реально ломается — из практики
              </h2>
              <p className="mb-6">
                Вот конкретные проблемы, которые я регулярно нахожу при аудите сайтов
                клиентов. Ни одна из них не была очевидна владельцам до того, как я их показал.
              </p>
              <div className="space-y-4">
                {[
                  {
                    problem: "Сайт не в Google из-за одной строки в robots.txt",
                    detail:
                      "Разработчик поставил «Disallow: /» для тестового окружения и забыл убрать. Сайт проработал 8 месяцев — ни одного перехода из поиска.",
                  },
                  {
                    problem: "Форма теряет заявки",
                    detail:
                      "Форма отправлялась, но письма попадали в спам. Клиент думал, что сайт не работает. На самом деле — проблема с SPF/DKIM записями домена.",
                  },
                  {
                    problem: "Сайт грузится 11 секунд на мобильном",
                    detail:
                      "Картинки в 4K разрешении без оптимизации, тяжёлые шрифты без предзагрузки, три аналитических скрипта блокировали рендеринг. PageSpeed: 23/100.",
                  },
                  {
                    problem: "Все страницы конкурируют за один запрос",
                    detail:
                      "Шесть страниц сайта были оптимизированы под одно и то же ключевое слово. Google не знал, какую показывать — и не показывал ни одну.",
                  },
                  {
                    problem: "Сертификат SSL истёк",
                    detail:
                      "Автопродление не работало. Браузеры показывали предупреждение «Небезопасный сайт». Конверсия упала вдвое — пока владелец не написал мне.",
                  },
                ].map((ex) => (
                  <div
                    key={ex.problem}
                    className="p-5 rounded-xl"
                    style={{
                      border: "1px solid rgba(255,100,100,0.15)",
                      background: "rgba(255,100,100,0.04)",
                    }}
                  >
                    <p className="font-semibold text-white mb-1.5">
                      <span className="text-red-400 mr-2">⚠</span>
                      {ex.problem}
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed">{ex.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Когда конструктор ок, а когда нет */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Когда конструктора достаточно, а когда нет
              </h2>
              <p className="mb-6">
                Я за честный ответ, а не за продажу своих услуг там, где они не нужны.
                Вот моё мнение:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    background: "rgba(0,200,100,0.05)",
                    border: "1px solid rgba(0,200,100,0.15)",
                  }}
                >
                  <h3 className="font-semibold text-green-400 mb-3">
                    Конструктор подойдёт, если:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {[
                      "Тест гипотезы или MVP — быстро и дёшево",
                      "Личная визитка с контактами",
                      "Лендинг для рекламной кампании (не SEO)",
                      "Бюджет ограничен, и лучше что-то, чем ничего",
                      "Сайт-событие на 1–2 месяца",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    background: "rgba(255,100,100,0.05)",
                    border: "1px solid rgba(255,100,100,0.15)",
                  }}
                >
                  <h3 className="font-semibold text-red-400 mb-3">
                    Нужен разработчик, если:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {[
                      "Сайт должен приносить клиентов из Google/Яндекс",
                      "Нужна уникальная функциональность или интеграции",
                      "Важны скорость и Core Web Vitals",
                      "Работаете с персональными данными клиентов",
                      "Планируете развивать сайт годами",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Частые вопросы</h2>
              <div className="space-y-4">
                {faq.map((item) => (
                  <div
                    key={item.q}
                    className="p-5 rounded-2xl"
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                      background: "rgba(255,255,255,0.025)",
                    }}
                  >
                    <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Итог */}
          <div
            className="mt-14 p-6 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h2 className="text-xl font-bold text-white mb-3">Итог</h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Создать сайт сейчас действительно просто. Но «сделал сайт» и «сайт работает» —
              это разные вещи. Конструктор даёт инструмент. Профессиональные знания —
              HTML-семантику, оптимизацию скорости, техническое SEO, безопасность, UX — никто
              не отменял. Они просто теперь нужны не для того, чтобы запустить сайт,
              а для того, чтобы он был заметен, быстр и конвертировал посетителей в клиентов.
            </p>
          </div>

          {/* CTA */}
          <div
            className="mt-10 p-8 sm:p-10 rounded-3xl text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,112,243,0.12), rgba(125,44,200,0.12))",
              border: "1px solid rgba(0,112,243,0.25)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              Нужен сайт, который реально работает?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Разрабатываю сайты и веб-приложения с фокусом на скорость, SEO и конверсию.
              Начнём с бесплатного аудита вашей текущей ситуации — даже если сайта ещё нет.
            </p>
            <a
              href="https://t.me/vitalyvronsky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #0070f3, #7d2cc8)",
                boxShadow: "0 0 32px rgba(0,112,243,0.4)",
              }}
            >
              Написать в Telegram →
            </a>
          </div>

          {/* Нижняя навигация */}
          <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap gap-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              На главную
            </Link>
            <Link
              href="/blog/avtomatizaciya-biznesa"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
            >
              Читать: автоматизация бизнеса
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

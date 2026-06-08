import type { Metadata } from "next";
import Link from "next/link";

const PUBLISHED = "2026-06-08";
const URL_PATH = "/blog/avtomatizaciya-biznesa";
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`;

export const metadata: Metadata = {
  title:
    "Автоматизация бизнеса: как убрать рутину и сосредоточиться на росте | Виталий Вронский",
  description:
    "Что такое автоматизация бизнес-процессов, что можно автоматизировать прямо сейчас — от приёма заявок до аналитики. Реальные инструменты, примеры и пошаговый старт.",
  metadataBase: new URL("https://vitalyvronsky.ru"),
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: "article",
    url: FULL_URL,
    title: "Автоматизация бизнеса: как убрать рутину и сосредоточиться на росте",
    description:
      "Что можно автоматизировать прямо сейчас — реальные инструменты, примеры и с чего начать.",
    locale: "ru_RU",
    siteName: "Виталий Вронский",
    publishedTime: `${PUBLISHED}T00:00:00Z`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Автоматизация бизнеса: как убрать рутину",
    description: "Что можно автоматизировать прямо сейчас — реальные инструменты и примеры.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Автоматизация бизнеса: как убрать рутину и сосредоточиться на росте",
  description:
    "Что такое автоматизация бизнес-процессов, что можно автоматизировать прямо сейчас — от приёма заявок до аналитики.",
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
    "автоматизация бизнеса, автоматизация бизнес-процессов, убрать рутину, бизнес-автоматизация Москва",
};

const automationBlocks = [
  {
    icon: "💬",
    title: "Коммуникация с клиентами",
    items: [
      "Ответы на типовые вопросы через Telegram-бота или чат на сайте",
      "Приём заявок 24/7 без участия менеджера",
      "Напоминания об оплате, встрече, окончании услуги",
      "Подтверждение записи и уведомления о статусе заказа",
    ],
  },
  {
    icon: "📋",
    title: "Обработка данных и заявок",
    items: [
      "Автоматическая запись заявок с сайта в CRM или таблицу",
      "Сортировка и распределение лидов по менеджерам",
      "Формирование договоров и счётов по шаблону",
      "Перенос данных между сервисами без копипасты",
    ],
  },
  {
    icon: "📊",
    title: "Аналитика и отчётность",
    items: [
      "Ежедневные отчёты по продажам — автоматически в Telegram",
      "Мониторинг KPI без ручного сбора данных",
      "Уведомления при достижении или падении ключевых показателей",
    ],
  },
  {
    icon: "🤖",
    title: "AI-задачи",
    items: [
      "Классификация входящих сообщений и запросов",
      "Генерация черновиков ответов и документов",
      "Анализ отзывов и обратной связи",
      "Умный поиск по базе знаний компании",
    ],
  },
];

const tools = [
  {
    name: "n8n",
    level: "Средний",
    desc: "Мощный self-hosted инструмент автоматизации. Размещается на своём сервере, бесплатно. Подходит для сложных сценариев с условиями и ветвлениями.",
  },
  {
    name: "Make (Integromat)",
    level: "Простой",
    desc: "Визуальный конструктор автоматизаций. Простой интерфейс, сотни готовых интеграций. Хорошо для быстрого старта без кода.",
  },
  {
    name: "Telegram Bot API",
    level: "Разработка",
    desc: "Основа для Telegram-ботов. Принимают заявки, отвечают на вопросы, отправляют уведомления — 24/7 без выходных.",
  },
  {
    name: "OpenAI / Claude API",
    level: "Разработка",
    desc: "ИИ-ядро для умных ботов и ассистентов. Понимает свободный текст, классифицирует запросы, генерирует ответы.",
  },
  {
    name: "Claude Code",
    level: "ИИ-агент",
    desc: "ИИ-агент для разработки и автоматизации. Пишет скрипты, настраивает интеграции и решает технические задачи по описанию на русском языке.",
  },
];

const steps = [
  {
    n: "01",
    title: "Найдите самую болезненную рутину",
    desc: "Запишите всё, что делаете руками больше одного раза в день. Начните с того, что отнимает больше всего времени или сил — это первый кандидат на автоматизацию.",
  },
  {
    n: "02",
    title: "Опишите процесс как алгоритм",
    desc: "Пропишите шаги: при каком условии запускается задача, какие данные нужны, что должно произойти в конце. Если вы можете описать это словами — это можно автоматизировать.",
  },
  {
    n: "03",
    title: "Выберите инструмент или обратитесь к специалисту",
    desc: "Простые сценарии — попробуйте Make или n8n самостоятельно. Нужен кастомный бот, AI-ассистент или сложная интеграция — имеет смысл привлечь разработчика, чтобы сделать всё правильно с первого раза.",
  },
];

const faq = [
  {
    q: "Нужно ли знать программирование для автоматизации?",
    a: "Базовые сценарии — отправка уведомлений, сбор заявок, интеграции между сервисами — настраиваются в no-code инструментах (Make, n8n) без кода. Сложные задачи: кастомные боты, AI-агенты, нестандартные интеграции — требуют разработки.",
  },
  {
    q: "Сколько стоит автоматизация бизнес-процессов?",
    a: "Зависит от сложности. Простой Telegram-бот для приёма заявок — от 15 000 ₽. Полноценная система с AI-ассистентом и интеграциями — от 80 000 ₽. Стоимость быстро окупается: один бот заменяет 4–8 часов ручной работы в день.",
  },
  {
    q: "С чего начать, если у меня небольшой бизнес?",
    a: "Выберите одну точку боли — то, что отнимает больше всего времени. Обычно это обработка заявок или ответы на типовые вопросы. Автоматизируйте именно это. Почувствуете эффект — двигайтесь дальше.",
  },
  {
    q: "Как автоматизация влияет на качество общения с клиентами?",
    a: "При грамотной настройке — улучшает. Клиент получает мгновенный ответ в любое время суток, а не ждёт до утра. Сложные вопросы бот передаёт человеку. Скорость реакции сама по себе повышает лояльность.",
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
        {/* Фон */}
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
          className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(125,44,200,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
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
                  border: "1px solid rgba(125,44,200,0.35)",
                  background: "rgba(125,44,200,0.1)",
                  color: "#c084fc",
                }}
              >
                Автоматизация
              </span>
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500">
                {publishedFormatted}
              </span>
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500">
                10 мин чтения
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Автоматизация бизнеса: как убрать рутину и{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7d2cc8, #0070f3, #00d4ff)",
                }}
              >
                сосредоточиться на росте
              </span>
            </h1>

            <p className="text-lg text-gray-400 leading-relaxed">
              Разбираю, что такое автоматизация бизнес-процессов, что реально можно
              автоматизировать прямо сейчас и с чего начать — даже если у вас небольшой бизнес.
            </p>
          </header>

          {/* Тело статьи */}
          <article className="space-y-14 text-gray-300 leading-relaxed">

            {/* Проблема */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Почему рутина убивает рост
              </h2>
              <p className="mb-4">
                Типичный день предпринимателя: утром проверить входящие заявки, ответить на
                одни и те же вопросы в мессенджерах, вручную перенести данные из одной таблицы
                в другую, напомнить клиенту об оплате, составить отчёт. И это ещё до того, как
                вы занялись чем-то, что реально двигает бизнес.
              </p>
              <p className="mb-6">
                Владельцы малого и среднего бизнеса тратят{" "}
                <strong className="text-white">от 4 до 6 часов в день</strong> на задачи,
                которые можно автоматизировать. Это половина рабочего дня — не на стратегию,
                не на клиентов, не на продукт.
              </p>
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(125,44,200,0.08)",
                  border: "1px solid rgba(125,44,200,0.2)",
                }}
              >
                <p className="text-purple-200 font-medium leading-relaxed">
                  Автоматизация — это не про то, чтобы заменить людей. Это про то, чтобы люди
                  делали то, что требует их участия, а машины — всё остальное.
                </p>
              </div>
            </section>

            {/* Что такое автоматизация */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Что такое автоматизация бизнес-процессов
              </h2>
              <p className="mb-4">
                Автоматизация бизнес-процессов — это перенос повторяющихся задач с человека на
                программу. Вместо того чтобы кто-то вручную копировал данные из формы в CRM,
                программа делает это за секунду. Вместо менеджера, который отвечает на
                «сколько стоит» в час ночи, — бот, который ответит за 3 секунды.
              </p>
              <p>
                Главный принцип: если задача выполняется по одному и тому же алгоритму больше
                двух раз — её можно и нужно автоматизировать.
              </p>
            </section>

            {/* Что автоматизировать */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">
                Что можно автоматизировать прямо сейчас
              </h2>
              <div className="space-y-4">
                {automationBlocks.map((block) => (
                  <div
                    key={block.title}
                    className="p-6 rounded-2xl"
                    style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">{block.icon}</span>
                      <h3 className="text-base font-semibold text-white">{block.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <span className="text-purple-400 mt-0.5 shrink-0">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Инструменты */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Инструменты автоматизации
              </h2>
              <p className="mb-6">
                Хорошая новость: большинство сценариев не требует написания кода с нуля. Есть
                готовые инструменты для разного уровня сложности.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-5 rounded-2xl"
                    style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)" }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-white">{tool.name}</h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full shrink-0"
                        style={{
                          background: "rgba(125,44,200,0.15)",
                          border: "1px solid rgba(125,44,200,0.3)",
                          color: "#c084fc",
                        }}
                      >
                        {tool.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Inline CTA */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl"
              style={{
                background: "rgba(125,44,200,0.07)",
                border: "1px solid rgba(125,44,200,0.2)",
              }}
            >
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">
                  Не знаете, с чего начать автоматизацию?
                </p>
                <p className="text-sm text-gray-400">
                  Напишите мне — разберём вашу задачу и найдём решение. Бесплатно.
                </p>
              </div>
              <a
                href="https://t.me/vitalyvronsky"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #7d2cc8, #0070f3)" }}
              >
                Написать →
              </a>
            </div>

            {/* Как начать */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Как начать: 3 шага</h2>
              <div className="space-y-5">
                {steps.map((step) => (
                  <div key={step.n} className="flex gap-5">
                    <div
                      className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #7d2cc8, #0070f3)" }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
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
                    style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)" }}
                  >
                    <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* CTA */}
          <div
            className="mt-16 p-8 sm:p-10 rounded-3xl text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(125,44,200,0.12), rgba(0,112,243,0.12))",
              border: "1px solid rgba(125,44,200,0.25)",
            }}
          >
            <h2 className="text-2xl font-bold text-white mb-3">
              Хотите автоматизировать свой бизнес?
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Разберём ваши процессы, найдём точки роста и предложим конкретное решение —
              бесплатно.
            </p>
            <a
              href="https://t.me/vitalyvronsky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7d2cc8, #0070f3)",
                boxShadow: "0 0 32px rgba(125,44,200,0.4)",
              }}
            >
              Написать в Telegram →
            </a>
          </div>

          {/* Нижняя навигация */}
          <div className="mt-12 pt-8 border-t border-white/8">
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
          </div>
        </div>
      </main>
    </>
  );
}

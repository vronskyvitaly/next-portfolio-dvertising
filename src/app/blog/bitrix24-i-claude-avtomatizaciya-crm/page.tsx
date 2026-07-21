import type { Metadata } from 'next'
import Link from 'next/link'

const PUBLISHED = '2026-07-21'
const URL_PATH = '/blog/bitrix24-i-claude-avtomatizaciya-crm'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`

export const metadata: Metadata = {
  title:
    'Автоматизация Bitrix24 с Claude: CRM, задачи и дизайн без программиста | Виталий Вронский',
  description:
    'Как подключить Claude к Bitrix24 через MCP-сервер, автоматизировать сделки и задачи через Claude Code и создавать UI для сотрудников через Claude Design. Практическое руководство.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: 'article',
    url: FULL_URL,
    title: 'Автоматизация Bitrix24 с Claude: CRM работает сама',
    description:
      'MCP-сервер, Claude Code и Claude Design — три способа подключить ИИ к Bitrix24. Без программиста, за неделю.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Автоматизация Bitrix24 с Claude: CRM работает сама',
    description:
      'MCP-сервер, Claude Code и Claude Design — три способа подключить ИИ к Bitrix24.'
  },
  robots: { index: true, follow: true }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline:
    'Автоматизация Bitrix24 с Claude: CRM, задачи и дизайн без программиста',
  description:
    'Как подключить Claude к Bitrix24 через MCP-сервер, автоматизировать сделки и задачи через Claude Code и создавать UI для сотрудников через Claude Design.',
  author: {
    '@type': 'Person',
    name: 'Виталий Вронский',
    url: 'https://vitalyvronsky.ru'
  },
  publisher: {
    '@type': 'Person',
    name: 'Виталий Вронский',
    url: 'https://vitalyvronsky.ru'
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: FULL_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': FULL_URL },
  inLanguage: 'ru',
  keywords:
    'Bitrix24 Claude, автоматизация CRM, Claude Code Bitrix, MCP сервер Битрикс, Claude Design интерфейс'
}

const methods = [
  {
    n: '01',
    label: 'MCP-сервер',
    title: 'MCP-сервер — подключение за 10 минут',
    icon: '⚡',
    desc: 'Готовый протокол без написания кода. Устанавливаете MCP-сервер — и Claude сразу умеет читать и создавать сделки, лиды, задачи.'
  },
  {
    n: '02',
    label: 'Claude Code',
    title: 'Claude Code + REST API — кастомная интеграция',
    icon: '🛠',
    desc: 'Для нестандартных сценариев: Telegram-бот → сделка в CRM, заявка с сайта → автолид. Claude Code пишет скрипт по описанию на русском.'
  },
  {
    n: '03',
    label: 'Claude Design',
    title: 'Claude Design — UI для сотрудников',
    icon: '🎨',
    desc: 'Генерирует готовые прототипы форм, дашбордов и отчётов под ваш Bitrix24. Экспорт в код — разработчику остаётся минимум работы.'
  }
]

const faq = [
  {
    q: 'Нужен ли программист для подключения MCP-сервера?',
    a: 'Для облачного Bitrix24 — нет. Официальный MCP от Bitrix24 подключается через настройки аккаунта за несколько кликов. Для коробочной версии или кастомных сценариев нужна минимальная техническая помощь: установка сервера и настройка webhook занимает около часа.'
  },
  {
    q: 'Работает ли с облачным и коробочным Bitrix24?',
    a: 'Да. Официальный MCP Bitrix24 поддерживает обе версии. Сторонний bit2beat/bitrix24-mcp также совместим с cloud и on-premise. При работе через REST API разницы нет — методы одинаковые.'
  },
  {
    q: 'Сколько стоит внедрение?',
    a: 'Базовое подключение MCP и настройка сценариев — от 15 000 ₽. Кастомная интеграция (бот, парсинг заявок, сложная логика) — от 40 000 ₽. Прототип UI через Claude Design — от 20 000 ₽. Всё обсуждается до старта, смет без сюрпризов.'
  },
  {
    q: 'Безопасно ли передавать данные CRM в Claude?',
    a: 'Данные обрабатываются в рамках вашей сессии и не используются для обучения модели (при использовании API или Claude for Work). Для особо чувствительных данных рекомендуется настроить MCP только с нужными разделами CRM и использовать корпоративный аккаунт Anthropic с соглашением DPA.'
  }
]

const startSteps = [
  {
    n: '01',
    title: 'Определить задачу',
    desc: 'Найдите процесс, который отнимает больше всего времени у менеджеров. Чаще всего это ручной ввод сделок, составление отчётов или ответы на типовые вопросы клиентов — хорошие кандидаты для первого пилота.'
  },
  {
    n: '02',
    title: 'Выбрать способ',
    desc: 'MCP — если нужен быстрый старт и типовые сценарии. Claude Code — если требуется интеграция с внешними системами. Claude Design — если команде нужны удобные формы и дашборды, которых нет в стандартном Bitrix24.'
  },
  {
    n: '03',
    title: 'Запустить пилот за неделю',
    desc: 'Один процесс, один инструмент, одна команда. Неделя достаточно, чтобы увидеть реальный эффект — сколько времени освободилось, какие ошибки ушли. После этого масштабировать проще и осознаннее.'
  }
]

export default function Page() {
  const publishedFormatted = new Date(PUBLISHED).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen bg-[#0a0a0a] text-white'>
        {/* Фон */}
        <div
          aria-hidden='true'
          className='fixed inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div
          aria-hidden='true'
          className='fixed top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(251,146,60,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        <div className='relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-24'>
          {/* Назад */}
          <Link
            href='/'
            className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-12'
          >
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
              <path
                d='M10 12L6 8l4-4'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            На главную
          </Link>

          {/* Шапка статьи */}
          <header className='mb-12'>
            <div className='flex flex-wrap gap-2 mb-6'>
              <span
                className='text-xs px-3 py-1 rounded-full'
                style={{
                  border: '1px solid rgba(251,146,60,0.35)',
                  background: 'rgba(251,146,60,0.1)',
                  color: '#fb923c'
                }}
              >
                Автоматизация CRM
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                9 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Bitrix24 и Claude: CRM работает{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #fb923c, #f59e0b)'
                }}
              >
                сама
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Разбираю три способа подключить Claude к Bitrix24 — от
              десятиминутного MCP-сервера до кастомных интеграций на Claude Code
              и генерации внутренних интерфейсов через Claude Design.
            </p>
          </header>

          {/* Тело статьи */}
          <article className='space-y-14 text-gray-300 leading-relaxed'>
            {/* Зачем Claude + Bitrix24 */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Зачем вообще Claude + Bitrix24
              </h2>
              <p className='mb-4'>
                Менеджеры по продажам тратят{' '}
                <strong className='text-white'>2–3 часа в день</strong> на
                ручной ввод данных в CRM: создают сделки, переносят контакты,
                пишут комментарии к звонкам, обновляют статусы. Это не их
                работа — это операционный балласт, который съедает время,
                которое должно идти на продажи.
              </p>
              <p className='mb-6'>
                Claude — языковая модель, которая умеет читать задачи на русском
                и выполнять их через API. Когда её подключают к Bitrix24, она
                начинает понимать команды вроде «создай сделку на 200 000 ₽ для
                ООО Альфа, статус — Переговоры» и сразу выполняет их без
                участия менеджера.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(251,146,60,0.08)',
                  border: '1px solid rgba(251,146,60,0.2)'
                }}
              >
                <p className='text-orange-200 font-medium leading-relaxed'>
                  Не «ИИ-консультант, который советует». А инструмент, который
                  делает — прямо в вашей CRM, прямо сейчас.
                </p>
              </div>
            </section>

            {/* Три способа */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-2'>
                Три способа подключить Claude к Bitrix24
              </h2>
              <p className='text-gray-500 mb-6 text-sm'>
                Выбор зависит от задачи и технической подготовки команды
              </p>
              <div className='grid sm:grid-cols-3 gap-4 mb-8'>
                {methods.map(m => (
                  <div
                    key={m.n}
                    className='p-5 rounded-2xl flex flex-col gap-3'
                    style={{
                      border: '1px solid rgba(251,146,60,0.15)',
                      background: 'rgba(251,146,60,0.04)'
                    }}
                  >
                    <span className='text-2xl'>{m.icon}</span>
                    <div>
                      <p className='text-xs text-orange-400 font-mono mb-1'>
                        {m.label}
                      </p>
                      <p className='text-sm font-semibold text-white leading-snug'>
                        {m.title}
                      </p>
                    </div>
                    <p className='text-xs text-gray-500 leading-relaxed'>
                      {m.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Способ 1 — MCP */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Способ 1: MCP-сервер — 10 минут без кода
              </h2>
              <p className='mb-4'>
                MCP (Model Context Protocol) — открытый стандарт от Anthropic,
                который позволяет Claude подключаться к внешним системам как к
                инструментам. Bitrix24 поддерживает MCP официально — описание
                есть в документации{' '}
                <span className='text-orange-400 font-mono text-sm'>
                  apidocs.bitrix24.ru/ai-tools/mcp.html
                </span>
                .
              </p>
              <p className='mb-6'>
                Также существует популярный сторонний пакет{' '}
                <span className='text-orange-400 font-mono text-sm'>
                  bit2beat/bitrix24-mcp
                </span>{' '}
                — он покрывает сделки, лиды, контакты, задачи, диск,
                уведомления и регулярно обновляется.
              </p>

              <div
                className='p-5 rounded-2xl mb-6'
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.025)'
                }}
              >
                <p className='text-xs uppercase tracking-widest text-gray-600 mb-3 font-mono'>
                  Пример диалога с Claude после подключения MCP
                </p>
                <div className='space-y-3'>
                  <div className='flex gap-3 items-start'>
                    <span
                      className='shrink-0 text-xs px-2 py-0.5 rounded font-mono'
                      style={{
                        background: 'rgba(251,146,60,0.15)',
                        color: '#fb923c'
                      }}
                    >
                      вы
                    </span>
                    <p className='text-sm text-gray-300'>
                      Создай сделку «Редизайн сайта» на 500 000 ₽ для контакта
                      Иван Петров, стадия — Переговоры.
                    </p>
                  </div>
                  <div className='flex gap-3 items-start'>
                    <span
                      className='shrink-0 text-xs px-2 py-0.5 rounded font-mono'
                      style={{
                        background: 'rgba(125,44,200,0.15)',
                        color: '#c084fc'
                      }}
                    >
                      claude
                    </span>
                    <p className='text-sm text-gray-400'>
                      Сделка создана. ID: 1842. Контакт Иван Петров привязан.
                      Стадия: Переговоры. Сумма: 500 000 ₽. Открыть в
                      Bitrix24?
                    </p>
                  </div>
                </div>
              </div>

              <p className='text-sm text-gray-400'>
                После подключения MCP-сервера менеджер диктует задачи Claude
                голосом или текстом — без форм, без кликов по меню.
              </p>
            </section>

            {/* Способ 2 — Claude Code */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Способ 2: Claude Code + REST API Bitrix24
              </h2>
              <p className='mb-4'>
                Claude Code — CLI-инструмент от Anthropic для разработки. Вы
                описываете задачу на русском языке, он пишет код, тестирует и
                разворачивает. Для интеграции с Bitrix24 через REST API это
                означает: один разговор с Claude Code — готовый рабочий скрипт.
              </p>
              <p className='mb-6'>
                Типичные сценарии: входящая заявка с сайта автоматически
                становится лидом в CRM, Telegram-бот создаёт сделку по
                сообщению клиента, Google Sheets синхронизируется с контактами
                Bitrix24.
              </p>

              <div className='space-y-4'>
                {[
                  {
                    scenario: 'Сайт → CRM',
                    desc: 'Форма заявки на сайте через webhook создаёт лид в Bitrix24 с UTM-метками и источником. Менеджер получает уведомление в Telegram.'
                  },
                  {
                    scenario: 'Telegram-бот → сделка',
                    desc: 'Клиент пишет в бот — Claude анализирует сообщение, определяет тип запроса и создаёт сделку или задачу нужному менеджеру.'
                  },
                  {
                    scenario: 'Отчёт → Sheets',
                    desc: 'Ежедневный скрипт выгружает воронку продаж из Bitrix24 в Google Sheets. Руководитель видит актуальные цифры без ручной выгрузки.'
                  }
                ].map(s => (
                  <div
                    key={s.scenario}
                    className='p-4 rounded-xl flex gap-4 items-start'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <span
                      className='shrink-0 text-xs px-2 py-1 rounded font-mono font-semibold'
                      style={{
                        background: 'rgba(251,146,60,0.15)',
                        color: '#fb923c'
                      }}
                    >
                      {s.scenario}
                    </span>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Inline CTA */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(251,146,60,0.07)',
                border: '1px solid rgba(251,146,60,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Нужна интеграция Bitrix24 + Claude под ваш бизнес?
                </p>
                <p className='text-sm text-gray-400'>
                  Обсудим задачу, выберем способ и запустим пилот за неделю.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #fb923c, #f59e0b)'
                }}
              >
                Написать →
              </a>
            </div>

            {/* Способ 3 — Claude Design */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Способ 3: Claude Design — UI для команды
              </h2>
              <p className='mb-4'>
                Claude Design — продукт Anthropic Labs, запущенный в апреле
                2026 года. Он генерирует полноценные UI-прототипы по текстовому
                описанию: формы, дашборды, карточки сущностей, отчёты.
              </p>
              <p className='mb-6'>
                Применительно к Bitrix24: многие компании хотят кастомный
                интерфейс для своих сотрудников — проще стандартного, заточенный
                под конкретный процесс. Claude Design создаёт такой прототип за
                минуты, экспортирует в код и передаёт разработчику, которому
                остаётся подключить реальный API.
              </p>

              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(251,146,60,0.08)',
                  border: '1px solid rgba(251,146,60,0.2)'
                }}
              >
                <p className='text-xs uppercase tracking-widest text-gray-600 mb-3 font-mono'>
                  Что можно сгенерировать
                </p>
                <div className='grid sm:grid-cols-2 gap-3'>
                  {[
                    'Форма быстрого создания лида для колл-центра',
                    'Дашборд воронки продаж с фильтрами по менеджерам',
                    'Карточка клиента с историей сделок и задач',
                    'Отчёт по конверсии этапов для руководителя'
                  ].map(item => (
                    <div
                      key={item}
                      className='flex items-start gap-2 text-sm text-gray-300'
                    >
                      <span className='text-orange-400 mt-0.5 shrink-0'>→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* С чего начать */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                С чего начать: 3 шага
              </h2>
              <div className='space-y-5'>
                {startSteps.map(step => (
                  <div key={step.n} className='flex gap-5'>
                    <div
                      className='shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white'
                      style={{
                        background: 'linear-gradient(135deg, #fb923c, #f59e0b)'
                      }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className='font-semibold text-white mb-1'>
                        {step.title}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые вопросы
              </h2>
              <div className='space-y-4'>
                {faq.map(item => (
                  <div
                    key={item.q}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <h3 className='font-semibold text-white mb-2'>{item.q}</h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* CTA */}
          <div
            className='mt-16 p-8 sm:p-10 rounded-3xl text-center'
            style={{
              background:
                'linear-gradient(135deg, rgba(251,146,60,0.12), rgba(245,158,11,0.12))',
              border: '1px solid rgba(251,146,60,0.25)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Хотите автоматизировать Bitrix24 с Claude?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Обсудим задачу, выберем подходящий способ и запустим пилот за
              неделю. Работаю по договору.
            </p>
            <a
              href='https://t.me/vitalyvronsky'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
              style={{
                background: 'linear-gradient(135deg, #fb923c, #f59e0b)',
                boxShadow: '0 0 32px rgba(251,146,60,0.4)'
              }}
            >
              Написать в Telegram →
            </a>
          </div>

          {/* Нижняя навигация */}
          <div className='mt-12 pt-8 border-t border-white/8'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors'
            >
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M10 12L6 8l4-4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              На главную
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

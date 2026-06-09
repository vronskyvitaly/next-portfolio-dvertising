import type { Metadata } from 'next'
import Link from 'next/link'

const PUBLISHED = '2026-06-08'
const URL_PATH = '/blog/kak-ustanovit-claude-code'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`

export const metadata: Metadata = {
  title:
    'Как установить Claude Code и начать работать: простая инструкция | Виталий Вронский',
  description:
    'Пошаговая инструкция по установке Claude Code для Mac, Windows и Linux. Простым языком, без технических терминов — от скачивания до первого запуска.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: 'article',
    url: FULL_URL,
    title: 'Как установить Claude Code и начать работать: простая инструкция',
    description:
      'Пошаговая инструкция по установке Claude Code для Mac, Windows и Linux. Без технических терминов.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Как установить Claude Code: простая инструкция',
    description:
      'Пошаговая инструкция для Mac, Windows и Linux. Без технических терминов.'
  },
  robots: { index: true, follow: true }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Как установить Claude Code и начать работать: простая инструкция',
  description:
    'Пошаговая инструкция по установке Claude Code для Mac, Windows и Linux. Простым языком, без технических терминов.',
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
    'установить claude code, claude code инструкция, claude code для начинающих, как пользоваться claude code'
}

const faq = [
  {
    q: 'Claude Code платный?',
    a: 'Да — нужна подписка Claude Pro ($20/месяц) или API-ключ с оплатой по факту. Есть бесплатный пробный период. Для большинства задач API-ключ с оплатой за токены выходит дешевле подписки.'
  },
  {
    q: 'Нужно ли знать программирование, чтобы пользоваться Claude Code?',
    a: 'Не обязательно. Claude Code понимает обычный язык — вы просто описываете задачу, он разбирается, что нужно сделать. Но базовое понимание того, что такое файлы и папки, не помешает.'
  },
  {
    q: 'На каких языках можно общаться с Claude Code?',
    a: 'На любых — он отлично понимает русский. Можно писать запросы полностью на русском языке.'
  },
  {
    q: 'Claude Code портит файлы?',
    a: 'Перед изменениями он всегда показывает, что собирается сделать, и просит подтверждение. Если работаете с важными файлами — сделайте бэкап или используйте Git, тогда любое изменение можно откатить.'
  },
  {
    q: 'Чем Claude Code отличается от обычного Claude на сайте?',
    a: 'Claude на сайте — это чат в браузере. Claude Code работает прямо в вашем компьютере: видит файлы, папки, может их менять, запускать команды. Это полноценный помощник для работы с проектами.'
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
          className='fixed top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 70%)',
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

          {/* Шапка */}
          <header className='mb-12'>
            <div className='flex flex-wrap gap-2 mb-6'>
              <span
                className='text-xs px-3 py-1 rounded-full'
                style={{
                  border: '1px solid rgba(0,112,243,0.35)',
                  background: 'rgba(0,112,243,0.1)',
                  color: '#60a5fa'
                }}
              >
                Инструменты
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                7 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Как установить Claude Code{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #0070f3, #00d4ff, #7d2cc8)'
                }}
              >
                и начать работать
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Простая инструкция для тех, кто слышал про Claude Code, но не
              знает с чего начать. Никакого сложного языка — только шаги и
              результат.
            </p>
          </header>

          <article className='space-y-14 text-gray-300 leading-relaxed'>
            {/* Что это такое */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что такое Claude Code простыми словами
              </h2>
              <p className='mb-4'>
                Представьте, что у вас есть очень умный помощник, которому можно
                написать на русском:{' '}
                <em className='text-gray-200'>
                  «создай мне таблицу с данными»
                </em>
                , <em className='text-gray-200'>«найди ошибку в этом коде»</em>{' '}
                или{' '}
                <em className='text-gray-200'>
                  «переименуй все файлы в папке по порядку»
                </em>{' '}
                — и он просто это сделает.
              </p>
              <p className='mb-4'>
                Claude Code — это ИИ-помощник от Anthropic, который работает
                прямо в вашем компьютере через терминал (командную строку). В
                отличие от обычного чата в браузере, он видит ваши файлы и
                папки, может их редактировать, создавать новые, запускать
                программы.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(0,112,243,0.08)',
                  border: '1px solid rgba(0,112,243,0.2)'
                }}
              >
                <p className='text-blue-200 font-medium leading-relaxed'>
                  Вы просто пишете задачу на человеческом языке — Claude Code
                  сам разбирается, какие команды нужно выполнить, и делает это
                  за вас.
                </p>
              </div>
            </section>

            {/* Что нужно */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что нужно перед установкой
              </h2>
              <div className='space-y-3'>
                {[
                  {
                    icon: '💻',
                    title: 'Компьютер',
                    desc: 'Mac, Windows или Linux. Работает на всех трёх.'
                  },
                  {
                    icon: '🔑',
                    title: 'Аккаунт Anthropic',
                    desc: 'Регистрация бесплатна на claude.ai. Для работы понадобится подписка Claude Pro ($20/мес) или API-ключ.'
                  },
                  {
                    icon: '📦',
                    title: 'Node.js версии 18 или выше',
                    desc: 'Это среда, в которой работает Claude Code. Скачивается бесплатно с nodejs.org — один раз и навсегда.'
                  }
                ].map(item => (
                  <div
                    key={item.title}
                    className='flex gap-4 p-4 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <span className='text-2xl shrink-0'>{item.icon}</span>
                    <div>
                      <p className='font-semibold text-white mb-0.5'>
                        {item.title}
                      </p>
                      <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Установка */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-2'>
                Установка — шаг за шагом
              </h2>
              <p className='text-gray-400 mb-6'>
                Выберите свою операционную систему:
              </p>

              {/* Mac */}
              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                  <span>🍎</span> Mac (рекомендуется)
                </h3>
                <p className='text-sm text-gray-400 mb-3'>
                  Откройте приложение{' '}
                  <strong className='text-gray-200'>Терминал</strong> (найдите
                  через Spotlight — ⌘+Пробел, напишите «Терминал»). Вставьте эту
                  команду и нажмите Enter:
                </p>
                <div
                  className='p-4 rounded-xl font-mono text-sm text-green-300 overflow-x-auto'
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  curl -fsSL https://claude.ai/install.sh | bash
                </div>
                <p className='text-sm text-gray-500 mt-2'>
                  Или через Homebrew, если он у вас установлен:
                </p>
                <div
                  className='p-4 rounded-xl font-mono text-sm text-green-300 overflow-x-auto mt-2'
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  brew install --cask claude-code
                </div>
              </div>

              {/* Windows */}
              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                  <span>🪟</span> Windows (рекомендуется)
                </h3>
                <p className='text-sm text-gray-400 mb-3'>
                  Откройте <strong className='text-gray-200'>PowerShell</strong>{' '}
                  от имени администратора (правая кнопка на меню Пуск → «Windows
                  PowerShell (администратор)»). Вставьте и нажмите Enter:
                </p>
                <div
                  className='p-4 rounded-xl font-mono text-sm text-green-300 overflow-x-auto'
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  irm https://claude.ai/install.ps1 | iex
                </div>
                <p className='text-sm text-gray-500 mt-2'>Или через WinGet:</p>
                <div
                  className='p-4 rounded-xl font-mono text-sm text-green-300 overflow-x-auto mt-2'
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  winget install Anthropic.ClaudeCode
                </div>
              </div>

              {/* Linux */}
              <div className='mb-6'>
                <h3 className='text-lg font-semibold text-white mb-3 flex items-center gap-2'>
                  <span>🐧</span> Linux
                </h3>
                <p className='text-sm text-gray-400 mb-3'>
                  Откройте терминал и выполните:
                </p>
                <div
                  className='p-4 rounded-xl font-mono text-sm text-green-300 overflow-x-auto'
                  style={{
                    background: 'rgba(0,0,0,0.6)',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  curl -fsSL https://claude.ai/install.sh | bash
                </div>
              </div>

              <div
                className='p-4 rounded-xl text-sm'
                style={{
                  background: 'rgba(125,44,200,0.08)',
                  border: '1px solid rgba(125,44,200,0.2)'
                }}
              >
                <p className='text-purple-200'>
                  💡 После установки закройте терминал и откройте заново — чтобы
                  изменения вступили в силу.
                </p>
              </div>
            </section>

            {/* Первый запуск */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Первый запуск
              </h2>
              <div className='space-y-5'>
                {[
                  {
                    n: '01',
                    title: 'Откройте терминал и перейдите в папку с проектом',
                    desc: (
                      <>
                        Напишите{' '}
                        <code
                          className='px-1.5 py-0.5 rounded text-xs font-mono'
                          style={{
                            background: 'rgba(255,255,255,0.08)',
                            color: '#c084fc'
                          }}
                        >
                          cd путь/к/папке
                        </code>{' '}
                        или просто перетащите папку на иконку терминала — он сам
                        откроется в нужном месте. Можно запустить и без папки —
                        Claude Code будет работать в текущей директории.
                      </>
                    )
                  },
                  {
                    n: '02',
                    title: 'Введите команду claude',
                    desc: (
                      <>
                        Напишите в терминале{' '}
                        <code
                          className='px-1.5 py-0.5 rounded text-xs font-mono'
                          style={{
                            background: 'rgba(255,255,255,0.08)',
                            color: '#c084fc'
                          }}
                        >
                          claude
                        </code>{' '}
                        и нажмите Enter. При первом запуске он попросит войти в
                        аккаунт Anthropic — следуйте инструкциям на экране.
                      </>
                    )
                  },
                  {
                    n: '03',
                    title: 'Напишите первую задачу',
                    desc: 'Появится строка для ввода. Пишите задачу на русском — как обычному человеку. Claude Code прочитает папку, разберётся в контексте и начнёт помогать.'
                  }
                ].map(step => (
                  <div key={step.n} className='flex gap-5'>
                    <div
                      className='shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white'
                      style={{
                        background: 'linear-gradient(135deg, #0070f3, #7d2cc8)'
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

            {/* Inline CTA */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(0,112,243,0.07)',
                border: '1px solid rgba(0,112,243,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Что-то пошло не так при установке?
                </p>
                <p className='text-sm text-gray-400'>
                  Напишите мне — помогу разобраться быстро и без лишних слов.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #0070f3, #7d2cc8)'
                }}
              >
                Написать →
              </a>
            </div>

            {/* Примеры */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что можно попросить — примеры
              </h2>
              <p className='mb-6'>
                Просто пишите задачу в свободной форме. Вот несколько примеров
                того, что Claude Code умеет делать:
              </p>
              <div className='space-y-3'>
                {[
                  {
                    ask: 'Объясни, что делает этот код',
                    result: 'Читает файлы в папке и объясняет простыми словами'
                  },
                  {
                    ask: 'Найди все ошибки и исправь их',
                    result:
                      'Находит баги, показывает что именно менять, спрашивает разрешения'
                  },
                  {
                    ask: 'Создай README файл для этого проекта',
                    result: 'Изучает папку и пишет описание автоматически'
                  },
                  {
                    ask: 'Переименуй все картинки в формат photo-001, photo-002...',
                    result: 'Выполняет переименование всех файлов по шаблону'
                  },
                  {
                    ask: 'Сделай коммит с понятным описанием изменений',
                    result: 'Анализирует изменения и создаёт git-коммит'
                  }
                ].map(ex => (
                  <div
                    key={ex.ask}
                    className='p-4 rounded-xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <p className='text-sm font-mono text-purple-300 mb-1'>
                      &gt; {ex.ask}
                    </p>
                    <p className='text-xs text-gray-500'>→ {ex.result}</p>
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
                'linear-gradient(135deg, rgba(0,112,243,0.12), rgba(125,44,200,0.12))',
              border: '1px solid rgba(0,112,243,0.25)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Нужна помощь с настройкой или автоматизацией?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Помогу настроить Claude Code под ваши задачи или автоматизировать
              бизнес-процессы с нуля.
            </p>
            <a
              href='https://t.me/vitalyvronsky'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
              style={{
                background: 'linear-gradient(135deg, #0070f3, #7d2cc8)',
                boxShadow: '0 0 32px rgba(0,112,243,0.4)'
              }}
            >
              Написать в Telegram →
            </a>
          </div>

          {/* Нижняя навигация */}
          <div className='mt-12 pt-8 border-t border-white/8 flex flex-wrap gap-6'>
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
            <Link
              href='/blog/avtomatizaciya-biznesa'
              className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors'
            >
              Читать: автоматизация бизнеса
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M6 4l4 4-4 4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

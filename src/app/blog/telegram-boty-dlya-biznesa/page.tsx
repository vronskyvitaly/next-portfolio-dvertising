import type { Metadata } from 'next'
import Link from 'next/link'

const PUBLISHED = '2026-07-07'
const URL_PATH = '/blog/telegram-boty-dlya-biznesa'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`

export const metadata: Metadata = {
  title:
    'Telegram-бот для бизнеса: как он продаёт и обслуживает клиентов 24/7 | Виталий Вронский',
  description:
    'Что умеет Telegram-бот для бизнеса, какие задачи он решает — приём заявок, продажи, поддержка клиентов, уведомления. Примеры, стоимость и с чего начать.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: 'article',
    url: FULL_URL,
    title: 'Telegram-бот для бизнеса: продажи и поддержка 24/7',
    description:
      'Что умеет Telegram-бот, какие задачи решает и сколько стоит. Реальные примеры.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telegram-бот для бизнеса: продажи и поддержка 24/7',
    description:
      'Что умеет Telegram-бот, какие задачи решает и сколько стоит.'
  },
  robots: { index: true, follow: true }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Telegram-бот для бизнеса: как он продаёт и обслуживает клиентов 24/7',
  description:
    'Что умеет Telegram-бот для бизнеса, какие задачи он решает — приём заявок, продажи, поддержка клиентов, уведомления.',
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
    'Telegram-бот для бизнеса, разработка Telegram-бота, бот для продаж, чат-бот для клиентов, Telegram автоматизация'
}

const useCases = [
  {
    icon: '📥',
    title: 'Приём заявок',
    items: [
      'Принимает заявки с сайта, рекламы и мессенджеров в любое время суток',
      'Уточняет детали у клиента без участия менеджера',
      'Передаёт готовую заявку в CRM или Telegram-группу команды',
      'Подтверждает получение и сообщает срок ответа'
    ]
  },
  {
    icon: '💰',
    title: 'Продажи и оплата',
    items: [
      'Показывает каталог, тарифы и описания услуг',
      'Отвечает на типовые вопросы о цене, сроках и условиях',
      'Принимает оплату через Telegram Payments или ссылку на эквайринг',
      'Выдаёт чек и отправляет инструкции после оплаты'
    ]
  },
  {
    icon: '🔔',
    title: 'Уведомления и напоминания',
    items: [
      'Напоминает о предстоящей записи или встрече',
      'Уведомляет об изменении статуса заказа',
      'Отправляет счёт и напоминает об оплате',
      'Информирует об акциях и новых услугах'
    ]
  },
  {
    icon: '🤖',
    title: 'Поддержка с ИИ',
    items: [
      'Отвечает на вопросы по базе знаний компании',
      'Классифицирует обращения и передаёт сложные случаи живому сотруднику',
      'Помогает клиенту выбрать нужную услугу через диалог',
      'Собирает обратную связь после завершения работы'
    ]
  }
]

const steps = [
  {
    n: '01',
    title: 'Разбор задачи',
    desc: 'Определяем, какую боль бот должен закрыть в первую очередь — приём заявок, продажи, поддержка или уведомления. Один хорошо настроенный сценарий лучше десяти плохо работающих.'
  },
  {
    n: '02',
    title: 'Сценарий и логика',
    desc: 'Прописываем диалоговые ветки, условия, интеграции. Если нужен ИИ — подключаем GPT или Claude API. Результат — понятная схема, которую вы согласовываете.'
  },
  {
    n: '03',
    title: 'Разработка и тестирование',
    desc: 'Пишем бота на Python или Node.js, подключаем нужные сервисы: CRM, Google Sheets, платёжная система, уведомления. Тестируем все ветки сценария.'
  },
  {
    n: '04',
    title: 'Запуск и поддержка',
    desc: 'Разворачиваем на сервере, настраиваем мониторинг. Обучаем вас управлять ботом. При необходимости — развиваем функционал.'
  }
]

const faq = [
  {
    q: 'Сколько стоит разработка Telegram-бота?',
    a: 'Простой бот для приёма заявок — от 15 000 ₽. Бот с ИИ, оплатой и CRM-интеграцией — от 50 000 ₽. Стоимость зависит от количества сценариев и интеграций. Всегда обсуждаем до старта.'
  },
  {
    q: 'Сколько времени занимает разработка?',
    a: 'Базовый бот — 3–7 дней. Комплексный с ИИ и несколькими интеграциями — 2–4 недели. После согласования технического задания называю точный срок.'
  },
  {
    q: 'Бот заменит менеджера полностью?',
    a: 'Для типовых сценариев — да: приём заявок, ответы на стандартные вопросы, уведомления. Сложные переговоры и нестандартные ситуации бот передаёт человеку. Это оптимальная схема: бот закрывает 70–80% обращений, менеджер — остальное.'
  },
  {
    q: 'Нужен ли мне Telegram Premium для работы бота?',
    a: 'Нет. Бот работает через Telegram Bot API — это бесплатно и доступно для любого аккаунта. Клиенты взаимодействуют с ботом в обычном Telegram без платных функций.'
  },
  {
    q: 'Можно ли потом расширить функционал?',
    a: 'Да. Мы изначально строим архитектуру с расчётом на развитие. Добавить новый сценарий, интеграцию или ИИ-функцию — это доработка, а не переписывание с нуля.'
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
              'radial-gradient(circle, rgba(0,136,204,0.08) 0%, transparent 70%)',
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
                  border: '1px solid rgba(0,136,204,0.35)',
                  background: 'rgba(0,136,204,0.1)',
                  color: '#38b6e6'
                }}
              >
                Telegram-боты
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                8 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Telegram-бот для бизнеса:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #00a3e0, #0070f3)'
                }}
              >
                продаёт и отвечает 24/7
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Разбираю, что реально умеет Telegram-бот, какие задачи он закрывает
              лучше менеджера и когда его внедрение окупается за первый же месяц.
            </p>
          </header>

          {/* Тело статьи */}
          <article className='space-y-14 text-gray-300 leading-relaxed'>
            {/* Почему Telegram */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Почему бизнес выбирает Telegram
              </h2>
              <p className='mb-4'>
                В России Telegram обогнал WhatsApp по числу активных
                пользователей среди бизнес-аудитории. Большинство клиентов уже
                там: читают каналы, переписываются с коллегами, покупают.
                Telegram-бот — это не дополнительный канал, а точка контакта
                там, где клиент уже находится.
              </p>
              <p className='mb-6'>
                В отличие от чат-виджета на сайте, бот живёт в телефоне клиента
                и может написать первым: напомнить, уведомить, предложить.{' '}
                <strong className='text-white'>
                  Конверсия в открытие сообщений в Telegram — 80–90%
                </strong>{' '}
                против 15–20% у email-рассылок.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(0,136,204,0.08)',
                  border: '1px solid rgba(0,136,204,0.2)'
                }}
              >
                <p className='text-sky-200 font-medium leading-relaxed'>
                  Бот не болеет, не уходит в отпуск и не забывает ответить.
                  Он обрабатывает сотни обращений одновременно — с одинаковым
                  качеством в 3 часа ночи и в понедельник утром.
                </p>
              </div>
            </section>

            {/* Что умеет бот */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Что умеет Telegram-бот для бизнеса
              </h2>
              <div className='space-y-4'>
                {useCases.map(block => (
                  <div
                    key={block.title}
                    className='p-6 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <div className='flex items-center gap-3 mb-4'>
                      <span className='text-2xl'>{block.icon}</span>
                      <h3 className='text-base font-semibold text-white'>
                        {block.title}
                      </h3>
                    </div>
                    <ul className='space-y-2'>
                      {block.items.map(item => (
                        <li
                          key={item}
                          className='flex items-start gap-2 text-sm'
                        >
                          <span className='text-sky-400 mt-0.5 shrink-0'>→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
                  Хотите бота для своего бизнеса?
                </p>
                <p className='text-sm text-gray-400'>
                  Напишите — обсудим задачу и предложим решение. Без воды,
                  бесплатно.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #00a3e0, #0070f3)'
                }}
              >
                Написать →
              </a>
            </div>

            {/* Как выглядит разработка */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Как выглядит разработка
              </h2>
              <div className='space-y-5'>
                {steps.map(step => (
                  <div key={step.n} className='flex gap-5'>
                    <div
                      className='shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white'
                      style={{
                        background: 'linear-gradient(135deg, #00a3e0, #0070f3)'
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

            {/* Кому подходит */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Кому это подходит
              </h2>
              <p className='mb-6'>
                Telegram-бот — не только для интернет-магазинов. Вот бизнесы,
                которые получают ощутимый результат:
              </p>
              <div className='grid sm:grid-cols-2 gap-4'>
                {[
                  {
                    title: 'Услуги и запись',
                    desc: 'Салоны, клиники, фитнес, репетиторы — бот принимает запись и напоминает о визите.'
                  },
                  {
                    title: 'Онлайн-школы',
                    desc: 'Выдаёт материалы, проверяет домашние задания, отвечает на вопросы студентов.'
                  },
                  {
                    title: 'Розница и e-commerce',
                    desc: 'Каталог, наличие, оплата и статус доставки — без звонков в поддержку.'
                  },
                  {
                    title: 'B2B и агентства',
                    desc: 'Квалификация входящих лидов, передача в CRM, уведомления менеджеру.'
                  }
                ].map(card => (
                  <div
                    key={card.title}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <h3 className='font-semibold text-white mb-2'>{card.title}</h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {card.desc}
                    </p>
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
                'linear-gradient(135deg, rgba(0,136,204,0.12), rgba(0,112,243,0.12))',
              border: '1px solid rgba(0,136,204,0.25)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Нужен Telegram-бот для бизнеса?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Обсудим задачу, подберём оптимальное решение и назовём стоимость.
              Работаю по договору.
            </p>
            <a
              href='https://t.me/vitalyvronsky'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
              style={{
                background: 'linear-gradient(135deg, #00a3e0, #0070f3)',
                boxShadow: '0 0 32px rgba(0,136,204,0.4)'
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

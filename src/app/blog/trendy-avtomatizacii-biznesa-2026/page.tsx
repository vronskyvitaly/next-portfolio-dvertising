import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import BlogBreadcrumbs from '@/components/BlogBreadcrumbs'
import { CATALOG_ROW, formatPrice, getService } from '@/config/services'
import { ogImages } from '@/lib/og'
import coverImage from './trendy-avtomatizacii-biznesa-2026.webp'

const PUBLISHED = '2026-11-10'
const URL_PATH = '/blog/trendy-avtomatizacii-biznesa-2026'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`
const TITLE = 'Тренды автоматизации бизнеса 2026: что работает, а что пока рано'
const DESCRIPTION =
  'Тренды автоматизации бизнеса 2026 простыми словами: шесть направлений, кому они подходят, что пока рано, цены и бесплатная консультация по вашей задаче.'
const COVER_ALT =
  'Владелец небольшого бизнеса у ноутбука разбирает, какие процессы стоит автоматизировать'
const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

export const metadata: Metadata = {
  title: `${TITLE} | Виталий Вронский`,
  description: DESCRIPTION,
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  keywords: [
    'тренды автоматизации бизнеса',
    'автоматизация бизнеса 2026',
    'автоматизация малого бизнеса',
    'что автоматизировать в бизнесе',
    'чат-бот с ии для бизнеса',
    'интеграция сайта с crm',
    'ии-агенты для бизнеса'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Шесть направлений автоматизации простыми словами: что решает каждое, кому подходит и что малому бизнесу пока не нужно.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: coverOg,
    title: TITLE,
    description:
      'Что из модной автоматизации окупается у малого бизнеса, а что пока можно пропустить.'
  },
  robots: { index: true, follow: true }
}

const lending = getService('lending')!
const corporate = getService('korporativnyy-sayt')!
const shop = getService('internet-magazin')!
const webapp = getService('veb-prilozhenie')!

const siteRows = [
  { name: lending.name, price: formatPrice(lending.priceFrom) },
  { name: corporate.name, price: formatPrice(corporate.priceFrom) },
  { name: webapp.name, price: formatPrice(webapp.priceFrom) },
  { name: CATALOG_ROW.name, price: formatPrice(CATALOG_ROW.priceFrom) },
  { name: shop.name, price: formatPrice(shop.priceFrom) }
]

const automationRows = [
  {
    name: 'Простой Telegram-бот для приёма заявок',
    price: formatPrice(15000)
  },
  {
    name: 'Бот с ИИ, оплатой и подключением к CRM',
    price: formatPrice(50000)
  },
  {
    name: 'Полноценная система с ИИ-ассистентом и интеграциями',
    price: formatPrice(80000)
  }
]

const faq = [
  {
    q: 'С чего начать автоматизацию, если нет ни CRM, ни сайта?',
    a: 'С места, где к вам приходят заявки. Если это звонки и личные сообщения, достаточно бота или простой страницы с формой, которая отправляет заявку вам в Telegram. CRM подключается позже, когда заявок станет столько, что таблица перестаёт справляться.'
  },
  {
    q: 'Сколько стоит автоматизация бизнеса?',
    a: `Простой Telegram-бот для приёма заявок стоит ${formatPrice(15000)}, бот с ИИ, оплатой и CRM ${formatPrice(50000)}, полноценная система с ИИ-ассистентом и интеграциями ${formatPrice(80000)}. Сайт: лендинг ${formatPrice(lending.priceFrom)}, корпоративный сайт ${formatPrice(corporate.priceFrom)}. Точную цену называю после разбора задачи и фиксирую в договоре.`
  },
  {
    q: 'Автоматизация заменит сотрудников?',
    a: 'Она забирает повторяющуюся работу: копирование данных, ответы на одинаковые вопросы, сборку отчётов. Решения и разговоры с клиентами, где нужен человек, остаются у людей. Что делать со штатом, решаете вы, программа этого не меняет.'
  },
  {
    q: 'Чего ИИ пока не умеет надёжно?',
    a: 'ИИ может уверенно написать неверный ответ: перепутать цену, срок или условия. Поэтому в ответах клиентам он работает по вашей базе знаний, а спорные вопросы передаёт человеку. Подписывать договоры и принимать платежи без проверки ему доверять рано.'
  },
  {
    q: 'Правда ли, что консультация бесплатная?',
    a: 'Да. Мы созваниваемся или переписываемся в Telegram, я разбираю вашу задачу, задаю вопросы и выясняю цели и ограничения. После этого вы получаете понятное предложение: что делать, что можно отложить и сколько это стоит. Решение остаётся за вами.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${FULL_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
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
      image: `https://vitalyvronsky.ru${coverImage.src}`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': FULL_URL },
      inLanguage: 'ru',
      keywords:
        'тренды автоматизации бизнеса, автоматизация бизнеса 2026, автоматизация малого бизнеса, чат-бот с ии'
    },
    {
      '@type': 'FAQPage',
      '@id': `${FULL_URL}#faq`,
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ]
}

interface Trend {
  title: string
  what: ReactNode
  task: string
  fit: string
  notYet: string
  price?: ReactNode
}

const linkCls = 'text-rose-300 hover:text-rose-200 underline underline-offset-2'

const tableCard = {
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)'
}

const ctaStyle = {
  background: 'linear-gradient(135deg, #be123c, #9f1239)'
}

const calloutStyle = {
  background: 'rgba(251,113,133,0.08)',
  border: '1px solid rgba(251,113,133,0.25)'
}

const trends: Trend[] = [
  {
    title: '1. Чат-бот с ИИ вместо ответов вручную',
    what: 'Бот в Telegram или на сайте отвечает на вопросы клиентов и принимает заявки. Версия с ИИ понимает вопрос обычными словами, а не только нажатия кнопок.',
    task: 'Закрывает вопросы по ночам и в выходные, не даёт заявке остыть до утра.',
    fit: 'Услуги, запись, школы, небольшой интернет-магазин: везде, где клиенты задают одни и те же вопросы.',
    notYet:
      'Если каждый ответ зависит от особых договорённостей, бот будет путаться. Начните с простого бота без ИИ.',
    price: (
      <>
        Простой бот для заявок {formatPrice(15000)}, бот с ИИ, оплатой и CRM{' '}
        {formatPrice(50000)}. Подробнее в статье про{' '}
        <Link href='/blog/telegram-boty-dlya-biznesa' className={linkCls}>
          Telegram-ботов для бизнеса
        </Link>
        .
      </>
    )
  },
  {
    title: '2. Данные сами переходят из одной программы в другую',
    what: (
      <>
        Заявка с сайта попадает в CRM (программу учёта клиентов и сделок),
        менеджеру приходит сообщение, счёт собирается сам. Раньше для этого
        ставили RPA: программного робота, который повторяет действия человека
        на экране. Если у сервиса есть открытое подключение (
        <Link href='/blog/chto-takoe-api-sajta' className={linkCls}>
          API
        </Link>
        ), робот не нужен: программы передают данные напрямую.
      </>
    ),
    task: 'Убирает копирование из почты в таблицу и потерянные заявки.',
    fit: 'Любому, у кого заявки приходят в нескольких местах и их переносят руками.',
    notYet:
      'Роботов, которые нажимают кнопки в старых программах, малому бизнесу рано: они ломаются, когда меняется интерфейс.',
    price: (
      <>
        Начинается с сайта, который отправляет заявки куда нужно: лендинг{' '}
        {formatPrice(lending.priceFrom)}. Подключение CRM входит в
        дополнительные работы, цену называю после разбора.
      </>
    )
  },
  {
    title: '3. Отчёты, которые собираются сами',
    what: 'Продажи, заявки и расходы на рекламу из разных сервисов попадают на одну панель с цифрами, которая обновляется без вашего участия.',
    task: 'Показывает падение заявок на следующий день, а не при закрытии месяца.',
    fit: 'Тем, у кого уже есть CRM или хотя бы два источника данных.',
    notYet:
      'Если цифры ведутся в тетради и трёх разных таблицах, сначала нужен порядок в данных. Красивая панель с неверными числами хуже тетради.'
  },
  {
    title: '4. Расшифровка и разбор звонков',
    what: 'Программа превращает запись разговора в текст и отмечает, назвал ли менеджер цену и предложил ли следующий шаг. Это называют речевой аналитикой.',
    task: 'Заменяет прослушивание звонков и показывает, где теряются клиенты.',
    fit: 'Отделам продаж и колл-центрам с десятками звонков в день.',
    notYet:
      'Если звонков меньше десяти в день, послушайте выборочно сами. Это дешевле и даёт то же понимание.'
  },
  {
    title: '5. Документы по шаблону',
    what: (
      <>
        Договор, счёт и акт заполняются из данных сделки. ИИ может отметить в
        договоре спорные места. Если загружаете в сервис персональные данные,
        сначала прочитайте про 152-ФЗ в статье о{' '}
        <Link href='/blog/vnedrenie-ii-v-biznes' className={linkCls}>
          внедрении ИИ в бизнес
        </Link>
        .
      </>
    ),
    task: 'Освобождает от набора одних и тех же реквизитов и ошибок в них.',
    fit: 'Тем, кто каждую неделю готовит однотипные документы.',
    notYet:
      'ИИ-проверка договора помогает юристу, но не заменяет его. Без человека подписывать по её выводам рано.'
  },
  {
    title: '6. ИИ-агенты',
    what: 'Агент это ИИ, который сам выбирает шаги и работает в ваших программах: ответил клиенту, создал сделку, выставил счёт.',
    task: 'Берёт на себя цепочку действий целиком, а не один ответ.',
    fit: 'Крупным компаниям, где есть команда, чёткие правила и человек, который проверяет результат.',
    notYet:
      'Малому бизнесу пока рано: ошибка агента стоит денег, а типовые задачи закрывают пункты 1 и 2 надёжнее и дешевле.'
  }
]

const skipList = [
  {
    title: 'Локальные языковые модели',
    desc: 'ИИ, который работает на ваших серверах. Нужен компаниям с жёсткими требованиями к данным и своими ИТ-специалистами. Остальным хватает обычных сервисов с разумными настройками доступа.'
  },
  {
    title: 'Гиперавтоматизация',
    desc: 'Модное слово для связки всего перечисленного выше. Покупать его отдельно не нужно, автоматизируйте по одному процессу.'
  },
  {
    title: '«ИИ под ключ» с обещанием экономии в процентах',
    desc: 'Обзоры о ней часто приводят цифры без источника. Просите замер на вашем процессе до и после, а не среднюю цифру по рынку.'
  }
]

const steps = [
  {
    title: 'Запишите, на что уходит неделя',
    desc: 'Вы и сотрудники отмечаете повторяющиеся дела: ответы, переносы данных, отчёты. Через неделю видно, где теряется больше всего времени.'
  },
  {
    title: 'Выберите один процесс с понятными правилами',
    desc: 'Приём заявок подходит почти всегда. Процесс, который вы сами не можете описать по шагам, автоматизировать рано.'
  },
  {
    title: 'Замерьте исходное состояние',
    desc: 'Сколько времени уходит на дело и сколько заявок теряется. Без этих цифр потом нечего сравнивать.'
  },
  {
    title: 'Запустите минимальное решение',
    desc: 'Бот или связка сайта с CRM для одного процесса. Не стройте систему на весь бизнес сразу.'
  },
  {
    title: 'Сравните и только тогда берите следующий',
    desc: 'Если замер улучшился, переходите к следующему процессу. Если нет, выясняйте причину.'
  }
]

function TelegramButton({ label }: { label: string }) {
  return (
    <a
      href='https://t.me/vitalyvronsky'
      target='_blank'
      rel='noopener noreferrer'
      className='shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
      style={ctaStyle}
    >
      {label}
    </a>
  )
}

function PriceList({
  title,
  rows
}: {
  title: string
  rows: { name: string; price: string }[]
}) {
  return (
    <div className='p-5 rounded-2xl' style={tableCard}>
      <p className='text-xs uppercase tracking-wide text-gray-400 mb-3'>
        {title}
      </p>
      <ul className='space-y-3'>
        {rows.map(row => (
          <li
            key={row.name}
            className='flex items-baseline justify-between gap-4 text-sm'
          >
            <span className='text-gray-300'>{row.name}</span>
            <span className='shrink-0 font-semibold text-rose-200'>
              {row.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

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
          className='fixed top-0 right-0 w-162.5 h-125 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(251,113,133,0.09) 0%, rgba(159,18,57,0.06) 50%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        <div className='relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-24'>
          <BlogBreadcrumbs path={URL_PATH} />

          <header className='mb-12'>
            <div className='flex flex-wrap gap-2 mb-6'>
              <span
                className='text-xs px-3 py-1 rounded-full'
                style={{
                  border: '1px solid rgba(251,113,133,0.35)',
                  background: 'rgba(251,113,133,0.1)',
                  color: '#fda4af'
                }}
              >
                Автоматизация
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                7 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Тренды автоматизации бизнеса 2026:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #fecdd3, #fb7185, #e11d48)'
                }}
              >
                что работает, а что пока рано
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Шесть направлений простыми словами: какую задачу решает каждое,
              кому подходит и что малому бизнесу пока не нужно.
            </p>
          </header>

          <figure
            className='mb-14 overflow-hidden rounded-2xl'
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Image
              src={coverImage}
              alt={COVER_ALT}
              placeholder='blur'
              preload
              sizes='(max-width: 768px) 100vw, 720px'
              className='w-full h-auto'
            />
          </figure>

          <article className='space-y-14 text-gray-300 leading-relaxed'>
            <section>
              <p className='mb-4'>
                В обзорах на 2026 год перечислены десятки технологий. Малому
                бизнесу из них нужны три или четыре, остальные подождут. Ниже
                разбор по порядку: что это, какую задачу закрывает, кому
                подходит и кому ещё рано.
              </p>
              <p>
                Общее правило такое: автоматизируйте то, что вы можете описать
                по шагам и что повторяется каждую неделю. Всё остальное пока
                лучше делать руками.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Шесть трендов автоматизации и кому они подходят
              </h2>
              <div className='space-y-5'>
                {trends.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={tableCard}
                  >
                    <h3 className='text-lg font-semibold text-white mb-3'>
                      {item.title}
                    </h3>
                    <div className='space-y-2 text-sm leading-relaxed'>
                      <p className='text-gray-300'>
                        <span className='font-semibold text-white'>
                          Что это.{' '}
                        </span>
                        {item.what}
                      </p>
                      <p className='text-gray-300'>
                        <span className='font-semibold text-white'>
                          Какую задачу решает.{' '}
                        </span>
                        {item.task}
                      </p>
                      <p className='text-gray-300'>
                        <span className='font-semibold text-white'>
                          Кому подходит.{' '}
                        </span>
                        {item.fit}
                      </p>
                      <p className='text-gray-300'>
                        <span className='font-semibold text-rose-200'>
                          Кому пока рано.{' '}
                        </span>
                        {item.notYet}
                      </p>
                      {item.price ? (
                        <p className='text-gray-400'>
                          <span className='font-semibold text-gray-300'>
                            Цена.{' '}
                          </span>
                          {item.price}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что малому бизнесу можно пропустить
              </h2>
              <p className='mb-6'>
                Часть модных тем звучит убедительно, но в маленьком бизнесе не
                окупается.
              </p>
              <ul className='space-y-4'>
                {skipList.map(item => (
                  <li
                    key={item.title}
                    className='p-4 rounded-xl'
                    style={tableCard}
                  >
                    <p className='font-semibold text-white mb-1'>
                      {item.title}
                    </p>
                    <p className='text-sm text-gray-400'>{item.desc}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                С чего начать малому бизнесу
              </h2>
              <ol className='space-y-4'>
                {steps.map((item, i) => (
                  <li
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
                  >
                    <span
                      className='shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold'
                      style={{
                        background: 'rgba(251,113,133,0.18)',
                        color: '#fecdd3'
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className='font-semibold text-white mb-1'>
                        {item.title}
                      </p>
                      <p className='text-sm text-gray-400'>
                        {i === 4 ? (
                          <>
                            Если замер улучшился, переходите к следующему
                            процессу. Если нет, выясняйте причину. Больше о
                            выборе процесса в статье про{' '}
                            <Link
                              href='/blog/avtomatizaciya-biznesa'
                              className={linkCls}
                            >
                              автоматизацию бизнеса
                            </Link>
                            .
                          </>
                        ) : (
                          item.desc
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <div
                className='p-6 rounded-2xl'
                style={{
                  background:
                    'linear-gradient(135deg, rgba(251,113,133,0.14), rgba(159,18,57,0.1))',
                  border: '1px solid rgba(251,113,133,0.35)'
                }}
              >
                <p className='text-xs uppercase tracking-wide text-rose-300 mb-2'>
                  Цены и консультация
                </p>
                <h2 className='text-2xl font-bold text-white mb-3'>
                  Сколько стоит автоматизация
                </h2>
                <p className='mb-5'>
                  Это цены с моего сайта. Консультация бесплатная: мы
                  созваниваемся или переписываемся в Telegram, я разбираю вашу
                  задачу, задаю вопросы и выясняю цели и ограничения.
                </p>
                <div className='grid gap-4 sm:grid-cols-2 mb-5'>
                  <PriceList
                    title='Боты и автоматизация'
                    rows={automationRows}
                  />
                  <PriceList title='Сайты' rows={siteRows} />
                </div>
                <p className='mb-5 text-sm text-gray-400'>
                  Точную цену называю после разбора задачи и фиксирую в
                  договоре. Подробности по сайтам на странице{' '}
                  <Link href='/sozdanie-saytov' className={linkCls}>
                    создание сайтов
                  </Link>
                  , а если удобнее описать задачу письменно, заполните{' '}
                  <Link href='/brief' className={linkCls}>
                    бриф
                  </Link>
                  .
                </p>
                <TelegramButton label='Записаться на консультацию →' />
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые вопросы
              </h2>
              <div className='space-y-4'>
                {faq.map(item => (
                  <div
                    key={item.q}
                    className='p-5 rounded-2xl'
                    style={tableCard}
                  >
                    <h3 className='font-semibold text-white mb-2'>{item.q}</h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div
                className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
                style={calloutStyle}
              >
                <div className='flex-1'>
                  <p className='font-semibold text-white mb-1'>
                    Возьму рутину на себя
                  </p>
                  <p className='text-sm text-gray-400'>
                    Просто напишите в Telegram. Первая консультация
                    бесплатная.
                  </p>
                </div>
                <TelegramButton label='Написать в Telegram →' />
              </div>
            </section>
          </article>

          <div className='mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
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
              href='/blog/vnedrenie-ii-v-biznes'
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
            >
              Читать: внедрение ИИ в бизнес
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

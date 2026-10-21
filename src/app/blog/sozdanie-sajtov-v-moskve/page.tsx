import type { Metadata } from 'next'
import Link from 'next/link'
import BlogBreadcrumbs from '@/components/BlogBreadcrumbs'
import { CATALOG_ROW, formatPrice, getService } from '@/config/services'
import { ogImages } from '@/lib/og'

const PUBLISHED = '2026-07-28'
const URL_PATH = '/blog/sozdanie-sajtov-v-moskve'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`

export const metadata: Metadata = {
  title: 'Создание сайтов в Москве: цены и сроки 2026 | Виталий Вронский',
  description:
    'Создание сайтов в Москве: сколько стоит разработка лендинга, корпоративного сайта и интернет-магазина, из чего складывается цена и как выбрать подрядчика.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  keywords: [
    'создание сайтов в Москве',
    'заказать сайт в Москве',
    'разработка сайтов Москва',
    'сколько стоит сайт в Москве',
    'сайт под ключ Москва',
    'веб-разработчик Москва',
    'создание сайта под ключ',
    'разработка сайта на заказ'
  ],
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Создание сайтов в Москве: сколько стоит и как заказать сайт',
    description:
      'Разбираю цены, сроки, этапы работы и типичные ошибки при заказе сайта в Москве. Чек-лист, как выбрать подрядчика, и честные ответы на частые вопросы.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Создание сайтов в Москве: цены и сроки 2026',
    description:
      'Из чего складывается цена сайта, сколько ждать запуска и как не переплатить подрядчику в Москве.'
  },
  robots: { index: true, follow: true }
}

const faq = [
  {
    q: 'Сколько стоит сайт под ключ?',
    a: `Лендинг обойдётся ${formatPrice(getService('lending')!.priceFrom)}, корпоративный сайт ${formatPrice(getService('korporativnyy-sayt')!.priceFrom)}, каталог с формой заявки ${formatPrice(CATALOG_ROW.priceFrom)}, интернет-магазин ${formatPrice(getService('internet-magazin')!.priceFrom)}. Итоговая цена зависит от количества страниц, интеграций и объёма дизайна с нуля против готовых блоков.`
  },
  {
    q: 'Сколько по времени делают сайт для бизнеса?',
    a: 'Лендинг обычно готов за 3-7 дней, корпоративный сайт за 2-4 недели, каталог за 3-5 недель, интернет-магазин за 4-8 недель. Сроки растут, если на старте нет готовых текстов и фотографий и их нужно собирать в процессе.'
  },
  {
    q: 'Можно ли заказать разработку сайта удалённо, из другого города?',
    a: 'Да, и так работает большинство моих проектов. Я веду клиентов по всей России и за её пределами полностью удалённо: бриф, обсуждение макетов и приёмка работ проходят по видеосвязи и в Telegram, личное присутствие не требуется. География на цену и сроки не влияет.'
  },
  {
    q: 'Что входит в стоимость сайта, кроме дизайна и вёрстки?',
    a: 'В цену входят разработка структуры, адаптивная вёрстка под все устройства, настройка базовой SEO-разметки, подключение аналитики, тестирование перед запуском и перенос на хостинг. Интеграции с CRM, платёжными системами и сложный контент считаются отдельно, потому что их объём сильно различается от проекта к проекту.'
  },
  {
    q: 'Даёте ли вы гарантию и поддержку после запуска сайта?',
    a: 'После сдачи проекта действует гарантийный период, в течение которого я бесплатно исправляю ошибки, допущенные при разработке. Дальнейшая техническая поддержка и доработки обсуждаются отдельно, обычно это несколько часов в месяц по фиксированной ставке.'
  },
  {
    q: 'Можно ли начать с малого бюджета и расширять сайт потом?',
    a: 'Да, и это разумная стратегия для старта. Лендинг с чётким предложением закрывает первую задачу и уже приносит заявки, а дальше сайт можно постепенно расширять до каталога, блога или интернет-магазина без переделки с нуля.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${FULL_URL}#article`,
      headline: 'Создание сайтов в Москве: сколько стоит и как заказать сайт',
      description:
        'Из чего складывается цена сайта в Москве, сколько занимает разработка по этапам, какие ошибки допускают заказчики и как выбрать подрядчика.',
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
        'создание сайтов в Москве, заказать сайт в Москве, разработка сайтов Москва, сколько стоит сайт в Москве, сайт под ключ Москва'
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

const priceComponents = [
  {
    part: 'Дизайн и прототип',
    share: '20-30% бюджета',
    note: 'Структура страниц, макеты под бренд, адаптация под мобильные экраны'
  },
  {
    part: 'Вёрстка и разработка',
    share: '30-40% бюджета',
    note: 'Программирование логики, семантическая вёрстка, оптимизация скорости'
  },
  {
    part: 'Интеграции',
    share: '10-20% бюджета',
    note: 'CRM, онлайн-оплата, аналитика, сторонние сервисы и API'
  },
  {
    part: 'Контент и SEO-подготовка',
    share: '10-15% бюджета',
    note: 'Тексты, изображения, заголовки, мета-теги, разметка для поисковиков'
  },
  {
    part: 'Тестирование и запуск',
    share: '5-10% бюджета',
    note: 'Проверка на устройствах, перенос на хостинг, финальная приёмка'
  }
]

// Цены и сроки берутся из реестра услуг, чтобы не расходились со страницами
const siteTypes = [
  getService('lending')!,
  getService('korporativnyy-sayt')!,
  CATALOG_ROW,
  getService('internet-magazin')!
].map(item => ({
  type: item.name,
  purpose: item.purpose,
  time: item.duration,
  budget: formatPrice(item.priceFrom)
}))

const stages = [
  {
    title: 'Бриф и цели проекта',
    time: '1-2 дня',
    desc: 'Обсуждаем, кто ваш клиент, какую задачу должен закрыть сайт и что будет считаться результатом. Без этого шага любая цена и любой срок - это гадание.'
  },
  {
    title: 'Структура и прототип',
    time: '2-4 дня',
    desc: 'Собираю карту сайта и схематичный прототип ключевых страниц. На этом этапе легче всего вносить правки, поэтому я согласовываю структуру до старта дизайна.'
  },
  {
    title: 'Дизайн',
    time: '3-7 дней',
    desc: 'Разрабатываю визуальный стиль под ваш бренд и аудиторию, сразу с мобильной версией. Показываю макеты в Figma, правки собираем за один-два круга, а не бесконечно.'
  },
  {
    title: 'Вёрстка и разработка',
    time: '5-20 дней в зависимости от типа сайта',
    desc: 'Собираю сайт на Next.js с семантической версткой и вниманием к скорости загрузки. Промежуточную версию можно смотреть в процессе, а не только на финальной сдаче.'
  },
  {
    title: 'Интеграции и контент',
    time: '3-7 дней',
    desc: 'Подключаю CRM, оплату, аналитику и наполняю сайт текстами и изображениями. Часть этой работы идёт параллельно с версткой, чтобы не растягивать сроки.'
  },
  {
    title: 'Тестирование и запуск',
    time: '2-4 дня',
    desc: 'Проверяю сайт на разных устройствах и браузерах, настраиваю SSL-сертификат, sitemap и robots.txt, переношу проект на хостинг и слежу за первыми часами после запуска.'
  }
]

const complexityReasons = [
  {
    title: 'Правки после сдачи стоят дороже, чем правки до старта',
    desc: 'Изменить структуру на этапе прототипа - это час работы. Изменить её после того, как сайт свёрстан и наполнен, - это переделка нескольких блоков заново, а значит и дополнительные деньги.'
  },
  {
    title: 'Интеграции почти никогда не входят в самую низкую цену',
    desc: 'Когда предложение звучит подозрительно дёшево, в 9 случаях из 10 в него не включены подключение CRM, платёжной системы и аналитики. Их добавляют потом отдельным счётом, и итоговая сумма догоняет, а иногда обгоняет обычную рыночную цену.'
  },
  {
    title: 'Фикс-цена без технического задания - это не фикс-цена',
    desc: 'Если объём работ не описан письменно, любое расхождение в ожиданиях превращается в спор «это была не та задача». Я фиксирую состав работ до старта именно поэтому - это защищает и заказчика, и меня.'
  },
  {
    title: 'Готовые тексты и фото сокращают срок сильнее, чем кажется',
    desc: 'Сбор контента в процессе разработки - самая частая причина, по которой сроки уезжают на пару недель. Если материалы готовы заранее, сайт почти всегда запускается быстрее заявленного минимума.'
  }
]

const mistakes = [
  'Выбор подрядчика по самой низкой цене без сравнения, что конкретно в неё входит',
  'Задача передана на словах, без брифа и письменного технического задания',
  'Не обсудили заранее, что происходит после сдачи: гарантия, доработки, кто хранит доступы',
  'Интеграции с CRM и оплатой не заложили в бюджет с самого начала, добавили как «доплату потом»',
  'Решение про SEO откладывается на «когда-нибудь после запуска» вместо закладки на старте',
  'Нет согласованных сроков по этапам, есть только общая дата «когда-нибудь в этом квартале»'
]

const redFlags = [
  'Просит 100% предоплату без договора и без фиксации состава работ',
  'Не может объяснить, на какой технологии будет сделан сайт, и не показывает примеры кода',
  'В портфолио - типовые шаблоны, которые легко узнать по чужим маркетплейсам',
  'Сразу называет цену, не задав ни одного вопроса про бизнес и целевую аудиторию',
  'Ни разу не упоминает скорость загрузки и SEO, будто этих понятий не существует',
  'Итоговая цена «зависит от того, как пойдёт» вместо фиксированной суммы за согласованный объём работ'
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
          className='fixed top-0 right-0 w-162.5 h-125 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(251,191,36,0.07) 0%, rgba(0,112,243,0.05) 50%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        <div className='relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-24'>
          <BlogBreadcrumbs path={URL_PATH} />

          {/* Шапка статьи */}
          <header className='mb-12'>
            <div className='flex flex-wrap gap-2 mb-6'>
              <span
                className='text-xs px-3 py-1 rounded-full'
                style={{
                  border: '1px solid rgba(251,191,36,0.35)',
                  background: 'rgba(251,191,36,0.1)',
                  color: '#fbbf24'
                }}
              >
                Разработка сайтов
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                12 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Создание сайтов в Москве:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #fbbf24, #a78bfa, #60a5fa)'
                }}
              >
                сколько стоит и как заказать сайт, который окупится
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Разбираю, из чего складывается цена разработки сайта, сколько
              занимает каждый этап и как не переплатить подрядчику,
              который называет цифру «на глаз». С таблицами, чек-листом и
              честными ответами на вопросы, которые мне задают на каждой
              встрече.
            </p>

            {/* Переход на коммерческую страницу: статья информационная,
                транзакционный интент отдаём хабу */}
            <Link
              href='/sozdanie-saytov'
              className='group mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl transition-all hover:bg-white/5'
              style={{
                background:
                  'linear-gradient(145deg, rgba(251,191,36,0.1) 0%, rgba(0,112,243,0.06) 100%)',
                border: '1px solid rgba(251,191,36,0.25)'
              }}
            >
              <div>
                <p className='text-sm font-semibold text-white mb-1'>
                  Цены и сроки по типам сайтов
                </p>
                <p className='text-sm text-gray-400'>
                  Лендинг, корпоративный сайт, интернет-магазин,
                  веб-приложение — со стоимостью и составом работ
                </p>
              </div>
              <span
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-transform group-hover:scale-105 whitespace-nowrap'
                style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
              >
                Смотреть цены →
              </span>
            </Link>
          </header>

          <article className='space-y-14 text-gray-300 leading-relaxed'>
            {/* Хук */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Разброс цен на сайт: от 15 000 до полумиллиона
              </h2>
              <p className='mb-4'>
                Наберите в поиске «заказать сайт под ключ», и первое, что
                бросится в глаза, - это цифры. Один подрядчик обещает лендинг
                за 15 000 ₽ и три дня, другой называет за корпоративный сайт
                350 000 ₽ и два месяца. Формально оба говорят про одну и ту же
                услугу. По факту - про совершенно разные продукты, и без
                понимания, что стоит за ценой, выбрать правильно почти
                невозможно.
              </p>
              <p className='mb-4'>
                Я делаю сайты на заказ несколько лет и вижу одну и ту же
                картину: клиент выбирает подрядчика по нижней строчке в
                прайсе, а через месяц дописывает бюджет на то, что «забыли
                включить» - интеграцию с CRM, адаптацию под телефон,
                нормальную скорость загрузки. В этой статье разложил цены,
                сроки и процесс разработки на понятные части, чтобы вы могли
                сравнивать предложения предметно, а не на глаз.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(251,191,36,0.08)',
                  border: '1px solid rgba(251,191,36,0.2)'
                }}
              >
                <p className='text-amber-200 font-medium leading-relaxed'>
                  Дешёвый сайт и дорогой сайт часто отличаются не качеством
                  дизайна, а тем, что именно входит в цену. Сравнивать нужно
                  не итоговую сумму, а состав работ за этой суммой.
                </p>
              </div>
            </section>

            {/* Из чего складывается цена */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Из чего складывается стоимость разработки сайта
              </h2>
              <p className='mb-6'>
                Цена сайта - это не одна цифра, а сумма нескольких работ
                разного объёма. Вот как обычно распределяется бюджет между
                этапами:
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr
                      className='text-left'
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.08)'
                      }}
                    >
                      <th className='py-3 pr-4 text-gray-400 font-medium w-48'>
                        Часть работы
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium w-40'>
                        Доля бюджета
                      </th>
                      <th className='py-3 text-gray-400 font-medium'>
                        Что входит
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {priceComponents.map(row => (
                      <tr key={row.part}>
                        <td className='py-4 pr-4 font-medium text-white align-top'>
                          {row.part}
                        </td>
                        <td className='py-4 pr-4 text-gray-400 align-top'>
                          {row.share}
                        </td>
                        <td className='py-4 text-gray-300 align-top'>
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='mt-6'>
                Когда подрядчик называет цену в разы ниже рынка, почти всегда
                это значит, что часть строк из этой таблицы в неё не входит -
                чаще всего интеграции и SEO-подготовка. Их всё равно придётся
                оплатить, просто отдельным счётом уже после старта проекта.
              </p>
            </section>

            {/* Типы сайтов, цены, сроки */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Сколько стоит сайт по типам: ориентиры на 2026 год
              </h2>
              <p className='mb-6'>
                Вот с какими цифрами реально стоит сверяться, когда сравниваете
                предложения на разработку сайта:
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr
                      className='text-left'
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.08)'
                      }}
                    >
                      <th className='py-3 pr-4 text-gray-400 font-medium w-40'>
                        Тип сайта
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium'>
                        Для чего
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium w-28'>
                        Сроки
                      </th>
                      <th className='py-3 text-gray-400 font-medium w-28'>
                        Бюджет
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {siteTypes.map(row => (
                      <tr key={row.type}>
                        <td className='py-4 pr-4 font-medium text-white align-top'>
                          {row.type}
                        </td>
                        <td className='py-4 pr-4 text-gray-400 align-top'>
                          {row.purpose}
                        </td>
                        <td className='py-4 pr-4 text-gray-300 align-top'>
                          {row.time}
                        </td>
                        <td className='py-4 text-gray-300 align-top'>
                          {row.budget}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='mt-6'>
                Важный момент: эти цифры не зависят от того, где вы находитесь.
                Я работаю удалённо и веду проекты по всей России, поэтому
                география на цену и сроки не влияет - разница будет только в
                том, насколько конкурентна ваша ниша и сколько нестандартной
                логики нужно заложить в проект. Разумный ориентир - цена, за
                которой стоит понятный процесс, а не самая маленькая цифра в
                подборке.
              </p>
            </section>

            {/* Inline CTA 1 */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(251,191,36,0.07)',
                border: '1px solid rgba(251,191,36,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Хотите точную цифру, а не диапазон «от»?
                </p>
                <p className='text-sm text-gray-400'>
                  Опишите задачу в брифе или напишите в Telegram - посчитаю
                  стоимость под ваш проект за один день, без обязательств.
                </p>
              </div>
              <Link
                href='/brief'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #7d2cc8)'
                }}
              >
                Заполнить бриф →
              </Link>
            </div>

            {/* Этапы работы */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как я работаю: этапы разработки сайта от заявки до запуска
              </h2>
              <p className='mb-6'>
                Чтобы цена и срок не «поплыли» на середине проекта, я веду
                разработку по одним и тем же шести шагам вне зависимости от
                того,{' '}
                <Link
                  href='/sozdanie-saytov/lending'
                  className='text-amber-300 hover:text-amber-200 underline underline-offset-2'
                >
                  лендинг
                </Link>{' '}
                это или{' '}
                <Link
                  href='/sozdanie-saytov/internet-magazin'
                  className='text-amber-300 hover:text-amber-200 underline underline-offset-2'
                >
                  интернет-магазин
                </Link>
                :
              </p>
              <div className='space-y-3'>
                {stages.map((item, i) => (
                  <div
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <span
                      className='shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold'
                      style={{
                        background: 'rgba(251,191,36,0.15)',
                        color: '#fbbf24'
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div className='flex flex-wrap items-baseline gap-2 mb-0.5'>
                        <p className='font-semibold text-white'>
                          {item.title}
                        </p>
                        <span className='text-xs text-gray-500'>
                          {item.time}
                        </span>
                      </div>
                      <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Но вот в чём сложность */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Но вот в чём сложность: почему «сайт за три дня» обычно
                выходит дороже
              </h2>
              <p className='mb-6'>
                Когда я считаю смету для клиента, который уже получил
                предложение «в три раза дешевле», в подавляющем большинстве
                случаев разница объясняется не жадностью подрядчика, а тем,
                что именно посчитано в этой цене. Вот основные причины, из-за
                которых итоговая стоимость расходится с первой озвученной
                цифрой:
              </p>
              <div className='space-y-4'>
                {complexityReasons.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <p className='font-semibold text-white mb-2'>
                      {item.title}
                    </p>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Конструкторы как тупиковый путь для растущего бизнеса */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Почему сайт-конструктор не решает задачу бизнеса, который
                планирует расти
              </h2>
              <p className='mb-4'>
                Отдельно стоит сказать про конструкторы сайтов - они не входят
                в это сравнение цен, потому что решают другую задачу.
                Собрать страницу самостоятельно за вечер можно, и для очень
                простой проверки идеи этого иногда достаточно. Но у такого
                пути есть потолок, в который бизнес упирается довольно быстро.
              </p>
              <p className='mb-4'>
                Первое, о чём забывают на старте: конструктор никогда не бывает
                бесплатным на дистанции. Бесплатные тарифы почти всегда идут
                без своего домена и без рабочих форм. Как только на сайте
                появляется обычная форма заявки, приём платежей или выгрузка
                лидов в CRM, вы автоматически переходите на платный тариф. На
                Тильде это уже порядка 2000 рублей в месяц и выше, дальше
                отдельно докупаются лимиты, страницы и дополнительные
                возможности (цены здесь и далее ориентировочные, платформы
                пересматривают их регулярно). Это около 24 000 рублей в год
                бессрочно, просто за право пользоваться своим же сайтом. За
                три-четыре года набегает сумма, сопоставимая со стоимостью
                разработки собственного сайта, только в конце этого срока у
                вас на руках не остаётся ничего: перестали платить - сайт
                выключился вместе с формами и всей накопленной статистикой.
              </p>
              <p className='mb-4'>
                Сайт на конструкторе почти всегда проигрывает по скорости
                загрузки из-за общего для всех пользователей движка и
                лишнего кода, который нельзя убрать. SEO-настройки
                ограничены тем, что разрешил разработчик платформы, а не тем,
                что нужно именно вашему сайту. Кастомную логику - личный
                кабинет, нестандартную форму заявки, сложную интеграцию с
                CRM или 1С - на большинстве конструкторов просто невозможно
                реализовать, и рано или поздно бизнес всё равно приходит к
                разработке с нуля, но уже потеряв время и растеряв часть
                накопленной посещаемости при переезде.
              </p>
              <p>
                Есть и более простой аргумент: сайт на конструкторе не
                принадлежит вам полностью, вы арендуете доступ к чужой
                платформе на её условиях. Код сайта, сделанного на заказ,
                принадлежит вам целиком - его можно перенести на любой
                хостинг, доработать силами другого разработчика, продать
                вместе с бизнесом. Для проекта, который планирует расти
                дальше одностраничника, это разница на годы вперёд.
              </p>
            </section>

            {/* Ошибки при заказе */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Типичные ошибки при заказе сайта
              </h2>
              <ul className='space-y-2'>
                {mistakes.map(item => (
                  <li key={item} className='flex items-start gap-2 text-sm'>
                    <span className='text-red-400 mt-0.5 shrink-0'>✗</span>
                    <span className='text-gray-300'>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Чек-лист выбора подрядчика */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Чек-лист: как выбрать подрядчика для разработки сайта
              </h2>
              <p className='mb-6'>
                Прежде чем подписывать договор или переводить предоплату,
                стоит проверить подрядчика по нескольким признакам. Вот
                тревожные сигналы, которые я советую проверять в первую
                очередь:
              </p>
              <div className='space-y-3'>
                {redFlags.map(item => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='mt-1 shrink-0 w-5 h-5 rounded-md border border-amber-400/40 flex items-center justify-center text-xs text-amber-300'>
                      !
                    </span>
                    <span className='text-sm text-gray-300'>{item}</span>
                  </div>
                ))}
              </div>
              <p className='mt-6'>
                Хороший подрядчик, наоборот, сначала спрашивает про бизнес и
                целевую аудиторию, показывает реальные проекты с рабочими
                ссылками, фиксирует состав работ письменно и объясняет, на
                какой технологии и почему будет сделан сайт - не в терминах,
                а на понятном языке.
              </p>
            </section>

            {/* Результаты / доказательство */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что реально даёт нормально сделанный сайт
              </h2>
              <p className='mb-4'>
                Когда я делал сайт с формой заявки и интеграцией в Bitrix24
                для клиента из сферы услуг, время обработки заявки
                сократилось с сорока минут ручного переноса данных до пяти:
                заявка падала в CRM сразу с сайта, менеджеру оставалось
                только позвонить. Подробнее о том, как выглядит такая связка,
                я разбирал в статье про{' '}
                <Link
                  href='/blog/bitrix24-i-claude-avtomatizaciya-crm'
                  className='text-amber-300 hover:text-amber-200 underline underline-offset-2'
                >
                  автоматизацию CRM
                </Link>
                .
              </p>
              <p className='mb-4'>
                В другом проекте простая переделка первого экрана и формы
                заявки на{' '}
                <Link
                  href='/sozdanie-saytov/korporativnyy-sayt'
                  className='text-amber-300 hover:text-amber-200 underline underline-offset-2'
                >
                  корпоративном сайте
                </Link>{' '}
                подняла конверсию из посетителя
                в заявку с 1,2% до 3,4% без единого рубля дополнительной
                рекламы - разница была именно в том, насколько быстро
                посетитель понимал, что ему предлагают и что делать дальше.
              </p>
              <p>
                Это и есть разница между сайтом, который просто существует,
                и сайтом, который работает как канал продаж. О том, какие
                технические мелочи на это влияют, я подробно писал в статье{' '}
                <Link
                  href='/blog/sozdanie-sajtov-nado-znat'
                  className='text-amber-300 hover:text-amber-200 underline underline-offset-2'
                >
                  «Создать сайт сейчас легко. Но это ещё не сайт»
                </Link>
                .
              </p>
            </section>

            {/* Inline CTA 2 */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(251,191,36,0.07)',
                border: '1px solid rgba(251,191,36,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Беру ограниченное число проектов в месяц
                </p>
                <p className='text-sm text-gray-400'>
                  Так я успеваю вести каждый сайт по всем шести этапам без
                  спешки. Если задача пока в проработке - напишите, обсудим
                  сроки и бюджет заранее.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #7d2cc8)'
                }}
              >
                Написать →
              </a>
            </div>

            {/* FAQ */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые вопросы о заказе сайта
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

          {/* Итог */}
          <div
            className='mt-14 p-6 rounded-2xl'
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)'
            }}
          >
            <h2 className='text-xl font-bold text-white mb-3'>Итог</h2>
            <p className='text-gray-400 leading-relaxed text-sm'>
              Разброс цен на сайты большой, но не хаотичный - за ним
              стоит конкретный состав работ: дизайн, вёрстка, интеграции,
              контент, тестирование. Сравнивать предложения нужно по этому
              составу, а не по итоговой цифре. Процесс из шести понятных
              этапов, письменное техническое задание и вопросы про ваш
              бизнес до, а не после старта - главные признаки того, что
              сайт не придётся переделывать через полгода.
            </p>
          </div>

          {/* CTA */}
          <div
            className='mt-10 p-8 sm:p-10 rounded-3xl text-center'
            style={{
              background:
                'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(0,112,243,0.12))',
              border: '1px solid rgba(251,191,36,0.25)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Готовы обсудить разработку сайта?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Разрабатываю сайты под ключ на Next.js: от лендинга до
              интернет-магазина с интеграцией CRM и онлайн-оплатой. Работаю
              удалённо с клиентами из любого города. Первая оценка стоимости
              и сроков - бесплатно.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #7d2cc8)',
                  boxShadow: '0 0 32px rgba(251,191,36,0.35)'
                }}
              >
                Написать в Telegram →
              </a>
              <Link
                href='/brief'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/15 transition-all hover:bg-white/5'
              >
                Заполнить бриф на сайте
              </Link>
            </div>
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
              href='/blog/zachem-biznesu-sajt'
              className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors'
            >
              Читать: зачем бизнесу нужен сайт
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

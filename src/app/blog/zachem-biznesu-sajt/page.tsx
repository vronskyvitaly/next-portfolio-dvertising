import type { Metadata } from 'next'
import Link from 'next/link'
import BlogBreadcrumbs from '@/components/BlogBreadcrumbs'
import { ogImages } from '@/lib/og'

const PUBLISHED = '2026-07-27'
const URL_PATH = '/blog/zachem-biznesu-sajt'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`

export const metadata: Metadata = {
  title:
    'Зачем бизнесу нужен сайт в 2026 году: честный разбор | Виталий Вронский',
  description:
    'Зачем бизнесу нужен сайт, если есть соцсети и маркетплейсы. Экономика лида, SEO как актив, интеграции с CRM и честный ответ, когда сайт реально не нужен.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  keywords: [
    'зачем нужен сайт для бизнеса',
    'зачем бизнесу сайт',
    'нужен ли сайт компании',
    'сайт или соцсети',
    'сайт для малого бизнеса',
    'разработка сайта под ключ',
    'сайт как актив бизнеса',
    'сколько стоит сайт для компании'
  ],
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Зачем бизнесу нужен сайт, если есть соцсети и маркетплейсы',
    description:
      'Честный разбор: экономика лида, SEO как накопительный актив, интеграции с CRM и когда сайт бизнесу правда не нужен.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Зачем бизнесу нужен сайт в 2026 году',
    description:
      'Экономика лида, SEO как актив и честный ответ на вопрос, когда сайт бизнесу не нужен.'
  },
  robots: { index: true, follow: true }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Зачем бизнесу нужен сайт, если есть соцсети и маркетплейсы',
  description:
    'Разбор без маркетинговых лозунгов: экономика лида, SEO как накопительный актив, интеграции с CRM и честный ответ на вопрос, когда сайт бизнесу правда не нужен.',
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
    'зачем нужен сайт для бизнеса, сайт или соцсети, сайт как актив, SEO продвижение, разработка сайта под ключ'
}

const excuses = [
  {
    excuse: '«Нам хватает клиентов из VK и сарафанного радио»',
    response:
      'Пока хватает — это не аргумент против сайта, это аргумент против его отсутствия завтра. Сарафан не масштабируется: он растёт вместе с числом довольных клиентов, а не по вашему желанию. В момент, когда нужно вырасти в полтора раза, окажется, что расти неоткуда.'
  },
  {
    excuse: '«У нас узкая ниша, наших клиентов нет в интернете»',
    response:
      'Даже в B2B и в самых нишевых сегментах закупщик и директор сначала гуглят подрядчика и смотрят, что о нём можно найти. Отсутствие сайта в 2026 году читается не как «старая школа», а как «непонятно, работает ли компания вообще».'
  },
  {
    excuse: '«На сайт нет бюджета»',
    response:
      'Обычно это значит «нет бюджета, который я готов потратить не понимая отдачи» — и это справедливо. Но сайт стоит сравнивать не с нулём, а с тем, что вы уже платите за рекламу, комиссии маркетплейсов и время менеджера на однотипные вопросы в переписке.'
  },
  {
    excuse: '«Мы уже пробовали — сайт не сработал»',
    response:
      'В 90% таких историй сайт был сделан один раз и забыт: без аналитики, без обновлений, без единой заявки в CRM. Сайт — это не памятник, который поставили и ушли. Это канал, который нужно вести, как и любой другой источник клиентов.'
  },
  {
    excuse: '«Нам хватает страницы в VK и карточки на Авито»',
    response:
      'Хватает ровно до тех пор, пока площадка не поменяет правила, не заблокирует аккаунт за жалобу конкурента или не поднимет комиссию. Площадка — это чужая территория, где вы арендуете внимание аудитории. Сайт — единственный канал, который нельзя отключить решением модератора.'
  },
  {
    excuse: '«Нет времени этим заниматься»',
    response:
      'Администрирование готового сайта на нормальной платформе занимает меньше времени, чем ежедневная проверка сообщений в трёх мессенджерах. Основная временная затрата — разовая, на старте. Дальше это в среднем 20–30 минут в неделю.'
  }
]

const economics = [
  {
    channel: 'Маркетплейс / агрегатор услуг',
    cost: 'Комиссия 15–25% с каждой сделки + плата за размещение',
    note: 'Клиент — не ваш. Он принадлежит площадке: те же карточки видят конкуренты в соседней строке'
  },
  {
    channel: 'Контекстная реклама (Яндекс Директ)',
    cost: 'От 300 ₽ до нескольких тысяч ₽ за лид, зависит от ниши',
    note: 'Трафик есть только пока идёт оплата. Остановили бюджет — обращения обнулились в тот же день'
  },
  {
    channel: 'Сарафанное радио',
    cost: 'Формально бесплатно',
    note: 'Жёстко ограничено кругом текущих клиентов и их знакомых. Не масштабируется по заказу'
  },
  {
    channel: 'Органический трафик с сайта (SEO)',
    cost: 'Высокая стоимость входа первые 6–12 месяцев, затем резко падает',
    note: 'Единственный канал, который продолжает приносить заявки, даже когда рекламный бюджет на нуле'
  }
]

const valueBlocks = [
  {
    icon: '🏠',
    title: 'Актив, а не аренда',
    color: 'rgba(244,114,182,0.08)',
    borderColor: 'rgba(244,114,182,0.2)',
    textColor: '#f9a8d4',
    items: [
      'Домен и хостинг принадлежат вам, а не площадке — их нельзя отключить чужим решением',
      'Историю заявок, отзывов и контента нельзя стереть модерацией или блокировкой аккаунта',
      'Сайт можно продать вместе с бизнесом как нематериальный актив — страницу в соцсети нет'
    ]
  },
  {
    icon: '💰',
    title: 'Экономика продвижения',
    color: 'rgba(0,112,243,0.08)',
    borderColor: 'rgba(0,112,243,0.2)',
    textColor: '#60a5fa',
    items: [
      'После накопления SEO-массы часть заявок приходит из поиска бесплатно, без затрат на клик',
      'Ноль комиссии с продажи — в отличие от маркетплейсов и агрегаторов услуг',
      'Все остальные каналы — реклама, соцсети, офлайн-вывеска — работают эффективнее, когда ведут на один общий актив'
    ]
  },
  {
    icon: '🤝',
    title: 'Доверие и имидж',
    color: 'rgba(125,44,200,0.08)',
    borderColor: 'rgba(125,44,200,0.2)',
    textColor: '#c084fc',
    items: [
      'Наличие сайта само по себе считывается как признак серьёзности и стабильности компании',
      'Кейсы, сертификаты и отзывы собраны в одном месте, а не разбросаны по постам за три года',
      'Фирменный стиль полностью под вашим контролем — не ограничен чужим шаблоном соцсети'
    ]
  },
  {
    icon: '⚙️',
    title: 'Рабочий инструмент, а не визитка',
    color: 'rgba(0,212,255,0.06)',
    borderColor: 'rgba(0,212,255,0.15)',
    textColor: '#67e8f9',
    items: [
      'Заявка с формы падает сразу в CRM или Telegram менеджера — без ручного переноса',
      'Клиент видит статус заказа и может оплатить онлайн, не дожидаясь звонка',
      'Аналитика показывает по цифрам, что реально работает, а что — нет'
    ]
  }
]

const techFactors = [
  {
    title: 'Скорость загрузки и Core Web Vitals',
    desc: 'Метрики, по которым Google и Яндекс ранжируют страницы. Сайт, который грузится дольше 3 секунд на мобильном, теряет заметную часть посетителей ещё до того, как они увидели предложение.'
  },
  {
    title: 'Мобильная адаптивность',
    desc: 'Большая часть трафика на сайты малого и среднего бизнеса приходит с телефонов. Сайт, который неудобно листать пальцем, отсеивает клиентов молча — без жалоб, просто закрытием вкладки.'
  },
  {
    title: 'HTTPS и базовая безопасность',
    desc: 'Браузер помечает сайт без сертификата как небезопасный прямо в адресной строке. Для формы заявки с телефоном и именем клиента это выглядит как сигнал «не доверяйте этому сайту».'
  },
  {
    title: 'Доступность и корректная разметка',
    desc: 'Чёткая структура заголовков и семантика HTML — это не только про людей с ограничениями. Это ещё и язык, на котором поисковики и ИИ-системы понимают, о чём вообще страница.'
  }
]

const siteTypes = [
  {
    type: 'Лендинг',
    purpose: 'Один продукт или услуга, проверка гипотезы, рекламная кампания',
    time: '3–7 дней',
    budget: 'от 20 000 ₽'
  },
  {
    type: 'Корпоративный сайт',
    purpose: 'Полная презентация компании: услуги, команда, кейсы, контакты',
    time: '2–4 недели',
    budget: 'от 90 000 ₽'
  },
  {
    type: 'Каталог с формой заявки',
    purpose: 'B2B и услуги со сложным ассортиментом, без онлайн-оплаты',
    time: '3–5 недель',
    budget: 'от 120 000 ₽'
  },
  {
    type: 'Интернет-магазин',
    purpose: 'Онлайн-продажи с оплатой, доставкой и личным кабинетом',
    time: '4–8 недель',
    budget: 'от 150 000 ₽'
  }
]

const notMagic = [
  {
    myth: 'Сайт не спасёт бизнес с плохим продуктом или сервисом',
    reality:
      'Сайт умножает то, что уже есть. Если сервис слабый, а цены не соответствуют рынку, сайт просто быстрее донесёт это до большего числа людей. Хороший сайт начинается с хорошего продукта, а не наоборот.'
  },
  {
    myth: 'Трафик с сайта не бесплатный',
    reality:
      'Даже органический поиск требует постоянных вложений — в контент, техническую поддержку, обновление информации. Сайт, в который один раз вложились и забыли, за год-два теряет позиции и перестаёт приносить заявки.'
  },
  {
    myth: 'Нельзя просто выгрузить в интернет корпоративный буклет',
    reality:
      'То, что хорошо смотрится на бумаге или в PDF, часто нечитаемо на экране телефона. Сайту нужна отдельная структура, навигация и адаптивная вёрстка — это другой носитель информации, а не копия печатной брошюры.'
  }
]

const checklist = [
  'Одно предложение, которое объясняет, что вы делаете и для кого — это ваш офер на первый экран',
  'Список услуг или товаров хотя бы с ориентировочными ценами «от»',
  'Реквизиты, адрес, часы работы и рабочий телефон или мессенджер',
  '3–5 примеров работ, кейсов или отзывов реальных клиентов',
  'Понимание, куда должна попадать заявка — в CRM, на почту или в Telegram менеджеру',
  'Логотип и минимальные требования к фирменному стилю, если они уже сложились'
]

const mistakes = [
  'Первый экран без чёткого УТП — посетитель должен понять суть за 3 секунды, а не искать её в третьем разделе',
  'Десяток разделов в меню и всплывающие окна с первой секунды — это отталкивает, а не удерживает',
  'Сложная форма заявки на десять полей вместо имени и телефона',
  'Сайт сделали и забыли: цены не обновляются, кейсы не пополняются, блог не ведётся'
]

const faq = [
  {
    q: 'Сайт точно окупится?',
    a: 'Зависит от ниши и среднего чека. Для услуг и B2B с чеком от нескольких тысяч рублей сайт обычно окупается за 2–4 месяца — на нём написана та же информация, что вручную объясняет менеджер в переписке, только сайт делает это на автомате и одновременно всем посетителям.'
  },
  {
    q: 'У меня уже есть группа в VK и канал в Telegram — сайт всё равно нужен?',
    a: 'Соцсети и сайт решают разные задачи. VK и Telegram хороши для коммуникации и удержания аудитории, но плохо индексируются в поиске и полностью зависят от правил площадки. Сайт — это то, что находят через поиск и на что можно смело ссылаться в рекламе, договорах и презентациях.'
  },
  {
    q: 'Можно начать с малого — например, с одностраничника?',
    a: 'Да, и это разумный путь для старта. Лендинг с чётким предложением и формой заявки закрывает 80% задачи на первом этапе. Дальше сайт можно расширять по мере роста — добавлять каталог, блог, личный кабинет.'
  },
  {
    q: 'Сколько ждать первых заявок из поиска?',
    a: 'Первые позиции по низкочастотным запросам обычно появляются через 1–3 месяца после запуска, ощутимый стабильный поток — через 6–12 месяцев. Это не быстрый канал, поэтому в первые месяцы сайт стоит поддерживать рекламой, пока SEO набирает силу.'
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
          className='fixed top-0 right-0 w-[650px] h-[500px] rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(244,114,182,0.07) 0%, rgba(0,112,243,0.05) 50%, transparent 70%)',
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
                  border: '1px solid rgba(244,114,182,0.35)',
                  background: 'rgba(244,114,182,0.1)',
                  color: '#f9a8d4'
                }}
              >
                Сайты для бизнеса
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                11 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Зачем бизнесу нужен сайт,{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #f472b6, #a78bfa, #60a5fa)'
                }}
              >
                если уже есть соцсети и маркетплейсы
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Разбираю без маркетинговых лозунгов: когда сайт реально окупается,
              когда достаточно страницы в VK, и что на самом деле решает
              результат — от экономики лида до того, как вас находят
              нейросети.
            </p>
          </header>

          <article className='space-y-14 text-gray-300 leading-relaxed'>
            {/* Хук */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Однажды утром аккаунт просто исчез
              </h2>
              <p className='mb-4'>
                За последние годы это стало обычной историей: компания годами
                вела сообщество во ВКонтакте или канал в Telegram, там же
                принимала заявки и хранила переписку с клиентами — а потом
                аккаунт блокируют за жалобу конкурента, теряется доступ к
                администрированию, или площадка меняет правила показа постов
                настолько, что охваты падают в разы за одну ночь.
              </p>
              <p className='mb-4'>
                В такой момент выясняется неприятная вещь: у бизнеса не было
                своего канала связи с клиентами. Была аренда чужой площадки —
                удобная, бесплатная, но полностью зависящая от чужих решений.
                Домен и сайт — это то немногое в интернете, что действительно
                принадлежит вам, а не даётся во временное пользование.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(244,114,182,0.08)',
                  border: '1px solid rgba(244,114,182,0.2)'
                }}
              >
                <p className='text-pink-200 font-medium leading-relaxed'>
                  Соцсети и маркетплейсы — отличный канал привлечения. Но канал
                  и актив — разные вещи. Актив нельзя отключить чужим решением
                  модерации.
                </p>
              </div>
            </section>

            {/* Отговорки */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Шесть отговорок, которые я слышу почти на каждой встрече
              </h2>
              <p className='mb-6'>
                Когда я обсуждаю с клиентом сайт, разговор почти всегда
                начинается с одного и того же набора возражений. Большинство
                из них звучат разумно — и в этом главная ловушка.
              </p>
              <div className='space-y-4'>
                {excuses.map(item => (
                  <div
                    key={item.excuse}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <p className='font-semibold text-white mb-2'>
                      {item.excuse}
                    </p>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.response}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Экономика */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Экономика вопроса: сколько на самом деле стоит лид
              </h2>
              <p className='mb-6'>
                Когда я делал расчёт для клиента из сферы услуг, оказалось, что
                за год он платил маркетплейсу комиссией больше, чем стоила бы{' '}
                <Link
                  href='/sozdanie-saytov'
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  разработка сайта
                </Link>
                , который окупился бы за два месяца. Вот как
                выглядит сравнение по стоимости привлечения клиента для разных
                каналов:
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
                        Канал
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium'>
                        Стоимость
                      </th>
                      <th className='py-3 text-gray-400 font-medium'>
                        Особенность
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {economics.map(row => (
                      <tr key={row.channel}>
                        <td className='py-4 pr-4 font-medium text-white align-top'>
                          {row.channel}
                        </td>
                        <td className='py-4 pr-4 text-gray-400 align-top'>
                          {row.cost}
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
                Честности ради: сайт не заменяет остальные каналы полностью.
                Он работает лучше всего в связке с ними — как точка, куда
                стекается и конвертируется трафик из рекламы, соцсетей и
                рекомендаций.
              </p>
            </section>

            {/* Ценность блоками */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Что сайт даёт такого, чего не дают соцсети и маркетплейсы
              </h2>
              <div className='space-y-6'>
                {valueBlocks.map(block => (
                  <div
                    key={block.title}
                    className='p-6 rounded-2xl'
                    style={{
                      background: block.color,
                      border: `1px solid ${block.borderColor}`
                    }}
                  >
                    <div className='flex items-center gap-3 mb-4'>
                      <span className='text-2xl'>{block.icon}</span>
                      <h3
                        className='text-lg font-semibold'
                        style={{ color: block.textColor }}
                      >
                        {block.title}
                      </h3>
                    </div>
                    <ul className='space-y-2'>
                      {block.items.map(item => (
                        <li
                          key={item}
                          className='flex items-start gap-2 text-sm text-gray-300'
                        >
                          <span
                            className='mt-0.5 shrink-0'
                            style={{ color: block.textColor }}
                          >
                            →
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Технические факторы */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Технические мелочи, которые решают результат
              </h2>
              <p className='mb-6'>
                Сайт сам по себе не гарантирует заявки. Есть несколько
                технических факторов, без которых даже красивый сайт работает
                вхолостую — я подробно разбирал разницу между «сделал сайт» и
                «сайт работает» в{' '}
                <Link
                  href='/blog/sozdanie-sajtov-nado-znat'
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  отдельной статье
                </Link>
                , а здесь — короткий список того, что проверяю в первую
                очередь:
              </p>
              <div className='space-y-3'>
                {techFactors.map(item => (
                  <div
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <span className='text-pink-400 mt-0.5 shrink-0 font-bold'>
                      →
                    </span>
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

            {/* SEO как актив */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                SEO — единственный канал, который работает на накопление
              </h2>
              <p className='mb-4'>
                Разница между платным и органическим трафиком не только в
                цене за клик. Реклама даёт результат ровно на время, пока
                идёт оплата — выключили бюджет, обращения остановились в тот
                же день. Органический трафик работает иначе: каждая
                полезная страница, каждая статья в блоге продолжает
                приводить посетителей месяцы и годы спустя после публикации.
              </p>
              <p>
                Это накопительный эффект. Сайт с историей качественного
                контента через год приносит заявки почти без дополнительных
                затрат — а сайт, запущенный вчера, только начинает набирать
                вес в глазах поисковика. Именно поэтому чем раньше бизнес
                запускает сайт и начинает вести блог, тем дешевле в итоге
                обходится каждый следующий клиент.
              </p>
            </section>

            {/* Аналитика */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Аналитика: канал, где результат виден по цифрам
              </h2>
              <p className='mb-4'>
                У офлайн-рекламы и раздачи листовок есть общая проблема: почти
                невозможно точно посчитать, сколько клиентов она принесла. С
                сайтом всё иначе. Яндекс.Метрика с настроенными целями
                показывает воронку целиком: сколько человек зашло, сколько
                долистало до цен, сколько заполнило форму и с какого именно
                источника трафика.
              </p>
              <p>
                Это меняет саму логику принятия решений в маркетинге. Вместо
                «кажется, реклама в этом месяце сработала хуже» — конкретная
                цифра: какая кампания, какая страница, какой заголовок
                конвертирует лучше. Без сайта такой точности не даёт ни один
                другой канал.
              </p>
            </section>

            {/* Inline CTA 1 */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(244,114,182,0.07)',
                border: '1px solid rgba(244,114,182,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Не уверены, какой сайт нужен именно вам?
                </p>
                <p className='text-sm text-gray-400'>
                  Разберём вашу ситуацию бесплатно — от бюджета до типа
                  сайта. Без давления и лишних слов.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #f472b6, #7d2cc8)'
                }}
              >
                Написать →
              </a>
            </div>

            {/* Интеграции и рабочий инструмент */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Сайт как рабочий инструмент, а не просто визитка
              </h2>
              <p className='mb-4'>
                Современный сайт для бизнеса — это не «страница с описанием
                услуг», а часть операционного процесса. Заявка с формы
                падает напрямую в Bitrix24 или amoCRM — я разбирал такую
                связку в статье про{' '}
                <Link
                  href='/blog/bitrix24-i-claude-avtomatizaciya-crm'
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  автоматизацию CRM
                </Link>
                . Уведомление о новой заявке одновременно прилетает менеджеру
                в Telegram — это же удобно завязать на{' '}
                <Link
                  href='/blog/telegram-boty-dlya-biznesa'
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  Telegram-бота
                </Link>
                , который сразу ответит клиенту, пока менеджер ещё не увидел
                уведомление. Оплата принимается прямо на сайте через СБП или
                ЮKassa, без звонков и переноса реквизитов вручную.
              </p>
              <p>
                Каждая такая интеграция убирает одно ручное действие из
                воронки продаж. По отдельности — мелочь. В сумме — это
                разница между менеджером, который вручную обрабатывает
                тридцать заявок в день, и системой, где ручного труда почти
                не осталось. Подробнее о том, что ещё можно автоматизировать
                в бизнес-процессах, — в статье про{' '}
                <Link
                  href='/blog/avtomatizaciya-biznesa'
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  автоматизацию бизнеса
                </Link>
                .
              </p>
            </section>

            {/* AI-контекст */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как ИИ-поиск меняет путь клиента в 2026 году
              </h2>
              <p className='mb-4'>
                Всё больше людей вместо поисковой строки задают вопрос
                напрямую нейросети: «посоветуй подрядчика», «сравни варианты»,
                «найди мастера в моём районе». Языковая модель формирует
                ответ на основе того, что она нашла в интернете — и если у
                компании нет сайта с чёткой структурой, понятным описанием
                услуг и актуальными данными, ИИ-ассистент просто не сможет
                на неё сослаться.
              </p>
              <p>
                Страница в закрытой соцсети для такого поиска почти
                бесполезна — её сложно проиндексировать и процитировать.
                Сайт с семантической разметкой, понятной структурой заголовков
                и структурированными данными — наоборот, ровно тот формат,
                который ИИ-системы умеют читать и пересказывать. Это уже не
                гипотетическое будущее: часть трафика на сайты клиентов
                сегодня приходит именно из ответов нейросетей, а не из
                классической выдачи.
              </p>
            </section>

            {/* Типы сайтов */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Какой сайт нужен именно вам
              </h2>
              <p className='mb-6'>
                Не любому бизнесу нужен{' '}
                <Link
                  href='/sozdanie-saytov/internet-magazin'
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  интернет-магазин
                </Link>
                , и не каждому хватит{' '}
                <Link
                  href='/sozdanie-saytov/lending'
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  одностраничника-лендинга
                </Link>
                . Вот ориентир по типам сайтов,
                срокам и бюджету:
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
            </section>

            {/* Не волшебная таблетка */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Честно: сайт — не волшебная таблетка
              </h2>
              <p className='mb-6'>
                Я не продаю сайты как решение всех проблем — это было бы
                нечестно. Вот три вещи, которые нужно понимать до старта:
              </p>
              <div className='space-y-4'>
                {notMagic.map(item => (
                  <div
                    key={item.myth}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,100,100,0.15)',
                      background: 'rgba(255,100,100,0.04)'
                    }}
                  >
                    <p className='font-semibold text-white mb-2'>
                      <span className='text-red-400 mr-2'>⚠</span>
                      {item.myth}
                    </p>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.reality}
                    </p>
                  </div>
                ))}
              </div>
              <p className='mt-6'>
                И да, бывают случаи, когда сайт объективно не первоочередная
                задача: например, у мастера-одиночки, который загружен
                заказами на месяцы вперёд исключительно по рекомендациям и не
                планирует расти. Здесь честнее сказать: подождите с сайтом,
                вложите время в то, что сейчас важнее.
              </p>
            </section>

            {/* Чек-лист */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Чек-лист: что подготовить перед стартом разработки
              </h2>
              <div className='space-y-3'>
                {checklist.map(item => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='mt-1 shrink-0 w-5 h-5 rounded-md border border-pink-400/40 flex items-center justify-center text-xs text-pink-300'>
                      ✓
                    </span>
                    <span className='text-sm text-gray-300'>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Типичные ошибки */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Из-за чего сайт не приносит заявок
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
              Соцсети и маркетплейсы — рабочие каналы привлечения, но это
              аренда чужой территории с чужими правилами. Сайт — актив,
              который принадлежит вам: он копит SEO-вес, интегрируется с
              CRM и мессенджерами, измеряется по цифрам и остаётся доступным
              для ИИ-поиска, где уже сегодня формируется часть решений
              клиентов. Он не спасает слабый продукт и не работает бесплатно
              сам по себе — но при разумных вложениях окупается быстрее,
              чем кажется на старте.
            </p>
          </div>

          {/* CTA */}
          <div
            className='mt-10 p-8 sm:p-10 rounded-3xl text-center'
            style={{
              background:
                'linear-gradient(135deg, rgba(244,114,182,0.12), rgba(0,112,243,0.12))',
              border: '1px solid rgba(244,114,182,0.25)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Готовы сделать сайт, который реально работает на бизнес?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Разрабатываю сайты под ключ — от лендинга до интернет-магазина
              с интеграцией CRM и онлайн-оплатой. Начнём с бесплатного
              разбора вашей задачи.
            </p>
            <a
              href='https://t.me/vitalyvronsky'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
              style={{
                background: 'linear-gradient(135deg, #f472b6, #7d2cc8)',
                boxShadow: '0 0 32px rgba(244,114,182,0.4)'
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
              href='/blog/sozdanie-sajtov-nado-znat'
              className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors'
            >
              Читать: почему сайт может не работать
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

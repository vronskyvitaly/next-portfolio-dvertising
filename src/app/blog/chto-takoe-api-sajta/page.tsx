import type { Metadata } from 'next'
import Link from 'next/link'
import BlogBreadcrumbs from '@/components/BlogBreadcrumbs'
import { ogImages } from '@/lib/og'

const PUBLISHED = '2026-07-27'
const URL_PATH = '/blog/chto-takoe-api-sajta'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`

export const metadata: Metadata = {
  title:
    'Что такое API сайта и для чего он нужен: простое объяснение | Виталий Вронский',
  description:
    'Что такое API сайта простыми словами, как он работает и зачем нужен бизнесу. REST, вебхуки, OAuth, лимиты и реальные примеры интеграций в 2026 году.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  keywords: [
    'что такое API сайта',
    'API для чего нужен',
    'REST API простыми словами',
    'интеграция по API',
    'API ключ сайта',
    'вебхуки API',
    'OAuth 2.0 авторизация',
    'подключение API к сайту'
  ],
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Что такое API сайта и для чего он нужен',
    description:
      'Простое объяснение того, как программы общаются между собой, зачем это бизнесу и как не наступить на грабли при интеграции.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Что такое API сайта и для чего он нужен',
    description:
      'Как программы общаются между собой, зачем это бизнесу и на что смотреть перед интеграцией.'
  },
  robots: { index: true, follow: true }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Что такое API сайта и для чего он нужен',
  description:
    'Что такое API сайта простыми словами, как он работает и зачем нужен бизнесу. REST, вебхуки, OAuth, лимиты и реальные примеры интеграций.',
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
    'что такое API сайта, REST API, интеграция по API, вебхуки, OAuth 2.0, API ключ'
}

const everydayExamples = [
  {
    icon: '🗺️',
    title: 'Карта на странице контактов',
    desc: 'Сайт не умеет рисовать карты — он запрашивает готовую картинку и логику у Яндекс.Карт или 2ГИС через их API.'
  },
  {
    icon: '💳',
    title: 'Приём оплаты',
    desc: 'Форма оплаты на сайте магазина — это фасад. Реальное списание денег и проверку карты делает платёжный шлюз через свой API.'
  },
  {
    icon: '🔑',
    title: 'Вход через соцсеть или Госуслуги',
    desc: 'Кнопка «Войти через VK» или ЕСИА не хранит ваш пароль — она передаёт запрос в чужой API и получает в ответ подтверждённые данные.'
  },
  {
    icon: '📦',
    title: 'Статус доставки СДЭК или Почты России',
    desc: 'Трек-номер на сайте магазина обновляется, потому что скрипт раз в несколько минут спрашивает API службы доставки: «где посылка».'
  },
  {
    icon: '📊',
    title: 'Счётчики Яндекс.Метрики',
    desc: 'Данные о посетителях уходят в аналитику через API счётчика — в реальном времени, без перезагрузки страницы.'
  },
  {
    icon: '▶️',
    title: 'Встроенное видео с YouTube',
    desc: 'Плеер на сайте — это виджет, который через API получает видео, статистику просмотров и список похожих роликов с серверов YouTube.'
  }
]

const businessBenefits = [
  {
    n: '01',
    title: 'Скорость выхода на рынок',
    desc: 'Подключить готовую карту, оплату или SMS-рассылку через API — часы работы. Написать то же самое с нуля — недели, а иногда и месяцы разработки и тестирования.'
  },
  {
    n: '02',
    title: 'Безопасность через разделение зон ответственности',
    desc: 'Вы не храните номера карт клиентов и не отвечаете за их защиту — этим занимается платёжный провайдер. API отдаёт наружу ровно столько функциональности, сколько нужно, и ни байтом больше.'
  },
  {
    n: '03',
    title: 'Интеграция без переговоров с чужими разработчиками',
    desc: 'Документация API — это контракт. Вам не нужно созваниваться с командой Яндекса, чтобы встроить карту, — достаточно прочитать документацию и получить ключ.'
  },
  {
    n: '04',
    title: 'Экономика: аренда функциональности дешевле владения',
    desc: 'Платить за количество запросов к платёжному API почти всегда дешевле, чем содержать своих специалистов по эквайрингу, PCI DSS и банковским протоколам.'
  }
]

const accessLevels = [
  {
    label: 'Внутренний (private)',
    color: '#34d399',
    desc: 'Используется только внутри компании — например, чтобы мобильное приложение и сайт обращались к одной базе заказов. Наружу не публикуется.'
  },
  {
    label: 'Партнёрский (partner)',
    color: '#22c55e',
    desc: 'Доступен ограниченному кругу — франшизам, агрегаторам, проверенным подрядчикам. Обычно требует отдельного соглашения и NDA.'
  },
  {
    label: 'Публичный (open)',
    color: '#4ade80',
    desc: 'Открыт всем разработчикам после регистрации: API Яндекс.Карт, Telegram Bot API, платёжные шлюзы. Именно с такими API чаще всего работают на сайтах.'
  }
]

const protocolsTable = [
  {
    name: 'REST',
    format: 'JSON поверх HTTP',
    when: 'Стандарт по умолчанию для веба: сайты, мобильные приложения, большинство публичных API в 2026 году.'
  },
  {
    name: 'GraphQL',
    format: 'JSON, один эндпоинт',
    when: 'Когда клиенту нужны разные наборы полей из одного запроса — экономит трафик, но сложнее кэшировать и лимитировать.'
  },
  {
    name: 'gRPC',
    format: 'Бинарный, поверх HTTP/2',
    when: 'Общение сервисов внутри бэкенда, где важна низкая задержка: микросервисы, высоконагруженные системы.'
  },
  {
    name: 'SOAP',
    format: 'XML, строгая схема',
    when: 'Legacy-системы, банковские и государственные интеграции, где важна формальная валидация каждого поля.'
  },
  {
    name: 'RPC / JSON-RPC',
    format: 'JSON, вызов «как функции»',
    when: 'Простые внутренние вызовы между сервисами, когда REST избыточен, а gRPC — overkill.'
  }
]

const httpMethods = [
  { method: 'GET', action: 'Прочитать данные', idempotent: 'Да' },
  { method: 'POST', action: 'Создать новую сущность', idempotent: 'Нет' },
  { method: 'PUT', action: 'Полностью заменить сущность', idempotent: 'Да' },
  { method: 'PATCH', action: 'Частично обновить сущность', idempotent: 'Нет*' },
  { method: 'DELETE', action: 'Удалить сущность', idempotent: 'Да' }
]

const statusCodes = [
  { range: '2xx', label: 'Успех', example: '200 OK, 201 Created' },
  {
    range: '4xx',
    label: 'Ошибка на вашей стороне',
    example: '401 нет доступа, 429 слишком много запросов'
  },
  {
    range: '5xx',
    label: 'Ошибка на стороне API',
    example: '500 внутренняя ошибка, 503 сервис недоступен'
  }
]

const hiddenComplexity = [
  {
    title: 'Рейт-лимиты и квоты',
    desc: 'У большинства API есть лимит: например, 100 запросов в минуту. Превысили — получаете 429 и должны подождать. Без ретраев с задержкой сайт просто «зависает» на пике трафика.'
  },
  {
    title: 'Пагинация больших ответов',
    desc: 'API отдаёт список заказов не весь сразу, а страницами по 20–100 штук с курсором или номером страницы. Забыли обработать — увидите только первую страницу данных.'
  },
  {
    title: 'Ретраи с экспоненциальной задержкой',
    desc: 'Если запрос не прошёл из-за временного сбоя, повторять его нужно не сразу, а с растущей паузой — 1с, 2с, 4с, 8с. Иначе вы своей же атакой уроните и без того нестабильный API.'
  },
  {
    title: 'Таймауты и обработка ошибок',
    desc: 'Внешний сервис может не ответить вовсе. Если не задать таймаут, пользователь будет смотреть на спиннер вечно, пока не устанет и не уйдёт.'
  },
  {
    title: 'Кэширование ответов',
    desc: 'Курс валют не обязательно спрашивать при каждом заходе на сайт — можно закэшировать на 5–10 минут и сэкономить на лимитах, скорости и стоимости запросов.'
  },
  {
    title: 'Версионирование и breaking changes',
    desc: 'Провайдер API выпускает v2 и через полгода отключает v1. Если не следить за письмами разработчика, сайт может однажды перестать работать без единой вашей правки в коде.'
  }
]

const realtimeApproaches = [
  {
    label: 'Поллинг (polling)',
    desc: 'Сайт сам раз в N секунд спрашивает: «что нового?». Просто в реализации, но неэффективно — большинство запросов возвращают «ничего не изменилось».'
  },
  {
    label: 'Вебхуки (webhooks)',
    desc: 'Не вы спрашиваете API, а API сам стучится к вам, когда что-то произошло — пришла оплата, изменился статус доставки. Экономит лимиты и даёт задержку в секунды, а не минуты.'
  },
  {
    label: 'WebSocket / Server-Sent Events',
    desc: 'Постоянное соединение для потоковых обновлений: котировки, статус заказа такси на карте, чат в реальном времени. Тяжелее в поддержке, но необходимо там, где важны миллисекунды.'
  }
]

const russiaIntegrations = [
  { name: 'Яндекс.Карты и 2ГИС', use: 'Карты, геокодинг, маршруты доставки' },
  {
    name: 'ЕСИА / Госуслуги',
    use: 'Вход и подтверждение личности через Госуслуги'
  },
  {
    name: 'СБП, ЮKassa, Т-Банк',
    use: 'Приём онлайн-платежей и переводов по QR'
  },
  {
    name: '1С и Bitrix24',
    use: 'Синхронизация заказов, остатков и сделок с CRM'
  },
  { name: 'СДЭК и Почта России', use: 'Расчёт доставки и трекинг посылок' },
  { name: 'Telegram Bot API', use: 'Уведомления, боты поддержки и продаж' }
]

const mistakesChecklist = [
  {
    title: 'API-ключ лежит в коде на клиенте',
    desc: 'Ключ, вставленный прямо в JavaScript браузера, виден любому через «Просмотр кода страницы» за 10 секунд. Секреты должны жить в переменных окружения на сервере, а браузер — обращаться к вашему же серверному прокси.'
  },
  {
    title: 'Нет обработки ошибок API',
    desc: 'Если внешний сервис недоступен, а на сайте это никак не обработано — форма заказа просто перестаёт отправляться, и никто не понимает, почему.'
  },
  {
    title: 'Не прочитаны лимиты до старта разработки',
    desc: 'Бесплатный тариф на 1000 запросов в месяц отлично работает на тесте и падает в первую же неделю после запуска рекламы.'
  },
  {
    title: 'Игнорируется версия API',
    desc: 'Использование неверсионированного или устаревшего эндпоинта — гарантированная поломка интеграции при следующем обновлении со стороны провайдера.'
  }
]

const preIntegrationChecklist = [
  'Документация — актуальная, с примерами запросов и ответов',
  'Лимиты — сколько запросов в тариф, что после превышения',
  'Цена — тарификация по запросам, объёму данных или подписке',
  'SLA — гарантированный аптайм и время ответа поддержки',
  'Поддержка — есть ли живые люди на связи, а не только форум',
  'Стабильность версий — как часто ломают обратную совместимость'
]

const faq = [
  {
    q: 'API — это то же самое, что интеграция?',
    a: 'Нет. API — это интерфейс, набор правил, по которым можно обратиться к чужой системе. Интеграция — это уже конкретная реализация: код, который использует этот интерфейс под задачу вашего сайта.'
  },
  {
    q: 'Нужен ли программист, чтобы подключить готовый API?',
    a: 'Для простого виджета вроде карты — иногда достаточно вставить script-тег из документации. Но как только речь заходит об оплате, авторизации или обмене данными с CRM, без разработчика надёжно и безопасно не обойтись — слишком много нюансов с ключами, ошибками и лимитами.'
  },
  {
    q: 'Чем REST отличается от обычного «сайт присылает данные»?',
    a: 'REST — это соглашение о том, как именно устроен обмен: конкретные HTTP-методы (GET, POST и другие), формат JSON, предсказуемые адреса ресурсов и коды ответов. Без такого соглашения каждая интеграция изобретала бы свой формат заново.'
  },
  {
    q: 'Сколько стоит подключить API к сайту?',
    a: 'Простая интеграция — карта, форма обратной связи в CRM — от 15 000 ₽. Оплата, авторизация или синхронизация с 1С/Bitrix24 — от 30 000 ₽ в зависимости от сложности логики и количества сценариев. Точная цена — после короткого созвона по задаче.'
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
          className='fixed top-0 right-0 w-150 h-150 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        <div className='relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-24'>
          <BlogBreadcrumbs path={URL_PATH} />

          <header className='mb-12'>
            <div className='flex flex-wrap gap-2 mb-6'>
              <span
                className='text-xs px-3 py-1 rounded-full'
                style={{
                  border: '1px solid rgba(16,185,129,0.35)',
                  background: 'rgba(16,185,129,0.1)',
                  color: '#34d399'
                }}
              >
                API и интеграции
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                10 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Что такое{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage: 'linear-gradient(90deg, #34d399, #22c55e)'
                }}
              >
                API сайта
              </span>{' '}
              и для чего он нужен
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Карта на странице контактов, оплата картой, вход через соцсеть —
              всё это работает не потому, что ваш сайт «умный», а потому что он
              умеет разговаривать с чужими программами по правилам. Эти правила
              и называются API. Разбираю, как это устроено технически, зачем
              бизнесу вообще это нужно и на что смотреть перед интеграцией.
            </p>
          </header>

          <article className='space-y-14 text-gray-300 leading-relaxed'>
            {/* Что такое API */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что такое API простыми словами
              </h2>
              <p className='mb-4'>
                <strong className='text-white'>
                  API (Application Programming Interface)
                </strong>{' '}
                — это интерфейс, через который одна программа может
                воспользоваться функциями другой, не зная, как та устроена
                внутри. Представьте розетку в стене: вы не думаете о том, как
                устроена электростанция, трансформаторы и провода — вы просто
                вставляете вилку по стандарту, и всё работает. API — это такая
                же стандартная «розетка», только для программ.
              </p>
              <p className='mb-6'>
                Когда на странице контактов вашего сайта отображается карта —
                сайт не умеет рисовать улицы и дома. Он отправляет запрос в API
                Яндекс.Карт: «дай мне карту вот этой точки», получает готовый
                ответ и показывает его пользователю. Всё взаимодействие занимает
                доли секунды и происходит незаметно для посетителя.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)'
                }}
              >
                <p className='text-emerald-200 font-medium leading-relaxed'>
                  API — это не «функция сайта». Это контракт: чётко описанный
                  способ попросить чужую систему что-то сделать и получить
                  предсказуемый ответ.
                </p>
              </div>
            </section>

            {/* Примеры из жизни */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-2'>
                API, которыми вы пользуетесь каждый день — даже не замечая
              </h2>
              <p className='text-gray-500 mb-6 text-sm'>
                Почти любой современный сайт — это набор из десятка чужих API,
                упакованных в единый интерфейс
              </p>
              <div className='grid sm:grid-cols-2 gap-4'>
                {everydayExamples.map(ex => (
                  <div
                    key={ex.title}
                    className='p-5 rounded-2xl flex flex-col gap-2'
                    style={{
                      border: '1px solid rgba(16,185,129,0.15)',
                      background: 'rgba(16,185,129,0.04)'
                    }}
                  >
                    <span className='text-2xl'>{ex.icon}</span>
                    <p className='text-sm font-semibold text-white leading-snug'>
                      {ex.title}
                    </p>
                    <p className='text-xs text-gray-500 leading-relaxed'>
                      {ex.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Зачем бизнесу */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Зачем API нужен бизнесу, а не только разработчикам
              </h2>
              <p className='mb-6'>
                В client-проектах я почти всегда сталкиваюсь с одним и тем же
                вопросом: «а зачем нам вообще эта интеграция, разве нельзя
                сделать всё своё». Можно — но вот что теряется, если
                игнорировать готовые API:
              </p>
              <div className='space-y-5'>
                {businessBenefits.map(b => (
                  <div key={b.n} className='flex gap-5'>
                    <div
                      className='shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white'
                      style={{
                        background: 'linear-gradient(135deg, #34d399, #22c55e)'
                      }}
                    >
                      {b.n}
                    </div>
                    <div>
                      <h3 className='font-semibold text-white mb-1'>
                        {b.title}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {b.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Уровни доступа */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Три уровня доступа к API
              </h2>
              <p className='mb-6'>
                Не каждый API открыт всем желающим. По уровню доступа их делят
                на три группы:
              </p>
              <div className='grid sm:grid-cols-3 gap-4'>
                {accessLevels.map(lvl => (
                  <div
                    key={lvl.label}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <p
                      className='text-sm font-semibold mb-2'
                      style={{ color: lvl.color }}
                    >
                      {lvl.label}
                    </p>
                    <p className='text-xs text-gray-500 leading-relaxed'>
                      {lvl.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Протоколы */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                REST, GraphQL, gRPC, SOAP: чем отличаются веб-API
              </h2>
              <p className='mb-6'>
                Источники десятилетней давности обычно ограничиваются REST и
                SOAP. В 2026 году список шире, и выбор протокола реально влияет
                на скорость и стоимость разработки:
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
                      <th className='py-3 pr-4 text-gray-400 font-medium w-28'>
                        Протокол
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium w-40'>
                        Формат
                      </th>
                      <th className='py-3 text-gray-400 font-medium'>
                        Когда используют
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {protocolsTable.map(row => (
                      <tr key={row.name}>
                        <td className='py-4 pr-4 font-medium text-white align-top'>
                          {row.name}
                        </td>
                        <td className='py-4 pr-4 text-gray-400 align-top'>
                          {row.format}
                        </td>
                        <td className='py-4 text-gray-300 align-top'>
                          {row.when}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Как работает на практике */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как API работает на практике: от документации до ответа
              </h2>
              <p className='mb-6'>
                За красивым словом «интеграция» скрывается вполне приземлённая
                последовательность шагов, одинаковая почти для любого веб-API:
              </p>
              <div className='space-y-5 mb-8'>
                {[
                  {
                    n: '01',
                    title: 'Найти документацию',
                    desc: 'У любого серьёзного API есть страница docs с описанием эндпоинтов, параметров и примеров запросов.'
                  },
                  {
                    n: '02',
                    title: 'Получить API-ключ',
                    desc: 'Регистрация в личном кабинете провайдера — и вам выдают уникальный ключ, который идентифицирует ваш сайт и считает лимиты.'
                  },
                  {
                    n: '03',
                    title: 'Отправить запрос',
                    desc: 'Обычно это HTTP-запрос на определённый адрес с ключом в заголовке или параметре — и ответ в формате JSON.'
                  },
                  {
                    n: '04',
                    title: 'Обработать ответ и ошибки',
                    desc: 'Показать данные пользователю, а если API ответил ошибкой — обработать её так, чтобы сайт не «сломался» молча.'
                  }
                ].map(step => (
                  <div key={step.n} className='flex gap-5'>
                    <div
                      className='shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white'
                      style={{
                        background: 'linear-gradient(135deg, #34d399, #22c55e)'
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

              <p className='mb-4'>
                Самый простой пример — подключение карты через script-тег с
                ключом в адресе:
              </p>
              <div
                className='p-5 rounded-2xl mb-6 overflow-x-auto'
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.025)'
                }}
              >
                <p className='text-xs uppercase tracking-widest text-gray-600 mb-3 font-mono'>
                  Подключение Яндекс.Карт на странице
                </p>
                <pre className='text-xs font-mono text-gray-300 leading-relaxed'>
                  {`<script
  src="https://api-maps.yandex.ru/2.1/?apikey=ВАШ_КЛЮЧ&lang=ru_RU"
></script>`}
                </pre>
              </div>

              <p className='mb-4'>
                А вот так выглядит правильный и неправильный способ обратиться к
                API, который требует секретный ключ — например, платёжному шлюзу
                или сервису отправки SMS:
              </p>

              <div className='grid sm:grid-cols-2 gap-4'>
                <div
                  className='p-5 rounded-2xl'
                  style={{
                    border: '1px solid rgba(239,68,68,0.25)',
                    background: 'rgba(239,68,68,0.06)'
                  }}
                >
                  <p className='text-xs font-mono text-red-400 mb-3'>
                    ✕ ключ в браузере — виден всем
                  </p>
                  <pre className='text-xs font-mono text-gray-400 leading-relaxed overflow-x-auto'>
                    {`// клиентский код, доступен
// через "Просмотр кода страницы"
fetch('https://api.provider.com/send', {
  headers: {
    Authorization: 'Bearer sk_live_49fa...'
  }
})`}
                  </pre>
                </div>
                <div
                  className='p-5 rounded-2xl'
                  style={{
                    border: '1px solid rgba(16,185,129,0.25)',
                    background: 'rgba(16,185,129,0.06)'
                  }}
                >
                  <p className='text-xs font-mono text-emerald-400 mb-3'>
                    ✓ ключ на сервере — Route Handler
                  </p>
                  <pre className='text-xs font-mono text-gray-400 leading-relaxed overflow-x-auto'>
                    {`// app/api/send/route.ts
export async function POST() {
  const res = await fetch(
    'https://api.provider.com/send',
    {
      headers: {
        Authorization:
          \`Bearer \${process.env.PROVIDER_KEY}\`
      }
    }
  )
  return Response.json(await res.json())
}`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Аутентификация */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Аутентификация: API-ключ, OAuth 2.0, JWT
              </h2>
              <p className='mb-4'>
                Не все API проверяют доступ одинаково. Три подхода встречаются
                чаще всего:
              </p>
              <div className='space-y-4 mb-6'>
                <div
                  className='p-4 rounded-xl'
                  style={{
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.02)'
                  }}
                >
                  <p className='text-sm font-semibold text-white mb-1'>
                    API-ключ
                  </p>
                  <p className='text-sm text-gray-400 leading-relaxed'>
                    Простая строка, которая идентифицирует ваше приложение.
                    Подходит для карт, погоды, курсов валют — там, где не нужен
                    личный аккаунт конкретного пользователя.
                  </p>
                </div>
                <div
                  className='p-4 rounded-xl'
                  style={{
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.02)'
                  }}
                >
                  <p className='text-sm font-semibold text-white mb-1'>
                    OAuth 2.0
                  </p>
                  <p className='text-sm text-gray-400 leading-relaxed'>
                    Пользователь сам разрешает вашему сайту доступ к своим
                    данным в другом сервисе — как при входе через соцсеть или
                    Госуслуги. Пароль от чужого аккаунта ваш сайт никогда не
                    видит.
                  </p>
                </div>
                <div
                  className='p-4 rounded-xl'
                  style={{
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.02)'
                  }}
                >
                  <p className='text-sm font-semibold text-white mb-1'>JWT</p>
                  <p className='text-sm text-gray-400 leading-relaxed'>
                    Подписанный токен с данными пользователя внутри. Сервер
                    проверяет подпись, не обращаясь к базе данных на каждый
                    запрос — быстро и удобно для API с высокой нагрузкой.
                  </p>
                </div>
              </div>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)'
                }}
              >
                <p className='text-emerald-200 font-medium leading-relaxed'>
                  Главное правило для любого из трёх подходов: секретные ключи
                  живут в переменных окружения на сервере, а не в коде, который
                  браузер загружает пользователю.
                </p>
              </div>
            </section>

            {/* HTTP словарь */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Минимальный словарь: методы и коды ответов
              </h2>
              <p className='mb-6'>
                Чтобы читать документацию любого API без страха, достаточно
                знать пять глаголов и три диапазона кодов:
              </p>
              <div className='grid sm:grid-cols-2 gap-6'>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr
                        className='text-left'
                        style={{
                          borderBottom: '1px solid rgba(255,255,255,0.08)'
                        }}
                      >
                        <th className='py-2 pr-3 text-gray-400 font-medium'>
                          Метод
                        </th>
                        <th className='py-2 text-gray-400 font-medium'>
                          Действие
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-white/5'>
                      {httpMethods.map(m => (
                        <tr key={m.method}>
                          <td className='py-3 pr-3 font-mono text-emerald-400 align-top'>
                            {m.method}
                          </td>
                          <td className='py-3 text-gray-400 align-top'>
                            {m.action}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr
                        className='text-left'
                        style={{
                          borderBottom: '1px solid rgba(255,255,255,0.08)'
                        }}
                      >
                        <th className='py-2 pr-3 text-gray-400 font-medium'>
                          Код
                        </th>
                        <th className='py-2 text-gray-400 font-medium'>
                          Значит
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-white/5'>
                      {statusCodes.map(s => (
                        <tr key={s.range}>
                          <td className='py-3 pr-3 font-mono text-emerald-400 align-top'>
                            {s.range}
                          </td>
                          <td className='py-3 text-gray-400 align-top'>
                            {s.label}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className='text-xs text-gray-600 mt-4'>
                * PATCH может быть идемпотентным в зависимости от реализации
                конкретного API — это не строгий стандарт, а рекомендация.
              </p>
            </section>

            {/* Inline CTA */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(16,185,129,0.07)',
                border: '1px solid rgba(16,185,129,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Нужно подключить API к сайту или CRM?
                </p>
                <p className='text-sm text-gray-400'>
                  Карты, оплата, авторизация, синхронизация с 1С или Bitrix24 —
                  разберём задачу и посчитаем стоимость за один созвон.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #34d399, #22c55e)'
                }}
              >
                Написать →
              </a>
            </div>

            {/* Но это ещё не всё */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-2'>
                Но это ещё не всё: то, что не написано в первой строке
                документации
              </h2>
              <p className='text-gray-500 mb-6 text-sm'>
                Отправить один тестовый запрос — легко. Заставить интеграцию
                стабильно работать месяцами под реальной нагрузкой — совсем
                другая задача
              </p>
              <div className='grid sm:grid-cols-2 gap-4'>
                {hiddenComplexity.map(item => (
                  <div
                    key={item.title}
                    className='p-4 rounded-xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <h3 className='text-sm font-semibold text-white mb-1'>
                      {item.title}
                    </h3>
                    <p className='text-xs text-gray-400 leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Реальное время */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как получать события в реальном времени: поллинг, вебхуки,
                WebSocket
              </h2>
              <p className='mb-6'>
                Классическая схема «запрос → ответ» не всегда подходит. Если
                нужно узнать о событии сразу, а не через минуту после того, как
                оно случилось, выбирают один из трёх подходов:
              </p>
              <div className='space-y-4'>
                {realtimeApproaches.map(r => (
                  <div
                    key={r.label}
                    className='p-4 rounded-xl flex gap-4 items-start'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.02)'
                    }}
                  >
                    <span
                      className='shrink-0 text-xs px-2 py-1 rounded font-mono font-semibold'
                      style={{
                        background: 'rgba(16,185,129,0.15)',
                        color: '#34d399'
                      }}
                    >
                      {r.label}
                    </span>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Российский контекст */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                С какими API реально работают российские сайты в 2026 году
              </h2>
              <div className='grid sm:grid-cols-2 gap-3'>
                {russiaIntegrations.map(item => (
                  <div
                    key={item.name}
                    className='flex items-start gap-2 text-sm text-gray-300 p-3 rounded-xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.06)',
                      background: 'rgba(255,255,255,0.015)'
                    }}
                  >
                    <span className='text-emerald-400 mt-0.5 shrink-0'>→</span>
                    <span>
                      <span className='text-white font-medium'>
                        {item.name}
                      </span>{' '}
                      — {item.use}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Проверка на практике / экономика */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Сколько реально экономит интеграция по API
              </h2>
              <p className='mb-4'>
                Частый сценарий в моих проектах: заявки с сайта падают на почту
                менеджера, он вручную переносит их в CRM. При потоке в 30–50
                заявок в день на это уходит по 2–3 часа ежедневно, а часть
                заявок теряется просто потому, что письмо ушло в спам.
              </p>
              <p className='mb-6'>
                Когда форма на сайте подключена к{' '}
                <Link
                  href='/blog/bitrix24-i-claude-avtomatizaciya-crm'
                  className='text-emerald-300 hover:text-emerald-200 underline underline-offset-2'
                >
                  API CRM
                </Link>{' '}
                напрямую, заявка
                становится сделкой за секунды, менеджер получает уведомление в
                Telegram, а ручной перенос данных исчезает вообще. Это не
                абстрактная «цифровизация» — это конкретные часы, которые
                команда тратит на продажи вместо копирования текста между
                вкладками.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.2)'
                }}
              >
                <p className='text-emerald-200 font-medium leading-relaxed'>
                  Такая же логика работает с остатками на складе{' '}
                  <Link
                    href='/sozdanie-saytov/internet-magazin'
                    className='text-emerald-100 hover:text-white underline underline-offset-2'
                  >
                    интернет-магазина
                  </Link>
                  , статусами доставки и уведомлениями клиентам — везде, где сейчас данные
                  вручную переносят из одной системы в другую.
                </p>
              </div>
            </section>

            {/* AI и MCP */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                API и ИИ: языковые модели и протокол MCP
              </h2>
              <p className='mb-4'>
                Идея «программы разговаривают между собой» получила новое
                продолжение с появлением API языковых моделей. Когда сайт
                вызывает API Claude или другой модели, он по сути делает то же
                самое, что и с картой или оплатой: отправляет запрос по
                документированному контракту и получает предсказуемый ответ —
                только в этот раз ответ генерирует ИИ.
              </p>
              <p className='mb-6'>
                MCP (Model Context Protocol) — открытый стандарт от Anthropic,
                который стандартизирует ещё один слой: как языковая модель сама
                обращается к внешним API и инструментам — CRM, базам данных,
                файловым хранилищам — не через кастомный код под каждый сервис,
                а по единому протоколу. Это тот же принцип API, только
                развёрнутый в сторону самого ИИ как клиента.
              </p>
            </section>

            {/* Ошибки и чек-лист */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые ошибки при интеграции
              </h2>
              <div className='space-y-4 mb-10'>
                {mistakesChecklist.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(239,68,68,0.2)',
                      background: 'rgba(239,68,68,0.05)'
                    }}
                  >
                    <h3 className='font-semibold text-white mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className='text-2xl font-bold text-white mb-4'>
                Чек-лист перед интеграцией
              </h2>
              <div
                className='p-5 rounded-2xl'
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.025)'
                }}
              >
                <div className='grid sm:grid-cols-2 gap-3'>
                  {preIntegrationChecklist.map(item => (
                    <div
                      key={item}
                      className='flex items-start gap-2 text-sm text-gray-300'
                    >
                      <span className='text-emerald-400 mt-0.5 shrink-0'>
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
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
                'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(34,197,94,0.12))',
              border: '1px solid rgba(16,185,129,0.25)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Нужна интеграция по API — помогу
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Карты, оплата, авторизация, обмен данными с CRM или 1С — беру
              задачу от документации до продакшена. Работаю по договору.
            </p>
            <a
              href='https://t.me/vitalyvronsky'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
              style={{
                background: 'linear-gradient(135deg, #34d399, #22c55e)',
                boxShadow: '0 0 32px rgba(16,185,129,0.4)'
              }}
            >
              Написать в Telegram →
            </a>
          </div>

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

import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES, SERVICE_ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH } from './constants'
import {
  jsonLd,
  everydayExamples,
  businessBenefits,
  accessLevels,
  protocolsTable,
  httpMethods,
  statusCodes,
  hiddenComplexity,
  realtimeApproaches,
  russiaIntegrations,
  mistakesChecklist,
  preIntegrationChecklist,
  faq
} from '@/common/data/pages/blog/chto-takoe-api-sajta'

export function ChtoTakoeApiSajtaPage() {
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
                  href={BLOG_ROUTES.bitrix24IClaudeAvtomatizaciyaCrm}
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
                    href={SERVICE_ROUTES.shop}
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
              href={ROUTES.home}
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

import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES, SERVICE_ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH } from './constants'
import {
  jsonLd,
  excuses,
  economics,
  valueBlocks,
  techFactors,
  siteTypes,
  notMagic,
  checklist,
  mistakes,
  faq
} from '@/common/data/pages/blog/zachem-biznesu-sajt'

export function ZachemBiznesuSajtPage() {
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
                  href={ROUTES.services}
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
                  href={BLOG_ROUTES.sozdanieSajtovNadoZnat}
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
                  href={BLOG_ROUTES.bitrix24IClaudeAvtomatizaciyaCrm}
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  автоматизацию CRM
                </Link>
                . Уведомление о новой заявке одновременно прилетает менеджеру
                в Telegram — это же удобно завязать на{' '}
                <Link
                  href={BLOG_ROUTES.telegramBotyDlyaBiznesa}
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
                  href={BLOG_ROUTES.avtomatizaciyaBiznesa}
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
                  href={SERVICE_ROUTES.shop}
                  className='text-pink-300 hover:text-pink-200 underline underline-offset-2'
                >
                  интернет-магазин
                </Link>
                , и не каждому хватит{' '}
                <Link
                  href={SERVICE_ROUTES.lending}
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
            <Link
              href={BLOG_ROUTES.sozdanieSajtovNadoZnat}
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

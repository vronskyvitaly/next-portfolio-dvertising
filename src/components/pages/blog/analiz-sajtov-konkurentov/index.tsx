import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH } from './constants'
import {
  jsonLd,
  generalMetrics,
  internalIndicators,
  techAudit,
  stages,
  services,
  afterAnalysis,
  standOut,
  checklist,
  faq
} from '@/common/data/pages/blog/analiz-sajtov-konkurentov'

export function AnalizSajtovKonkurentovPage() {
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
              'radial-gradient(circle, rgba(34,211,238,0.07) 0%, rgba(125,44,200,0.05) 50%, transparent 70%)',
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
                  border: '1px solid rgba(34,211,238,0.35)',
                  background: 'rgba(34,211,238,0.1)',
                  color: '#22d3ee'
                }}
              >
                Анализ конкурентов
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                13 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Анализ сайтов конкурентов:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #22d3ee, #38bdf8, #818cf8)'
                }}
              >
                подходы, метрики и инструменты
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Как искать конкурентов, какие метрики и технические показатели
              смотреть в первую очередь, какими сервисами пользоваться и, самое
              главное, что делать с результатами анализа, чтобы они не остались
              просто файлом в облаке.
            </p>
          </header>

          <article className='space-y-14 text-gray-300 leading-relaxed'>
            {/* Хук */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Вы открыли сайт конкурента и не поняли, почему он выше вас
              </h2>
              <p className='mb-4'>
                Знакомая ситуация: сайт вроде бы не хуже вашего, тексты не
                сильнее, а конкурент стабильно на пару строчек выше в выдаче и
                получает заявки, которые могли бы прийти к вам. Проблема почти
                никогда не в одной причине - она складывается из десятка мелких
                деталей, часть из которых видна только при внимательном
                техническом разборе, а не при беглом взгляде на дизайн.
              </p>
              <p className='mb-4'>
                Когда я делаю технический аудит для клиентов, разница между
                «кажется, у конкурента сайт получше» и конкретным списком из
                пятнадцати пунктов - это разница между догадками и планом
                действий. В этой статье собрал подход, которым пользуюсь сам:
                что смотреть, какими инструментами и, главное, как превратить
                собранные данные в реальные изменения на своём сайте.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.2)'
                }}
              >
                <p className='text-cyan-200 font-medium leading-relaxed'>
                  Анализ конкурентов - это не разовая проверка, а привычка.
                  Рынок и алгоритмы поисковиков меняются постоянно, и сайт,
                  который был лидером ниши год назад, вполне может уже терять
                  позиции - просто пока никто этого не заметил.
                </p>
              </div>
            </section>

            {/* Как найти конкурентов */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как найти, кого именно анализировать
              </h2>
              <p className='mb-4'>
                Проще всего начать с поисковой выдачи: наберите три-четыре
                ключевых запроса, по которым хотите получать клиентов, и
                выпишите сайты из топ-10, которые повторяются от запроса к
                запросу. Это и есть ваши прямые конкуренты в поиске, а не
                обязательно те, кого вы считаете конкурентами по бизнесу.
              </p>
              <p className='mb-4'>
                Второй источник - соцсети и тематические сообщества: там часто
                мелькают одни и те же бренды, а хэштеги и отраслевые рейтинги
                быстро формируют список. Третий - специализированные
                SEO-сервисы, которые по вашему домену сами предлагают список
                похожих сайтов на основе пересечения ключевых слов, это
                экономит время, когда ниша большая и на глаз всех игроков не
                перечислить. Как отличить настоящих поисковых конкурентов от
                случайных гостей выдачи, я разобрал отдельно в статье{' '}
                <Link
                  href={BLOG_ROUTES.opredelenieKonkurentovSajta}
                  className='text-cyan-300 hover:text-cyan-200 underline underline-offset-2'
                >
                  «Определение основных конкурентов сайта»
                </Link>
                .
              </p>
              <p>
                Из всего списка стоит оставить не больше трёх-пяти сайтов для
                подробного разбора. Большее количество превращает анализ в
                поверхностный обзор, из которого сложно сделать конкретные
                выводы - лучше глубоко разобрать нескольких, чем поверхностно
                пробежаться по двадцати.
              </p>
            </section>

            {/* Общие показатели */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Общие показатели: на что смотреть в первую очередь
              </h2>
              <p className='mb-6'>
                Перед тем как погружаться в детали, стоит быстро оценить
                масштаб и статус конкурента - это займёт пару минут на каждый
                сайт:
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
                      <th className='py-3 pr-4 text-gray-400 font-medium w-56'>
                        Показатель
                      </th>
                      <th className='py-3 text-gray-400 font-medium'>
                        Что это даёт
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {generalMetrics.map(row => (
                      <tr key={row.metric}>
                        <td className='py-4 pr-4 font-medium text-white align-top'>
                          {row.metric}
                        </td>
                        <td className='py-4 text-gray-300 align-top'>
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Внутренние показатели */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Внутренние показатели: то, что видит и чувствует посетитель
              </h2>
              <div className='space-y-4'>
                {internalIndicators.map(item => (
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

            {/* Технический аудит */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Технический аудит: то, что чаще всего пропускают
              </h2>
              <p className='mb-6'>
                Общий SEO-анализ сайта конкурента почти всегда сводится к
                ключевым словам и позициям, а техническая сторона остаётся за
                кадром. Это ошибка: скорость, адаптивность и корректная
                разметка влияют на ранжирование не меньше текста, а иногда и
                больше. Вот что я проверяю в первую очередь и какими
                бесплатными инструментами:
              </p>
              <div className='space-y-4'>
                {techAudit.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(34,211,238,0.15)',
                      background: 'rgba(34,211,238,0.04)'
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
              <p className='mt-6'>
                На практике этот блок анализа даёт самые конкретные точки
                роста. Ключевые слова конкурента вы можете скопировать в свою
                семантику максимум за день, а вот его скорость загрузки и
                продуманную структуру заголовков не скопируешь - зато можно
                сделать лучше, если понимать, что именно нужно поправить.
              </p>
            </section>

            {/* Inline CTA 1 */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(34,211,238,0.07)',
                border: '1px solid rgba(34,211,238,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Хотите готовый разбор, а не собирать данные самостоятельно?
                </p>
                <p className='text-sm text-gray-400'>
                  Делаю бесплатный экспресс-аудит вашего сайта и одного-двух
                  конкурентов: скорость, техническое SEO, слабые места. Просто
                  напишите в Telegram.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #7d2cc8)'
                }}
              >
                Написать →
              </a>
            </div>

            {/* Поэтапный алгоритм */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Поэтапный алгоритм анализа
              </h2>
              <p className='mb-6'>
                Когда общие данные собраны, дальше стоит идти по одному и тому
                же сценарию для каждого конкурента - так результаты легко
                сравнивать между собой:
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
                        background: 'rgba(34,211,238,0.15)',
                        color: '#22d3ee'
                      }}
                    >
                      {i + 1}
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

            {/* Но вот в чём сложность */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Но вот в чём сложность: цифры конкурента не всегда то, чем
                кажутся
              </h2>
              <p className='mb-4'>
                Частая ошибка - сравнивать сайты только по позициям в поиске.
                Позиция может быть высокой из-за многолетней истории домена, а
                не из-за качества текущей версии сайта: молодой сайт с лучшей
                технической базой и полезным контентом легко обгоняет старый,
                но заброшенный, просто это занимает больше времени, чем один
                месяц.
              </p>
              <p className='mb-4'>
                Вторая ловушка - оценочная посещаемость из сервисов-агрегаторов.
                Она всегда приблизительная, особенно для сайтов с небольшим
                трафиком, и её стоит использовать как ориентир по масштабу, а
                не как точную цифру для сравнения.
              </p>
              <p>
                И третье: сайт конкурента может выглядеть внушительно, но при
                этом быть собран на конструкторе с искусственно ограниченными
                возможностями. Если вы увидели это через Wappalyzer, не стоит
                равняться на такой сайт в вопросах технической архитектуры -
                конструктор не даёт гибко управлять скоростью, кастомной
                логикой и глубокими SEO-настройками, поэтому у сайта на{' '}
                <Link
                  href={ROUTES.services}
                  className='text-cyan-300 hover:text-cyan-200 underline underline-offset-2'
                >
                  собственной разработке
                </Link>{' '}
                в этой части почти всегда есть
                структурное преимущество.
              </p>
            </section>

            {/* Сервисы */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Сервисы для анализа конкурентов
              </h2>
              <div className='space-y-4'>
                {services.map(item => (
                  <div
                    key={item.name}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <p className='font-semibold text-white mb-2'>
                      {item.name}
                    </p>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className='mt-6'>
                Большинство сервисов для анализа ключевых слов и позиций
                платные, но почти у всех есть демо или ограниченная бесплатная
                версия - для первой оценки этого обычно хватает. А технические
                инструменты вроде PageSpeed Insights, DevTools и Wappalyzer
                бесплатны полностью и покрывают самую важную часть анализа.
              </p>
            </section>

            {/* Что делать с результатами */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что делать с результатами анализа
              </h2>
              <p className='mb-6'>
                Здесь начинается самое неудобное: собрать данные - это лёгкая
                часть. Большинство находок, которые реально двигают позиции и
                конверсию, невозможно закрыть без разработчика:
              </p>
              <div className='space-y-4'>
                {afterAnalysis.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,100,100,0.15)',
                      background: 'rgba(255,100,100,0.04)'
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
              <p className='mt-6'>
                Про то, почему «сделать сайт легко, а заставить его работать -
                нет», я подробно писал в статье{' '}
                <Link
                  href={BLOG_ROUTES.sozdanieSajtovNadoZnat}
                  className='text-cyan-300 hover:text-cyan-200 underline underline-offset-2'
                >
                  «Создать сайт сейчас легко. Но это ещё не сайт»
                </Link>
                . Анализ конкурентов без плана по внедрению превращается в
                файл с выводами, который никто не открывает через месяц.
              </p>
            </section>

            {/* Как выделиться */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Как выделить свой сайт среди конкурентов
              </h2>
              <p className='mb-6'>
                Если собрать воедино, за счёт чего сайты реально выигрывают у
                конкурентов в своей нише, список получается коротким и вполне
                конкретным:
              </p>
              <div className='space-y-4'>
                {standOut.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(34,211,238,0.15)',
                      background: 'rgba(34,211,238,0.04)'
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
              <p className='mt-6'>
                Ни один из этих пунктов не решается один раз и навсегда. Когда
                я делал редизайн сайта для клиента из сферы услуг с упором
                именно на эти пять пунктов, время на первом экране до понимания
                предложения сократилось до пары секунд, а заявки с онлайн-
                калькулятора стали приходить уже предварительно квалифицированными
                по бюджету - менеджеру больше не нужно было тратить звонок на
                выяснение, укладывается ли клиент в вилку цен.
              </p>
            </section>

            {/* Inline CTA 2 */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(34,211,238,0.07)',
                border: '1px solid rgba(34,211,238,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Нашли в анализе то, что нужно доработать?
                </p>
                <p className='text-sm text-gray-400'>
                  Скорость, техническое SEO, формы и интеграции - беру
                  ограниченное число проектов в месяц, чтобы вести каждый без
                  спешки. Опишите задачу в брифе.
                </p>
              </div>
              <Link
                href={ROUTES.brief}
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #7d2cc8)'
                }}
              >
                Заполнить бриф →
              </Link>
            </div>

            {/* Чек-лист */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Чек-лист: анализ сайтов конкурентов за один заход
              </h2>
              <div className='space-y-3'>
                {checklist.map(item => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='mt-1 shrink-0 w-5 h-5 rounded-md border border-cyan-400/40 flex items-center justify-center text-xs text-cyan-300'>
                      ✓
                    </span>
                    <span className='text-sm text-gray-300'>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые вопросы об анализе конкурентов
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
              Анализ конкурентов работает только тогда, когда идёт дальше
              общих показателей и ключевых слов - в техническую часть, которую
              большинство пропускает: скорость, Core Web Vitals, адаптивность,
              структуру заголовков и разметку. Именно там чаще всего
              обнаруживается разрыв, который проще всего закрыть. Выбирайте
              не больше трёх-пяти конкурентов, проверяйте не только позиции, но
              и техническое состояние сайта, и превращайте выводы в конкретный
              список задач, а не в файл, который никто не откроет через
              месяц.
            </p>
          </div>

          {/* CTA */}
          <div
            className='mt-10 p-8 sm:p-10 rounded-3xl text-center'
            style={{
              background:
                'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(125,44,200,0.12))',
              border: '1px solid rgba(34,211,238,0.25)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Готовы доработать сайт по итогам анализа?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              От точечной технической доработки до полной разработки сайта на
              Next.js: скорость, SEO-разметка, формы и интеграции с CRM.
              Работаю удалённо с клиентами из любого города. Первый разбор
              задачи - бесплатно.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
                style={{
                  background: 'linear-gradient(135deg, #22d3ee, #7d2cc8)',
                  boxShadow: '0 0 32px rgba(34,211,238,0.35)'
                }}
              >
                Написать в Telegram →
              </a>
              <Link
                href={ROUTES.brief}
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/15 transition-all hover:bg-white/5'
              >
                Заполнить бриф на сайте
              </Link>
            </div>
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
              href={BLOG_ROUTES.zachemBiznesuSajt}
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

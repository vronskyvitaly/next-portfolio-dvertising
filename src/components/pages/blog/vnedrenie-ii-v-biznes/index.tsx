import Image from 'next/image'
import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH, COVER_ALT, coverImage } from './constants'
import {
  jsonLd,
  reasons,
  stages,
  departments,
  chatbotVsAgent,
  agentSteps,
  costRows,
  costFactors,
  risks,
  metrics,
  selectionRules,
  mistakes,
  startChecklist,
  competitors,
  faq
} from '@/common/data/pages/blog/vnedrenie-ii-v-biznes'

const tableCard = {
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)'
}

const ctaStyle = {
  background: 'linear-gradient(135deg, #a78bfa, #7d2cc8)'
}

export function VnedrenieIiVBiznesPage() {
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
              'radial-gradient(circle, rgba(167,139,250,0.09) 0%, rgba(125,44,200,0.06) 50%, transparent 70%)',
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
                  border: '1px solid rgba(167,139,250,0.35)',
                  background: 'rgba(167,139,250,0.1)',
                  color: '#c4b5fd'
                }}
              >
                ИИ в бизнесе
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                16 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Внедрение ИИ в бизнес:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #c4b5fd, #a78bfa, #22d3ee)'
                }}
              >
                пошаговый план, сроки и стоимость
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Внедрение ИИ в бизнес начинается не с выбора нейросети, а с
              выбора задачи, которую она должна решить. Разбираю, как встроить
              ИИ в бизнес-процессы, какие сценарии работают по отделам, чем
              ИИ-агент отличается от чат-бота, сколько это стоит под ключ и
              где компании теряют деньги.
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
              <h2 className='text-2xl font-bold text-white mb-4'>
                Почему большинство внедрений ИИ заканчиваются ничем
              </h2>
              <p className='mb-4'>
                Типичная история: руководитель прочитал про ИИ, купил доступ к
                нескольким сервисам и поручил команде «использовать». Через
                месяц выясняется, что выручка не изменилась, а сотрудники
                либо забыли про инструмент, либо тайно гоняют через него
                личные задачи.
              </p>
              <p className='mb-6'>
                Проблема почти всегда не в технологии. Вот что я вижу в
                клиентских проектах чаще всего:
              </p>
              <div className='space-y-4'>
                {reasons.map(item => (
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
              <div
                className='mt-6 p-5 rounded-2xl'
                style={{
                  background: 'rgba(167,139,250,0.08)',
                  border: '1px solid rgba(167,139,250,0.22)'
                }}
              >
                <p className='text-violet-200 font-medium leading-relaxed'>
                  Рабочая формула: один процесс, один измеримый результат,
                  один ответственный. Всё остальное приходит после первого
                  успешного пилота.
                </p>
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что такое внедрение ИИ в бизнес-процессы
              </h2>
              <p className='mb-4'>
                Внедрение ИИ в бизнес-процессы - это встраивание языковых
                моделей и других алгоритмов в конкретные рабочие операции:
                обработку заявки, ответ клиенту, проверку документа, подготовку
                отчёта. Результатом становится не «у нас есть нейросеть», а
                «заявка обрабатывается за три минуты вместо часа».
              </p>
              <p className='mb-4'>
                Важно различать три уровня, потому что цена и сроки у них
                отличаются в разы:
              </p>
              <ul className='list-disc pl-6 space-y-2 mb-4'>
                <li>
                  <span className='text-white'>Личное использование:</span>{' '}
                  сотрудники сами пользуются чат-ассистентами для текстов и
                  анализа. Дёшево, но эффект не системный.
                </li>
                <li>
                  <span className='text-white'>Встроенный сценарий:</span>{' '}
                  ИИ работает внутри процесса, подключён к CRM, почте или
                  мессенджеру и выполняет заданную операцию.
                </li>
                <li>
                  <span className='text-white'>ИИ-агент:</span> система сама
                  выбирает шаги и инструменты для достижения цели, под
                  контролем правил и человека.
                </li>
              </ul>
              <p>
                Эта статья в основном про второй и третий уровни. Базу про
                автоматизацию без ИИ - когда достаточно обычных интеграций -
                я разбирал в материале{' '}
                <Link
                  href={BLOG_ROUTES.avtomatizaciyaBiznesa}
                  className='text-violet-300 hover:text-violet-200 underline underline-offset-2'
                >
                  «Автоматизация бизнеса»
                </Link>
                . Иногда процесс решается без нейросети вообще, и это
                нормальный результат аудита.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                С чего начать внедрение ИИ в бизнес: 6 этапов
              </h2>
              <p className='mb-6'>
                Сроки ниже - ориентиры для малого и среднего бизнеса. Они
                сдвигаются в зависимости от состояния данных и числа
                согласований на вашей стороне.
              </p>
              <ol className='relative space-y-4'>
                {stages.map((item, i) => (
                  <li
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
                  >
                    <span
                      className='shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold'
                      style={{
                        background: 'rgba(167,139,250,0.18)',
                        color: '#c4b5fd'
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div className='flex flex-wrap items-center gap-2 mb-1'>
                        <p className='font-semibold text-white'>{item.title}</p>
                        <span className='text-xs px-2 py-0.5 rounded-full border border-white/10 text-gray-500'>
                          {item.time}
                        </span>
                      </div>
                      <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className='mt-6'>
                Сложность в том, что этапы 3 и 4 нельзя полностью
                формализовать. Именно на них выясняется, что данные лежат в
                трёх системах, у менеджеров свои неписаные правила, а
                «типовой вопрос клиента» встречается в десяти формулировках.
                Здесь и нужен опыт.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Сценарии по отделам: куда ИИ приносит пользу
              </h2>
              <p className='mb-6'>
                Ниже - сценарии, которые встречаются в проектах чаще всего.
                Начинать стоит с отдела, где больше повторяющейся работы и
                проще измерить результат.
              </p>
              <div className='space-y-4'>
                {departments.map(dep => (
                  <div
                    key={dep.name}
                    className='p-5 rounded-2xl'
                    style={{
                      border: `1px solid ${dep.color}33`,
                      background: `${dep.color}0d`
                    }}
                  >
                    <p
                      className='font-semibold mb-3'
                      style={{ color: dep.color }}
                    >
                      {dep.name}
                    </p>
                    <ul className='space-y-2'>
                      {dep.items.map(text => (
                        <li
                          key={text}
                          className='flex gap-2 text-sm text-gray-300'
                        >
                          <span style={{ color: dep.color }}>•</span>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className='mt-6'>
                Для продаж и поддержки самый частый вариант - связка с CRM.
                Как это выглядит на практике, я показывал в статье про{' '}
                <Link
                  href={BLOG_ROUTES.bitrix24IClaudeAvtomatizaciyaCrm}
                  className='text-violet-300 hover:text-violet-200 underline underline-offset-2'
                >
                  автоматизацию Битрикс24 с помощью Claude
                </Link>
                , а клиентский канал в мессенджере разбирает материал про{' '}
                <Link
                  href={BLOG_ROUTES.telegramBotyDlyaBiznesa}
                  className='text-violet-300 hover:text-violet-200 underline underline-offset-2'
                >
                  Telegram-ботов для бизнеса
                </Link>
                .
              </p>
            </section>

            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(167,139,250,0.08)',
                border: '1px solid rgba(167,139,250,0.22)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Не уверены, с какого процесса начать?
                </p>
                <p className='text-sm text-gray-400'>
                  Опишите, чем заняты ваши сотрудники в течение недели. Я
                  подскажу, где ИИ даст эффект, а где хватит обычной
                  автоматизации. Первый разбор бесплатный.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={ctaStyle}
              >
                Написать →
              </a>
            </div>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Внедрение ИИ-агентов в бизнес: чем это отличается от чат-бота
              </h2>
              <p className='mb-4'>
                Внедрение ИИ-агентов в бизнес-процессы - самая быстрорастущая
                часть рынка, и самая рискованная. Обычный бот только отвечает.
                Агент действует: создаёт сделку, проверяет остатки, назначает
                встречу. Поэтому ошибка агента стоит дороже ошибки бота.
              </p>
              <div className='overflow-x-auto mb-8'>
                <table className='w-full text-sm'>
                  <thead>
                    <tr
                      className='text-left'
                      style={{
                        borderBottom: '1px solid rgba(255,255,255,0.08)'
                      }}
                    >
                      <th className='py-3 pr-4 text-gray-400 font-medium'>
                        Параметр
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium'>
                        Чат-бот
                      </th>
                      <th className='py-3 text-gray-400 font-medium'>
                        ИИ-агент
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {chatbotVsAgent.map(row => (
                      <tr key={row.row}>
                        <td className='py-3 pr-4 text-white align-top'>
                          {row.row}
                        </td>
                        <td className='py-3 pr-4 text-gray-400 align-top'>
                          {row.bot}
                        </td>
                        <td className='py-3 text-violet-200 align-top'>
                          {row.agent}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className='text-xl font-semibold text-white mb-3'>
                Из чего состоит рабочий агент
              </h3>
              <div className='grid gap-4 sm:grid-cols-2'>
                {agentSteps.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={tableCard}
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
                Для подключения к вашим системам агенту нужен программный
                интерфейс. Если вы не уверены, что это такое и есть ли он у
                вашей CRM, прочитайте{' '}
                <Link
                  href={BLOG_ROUTES.chtoTakoeApiSajta}
                  className='text-violet-300 hover:text-violet-200 underline underline-offset-2'
                >
                  разбор про API сайта
                </Link>
                : вебхуки, лимиты и ключи доступа определяют, насколько
                надёжным получится решение.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Внедрение ИИ в бизнес под ключ: сроки и стоимость
              </h2>
              <p className='mb-4'>
                Вопрос «сколько стоит» самый частый и самый неудобный: честный
                ответ «зависит». Чтобы дать вам ориентир, ниже вилки, которые
                я использую при первичной оценке. Это не публичный прайс и не
                статистика рынка, а диапазоны для планирования бюджета.
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
                      <th className='py-3 pr-4 text-gray-400 font-medium'>
                        Тип решения
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium'>
                        Пример
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium whitespace-nowrap'>
                        Срок
                      </th>
                      <th className='py-3 text-gray-400 font-medium whitespace-nowrap'>
                        Вилка
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {costRows.map(row => (
                      <tr key={row.type}>
                        <td className='py-3 pr-4 text-white align-top'>
                          {row.type}
                        </td>
                        <td className='py-3 pr-4 text-gray-400 align-top'>
                          {row.example}
                        </td>
                        <td className='py-3 pr-4 text-gray-300 align-top whitespace-nowrap'>
                          {row.time}
                        </td>
                        <td className='py-3 text-violet-200 align-top whitespace-nowrap'>
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='mt-4 text-sm text-gray-500'>
                К разовой стоимости добавляется ежемесячный расход: оплата
                моделей по объёму запросов, хостинг и сопровождение.
              </p>

              <h3 className='text-xl font-semibold text-white mt-10 mb-3'>
                От чего зависит цена
              </h3>
              <div className='space-y-3'>
                {costFactors.map(item => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='mt-1 shrink-0 w-5 h-5 rounded-md border border-violet-400/40 flex items-center justify-center text-xs text-violet-300'>
                      ✓
                    </span>
                    <span className='text-sm text-gray-300'>{item}</span>
                  </div>
                ))}
              </div>
              <p className='mt-6'>
                Если нужна оценка именно вашего проекта, быстрее всего заполнить{' '}
                <Link
                  href={ROUTES.brief}
                  className='text-violet-300 hover:text-violet-200 underline underline-offset-2'
                >
                  бриф
                </Link>
                : по нему я называю диапазон и срок до начала работ.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Риски: данные, 152-ФЗ и галлюцинации
              </h2>
              <p className='mb-6'>
                Здесь большинство материалов в выдаче ограничиваются фразой
                «учитывайте риски». Я предлагаю конкретнее:
              </p>
              <div className='space-y-4'>
                {risks.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(251,191,36,0.18)',
                      background: 'rgba(251,191,36,0.04)'
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
              <div
                className='mt-6 p-5 rounded-2xl'
                style={{
                  background: 'rgba(167,139,250,0.08)',
                  border: '1px solid rgba(167,139,250,0.22)'
                }}
              >
                <p className='text-violet-200 font-medium leading-relaxed'>
                  Практическое правило: чем дороже последствия ошибки, тем
                  ближе к шагу должен стоять человек. Черновик письма можно
                  отправлять автоматически, а возврат денег и договор лучше
                  подтверждать вручную.
                </p>
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как считать окупаемость внедрения ИИ
              </h2>
              <p className='mb-6'>
                Выберите две-три метрики до старта и не меняйте их по ходу
                проекта. Из этого списка обычно хватает трёх:
              </p>
              <div className='grid gap-4 sm:grid-cols-2'>
                {metrics.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={tableCard}
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
              <h3 className='text-xl font-semibold text-white mt-10 mb-3'>
                Условный пример расчёта
              </h3>
              <p className='mb-4'>
                Цифры выдуманные, они нужны только чтобы показать логику.
                Допустим, три менеджера тратят по 6 часов в неделю на ввод
                данных заявок в CRM. Это 18 часов в неделю, около 72 часов в
                месяц. Если час стоит 500 рублей, это 36 тысяч рублей в месяц.
                Решение, которое забирает 80% этой работы, экономит около 29
                тысяч в месяц. Минус 5 тысяч на модели и сопровождение
                даёт 24 тысячи чистой экономии.
              </p>
              <p>
                При разработке за 200 тысяч срок возврата - около восьми
                месяцев. Это только прямая экономия: скорость ответа и меньшее
                число потерянных заявок в расчёт не вошли, а они нередко дают
                больше. Если пример кажется вам слабым, то именно такие
                расчёты и отсеивают плохие идеи до разработки.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как выбрать компанию или специалиста по внедрению ИИ
              </h2>
              <p className='mb-6'>
                Рынок компаний по внедрению ИИ в бизнес пока сырой: рядом
                работают крупные интеграторы, студии, фрилансеры и вчерашние
                «продавцы курсов». Вот на что я бы смотрел на месте заказчика:
              </p>
              <div className='space-y-3'>
                {selectionRules.map((item, i) => (
                  <div
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
                  >
                    <span
                      className='shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold'
                      style={{
                        background: 'rgba(167,139,250,0.18)',
                        color: '#c4b5fd'
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
              <p className='mt-6'>
                Что до обучения: короткий курс для команды полезен, чтобы
                сотрудники понимали ограничения моделей. Но курс сам по себе
                ничего не внедряет, поэтому эффективнее учить людей прямо на
                задачах пилота.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Ошибки, которые стоят денег
              </h2>
              <div className='space-y-3'>
                {mistakes.map(item => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='mt-0.5 shrink-0 w-5 h-5 rounded-md border border-red-400/40 flex items-center justify-center text-xs text-red-300'>
                      ×
                    </span>
                    <span className='text-sm text-gray-300'>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(167,139,250,0.08)',
                border: '1px solid rgba(167,139,250,0.22)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Нужна оценка вашего проекта?
                </p>
                <p className='text-sm text-gray-400'>
                  Беру ограниченное число проектов в месяц, чтобы вести каждый
                  без спешки. Опишите процесс в брифе, и я верну вилку цены и
                  срок пилота.
                </p>
              </div>
              <Link
                href={ROUTES.brief}
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={ctaStyle}
              >
                Заполнить бриф →
              </Link>
            </div>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Чек-лист перед стартом
              </h2>
              <div className='space-y-3'>
                {startChecklist.map(item => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='mt-1 shrink-0 w-5 h-5 rounded-md border border-violet-400/40 flex items-center justify-center text-xs text-violet-300'>
                      ✓
                    </span>
                    <span className='text-sm text-gray-300'>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Чем эта статья отличается от остальных в выдаче
              </h2>
              <p className='mb-6'>
                Перед написанием я посмотрел, что отвечают на запрос «внедрение
                ИИ в бизнес» популярные материалы, и сознательно закрыл их
                пробелы:
              </p>
              <div className='space-y-4'>
                {competitors.map(item => (
                  <div
                    key={item.name}
                    className='p-5 rounded-2xl'
                    style={tableCard}
                  >
                    <p className='font-semibold text-white mb-2'>
                      {item.name}
                    </p>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
              <p className='mt-6'>
                Отсюда в этой статье сценарии по отделам, отдельный разбор
                агентов, вилки цен с оговорками и конкретный раздел про
                152-ФЗ. Цифры без источников я не использую: там, где нужен
                пример, он помечен как условный.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые вопросы о внедрении ИИ в бизнес
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
          </article>

          <div
            className='mt-14 p-6 rounded-2xl'
            style={tableCard}
          >
            <h2 className='text-xl font-bold text-white mb-3'>Итог</h2>
            <p className='text-gray-400 leading-relaxed text-sm'>
              Внедрение ИИ в бизнес работает, когда оно начинается с одного
              процесса и замера «до». Дальше идут шесть этапов: аудит, замер,
              данные, пилот, оценка и масштабирование. ИИ-агентов стоит
              подключать после того, как простые сценарии показали эффект, а
              риски по данным и 152-ФЗ закрыты заранее. Если ваш сайт и
              заявки ещё не собраны в единую систему, начать можно с{' '}
              <Link
                href={ROUTES.services}
                className='text-violet-300 hover:text-violet-200 underline underline-offset-2'
              >
                создания сайта
              </Link>{' '}
              с правильной аналитикой и CRM-интеграцией.
            </p>
          </div>

          <div
            className='mt-10 p-8 sm:p-10 rounded-3xl text-center'
            style={{
              background:
                'linear-gradient(135deg, rgba(167,139,250,0.14), rgba(125,44,200,0.12))',
              border: '1px solid rgba(167,139,250,0.28)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Хотите внедрить ИИ без потерянного бюджета?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Я разрабатываю и внедряю автоматизацию под ключ: от аудита
              процесса до рабочего ИИ-агента, подключённого к вашим системам.
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
                  ...ctaStyle,
                  boxShadow: '0 0 32px rgba(167,139,250,0.35)'
                }}
              >
                Написать в Telegram →
              </a>
              <Link
                href={ROUTES.brief}
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/15 transition-all hover:bg-white/5'
              >
                Заполнить бриф
              </Link>
            </div>
          </div>

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
              href={BLOG_ROUTES.avtomatizaciyaBiznesa}
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

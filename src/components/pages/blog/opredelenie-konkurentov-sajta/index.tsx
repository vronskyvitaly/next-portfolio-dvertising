import Image from 'next/image'
import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH, COVER_ALT, coverImage } from './constants'
import {
  jsonLd,
  differences,
  steps,
  matrixHeads,
  matrixRows,
  filterOut,
  tools,
  gapSteps,
  structureChecks,
  intentTypes,
  priorityRules,
  planRows,
  mistakes,
  checklist,
  faq
} from '@/common/data/pages/blog/opredelenie-konkurentov-sajta'

const tableCard = {
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)'
}

export function OpredelenieKonkurentovSajtaPage() {
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
                SEO и конкуренты
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                12 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Определение основных конкурентов сайта:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #22d3ee, #38bdf8, #818cf8)'
                }}
              >
                анализ поисковых запросов сайтов конкурентов
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Определение основных конкурентов сайта начинается не с вопроса
              «кто продаёт то же, что и мы», а с поисковой выдачи. Разбираю,
              как найти тех, кто реально забирает ваш трафик, и как провести
              анализ поисковых запросов сайтов конкурентов, чтобы получить из
              него план новых страниц.
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
            {/* Хук */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                В выдаче выше вас не тот, кого вы считали конкурентом
              </h2>
              <p className='mb-4'>
                Типичная картина: владелец бизнеса называет трёх конкурентов,
                которых знает по рынку. Открываем поиск по его главным
                запросам, и в топ-10 там совсем другие сайты. Информационный
                портал, региональный каталог, блог эксперта, сайт из смежной
                ниши. С теми, кого он назвал, поиск вообще не пересекается.
              </p>
              <p className='mb-4'>
                Если анализировать не тех, анализ ничего не даст. Вы будете
                сравнивать себя с компаниями, которые к вашему поисковому
                трафику не имеют отношения, и пропустите тех, кто его
                действительно забирает. Поэтому любой аудит конкурентов сайта
                я начинаю с определения того, кто они на самом деле.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.2)'
                }}
              >
                <p className='text-cyan-200 font-medium leading-relaxed'>
                  Эта статья о поисковой стороне: кого считать конкурентом и
                  какие запросы у него взять. Про UX, скорость, Core Web Vitals
                  и маркетинг конкурентов я писал отдельно, в разборе{' '}
                  <Link
                    href={BLOG_ROUTES.analizSajtovKonkurentov}
                    className='text-cyan-100 hover:text-white underline underline-offset-2'
                  >
                    «Анализ сайтов конкурентов: подходы и инструменты»
                  </Link>
                  . Лучше читать их вместе.
                </p>
              </div>
            </section>

            {/* Поисковые vs бизнес */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Поисковые конкуренты и бизнес-конкуренты: в чём разница
              </h2>
              <p className='mb-6'>
                Для SEO есть два разных списка конкурентов, и они редко
                совпадают полностью:
              </p>
              <div className='space-y-4'>
                {differences.map(item => (
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
                Частая ошибка, которую я вижу в клиентских проектах: стратегию
                продвижения строят по списку бизнес-конкурентов, а выдачу
                проверяют разово и на одном запросе. Результат - вложились в
                контент под тему, где в топе стоят совсем другие форматы
                страниц.
              </p>
            </section>

            {/* Определение конкурентов */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как провести определение основных конкурентов сайта по выдаче
              </h2>
              <p className='mb-6'>
                Никаких платных сервисов для первого шага не нужно. Хватит
                браузера и таблицы:
              </p>
              <div className='space-y-3'>
                {steps.map((item, i) => (
                  <div
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
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

              <h3 className='text-xl font-semibold text-white mt-10 mb-3'>
                Пример таблицы пересечений
              </h3>
              <p className='mb-4 text-sm text-gray-400'>
                Таблица условная, домены вымышленные. Показывает принцип: в
                строках ваши запросы, в столбцах домены из топ-10, «да» - домен
                присутствует в выдаче.
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
                        Запрос
                      </th>
                      {matrixHeads.map(head => (
                        <th
                          key={head}
                          className='py-3 px-2 text-gray-400 font-medium whitespace-nowrap'
                        >
                          {head}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {matrixRows.map(row => (
                      <tr key={row.query}>
                        <td className='py-3 pr-4 text-white align-top'>
                          {row.query}
                        </td>
                        {row.marks.map((mark, i) => (
                          <td
                            key={matrixHeads[i]}
                            className={`py-3 px-2 align-top ${
                              mark === 'да' ? 'text-cyan-300' : 'text-gray-600'
                            }`}
                          >
                            {mark}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='mt-4'>
                В этом примере site-a.ru встречается чаще остальных, значит он
                первый кандидат в основные конкуренты. Домен, который появился
                один раз, чаще всего просто случайный гость выдачи.
              </p>
            </section>

            {/* Отсев */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Кого убрать из списка до анализа
              </h2>
              <p className='mb-6'>
                В таблицу попадает всё подряд, но настоящими конкурентами
                являются не все:
              </p>
              <div className='space-y-4'>
                {filterOut.map(item => (
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
                Региону стоит уделить отдельное внимание. Выдача по одному и
                тому же запросу в разных городах отличается, и список
                конкурентов для вашей аудитории может не совпадать с тем, что
                вы видите из своего офиса. Задавайте нужный регион в Яндексе и
                Google явно.
              </p>
            </section>

            {/* Сервисы */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Сервисы, которые ускоряют поиск конкурентов
              </h2>
              <p className='mb-6'>
                Когда ниша большая, ручной разбор выдачи занимает много
                времени. Тогда помогают сервисы, которые находят конкурентов по
                пересечению запросов сами. Цены и тарифы у них меняются, поэтому
                проверяйте актуальные условия на сайтах:
              </p>
              <div className='space-y-4'>
                {tools.map(item => (
                  <div
                    key={item.name}
                    className='p-5 rounded-2xl'
                    style={tableCard}
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
                Совет из практики: не доверяйте автоматическому списку
                конкурентов вслепую. Сервис покажет домены с пересечением, но
                не отличит агрегатор от прямого соперника. Финальный отбор
                всё равно делается руками.
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
                  Не хотите разбирать выдачу самостоятельно?
                </p>
                <p className='text-sm text-gray-400'>
                  Могу собрать таблицу пересечений для вашей ниши и показать,
                  кто реально конкурирует с вами в поиске. Напишите в
                  Telegram, расскажите про сайт и регион.
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

            {/* Анализ запросов */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Анализ поисковых запросов сайтов конкурентов: пошагово
              </h2>
              <p className='mb-6'>
                Когда основные конкуренты определены, можно переходить к их
                запросам. Здесь задача не скопировать чужую семантику, а найти
                в ней то, чего не хватает вашему сайту. Это и называют
                gap-анализом:
              </p>
              <div className='space-y-3'>
                {gapSteps.map((item, i) => (
                  <div
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
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

            {/* Структура сайта конкурента */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Структура сайта конкурента: sitemap, страницы и метатеги
              </h2>
              <p className='mb-6'>
                Выгрузка запросов показывает, что находят люди. Структура сайта
                показывает, как конкурент на это отвечает. Это дополняет
                цифры и подсказывает, какими страницами закрывать найденные
                пробелы:
              </p>
              <div className='space-y-4'>
                {structureChecks.map(item => (
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
            </section>

            {/* Намерение */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Коммерческие и информационные запросы: разделяйте сразу
              </h2>
              <p className='mb-6'>
                Выгрузка конкурента смешивает все типы запросов в одной
                таблице. Если не разделить их в самом начале, вы получите
                список из сотен фраз, где непонятно, что с чем делать. Я
                размечаю каждую фразу по намерению пользователя:
              </p>
              <div className='space-y-4'>
                {intentTypes.map(item => (
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
                Разметка по намерению сразу подсказывает формат страницы. Эту
                тему про связку страниц услуг и блога я отдельно разбирал в
                материале{' '}
                <Link
                  href={BLOG_ROUTES.zachemBiznesuSajt}
                  className='text-cyan-300 hover:text-cyan-200 underline underline-offset-2'
                >
                  «Зачем бизнесу нужен сайт»
                </Link>
                : информационные статьи приводят людей, а коммерческие
                страницы превращают их в заявки.
              </p>
            </section>

            {/* Но есть нюанс */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Но есть нюанс: данные конкурентов не всегда то, чем кажутся
              </h2>
              <p className='mb-4'>
                Выгрузка показывает, по каким запросам у конкурента есть
                позиции. Она не показывает, приносят ли эти запросы деньги. У
                сильного домена в списке может быть множество фраз, которые
                ему достались за счёт возраста и ссылочной массы, а не за счёт
                качества страницы. Ваш новый сайт эти позиции в ближайшее
                время не повторит, и ориентироваться на них слепо нельзя.
              </p>
              <p className='mb-4'>
                Вторая сложность - оценки частоты и трафика. Это приближения, и
                у разных сервисов они расходятся. Относитесь к ним как к
                шкале для сравнения запросов друг с другом, а не как к
                обещанному числу клиентов.
              </p>
              <p>
                Третья - стратегия самого конкурента. Если страница услуги
                стоит в топе по запросу, это не значит, что она там по заслугам
                контента. Возможно, на неё ведут сотни внутренних ссылок или
                сильные внешние. Это видно только при разборе страницы целиком,
                и этот этап как раз проще доверить специалисту.
              </p>
            </section>

            {/* План */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как превратить анализ в план: приоритизация и страницы
              </h2>
              <p className='mb-6'>
                Хороший результат анализа выглядит не как таблица на тысячу
                строк, а как короткий список задач. Порядок я выстраиваю так:
              </p>
              <div className='space-y-3 mb-8'>
                {priorityRules.map((rule, i) => (
                  <div key={rule} className='flex items-start gap-3'>
                    <span
                      className='mt-0.5 shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold'
                      style={{
                        background: 'rgba(34,211,238,0.15)',
                        color: '#22d3ee'
                      }}
                    >
                      {i + 1}
                    </span>
                    <span className='text-sm text-gray-300'>{rule}</span>
                  </div>
                ))}
              </div>
              <h3 className='text-xl font-semibold text-white mb-3'>
                Пример плана страниц
              </h3>
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
                        Тип запроса
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium'>
                        Что делаем
                      </th>
                      <th className='py-3 text-gray-400 font-medium'>
                        Приоритет
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {planRows.map(row => (
                      <tr key={row.query}>
                        <td className='py-4 pr-4 text-white align-top'>
                          {row.query}
                        </td>
                        <td className='py-4 pr-4 text-gray-300 align-top'>
                          {row.action}
                        </td>
                        <td className='py-4 text-gray-300 align-top whitespace-nowrap'>
                          {row.priority}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='mt-6'>
                Дальше начинается реализация, и именно здесь анализ чаще всего
                разбивается о технику. Новые страницы нужно встроить в
                структуру сайта, настроить заголовки, метатеги и микроразметку,
                сделать так, чтобы они быстро грузились. Если сайт собран на
                конструкторе, часть этого сделать не получится. Подробнее о
                том, какие бывают сайты и что в них входит, я рассказываю в{' '}
                <Link
                  href={ROUTES.services}
                  className='text-cyan-300 hover:text-cyan-200 underline underline-offset-2'
                >
                  разделе про создание сайтов
                </Link>
                .
              </p>
            </section>

            {/* Ошибки */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Типичные ошибки при анализе конкурентов
              </h2>
              <div className='space-y-4'>
                {mistakes.map(item => (
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
                  План готов, а страницы создавать некому?
                </p>
                <p className='text-sm text-gray-400'>
                  Беру ограниченное число проектов в месяц, чтобы вести каждый
                  без спешки: структура под запросы, быстрые страницы,
                  корректная разметка. Опишите задачу в брифе.
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
                Чек-лист: конкуренты и их запросы за один заход
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
                Частые вопросы о поисковых конкурентах
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
              Определение основных конкурентов сайта делается по выдаче, а не
              по памяти: 10-20 запросов, две поисковые системы, таблица
              пересечений и отсев агрегаторов. Дальше идёт анализ поисковых
              запросов сайтов конкурентов: выгрузка, gap-анализ, проверка
              частотности в Вордстате и изучение структуры. Результат - не
              отчёт, а план страниц с приоритетами. А для оценки скорости,
              удобства и технической части переходите к статье про{' '}
              <Link
                href={BLOG_ROUTES.analizSajtovKonkurentov}
                className='text-cyan-300 hover:text-cyan-200 underline underline-offset-2'
              >
                анализ сайтов конкурентов
              </Link>
              .
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
              Нужен сайт, который отвечает на запросы клиентов?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Разрабатываю сайты на Next.js под реальную семантику ниши:
              структура страниц, скорость и разметка закладываются сразу, а не
              переделываются после аудита. Работаю удалённо с клиентами из
              любого города. Первый разбор задачи - бесплатно.
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
                href={ROUTES.services}
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/15 transition-all hover:bg-white/5'
              >
                Создание сайтов под ключ
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
              href={BLOG_ROUTES.analizSajtovKonkurentov}
              className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors'
            >
              Читать: анализ сайтов конкурентов
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

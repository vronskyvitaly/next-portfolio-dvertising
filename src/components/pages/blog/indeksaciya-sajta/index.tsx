import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH, COVER_ALT, coverImage } from './constants'
import {
  jsonLd,
  checkWays,
  causes,
  SRC,
  yandexSteps,
  googleSteps,
  checklist,
  faq
} from '@/common/data/pages/blog/indeksaciya-sajta'

const linkCls =
  'text-lime-300 hover:text-lime-200 underline underline-offset-2'

const tableCard = {
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)'
}

const ctaStyle = {
  background: 'linear-gradient(135deg, #4d7c0f, #3f6212)'
}

const calloutStyle = {
  background: 'rgba(163,230,53,0.08)',
  border: '1px solid rgba(163,230,53,0.25)'
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className='mt-6 p-5 rounded-2xl' style={calloutStyle}>
      <p className='text-lime-100 font-medium leading-relaxed'>{children}</p>
    </div>
  )
}

function Src({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer nofollow'
      className={linkCls}
    >
      {children}
    </a>
  )
}

function NumberedList({
  items
}: {
  items: { title: string; desc: string }[]
}) {
  return (
    <ol className='space-y-4'>
      {items.map((item, i) => (
        <li
          key={item.title}
          className='flex gap-4 p-4 rounded-xl'
          style={tableCard}
        >
          <span
            className='shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold'
            style={{ background: 'rgba(163,230,53,0.18)', color: '#d9f99d' }}
          >
            {i + 1}
          </span>
          <div>
            <p className='font-semibold text-white mb-1'>{item.title}</p>
            <p className='text-sm text-gray-400'>{item.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export function IndeksaciyaSajtaPage() {
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
              'radial-gradient(circle, rgba(163,230,53,0.09) 0%, rgba(77,124,15,0.06) 50%, transparent 70%)',
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
                  border: '1px solid rgba(163,230,53,0.35)',
                  background: 'rgba(163,230,53,0.1)',
                  color: '#bef264'
                }}
              >
                SEO и поиск
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                6 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Индексация сайта: как проверить и{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #d9f99d, #a3e635, #4ade80)'
                }}
              >
                ускорить в Яндексе и Google
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Почему новая страница может не находиться в поиске, как за пять
              минут узнать причину и что сделать в Вебмастере и Search Console.
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
                Что такое индексация и чем грозит её отсутствие
              </h2>
              <p className='mb-4'>
                Индексация это когда поисковик заходит на страницу, читает её и
                записывает в свою базу, которая называется индексом. Заходит
                специальная программа, робот поисковика. Пока страницы в индексе
                нет, из поиска на неё никто не придёт.
              </p>
              <p className='mb-4'>
                Для бизнеса это выглядит так. Вы заказали страницу услуги,
                оплатили текст и дизайн, а клиенты через Яндекс и Google её не
                видят. Реклама при этом работает, а бесплатный поток из поиска
                равен нулю.
              </p>
              <p className='mb-4'>
                Частая причина после запуска или переделки сайта: с тестовой
                версии остался запрет на индексацию. Сайт открывается, всё
                выглядит нормально, а поисковик его пропускает.
              </p>
              <p>
                Если вам нужно понять, каких страниц не хватает по сравнению с
                конкурентами, начните со статьи про{' '}
                <Link href={BLOG_ROUTES.analizSajtovKonkurentov} className={linkCls}>
                  анализ сайтов конкурентов
                </Link>
                . А как найти тех, кто забирает ваши запросы, разобрано в
                материале про{' '}
                <Link
                  href={BLOG_ROUTES.opredelenieKonkurentovSajta}
                  className={linkCls}
                >
                  определение конкурентов сайта
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как проверить индексацию за пять минут
              </h2>
              <p className='mb-6'>
                Сервисы поисковиков бесплатны, но сайт нужно в них добавить и
                подтвердить, что он ваш. Если доступа нет, попросите
                разработчика или того, кто сайт запускал.
              </p>
              <NumberedList items={checkWays} />
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Почему страницы не попадают в индекс
              </h2>
              <p className='mb-6'>
                Сначала найдите страницу в отчёте и посмотрите, что там
                написано. Дальше сверяйтесь с таблицей.
              </p>
              <div className='grid gap-4 sm:grid-cols-2'>
                {causes.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={tableCard}
                  >
                    <p className='font-semibold text-white mb-3'>
                      {item.title}
                    </p>
                    <p className='text-xs uppercase tracking-wide text-gray-400 mb-1'>
                      Как понять
                    </p>
                    <p className='text-sm text-gray-300 mb-3 leading-relaxed'>
                      {item.sign}
                    </p>
                    <p className='text-xs uppercase tracking-wide text-gray-400 mb-1'>
                      Что делать
                    </p>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.fix}
                    </p>
                  </div>
                ))}
              </div>
              <Callout>
                Robots.txt закрывает вход роботу, но не убирает адрес из поиска:
                если на страницу ссылаются другие сайты, она может остаться в
                выдаче. Чтобы скрыть страницу, ставят noindex. Страницу с noindex
                нельзя одновременно закрывать в robots.txt, иначе робот не
                прочитает пометку (
                <Src href={SRC.googleRobots}>документация Google</Src>,{' '}
                <Src href={SRC.googleNoindex}>про noindex</Src>).
              </Callout>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как ускорить индексацию
              </h2>
              <p className='mb-6'>
                Любая отправка лишь сообщает поисковику, что страница появилась.
                Берёт он её в индекс или нет, решает он сам.
              </p>

              <h3 className='text-lg font-semibold text-white mb-3'>
                В Яндексе
              </h3>
              <NumberedList items={yandexSteps} />

              <h3 className='text-lg font-semibold text-white mt-8 mb-3'>
                В Google
              </h3>
              <NumberedList items={googleSteps} />

              <p className='mt-6'>
                На этом сайте карта собирается автоматически, а страницы в
                Search Console я отправлял вручную и упёрся в дневной лимит
                запросов. Поэтому важные адреса я отправляю первыми, а остальное
                оставляю карте и ссылкам.
              </p>
              <Callout>
                Иногда советуют отправлять любые страницы через Google Indexing
                API. Google разрешает использовать его только для страниц
                вакансий и видео с прямыми трансляциями (
                <Src href={SRC.googleIndexingApi}>документация</Src>). Для
                обычных страниц он не подходит.
              </Callout>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Сколько это занимает
              </h2>
              <p className='mb-4'>
                Google пишет, что обход после запроса занимает от нескольких
                дней до нескольких недель, и что он не гарантирует появление
                страницы в поиске быстро или вообще (
                <Src href={SRC.googleRecrawl}>справка</Src>). Яндекс обещает
                обновить данные после обхода в среднем за две недели (
                <Src href={SRC.yandexReindex}>справка</Src>).
              </p>
              <p>
                У нового сайта без внешних ссылок срок обычно больше. Точных
                цифр для вашего сайта никто не назовёт. Если прошло две-три
                недели, переходите к таблице причин, а не отправляйте одну и ту
                же страницу снова и снова.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Чек-лист для новой страницы
              </h2>
              <NumberedList items={checklist} />
              <p className='mt-6'>
                Если сайт только планируется, эти настройки закладываются сразу,
                как это сделано в{' '}
                <Link href={ROUTES.services} className={linkCls}>
                  разработке сайтов под ключ
                </Link>
                .
              </p>
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
                    Просто напишите в Telegram.
                  </p>
                </div>
                <a
                  href='https://t.me/vitalyvronsky'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                  style={ctaStyle}
                >
                  Написать в Telegram →
                </a>
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
              <p className='mt-6 text-sm text-gray-400'>
                Подробности о картах сайта:{' '}
                <Src href={SRC.googleSitemap}>Google</Src>. Об IndexNow:{' '}
                <Src href={SRC.indexNow}>indexnow.org</Src> и{' '}
                <Src href={SRC.yandexIndexNow}>справка Яндекса</Src>.
              </p>
            </section>
          </article>

          <div className='mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6'>
            <Link
              href={ROUTES.home}
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
              href={BLOG_ROUTES.analizSajtovKonkurentov}
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
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

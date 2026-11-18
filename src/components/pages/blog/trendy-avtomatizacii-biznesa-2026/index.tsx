import Image from 'next/image'
import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH, COVER_ALT, coverImage } from './constants'
import {
  jsonLd,
  trends,
  skipList,
  steps,
  linkCls,
  automationRows,
  siteRows,
  faq
} from '@/common/data/pages/blog/trendy-avtomatizacii-biznesa-2026'

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

export function TrendyAvtomatizaciiBiznesa2026Page() {
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
                              href={BLOG_ROUTES.avtomatizaciyaBiznesa}
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
                  <Link href={ROUTES.services} className={linkCls}>
                    создание сайтов
                  </Link>
                  , а если удобнее описать задачу письменно, заполните{' '}
                  <Link href={ROUTES.brief} className={linkCls}>
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
              href={BLOG_ROUTES.vnedrenieIiVBiznes}
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

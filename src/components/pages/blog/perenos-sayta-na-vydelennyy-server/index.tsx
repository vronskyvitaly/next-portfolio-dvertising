import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH, COVER_ALT, coverImage } from './constants'
import {
  jsonLd,
  SRC,
  todaySteps,
  separation,
  benefits,
  notNeeded,
  beforeAfter,
  moveSteps,
  faq
} from '@/common/data/pages/blog/perenos-sayta-na-vydelennyy-server'

const linkCls =
  'text-orange-300 hover:text-orange-200 underline underline-offset-2'

const tableCard = {
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)'
}

const ctaStyle = {
  background: 'linear-gradient(135deg, #c2410c, #9a3412)'
}

const calloutStyle = {
  background: 'rgba(251,146,60,0.08)',
  border: '1px solid rgba(251,146,60,0.25)'
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className='mt-6 p-5 rounded-2xl' style={calloutStyle}>
      <p className='text-orange-100 font-medium leading-relaxed'>{children}</p>
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
            style={{ background: 'rgba(251,146,60,0.18)', color: '#fdba74' }}
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

export function PerenosSaytaNaVydelennyyServerPage() {
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
              'radial-gradient(circle, rgba(251,146,60,0.09) 0%, rgba(194,65,12,0.06) 50%, transparent 70%)',
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
                  border: '1px solid rgba(251,146,60,0.35)',
                  background: 'rgba(251,146,60,0.1)',
                  color: '#fdba74'
                }}
              >
                Хостинг и серверы
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                5 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Как защитить сайт, если хостинг взломают:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #fdba74, #fb923c, #f87171)'
                }}
              >
                перенос на выделенный сервер
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Что случилось с хостингами в последние недели, что сделать
              сегодня и почему сайту нужна схема, при которой сбой одной
              компании его не убивает.
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
                Что случилось
              </h2>
              <p className='mb-4'>
                В ночь на 2 ноября хостинг Beget подвергся атаке. По заявлению
                компании, данные части клиентов в облачных серверах и
                хранилищах уничтожены, часть резервных копий потеряна, а
                файловые копии сохранились. Попыток скачать или изменить
                данные клиентов компания не нашла (
                <Src href={SRC.xakep}>Xakep</Src>,{' '}
                <Src href={SRC.kommersant}>Коммерсантъ</Src>,{' '}
                <Src href={SRC.habr2}>Хабр</Src>).
              </p>
              <p className='mb-4'>
                В октябре, по сообщению{' '}
                <Src href={SRC.record}>The Record</Src>, через уязвимость у
                хостинга FirstVDS украли данные клиентов.
              </p>
              <p className='mb-4 text-sm text-gray-400'>
                Всё по заявлениям компаний, сведения на 6 ноября 2026,
                расследования не завершены.
              </p>
              <Callout>
                Такое может случиться с любым хостингом. Вопрос в том, что вы
                потеряете, если это произойдёт завтра.
              </Callout>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что сделать сегодня
              </h2>
              <NumberedList items={todaySteps} />
              <p className='mt-6'>
                Если к сайту подключены платежи, CRM и рассылки, ключей доступа
                больше, чем кажется. Как они устроены, я объяснял в статье про{' '}
                <Link href={BLOG_ROUTES.chtoTakoeApiSajta} className={linkCls}>
                  API сайта
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Главная ошибка: всё лежит у одной компании
              </h2>
              <p className='mb-4'>
                Обычно сайт, его резервные копии и домен находятся у одного
                хостинга. Если он пострадал, вы теряете всё сразу.
              </p>
              <p className='mb-6'>
                Выделенный сервер у той же компании от этого не спасает, если
                копии лежат там же. По сообщению Хабра, на 4 ноября у Beget
                была запущена лишь часть серверов, которые обслуживает сама
                компания. Спасает разнесение:
              </p>
              <figure
                aria-label='Схема: сайт, резервные копии и домен у разных компаний'
                className='p-5 sm:p-6 rounded-2xl'
                style={tableCard}
              >
                <div className='grid gap-4 sm:grid-cols-3'>
                  {separation.map(item => (
                    <div
                      key={item.name}
                      className='p-4 rounded-xl'
                      style={{
                        border: `1px solid ${item.color}55`,
                        background: `${item.color}12`
                      }}
                    >
                      <p
                        className='font-semibold mb-1'
                        style={{ color: item.color }}
                      >
                        {item.name}
                      </p>
                      <p className='text-xs text-gray-300 mb-2'>{item.who}</p>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </figure>
              <p className='mt-6'>
                Домен связан с сервером через настройку, которую называют DNS.
                Когда она у вас под рукой, сайт можно за минуты направить на
                новое место.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что даёт выделенный сервер с Coolify
              </h2>
              <p className='mb-4'>
                Выделенный сервер это целый компьютер в дата-центре, который
                работает только на ваши проекты. На обычном хостинге один сервер
                делят много клиентов.
              </p>
              <p className='mb-4'>
                Coolify это панель, которая сама выкладывает сайт на сервер и
                делает копии по расписанию. Вот что это даёт бизнесу:
              </p>
              <div className='grid gap-4 sm:grid-cols-2'>
                {benefits.map(item => (
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
                Этот сайт я сам держу на своём сервере с Coolify, а выкладка
                идёт автоматически из GitHub.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Минусы и кому это не нужно
              </h2>
              <p className='mb-4'>
                Выделенный сервер нужно обслуживать: обновлять, следить за копиями и
                доступностью. Для этого нужен человек, сотрудник или подрядчик.
              </p>
              <p className='mb-4'>
                В любых программах, включая Coolify, находят ошибки в защите (
                <Src href='https://github.com/coollabsio/coolify/security/advisories'>
                  список на GitHub
                </Src>
                ). Поэтому сервер и панель нужно регулярно обновлять, закрывать
                от посторонних, и кто-то должен за этим следить.
              </p>
              <p className='mb-3'>Кому такая схема не нужна:</p>
              <div className='space-y-3'>
                {notNeeded.map(item => (
                  <div key={item} className='flex items-start gap-3'>
                    <span className='mt-0.5 shrink-0 w-5 h-5 rounded-md border border-red-400/40 flex items-center justify-center text-xs text-red-300'>
                      ×
                    </span>
                    <span className='text-sm text-gray-300'>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как проходит перенос на выделенный сервер
              </h2>
              <div className='mb-6 overflow-hidden rounded-2xl' style={tableCard}>
                <div className='grid grid-cols-2 border-b border-white/10 text-sm font-semibold'>
                  <p className='p-4 text-gray-300'>На обычном хостинге</p>
                  <p className='p-4 text-orange-300'>На выделенном сервере</p>
                </div>
                {beforeAfter.map(row => (
                  <div
                    key={row.label}
                    className='border-b border-white/5 last:border-0'
                  >
                    <p className='px-4 pt-4 text-xs uppercase tracking-wide text-gray-400'>
                      {row.label}
                    </p>
                    <div className='grid grid-cols-2 text-sm'>
                      <p className='p-4 text-gray-400'>{row.before}</p>
                      <p className='p-4 text-white'>{row.after}</p>
                    </div>
                  </div>
                ))}
              </div>
              <NumberedList items={moveSteps} />
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
              href={BLOG_ROUTES.avtomatizaciyaBiznesa}
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
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

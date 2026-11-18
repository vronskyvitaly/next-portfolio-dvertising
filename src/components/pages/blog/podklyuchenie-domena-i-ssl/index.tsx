import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH, COVER_ALT, coverImage } from './constants'
import {
  jsonLd,
  SRC,
  terms,
  ownerSteps,
  connectSteps,
  problems,
  faq
} from '@/common/data/pages/blog/podklyuchenie-domena-i-ssl'

const linkCls =
  'text-teal-300 hover:text-teal-200 underline underline-offset-2'

const tableCard = {
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)'
}

const ctaStyle = {
  background: 'linear-gradient(135deg, #0f766e, #115e59)'
}

const calloutStyle = {
  background: 'rgba(45,212,191,0.08)',
  border: '1px solid rgba(45,212,191,0.25)'
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className='mt-6 p-5 rounded-2xl' style={calloutStyle}>
      <p className='text-teal-100 font-medium leading-relaxed'>{children}</p>
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
            style={{ background: 'rgba(45,212,191,0.18)', color: '#99f6e4' }}
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

export function PodklyuchenieDomenaISslPage() {
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
              'radial-gradient(circle, rgba(45,212,191,0.09) 0%, rgba(15,118,110,0.06) 50%, transparent 70%)',
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
                  border: '1px solid rgba(45,212,191,0.35)',
                  background: 'rgba(45,212,191,0.1)',
                  color: '#5eead4'
                }}
              >
                Домены и SSL
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                6 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Подключение домена и{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #99f6e4, #2dd4bf, #38bdf8)'
                }}
              >
                SSL-сертификата: инструкция для владельца сайта
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Как привязать домен к сайту, включить https и что делать, если
              сайт не открывается или браузер пишет «Не защищено».
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
                Что такое домен и SSL и зачем они бизнесу
              </h2>
              <p className='mb-4'>
                Посетитель открывает ваш сайт с телефона, нажимает «Оставить
                заявку» и видит в адресной строке надпись «Не защищено». Часть
                людей закрывает страницу, не дочитав. Справка Chrome говорит
                прямо: на сайте без https данные могут увидеть и изменить
                посторонние, а у браузера есть режим, в котором он
                предупреждает о таких сайтах отдельным сообщением (
                <Src href={SRC.chrome}>справка Chrome</Src>).
              </p>
              <p className='mb-6'>
                Чтобы предупреждения не было, сайту нужны домен и SSL-сертификат.
                Вот что означают слова, которые встретятся дальше.
              </p>
              <NumberedList items={terms} />
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как выбрать домен и на кого его оформить
              </h2>
              <p className='mb-6'>
                Короткое имя, которое легко продиктовать по телефону, лучше
                длинного. Зона .ru подходит для российской аудитории, .рф
                удобна, если адрес читают вслух по-русски. Дальше три действия.
              </p>
              <NumberedList items={ownerSteps} />
              <Callout>
                Оформляйте домен на себя, а доступ к кабинету регистратора
                держите у себя. Если домен записан на разработчика или
                сотрудника, при расставании вы не сможете продлить или
                перенести его без их участия. Забыли продлить, и сайт
                пропадает. Владельцем в зонах .ru и .рф считается тот, на кого
                домен зарегистрирован, а данные о нём должны быть точными (
                <Src href={SRC.cctld}>Координационный центр</Src>).
              </Callout>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Как подключить домен к сайту по шагам
              </h2>
              <p className='mb-6'>
                Подключение сводится к тому, чтобы записать в адресную книгу
                интернета, на каком сервере лежит сайт. Делается это у
                регистратора, в разделе DNS.
              </p>
              <NumberedList items={connectSteps} />
              <p className='mt-6'>
                Есть второй способ: передать управление DNS хостингу, заменив
                у регистратора серверы имён на указанные в панели хостинга. Он
                подходит, если хостинг и сайт у одной компании (
                <Src href={SRC.timeweb}>пример у Timeweb</Src>).
              </p>
            </section>

            <section>
              <div
                className='p-6 rounded-2xl'
                style={{
                  background:
                    'linear-gradient(135deg, rgba(45,212,191,0.14), rgba(56,189,248,0.08))',
                  border: '1px solid rgba(45,212,191,0.35)'
                }}
              >
                <p className='text-xs uppercase tracking-wide text-teal-300 mb-2'>
                  Подарок от автора
                </p>
                <h2 className='text-2xl font-bold text-white mb-3'>
                  Подключение свободного домена и SSL-сертификат в подарок
                </h2>
                <p className='mb-3'>
                  Делаю сайты и сам подключаю домен и
                  сертификат. Свободный домен это тот, который ещё никем не
                  занят. Подключу его к вашему сайту и выпущу SSL-сертификат,
                  всё это в подарок.
                </p>
                <p className='mb-5 text-sm text-gray-400'>
                  Напишите в Telegram, расскажу, как это работает для вашего
                  сайта. Про сам сайт под ключ есть отдельная страница:{' '}
                  <Link href={ROUTES.services} className={linkCls}>
                    создание сайтов
                  </Link>
                  .
                </p>
                <TelegramButton label='Написать в Telegram →' />
              </div>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Какой SSL-сертификат нужен
              </h2>
              <p className='mb-4'>
                Для сайта услуг, лендинга и интернет-магазина обычно хватает
                бесплатного сертификата Let&rsquo;s Encrypt. Он ничего не стоит
                (
                <Src href={SRC.letsEncryptFaq}>FAQ Let&rsquo;s Encrypt</Src>),
                проверяет, что домен ваш, и включает то же шифрование, что и
                платный.
              </p>
              <p className='mb-4'>
                Платные сертификаты проверяют ещё и организацию по документам.
                Они нужны, если этого требует платёжный сервис или партнёр, или
                если вы хотите, чтобы в данных сертификата значилась компания.
                Для посетителя разницы не видно, замок один и тот же.
              </p>
              <p className='mb-4'>
                Сроки у сертификатов короткие, и они сокращаются. Сейчас
                Let&rsquo;s Encrypt выдаёт сертификаты на 90 дней и по плану
                перейдёт на 64 дня в феврале 2027 года, а затем на 45 дней в
                феврале 2028 (
                <Src href={SRC.letsEncrypt45}>анонс</Src>). Поэтому
                продление должно идти автоматически: вручную раз в несколько
                недель его забывают.
              </p>
              <p>
                Мой сайт работает на сервере с Coolify. Он сам выпускает
                сертификаты Let&rsquo;s Encrypt для домена и сам их
                продлевает, так написано в{' '}
                <Src href={SRC.coolifyDomains}>документации Coolify</Src>.
                Условие одно: домен должен вести на сервер, а порты 80 и 443
                должны быть открыты. Как устроен такой сервер, я разбирал в
                статье про{' '}
                <Link
                  href={BLOG_ROUTES.perenosSaytaNaVydelennyyServer}
                  className={linkCls}
                >
                  перенос сайта на выделенный сервер
                </Link>
                .
              </p>
              <Callout>
                Когда сайт открывается по https, поисковики видят его адрес
                новым. Следите, чтобы http и https не стали двумя копиями сайта,
                как это проверить, описано в статье про{' '}
                <Link href={BLOG_ROUTES.indeksaciyaSajta} className={linkCls}>
                  индексацию сайта
                </Link>
                .
              </Callout>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Частые проблемы и что с ними делать
              </h2>
              <div className='grid gap-4 sm:grid-cols-2'>
                {problems.map(item => (
                  <div
                    key={item.title}
                    className='p-5 rounded-2xl'
                    style={tableCard}
                  >
                    <p className='font-semibold text-white mb-3'>
                      {item.title}
                    </p>
                    <p className='text-xs uppercase tracking-wide text-gray-400 mb-1'>
                      Признак
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
                    Просто напишите в Telegram. Подключение свободного домена и
                    SSL-сертификат в подарок.
                  </p>
                </div>
                <TelegramButton label='Написать в Telegram →' />
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
              href={BLOG_ROUTES.indeksaciyaSajta}
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
            >
              Читать: индексация сайта
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

import Image from 'next/image'
import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { formatPrice } from '@/config/services'
import { BLOG_ROUTES, ROUTES, SERVICE_ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH, COVER_ALT, coverImage } from './constants'
import {
  jsonLd,
  linkCls,
  plans,
  tasks,
  lending,
  corporate,
  shop,
  faq
} from '@/common/data/pages/blog/ii-dlya-sozdaniya-sajta-besplatno'

const tableCard = {
  border: '1px solid rgba(255,255,255,0.07)',
  background: 'rgba(255,255,255,0.025)'
}

const ctaStyle = {
  background: 'linear-gradient(135deg, #0284c7, #075985)'
}

const calloutStyle = {
  background: 'rgba(56,189,248,0.08)',
  border: '1px solid rgba(56,189,248,0.25)'
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

export function IiDlyaSozdaniyaSajtaBesplatnoPage() {
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
              'radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(7,89,133,0.07) 50%, transparent 70%)',
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
                  border: '1px solid rgba(56,189,248,0.35)',
                  background: 'rgba(56,189,248,0.1)',
                  color: '#7dd3fc'
                }}
              >
                Сайт с ИИ
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-400'>
                7 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              ИИ для создания сайта бесплатно:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #e0f2fe, #38bdf8, #0284c7)'
                }}
              >
                как сделать сайт с Claude
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Что нейросеть сделает без подписки, когда придётся платить, где
              взять картинки и что настроить, чтобы сайт приводил клиентов.
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
                Страницу для своего дела сегодня можно собрать с нейросетью за
                вечер, и сам ИИ бывает бесплатным. Я делаю сайты на заказ и
                каждый день работаю в Claude и Claude Code: этот сайт и статьи
                блога сделаны с их помощью.
              </p>
              <p>
                Ниже о том, что получится сделать бесплатно, за что придётся
                заплатить и что останется доделать после того, как нейросеть
                выдала страницу. Цены на ноябрь 2026 года, проверены по
                официальным сайтам сервисов.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что бесплатно, а за что придётся платить
              </h2>
              <p className='mb-4'>
                Бесплатным обычно бывает сам ИИ-инструмент, и то с лимитом
                сообщений. Чтобы сайт увидели клиенты, нужны ещё две вещи.
              </p>
              <p className='mb-4'>
                Домен это адрес сайта, например vash-salon.ru. Его оплачивают
                раз в год. Хостинг это сервер, где лежат файлы сайта и откуда
                они открываются у посетителей. За него платят помесячно или за
                год.
              </p>
              <p>
                Получается так: нейросеть бесплатно или недорого, домен и
                хостинг за деньги, настройка своими руками или силами
                специалиста.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Простая страница прямо в чате Claude
              </h2>
              <p className='mb-4'>
                Claude это ИИ-ассистент компании Anthropic. Даже в бесплатном
                плане он делает Artifacts. Artifact это готовый результат,
                который появляется рядом с перепиской: документ, презентация или
                веб-страница. Вы описываете, что нужно, и видите страницу
                целиком.
              </p>
              <blockquote
                className='my-6 p-5 rounded-2xl text-gray-200 italic'
                style={calloutStyle}
              >
                Сделай одностраничный сайт для мастерской по ремонту обуви: кто
                мы, услуги с ценами, адрес и кнопка «Написать в Telegram».
                Светлый фон, крупный шрифт, без лишних украшений.
              </blockquote>
              <p className='mb-4'>
                Дальше правите словами: «сократи заголовок», «добавь блок с
                ценами», «сделай кнопку зелёной». Новый Artifact сначала виден
                только вам, потом им можно поделиться. Макет можно выгрузить
                отдельным HTML-файлом, то есть обычной веб-страницей, которую
                кладут на хостинг.
              </p>
              <p>
                Так удобно сделать визитку, страницу мероприятия или проверить
                идею. Форма, которая присылает заявки на почту или в Telegram,
                в таком файле сама работать не будет: ей нужен сервер или
                отдельный сервис.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Полноценный сайт с Claude Code
              </h2>
              <p className='mb-4'>
                Claude Code это версия Claude, которая работает с файлами
                проекта: создаёт страницы, правит код, запускает проверки. Вы
                ставите задачу обычными словами, он пишет код и показывает, что
                изменил. Так собирают многостраничный сайт, блог, форму с
                отправкой заявок.
              </p>
              <p className='mb-4'>
                В бесплатном плане Claude Code нет, он входит в платные планы
                начиная с Pro. И он требует внимания: нужно проверять результат
                и самому выкладывать сайт на хостинг.
              </p>
              <p>
                Как установить его и сделать первый запрос, я описал в{' '}
                <Link href={BLOG_ROUTES.kakUstanovitClaudeCode} className={linkCls}>
                  простой инструкции по Claude Code
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Сколько стоит Claude: цены на ноябрь 2026
              </h2>
              <div className='grid gap-4 sm:grid-cols-2 mb-4'>
                {plans.map(plan => (
                  <div
                    key={plan.name}
                    className='p-5 rounded-2xl'
                    style={tableCard}
                  >
                    <p className='text-xs uppercase tracking-wide text-sky-300 mb-2'>
                      {plan.name}
                    </p>
                    <p className='text-2xl font-bold text-white'>{plan.price}</p>
                    <p className='text-sm text-gray-400 mb-4'>{plan.note}</p>
                    <ul className='space-y-2 text-sm'>
                      {plan.items.map(item => (
                        <li key={item} className='flex gap-3'>
                          <span
                            aria-hidden='true'
                            className='mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-sky-400'
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p>
                Цены в долларах, по официальной странице Anthropic на 17 ноября
                2026 года. Для простой страницы хватит бесплатного плана, для
                сайта с Claude Code нужен Pro.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Картинки для сайта лучше делать в другом сервисе
              </h2>
              <p className='mb-4'>
                Claude пишет тексты и код, а иллюстрации удобнее генерировать
                отдельно, например в ChatGPT от OpenAI. В его бесплатном плане
                генерация изображений есть, но число картинок ограничено. Самая
                дешёвая подписка ChatGPT Go стоит $8 в месяц в США, в некоторых
                странах цена своя. В ней картинок больше. Plus стоит $20 в
                месяц.
              </p>
              <p className='mb-4'>
                В запросе опишите, что в кадре, какой свет и настроение, и
                попросите обойтись без надписей. Готовую картинку проверьте:
                лишние пальцы, кривые буквы и чужие логотипы встречаются часто.
              </p>
              <p>
                Фото мастера, помещения и товара лучше снять на телефон. Клиент
                должен узнать вас, когда придёт.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Если вы в России
              </h2>
              <p className='mb-4'>
                Россия не входит в официальные списки поддерживаемых стран ни у
                Anthropic, ни у OpenAI, поэтому официально Claude и ChatGPT в
                России недоступны. OpenAI предупреждает, что доступ из
                неподдерживаемых стран может закончиться блокировкой аккаунта.
              </p>
              <p>
                Для текстов и картинок есть российские сервисы. Алиса AI от
                Яндекса это бесплатный чат, который пишет тексты и рисует
                изображения по описанию. ГигаЧат от Сбера тоже бесплатный и
                тоже умеет рисовать. Ими удобно готовить тексты и иллюстрации
                для будущего сайта.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что остаётся сделать после нейросети
              </h2>
              <p className='mb-6'>
                ИИ выдаёт страницу. Чтобы она приводила клиентов, её нужно
                довести до рабочего состояния.
              </p>
              <ol className='space-y-4 mb-6'>
                {tasks.map((item, i) => (
                  <li
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
                  >
                    <span
                      className='shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold'
                      style={{
                        background: 'rgba(56,189,248,0.18)',
                        color: '#e0f2fe'
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className='font-semibold text-white mb-1'>
                        {item.title}
                      </p>
                      <p className='text-sm text-gray-400'>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p>
                Почему сайт из конструктора или нейросети сам по себе ещё не
                приносит заявок, я разбирал в статье{' '}
                <Link href={BLOG_ROUTES.sozdanieSajtovNadoZnat} className={linkCls}>
                  «Создать сайт сейчас легко. Но это ещё не сайт»
                </Link>
                .
              </p>
            </section>

            <section>
              <div
                className='p-6 rounded-2xl'
                style={{
                  background:
                    'linear-gradient(135deg, rgba(56,189,248,0.14), rgba(7,89,133,0.1))',
                  border: '1px solid rgba(56,189,248,0.35)'
                }}
              >
                <p className='text-xs uppercase tracking-wide text-sky-300 mb-2'>
                  Бесплатная консультация
                </p>
                <h2 className='text-2xl font-bold text-white mb-3'>
                  Расскажу, как сделать сайт с ИИ под вашу задачу
                </h2>
                <p className='mb-4'>
                  Созвонимся или спишемся в Telegram. Я разберу вашу задачу,
                  задам вопросы о бизнесе и о том, что должен делать сайт.
                  Подскажу, хватит ли бесплатных инструментов, чем готовить
                  тексты и картинки, где разместить сайт и что настроить после
                  запуска.
                </p>
                <p className='mb-5'>
                  Если разбираться самому некогда, сделаю сайт под ключ:{' '}
                  <Link href={SERVICE_ROUTES.lending} className={linkCls}>
                    {lending.name.toLowerCase()}
                  </Link>{' '}
                  {formatPrice(lending.priceFrom)},{' '}
                  <Link
                    href={SERVICE_ROUTES.corporate}
                    className={linkCls}
                  >
                    {corporate.name.toLowerCase()}
                  </Link>{' '}
                  {formatPrice(corporate.priceFrom)},{' '}
                  <Link href={SERVICE_ROUTES.shop} className={linkCls}>
                    {shop.name.toLowerCase()}
                  </Link>{' '}
                  {formatPrice(shop.priceFrom)}. Точную цену назову после
                  разбора и зафиксирую в договоре.
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
                    Возьму рутину на себя. Просто напишите в Telegram.
                  </p>
                  <p className='text-sm text-gray-400'>
                    Первая консультация бесплатная: расскажу, как сделать сайт с
                    ИИ под вашу задачу.
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
              href={BLOG_ROUTES.kakUstanovitClaudeCode}
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
            >
              Читать: как установить Claude Code
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

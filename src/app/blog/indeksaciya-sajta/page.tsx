import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import BlogBreadcrumbs from '@/components/BlogBreadcrumbs'
import { ogImages } from '@/lib/og'
import coverImage from './indeksaciya-sajta.webp'

const PUBLISHED = '2026-11-09'
const URL_PATH = '/blog/indeksaciya-sajta'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`
const TITLE = 'Индексация сайта: как проверить и ускорить в Яндексе и Google'
const COVER_ALT =
  'Иллюстрация к статье об индексации сайта: страницы попадают в поисковый индекс'
const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

export const metadata: Metadata = {
  title: `${TITLE} | Виталий Вронский`,
  description:
    'Что такое индексация сайта, как проверить её за пять минут, почему страницы не попадают в поиск и что сделать в Яндекс Вебмастере и Google Search Console.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  keywords: [
    'индексация сайта',
    'как ускорить индексацию сайта',
    'почему сайт не индексируется',
    'как проверить индексацию сайта',
    'переобход страниц яндекс вебмастер',
    'запросить индексирование google',
    'indexnow'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Страницы, которых нет в индексе, не приводят клиентов из поиска. Как проверить, почему их нет и что сделать в Яндексе и Google.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: coverOg,
    title: TITLE,
    description:
      'Как проверить индексацию, найти причину и отправить страницы в Яндекс и Google без обещаний «в индекс за день».'
  },
  robots: { index: true, follow: true }
}

const SRC = {
  googleRecrawl:
    'https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl',
  googleRobots:
    'https://developers.google.com/search/docs/crawling-indexing/robots/intro',
  googleNoindex:
    'https://developers.google.com/search/docs/crawling-indexing/block-indexing',
  googleSitemap:
    'https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview',
  googleIndexingApi:
    'https://developers.google.com/search/apis/indexing-api/v3/quickstart',
  yandexReindex:
    'https://yandex.ru/support/webmaster/ru/robot-workings/site-reindex',
  yandexIndexNow:
    'https://yandex.ru/support/webmaster/en/indexing-options/index-now',
  indexNow: 'https://www.indexnow.org/faq'
}

const faq = [
  {
    q: 'Нужна ли карта сайта небольшому сайту?',
    a: 'Google пишет, что сайту до 500 страниц она может не понадобиться, если все важные страницы связаны ссылками между собой. Вреда от неё нет, а если сайт новый и на него почти никто не ссылается, она помогает роботу найти страницы. Гарантии индексации карта не даёт.'
  },
  {
    q: 'Как убрать страницу из поиска?',
    a: 'Добавьте на страницу пометку noindex или удалите её совсем. Запрет в robots.txt для этого не годится: он закрывает вход роботу, но адрес может остаться в выдаче, если на него ссылаются другие сайты. При этом страницу с noindex нельзя закрывать в robots.txt, иначе робот не увидит пометку.'
  },
  {
    q: 'В Вебмастере «заявка обработана», а страницы в поиске нет. Почему?',
    a: 'Этот статус значит только то, что робот зашёл на страницу. Попадёт ли она в поиск, решает Яндекс. Данные обычно обновляются в течение двух недель, потом смотрите причину в разделе исключённых страниц.'
  },
  {
    q: 'Стоит ли отправлять обычные страницы через Google Indexing API?',
    a: 'Нет. По документации Google этот инструмент работает только со страницами вакансий и с видео с прямыми трансляциями. Для остальных страниц используйте карту сайта и «Проверку URL» в Search Console.'
  },
  {
    q: 'Сайт есть в Яндексе, но нет в Google. Это нормально?',
    a: 'Такое бывает. Роботы у поисковиков разные, и каждый сам решает, что брать в индекс. Проверяйте причину в Search Console отдельно, решения для Яндекса на Google не переносятся.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${FULL_URL}#article`,
      headline: TITLE,
      description:
        'Что такое индексация сайта, как проверить её в Яндекс Вебмастере и Google Search Console, почему страницы не попадают в индекс и как ускорить процесс.',
      author: {
        '@type': 'Person',
        name: 'Виталий Вронский',
        url: 'https://vitalyvronsky.ru'
      },
      publisher: {
        '@type': 'Person',
        name: 'Виталий Вронский',
        url: 'https://vitalyvronsky.ru'
      },
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      url: FULL_URL,
      image: `https://vitalyvronsky.ru${coverImage.src}`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': FULL_URL },
      inLanguage: 'ru',
      keywords:
        'индексация сайта, как ускорить индексацию, почему сайт не индексируется, как проверить индексацию'
    },
    {
      '@type': 'FAQPage',
      '@id': `${FULL_URL}#faq`,
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ]
}

const checkWays = [
  {
    title: 'Яндекс Вебмастер',
    desc: 'Раздел «Индексирование», пункт «Проверка страницы»: вставьте адрес и нажмите «Проверить». Список всех страниц сайта и причины, по которым часть из них исключена, лежат в разделе «Страницы в поиске».'
  },
  {
    title: 'Google Search Console',
    desc: 'Вставьте адрес страницы в строку сверху, откроется «Проверка URL». Там написано, есть ли страница в индексе Google, а если нет, то почему. Общую картину по сайту показывает отчёт об индексировании страниц.'
  },
  {
    title: 'Оператор site: в поиске',
    desc: 'Введите в Яндексе или Google site:адрес-страницы. Если страница находится, она в индексе. Способ работает без доступа к сайту, но число найденных страниц приблизительное, а отсутствие в выдаче ещё не приговор. Для точного ответа откройте Вебмастер или Search Console.'
  }
]

const causes = [
  {
    title: 'Страница закрыта пометкой noindex',
    sign: 'В отчёте указан запрет индексации.',
    fix: 'Noindex это пометка в коде страницы «не показывай меня в поиске». Часто остаётся с тестовой версии или включена галочкой «скрыть сайт от поисковиков» в настройках CMS. Снимите её или попросите разработчика убрать.'
  },
  {
    title: 'Сайт закрыт в robots.txt',
    sign: 'В отчёте написано, что адрес заблокирован файлом robots.txt.',
    fix: 'Robots.txt это файл с правилами для роботов, он лежит по адресу ваш-сайт/robots.txt. Одна строка Disallow: / закрывает весь сайт. Откройте файл в браузере и сверьте с тем, что должно быть закрыто.'
  },
  {
    title: 'Робот не знает о странице',
    sign: 'На страницу не ведёт ни одна ссылка с других страниц, её нет в карте сайта.',
    fix: 'Карта сайта (sitemap) это файл со списком всех страниц для роботов. Добавьте страницу в неё и поставьте ссылку из меню или связанной статьи.'
  },
  {
    title: 'Сайт медленно отвечает или падает',
    sign: 'Вебмастер в диагностике пишет об ошибках подключения или серверных ошибках.',
    fix: 'Робот, не дождавшись ответа, уходит и возвращается позже. Нужно разбираться с хостингом или сервером. В справке Яндекса про переобход советуют проверить, что сервер отвечает роботу и отвечает быстро.'
  },
  {
    title: 'У страницы есть дубли',
    sign: 'Один и тот же текст открывается по нескольким адресам: с www и без, по http и https, с параметрами в ссылке.',
    fix: 'Поисковик выбирает один адрес, остальные уходят в исключённые. Настройте перенаправление на один вариант и укажите через canonical (пометку в коде, какой адрес считать главным) нужную страницу.'
  },
  {
    title: 'Робот страницу видел, но в индекс не взял',
    sign: 'Страница есть в отчётах, ошибок нет, а в поиске её нет.',
    fix: 'Часто так бывает с короткими, пустыми страницами и копиями чужого текста. Решает поисковик, и гарантии индексации ни у кого нет. Сделайте страницу полезнее и отправьте заново.'
  }
]

const yandexSteps = [
  {
    title: 'Добавьте карту сайта',
    desc: 'В Вебмастере откройте «Индексирование», затем «Файлы Sitemap» и впишите адрес карты. Новые страницы из неё подтянутся сами.'
  },
  {
    title: 'Отправьте важные страницы на переобход',
    desc: 'Раздел «Индексирование», пункт «Переобход страниц». Вставьте адреса новых или обновлённых страниц. Лимит на сутки зависит от сайта и обновляется ежедневно, его число показывает ваш кабинет. В очереди страница ждёт до трёх дней, после обхода данные обновляются примерно за две недели.'
  },
  {
    title: 'Подключите IndexNow',
    desc: 'Это протокол, с помощью которого сайт сам сообщает поисковикам о новых и изменённых страницах. Его поддерживают Яндекс, Bing и ещё несколько поисковиков, Google в списке нет. Настраивается плагином CMS или разработчиком. Индексацию он не гарантирует.'
  },
  {
    title: 'Если страниц много, включите обход по счётчикам',
    desc: 'Переобход не рассчитан на массовую отправку. Для постоянного потока страниц Яндекс предлагает «Обход по счётчикам», он использует данные Метрики.'
  }
]

const googleSteps = [
  {
    title: 'Добавьте карту сайта',
    desc: 'В Search Console откройте «Файлы Sitemap» и впишите адрес карты. Она помогает найти страницы, но Google прямо пишет, что не обещает проиндексировать всё, что в ней указано.'
  },
  {
    title: 'Запросите индексирование отдельной страницы',
    desc: 'Вставьте адрес в «Проверку URL» и нажмите «Запросить индексирование». У кнопки есть дневная квота, а повторная отправка того же адреса обход не ускоряет. Число Google в справке не называет.'
  },
  {
    title: 'Поставьте ссылки на новую страницу',
    desc: 'Добавьте её в меню, в связанные статьи, в раздел услуг. Робот ходит по ссылкам, и страница без входящих ссылок для него почти не существует.'
  }
]

const checklist = [
  {
    title: 'Проверьте, что страница не закрыта',
    desc: 'Ни noindex, ни запрета в robots.txt. После запуска сайта или переделки проверяйте это первым делом.'
  },
  {
    title: 'Поставьте ссылку с уже проиндексированной страницы',
    desc: 'Из меню, из блога, из каталога услуг.'
  },
  {
    title: 'Убедитесь, что адрес есть в карте сайта',
    desc: 'У многих CMS карта обновляется сама.'
  },
  {
    title: 'Отправьте адрес в оба сервиса',
    desc: '«Переобход страниц» в Вебмастере и «Запросить индексирование» в Search Console.'
  },
  {
    title: 'Через 3-4 дня откройте статус страницы',
    desc: 'В Вебмастере и в «Проверке URL». Если робот заходил, но страницы нет в индексе, смотрите причину.'
  },
  {
    title: 'Не вышло за две-три недели, идите по таблице причин',
    desc: 'Закрытие, дубли, ссылки, скорость сервера, качество страницы.'
  }
]

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

export default function Page() {
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
                <Link href='/blog/analiz-sajtov-konkurentov' className={linkCls}>
                  анализ сайтов конкурентов
                </Link>
                . А как найти тех, кто забирает ваши запросы, разобрано в
                материале про{' '}
                <Link
                  href='/blog/opredelenie-konkurentov-sajta'
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
                <Link href='/sozdanie-saytov' className={linkCls}>
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
              href='/'
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
              href='/blog/analiz-sajtov-konkurentov'
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

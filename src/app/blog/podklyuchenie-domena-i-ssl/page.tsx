import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import BlogBreadcrumbs from '@/components/BlogBreadcrumbs'
import { ogImages } from '@/lib/og'
import coverImage from './podklyuchenie-domena-i-ssl.webp'

const PUBLISHED = '2026-11-09'
const URL_PATH = '/blog/podklyuchenie-domena-i-ssl'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`
const TITLE = 'Подключение домена и SSL-сертификата: инструкция для владельца сайта'
const DESCRIPTION =
  'Как подключить домен к сайту и включить SSL-сертификат без разработчика: шаги, частые ошибки и подключение свободного домена и SSL-сертификат в подарок.'
const COVER_ALT =
  'Домен подключается к сайту, защищённому SSL-сертификатом'
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
  description: DESCRIPTION,
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  keywords: [
    'подключение домена',
    'подключение домена и ssl',
    'как подключить домен к сайту',
    'как установить ssl сертификат на сайт',
    'почему сайт не защищён',
    'настройка dns записей',
    'бесплатный ssl let’s encrypt'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Домен, DNS и SSL простыми словами: как всё подключить по шагам и что делать, если сайт не открывается или браузер пишет «Не защищено».',
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
      'Как подключить домен и SSL к сайту и не потерять заявки из-за предупреждения браузера.'
  },
  robots: { index: true, follow: true }
}

const SRC = {
  chrome: 'https://support.google.com/chrome/answer/95617',
  letsEncryptFaq: 'https://letsencrypt.org/docs/faq/',
  letsEncrypt45: 'https://letsencrypt.org/2025/12/02/from-90-to-45',
  coolifyDomains: 'https://next.coolify.io/docs/knowledge-base/domains',
  cctld: 'https://cctld.ru/domains/',
  timeweb: 'https://timeweb.com/ru/community/articles/kak-podklyuchit-domen-k-saytu'
}

const faq = [
  {
    q: 'Сколько ждать после настройки DNS?',
    a: 'Обычно от нескольких минут до нескольких часов. В справке Timeweb пишут, что обновление может занять до 48 часов, но обычно проходит куда быстрее. Проверять лучше через несколько часов, открыв адрес в браузере, а у разных пользователей изменения могут появиться в разное время.'
  },
  {
    q: 'Нужен ли платный SSL-сертификат для интернет-магазина?',
    a: 'Для шифрования данных хватает бесплатного сертификата Let’s Encrypt: он проверяет владение доменом и закрывает соединение так же, как платный. Платные сертификаты проверяют ещё и организацию. Если платёжный сервис или партнёр требует именно такой, это указано в его условиях, уточните у них.'
  },
  {
    q: 'Что будет, если вовремя не продлить домен?',
    a: 'Сайт и почта на этом адресе перестанут работать. Что происходит с доменом после окончания срока и можно ли его вернуть, зависит от правил регистратора, их стоит прочитать заранее. Включите уведомления о продлении на почту, к которой у вас есть доступ.'
  },
  {
    q: 'На кого оформлять домен в зонах .ru и .рф?',
    a: 'Владельцем (администратором) называется лицо или организация, на которое зарегистрирован домен. Регистратор запрашивает у него данные для реестра, они должны быть точными, а изменения нужно сообщать. Российское резидентство для регистрации не требуется (справка Координационного центра). Оформляйте на себя или на свою компанию.'
  },
  {
    q: 'Что входит в подарок от автора?',
    a: 'Подключение свободного домена и SSL-сертификат в подарок. Свободный домен это тот, который ещё никем не занят. Условия зависят от вашего проекта: напишите в Telegram, расскажу, как это работает для вашего сайта.'
  }
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${FULL_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
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
        'подключение домена, подключение домена и ssl, как установить ssl сертификат, почему сайт не защищён'
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

const terms = [
  {
    title: 'Домен',
    desc: 'Адрес сайта, например vitalyvronsky.ru. Его оплачивают на год и продлевают.'
  },
  {
    title: 'Регистратор',
    desc: 'Компания, которая вносит ваш домен в общий реестр и выдаёт личный кабинет для управления им.'
  },
  {
    title: 'DNS',
    desc: 'Общая адресная книга интернета. В ней записано, на каком сервере лежит сайт с таким доменом.'
  },
  {
    title: 'SSL-сертификат',
    desc: 'Файл, который подтверждает, что сайт принадлежит владельцу домена, и включает шифрование. После этого адрес начинается с https, а в браузере рядом с ним появляется замок.'
  }
]

const ownerSteps = [
  {
    title: 'Проверьте, что имя свободно',
    desc: 'Впишите желаемое имя в поиск на сайте регистратора. Если оно свободно, сервис предложит его оформить. Если занято, подберите другое.'
  },
  {
    title: 'Оформите на себя или на свою компанию',
    desc: 'Регистратор запросит данные владельца. Для зон .ru и .рф они вносятся в реестр, их нужно указывать точно: при неточных данных регистратор вправе отказать в операциях с доменом.'
  },
  {
    title: 'Заведите кабинет на свою почту',
    desc: 'Логин и пароль от кабинета храните у себя, как документы на офис. Разработчику дайте доступ на время работ или попросите его прислать готовые настройки.'
  }
]

const connectSteps = [
  {
    title: 'Узнайте IP-адрес сервера',
    desc: 'Это числовой адрес компьютера, на котором лежит ваш сайт. Его назовёт разработчик или он указан в панели хостинга.'
  },
  {
    title: 'Откройте в кабинете регистратора раздел DNS-записей',
    desc: 'Он может называться «Управление DNS» или «DNS-серверы и записи».'
  },
  {
    title: 'Создайте A-запись',
    desc: 'A-запись это строка в адресной книге: «домен такой-то находится на сервере с таким IP». В поле «значение» впишите IP-адрес из первого шага. Такую же запись добавьте для варианта с www.'
  },
  {
    title: 'Удалите старые записи',
    desc: 'Если раньше домен вёл на другой хостинг или на заглушку регистратора, эти строки уберите, иначе сайт будет открываться то отсюда, то оттуда.'
  },
  {
    title: 'Подождите и проверьте',
    desc: 'Обновление DNS занимает от нескольких минут до суток и более. Через пару часов откройте домен с телефона по мобильной сети, там старый кэш вашего компьютера не мешает.'
  },
  {
    title: 'Добавьте домен в настройки сайта',
    desc: 'Сервер должен знать, какие адреса он обслуживает. Это делает разработчик или вы в панели хостинга.'
  }
]

const problems = [
  {
    title: 'Сайт не открывается после подключения',
    sign: 'Браузер пишет, что сайт не найден, или открывается старая страница.',
    fix: 'Подождите несколько часов. Затем сверьте IP-адрес в A-записи с адресом сервера и удалите старые записи. Откройте сайт в режиме инкогнито или с другого устройства: часть проблем создаёт кэш вашего браузера.'
  },
  {
    title: 'Замка нет, написано «Не защищено»',
    sign: 'Адрес начинается с http, рядом надпись «Не защищено».',
    fix: 'Впишите адрес вручную с https:// в начале. Если страница открылась, остаётся настроить перенаправление, то есть автоматический переход с http на https. Если не открылась, сертификат ещё не выпущен: его выпускают после того, как домен начал вести на сервер, это занимает от часов до суток.'
  },
  {
    title: 'Красная страница «Сертификат истёк»',
    sign: 'Браузер закрывает сайт на весь экран и предупреждает об опасности.',
    fix: 'Сертификат не продлился. Частые причины: домен перестал вести на сервер или закрыт нужный порт. Напишите тому, кто обслуживает сервер. Если ошибка только на вашем компьютере, проверьте дату и время на устройстве, неверные часы дают такое же предупреждение.'
  },
  {
    title: 'Замок с предупреждением, часть картинок не видна',
    sign: 'Страница открыта по https, но браузер недоволен, а некоторые изображения или стили не подгружаются.',
    fix: 'Это называется смешанным содержимым: сама страница защищена, а часть файлов подтягивается по старому адресу с http. Попросите разработчика заменить такие ссылки на https.'
  }
]

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
                  Я, Виталий Вронский, делаю сайты и сам подключаю домен и
                  сертификат. Свободный домен это тот, который ещё никем не
                  занят. Подключу его к вашему сайту и выпущу SSL-сертификат,
                  всё это в подарок.
                </p>
                <p className='mb-5 text-sm text-gray-400'>
                  Напишите в Telegram, расскажу, как это работает для вашего
                  сайта. Про сам сайт под ключ есть отдельная страница:{' '}
                  <Link href='/sozdanie-saytov' className={linkCls}>
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
                  href='/blog/perenos-sayta-na-vydelennyy-server'
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
                <Link href='/blog/indeksaciya-sajta' className={linkCls}>
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
              href='/blog/indeksaciya-sajta'
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

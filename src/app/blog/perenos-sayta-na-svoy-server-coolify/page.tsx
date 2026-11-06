import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import BlogBreadcrumbs from '@/components/BlogBreadcrumbs'
import { ogImages } from '@/lib/og'
import coverImage from './own-server-cover.png'

const PUBLISHED = '2026-11-06'
const URL_PATH = '/blog/perenos-sayta-na-svoy-server-coolify'
const FULL_URL = `https://vitalyvronsky.ru${URL_PATH}`
const TITLE = 'Перенос сайта с хостинга на свой сервер с Coolify: бэкапы и DNS вне провайдера'
const COVER_ALT =
  'Схема разнесения: сервер с сайтами, резервные копии в другом хранилище и домен у отдельного регистратора'
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
    'Перенос сайта с хостинга на свой сервер: чем помогает Coolify, почему выделенный сервер сам по себе не спасает, как разнести бэкапы и DNS и что делать при сбое.',
  metadataBase: new URL('https://vitalyvronsky.ru'),
  alternates: { canonical: URL_PATH },
  keywords: [
    'перенос сайта на свой сервер',
    'свой сервер вместо хостинга',
    'выделенный сервер для сайта',
    'coolify',
    'куда перенести сайт с beget',
    'взлом хостинга что делать',
    'бэкапы сайта в s3',
    'перенос сайта на другой хостинг',
    'правило 3-2-1'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Зачем переносить сайт на свой сервер, чем это рискованно и как разнести сервер, копии и DNS, чтобы сбой любого хостинга не убил сайт. Свежий пример: атака на Beget.',
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
      'Как перенести сайт с хостинга на свой сервер с Coolify, почему страхует разнесение сервера, бэкапов и DNS, и когда такая схема не нужна.'
  },
  robots: { index: true, follow: true }
}

const SRC = {
  xakep: 'https://xakep.ru/2026/11/03/beget-attack/',
  kommersant: 'https://www.kommersant.ru/doc/9080025',
  habr1: 'https://habr.com/ru/news/1103190/',
  habr2: 'https://habr.com/ru/news/1103590/',
  servernews: 'https://servernews.ru/1150830',
  record: 'https://therecord.media/russia-cyberattack-beget-cloud'
}

const faq = [
  {
    q: 'Куда перенести сайт с хостинга, если я больше не доверяю площадке?',
    a: 'Подойдёт любой провайдер, у которого можно получить VPS или аренду сервера и который не является единственным местом хранения ваших данных. Для большинства бизнес-сайтов хватает VPS с Coolify или обычного хостинга у другой компании. Главное условие: копии лежат у третьей стороны, а домен и DNS управляются отдельно. Если на сайте есть персональные данные граждан РФ, выбирайте площадку в России.'
  },
  {
    q: 'Что делать, если сайт на хостинге не работает или пропал?',
    a: 'Сначала проверьте, есть ли у вас собственная копия: репозиторий, выгрузка базы, архив от разработчика. Если есть, поднимайте сайт на новой площадке и меняйте A-запись у того, кто управляет DNS домена. Если копии нет, остаётся ждать восстановления у провайдера. На примере Beget: по заявлению компании, файловые копии виртуального хостинга сохранились, а правка DNS-записей для доменов .ru, .рф и .su, по сообщениям компании, доступна в domains.beget.ru. Сроков полного восстановления компания не называет.'
  },
  {
    q: 'Защитит ли выделенный сервер от такой атаки?',
    a: 'Сам по себе нет. Если арендовать его у того же провайдера, вы остаётесь в зоне риска компрометации этого провайдера. По обновлению Beget от 4 ноября, серверы без администрирования Beget работали, а среди администрируемых Beget на тот момент было запущено около 15%. Защищает разнесение: сервер у одной компании, копии у другой, домен у третьей.'
  },
  {
    q: 'Что такое Coolify и сколько он стоит?',
    a: 'Coolify это open source платформа, которую вы ставите на свой сервер. Она деплоит приложения из Git, Dockerfile или Docker Compose, запускает базы данных, выпускает сертификаты и по расписанию делает бэкапы. За саму панель при самостоятельной установке платить не нужно, вы платите за сервер и хранилище. Есть и облачная версия Coolify Cloud, где панель обслуживает команда проекта, а ваши серверы остаются у вас.'
  },
  {
    q: 'Какой сервер нужен для Coolify?',
    a: 'По документации, минимум 2 ядра, 2 ГБ оперативной памяти и 10 ГБ свободного места плюс запас под образы, тома и копии. На практике под несколько небольших сайтов с базой берут VPS с запасом по памяти. Выделенный сервер нужен тем, кому не хватает мощности VPS. Для защиты от сбоя провайдера он ничего не добавляет.'
  },
  {
    q: 'Coolify безопасен?',
    a: 'Это обычное ПО, и в нём находят уязвимости, в том числе опасные: на первой странице списка advisories репозитория десять записей за июнь и июль 2026 года, в том числе с высокой и критической серьёзностью. Безопасность зависит от того, что панель закрыта от интернета, обновляется и не отдана всем подряд. Если некому за этим следить, схему лучше не начинать или передать сопровождение.'
  },
  {
    q: 'Подходит ли такая схема, если на сайте персональные данные клиентов?',
    a: 'Подходит, если сервер находится в России: по 152-ФЗ первичная запись данных граждан РФ ведётся в базах на её территории. Бэкапы с персональными данными тоже лучше хранить у российского провайдера. Детали согласуйте с юристом.'
  },
  {
    q: 'Можно ли поручить настройку и сопровождение вам?',
    a: 'Да. Я поднимаю сервер, ставлю и закрываю панель, настраиваю деплой из Git и бэкапы в стороннее хранилище, переношу сайты и проверяю восстановление. Дальше могу вести обновления и мониторинг ежемесячно. Стоимость называю после брифа, потому что она зависит от числа сайтов, баз и почты.'
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
        'Практический разбор переноса сайта с хостинга на свой сервер: разнесение сервера, бэкапов и DNS, плюсы и минусы Coolify, пошаговый переезд. Свежий пример: атака на Beget.',
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
        'перенос сайта на свой сервер, выделенный сервер для сайта, coolify, свой сервер вместо хостинга, бэкапы сайта'
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

const todaySteps = [
  {
    title: 'Сменить пароли и ключи',
    desc: 'После инцидента у провайдера меняйте всё, что могло храниться на его серверах. Beget, например, рекомендовал клиентам именно это. Составьте список: панель хостинга, FTP и SSH, пользователи баз данных, админки CMS, SMTP, токены интеграций и API-ключи из .env, ключи S3. Начинайте с того, что даёт доступ к деньгам и клиентской базе.'
  },
  {
    title: 'Не доверять восстановленному сайту без проверки',
    desc: 'Даже если сайт вернулся, посмотрите, что изменилось. Сравните файлы с репозиторием или своей копией, найдите недавно изменённые скрипты и чужие файлы. Провайдер обычно проверяет серверы сам (Beget сообщает, что делает это для каждого сервера вручную), но свой сайт вы проверите быстрее всех.'
  },
  {
    title: 'Выяснить, что у вас реально есть',
    desc: 'Репозиторий с кодом, свежая выгрузка базы, архив от разработчика, медиафайлы. Если сайт существует только в виде папки на хостинге, это и есть главный риск, и о нём надо думать раньше, чем о выборе нового провайдера.'
  },
  {
    title: 'Проверить доступ к домену и почте администратора',
    desc: 'По сообщению Хабра, права на управление DNS подтверждаются кодом, который уходит на почту администратора домена. Если эта почта была на том же хостинге, вы упрётесь в замкнутый круг. Заранее проверьте, куда придёт код.'
  },
  {
    title: 'Применить правило 3-2-1',
    desc: 'Три копии данных, на двух разных носителях, одна из которых лежит вне основной площадки. Для сайта это значит: рабочая копия на сервере, копия в хранилище другого провайдера и ещё одна у вас или в Git.'
  },
  {
    title: 'Проверить восстановление, а не наличие копии',
    desc: 'Скачайте последний бэкап, разверните его на чистой машине и откройте сайт. Засеките время. Копия, которую ни разу не разворачивали, остаётся предположением.'
  }
]

const separation = [
  {
    name: 'Сервер',
    who: 'Провайдер A',
    desc: 'Здесь работают Coolify и ваши сайты. Если провайдер упал, этот узел теряется целиком.',
    color: '#fb923c'
  },
  {
    name: 'Бэкапы',
    who: 'Провайдер B, другой аккаунт',
    desc: 'S3-совместимое хранилище, куда панель пишет копии по расписанию. Ключи доступа не лежат на самом сервере в открытом виде.',
    color: '#22d3ee'
  },
  {
    name: 'Домен и DNS',
    who: 'Регистратор C',
    desc: 'Тот, кто не хранит ваши сайты. Тогда направить домен на новый адрес можно за минуты.',
    color: '#a78bfa'
  }
]

const benefits = [
  {
    title: 'Контроль над данными и настройками',
    desc: 'Вы знаете, где лежит база, какие версии стоят и кто имеет доступ. Нет общих серверов с чужими сайтами и общей панели, которую вам не открыть.'
  },
  {
    title: 'Бэкапы по расписанию в сторонний S3',
    desc: 'По документации, для расписания бэкапов баз и томов можно выбрать несколько хранилищ, и Coolify загрузит копию в каждое. Одно хранилище у другого провайдера, второе у вас дома или в офисе: этого достаточно для правила 3-2-1.'
  },
  {
    title: 'Переносимость',
    desc: 'Ресурсы работают как обычные Docker-контейнеры. Если провайдер сервера подвёл, вы поднимаете такую же схему у другого и переносите проекты. Привязки к одному вендору нет.'
  },
  {
    title: 'Деплой из Git',
    desc: 'Приложение собирается из репозитория, Dockerfile, Docker Compose или готового образа. Пуш в ветку запускает выкладку, откат делается из вкладки с деплоями. Сам сайт при этом существует в репозитории, а не только на диске сервера.'
  },
  {
    title: 'Предсказуемая цена',
    desc: 'Платите за сервер и хранилище, а не за тариф с лимитами на сайты, базы и почтовые ящики. Нагрузка растёт, вы докупаете ресурсы, а не меняете весь тариф.'
  },
  {
    title: 'Несколько проектов на одном сервере',
    desc: 'Сайт компании, лендинг под рекламу, внутренний сервис, бот. Каждый в своём контейнере, сертификаты выпускаются автоматически, домены привязываются в панели.'
  }
]

const duties = [
  {
    task: 'Обновления ОС сервера',
    how: 'Патчи безопасности, перезагрузки в окно обслуживания',
    freq: 'Раз в неделю или чаще'
  },
  {
    task: 'Обновления Coolify и Docker',
    how: 'Читать список изменений, обновляться без долгих пауз',
    freq: 'Регулярно, сразу после критичных исправлений'
  },
  {
    task: 'Файрвол и доступы',
    how: 'Открыты только 22, 80, 443. SSH по ключам. Лишние пользователи убраны',
    freq: 'При настройке и при смене людей'
  },
  {
    task: 'Бэкапы',
    how: 'Расписание, копия вне провайдера, копия самой панели и её ключей',
    freq: 'Каждый день, проверка отчёта'
  },
  {
    task: 'Проверка восстановления',
    how: 'Развернуть копию на чистой машине и открыть сайт',
    freq: 'Раз в квартал'
  },
  {
    task: 'Мониторинг',
    how: 'Проверка доступности сайтов, места на диске, сертификатов',
    freq: 'Постоянно, с оповещением в мессенджер'
  }
]

const cves = [
  {
    id: 'CVE-2026-34597',
    sev: 'высокая, CVSS 8.8',
    what: 'Аутентифицированный пользователь мог выполнить произвольные команды на хосте через поле install command в сборке Nixpacks.',
    fix: 'Исправлено в 4.0.0-beta.470, опубликовано 29 июня 2026.',
    href: 'https://releasealert.dev/cve/CVE-2026-34597',
    label: 'Release Alert (GHSA-9pp4-wcmj-rq73)'
  },
  {
    id: 'CVE-2026-41896',
    sev: 'высокая, CVSS 7.5',
    what: 'Обход проверки подписи вебхуков GitHub, Bitbucket и Gitea: если секрет не задан, подпись считается по пустому ключу, и любой мог запускать деплой без авторизации. По описанию, это настройка по умолчанию.',
    fix: 'Затронуты версии до 4.0.0-beta.473 включительно, исправлено в 4.0.0-beta.474, опубликовано 25 июня 2026.',
    href: 'https://github.com/coollabsio/coolify/security/advisories/GHSA-w8wm-r924-f65v',
    label: 'GitHub Advisory GHSA-w8wm-r924-f65v'
  },
  {
    id: 'CVE-2026-42204',
    sev: 'высокая, CVSS 8.8',
    what: 'Регрессия в проверке shell-команд позволяла участнику команды выполнить код в контейнере coolify-helper, у которого смонтирован сокет Docker, и получить root на хосте.',
    fix: 'Затронуты 4.0.0-beta.471 до 4.0.0-beta.473, исправлено в 4.0.0-beta.474, опубликовано 2 июля 2026.',
    href: 'https://github.com/coollabsio/coolify/security/advisories/GHSA-chg4-63hm-xv9x',
    label: 'GitHub Advisory GHSA-chg4-63hm-xv9x'
  }
]

const notForYou = [
  {
    title: 'Сайт-визитка или лендинг без заявок на сервере',
    desc: 'Если это набор статических страниц, для него достаточно статического хостинга или обычного тарифа. Свой сервер даст только лишние обязанности. Защиту здесь обеспечит Git с кодом, независимый домен и копия вне площадки.'
  },
  {
    title: 'Некому обслуживать',
    desc: 'У вас нет ни штатного специалиста, ни подрядчика на сопровождении. Сервер без обновлений через полгода превращается в риск хуже, чем любой хостинг.'
  },
  {
    title: 'Один небольшой сайт на WordPress с редкими правками',
    desc: 'Управляемый хостинг с автобэкапами и регулярная выгрузка копии в стороннее хранилище закрывают потребность дешевле. Берите свой сервер, когда проектов несколько или нужна особая конфигурация.'
  },
  {
    title: 'Строгие требования, которые вы не можете выполнить сами',
    desc: 'Если нужны сертификация, журналы доступа для аудита или отказоустойчивость с резервным узлом, это уже отдельный проект, и самодельный сервер на одной машине его не решит.'
  }
]

const migrationSteps = [
  {
    title: 'Инвентаризация',
    desc: 'Выпишите сайты, базы данных, cron-задачи, почтовые ящики, поддомены, внешние интеграции и места, где прописан адрес сервера. Почту на том же хостинге переносят отдельно, и записи MX придётся менять тоже.'
  },
  {
    title: 'Забрать копии',
    desc: 'Выгрузка базы и файлов, пока есть доступ. Если SSH на тарифе нет, используйте экспорт из панели или CMS. Копии храните минимум в двух местах.'
  },
  {
    title: 'Поднять сервер и закрыть его',
    desc: 'Ключи вместо паролей, файрвол, затем установка Coolify. Панель после привязки домена закрывается от прямого доступа по порту 8000.'
  },
  {
    title: 'Настроить бэкапы до переноса сайта',
    desc: 'Создайте бакет у другого провайдера, подключите его в разделе S3 Storage, включите расписание. Первый бэкап должен появиться в хранилище до того, как вы тронете боевой домен.'
  },
  {
    title: 'Развернуть сайт на временном адресе',
    desc: 'Подключите репозиторий или Docker Compose, импортируйте базу и файлы, проверьте формы, оплату, письма и админку. Боевые ключи вставляйте новые, не те, что были на старом хостинге.'
  },
  {
    title: 'Переключить DNS',
    desc: 'За день до переезда уменьшите TTL записи до 300 секунд. В момент переключения поменяйте A-запись и убедитесь, что выпущен сертификат. Если домен на DNS Beget, по сообщениям компании записи можно менять в domains.beget.ru.'
  },
  {
    title: 'Не удалять старое сразу',
    desc: 'Оставьте прежнюю площадку на одну-две недели, если она ещё жива. Запишите, что где лежало: пригодится, если что-то всплывёт позже.'
  },
  {
    title: 'Проверить восстановление и настроить мониторинг',
    desc: 'Разверните бэкап на чистой машине. Подключите проверку доступности с уведомлением в Telegram. Теперь схема считается рабочей.'
  }
]

const hardenCmd = `# на новом сервере, под root
adduser deploy && usermod -aG sudo deploy

# вход только по ключам
sed -i 's/^#\\?PasswordAuthentication.*/PasswordAuthentication no/' /etc/ssh/sshd_config
sed -i 's/^#\\?PermitRootLogin.*/PermitRootLogin prohibit-password/' /etc/ssh/sshd_config
systemctl restart ssh

# файрвол: только SSH и веб
ufw allow 22/tcp && ufw allow 80/tcp && ufw allow 443/tcp
ufw --force enable

# установка Coolify (из официальной документации)
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash`

const dumpCmd = `# база и файлы с прежнего хостинга
mysqldump --single-transaction -u USER -p DBNAME | gzip > site-$(date +%F).sql.gz
rsync -az --progress user@old-host:~/site/public_html/ ./site-files/

# проверка: развернуть дамп в пустой базе
gunzip -c site-2026-11-06.sql.gz | mysql -u root -p restore_test`

const dnsCmd = `# за сутки: TTL записи в панели DNS уменьшить до 300
# после переключения проверить, что адрес новый
dig +short example.ru A
curl -I https://example.ru`

const backupNote = `# копия панели Coolify: файл с переменными окружения (там APP_KEY)
cp /data/coolify/source/.env ~/coolify-env.backup`

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

function Code({ children }: { children: string }) {
  return (
    <pre
      className='my-5 overflow-x-auto rounded-xl p-4 text-sm leading-relaxed text-gray-200'
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <code>{children}</code>
    </pre>
  )
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
                14 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Перенос сайта с хостинга:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #fdba74, #fb923c, #f87171)'
                }}
              >
                свой сервер с Coolify, бэкапы и DNS вне провайдера
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Сайт, который живёт у одного провайдера вместе со своими копиями,
              зависит от одной точки отказа. Свежий пример: атака на Beget в
              начале ноября 2026. Ниже: что о ней известно, что сделать
              сегодня, зачем бизнесу собственный сервер с Coolify, чем он
              опасен и как переехать по шагам с любого хостинга.
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
                Свежий пример: что известно об атаке на Beget на 6 ноября 2026
              </h2>
              <p className='mb-4'>
                Всё ниже приведено по заявлениям самой компании и по
                публикациям изданий. Независимой проверки у меня нет, и я
                отмечаю, где это слова Beget.
              </p>
              <ul className='space-y-3 mb-6'>
                {[
                  <>
                    В ночь с 1 на 2 ноября, по заявлению Beget, злоумышленники
                    получили доступ к управляющему контуру инфраструктуры и
                    запустили скрипты, которые обнуляют данные. Компания
                    объявила форс-мажор (
                    <Src href={SRC.xakep}>Xakep</Src>,{' '}
                    <Src href={SRC.habr1}>Хабр</Src>).
                  </>,
                  <>
                    Данные облака (VPS, S3, Kubernetes) утрачены. Бинарные
                    бэкапы VPS потеряны, файловые копии сохранились.
                    Виртуальный хостинг, по предварительной оценке компании,
                    восстановим почти полностью, но каждый из более чем тысячи
                    серверов проверяют вручную (
                    <Src href={SRC.servernews}>ServerNews</Src>,{' '}
                    <Src href={SRC.record}>The Record</Src>).
                  </>,
                  <>
                    Следов попыток скачать или изменить данные клиентов Beget,
                    по его же словам, не нашёл. Поэтому речь идёт об
                    уничтожении данных, а не об утечке. Клиентам рекомендовано
                    сменить пароли и ключи доступа (
                    <Src href={SRC.kommersant}>Коммерсантъ</Src>).
                  </>,
                  <>
                    Каршеринг BelkaCar не мог оформлять аренду и перенёс
                    приложение к другому провайдеру (
                    <Src href={SRC.kommersant}>Коммерсантъ</Src>).
                  </>
                ].map((item, i) => (
                  <li key={i} className='flex gap-3 text-sm sm:text-base'>
                    <span className='mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400' />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className='mb-4'>
                По обновлению от 4 ноября, которое пересказывает{' '}
                <Src href={SRC.habr2}>Хабр</Src>, на виртуальном хостинге были
                запущены 35% серверов. Выделенные серверы без администрирования
                Beget работали все, а среди тех, что администрирует сам Beget,
                на тот момент поднялось около 15%. DNS-записи для доменов .ru,
                .рф и .su на серверах имён Beget можно править в
                domains.beget.ru.
              </p>
              <p className='mb-4'>
                Чего пока нет: названного виновника, описания того, как
                злоумышленники попали внутрь, и итоговой картины потерь. Beget
                сообщает, что расследование не завершено. Все сведения здесь
                актуальны на дату публикации и могут измениться, статус лучше
                сверять в официальном канале компании.
              </p>
              <Callout>
                Это могло произойти с любым провайдером. Вопрос
                о виновных оставим расследованию. Практичнее продумать хранение
                сайта так, чтобы падение одной компании не стоило вам бизнеса.
              </Callout>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что сделать сегодня: пострадавшим и тем, кто опасается
              </h2>
              <p className='mb-6'>
                Порядок важен. Сначала закрываем доступы, потом выясняем, что у
                нас есть, и только после этого выбираем площадку.
              </p>
              <ol className='space-y-4'>
                {todaySteps.map((item, i) => (
                  <li
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
                  >
                    <span
                      className='shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold'
                      style={{
                        background: 'rgba(251,146,60,0.18)',
                        color: '#fdba74'
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className='font-semibold text-white mb-1'>
                        {item.title}
                      </p>
                      <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className='mt-6'>
                Если вы раньше подключали к сайту платёжные системы, CRM и
                рассылки, ключей окажется больше, чем кажется. Как они
                устроены и почему утечка одного токена опасна, я разбирал в
                материале про{' '}
                <Link href='/blog/chto-takoe-api-sajta' className={linkCls}>
                  API сайта
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Почему аренда выделенного сервера не решает проблему
              </h2>
              <p className='mb-4'>
                После таких новостей первая мысль: взять выделенный сервер и
                спать спокойно. Но если сервер арендован у того же провайдера,
                где лежат и копии, и домен, вы остаётесь зависимы от его
                безопасности, у какой бы компании он ни был. На примере
                Beget: данные, которые уничтожила атака, лежали в облаке, но и
                среди выделенных серверов картина на 4 ноября была
                неоднородной. Те, что клиенты администрируют сами, работали, а
                среди администрируемых компанией было запущено около 15%.
              </p>
              <p className='mb-4'>
                Это не единичный случай в отрасли. По данным{' '}
                <Src href={SRC.record}>The Record</Src> от 4 ноября, в октябре
                2026 года злоумышленники использовали уязвимость у
                хостинг-провайдера FirstVDS и похитили данные клиентов.{' '}
                <Src href={SRC.servernews}>ServerNews</Src> пишет, что о
                взломах, связанных с уязвимостью в VMmanager 6, в октябре
                сообщали FirstVDS и ещё несколько провайдеров. Связи этих
                эпизодов с атакой на Beget в источниках нет, а подробности и
                масштаб лучше смотреть в самих публикациях. Остальных
                провайдеров я не называю: подтверждений, которые я смог
                проверить, у меня нет.
              </p>
              <p className='mb-6'>
                Защищает разнесение. Три узла, которые не должны зависеть друг
                от друга, и четвёртый у вас в руках:
              </p>

              <figure
                aria-label='Схема разнесения: сервер, бэкапы, домен и DNS у разных компаний'
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
                <div
                  aria-hidden='true'
                  className='flex justify-center my-3 text-orange-300'
                >
                  <svg width='20' height='28' viewBox='0 0 20 28' fill='none'>
                    <path
                      d='M10 2v22M4 18l6 6 6-6'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div
                  className='p-4 rounded-xl text-center'
                  style={{
                    border: '1px solid rgba(52,211,153,0.35)',
                    background: 'rgba(52,211,153,0.08)'
                  }}
                >
                  <p className='font-semibold text-emerald-300 mb-1'>
                    Код в Git и выгрузка у вас
                  </p>
                  <p className='text-sm text-gray-400'>
                    Если любой один узел пропал, сайт собирается заново из
                    остальных.
                  </p>
                </div>
              </figure>

              <p className='mt-6'>
                Для малого бизнеса разнести узлы удобнее всего так: VPS в одной
                компании, S3-бакет в другой, домен у регистратора, который не
                продаёт вам хостинг. Если что-то из этого сейчас живёт в одной
                компании, начинайте с самого дешёвого шага: заведите внешнюю
                копию.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Что даёт собственный сервер с Coolify
              </h2>
              <p className='mb-4'>
                Coolify это open source платформа, которую вы ставите на свой
                сервер. Она даёт то, что привыкли ждать от Heroku или Vercel,
                только на вашей машине. Я перечисляю по официальной{' '}
                <Src href='https://coolify.io/docs/get-started/introduction'>
                  документации
                </Src>
                , без добавок от себя.
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
              <p className='mt-6 mb-4'>
                Лично я держу этот сайт на собственном сервере с Coolify. Код
                лежит в GitHub, а после пуша в основную ветку сайт собирается и
                выкладывается сам. Такой порядок избавляет от ручного копирования
                файлов, и в любой момент можно собрать проект на другом сервере.
              </p>
              <p>
                Подробнее про подключение S3 для копий: раздел документации{' '}
                <Src href='https://coolify.io/docs/knowledge-base/s3/introduction'>
                  S3 Storage
                </Src>
                . Бакет нужно создать заранее, Coolify при подключении проверяет
                его существование.
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Минусы: что теперь лежит на вас
              </h2>
              <p className='mb-4'>
                В цену хостинга входит чужая работа: обновления, мониторинг,
                часть безопасности. Свой сервер возвращает её вам. В документации Coolify сказано прямо:
                обновления ОС, SSH-доступ, файрвол и DNS на вас, при
                самостоятельной установке на вас ещё и обновление самого
                Coolify, бэкапы и восстановление.
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
                        Задача
                      </th>
                      <th className='py-3 pr-4 text-gray-400 font-medium'>
                        Что делать
                      </th>
                      <th className='py-3 text-gray-400 font-medium'>
                        Как часто
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-white/5'>
                    {duties.map(row => (
                      <tr key={row.task}>
                        <td className='py-3 pr-4 text-white align-top'>
                          {row.task}
                        </td>
                        <td className='py-3 pr-4 text-gray-400 align-top'>
                          {row.how}
                        </td>
                        <td className='py-3 text-orange-200 align-top'>
                          {row.freq}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className='mt-3 text-sm text-gray-400'>
                Частота ориентировочная, это мои рабочие значения, а не норма
                из документации.
              </p>

              <h3 className='text-xl font-semibold text-white mt-10 mb-3'>
                Уязвимости самого Coolify
              </h3>
              <p className='mb-4'>
                Панель управления сервером это привлекательная цель. В
                репозитории проекта на странице{' '}
                <Src href='https://github.com/coollabsio/coolify/security/advisories'>
                  Security Advisories
                </Src>{' '}
                на первой странице списка десять записей за июнь и июль 2026
                года, всего страниц семь. Среди них есть записи высокой
                серьёзности и одна критическая (межкомандный IDOR). Три
                примера, которые я проверил:
              </p>
              <div className='space-y-4'>
                {cves.map(item => (
                  <div
                    key={item.id}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(251,191,36,0.18)',
                      background: 'rgba(251,191,36,0.04)'
                    }}
                  >
                    <p className='font-semibold text-white mb-1'>
                      {item.id}{' '}
                      <span className='text-sm font-normal text-amber-200'>
                        {item.sev}
                      </span>
                    </p>
                    <p className='text-sm text-gray-400 leading-relaxed mb-2'>
                      {item.what}
                    </p>
                    <p className='text-sm text-gray-300 mb-2'>{item.fix}</p>
                    <Src href={item.href}>{item.label}</Src>
                  </div>
                ))}
              </div>
              <p className='mt-4 text-sm text-gray-400'>
                Запись про CVE-2026-34597 я сверял по агрегатору, а не по
                карточке GitHub, поэтому перед работой откройте оригинал.
              </p>

              <h3 className='text-xl font-semibold text-white mt-10 mb-3'>
                Как не стать мишенью
              </h3>
              <p className='mb-4'>
                Панель нельзя оставлять открытой всему интернету и нельзя
                забывать обновлять. Сразу после привязки домена закройте порты
                8000, 6001 и 6002, как советует{' '}
                <Src href='https://coolify.io/docs/knowledge-base/server/firewall'>
                  документация по файрволу
                </Src>
                . Для вебхуков из GitHub обязательно задавайте секрет, иначе
                повторите сценарий из CVE-2026-41896. Выдавайте членам команды
                минимальные права: большинство найденных уязвимостей требуют
                аутентифицированного пользователя, то есть угроза во многом
                внутренняя.
              </p>
              <p className='mb-4'>
                Есть и менее очевидная ловушка. Docker, публикуя порты
                контейнеров, правит iptables в обход UFW, поэтому правило
                «закрыто в UFW» не гарантирует, что порт закрыт. Документация
                советует файрвол на стороне провайдера или утилиту ufw-docker.
                Проверяйте снаружи, сканом с другой машины.
              </p>
              <Code>{hardenCmd}</Code>
              <p>
                Отдельно сохраните копию самой панели. Каталог с базой и файл
                переменных окружения содержат ключи, без которых данные панели
                при восстановлении не расшифруются. Бэкап баз и томов проектов
                эту проблему не закрывает.
              </p>
              <Code>{backupNote}</Code>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Кому такая схема не нужна
              </h2>
              <p className='mb-6'>
                Свой сервер подходит не каждому, и пользу от него преувеличивать
                не стоит. В этих случаях я бы не стал его советовать:
              </p>
              <div className='space-y-4'>
                {notForYou.map(item => (
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
                Всем, включая владельцев визиток, нужны внешняя копия и
                независимый от хостинга домен. На эти два пункта уходит один
                вечер, и они закрывают основной риск. Нужен ли сайту вообще
                отдельный контур, если у бизнеса есть соцсети, я разбирал в
                статье{' '}
                <Link href='/blog/zachem-biznesu-sajt' className={linkCls}>
                  «Зачем бизнесу сайт»
                </Link>
                .
              </p>
            </section>

            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={calloutStyle}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Сайт на хостинге и нет внешней копии?
                </p>
                <p className='text-sm text-gray-400'>
                  Напишите в Telegram, какая у вас CMS и где лежит почта. Я
                  скажу, что забрать в первую очередь и как переехать с
                  минимальным простоем. Первый разбор бесплатный.
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
                Переезд по шагам
              </h2>
              <p className='mb-6'>
                Схема рассчитана на сайт с базой данных, например WordPress или
                самописное приложение. Сроки зависят от размера сайта и того,
                сколько вокруг него интеграций, поэтому я их не называю.
              </p>
              <ol className='space-y-4'>
                {migrationSteps.map((item, i) => (
                  <li
                    key={item.title}
                    className='flex gap-4 p-4 rounded-xl'
                    style={tableCard}
                  >
                    <span
                      className='shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold'
                      style={{
                        background: 'rgba(251,146,60,0.18)',
                        color: '#fdba74'
                      }}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className='font-semibold text-white mb-1'>
                        {item.title}
                      </p>
                      <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <h3 className='text-xl font-semibold text-white mt-10 mb-3'>
                Команды для шагов 2 и 6
              </h3>
              <Code>{dumpCmd}</Code>
              <Code>{dnsCmd}</Code>
              <p>
                Документация Coolify отдельно предупреждает: нельзя копировать
                том работающей базы целиком, нужен логический дамп средствами
                самой СУБД. Перенос приложения на другой хост описан в{' '}
                <Src href='https://coolify.io/docs/knowledge-base/how-to/migrate-apps-different-host'>
                  отдельной инструкции
                </Src>
                , там же есть сценарий отката.
              </p>
              <Callout>
                Пока вы переезжаете, на старой площадке могут лежать файлы,
                которых нет больше нигде. Не удаляйте их, пока новая схема не
                пройдёт проверку восстановления.
              </Callout>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Сколько стоит такая схема
              </h2>
              <p className='mb-4'>
                Конкретных цен я не привожу. Когда я сверял тарифы одного
                российского провайдера, на разных страницах сайта цена одной и
                той же конфигурации расходилась в разы: бонусные таблицы,
                акции, старые прайсы. Любую цифру из статьи придётся перепроверять
                в конфигураторе в день заказа.
              </p>
              <p className='mb-4'>
                Зато можно перечислить, из чего складывается итог. Сервер: для
                Coolify по документации нужно от двух ядер и двух гигабайт
                памяти, под несколько проектов берите с запасом. Хранилище для
                копий оплачивается по объёму. Домен продлевается раз в год.
                Отдельная строка это время человека, который будет обновлять и
                проверять. Именно её чаще всего забывают, и именно она решает,
                дешевле ли вам свой сервер, чем хороший хостинг.
              </p>
              <p>
                Стоимость настройки зависит от числа сайтов, наличия почты на
                домене и интеграций вроде форм с отправкой в CRM. Точный
                диапазон я называю после{' '}
                <Link href='/brief' className={linkCls}>
                  брифа
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Какую часть работы можно поручить мне
              </h2>
              <p className='mb-4'>
                Минусы свободного сервера сводятся к тому, что за ним нужно
                следить. Это можно делегировать. Я настраиваю и сопровождаю
                такие схемы как фриланс-исполнитель и сейчас беру ограниченное
                число проектов, чтобы вести каждый без спешки.
              </p>
              <ul className='space-y-3 mb-6'>
                {[
                  'Аудит текущего хостинга: что где лежит, какие копии есть, что можно потерять.',
                  'Подбор площадки и разнесение: сервер, S3 для копий, регистратор и DNS.',
                  'Установка и закрытие Coolify, файрвол, доступы по ключам.',
                  'Перенос сайтов, баз и почты, переключение DNS без долгого простоя.',
                  'Деплой из Git с секретами для вебхуков и откатом.',
                  'Ежемесячное сопровождение: обновления, мониторинг, проверка восстановления, отчёт.'
                ].map(item => (
                  <li key={item} className='flex items-start gap-3'>
                    <span className='mt-1 shrink-0 w-5 h-5 rounded-md border border-orange-400/40 flex items-center justify-center text-xs text-orange-300'>
                      ✓
                    </span>
                    <span className='text-sm text-gray-300'>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Мониторинг и уведомления о падении сайта хорошо ложатся на
                автоматизацию, я писал об этом в статье про{' '}
                <Link href='/blog/avtomatizaciya-biznesa' className={linkCls}>
                  автоматизацию бизнеса
                </Link>
                . А если сайт пора не только переносить, но и пересобирать,
                загляните в раздел{' '}
                <Link href='/sozdanie-saytov' className={linkCls}>
                  создания сайтов
                </Link>
                . Что отличает рабочий сайт от очередного конструктора, я
                подробно описал в материале{' '}
                <Link href='/blog/sozdanie-sajtov-nado-znat' className={linkCls}>
                  «Создать сайт сейчас легко»
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые вопросы о переносе сайта и о Coolify
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

          <div className='mt-14 p-6 rounded-2xl' style={tableCard}>
            <h2 className='text-xl font-bold text-white mb-3'>
              Источники и оговорки
            </h2>
            <p className='text-gray-400 leading-relaxed text-sm mb-3'>
              Факты об инциденте взяты из публикаций{' '}
              <Src href={SRC.xakep}>Xakep</Src>,{' '}
              <Src href={SRC.kommersant}>Коммерсантъ</Src>,{' '}
              <Src href={SRC.habr1}>Хабр</Src> (
              <Src href={SRC.habr2}>обновление от 4 ноября</Src>),{' '}
              <Src href={SRC.servernews}>ServerNews</Src> и{' '}
              <Src href={SRC.record}>The Record</Src>. Это слова компании и
              СМИ, а не результаты независимого расследования. Частотность
              запросов о переносе сайта с хостинга не измерялась.
            </p>
            <p className='text-gray-400 leading-relaxed text-sm'>
              Сведения актуальны на {publishedFormatted}. Статус восстановления
              Beget меняется, свежие данные ищите у самой компании.
            </p>
          </div>

          <div
            className='mt-10 p-8 sm:p-10 rounded-3xl text-center'
            style={{
              background:
                'linear-gradient(135deg, rgba(251,146,60,0.14), rgba(194,65,12,0.12))',
              border: '1px solid rgba(251,146,60,0.28)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Хотите, чтобы падение провайдера не было вашей проблемой?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Соберу и закрою сервер с Coolify, перенесу сайты, настрою
              бэкапы вне площадки и проверю, что они разворачиваются. Работаю
              удалённо. Опишите задачу, и я отвечу, что нужно именно вам.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
                style={{
                  ...ctaStyle,
                  boxShadow: '0 0 32px rgba(251,146,60,0.3)'
                }}
              >
                Написать в Telegram →
              </a>
              <Link
                href='/brief'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/15 transition-all hover:bg-white/5'
              >
                Заполнить бриф
              </Link>
            </div>
          </div>

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
              href='/blog/chto-takoe-api-sajta'
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors'
            >
              Читать: что такое API сайта
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

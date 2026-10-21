import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqList from '@/components/FaqList'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import PriceMosaic from '@/components/PriceMosaic'
import ContactCta from '@/components/ContactCta'
import { contacts, SITE_URL } from '@/config/contacts'
import { getNiches, getNicheService } from '@/config/niches'
import { getPosts } from '@/config/posts'
import { CATALOG_ROW, formatPrice, getServices } from '@/config/services'
import { siteConfig } from '@/config/site.config'
import { rampAccent, rampHsl } from '@/lib/colors'
import {
  breadcrumbNode,
  faqNode,
  graph,
  organizationNode,
  personNode,
  serviceCatalogNode
} from '@/lib/schema'
import type { ServiceFaqItem } from '@/config/services'

const URL_PATH = '/sozdanie-saytov'
const FULL_URL = `${SITE_URL}${URL_PATH}`

export const metadata: Metadata = {
  title: 'Создание сайтов под ключ — цены и сроки | Виталий Вронский',
  description:
    'Создание сайтов под ключ: лендинг от 20 000 ₽, корпоративный сайт от 90 000 ₽, интернет-магазин от 150 000 ₽. Фиксированные цены и сроки в договоре, код передаю вам. Работаю удалённо по всей России.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'создание сайтов',
    'создание сайтов под ключ',
    'разработка сайтов',
    'заказать создание сайта',
    'создание сайта под ключ цена',
    'создание и разработка сайтов',
    'разработка сайта на заказ',
    'сделать сайт под ключ'
  ],
  openGraph: {
    type: 'website',
    url: FULL_URL,
    siteName: 'Виталий Вронский',
    title: 'Создание сайтов под ключ — цены, сроки и состав работ',
    description:
      'Лендинг от 20 000 ₽, корпоративный сайт от 90 000 ₽, интернет-магазин от 150 000 ₽. Состав работ и сроки фиксирую договором до старта.',
    locale: 'ru_RU'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Создание сайтов под ключ — цены и сроки',
    description:
      'Разработка лендингов, корпоративных сайтов, интернет-магазинов и веб-приложений. Фиксированная цена, код передаю вам.'
  },
  robots: { index: true, follow: true }
}

const CRUMBS = [
  { name: 'Главная', path: '/' },
  { name: 'Создание сайтов', path: URL_PATH }
]

const trustStrip = [
  { value: '5+', label: 'лет в разработке' },
  { value: '30+', label: 'проектов' },
  { value: 'Договор', label: 'на каждый проект' },
  { value: 'Код', label: 'передаю вам' }
]

const included = [
  {
    title: 'Разбор задачи до начала работ',
    desc: 'Кто ваш клиент, какую задачу закрывает сайт и что будет считаться результатом. Без этого любая цена — гадание.'
  },
  {
    title: 'Структура и прототип',
    desc: 'Карта сайта и схемы ключевых страниц до старта дизайна. На этом этапе правки бесплатны, потом — переделка блоков.'
  },
  {
    title: 'Индивидуальный дизайн',
    desc: 'Макеты под ваш бренд и аудиторию, сразу с мобильной версией. Не шаблон с заменённым логотипом.'
  },
  {
    title: 'Вёрстка на Next.js',
    desc: 'Серверный рендеринг, семантическая разметка, внимание к скорости загрузки — то, что напрямую влияет на позиции.'
  },
  {
    title: 'Формы заявки',
    desc: 'Отправка на почту и в Telegram, валидация полей, согласие на обработку данных по 152-ФЗ.'
  },
  {
    title: 'SEO-подготовка',
    desc: 'Заголовки, мета-теги, Open Graph, микроразметка Schema.org, sitemap и robots. Закладывается на старте, а не «потом».'
  },
  {
    title: 'Аналитика с целями',
    desc: 'Яндекс.Метрика с настроенными целями на отправку формы — чтобы было видно, что именно приносит заявки.'
  },
  {
    title: 'Тестирование и запуск',
    desc: 'Проверка на реальных устройствах и браузерах, SSL, перенос на хостинг, наблюдение за первыми часами после запуска.'
  },
  {
    title: 'Передача кода и доступов',
    desc: 'Код проекта, домен и хостинг оформляются на вас. Вы не привязаны ни ко мне, ни к платформе.'
  },
  {
    title: 'Гарантийный период',
    desc: 'Ошибки, допущенные при разработке, исправляю бесплатно после сдачи. Новые задачи — по договорённости.'
  }
]

const stages = [
  {
    title: 'Бриф и цели проекта',
    time: '1–2 дня',
    desc: 'Обсуждаем, кто ваш клиент, какую задачу должен закрыть сайт и что будет считаться результатом. По итогам появляется письменный состав работ, который уходит в договор.'
  },
  {
    title: 'Структура и прототип',
    time: '2–4 дня',
    desc: 'Собираю карту сайта и схематичный прототип ключевых страниц. Структуру согласовываем до старта дизайна: на этом этапе правки почти ничего не стоят.'
  },
  {
    title: 'Дизайн',
    time: '3–7 дней',
    desc: 'Разрабатываю визуальный стиль под ваш бренд и аудиторию, сразу с мобильной версией. Макеты показываю в Figma, правки собираем за один-два круга, а не бесконечно.'
  },
  {
    title: 'Вёрстка и разработка',
    time: '5–20 дней',
    desc: 'Собираю сайт на Next.js с семантической вёрсткой и вниманием к скорости загрузки. Промежуточную версию можно смотреть в процессе, а не только на финальной сдаче.'
  },
  {
    title: 'Интеграции и контент',
    time: '3–7 дней',
    desc: 'Подключаю CRM, оплату, аналитику и наполняю сайт текстами и изображениями. Часть работы идёт параллельно с вёрсткой, чтобы не растягивать сроки.'
  },
  {
    title: 'Тестирование и запуск',
    time: '2–4 дня',
    desc: 'Проверяю сайт на разных устройствах и браузерах, настраиваю SSL, sitemap и robots, переношу проект на хостинг и слежу за первыми часами после запуска.'
  }
]

function stageHsl(index: number, alpha: number): string {
  return rampHsl(index / Math.max(stages.length - 1, 1), alpha)
}

function stageAccent(index: number): string {
  return rampAccent(index / Math.max(stages.length - 1, 1))
}

/**
 * Пазл структуры цены: sm:col-span подобраны так, чтобы каждый ряд
 * складывался ровно в 6 колонок, а ширина плитки была пропорциональна доле.
 */
const priceStructure = [
  {
    part: 'Дизайн и прототип',
    share: '20–30%',
    span: 'sm:col-span-2',
    mid: 25,
    note: 'Структура страниц, макеты под бренд, мобильная версия. Экономится, если у вас есть готовый брендбук и подходят типовые сетки.'
  },
  {
    part: 'Вёрстка и разработка',
    share: '30–40%',
    span: 'sm:col-span-4',
    mid: 35,
    note: 'Программирование логики, семантическая вёрстка, оптимизация скорости. Почти не сжимается — это основа работоспособности сайта.'
  },
  {
    part: 'Интеграции',
    share: '10–20%',
    span: 'sm:col-span-2',
    mid: 15,
    note: 'CRM, онлайн-оплата, аналитика, сторонние API. Полностью зависит от того, сколько систем нужно связать.'
  },
  {
    part: 'Контент и SEO-подготовка',
    share: '10–15%',
    span: 'sm:col-span-2',
    mid: 13,
    note: 'Тексты, изображения, заголовки, мета-теги, микроразметка. Самая управляемая часть: готовые материалы снимают её почти целиком.'
  },
  {
    part: 'Тестирование и запуск',
    share: '5–10%',
    span: 'sm:col-span-2',
    mid: 7,
    note: 'Проверка на устройствах, перенос на хостинг, приёмка. Урезать нельзя — именно здесь отлавливаются ошибки до того, как их увидят клиенты.'
  }
]

const contractorQuestions = [
  {
    q: 'На какой технологии будет сделан сайт и почему именно на ней?',
    why: 'Ответ «на современной» или «на нашей CMS» без объяснения — тревожный знак. Технология определяет, кто сможет вести проект после сдачи и во сколько обойдётся развитие.'
  },
  {
    q: 'Что конкретно входит в названную цену, а что считается отдельно?',
    why: 'Просите письменный список. Именно здесь обычно прячутся интеграции, SEO-подготовка и админка, которые потом приходят отдельным счётом.'
  },
  {
    q: 'Кому принадлежат код, домен и хостинг после сдачи?',
    why: 'Если доступы остаются у подрядчика, вы не владелец сайта, а арендатор. Смена исполнителя в такой схеме превращается в переговоры о выкупе.'
  },
  {
    q: 'Что происходит, если сроки сдвинутся?',
    why: 'Нормальный ответ — «сроки по этапам зафиксированы в договоре, о рисках предупреждаю заранее». Ненормальный — «как пойдёт».'
  },
  {
    q: 'Как выглядит гарантия и что в неё входит?',
    why: 'Ошибки разработки должны исправляться бесплатно. Если гарантия не описана, её нет, как бы уверенно о ней ни говорили на встрече.'
  },
  {
    q: 'Можно посмотреть промежуточную версию в процессе?',
    why: 'Отказ показывать работу до финала — плохой признак. Три недели тишины почти всегда заканчиваются неприятным сюрпризом на сдаче.'
  }
]

const budgetScenarios = [
  {
    budget: 'До 60 000 ₽',
    title: 'Начните с лендинга под одно предложение',
    desc: 'Одна страница с чётким оффером, формой заявки и аналитикой. Она уже приносит заявки и даёт данные, на которых потом строится решение о полноценном сайте. Пытаться уложить в этот бюджет многостраничный сайт — значит получить восемь слабых страниц вместо одной работающей.'
  },
  {
    budget: '90 000 – 150 000 ₽',
    title: 'Корпоративный сайт со структурой под запросы',
    desc: 'Отдельная страница под каждую услугу — основа поискового трафика. В этом бюджете имеет смысл вкладываться не в анимации, а в количество и качество страниц: именно они работают на вас годами после запуска.'
  },
  {
    budget: 'От 150 000 ₽',
    title: 'Магазин или веб-приложение с интеграциями',
    desc: 'Здесь основная стоимость — не дизайн, а логика и связки с внешними системами: оплата, доставка, склад, CRM. Планируйте бюджет с запасом именно на интеграции: они всегда сложнее, чем выглядят на брифе.'
  }
]

const honestTakes = [
  {
    title: 'На чём я делаю сайты и почему это важно вам',
    paragraphs: [
      'Все проекты собираю на Next.js — это React-фреймворк, который отдаёт страницу браузеру уже готовой, а не собирает её скриптами после загрузки. Практическая разница в двух вещах: поисковый робот видит полный текст страницы сразу, а посетитель не смотрит на пустой экран, пока грузятся скрипты. Доля людей, уходящих с медленного сайта, измеряется десятками процентов — это не абстрактная метрика, а недополученные заявки.',
      'Второе следствие выбора технологии — кто сможет вести проект дальше. Next.js и React — самый распространённый стек в веб-разработке, специалистов по нему много. Если сайт сделан на самописной CMS подрядчика или на закрытой платформе, круг тех, кто сможет его развивать, сужается до одной компании, и это уже не техническое решение, а вопрос вашей независимости.',
      'Отдельно про базы данных: там, где нужно хранить состояние — заказы, заявки, личные кабинеты, — использую PostgreSQL и разворачиваю её на вашем сервере. Данные остаются у вас, и это же закрывает требование о локализации персональных данных на территории России.'
    ]
  },
  {
    title: 'Что происходит с сайтом после запуска',
    paragraphs: [
      'Запуск — не финал, а начало срока службы сайта. Сразу после переноса на хостинг я слежу за первыми часами работы: смотрю логи, проверяю, что формы доходят, что аналитика собирает данные, что поисковые роботы получили sitemap и начали обход. Ошибки, если они есть, вылезают именно в этот момент.',
      'Дальше действует гарантийный период: всё, что сломано по моей вине, исправляю бесплатно. Важно различать гарантию и доработки — «кнопка не отправляет форму» это гарантия, «давайте добавим ещё три раздела» это новая задача. Разницу проговариваю заранее, чтобы потом не выяснять на эмоциях.',
      'Поддержку дальше обычно берут в формате нескольких часов в месяц по фиксированной ставке: обновления, мелкие правки, добавление страниц, наблюдение за скоростью. Это не обязательное условие — сайт передаётся вам полностью, с кодом и доступами, и вести его может кто угодно. Но первые месяцы после запуска чаще всего требуют правок по факту: реальное поведение посетителей всегда расходится с предположениями, которые были на брифе.'
    ]
  },
  {
    title: 'Почему «сайт за три дня» обычно выходит дороже',
    paragraphs: [
      'Быстрое предложение почти всегда означает готовый шаблон с заменённым логотипом. Такая страница выглядит нормально ровно до момента, когда клиент видит её же у трёх ваших конкурентов — шаблоны с маркетплейсов легко узнаваемы.',
      'Второй сценарий: пропущен этап разбора задачи. Дизайнер сделал красиво, но страница отвечает на вопросы, которых у посетителя нет. Переделка структуры после сдачи — это не правка, а повторная разработка, и она оплачивается заново.'
    ]
  },
  {
    title: 'Почему сайт-конструктор не решает задачу бизнеса',
    paragraphs: [
      'Конструктор честно закрывает задачу «нужна страница за вечер» и упирается в потолок ровно тогда, когда бизнес начинает расти: нужна нетиповая интеграция, своя логика формы, серьёзная работа над скоростью загрузки или структура из десятков страниц под поисковые запросы.',
      'Дальше есть два выхода: мириться с ограничениями или переделывать с нуля. Второе означает, что деньги за первый сайт потрачены на обучение, а не на актив. Плюс отдельный риск: контент и домен живут на чужой платформе по чужим правилам, которые меняются без вашего участия.'
    ]
  },
  {
    title: 'Почему фикс-цена без описанного объёма — это не фикс-цена',
    paragraphs: [
      'Когда предложение звучит подозрительно дёшево, в 9 случаях из 10 в него не включены подключение CRM, платёжной системы, аналитики и SEO-подготовка. Их добавляют потом отдельным счётом, и итоговая сумма догоняет обычную рыночную, а иногда обгоняет.',
      'Если объём работ не описан письменно, любое расхождение в ожиданиях превращается в спор «это была не та задача». Поэтому состав работ я фиксирую до старта — это защищает и вас, и меня.'
    ]
  },
  {
    title: 'Что реально экономит бюджет',
    paragraphs: [
      'Готовые тексты и фотографии сокращают срок сильнее, чем кажется. Сбор контента в процессе разработки — самая частая причина, по которой сроки уезжают на пару недель.',
      'И вторая вещь: начать с малого и расширять. Лендинг с чётким предложением закрывает первую задачу и уже приносит заявки, а дальше сайт наращивается до каталога, блога или магазина на той же кодовой базе — без переделки с нуля.'
    ]
  }
]

const guarantees = [
  'Договор на каждый проект с письменно зафиксированным составом работ и сроками',
  'Оплата по этапам, а не 100% предоплатой вперёд',
  'Промежуточные версии показываю в процессе — вы не ждёте три недели вслепую',
  'Гарантийный период после сдачи: ошибки разработки исправляю бесплатно',
  'Код проекта передаю вам, домен и хостинг оформляются на ваше имя',
  'Работаю как ИП с ИНН и регистрацией в реестре операторов персональных данных'
]

const hubFaq: ServiceFaqItem[] = [
  {
    q: 'Сколько стоит создание сайта под ключ?',
    a: 'Лендинг — от 20 000 ₽, корпоративный сайт — от 90 000 ₽, каталог с формой заявки — от 120 000 ₽, интернет-магазин — от 150 000 ₽, веб-приложение — от 100 000 ₽. Итоговая цена зависит от количества страниц, интеграций и объёма дизайна с нуля. Точную сумму называю после разбора задачи и фиксирую в договоре.'
  },
  {
    q: 'Что входит в стоимость сайта, кроме дизайна и вёрстки?',
    a: 'Разбор задачи, структура и прототип, адаптивная вёрстка под все устройства, формы заявки, SEO-подготовка, подключение аналитики, тестирование, перенос на хостинг и передача кода. Интеграции с CRM, платёжными системами и создание контента с нуля считаются отдельно — их объём сильно различается от проекта к проекту.'
  },
  {
    q: 'Сколько времени занимает разработка сайта?',
    a: 'Лендинг — 3–7 дней, корпоративный сайт — 2–4 недели, каталог — 3–5 недель, интернет-магазин — 4–8 недель, веб-приложение — 1–3 месяца. Сроки растут, если на старте нет готовых текстов и фотографий и их нужно собирать в процессе.'
  },
  {
    q: 'Можно ли заказать сайт удалённо, из другого города?',
    a: 'Да, и так работает большинство проектов. Веду клиентов по всей России полностью удалённо: бриф, обсуждение макетов и приёмка проходят по видеосвязи и в Telegram. География не влияет ни на цену, ни на сроки.'
  },
  {
    q: 'Я работаю один или это агентство?',
    a: 'Работаю сам, без прослойки менеджеров. Это значит, что вы общаетесь напрямую с тем, кто делает сайт, и ничего не теряется в пересказе. Обратная сторона честная: я не беру одновременно десять проектов, поэтому иногда старт приходится планировать на пару недель вперёд.'
  },
  {
    q: 'На какой технологии делаете сайты?',
    a: 'Next.js и React, база данных PostgreSQL, где она нужна. Страницы отдаются уже готовыми, без ожидания загрузки скриптов, — это влияет и на позиции в поиске, и на долю посетителей, которые не ушли, пока страница думала.'
  },
  {
    q: 'Кому принадлежат код, домен и хостинг после сдачи?',
    a: 'Вам. Код передаю вместе с проектом, домен и хостинг оформляются на вас. Дальше проект может вести любой разработчик — привязки ко мне или к платформе нет.'
  },
  {
    q: 'Будете ли поддерживать сайт после запуска?',
    a: 'Да. После сдачи действует гарантийный период, в течение которого ошибки разработки исправляю бесплатно. Дальнейшая поддержка и доработки — отдельно, обычно это несколько часов в месяц по фиксированной ставке.'
  },
  {
    q: 'Поможете с продвижением сайта?',
    a: 'Техническую базу для поиска закладываю на старте: серверный рендеринг, скорость, структура под запросы, микроразметка, sitemap. Само SEO-продвижение — отдельная работа, но переделывать сайт под неё не придётся.'
  },
  {
    q: 'Как начать работу?',
    a: 'Напишите в Telegram или оставьте заявку на этой странице. Первый шаг — разбор задачи: 20–30 минут разговора, по итогам которых вы получаете понимание объёма, цены и сроков. Разбор бесплатный и ни к чему не обязывает.'
  }
]

export default function Page() {
  const services = getServices()
  const niches = getNiches()
  const posts = getPosts()

  const priceRows = [
    ...services.map(service => ({
      name: service.name,
      purpose: service.purpose,
      priceFrom: service.priceFrom,
      duration: service.duration,
      href: `${URL_PATH}/${service.slug}`,
      accent: service.accent
    })),
    {
      name: CATALOG_ROW.name,
      purpose: CATALOG_ROW.purpose,
      priceFrom: CATALOG_ROW.priceFrom,
      duration: CATALOG_ROW.duration,
      href: null,
      accent: '#22d3ee'
    }
  ].sort((a, b) => a.priceFrom - b.priceFrom)

  const relatedPosts = posts.filter(post =>
    [
      'sozdanie-sajtov-v-moskve',
      'sozdanie-sajtov-nado-znat',
      'zachem-biznesu-sajt'
    ].includes(post.slug)
  )

  const jsonLd = graph(
    personNode(),
    organizationNode(),
    serviceCatalogNode(services),
    breadcrumbNode(CRUMBS, `${FULL_URL}#breadcrumbs`),
    faqNode(hubFaq, `${FULL_URL}#faq`)
  )

  return (
    <>
      <JsonLd data={jsonLd} />
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
              'radial-gradient(circle, rgba(125,44,200,0.09) 0%, rgba(0,112,243,0.06) 50%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        <div className='relative z-10'>
          {/* Хиро */}
          <section className='px-6 pt-12 pb-16 sm:pt-16 sm:pb-24'>
            <div className='max-w-5xl mx-auto'>
              <Breadcrumbs items={CRUMBS} />

              <p className='text-xs uppercase tracking-[0.25em] text-gray-500 mb-5 font-mono'>
                Виталий Вронский — разработчик
              </p>

              <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6'>
                Создание сайтов{' '}
                <span
                  className='bg-clip-text text-transparent'
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #c084fc, #60a5fa)'
                  }}
                >
                  под ключ
                </span>
              </h1>

              <p className='text-base sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8'>
                Лендинги, корпоративные сайты, интернет-магазины и
                веб-приложения. Состав работ, цену и сроки фиксирую в договоре
                до старта, код проекта передаю вам. Работаю удалённо по всей
                России.
              </p>

              <div className='flex flex-col sm:flex-row gap-3 mb-12'>
                <a
                  href='#zayavka'
                  className='inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105'
                  style={{
                    background: 'linear-gradient(135deg, #7d2cc8, #0070f3)',
                    boxShadow: '0 0 32px rgba(125,44,200,0.4)'
                  }}
                >
                  Обсудить проект →
                </a>
                <a
                  href={contacts.phoneHref}
                  className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105'
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.8)'
                  }}
                >
                  {contacts.phone}
                </a>
              </div>

              {/* Трастовая полоса — видна на всех разрешениях */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {trustStrip.map(item => (
                  <div
                    key={item.label}
                    className='rounded-2xl px-4 py-4 text-center sm:text-left'
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)'
                    }}
                  >
                    <div
                      className='text-lg sm:text-xl font-bold bg-clip-text text-transparent'
                      style={{
                        backgroundImage:
                          'linear-gradient(135deg, #c084fc, #60a5fa)'
                      }}
                    >
                      {item.value}
                    </div>
                    <div className='text-xs text-gray-500 mt-1'>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Цены */}
          <section id='ceny' className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Сколько стоит сайт и за какой срок будет готов
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                В каждую цену входит полный цикл работ: разбор задачи,
                структура, дизайн, вёрстка, формы заявки, SEO-подготовка и
                запуск. Итоговую сумму называю после разбора задачи и фиксирую
                в договоре до старта.
              </p>

              <div className='grid sm:grid-cols-2 gap-4'>
                {priceRows.map(row => {
                  const card = (
                    <>
                      <div className='flex items-start justify-between gap-4 mb-3'>
                        <h3 className='text-lg font-semibold text-white'>
                          {row.name}
                        </h3>
                        <span
                          className='text-sm font-semibold whitespace-nowrap'
                          style={{ color: row.accent }}
                        >
                          {formatPrice(row.priceFrom)}
                        </span>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed mb-4'>
                        {row.purpose}
                      </p>
                      <div className='mt-auto flex items-center justify-between gap-3'>
                        <span className='text-xs text-gray-500'>
                          Срок: {row.duration}
                        </span>
                        {row.href && (
                          <span
                            className='text-xs font-medium'
                            style={{ color: row.accent }}
                          >
                            Подробнее →
                          </span>
                        )}
                      </div>
                    </>
                  )

                  const className =
                    'flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/3 transition-all'

                  return row.href ? (
                    <Link
                      key={row.name}
                      href={row.href}
                      className={`${className} hover:border-purple-500/30 hover:bg-white/5`}
                    >
                      {card}
                    </Link>
                  ) : (
                    <div key={row.name} className={className}>
                      {card}
                    </div>
                  )
                })}
              </div>

            </div>
          </section>

          {/* Структура цены */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Из чего складывается цена сайта
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                Примерное распределение бюджета по этапам. Пропорции сдвигаются
                от проекта к проекту: больше интеграций — больше доля
                разработки, есть готовый брендбук — меньше доля дизайна.
              </p>

              <PriceMosaic items={priceStructure} />
            </div>
          </section>

          {/* Сценарии по бюджету */}
          <section className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                С чего начать при разном бюджете
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                Самая частая ошибка — растянуть небольшой бюджет на большой
                сайт. Лучше сделать меньше, но до конца.
              </p>

              <div className='grid sm:grid-cols-3 gap-4'>
                {budgetScenarios.map(item => (
                  <div
                    key={item.budget}
                    className='flex flex-col p-6 rounded-2xl border border-white/8 bg-white/3'
                  >
                    <div
                      className='text-sm font-semibold mb-3'
                      style={{ color: '#60a5fa' }}
                    >
                      {item.budget}
                    </div>
                    <h3 className='text-base font-semibold text-white mb-3 leading-snug'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Что входит */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Что входит в работу
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                «Под ключ» означает, что после сдачи сайт работает и вам не
                нужно искать никого ещё. Вот полный список того, что входит в
                базовую цену любого проекта.
              </p>

              <div className='grid sm:grid-cols-2 gap-x-8 gap-y-6'>
                {included.map(item => (
                  <div key={item.title} className='flex gap-3'>
                    <span
                      aria-hidden='true'
                      className='mt-1 shrink-0 text-sm'
                      style={{ color: '#c084fc' }}
                    >
                      ✓
                    </span>
                    <div>
                      <h3 className='text-base font-semibold text-white mb-1'>
                        {item.title}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Этапы */}
          <section className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Этапы разработки — от заявки до запуска
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                Порядок один для всех проектов, меняется только объём внутри
                этапов. Сроки указаны для типового случая, точные —
                фиксируются в договоре.
              </p>

              <ol className='flex flex-col'>
                {stages.map((stage, index) => (
                  <li
                    key={stage.title}
                    className='flex gap-4 sm:gap-5 pb-4 last:pb-0'
                  >
                    {/* Колонка таймлайна: кружок с номером и линия к следующему этапу */}
                    <div className='flex flex-col items-center shrink-0'>
                      <div
                        className='size-10 rounded-full flex items-center justify-center text-sm font-bold'
                        style={{
                          background: `linear-gradient(135deg, ${stageHsl(index, 0.24)}, ${stageHsl(index, 0.1)})`,
                          border: `1px solid ${stageHsl(index, 0.45)}`,
                          color: stageAccent(index),
                          boxShadow: `0 0 20px ${stageHsl(index, 0.18)}`
                        }}
                      >
                        {index + 1}
                      </div>
                      {index < stages.length - 1 && (
                        <span
                          aria-hidden='true'
                          className='w-px flex-1 mt-2 rounded-full'
                          style={{
                            background: `linear-gradient(180deg, ${stageHsl(index, 0.5)}, ${stageHsl(index + 1, 0.18)})`
                          }}
                        />
                      )}
                    </div>

                    <div className='flex-1 p-5 rounded-2xl border border-white/8 bg-white/3'>
                      <div className='flex items-start justify-between gap-3 mb-2'>
                        <h3 className='text-base font-semibold text-white leading-snug'>
                          {stage.title}
                        </h3>
                        <span
                          className='shrink-0 mt-0.5 px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap'
                          style={{
                            border: `1px solid ${stageHsl(index, 0.3)}`,
                            background: stageHsl(index, 0.1),
                            color: stageAccent(index)
                          }}
                        >
                          {stage.time}
                        </span>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {stage.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Честные разборы */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-10'>
                О чём стоит знать до заказа сайта
              </h2>

              <div className='flex flex-col'>
                {honestTakes.map((block, index) => (
                  <article
                    key={block.title}
                    className='grid md:grid-cols-[15rem_minmax(0,1fr)] gap-4 md:gap-10 py-8 first:pt-0 border-t border-white/8 first:border-t-0'
                  >
                    <div className='md:sticky md:top-8 md:self-start'>
                      <div className='flex items-center gap-3 mb-3'>
                        <span className='text-xs font-mono text-[#666]'>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          aria-hidden='true'
                          className='h-px w-10'
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(192,132,252,0.6), transparent)'
                          }}
                        />
                      </div>
                      <h3 className='text-lg sm:text-xl font-semibold text-white leading-snug text-balance'>
                        {block.title}
                      </h3>
                    </div>

                    <div className='max-w-2xl'>
                      {block.paragraphs.map(paragraph => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className='text-base text-gray-400 leading-relaxed mb-4 last:mb-0'
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}

                {/* Чек-лист вопросов — работает и при выборе другого подрядчика */}
                <article className='grid md:grid-cols-[15rem_minmax(0,1fr)] gap-4 md:gap-10 py-8 border-t border-white/8'>
                  <div className='md:sticky md:top-8 md:self-start'>
                    <div className='flex items-center gap-3 mb-3'>
                      <span className='text-xs font-mono text-[#666]'>
                        {String(honestTakes.length + 1).padStart(2, '0')}
                      </span>
                      <span
                        aria-hidden='true'
                        className='h-px w-10'
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(96,165,250,0.6), transparent)'
                        }}
                      />
                    </div>
                    <h3 className='text-lg sm:text-xl font-semibold text-white leading-snug text-balance'>
                      Шесть вопросов, которые стоит задать любому разработчику
                    </h3>
                  </div>

                  <div>
                    <p className='text-base text-gray-400 leading-relaxed mb-6 max-w-2xl'>
                      Этот список пригодится, даже если вы выберете не меня. По
                      ответам на эти вопросы обычно сразу видно, с кем вы имеете
                      дело.
                    </p>

                    <div className='flex flex-col gap-4'>
                      {contractorQuestions.map((item, index) => (
                        <div
                          key={item.q}
                          className='flex gap-4 p-5 rounded-2xl border border-white/8 bg-white/3 transition-colors hover:border-white/15 hover:bg-white/5'
                        >
                          <div
                            className='shrink-0 size-8 rounded-full flex items-center justify-center text-xs font-bold'
                            style={{
                              background: 'rgba(0,112,243,0.15)',
                              border: '1px solid rgba(0,112,243,0.3)',
                              color: '#60a5fa'
                            }}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <p className='text-base font-medium text-white mb-2'>
                              {item.q}
                            </p>
                            <p className='text-sm text-gray-400 leading-relaxed'>
                              {item.why}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Гарантии */}
          <section className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Гарантии и договор
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                Работаю как индивидуальный предприниматель, с договором и
                закрывающими документами.
              </p>

              <ul className='flex flex-col gap-3 mb-10'>
                {guarantees.map(item => (
                  <li key={item} className='flex gap-3 text-base text-gray-300'>
                    <span
                      aria-hidden='true'
                      className='mt-1 shrink-0 text-sm'
                      style={{ color: '#34d399' }}
                    >
                      ✓
                    </span>
                    <span className='leading-relaxed'>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className='rounded-2xl p-6 text-sm text-gray-400 leading-relaxed'
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)'
                }}
              >
                <p className='mb-2'>
                  <span className='text-gray-300'>
                    {siteConfig.operator.fullName}
                  </span>
                  , ИНН {siteConfig.operator.inn}
                </p>
                <p className='mb-2'>
                  Зарегистрирован в реестре операторов персональных данных
                  Роскомнадзора, № {siteConfig.rkn.registryNumber}
                </p>
                <p>
                  <Link
                    href='/legal'
                    className='underline underline-offset-2 decoration-[#444] hover:text-white transition-colors'
                  >
                    Правовая информация и документы
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-10'>
                Частые вопросы о заказе сайта
              </h2>
              <FaqList items={hubFaq} />
            </div>
          </section>

          {/* Заявка */}
          <section id='zayavka' className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Обсудим ваш проект
              </h2>
              <p className='text-gray-400 mb-8 max-w-2xl leading-relaxed'>
                Первый шаг — разбор задачи: 20–30 минут разговора, по итогам
                которых у вас есть понимание объёма, цены и сроков. Бесплатно и
                без обязательств.
              </p>

              <ContactCta />
            </div>
          </section>

          {/* Перелинковка */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Разработка по типам сайтов
              </h2>
              <div className='grid sm:grid-cols-2 gap-4 mb-16'>
                {services.map(service => (
                  <Link
                    key={service.slug}
                    href={`${URL_PATH}/${service.slug}`}
                    className='group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
                  >
                    <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                      {service.h1}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed mb-3'>
                      {service.lead}
                    </p>
                    <span
                      className='text-xs font-medium'
                      style={{ color: service.accent }}
                    >
                      {formatPrice(service.priceFrom)} · {service.duration}
                    </span>
                  </Link>
                ))}
              </div>

              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Сайты для отраслей
              </h2>
              <div className='grid sm:grid-cols-2 gap-4 mb-16'>
                {niches.map(niche => (
                  <Link
                    key={niche.slug}
                    href={`${URL_PATH}/${niche.slug}`}
                    className='group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
                  >
                    <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                      {niche.name}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed mb-3'>
                      {niche.purpose}
                    </p>
                    <span
                      className='text-xs font-medium'
                      style={{ color: niche.accent }}
                    >
                      {formatPrice(getNicheService(niche).priceFrom)}
                    </span>
                  </Link>
                ))}
              </div>

              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Подробнее в статьях
              </h2>
              <div className='grid sm:grid-cols-3 gap-4'>
                {relatedPosts.map(post => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className='group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
                  >
                    <h3 className='text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug'>
                      {post.title}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  )
}

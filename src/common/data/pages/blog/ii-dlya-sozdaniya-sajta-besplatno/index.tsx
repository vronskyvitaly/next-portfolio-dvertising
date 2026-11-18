import Link from 'next/link'
import type { ReactNode } from 'react'
import { getService } from '@/config/services'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'
import {
  FULL_URL,
  TITLE,
  DESCRIPTION,
  PUBLISHED,
  coverImage
} from '@/components/pages/blog/ii-dlya-sozdaniya-sajta-besplatno/constants'
import { SITE_URL } from '@/config/contacts'

export const lending = getService('lending')!

export const corporate = getService('korporativnyy-sayt')!

export const shop = getService('internet-magazin')!

export const faq = [
  {
    q: 'Можно ли сделать сайт с ИИ полностью бесплатно?',
    a: 'Страницу в чате можно, бесплатный план Claude это позволяет с лимитами на число сообщений. Чтобы клиенты открывали её по вашему адресу, нужны домен и хостинг, а они платные. Бесплатные адреса на поддомене конструктора бывают, но такой сайт зависит от правил сервиса.'
  },
  {
    q: 'Нужно ли уметь программировать?',
    a: 'Для страницы в чате нет: вы пишете задачу обычными словами и правите результат так же. С Claude Code помогает понимание основ: где лежат файлы проекта, как выложить сайт на хостинг и как проверить, что форма заявки работает.'
  },
  {
    q: 'Кому принадлежит сайт, сделанный с ИИ?',
    a: 'Если файлы сайта у вас, а домен оформлен на вас, сайт можно перенести к любому хостеру или разработчику. Если сайт живёт внутри конструктора, перенос зависит от его правил. Когда сайт делаю я, исходники передаю владельцу.'
  },
  {
    q: 'Сколько стоят хостинг и домен?',
    a: 'Домен оплачивается раз в год у регистратора, хостинг помесячно или за год. Цена зависит от доменной зоны и тарифа, сравните варианты у двух-трёх компаний. Если сайт делаю я, подключение свободного домена и SSL-сертификат идут в подарок.'
  },
  {
    q: 'Что вы расскажете на бесплатной консультации?',
    a: 'Созвонимся или спишемся в Telegram. Я разберу вашу задачу и подскажу, хватит ли бесплатных инструментов, каким сервисом готовить тексты и картинки, где разместить сайт и что настроить после запуска: заявки, аналитику, SEO. Если решите заказать сайт, назову цену и сроки. Решение остаётся за вами.'
  }
]

export const jsonLd = {
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
        url: SITE_URL
      },
      publisher: {
        '@type': 'Person',
        name: 'Виталий Вронский',
        url: SITE_URL
      },
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      url: FULL_URL,
      image: absoluteUrl(coverImage.src),
      mainEntityOfPage: { '@type': 'WebPage', '@id': FULL_URL },
      inLanguage: 'ru',
      keywords:
        'ии для создания сайта бесплатно, нейросеть для создания сайта, сделать сайт с помощью claude, claude code сайт'
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

export const linkCls = 'text-sky-300 hover:text-sky-200 underline underline-offset-2'

export interface Plan {
  name: string
  price: string
  note: string
  items: string[]
}

export const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    note: 'бесплатно',
    items: [
      'Чат на сайте, в приложении для компьютера и телефона',
      'Artifacts: страницы, документы и макеты рядом с перепиской',
      'Лимит сообщений обновляется каждые 5 часов и раз в неделю'
    ]
  },
  {
    name: 'Pro',
    price: '$20 в месяц',
    note: 'или $17 в месяц при оплате за год ($200 сразу)',
    items: [
      'Всё, что есть в Free, с большими лимитами',
      'Claude Code для работы с проектом сайта',
      'Больше моделей и проектов без ограничения по числу'
    ]
  }
]

export interface Task {
  title: string
  body: ReactNode
}

export const tasks: Task[] = [
  {
    title: 'Домен',
    body: (
      <>
        Подобрать свободный адрес, зарегистрировать его на себя и привязать к
        хостингу. Как это сделать по шагам, написано в инструкции{' '}
        <Link href={BLOG_ROUTES.podklyuchenieDomenaISsl} className={linkCls}>
          про домен и SSL
        </Link>
        . SSL-сертификат отвечает за значок замка в браузере. Если сайт делаю
        я, подключение свободного домена и SSL-сертификат идут в подарок.
      </>
    )
  },
  {
    title: 'Хостинг',
    body: (
      <>
        Выбрать, где будут лежать файлы, и следить, чтобы сайт открывался. Что
        делать, если хостинг подвёл, разобрано в статье{' '}
        <Link
          href={BLOG_ROUTES.perenosSaytaNaVydelennyyServer}
          className={linkCls}
        >
          о переносе сайта на выделенный сервер
        </Link>
        .
      </>
    )
  },
  {
    title: 'Заявки',
    body: 'Форма должна присылать обращения на почту, в Telegram или CRM. После запуска отправьте тестовую заявку и убедитесь, что она дошла.'
  },
  {
    title: 'Аналитика',
    body: 'Подключить Яндекс Метрику и цель на отправку формы. Без неё не видно, откуда приходят люди и сколько из них оставляют заявку.'
  },
  {
    title: 'SEO',
    body: (
      <>
        Заголовки и описания страниц, понятные адреса, карта сайта и
        добавление в Яндекс Вебмастер. Как проверить, что поисковик видит
        страницы, описано в статье{' '}
        <Link href={BLOG_ROUTES.indeksaciyaSajta} className={linkCls}>
          про индексацию
        </Link>
        .
      </>
    )
  },
  {
    title: 'Документы',
    body: 'Если форма собирает имя и телефон, на сайте нужны политика обработки персональных данных и согласие на обработку.'
  }
]

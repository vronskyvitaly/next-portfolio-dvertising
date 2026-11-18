import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title: 'Создание сайтов в Москве: цены и сроки 2026 | Виталий Вронский',
  description:
    'Создание сайтов в Москве: сколько стоит разработка лендинга, корпоративного сайта и интернет-магазина, из чего складывается цена и как выбрать подрядчика.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'создание сайтов в Москве',
    'заказать сайт в Москве',
    'разработка сайтов Москва',
    'сколько стоит сайт в Москве',
    'сайт под ключ Москва',
    'веб-разработчик Москва',
    'создание сайта под ключ',
    'разработка сайта на заказ'
  ],
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Создание сайтов в Москве: сколько стоит и как заказать сайт',
    description:
      'Разбираю цены, сроки, этапы работы и типичные ошибки при заказе сайта в Москве. Чек-лист, как выбрать подрядчика, и честные ответы на частые вопросы.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Создание сайтов в Москве: цены и сроки 2026',
    description:
      'Из чего складывается цена сайта, сколько ждать запуска и как не переплатить подрядчику в Москве.'
  },
  robots: { index: true, follow: true }
}

import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title: 'Анализ сайтов конкурентов: подходы и инструменты | Виталий Вронский',
  description:
    'Как анализировать сайты конкурентов: технический SEO-аудит, метрики, сервисы и способы выделить свой сайт среди конкурентов. Пошаговый гайд с чек-листом.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'анализ сайтов конкурентов',
    'как анализировать конкурентов в интернете',
    'как выделить свой сайт среди конкурентов',
    'сервисы для анализа конкурентов',
    'seo анализ сайта конкурента',
    'технический аудит сайта конкурента',
    'core web vitals конкурентов',
    'анализ конкурентов в интернете'
  ],
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Анализ сайтов конкурентов: подходы и инструменты',
    description:
      'Разбираю, как проводить анализ сайтов конкурентов не для галочки: метрики, технический SEO-аудит, сервисы и что делать с результатами.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Анализ сайтов конкурентов: подходы и инструменты',
    description:
      'Метрики, технический аудит, сервисы и практический чек-лист для анализа сайтов конкурентов.'
  },
  robots: { index: true, follow: true }
}

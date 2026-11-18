import type { Metadata } from 'next'
import { TITLE, URL_PATH, coverOg, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title: `${TITLE} | Виталий Вронский`,
  description:
    'Определение основных конкурентов сайта по выдаче Яндекса и Google и анализ поисковых запросов сайтов конкурентов: gap-анализ, sitemap, Вордстат, план страниц.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'определение основных конкурентов сайта',
    'анализ поисковых запросов сайтов конкурентов',
    'как найти конкурентов сайта в поиске',
    'аудит конкурентов сайта',
    'поисковые конкуренты',
    'gap-анализ семантики',
    'ключевые слова конкурентов',
    'анализ сайтов конкурентов'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Как найти настоящих конкурентов в поиске, выгрузить их запросы, сравнить семантику и превратить данные в план новых страниц.',
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
      'Поисковые конкуренты, их запросы, gap-анализ и план страниц - без выдуманных цифр.'
  },
  robots: { index: true, follow: true }
}

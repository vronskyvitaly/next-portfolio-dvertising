import type { Metadata } from 'next'
import { TITLE, URL_PATH, coverOg, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title: `${TITLE} | Виталий Вронский`,
  description:
    'Что такое индексация сайта, как проверить её за пять минут, почему страницы не попадают в поиск и что сделать в Яндекс Вебмастере и Google Search Console.',
  metadataBase: new URL(SITE_URL),
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

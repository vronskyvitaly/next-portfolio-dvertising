import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title:
    'Зачем бизнесу нужен сайт в 2026 году: честный разбор | Виталий Вронский',
  description:
    'Зачем бизнесу нужен сайт, если есть соцсети и маркетплейсы. Экономика лида, SEO как актив, интеграции с CRM и честный ответ, когда сайт реально не нужен.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'зачем нужен сайт для бизнеса',
    'зачем бизнесу сайт',
    'нужен ли сайт компании',
    'сайт или соцсети',
    'сайт для малого бизнеса',
    'разработка сайта под ключ',
    'сайт как актив бизнеса',
    'сколько стоит сайт для компании'
  ],
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Зачем бизнесу нужен сайт, если есть соцсети и маркетплейсы',
    description:
      'Честный разбор: экономика лида, SEO как накопительный актив, интеграции с CRM и когда сайт бизнесу правда не нужен.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Зачем бизнесу нужен сайт в 2026 году',
    description:
      'Экономика лида, SEO как актив и честный ответ на вопрос, когда сайт бизнесу не нужен.'
  },
  robots: { index: true, follow: true }
}

import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title:
    'Что такое API сайта и для чего он нужен: простое объяснение | Виталий Вронский',
  description:
    'Что такое API сайта простыми словами, как он работает и зачем нужен бизнесу. REST, вебхуки, OAuth, лимиты и реальные примеры интеграций в 2026 году.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'что такое API сайта',
    'API для чего нужен',
    'REST API простыми словами',
    'интеграция по API',
    'API ключ сайта',
    'вебхуки API',
    'OAuth 2.0 авторизация',
    'подключение API к сайту'
  ],
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Что такое API сайта и для чего он нужен',
    description:
      'Простое объяснение того, как программы общаются между собой, зачем это бизнесу и как не наступить на грабли при интеграции.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Что такое API сайта и для чего он нужен',
    description:
      'Как программы общаются между собой, зачем это бизнесу и на что смотреть перед интеграцией.'
  },
  robots: { index: true, follow: true }
}

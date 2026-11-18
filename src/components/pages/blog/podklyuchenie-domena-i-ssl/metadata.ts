import type { Metadata } from 'next'
import {
  TITLE,
  DESCRIPTION,
  URL_PATH,
  coverOg,
  FULL_URL,
  PUBLISHED
} from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title: `${TITLE} | Виталий Вронский`,
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
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

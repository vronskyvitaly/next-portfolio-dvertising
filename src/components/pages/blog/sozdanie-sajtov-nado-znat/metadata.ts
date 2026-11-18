import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title:
    'Создать сайт легко — но это не значит, что он будет работать | Виталий Вронский',
  description:
    'No-code и ИИ-конструкторы дали всем возможность «сделать сайт». Но почему 80% таких сайтов не приносят клиентов? Разбираю разницу между «сделано» и «работает».',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'создание сайта',
    'no-code сайт',
    'разработка сайтов профессионал',
    'почему сайт не приносит клиентов',
    'веб-разработчик заказать',
    'сайт на Tilda vs разработчик',
    'SEO оптимизация сайта',
    'скорость загрузки сайта'
  ],
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Создать сайт легко — но это не значит, что он будет работать',
    description:
      'No-code инструменты дали всем возможность «сделать сайт». Разбираю, почему большинство таких сайтов не приносят клиентов.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`,
    authors: ['Виталий Вронский']
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Создать сайт легко — но это не значит, что он будет работать',
    description:
      'Почему 80% сайтов на конструкторах не приносят клиентов — разбираю честно.'
  },
  robots: { index: true, follow: true }
}

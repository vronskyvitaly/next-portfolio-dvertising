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
    'ии для создания сайта бесплатно',
    'нейросеть для создания сайта',
    'сделать сайт с помощью claude',
    'claude artifacts сайт',
    'claude code сайт',
    'сколько стоит claude pro',
    'сайт с помощью ии'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Что можно сделать с Claude бесплатно, когда нужна подписка, где генерировать картинки и сколько на самом деле стоит сайт.',
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
      'Сайт с нейросетью: что бесплатно, что за деньги и что придётся настроить после.'
  },
  robots: { index: true, follow: true }
}

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
    'тренды автоматизации бизнеса',
    'автоматизация бизнеса 2026',
    'автоматизация малого бизнеса',
    'что автоматизировать в бизнесе',
    'чат-бот с ии для бизнеса',
    'интеграция сайта с crm',
    'ии-агенты для бизнеса'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Шесть направлений автоматизации простыми словами: что решает каждое, кому подходит и что малому бизнесу пока не нужно.',
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
      'Что из модной автоматизации окупается у малого бизнеса, а что пока можно пропустить.'
  },
  robots: { index: true, follow: true }
}

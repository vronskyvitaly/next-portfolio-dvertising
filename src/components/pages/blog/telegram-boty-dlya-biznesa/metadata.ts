import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title:
    'Telegram-бот для бизнеса: как он продаёт и обслуживает клиентов 24/7 | Виталий Вронский',
  description:
    'Что умеет Telegram-бот для бизнеса, какие задачи он решает — приём заявок, продажи, поддержка клиентов, уведомления. Примеры, стоимость и с чего начать.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Telegram-бот для бизнеса: продажи и поддержка 24/7',
    description:
      'Что умеет Telegram-бот, какие задачи решает и сколько стоит. Реальные примеры.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Telegram-бот для бизнеса: продажи и поддержка 24/7',
    description: 'Что умеет Telegram-бот, какие задачи решает и сколько стоит.'
  },
  robots: { index: true, follow: true }
}

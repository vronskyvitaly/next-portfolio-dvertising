import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title:
    'Автоматизация бизнеса: как убрать рутину и сосредоточиться на росте | Виталий Вронский',
  description:
    'Что такое автоматизация бизнес-процессов, что можно автоматизировать прямо сейчас — от приёма заявок до аналитики. Реальные инструменты, примеры и пошаговый старт.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title:
      'Автоматизация бизнеса: как убрать рутину и сосредоточиться на росте',
    description:
      'Что можно автоматизировать прямо сейчас — реальные инструменты, примеры и с чего начать.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Автоматизация бизнеса: как убрать рутину',
    description:
      'Что можно автоматизировать прямо сейчас — реальные инструменты и примеры.'
  },
  robots: { index: true, follow: true }
}

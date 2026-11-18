import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title:
    'Как установить Claude Code и начать работать: простая инструкция | Виталий Вронский',
  description:
    'Пошаговая инструкция по установке Claude Code для Mac, Windows и Linux. Простым языком, без технических терминов — от скачивания до первого запуска.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Как установить Claude Code и начать работать: простая инструкция',
    description:
      'Пошаговая инструкция по установке Claude Code для Mac, Windows и Linux. Без технических терминов.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Как установить Claude Code: простая инструкция',
    description:
      'Пошаговая инструкция для Mac, Windows и Linux. Без технических терминов.'
  },
  robots: { index: true, follow: true }
}

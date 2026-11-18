import type { Metadata } from 'next'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title:
    'Автоматизация Bitrix24 с Claude: CRM, задачи и дизайн без программиста | Виталий Вронский',
  description:
    'Как подключить Claude к Bitrix24 через MCP-сервер, автоматизировать сделки и задачи через Claude Code и создавать UI для сотрудников через Claude Design. Практическое руководство.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  openGraph: {
    type: 'article',
    images: ogImages(),
    url: FULL_URL,
    title: 'Автоматизация Bitrix24 с Claude: CRM работает сама',
    description:
      'MCP-сервер, Claude Code и Claude Design — три способа подключить ИИ к Bitrix24. Без программиста, за неделю.',
    locale: 'ru_RU',
    siteName: 'Виталий Вронский',
    publishedTime: `${PUBLISHED}T00:00:00Z`
  },
  twitter: {
    card: 'summary_large_image',
    images: ogImages(),
    title: 'Автоматизация Bitrix24 с Claude: CRM работает сама',
    description:
      'MCP-сервер, Claude Code и Claude Design — три способа подключить ИИ к Bitrix24.'
  },
  robots: { index: true, follow: true }
}

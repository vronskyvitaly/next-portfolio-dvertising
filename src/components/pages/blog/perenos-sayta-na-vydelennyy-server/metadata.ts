import type { Metadata } from 'next'
import { TITLE, URL_PATH, coverOg, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title: `${TITLE} | Виталий Вронский`,
  description:
    'Что делать владельцу бизнеса, если сайт на обычном хостинге: как не потерять данные при сбое или взломе и зачем переносить сайт на выделенный сервер с Coolify.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'как защитить сайт если взломают хостинг',
    'перенос сайта на выделенный сервер',
    'выделенный сервер вместо хостинга',
    'coolify',
    'резервная копия сайта',
    'взлом хостинга что делать',
    'куда перенести сайт с beget'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Если хостинг взломают или он выйдет из строя, сайт не должен пропасть вместе с ним. Простая схема и что сделать сегодня.',
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
      'Что делать владельцу сайта, чтобы сбой или взлом хостинга не стоил бизнеса: копии и домен вне хостинга, выделенный сервер с Coolify.'
  },
  robots: { index: true, follow: true }
}

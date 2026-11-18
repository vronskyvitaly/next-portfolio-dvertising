import type { Metadata } from 'next'
import { SITE_URL } from '@/config/contacts'
import { ogImages } from '@/lib/og'
import { URL_PATH, FULL_URL } from './constants'

export const metadata: Metadata = {
  title: 'Блог о разработке сайтов и автоматизации | Виталий Вронский',
  description:
    'Статьи о создании сайтов, автоматизации бизнес-процессов, интеграциях и внедрении ИИ. Разбираю цены, сроки, технологии и типичные ошибки — на практике, без маркетинговых обещаний.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'блог о разработке сайтов',
    'статьи про создание сайтов',
    'автоматизация бизнеса статьи',
    'разработка сайтов блог'
  ],
  openGraph: {
    type: 'website',
    url: FULL_URL,
    siteName: 'Виталий Вронский',
    title: 'Блог о разработке сайтов и автоматизации',
    description:
      'Статьи о создании сайтов, автоматизации бизнес-процессов, интеграциях и внедрении ИИ.',
    locale: 'ru_RU',
    images: ogImages()
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог о разработке сайтов и автоматизации',
    description:
      'Цены, сроки, технологии и типичные ошибки при заказе сайта — на практике.',
    images: ogImages()
  },
  robots: { index: true, follow: true }
}

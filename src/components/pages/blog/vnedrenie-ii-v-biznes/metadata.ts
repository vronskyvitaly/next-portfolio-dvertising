import type { Metadata } from 'next'
import { TITLE, URL_PATH, coverOg, FULL_URL, PUBLISHED } from './constants'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title: `${TITLE} | Виталий Вронский`,
  description:
    'Внедрение ИИ в бизнес и бизнес-процессы: с чего начать, этапы, ИИ-агенты, сценарии по отделам, сроки, вилки стоимости под ключ, риски и 152-ФЗ.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'внедрение ии в бизнес',
    'внедрение ии в бизнес процессы',
    'внедрение ии в бизнес под ключ',
    'внедрение ии агентов в бизнес',
    'с чего начать внедрение ии в бизнес',
    'стоимость внедрения ии',
    'компании по внедрению ии',
    'специалист по внедрению ии'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Как внедрить ИИ в бизнес без потерянного бюджета: аудит, пилот, ИИ-агенты, сроки, цены, риски и метрики окупаемости.',
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
      'Внедрение ИИ в бизнес: этапы, сценарии по отделам, сроки, вилки цен и риски без выдуманной статистики.'
  },
  robots: { index: true, follow: true }
}

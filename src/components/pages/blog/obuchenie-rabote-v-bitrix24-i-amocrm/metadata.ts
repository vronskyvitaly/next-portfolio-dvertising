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
    'обучение сотрудников работе в битрикс24',
    'обучение работе в amocrm',
    'обучение crm для сотрудников',
    'корпоративное обучение битрикс24',
    'обучение менеджеров работе в crm',
    'обучение amocrm для менеджеров',
    'внедрение crm в отдел продаж'
  ],
  openGraph: {
    type: 'article',
    images: coverOg,
    url: FULL_URL,
    title: TITLE,
    description:
      'Как научить команду вести сделки в Битрикс24 и amoCRM: шаги обучения, программа по ролям и проверка через несколько недель.',
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
      'CRM куплена, а менеджеры в ней не работают. Как проходит обучение команды под вашу настройку.'
  },
  robots: { index: true, follow: true }
}

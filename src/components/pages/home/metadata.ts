import type { Metadata } from 'next'
import { SITE_URL } from '@/config/contacts'
import { ROUTES } from '@/config/routes'

const HOME_TITLE = 'Разработка сайтов и приложений под ключ'
const HOME_DESCRIPTION =
  'Создаю сайты, интернет-магазины, веб- и мобильные приложения под ключ. Telegram-боты, интеграция CRM и автоматизация. Работаю по договору по всей России, консультация бесплатно.'

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: ROUTES.home
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Виталий Вронский',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    locale: 'ru_RU'
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION
  },
  robots: {
    index: true,
    follow: true
  },
  other: {
    'geo.region': 'RU-MOW, RU-SPE',
    'geo.placename': 'Москва, Санкт-Петербург',
    'yandex-verification': '46d64c47c02e1a18',
    'google-site-verification': '3OsRTsw2ZFhcutmozCJRh_fQ8cJjHrOU_39hzQe5Et8'
  }
}

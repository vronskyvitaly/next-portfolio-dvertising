import Benefits from '@/components/Benefits'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import JsonLd from '@/components/JsonLd'
import Process from '@/components/Process'
import Services from '@/components/Services'
import { SITE_URL } from '@/config/contacts'
import { homeFaq } from '@/config/faq'
import { getServices } from '@/config/services'
import {
  faqNode,
  graph,
  organizationNode,
  personNode,
  professionalServiceNode
} from '@/lib/schema'
import type { Metadata } from 'next'

const HOME_TITLE = 'Разработка сайтов и приложений под ключ'
const HOME_DESCRIPTION =
  'Создаю сайты, интернет-магазины, веб- и мобильные приложения под ключ. Telegram-боты, интеграция CRM и автоматизация. Работаю по договору по всей России, консультация бесплатно.'

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/'
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

export default function Home() {
  const jsonLd = graph(
    personNode(),
    organizationNode(),
    professionalServiceNode(getServices()),
    faqNode(homeFaq, `${SITE_URL}/#faq`)
  )

  return (
    <main>
      <JsonLd data={jsonLd} />
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <Faq />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}

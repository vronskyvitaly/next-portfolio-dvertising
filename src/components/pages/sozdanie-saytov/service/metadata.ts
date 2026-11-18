import type { Metadata } from 'next'
import { SITE_URL } from '@/config/contacts'
import { getNiche } from '@/config/niches'
import { getService } from '@/config/services'
import { OG_SERVICES, ogImages } from '@/lib/og'
import { servicePath } from '@/config/routes'

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getService(slug) ?? getNiche(slug)
  if (!page) return {}

  const path = servicePath(slug)

  return {
    title: page.title,
    description: page.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: path },
    keywords: page.keywords,
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${path}`,
      siteName: 'Виталий Вронский',
      title: page.h1,
      description: page.description,
      locale: 'ru_RU',
      images: ogImages(OG_SERVICES, page.h1)
    },
    twitter: {
      card: 'summary_large_image',
      title: page.h1,
      description: page.description,
      images: ogImages(OG_SERVICES, page.h1)
    },
    robots: { index: true, follow: true }
  }
}

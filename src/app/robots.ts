import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/config/routes'
import { SITE_URL } from '@/config/contacts'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: absoluteUrl('/sitemap.xml'),
    host: SITE_URL
  }
}

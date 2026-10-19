import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/config/contacts'
import { getPosts } from '@/config/posts'
import { getNiches } from '@/config/niches'
import { getServices } from '@/config/services'
import { getLegalDocuments } from '@/lib/legal/registry'
import { siteConfig } from '@/config/site.config'

/**
 * Карта сайта строится из реестров, а не руками — иначе новые страницы
 * забываются, как это случилось с /legal.
 *
 * `/brief` в карту не попадает намеренно: страница под noindex.
 *
 * Дату правьте при существенном обновлении коммерческого раздела.
 */
const SECTION_UPDATED = new Date('2026-07-29')
const NICHES_UPDATED = new Date('2026-10-19')

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getServices()
  const niches = getNiches()
  const posts = getPosts()
  const legalDocs = getLegalDocuments()

  return [
    {
      url: SITE_URL,
      lastModified: SECTION_UPDATED,
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: `${SITE_URL}/sozdanie-saytov`,
      lastModified: SECTION_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.9
    },
    ...services.map(service => ({
      url: `${SITE_URL}/sozdanie-saytov/${service.slug}`,
      lastModified: SECTION_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    })),
    ...niches.map(niche => ({
      url: `${SITE_URL}/sozdanie-saytov/${niche.slug}`,
      lastModified: NICHES_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    })),
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(posts[0]?.published ?? SECTION_UPDATED),
      changeFrequency: 'weekly',
      priority: 0.7
    },
    ...posts.map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.published),
      changeFrequency: 'yearly' as const,
      priority: 0.6
    })),
    {
      url: `${SITE_URL}/legal`,
      lastModified: SECTION_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    ...legalDocs.map(doc => ({
      url: `${SITE_URL}/legal/${doc.slug}`,
      lastModified: new Date(
        siteConfig.revisions[doc.slug]?.effectiveDate ?? SECTION_UPDATED
      ),
      changeFrequency: 'yearly' as const,
      priority: 0.2
    }))
  ]
}

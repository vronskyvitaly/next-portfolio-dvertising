import type { Metadata } from 'next'
import { getLegalDocument } from '@/lib/legal/registry'
import { legalPath } from '@/config/routes'

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = getLegalDocument(slug)
  if (!doc) return {}
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: legalPath(slug) },
    robots: { index: true, follow: true }
  }
}

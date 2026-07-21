import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import { getLegalDocument, getLegalDocuments } from '@/lib/legal/registry'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

export function generateStaticParams() {
  return getLegalDocuments(siteConfig).map(doc => ({ slug: doc.slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const doc = getLegalDocument(slug, siteConfig)
  if (!doc) return {}
  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/legal/${slug}` }
  }
}

export default async function LegalDocPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getLegalDocument(slug, siteConfig)
  if (!doc) notFound()

  const revision = siteConfig.revisions[doc.slug]
  if (!revision) notFound()

  return (
    <LegalPageLayout title={doc.title} revision={revision}>
      <doc.Component config={siteConfig} />
    </LegalPageLayout>
  )
}

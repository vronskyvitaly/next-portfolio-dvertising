import { notFound } from 'next/navigation'
import { siteConfig } from '@/config/site.config'
import { getLegalDocument } from '@/lib/legal/registry'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'

export async function LegalDocumentPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const doc = getLegalDocument(slug)
  if (!doc) notFound()

  const revision = siteConfig.revisions[doc.slug]
  if (!revision) notFound()

  return (
    <LegalPageLayout title={doc.title} revision={revision}>
      <doc.Component config={siteConfig} />
    </LegalPageLayout>
  )
}

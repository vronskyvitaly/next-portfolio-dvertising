import { getLegalDocuments } from '@/lib/legal/registry'

export function generateStaticParams() {
  return getLegalDocuments().map(doc => ({ slug: doc.slug }))
}

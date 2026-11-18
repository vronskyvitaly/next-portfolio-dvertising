import { LegalDocumentPage } from '@/components/pages/legal/document'

export { generateMetadata } from '@/components/pages/legal/document/metadata'
export { generateStaticParams } from '@/components/pages/legal/document/params'

export default function Page({ params }: PageProps<'/legal/[slug]'>) {
  return <LegalDocumentPage params={params} />
}

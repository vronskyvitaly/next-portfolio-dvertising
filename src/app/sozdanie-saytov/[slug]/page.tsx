import { ServicePage } from '@/components/pages/sozdanie-saytov/service'

export { generateMetadata } from '@/components/pages/sozdanie-saytov/service/metadata'
export { generateStaticParams } from '@/components/pages/sozdanie-saytov/service/params'

export default function Page({ params }: PageProps<'/sozdanie-saytov/[slug]'>) {
  return <ServicePage params={params} />
}

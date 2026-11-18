import Benefits from '@/components/sections/home/Benefits'
import Blog from '@/components/sections/home/Blog'
import Contact from '@/components/sections/home/Contact'
import Faq from '@/components/sections/home/Faq'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/home/Hero'
import JsonLd from '@/components/seo/JsonLd'
import Process from '@/components/sections/home/Process'
import Services from '@/components/sections/home/Services'
import { jsonLd } from '@/common/data/pages/home'

export function HomePage() {
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

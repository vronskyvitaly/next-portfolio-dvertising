import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqList from '@/components/FaqList'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import ContactCta from '@/components/ContactCta'
import NichePage from '@/components/NichePage'
import { contacts, SITE_URL } from '@/config/contacts'
import { getNiche, getNiches } from '@/config/niches'
import { formatPrice, getService, getServices } from '@/config/services'
import { OG_SERVICES, ogImages } from '@/lib/og'
import {
  breadcrumbNode,
  faqNode,
  graph,
  personNode,
  serviceOfferNode
} from '@/lib/schema'

const BASE_PATH = '/sozdanie-saytov'

/** В сегменте живут два реестра: типы сайтов и отраслевые страницы */
export function generateStaticParams() {
  return [...getServices(), ...getNiches()].map(item => ({ slug: item.slug }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = getService(slug) ?? getNiche(slug)
  if (!page) return {}

  const path = `${BASE_PATH}/${slug}`

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

export default async function ServicePage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const niche = getNiche(slug)
  if (niche) return <NichePage niche={niche} />

  const service = getService(slug)
  if (!service) notFound()

  const path = `${BASE_PATH}/${slug}`
  const fullUrl = `${SITE_URL}${path}`
  const others = getServices().filter(item => item.slug !== slug)

  const crumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Создание сайтов', path: BASE_PATH },
    { name: service.name, path }
  ]

  const jsonLd = graph(
    personNode(),
    serviceOfferNode(service),
    breadcrumbNode(crumbs, `${fullUrl}#breadcrumbs`),
    faqNode(service.faq, `${fullUrl}#faq`)
  )

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className='min-h-screen bg-[#0a0a0a] text-white'>
        {/* Фон */}
        <div
          aria-hidden='true'
          className='fixed inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div
          aria-hidden='true'
          className='fixed top-0 right-0 w-[650px] h-[500px] rounded-full pointer-events-none'
          style={{
            background: `radial-gradient(circle, ${service.accent}14 0%, rgba(0,112,243,0.05) 50%, transparent 70%)`,
            filter: 'blur(80px)'
          }}
        />

        <div className='relative z-10'>
          {/* Хиро */}
          <section className='px-6 pt-12 pb-16 sm:pt-16 sm:pb-20'>
            <div className='max-w-5xl mx-auto'>
              <Breadcrumbs items={crumbs} />

              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
                {service.h1}
              </h1>

              <p className='text-base sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8'>
                {service.lead}
              </p>

              {/* Цена и срок */}
              <div className='grid grid-cols-2 gap-4 max-w-md mb-8'>
                <div
                  className='rounded-2xl px-5 py-4'
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)'
                  }}
                >
                  <div className='text-xs uppercase tracking-widest text-[#555] mb-1'>
                    Цена
                  </div>
                  <div
                    className='text-lg font-bold'
                    style={{ color: service.accent }}
                  >
                    {formatPrice(service.priceFrom)}
                  </div>
                </div>
                <div
                  className='rounded-2xl px-5 py-4'
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)'
                  }}
                >
                  <div className='text-xs uppercase tracking-widest text-[#555] mb-1'>
                    Срок
                  </div>
                  <div className='text-lg font-bold text-white'>
                    {service.duration}
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row gap-3'>
                <a
                  href='#zayavka'
                  className='inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105'
                  style={{
                    background: 'linear-gradient(135deg, #7d2cc8, #0070f3)',
                    boxShadow: '0 0 32px rgba(125,44,200,0.4)'
                  }}
                >
                  Обсудить проект →
                </a>
                <a
                  href={contacts.phoneHref}
                  className='inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105'
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.8)'
                  }}
                >
                  {contacts.phone}
                </a>
              </div>
            </div>
          </section>

          {/* Кому подходит */}
          <section className='py-16 sm:py-20 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Когда это подходящий вариант
              </h2>
              <ul className='grid sm:grid-cols-2 gap-x-8 gap-y-4'>
                {service.suitableFor.map(item => (
                  <li key={item} className='flex gap-3 text-base text-gray-300'>
                    <span
                      aria-hidden='true'
                      className='mt-1 shrink-0 text-sm'
                      style={{ color: service.accent }}
                    >
                      →
                    </span>
                    <span className='leading-relaxed'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Основной текст */}
          <section className='py-16 sm:py-20 px-6'>
            <div className='max-w-5xl mx-auto flex flex-col gap-12 [&>article]:max-w-3xl'>
              {service.sections.map(block => (
                <article key={block.title}>
                  <h2 className='text-2xl sm:text-3xl font-bold mb-5'>
                    {block.title}
                  </h2>
                  {block.paragraphs.map(paragraph => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className='text-base text-gray-400 leading-relaxed mb-4 last:mb-0'
                    >
                      {paragraph}
                    </p>
                  ))}
                </article>
              ))}
            </div>
          </section>

          {/* Что входит / что отдельно */}
          <section className='py-16 sm:py-20 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16'>
              <div>
                <h2 className='text-2xl sm:text-3xl font-bold mb-6'>
                  Что входит в цену
                </h2>
                <ul className='flex flex-col gap-3'>
                  {service.includes.map(item => (
                    <li
                      key={item}
                      className='flex gap-3 text-sm text-gray-300 leading-relaxed'
                    >
                      <span
                        aria-hidden='true'
                        className='mt-0.5 shrink-0'
                        style={{ color: '#34d399' }}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className='text-2xl sm:text-3xl font-bold mb-6'>
                  Считается отдельно
                </h2>
                <p className='text-sm text-gray-500 mb-6 leading-relaxed'>
                  Не потому что «доплата потом», а потому что объём этих задач
                  сильно различается от проекта к проекту. Обсуждаем на брифе и
                  включаем в договор, если нужны.
                </p>
                <ul className='flex flex-col gap-3'>
                  {service.extras.map(item => (
                    <li
                      key={item}
                      className='flex gap-3 text-sm text-gray-400 leading-relaxed'
                    >
                      <span
                        aria-hidden='true'
                        className='mt-0.5 shrink-0 text-gray-600'
                      >
                        +
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className='py-16 sm:py-20 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-10'>
                Частые вопросы
              </h2>
              <FaqList items={service.faq} />
            </div>
          </section>

          {/* Заявка */}
          <section id='zayavka' className='py-16 sm:py-20 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
                Обсудим ваш проект
              </h2>
              <p className='text-gray-400 mb-8 max-w-2xl leading-relaxed'>
                Разбор задачи занимает 20–30 минут. По итогам у вас есть
                понимание объёма, цены и сроков — без обязательств продолжать.
              </p>
              <ContactCta />
            </div>
          </section>

          {/* Другие типы */}
          <section className='py-16 sm:py-20 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-4'>
                Другие типы сайтов
              </h2>
              <p className='text-gray-400 mb-8 max-w-2xl leading-relaxed'>
                Если не уверены, какой вариант подходит под задачу — это
                нормально. Разберём на первом разговоре.
              </p>

              <div className='grid sm:grid-cols-3 gap-4 mb-10'>
                {others.map(item => (
                  <Link
                    key={item.slug}
                    href={`${BASE_PATH}/${item.slug}`}
                    className='group p-5 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
                  >
                    <h3 className='text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                      {item.name}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed mb-3'>
                      {item.purpose}
                    </p>
                    <span
                      className='text-xs font-medium'
                      style={{ color: item.accent }}
                    >
                      {formatPrice(item.priceFrom)}
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                href={BASE_PATH}
                className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors'
              >
                ← Все услуги по созданию сайтов
              </Link>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  )
}

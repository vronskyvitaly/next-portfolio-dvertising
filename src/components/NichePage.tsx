import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqList from '@/components/FaqList'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import ContactCta from '@/components/ContactCta'
import { contacts, SITE_URL } from '@/config/contacts'
import { getNiches, getNicheService, type NicheType } from '@/config/niches'
import { getPosts } from '@/config/posts'
import { formatPrice } from '@/config/services'
import {
  breadcrumbNode,
  faqNode,
  graph,
  nicheServiceNode,
  personNode
} from '@/lib/schema'

const BASE_PATH = '/sozdanie-saytov'

/**
 * Отраслевая страница. Вёрстка повторяет страницу типа сайта
 * (src/app/sozdanie-saytov/[slug]/page.tsx), но вместо «что входит в цену»
 * показывает, что нужно сайту именно этой отрасли.
 */
export default function NichePage({ niche }: { niche: NicheType }) {
  const service = getNicheService(niche)
  const path = `${BASE_PATH}/${niche.slug}`
  const fullUrl = `${SITE_URL}${path}`
  const otherNiches = getNiches().filter(item => item.slug !== niche.slug)
  const relatedPosts = getPosts().filter(post =>
    niche.relatedPosts.includes(post.slug)
  )

  const crumbs = [
    { name: 'Главная', path: '/' },
    { name: 'Создание сайтов', path: BASE_PATH },
    { name: niche.name, path }
  ]

  const jsonLd = graph(
    personNode(),
    nicheServiceNode(niche, service),
    breadcrumbNode(crumbs, `${fullUrl}#breadcrumbs`),
    faqNode(niche.faq, `${fullUrl}#faq`)
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
            background: `radial-gradient(circle, ${niche.accent}14 0%, rgba(0,112,243,0.05) 50%, transparent 70%)`,
            filter: 'blur(80px)'
          }}
        />

        <div className='relative z-10'>
          {/* Хиро */}
          <section className='px-6 pt-12 pb-16 sm:pt-16 sm:pb-20'>
            <div className='max-w-5xl mx-auto'>
              <Breadcrumbs items={crumbs} />

              <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
                {niche.h1}
              </h1>

              <p className='text-base sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8'>
                {niche.lead}
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
                    style={{ color: niche.accent }}
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

          {/* Задачи */}
          <section className='py-16 sm:py-20 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                С какими задачами приходят
              </h2>
              <ul className='grid sm:grid-cols-2 gap-x-8 gap-y-4'>
                {niche.tasks.map(item => (
                  <li key={item} className='flex gap-3 text-base text-gray-300'>
                    <span
                      aria-hidden='true'
                      className='mt-1 shrink-0 text-sm'
                      style={{ color: niche.accent }}
                    >
                      →
                    </span>
                    <span className='leading-relaxed'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Что нужно сайту отрасли */}
          <section className='py-16 sm:py-20 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Что закладываю в структуру
              </h2>
              <div className='grid sm:grid-cols-2 gap-4'>
                {niche.features.map(item => (
                  <div
                    key={item.title}
                    className='p-6 rounded-2xl'
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)'
                    }}
                  >
                    <h3
                      className='text-lg font-semibold mb-2'
                      style={{ color: niche.accent }}
                    >
                      {item.title}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Основной текст */}
          <section className='py-16 sm:py-20 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto flex flex-col gap-12 [&>article]:max-w-3xl'>
              {niche.sections.map(block => (
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

              <article>
                <p className='text-base text-gray-400 leading-relaxed'>
                  По составу работ и цене такой проект ближе всего к формату{' '}
                  <Link
                    href={`${BASE_PATH}/${service.slug}`}
                    className='text-purple-300 hover:text-purple-200 underline underline-offset-2'
                  >
                    {service.name.toLowerCase()}
                  </Link>{' '}
                  — там подробно расписано, что входит в базовую цену и что
                  считается отдельно.
                </p>
              </article>
            </div>
          </section>

          {/* FAQ */}
          <section className='py-16 sm:py-20 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-10'>
                Частые вопросы
              </h2>
              <FaqList items={niche.faq} />
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

          {/* Перелинковка */}
          <section className='py-16 sm:py-20 px-6'>
            <div className='max-w-5xl mx-auto'>
              {relatedPosts.length > 0 && (
                <>
                  <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                    Подробнее в статьях
                  </h2>
                  <div className='grid sm:grid-cols-3 gap-4 mb-16'>
                    {relatedPosts.map(post => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className='group p-5 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
                      >
                        <h3 className='text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug'>
                          {post.title}
                        </h3>
                        <p className='text-sm text-gray-400 leading-relaxed'>
                          {post.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </>
              )}

              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Сайты для других отраслей
              </h2>
              <div className='grid sm:grid-cols-3 gap-4 mb-10'>
                {otherNiches.map(item => (
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
                      {formatPrice(getNicheService(item).priceFrom)}
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

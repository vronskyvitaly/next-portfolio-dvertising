import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/config/contacts'
import { formatPostDate, getPosts } from '@/config/posts'
import { ogImages } from '@/lib/og'
import { breadcrumbNode, graph, itemListNode, personNode } from '@/lib/schema'

const URL_PATH = '/blog'
const FULL_URL = `${SITE_URL}${URL_PATH}`

export const metadata: Metadata = {
  title: 'Блог о разработке сайтов и автоматизации | Виталий Вронский',
  description:
    'Статьи о создании сайтов, автоматизации бизнес-процессов, интеграциях и внедрении ИИ. Разбираю цены, сроки, технологии и типичные ошибки — на практике, без маркетинговых обещаний.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: URL_PATH },
  keywords: [
    'блог о разработке сайтов',
    'статьи про создание сайтов',
    'автоматизация бизнеса статьи',
    'разработка сайтов блог'
  ],
  openGraph: {
    type: 'website',
    url: FULL_URL,
    siteName: 'Виталий Вронский',
    title: 'Блог о разработке сайтов и автоматизации',
    description:
      'Статьи о создании сайтов, автоматизации бизнес-процессов, интеграциях и внедрении ИИ.',
    locale: 'ru_RU',
    images: ogImages()
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Блог о разработке сайтов и автоматизации',
    description:
      'Цены, сроки, технологии и типичные ошибки при заказе сайта — на практике.',
    images: ogImages()
  },
  robots: { index: true, follow: true }
}

const CRUMBS = [
  { name: 'Главная', path: '/' },
  { name: 'Блог', path: URL_PATH }
]

export default function BlogIndexPage() {
  const posts = getPosts()

  const jsonLd = graph(
    personNode(),
    breadcrumbNode(CRUMBS, `${FULL_URL}#breadcrumbs`),
    itemListNode(
      posts.map(post => ({ name: post.title, path: `/blog/${post.slug}` })),
      `${FULL_URL}#posts`
    )
  )

  return (
    <>
      <JsonLd data={jsonLd} />
      <main className='min-h-screen bg-[#0a0a0a] text-white'>
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
          className='fixed top-0 right-0 w-162.5 h-125 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(125,44,200,0.08) 0%, rgba(0,112,243,0.05) 50%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        <div className='relative z-10 max-w-5xl mx-auto px-6 py-12 sm:py-16'>
          <Breadcrumbs items={CRUMBS} />

          <header className='mb-12'>
            <h1 className='text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-5'>
              Блог
            </h1>
            <p className='text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed'>
              Пишу о разработке сайтов, автоматизации и интеграциях: цены,
              сроки, технологии и ошибки, которые вижу в реальных проектах.
              Всего {posts.length} материалов.
            </p>
          </header>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className='group flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
              >
                <span
                  className='self-start text-xs px-3 py-1 rounded-full mb-4'
                  style={{
                    border: `1px solid ${post.tagColor}`,
                    background: post.tagBg,
                    color: post.tagText
                  }}
                >
                  {post.tag}
                </span>

                <h2 className='text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors leading-snug'>
                  {post.title}
                </h2>
                <p className='flex-1 text-sm text-gray-400 leading-relaxed mb-4'>
                  {post.excerpt}
                </p>

                <div className='mt-auto flex flex-col gap-2'>
                  <span className='inline-flex items-center gap-1 text-sm text-purple-400 group-hover:gap-2 transition-all'>
                    Читать
                    <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                      <path
                        d='M3 7h8M8 4l3 3-3 3'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                  <time
                    dateTime={post.published}
                    className='text-xs text-gray-600'
                  >
                    {formatPostDate(post.published)}
                  </time>
                </div>
              </Link>
            ))}
          </div>

          {/* Переход на коммерческий раздел */}
          <div
            className='rounded-2xl p-6 sm:p-8'
            style={{
              background:
                'linear-gradient(145deg, rgba(125,44,200,0.12) 0%, rgba(0,112,243,0.08) 100%)',
              border: '1px solid rgba(125,44,200,0.25)'
            }}
          >
            <h2 className='text-xl sm:text-2xl font-semibold text-white mb-3'>
              Разработка сайтов под ключ
            </h2>
            <p className='text-sm sm:text-base text-gray-400 leading-relaxed mb-6 max-w-2xl'>
              Цены, сроки и состав работ по типам сайтов — на отдельной
              странице. Лендинг от 20 000 ₽, корпоративный сайт от 90 000 ₽,
              интернет-магазин от 150 000 ₽.
            </p>
            <Link
              href='/sozdanie-saytov'
              className='inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90'
              style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
            >
              Смотреть цены и сроки →
            </Link>
          </div>
        </div>

        <Footer />
      </main>
    </>
  )
}

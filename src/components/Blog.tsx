import Link from 'next/link'
import { formatPostDate, getPosts } from '@/config/posts'

/** На главной — только свежие статьи, остальные в /blog */
const HOME_POSTS_LIMIT = 3

export default function Blog() {
  const posts = getPosts().slice(0, HOME_POSTS_LIMIT)

  return (
    <section id='blog' className='py-24 px-6'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Полезный материал
          </h2>
          <p className='text-gray-400 text-lg max-w-xl mx-auto'>
            Пишу про автоматизацию, ботов и разработку — коротко и по делу
          </p>
        </div>

        <div className='grid sm:grid-cols-3 gap-6'>
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className='group flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
            >
              <h3 className='text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors leading-snug'>
                {post.title}
              </h3>
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
                <div className='flex items-center gap-2'>
                  <time
                    dateTime={post.published}
                    className='text-xs text-gray-400'
                  >
                    {formatPostDate(post.published)}
                  </time>
                  <span className='text-xs text-gray-700'>·</span>
                  <span className='text-xs' style={{ color: post.tagText }}>
                    {post.tag}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className='text-center mt-10'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-105'
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.75)'
            }}
          >
            Все статьи в блоге →
          </Link>
        </div>
      </div>
    </section>
  )
}

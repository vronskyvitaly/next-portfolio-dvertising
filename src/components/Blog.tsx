import Link from 'next/link'

const posts = [
  {
    href: '/blog/sozdanie-sajtov-nado-znat',
    tag: 'Разработка',
    tagColor: 'rgba(0,112,243,0.35)',
    tagBg: 'rgba(0,112,243,0.1)',
    tagText: '#60a5fa',
    date: '8 июня 2026',
    title: 'Создать сайт сейчас легко. Но это ещё не сайт.',
    excerpt:
      'No-code и ИИ-конструкторы дали всем возможность «сделать сайт». Разбираю, почему большинство таких сайтов не приносят клиентов — и что реально нужно знать.'
  },
  {
    href: '/blog/avtomatizaciya-biznesa',
    tag: 'Автоматизация',
    tagColor: 'rgba(125,44,200,0.35)',
    tagBg: 'rgba(125,44,200,0.1)',
    tagText: '#c084fc',
    date: '8 июня 2026',
    title:
      'Автоматизация бизнеса: как убрать рутину и сосредоточиться на росте',
    excerpt:
      'Разбираю, что реально можно автоматизировать прямо сейчас — от приёма заявок до аналитики. Инструменты, примеры и пошаговый старт.'
  },
  {
    href: '/blog/kak-ustanovit-claude-code',
    tag: 'Инструменты',
    tagColor: 'rgba(125,44,200,0.35)',
    tagBg: 'rgba(125,44,200,0.1)',
    tagText: '#c084fc',
    date: '8 июня 2026',
    title: 'Как установить Claude Code и начать работать: простая инструкция',
    excerpt:
      'Пошаговая инструкция для Mac, Windows и Linux. Простым языком, без технических терминов — от скачивания до первого запроса.'
  }
]

export default function Blog() {
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
              key={post.href}
              href={post.href}
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
                  <span className='text-xs text-gray-600'>{post.date}</span>
                  <span className='text-xs text-gray-700'>·</span>
                  <span className='text-xs' style={{ color: post.tagText }}>
                    {post.tag}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

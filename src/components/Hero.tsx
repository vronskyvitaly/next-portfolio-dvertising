import Link from 'next/link'

const services: { icon: string; label: string; href?: string }[] = [
  { icon: '🌐', label: 'Сайты', href: '/sozdanie-saytov' },
  { icon: '🛒', label: 'Интернет-магазины', href: '/sozdanie-saytov/internet-magazin' },
  { icon: '⚙️', label: 'Веб-приложения', href: '/sozdanie-saytov/veb-prilozhenie' },
  { icon: '📱', label: 'Мобильные приложения' },
  { icon: '💬', label: 'Telegram-боты' },
  { icon: '🤖', label: 'AI-ассистенты' },
  { icon: '🔗', label: 'Интеграция CRM' },
  { icon: '🎓', label: 'Обучение Битрикс24 и amoCRM', href: '/blog/obuchenie-rabote-v-bitrix24-i-amocrm' },
  { icon: '⚡', label: 'Автоматизация бизнеса' }
]

const stats = [
  { value: '5+', label: 'лет опыта', accent: false },
  { value: '✓', label: 'работаю по договору', accent: true },
  { value: '30+', label: 'проектов', accent: false }
]

export default function Hero() {
  return (
    <section className='relative sm:min-h-svh flex flex-col items-center justify-center overflow-hidden px-5 sm:px-6 pt-12 pb-10 sm:py-24'>
      {/* Точечная сетка */}
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none'
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 30%, #0a0a0a 80%)'
        }}
      />

      {/* Сферы */}
      <div
        aria-hidden='true'
        className='absolute top-[-15%] left-[-10%] w-175 h-175 rounded-full pointer-events-none animate-pulse-slow'
        style={{
          background: 'radial-gradient(circle, #7d2cc8 0%, transparent 65%)',
          filter: 'blur(100px)'
        }}
      />
      <div
        aria-hidden='true'
        className='absolute bottom-[-15%] right-[-10%] w-150 h-150 rounded-full pointer-events-none animate-pulse-slow-2'
        style={{
          background: 'radial-gradient(circle, #0070f3 0%, transparent 65%)',
          filter: 'blur(100px)'
        }}
      />

      {/* Контент */}
      <div className='relative z-10 w-full max-w-5xl mx-auto text-center'>
        {/* Имя */}
        <p className='text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-500 mb-3 sm:mb-5 font-mono'>
          Виталий Вронский — разработчик
        </p>

        {/* Главный заголовок */}
        <h1 className='text-[1.75rem] sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-[1.1] tracking-tight mb-3 sm:mb-4'>
          <span className='block text-white'>Разработка сайтов</span>
          {' '}
          <span
            className='block bg-clip-text text-transparent animate-shimmer'
            style={{
              backgroundImage:
                'linear-gradient(90deg, #7d2cc8, #0070f3, #00d4ff, #0070f3, #7d2cc8)',
              backgroundSize: '200% auto'
            }}
          >
            и приложений под{' '}ключ
          </span>
        </h1>

        {/* Подзаголовок */}
        <p className='text-sm sm:text-lg text-gray-400 mb-5 sm:mb-8 max-w-2xl mx-auto leading-snug sm:leading-relaxed'>
            Сайты, веб- и мобильные приложения. Беру задачу целиком: структура,
            дизайн, код, запуск и поддержка. Вам не нужно собирать команду из
            дизайнера, верстальщика и программиста.
        </p>

        {/* Услуги: всё, чем занимаюсь. Где есть страница услуги, плашка ведёт на неё */}
        <ul className='flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-12 max-w-3xl mx-auto'>
          {services.map(item => {
            const content = (
              <>
                <span aria-hidden='true' className='hidden sm:inline sm:mr-1.5'>
                  {item.icon}
                </span>
                {item.label}
              </>
            )
            const cls =
              'inline-flex items-center px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] leading-4 sm:leading-normal sm:text-sm text-gray-300 border border-white/10 bg-white/4'
            return (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`${cls} transition-colors hover:text-white hover:border-white/25`}
                  >
                    {content}
                  </Link>
                ) : (
                  <span className={cls}>{content}</span>
                )}
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <div className='flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-7 sm:mb-14'>
          <a
            href='#contact'
            className='inline-flex items-center justify-center px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-white text-sm sm:text-base transition-all hover:scale-105'
            style={{
              background: 'linear-gradient(135deg, #7d2cc8, #0070f3)',
              boxShadow: '0 0 32px rgba(125,44,200,0.4)'
            }}
          >
            Обсудить проект →
          </a>
          <a
            href='https://vronskyvitaly.ru'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm transition-all hover:scale-105'
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.7)'
            }}
          >
            Моё портфолио
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
              <path d='M2 12L12 2M12 2H5M12 2v7' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </a>
        </div>

        {/* Статистика — трастовые сигналы видны и на мобильных */}
        <div className='flex flex-wrap items-center justify-center gap-3 sm:gap-6'>
          {stats.map((stat, i) => (
            <div key={stat.label} className='flex items-center gap-3 sm:gap-6'>
              {stat.accent ? (
                <div
                  className='relative px-3 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl text-center'
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(125,44,200,0.15), rgba(0,112,243,0.15))',
                    border: '1px solid rgba(125,44,200,0.4)',
                    boxShadow: '0 0 24px rgba(125,44,200,0.2)'
                  }}
                >
                  <div
                    className='absolute -top-px left-3 right-3 h-px'
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, #7d2cc8, #0070f3, transparent)'
                    }}
                  />
                  <div
                    className='text-lg sm:text-2xl font-bold bg-clip-text text-transparent'
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, #c084fc, #60a5fa)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className='text-[10px] sm:text-xs text-gray-400 mt-0.5 whitespace-nowrap'>
                    {stat.label}
                  </div>
                </div>
              ) : (
                <div className='text-center'>
                  <div
                    className='text-lg sm:text-2xl font-bold bg-clip-text text-transparent'
                    style={{
                      backgroundImage:
                        'linear-gradient(135deg, #c084fc, #60a5fa)'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className='text-[10px] sm:text-xs text-gray-500 mt-0.5'>
                    {stat.label}
                  </div>
                </div>
              )}
              {i < stats.length - 1 && (
                <div className='w-px h-6 sm:h-8 bg-white/10' />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Стрелка */}
      <div
        aria-hidden='true'
        className='absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1 animate-float pointer-events-none'
      >
        <span className='text-[10px] text-gray-600 tracking-widest uppercase'>
          scroll
        </span>
        <svg
          width='14'
          height='20'
          viewBox='0 0 14 20'
          fill='none'
          className='text-gray-600'
        >
          <path
            d='M7 0v14M1 9l6 6 6-6'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </section>
  )
}

import { contacts } from '@/config/contacts'

export default function Contact() {
  return (
    <section id='contact' className='py-12 sm:py-24 px-6'>
      <div className='max-w-4xl mx-auto'>
        {/* Заголовок секции */}
        <div className='text-center mb-8 sm:mb-12'>
          <p className='text-xs uppercase tracking-widest text-[#8a8a8a] mb-4'>Контакт</p>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Готовы обсудить задачу?
          </h2>
          <p className='text-[#8a8a8a] text-base max-w-md mx-auto leading-relaxed'>
            Выберите удобный способ — отвечу лично в течение дня
          </p>
        </div>

        {/* Два варианта */}
        <div className='grid sm:grid-cols-2 gap-4 mb-8'>
          {/* Карточка 1 — Telegram */}
          <a
            href='https://t.me/vitalyvronsky'
            target='_blank'
            rel='noopener noreferrer'
            className='group flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 p-5 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1'
            style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 sm:mb-5'
              style={{
                background: 'rgba(0,112,243,0.12)',
                border: '1px solid rgba(0,112,243,0.2)'
              }}
            >
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
                <path d='M21 3L3 10.5l7 1.5 1.5 7L21 3z' stroke='#60a5fa' strokeWidth='1.5' strokeLinejoin='round' />
                <path d='M10 12l4-4' stroke='#60a5fa' strokeWidth='1.5' strokeLinecap='round' />
              </svg>
            </div>
            <div className='flex-1 min-w-0'>
              <div className='text-xs uppercase tracking-widest text-[#8a8a8a] mb-1'>Быстро</div>
              <h3 className='text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2'>Написать в Telegram</h3>
              <p className='text-[#8a8a8a] text-sm leading-relaxed hidden sm:block'>
                Просто напишите что хотите сделать — обсудим детали в переписке и придём к решению
              </p>
              <p className='text-[#8a8a8a] text-xs sm:hidden'>@vitalyvronsky</p>
            </div>
            <div className='hidden sm:block mt-5 w-full py-3 rounded-xl text-center text-sm font-semibold text-white transition-all group-hover:opacity-90'
              style={{ background: 'linear-gradient(135deg, #0070f3, #1d9bf0)' }}>
              Написать в Telegram →
            </div>
            <div className='sm:hidden px-3 py-2 rounded-xl text-xs font-semibold text-white shrink-0'
              style={{ background: 'linear-gradient(135deg, #0070f3, #1d9bf0)' }}>
              →
            </div>
          </a>

          {/* Карточка 2 — Анкета */}
          <a
            href='/brief'
            className='group flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 p-5 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden'
            style={{
              background: 'linear-gradient(145deg, rgba(125,44,200,0.12) 0%, rgba(0,112,243,0.08) 100%)',
              border: '1px solid rgba(125,44,200,0.25)'
            }}
          >
            {/* Бейдж */}
            <div
              className='absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium'
              style={{
                background: 'rgba(125,44,200,0.2)',
                border: '1px solid rgba(125,44,200,0.3)',
                color: '#c084fc'
              }}
            >
              ~3 мин
            </div>

            <div
              className='w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 sm:mb-5'
              style={{
                background: 'rgba(125,44,200,0.15)',
                border: '1px solid rgba(125,44,200,0.3)'
              }}
            >
              <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
                <path d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2' stroke='#c084fc' strokeWidth='1.5' strokeLinecap='round' />
                <path d='M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z' stroke='#c084fc' strokeWidth='1.5' />
                <path d='M9 12h6M9 16h4' stroke='#c084fc' strokeWidth='1.5' strokeLinecap='round' />
              </svg>
            </div>
            <div className='flex-1 min-w-0'>
              <div className='text-xs uppercase tracking-widest mb-1' style={{ color: '#a855f7' }}>
                Подробно
              </div>
              <h3 className='text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2'>Описать проект онлайн</h3>
              <p className='text-[#888] text-sm leading-relaxed hidden sm:block'>
                Ответьте на несколько вопросов о задаче — я получу всё нужное для старта и сразу предложу решение
              </p>
              <p className='text-[#8a8a8a] text-xs sm:hidden'>Заполнить бриф онлайн</p>
            </div>
            <div className='hidden sm:block mt-5 w-full py-3 rounded-xl text-center text-sm font-semibold text-white transition-all group-hover:opacity-90'
              style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
              Описать проект →
            </div>
            <div className='sm:hidden px-3 py-2 rounded-xl text-xs font-semibold text-white shrink-0'
              style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}>
              →
            </div>
          </a>
        </div>

        {/* Прямые контакты — как на коммерческих страницах */}
        <div className='grid sm:grid-cols-2 gap-4'>
          <a
            href={contacts.phoneHref}
            className='flex items-center gap-3 p-5 rounded-2xl border border-white/8 bg-white/3 transition-colors hover:border-white/15 hover:bg-white/5'
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
              <path
                d='M5 4h3l2 5-2 1a11 11 0 0 0 6 6l1-2 5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z'
                stroke='#c084fc'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className='text-base font-semibold text-white'>
              {contacts.phone}
            </span>
          </a>
          <a
            href={contacts.emailHref}
            className='flex items-center gap-3 p-5 rounded-2xl border border-white/8 bg-white/3 transition-colors hover:border-white/15 hover:bg-white/5'
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none'>
              <rect
                x='3'
                y='5'
                width='18'
                height='14'
                rx='2'
                stroke='#60a5fa'
                strokeWidth='1.5'
              />
              <path
                d='M4 7l8 6 8-6'
                stroke='#60a5fa'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            <span className='text-base text-white break-all'>
              {contacts.email}
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

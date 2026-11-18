import Link from 'next/link'
import { contacts } from '@/config/contacts'
import { ROUTES } from '@/config/routes'

/**
 * Блок «как со мной связаться» для коммерческих страниц.
 *
 * Повторяет логику секции Contact на главной: два сценария (быстро — Telegram,
 * подробно — бриф) плюс прямые контакты. Отдельной формы заявки на страницах
 * нет намеренно — все обращения идут через бриф и мессенджеры.
 */
export default function ContactCta() {
  return (
    <div>
      <div className='grid sm:grid-cols-2 gap-4 mb-4'>
        {/* Быстрый сценарий — переписка */}
        <a
          href={contacts.telegram}
          target='_blank'
          rel='noopener noreferrer'
          className='group flex flex-col p-6 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1'
          style={{
            background: '#111',
            border: '1px solid rgba(255,255,255,0.07)'
          }}
        >
          <div
            className='w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-5'
            style={{
              background: 'rgba(0,112,243,0.12)',
              border: '1px solid rgba(0,112,243,0.2)'
            }}
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
              <path
                d='M21 3L3 10.5l7 1.5 1.5 7L21 3z'
                stroke='#60a5fa'
                strokeWidth='1.5'
                strokeLinejoin='round'
              />
              <path
                d='M10 12l4-4'
                stroke='#60a5fa'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div className='text-xs uppercase tracking-widest text-[#555] mb-1'>
            Быстро
          </div>
          <h3 className='text-lg font-semibold text-white mb-2'>
            Написать в Telegram
          </h3>
          <p className='text-[#666] text-sm leading-relaxed'>
            Опишите задачу в двух словах — разберём детали в переписке и
            договоримся о звонке, если он нужен.
          </p>
          <div
            className='mt-5 w-full py-3 rounded-xl text-center text-sm font-semibold text-white transition-all group-hover:opacity-90'
            style={{ background: 'linear-gradient(135deg, #0070f3, #1d9bf0)' }}
          >
            Написать в Telegram →
          </div>
        </a>

        {/* Подробный сценарий — бриф */}
        <Link
          href={ROUTES.brief}
          className='group relative flex flex-col p-6 sm:p-7 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1'
          style={{
            background:
              'linear-gradient(145deg, rgba(125,44,200,0.12) 0%, rgba(0,112,243,0.08) 100%)',
            border: '1px solid rgba(125,44,200,0.25)'
          }}
        >
          <div
            className='absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium'
            style={{
              background: 'rgba(125,44,200,0.2)',
              border: '1px solid rgba(125,44,200,0.3)',
              color: '#c084fc'
            }}
          >
            ~3 мин
          </div>

          <div
            className='w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-5'
            style={{
              background: 'rgba(125,44,200,0.15)',
              border: '1px solid rgba(125,44,200,0.3)'
            }}
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='none'>
              <path
                d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2'
                stroke='#c084fc'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
              <path
                d='M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z'
                stroke='#c084fc'
                strokeWidth='1.5'
              />
              <path
                d='M9 12h6M9 16h4'
                stroke='#c084fc'
                strokeWidth='1.5'
                strokeLinecap='round'
              />
            </svg>
          </div>
          <div
            className='text-xs uppercase tracking-widest mb-1'
            style={{ color: '#a855f7' }}
          >
            Подробно
          </div>
          <h3 className='text-lg font-semibold text-white mb-2'>
            Описать проект онлайн
          </h3>
          <p className='text-[#888] text-sm leading-relaxed'>
            Ответьте на несколько вопросов о задаче — я получу всё нужное для
            оценки и вернусь с решением, сроком и ценой.
          </p>
          <div
            className='mt-5 w-full py-3 rounded-xl text-center text-sm font-semibold text-white transition-all group-hover:opacity-90'
            style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
          >
            Описать проект →
          </div>
        </Link>
      </div>

      {/* Прямые контакты */}
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
  )
}

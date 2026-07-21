import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t border-white/8 py-8 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500'>
        <div>© {currentYear} Виталий Вронский. Все права защищены.</div>
        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6'>
          <a
            href='https://t.me/vitalyvronsky'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-colors'
          >
            Telegram
          </a>
          <a
            href='mailto:vronskyvitaly@mail.ru'
            className='hover:text-white transition-colors'
          >
            Email
          </a>
          <a
            href='https://vronskyvitaly.ru'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white transition-colors'
          >
            Портфолио
          </a>
          <Link href='/legal' className='hover:text-white transition-colors'>
            Правовая информация
          </Link>
        </div>
      </div>
    </footer>
  )
}

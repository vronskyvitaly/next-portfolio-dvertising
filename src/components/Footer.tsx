import Link from 'next/link'
import { contacts } from '@/config/contacts'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-t border-white/8 py-8 px-6'>
      <div className='max-w-6xl mx-auto flex flex-col gap-6'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <a
            href={contacts.phoneHref}
            className='text-lg font-semibold text-white hover:text-purple-300 transition-colors'
          >
            {contacts.phone}
          </a>
          <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400'>
            <Link
              href='/sozdanie-saytov'
              className='hover:text-white transition-colors'
            >
              Создание сайтов
            </Link>
            <Link href='/blog' className='hover:text-white transition-colors'>
              Блог
            </Link>
            <a
              href={contacts.telegram}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
            >
              Telegram
            </a>
            <a
              href={contacts.emailHref}
              className='hover:text-white transition-colors'
            >
              Email
            </a>
            <a
              href={contacts.portfolio}
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

        <div className='text-center sm:text-left text-sm text-gray-400'>
          © {currentYear} Виталий Вронский. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

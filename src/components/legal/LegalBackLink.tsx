import Link from 'next/link'
import { ROUTES } from '@/config/routes'

export function LegalBackLink({
  href = ROUTES.home,
  label = 'На главную'
}: {
  href?: string
  label?: string
}) {
  return (
    <Link
      href={href}
      className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-12'
    >
      <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
        <path
          d='M10 12L6 8l4-4'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      {label}
    </Link>
  )
}

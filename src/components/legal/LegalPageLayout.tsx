import Link from 'next/link'
import type { ReactNode } from 'react'
import { formatRussianDate } from '@/lib/legal/format'
import type { DocumentRevision } from '@/lib/legal/types'

export function LegalPageLayout({
  title,
  revision,
  children
}: {
  title: string
  revision: DocumentRevision
  children: ReactNode
}) {
  return (
    <main className='min-h-screen bg-[#0a0a0a] text-white'>
      <div className='max-w-3xl mx-auto px-6 py-16 sm:py-24'>
        <nav aria-label='Хлебные крошки' className='mb-10'>
          <Link
            href='/legal'
            className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors'
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
            Юридические документы
          </Link>
        </nav>

        <header className='mb-10'>
          <h1 className='text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight'>{title}</h1>
          <div className='flex flex-wrap gap-4 text-xs text-gray-500'>
            <span>Редакция: {revision.version}</span>
            <span>
              Действует с:{' '}
              <time dateTime={revision.effectiveDate}>
                {formatRussianDate(revision.effectiveDate)}
              </time>
            </span>
          </div>
        </header>

        <article className='prose-legal'>{children}</article>

        <div className='mt-12 pt-8 border-t border-white/8'>
          <Link
            href='/legal'
            className='inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors'
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
            Все документы
          </Link>
        </div>
      </div>
    </main>
  )
}

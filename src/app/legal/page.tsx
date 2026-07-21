import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import { formatRussianDate } from '@/lib/legal/format'
import { getLegalDocuments } from '@/lib/legal/registry'

export const metadata: Metadata = {
  title: 'Юридические документы — Виталий Вронский',
  description:
    'Политика конфиденциальности, согласие на обработку персональных данных, политика cookie и пользовательское соглашение.',
  alternates: { canonical: '/legal' }
}

export default function LegalIndexPage() {
  const documents = getLegalDocuments(siteConfig)

  return (
    <main className='min-h-screen bg-[#0a0a0a] text-white'>
      <div className='max-w-3xl mx-auto px-6 py-16 sm:py-24'>
        <Link
          href='/'
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
          На главную
        </Link>

        <header className='mb-12'>
          <p className='text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-mono'>
            Правовая информация
          </p>
          <h1 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Юридические документы
          </h1>
          <p className='text-gray-400'>
            Документы {siteConfig.site.name}, регулирующие обработку персональных данных
            и условия использования сайта.
          </p>
        </header>

        <ul className='space-y-4'>
          {documents.map(doc => {
            const revision = siteConfig.revisions[doc.slug]
            return (
              <li key={doc.slug}>
                <Link
                  href={`/legal/${doc.slug}`}
                  className='group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl transition-all hover:border-purple-500/30 hover:bg-white/5'
                  style={{
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(255,255,255,0.025)'
                  }}
                >
                  <div className='flex-1'>
                    <div className='flex items-start gap-3 mb-1'>
                      <h2 className='text-sm font-semibold text-white group-hover:text-purple-300 transition-colors leading-snug'>
                        {doc.title}
                      </h2>
                      <span
                        className='shrink-0 text-xs px-2 py-0.5 rounded-full mt-0.5'
                        style={{
                          background: 'rgba(125,44,200,0.15)',
                          border: '1px solid rgba(125,44,200,0.3)',
                          color: '#c084fc'
                        }}
                      >
                        {doc.basis}
                      </span>
                    </div>
                    <p className='text-xs text-gray-500 leading-relaxed'>{doc.description}</p>
                    {revision && (
                      <p className='text-xs text-gray-600 mt-2'>
                        Редакция {revision.version} от{' '}
                        <time dateTime={revision.effectiveDate}>
                          {formatRussianDate(revision.effectiveDate)}
                        </time>
                      </p>
                    )}
                  </div>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    className='shrink-0 text-gray-600 group-hover:text-purple-400 transition-colors'
                  >
                    <path
                      d='M6 4l4 4-4 4'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

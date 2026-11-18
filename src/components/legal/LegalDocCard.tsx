import Link from 'next/link'
import type { DocumentRevision } from '@/lib/legal/types'
import type { LegalDocument } from '@/lib/legal/registry'
import { formatRussianDate } from '@/lib/legal/format'
import { legalPath } from '@/config/routes'

export function LegalDocCard({
  doc,
  revision
}: {
  doc: LegalDocument
  revision?: DocumentRevision
}) {
  return (
    <li>
      <Link
        href={legalPath(doc.slug)}
        className='group flex flex-row items-center gap-3 p-5 rounded-2xl transition-all hover:border-purple-500/30 hover:bg-white/5'
        style={{
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.025)'
        }}
      >
        <div className='flex-1 min-w-0'>
          <div className='flex flex-wrap items-start gap-2 mb-1'>
            <h2 className='text-sm font-semibold text-white group-hover:text-purple-300 transition-colors leading-snug'>
              {doc.title}
            </h2>
            <span
              className='shrink-0 text-xs px-2 py-0.5 rounded-full'
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
}

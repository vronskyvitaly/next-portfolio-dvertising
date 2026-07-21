import type { ReactNode } from 'react'

export function Doc({ children }: { children: ReactNode }) {
  return <div className='legal-doc space-y-8'>{children}</div>
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className='legal-section'>
      <h2 className='mb-4 text-xl font-semibold tracking-tight text-white'>{title}</h2>
      <div className='space-y-3'>{children}</div>
    </section>
  )
}

export function Clause({ children }: { children: ReactNode }) {
  return <p className='legal-clause leading-relaxed text-gray-300'>{children}</p>
}

export function Text({ children }: { children: ReactNode }) {
  return <p className='leading-relaxed text-gray-300'>{children}</p>
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className='ml-6 list-disc space-y-1.5 text-gray-300'>
      {items.map((item, index) => (
        <li key={index} className='leading-relaxed pl-1'>
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Definition({ term, children }: { term: string; children: ReactNode }) {
  return (
    <p className='leading-relaxed text-gray-300'>
      <strong className='font-semibold text-white'>{term}</strong>
      {' — '}
      {children}
    </p>
  )
}

export function Table({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) {
  return (
    <div className='-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0'>
      <table className='w-full min-w-[36rem] border-collapse text-sm'>
        <thead>
          <tr className='border-b border-white/10'>
            {headers.map(header => (
              <th
                key={header}
                scope='col'
                className='py-2.5 pr-4 text-left font-semibold text-white'
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b border-white/5 last:border-0'>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className='py-2.5 pr-4 align-top text-gray-400'>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className='rounded-lg border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-relaxed text-amber-100'>
      {children}
    </div>
  )
}

export function Mail({ address }: { address: string }) {
  return (
    <a
      href={`mailto:${address}`}
      className='font-medium text-white underline underline-offset-4 hover:no-underline'
    >
      {address}
    </a>
  )
}

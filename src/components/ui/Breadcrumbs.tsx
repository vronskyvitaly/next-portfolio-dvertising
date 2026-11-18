import Link from 'next/link'

export interface Crumb {
  name: string
  path: string
}

/**
 * Визуальные хлебные крошки. Соответствующий BreadcrumbList
 * собирается через breadcrumbNode() из src/lib/schema.ts.
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label='Хлебные крошки' className='mb-8'>
      <ol className='flex flex-wrap items-center gap-2 text-sm text-gray-500'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={item.path} className='flex items-center gap-2'>
              {isLast ? (
                <span aria-current='page' className='text-gray-400'>
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className='hover:text-gray-300 transition-colors'
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <span aria-hidden='true' className='text-gray-700'>
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

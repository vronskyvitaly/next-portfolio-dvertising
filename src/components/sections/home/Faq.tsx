import Link from 'next/link'
import FaqList from '@/components/ui/FaqList'
import { homeFaq } from '@/config/faq'
import { ROUTES } from '@/config/routes'

export default function Faq() {
  return (
    <section id='faq' className='py-14 sm:py-24 px-6 bg-[#0d0d0d]'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Частые вопросы
          </h2>
          <p className='text-gray-400 text-lg'>
            Отвечаю на то, что спрашивают чаще всего
          </p>
        </div>

        <FaqList items={homeFaq} />

        <div className='text-center mt-10'>
          <Link
            href={ROUTES.services}
            className='inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-105'
            style={{
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.75)'
            }}
          >
            Все цены и сроки по типам сайтов →
          </Link>
        </div>
      </div>
    </section>
  )
}

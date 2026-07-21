'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { readConsent, writeConsent } from '@/lib/legal/consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (readConsent() === null) setVisible(true)
  }, [])

  const handleConsent = (state: 'granted' | 'denied') => {
    writeConsent(state)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role='dialog'
      aria-modal='false'
      aria-labelledby='cookie-banner-title'
      className='fixed bottom-0 left-0 right-0 z-50 p-4'
    >
      <div
        className='max-w-2xl mx-auto rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4'
        style={{
          background: 'rgba(15,15,15,0.95)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 -4px 32px rgba(0,0,0,0.5)'
        }}
      >
        <div className='flex-1'>
          <p id='cookie-banner-title' className='text-sm font-semibold text-white mb-1'>
            Мы используем cookie
          </p>
          <p className='text-xs text-gray-400 leading-relaxed'>
            Технические cookie необходимы для работы сайта. Аналитические устанавливаются только
            с вашего согласия. Подробнее —{' '}
            <Link
              href='/legal/cookie-policy'
              className='text-purple-400 hover:text-purple-300 underline underline-offset-2'
            >
              Политика использования cookie
            </Link>
            .
          </p>
        </div>
        <div className='flex items-center gap-2 shrink-0'>
          <button
            type='button'
            onClick={() => handleConsent('denied')}
            className='px-4 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white transition-colors'
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Отклонить
          </button>
          <button
            type='button'
            onClick={() => handleConsent('granted')}
            className='px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105'
            style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
          >
            Принять
          </button>
        </div>
      </div>
    </div>
  )
}

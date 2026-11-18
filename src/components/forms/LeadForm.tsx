'use client'

import Link from 'next/link'
import { useState } from 'react'
import { contacts } from '@/config/contacts'
import { LEGAL_ROUTES } from '@/config/routes'

type Status = 'idle' | 'sending' | 'done' | 'error'

const inputClass =
  'w-full rounded-xl bg-white/4 border border-white/10 px-4 py-3 text-white placeholder:text-[#555] outline-none transition-colors focus:border-purple-500/50 focus:bg-white/6'

export default function LeadForm({
  title = 'Оставьте заявку — отвечу в течение дня',
  note = 'Разбор задачи и оценка бесплатны и ни к чему не обязывают.'
}: {
  title?: string
  note?: string
}) {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          contact: data.get('contact'),
          task: data.get('task'),
          source: window.location.pathname
        })
      })

      if (!res.ok) {
        const payload = await res.json().catch(() => null)
        throw new Error(payload?.error ?? 'Не удалось отправить заявку')
      }

      form.reset()
      setStatus('done')
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Не удалось отправить заявку'
      )
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div
        className='rounded-2xl p-8 text-center'
        style={{
          background:
            'linear-gradient(145deg, rgba(125,44,200,0.12) 0%, rgba(0,112,243,0.08) 100%)',
          border: '1px solid rgba(125,44,200,0.25)'
        }}
      >
        <div className='text-2xl mb-3' aria-hidden='true'>
          ✓
        </div>
        <h3 className='text-xl font-semibold text-white mb-2'>Заявка отправлена</h3>
        <p className='text-sm text-gray-400 mb-6'>
          Свяжусь с вами в течение рабочего дня. Если вопрос срочный — напишите
          в Telegram, там отвечаю быстрее.
        </p>
        <a
          href={contacts.telegram}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90'
          style={{ background: 'linear-gradient(135deg, #0070f3, #1d9bf0)' }}
        >
          Написать в Telegram →
        </a>
      </div>
    )
  }

  return (
    <div
      className='rounded-2xl p-6 sm:p-8'
      style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <h3 className='text-xl sm:text-2xl font-semibold text-white mb-2'>{title}</h3>
      <p className='text-sm text-gray-500 mb-6'>{note}</p>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className='grid sm:grid-cols-2 gap-4'>
          <label className='flex flex-col gap-2'>
            <span className='text-xs uppercase tracking-widest text-[#666]'>
              Имя
            </span>
            <input
              name='name'
              type='text'
              required
              maxLength={120}
              autoComplete='name'
              placeholder='Как к вам обращаться'
              className={inputClass}
            />
          </label>

          <label className='flex flex-col gap-2'>
            <span className='text-xs uppercase tracking-widest text-[#666]'>
              Телефон или Telegram
            </span>
            <input
              name='contact'
              type='text'
              required
              maxLength={200}
              autoComplete='tel'
              placeholder='+7 … или @username'
              className={inputClass}
            />
          </label>
        </div>

        <label className='flex flex-col gap-2'>
          <span className='text-xs uppercase tracking-widest text-[#666]'>
            Задача <span className='normal-case tracking-normal'>— по желанию</span>
          </span>
          <textarea
            name='task'
            rows={4}
            maxLength={4000}
            placeholder='Пара слов о том, что нужно сделать. Если пока не сформулировано — разберём на звонке.'
            className={`${inputClass} resize-y`}
          />
        </label>

        <label className='flex items-start gap-3 text-xs text-[#666] leading-relaxed'>
          <input
            name='consent'
            type='checkbox'
            required
            className='mt-0.5 size-4 shrink-0 accent-purple-500'
          />
          <span>
            Согласен с{' '}
            <Link
              href={LEGAL_ROUTES.personalDataConsent}
              className='text-[#888] underline underline-offset-2 decoration-[#444] hover:text-white transition-colors'
            >
              обработкой персональных данных
            </Link>
          </span>
        </label>

        {status === 'error' && (
          <p role='alert' className='text-sm text-red-400'>
            {error}
          </p>
        )}

        <button
          type='submit'
          disabled={status === 'sending'}
          className='mt-1 inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white text-base transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed'
          style={{
            background: 'linear-gradient(135deg, #7d2cc8, #0070f3)',
            boxShadow: '0 0 28px rgba(125,44,200,0.28)'
          }}
        >
          {status === 'sending' ? 'Отправляю…' : 'Отправить заявку'}
        </button>

        <p className='text-xs text-[#555] text-center'>
          Или сразу{' '}
          <a
            href={contacts.phoneHref}
            className='text-[#888] underline underline-offset-2 decoration-[#444] hover:text-white transition-colors'
          >
            {contacts.phone}
          </a>{' '}
          ·{' '}
          <a
            href={contacts.telegram}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#888] underline underline-offset-2 decoration-[#444] hover:text-white transition-colors'
          >
            Telegram
          </a>
        </p>
      </form>
    </div>
  )
}

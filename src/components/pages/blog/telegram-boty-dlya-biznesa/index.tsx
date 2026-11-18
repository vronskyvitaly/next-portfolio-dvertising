import Link from 'next/link'
import BlogBreadcrumbs from '@/components/ui/BlogBreadcrumbs'
import { BLOG_ROUTES, ROUTES, SERVICE_ROUTES } from '@/config/routes'
import { PUBLISHED, URL_PATH } from './constants'
import {
  jsonLd,
  useCases,
  steps,
  faq
} from '@/common/data/pages/blog/telegram-boty-dlya-biznesa'

export function TelegramBotyDlyaBiznesaPage() {
  const publishedFormatted = new Date(PUBLISHED).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className='min-h-screen bg-[#0a0a0a] text-white'>
        {/* Фон */}
        <div
          aria-hidden='true'
          className='fixed inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        <div
          aria-hidden='true'
          className='fixed top-0 right-0 w-150 h-150 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(0,136,204,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        <div className='relative z-10 max-w-3xl mx-auto px-6 py-16 sm:py-24'>
          <BlogBreadcrumbs path={URL_PATH} />

          {/* Шапка статьи */}
          <header className='mb-12'>
            <div className='flex flex-wrap gap-2 mb-6'>
              <span
                className='text-xs px-3 py-1 rounded-full'
                style={{
                  border: '1px solid rgba(0,136,204,0.35)',
                  background: 'rgba(0,136,204,0.1)',
                  color: '#38b6e6'
                }}
              >
                Telegram-боты
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                {publishedFormatted}
              </span>
              <span className='text-xs px-3 py-1 rounded-full border border-white/10 text-gray-500'>
                8 мин чтения
              </span>
            </div>

            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6'>
              Telegram-бот для бизнеса:{' '}
              <span
                className='bg-clip-text text-transparent'
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #00a3e0, #0070f3)'
                }}
              >
                продаёт и отвечает 24/7
              </span>
            </h1>

            <p className='text-lg text-gray-400 leading-relaxed'>
              Разбираю, что реально умеет Telegram-бот, какие задачи он закрывает
              лучше менеджера и когда его внедрение окупается за первый же месяц.
            </p>
          </header>

          {/* Тело статьи */}
          <article className='space-y-14 text-gray-300 leading-relaxed'>
            {/* Почему Telegram */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Почему бизнес выбирает Telegram
              </h2>
              <p className='mb-4'>
                В России Telegram обогнал WhatsApp по числу активных
                пользователей среди бизнес-аудитории. Большинство клиентов уже
                там: читают каналы, переписываются с коллегами, покупают.
                Telegram-бот — это не дополнительный канал, а точка контакта
                там, где клиент уже находится.
              </p>
              <p className='mb-6'>
                В отличие от чат-виджета на сайте, бот живёт в телефоне клиента
                и может написать первым: напомнить, уведомить, предложить.{' '}
                <strong className='text-white'>
                  Конверсия в открытие сообщений в Telegram — 80–90%
                </strong>{' '}
                против 15–20% у email-рассылок.
              </p>
              <div
                className='p-5 rounded-2xl'
                style={{
                  background: 'rgba(0,136,204,0.08)',
                  border: '1px solid rgba(0,136,204,0.2)'
                }}
              >
                <p className='text-sky-200 font-medium leading-relaxed'>
                  Бот не болеет, не уходит в отпуск и не забывает ответить.
                  Он обрабатывает сотни обращений одновременно — с одинаковым
                  качеством в 3 часа ночи и в понедельник утром.
                </p>
              </div>
            </section>

            {/* Что умеет бот */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Что умеет Telegram-бот для бизнеса
              </h2>
              <div className='space-y-4'>
                {useCases.map(block => (
                  <div
                    key={block.title}
                    className='p-6 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <div className='flex items-center gap-3 mb-4'>
                      <span className='text-2xl'>{block.icon}</span>
                      <h3 className='text-base font-semibold text-white'>
                        {block.title}
                      </h3>
                    </div>
                    <ul className='space-y-2'>
                      {block.items.map(item => (
                        <li
                          key={item}
                          className='flex items-start gap-2 text-sm'
                        >
                          <span className='text-sky-400 mt-0.5 shrink-0'>→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Inline CTA */}
            <div
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl'
              style={{
                background: 'rgba(0,112,243,0.07)',
                border: '1px solid rgba(0,112,243,0.2)'
              }}
            >
              <div className='flex-1'>
                <p className='font-semibold text-white mb-1'>
                  Хотите бота для своего бизнеса?
                </p>
                <p className='text-sm text-gray-400'>
                  Напишите — обсудим задачу и предложим решение. Без воды,
                  бесплатно.
                </p>
              </div>
              <a
                href='https://t.me/vitalyvronsky'
                target='_blank'
                rel='noopener noreferrer'
                className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 whitespace-nowrap'
                style={{
                  background: 'linear-gradient(135deg, #00a3e0, #0070f3)'
                }}
              >
                Написать →
              </a>
            </div>

            {/* Как выглядит разработка */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Как выглядит разработка
              </h2>
              <div className='space-y-5'>
                {steps.map(step => (
                  <div key={step.n} className='flex gap-5'>
                    <div
                      className='shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white'
                      style={{
                        background: 'linear-gradient(135deg, #00a3e0, #0070f3)'
                      }}
                    >
                      {step.n}
                    </div>
                    <div>
                      <h3 className='font-semibold text-white mb-1'>
                        {step.title}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Кому подходит */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-4'>
                Кому это подходит
              </h2>
              <p className='mb-6'>
                Telegram-бот — не только для{' '}
                <Link
                  href={SERVICE_ROUTES.shop}
                  className='text-sky-300 hover:text-sky-200 underline underline-offset-2'
                >
                  интернет-магазинов
                </Link>
                , и часто он становится первым шагом в{' '}
                <Link
                  href={BLOG_ROUTES.avtomatizaciyaBiznesa}
                  className='text-sky-300 hover:text-sky-200 underline underline-offset-2'
                >
                  автоматизации бизнеса
                </Link>
                . Вот бизнесы, которые получают ощутимый результат:
              </p>
              <div className='grid sm:grid-cols-2 gap-4'>
                {[
                  {
                    title: 'Услуги и запись',
                    desc: 'Салоны, клиники, фитнес, репетиторы — бот принимает запись и напоминает о визите.'
                  },
                  {
                    title: 'Онлайн-школы',
                    desc: 'Выдаёт материалы, проверяет домашние задания, отвечает на вопросы студентов.'
                  },
                  {
                    title: 'Розница и e-commerce',
                    desc: 'Каталог, наличие, оплата и статус доставки — без звонков в поддержку.'
                  },
                  {
                    title: 'B2B и агентства',
                    desc: 'Квалификация входящих лидов, передача в CRM, уведомления менеджеру.'
                  }
                ].map(card => (
                  <div
                    key={card.title}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <h3 className='font-semibold text-white mb-2'>{card.title}</h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Частые вопросы
              </h2>
              <div className='space-y-4'>
                {faq.map(item => (
                  <div
                    key={item.q}
                    className='p-5 rounded-2xl'
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      background: 'rgba(255,255,255,0.025)'
                    }}
                  >
                    <h3 className='font-semibold text-white mb-2'>{item.q}</h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          {/* CTA */}
          <div
            className='mt-16 p-8 sm:p-10 rounded-3xl text-center'
            style={{
              background:
                'linear-gradient(135deg, rgba(0,136,204,0.12), rgba(0,112,243,0.12))',
              border: '1px solid rgba(0,136,204,0.25)'
            }}
          >
            <h2 className='text-2xl font-bold text-white mb-3'>
              Нужен Telegram-бот для бизнеса?
            </h2>
            <p className='text-gray-400 mb-8 max-w-md mx-auto'>
              Обсудим задачу, подберём оптимальное решение и назовём стоимость.
              Работаю по договору.
            </p>
            <a
              href='https://t.me/vitalyvronsky'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all hover:scale-105'
              style={{
                background: 'linear-gradient(135deg, #00a3e0, #0070f3)',
                boxShadow: '0 0 32px rgba(0,136,204,0.4)'
              }}
            >
              Написать в Telegram →
            </a>
          </div>

          {/* Нижняя навигация */}
          <div className='mt-12 pt-8 border-t border-white/8'>
            <Link
              href={ROUTES.home}
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
              На главную
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

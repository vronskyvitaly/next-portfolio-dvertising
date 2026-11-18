import Link from 'next/link'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import FaqList from '@/components/ui/FaqList'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import PriceMosaic from '@/components/sections/shared/PriceMosaic'
import ContactCta from '@/components/sections/shared/ContactCta'
import { contacts } from '@/config/contacts'
import { getNicheService } from '@/config/niches'
import { formatPrice } from '@/config/services'
import { siteConfig } from '@/config/site.config'
import { rampAccent, rampHsl } from '@/lib/colors'
import { ROUTES, blogPath, servicePath } from '@/config/routes'
import {
  services,
  niches,
  priceRows,
  relatedPosts,
  jsonLd,
  stages,
  CRUMBS,
  hubFaq,
  trustStrip,
  priceStructure,
  budgetScenarios,
  included,
  honestTakes,
  contractorQuestions,
  guarantees
} from '@/common/data/pages/sozdanie-saytov'

function stageHsl(index: number, alpha: number): string {
  return rampHsl(index / Math.max(stages.length - 1, 1), alpha)
}

function stageAccent(index: number): string {
  return rampAccent(index / Math.max(stages.length - 1, 1))
}

export function SozdanieSaytovPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
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
          className='fixed top-0 right-0 w-162.5 h-125 rounded-full pointer-events-none'
          style={{
            background:
              'radial-gradient(circle, rgba(125,44,200,0.09) 0%, rgba(0,112,243,0.06) 50%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        <div className='relative z-10'>
          {/* Хиро */}
          <section className='px-6 pt-12 pb-16 sm:pt-16 sm:pb-24'>
            <div className='max-w-5xl mx-auto'>
              <Breadcrumbs items={CRUMBS} />

              <p className='text-xs uppercase tracking-[0.25em] text-gray-500 mb-5 font-mono'>
                Виталий Вронский — разработчик
              </p>

              <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6'>
                Создание сайтов{' '}
                <span
                  className='bg-clip-text text-transparent'
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #c084fc, #60a5fa)'
                  }}
                >
                  под ключ
                </span>
              </h1>

              <p className='text-base sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8'>
                Лендинги, корпоративные сайты, интернет-магазины и
                веб-приложения. Состав работ, цену и сроки фиксирую в договоре
                до старта, код проекта передаю вам. Работаю удалённо по всей
                России.
              </p>

              <div className='flex flex-col sm:flex-row gap-3 mb-12'>
                <a
                  href='#zayavka'
                  className='inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105'
                  style={{
                    background: 'linear-gradient(135deg, #7d2cc8, #0070f3)',
                    boxShadow: '0 0 32px rgba(125,44,200,0.4)'
                  }}
                >
                  Обсудить проект →
                </a>
                <a
                  href={contacts.phoneHref}
                  className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105'
                  style={{
                    border: '1px solid rgba(255,255,255,0.12)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'rgba(255,255,255,0.8)'
                  }}
                >
                  {contacts.phone}
                </a>
              </div>

              {/* Трастовая полоса — видна на всех разрешениях */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {trustStrip.map(item => (
                  <div
                    key={item.label}
                    className='rounded-2xl px-4 py-4 text-center sm:text-left'
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.07)'
                    }}
                  >
                    <div
                      className='text-lg sm:text-xl font-bold bg-clip-text text-transparent'
                      style={{
                        backgroundImage:
                          'linear-gradient(135deg, #c084fc, #60a5fa)'
                      }}
                    >
                      {item.value}
                    </div>
                    <div className='text-xs text-gray-500 mt-1'>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Цены */}
          <section id='ceny' className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Сколько стоит сайт и за какой срок будет готов
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                В каждую цену входит полный цикл работ: разбор задачи,
                структура, дизайн, вёрстка, формы заявки, SEO-подготовка и
                запуск. Итоговую сумму называю после разбора задачи и фиксирую
                в договоре до старта.
              </p>

              <div className='grid sm:grid-cols-2 gap-4'>
                {priceRows.map(row => {
                  const card = (
                    <>
                      <div className='flex items-start justify-between gap-4 mb-3'>
                        <h3 className='text-lg font-semibold text-white'>
                          {row.name}
                        </h3>
                        <span
                          className='text-sm font-semibold whitespace-nowrap'
                          style={{ color: row.accent }}
                        >
                          {formatPrice(row.priceFrom)}
                        </span>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed mb-4'>
                        {row.purpose}
                      </p>
                      <div className='mt-auto flex items-center justify-between gap-3'>
                        <span className='text-xs text-gray-500'>
                          Срок: {row.duration}
                        </span>
                        {row.href && (
                          <span
                            className='text-xs font-medium'
                            style={{ color: row.accent }}
                          >
                            Подробнее →
                          </span>
                        )}
                      </div>
                    </>
                  )

                  const className =
                    'flex flex-col h-full p-6 rounded-2xl border border-white/8 bg-white/3 transition-all'

                  return row.href ? (
                    <Link
                      key={row.name}
                      href={row.href}
                      className={`${className} hover:border-purple-500/30 hover:bg-white/5`}
                    >
                      {card}
                    </Link>
                  ) : (
                    <div key={row.name} className={className}>
                      {card}
                    </div>
                  )
                })}
              </div>

            </div>
          </section>

          {/* Структура цены */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Из чего складывается цена сайта
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                Примерное распределение бюджета по этапам. Пропорции сдвигаются
                от проекта к проекту: больше интеграций — больше доля
                разработки, есть готовый брендбук — меньше доля дизайна.
              </p>

              <PriceMosaic items={priceStructure} />
            </div>
          </section>

          {/* Сценарии по бюджету */}
          <section className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                С чего начать при разном бюджете
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                Самая частая ошибка — растянуть небольшой бюджет на большой
                сайт. Лучше сделать меньше, но до конца.
              </p>

              <div className='grid sm:grid-cols-3 gap-4'>
                {budgetScenarios.map(item => (
                  <div
                    key={item.budget}
                    className='flex flex-col p-6 rounded-2xl border border-white/8 bg-white/3'
                  >
                    <div
                      className='text-sm font-semibold mb-3'
                      style={{ color: '#60a5fa' }}
                    >
                      {item.budget}
                    </div>
                    <h3 className='text-base font-semibold text-white mb-3 leading-snug'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Что входит */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Что входит в работу
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                «Под ключ» означает, что после сдачи сайт работает и вам не
                нужно искать никого ещё. Вот полный список того, что входит в
                базовую цену любого проекта.
              </p>

              <div className='grid sm:grid-cols-2 gap-x-8 gap-y-6'>
                {included.map(item => (
                  <div key={item.title} className='flex gap-3'>
                    <span
                      aria-hidden='true'
                      className='mt-1 shrink-0 text-sm'
                      style={{ color: '#c084fc' }}
                    >
                      ✓
                    </span>
                    <div>
                      <h3 className='text-base font-semibold text-white mb-1'>
                        {item.title}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Этапы */}
          <section className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Этапы разработки — от заявки до запуска
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                Порядок один для всех проектов, меняется только объём внутри
                этапов. Сроки указаны для типового случая, точные —
                фиксируются в договоре.
              </p>

              <ol className='flex flex-col'>
                {stages.map((stage, index) => (
                  <li
                    key={stage.title}
                    className='flex gap-4 sm:gap-5 pb-4 last:pb-0'
                  >
                    {/* Колонка таймлайна: кружок с номером и линия к следующему этапу */}
                    <div className='flex flex-col items-center shrink-0'>
                      <div
                        className='size-10 rounded-full flex items-center justify-center text-sm font-bold'
                        style={{
                          background: `linear-gradient(135deg, ${stageHsl(index, 0.24)}, ${stageHsl(index, 0.1)})`,
                          border: `1px solid ${stageHsl(index, 0.45)}`,
                          color: stageAccent(index),
                          boxShadow: `0 0 20px ${stageHsl(index, 0.18)}`
                        }}
                      >
                        {index + 1}
                      </div>
                      {index < stages.length - 1 && (
                        <span
                          aria-hidden='true'
                          className='w-px flex-1 mt-2 rounded-full'
                          style={{
                            background: `linear-gradient(180deg, ${stageHsl(index, 0.5)}, ${stageHsl(index + 1, 0.18)})`
                          }}
                        />
                      )}
                    </div>

                    <div className='flex-1 p-5 rounded-2xl border border-white/8 bg-white/3'>
                      <div className='flex items-start justify-between gap-3 mb-2'>
                        <h3 className='text-base font-semibold text-white leading-snug'>
                          {stage.title}
                        </h3>
                        <span
                          className='shrink-0 mt-0.5 px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap'
                          style={{
                            border: `1px solid ${stageHsl(index, 0.3)}`,
                            background: stageHsl(index, 0.1),
                            color: stageAccent(index)
                          }}
                        >
                          {stage.time}
                        </span>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {stage.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Честные разборы */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-10'>
                О чём стоит знать до заказа сайта
              </h2>

              <div className='flex flex-col'>
                {honestTakes.map((block, index) => (
                  <article
                    key={block.title}
                    className='grid md:grid-cols-[15rem_minmax(0,1fr)] gap-4 md:gap-10 py-8 first:pt-0 border-t border-white/8 first:border-t-0'
                  >
                    <div className='md:sticky md:top-8 md:self-start'>
                      <div className='flex items-center gap-3 mb-3'>
                        <span className='text-xs font-mono text-[#666]'>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          aria-hidden='true'
                          className='h-px w-10'
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(192,132,252,0.6), transparent)'
                          }}
                        />
                      </div>
                      <h3 className='text-lg sm:text-xl font-semibold text-white leading-snug text-balance'>
                        {block.title}
                      </h3>
                    </div>

                    <div className='max-w-2xl'>
                      {block.paragraphs.map(paragraph => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className='text-base text-gray-400 leading-relaxed mb-4 last:mb-0'
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}

                {/* Чек-лист вопросов — работает и при выборе другого подрядчика */}
                <article className='grid md:grid-cols-[15rem_minmax(0,1fr)] gap-4 md:gap-10 py-8 border-t border-white/8'>
                  <div className='md:sticky md:top-8 md:self-start'>
                    <div className='flex items-center gap-3 mb-3'>
                      <span className='text-xs font-mono text-[#666]'>
                        {String(honestTakes.length + 1).padStart(2, '0')}
                      </span>
                      <span
                        aria-hidden='true'
                        className='h-px w-10'
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(96,165,250,0.6), transparent)'
                        }}
                      />
                    </div>
                    <h3 className='text-lg sm:text-xl font-semibold text-white leading-snug text-balance'>
                      Шесть вопросов, которые стоит задать любому разработчику
                    </h3>
                  </div>

                  <div>
                    <p className='text-base text-gray-400 leading-relaxed mb-6 max-w-2xl'>
                      Этот список пригодится, даже если вы выберете не меня. По
                      ответам на эти вопросы обычно сразу видно, с кем вы имеете
                      дело.
                    </p>

                    <div className='flex flex-col gap-4'>
                      {contractorQuestions.map((item, index) => (
                        <div
                          key={item.q}
                          className='flex gap-4 p-5 rounded-2xl border border-white/8 bg-white/3 transition-colors hover:border-white/15 hover:bg-white/5'
                        >
                          <div
                            className='shrink-0 size-8 rounded-full flex items-center justify-center text-xs font-bold'
                            style={{
                              background: 'rgba(0,112,243,0.15)',
                              border: '1px solid rgba(0,112,243,0.3)',
                              color: '#60a5fa'
                            }}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <p className='text-base font-medium text-white mb-2'>
                              {item.q}
                            </p>
                            <p className='text-sm text-gray-400 leading-relaxed'>
                              {item.why}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Гарантии */}
          <section className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Гарантии и договор
              </h2>
              <p className='text-gray-400 mb-10 max-w-2xl leading-relaxed'>
                Работаю как индивидуальный предприниматель, с договором и
                закрывающими документами.
              </p>

              <ul className='flex flex-col gap-3 mb-10'>
                {guarantees.map(item => (
                  <li key={item} className='flex gap-3 text-base text-gray-300'>
                    <span
                      aria-hidden='true'
                      className='mt-1 shrink-0 text-sm'
                      style={{ color: '#34d399' }}
                    >
                      ✓
                    </span>
                    <span className='leading-relaxed'>{item}</span>
                  </li>
                ))}
              </ul>

              <div
                className='rounded-2xl p-6 text-sm text-gray-400 leading-relaxed'
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)'
                }}
              >
                <p className='mb-2'>
                  <span className='text-gray-300'>
                    {siteConfig.operator.fullName}
                  </span>
                  , ИНН {siteConfig.operator.inn}
                </p>
                <p className='mb-2'>
                  Зарегистрирован в реестре операторов персональных данных
                  Роскомнадзора, № {siteConfig.rkn.registryNumber}
                </p>
                <p>
                  <Link
                    href={ROUTES.legal}
                    className='underline underline-offset-2 decoration-[#444] hover:text-white transition-colors'
                  >
                    Правовая информация и документы
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-10'>
                Частые вопросы о заказе сайта
              </h2>
              <FaqList items={hubFaq} />
            </div>
          </section>

          {/* Заявка */}
          <section id='zayavka' className='py-16 sm:py-24 px-6 bg-[#0d0d0d]'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-4xl font-bold mb-4'>
                Обсудим ваш проект
              </h2>
              <p className='text-gray-400 mb-8 max-w-2xl leading-relaxed'>
                Первый шаг — разбор задачи: 20–30 минут разговора, по итогам
                которых у вас есть понимание объёма, цены и сроков. Бесплатно и
                без обязательств.
              </p>

              <ContactCta />
            </div>
          </section>

          {/* Перелинковка */}
          <section className='py-16 sm:py-24 px-6'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Разработка по типам сайтов
              </h2>
              <div className='grid sm:grid-cols-2 gap-4 mb-16'>
                {services.map(service => (
                  <Link
                    key={service.slug}
                    href={servicePath(service.slug)}
                    className='group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
                  >
                    <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                      {service.h1}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed mb-3'>
                      {service.lead}
                    </p>
                    <span
                      className='text-xs font-medium'
                      style={{ color: service.accent }}
                    >
                      {formatPrice(service.priceFrom)} · {service.duration}
                    </span>
                  </Link>
                ))}
              </div>

              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Сайты для отраслей
              </h2>
              <div className='grid sm:grid-cols-2 gap-4 mb-16'>
                {niches.map(niche => (
                  <Link
                    key={niche.slug}
                    href={servicePath(niche.slug)}
                    className='group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
                  >
                    <h3 className='text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors'>
                      {niche.name}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed mb-3'>
                      {niche.purpose}
                    </p>
                    <span
                      className='text-xs font-medium'
                      style={{ color: niche.accent }}
                    >
                      {formatPrice(getNicheService(niche).priceFrom)}
                    </span>
                  </Link>
                ))}
              </div>

              <h2 className='text-2xl sm:text-3xl font-bold mb-8'>
                Подробнее в статьях
              </h2>
              <div className='grid sm:grid-cols-3 gap-4'>
                {relatedPosts.map(post => (
                  <Link
                    key={post.slug}
                    href={blogPath(post.slug)}
                    className='group p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all'
                  >
                    <h3 className='text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug'>
                      {post.title}
                    </h3>
                    <p className='text-sm text-gray-400 leading-relaxed'>
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  )
}

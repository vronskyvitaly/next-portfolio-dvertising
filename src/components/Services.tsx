const services = [
  {
    num: '01',
    icon: '⚡',
    title: 'Автоматизация бизнеса',
    description:
      'Освобождаю сотрудников от рутины: документооборот, отчёты, уведомления, интеграции между системами. Экономия — от нескольких часов в день.',
    bullets: [
      'Автоматизация документооборота',
      'Интеграция CRM, 1С, ERP',
      'Боты и авторассылки',
      'Автоматические отчёты'
    ],
    accent: '#7d2cc8',
    glow: 'rgba(125,44,200,0.15)',
    border: 'rgba(125,44,200,0.3)',
    topLine: 'linear-gradient(90deg, transparent, #7d2cc8, transparent)'
  },
  {
    num: '02',
    icon: '🌐',
    title: 'Сайты и веб-приложения',
    description:
      'Разрабатываю под ключ: лендинги, корпоративные сайты, интернет-магазины, сложные веб-приложения. Быстро, современно, с учётом SEO.',
    bullets: [
      'Лендинги и корпоративные сайты',
      'Интернет-магазины',
      'Личные кабинеты и CRM',
      'API и backend-системы'
    ],
    accent: '#0070f3',
    glow: 'rgba(0,112,243,0.12)',
    border: 'rgba(0,112,243,0.3)',
    topLine: 'linear-gradient(90deg, transparent, #0070f3, transparent)'
  },
  {
    num: '03',
    icon: '🤖',
    title: 'Внедрение ИИ в организации',
    description:
      'Интегрирую ИИ-ассистентов в рабочие процессы: обработка заявок, анализ данных, поддержка клиентов, генерация контента.',
    bullets: [
      'ИИ-ассистенты для сотрудников',
      'Чат-боты с GPT для клиентов',
      'Автоматический анализ данных',
      'Обработка заявок и документов'
    ],
    accent: '#00d4ff',
    glow: 'rgba(0,212,255,0.1)',
    border: 'rgba(0,212,255,0.25)',
    topLine: 'linear-gradient(90deg, transparent, #00d4ff, transparent)'
  }
]

export default function Services() {
  return (
    <section id='services' className='py-24 px-6 bg-[#0d0d0d]'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <p className='text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 font-mono'>
            услуги
          </p>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Что я делаю для вашего бизнеса
          </h2>
          <p className='text-gray-400 text-lg max-w-xl mx-auto'>
            Три направления — одна цель: ваш бизнес работает быстрее
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-5 mb-10'>
          {services.map(service => (
            <div
              key={service.title}
              className='relative rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1'
              style={{
                background: `linear-gradient(160deg, ${service.glow} 0%, rgba(255,255,255,0.02) 60%, transparent 100%)`,
                border: `1px solid ${service.border}`,
                boxShadow: `0 0 40px ${service.glow}`
              }}
            >
              {/* Линия сверху */}
              <div
                className='absolute top-0 left-0 right-0 h-px'
                style={{ background: service.topLine }}
              />

              <div className='p-8 flex flex-col flex-1'>
                {/* Шапка карточки */}
                <div className='flex items-start justify-between mb-6'>
                  {/* Иконка */}
                  <div
                    className='w-14 h-14 rounded-2xl flex items-center justify-center text-3xl'
                    style={{
                      background: `linear-gradient(135deg, ${service.glow} 0%, rgba(255,255,255,0.04) 100%)`,
                      border: `1px solid ${service.border}`,
                      boxShadow: `0 0 20px ${service.glow}`
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Номер */}
                  <span
                    className='text-4xl font-bold font-mono leading-none'
                    style={{ color: `${service.accent}22` }}
                  >
                    {service.num}
                  </span>
                </div>

                {/* Заголовок */}
                <h3 className='text-xl font-bold text-white mb-3 leading-snug'>
                  {service.title}
                </h3>

                {/* Описание */}
                <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                  {service.description}
                </p>

                {/* Разделитель */}
                <div
                  className='h-px mb-5'
                  style={{
                    background: `linear-gradient(90deg, ${service.border}, transparent)`
                  }}
                />

                {/* Буллеты */}
                <ul className='space-y-2.5 mt-auto'>
                  {service.bullets.map(bullet => (
                    <li
                      key={bullet}
                      className='flex items-center gap-3 text-sm text-gray-300'
                    >
                      <span
                        className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold'
                        style={{
                          background: `${service.accent}22`,
                          color: service.accent,
                          border: `1px solid ${service.accent}44`
                        }}
                      >
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* Портфолио */}
        <a
          href='https://vronskyvitaly.ru'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl transition-all hover:border-purple-500/30 hover:bg-white/5 group'
          style={{
            border: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(255,255,255,0.025)'
          }}
        >
          <div>
            <p className='text-xs uppercase tracking-[0.2em] text-gray-500 mb-1 font-mono'>Портфолио</p>
            <p className='text-white font-semibold mb-1'>
              Посмотрите мои работы и технологии на&nbsp;
              <span
                className='bg-clip-text text-transparent'
                style={{ backgroundImage: 'linear-gradient(90deg, #c084fc, #60a5fa)' }}
              >
                vronskyvitaly.ru
              </span>
            </p>
            <p className='text-sm text-gray-500'>
              Реальные проекты — сайты, боты, автоматизация и ИИ-решения
            </p>
          </div>
          <span
            className='shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all group-hover:scale-105 whitespace-nowrap'
            style={{ background: 'linear-gradient(135deg, #7d2cc8, #0070f3)' }}
          >
            Открыть портфолио
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
              <path d='M2 12L12 2M12 2H5M12 2v7' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/>
            </svg>
          </span>
        </a>
      </div>
    </section>
  )
}

const benefits = [
  {
    icon: '🎯',
    title: 'Погружаюсь в задачу',
    description:
      'Сначала разбираюсь в вашем бизнесе и задаче, потом предлагаю решение. Не продаю лишнего.'
  },
  {
    icon: '⏱️',
    title: 'Соблюдаю сроки',
    description:
      'Фиксируем дедлайн на старте — придерживаюсь его. Если возникают сложности, предупреждаю заранее.'
  },
  {
    icon: '🔧',
    title: 'Поддержка после сдачи',
    description:
      'Не исчезаю после запуска. Остаюсь на связи, помогаю с правками и доработками.'
  },
  {
    icon: '💡',
    title: 'Современные технологии',
    description:
      'Использую актуальный стек: Next.js, React, TypeScript, облачные сервисы, современные ИИ-модели.'
  },
  {
    icon: '📊',
    title: 'Результат в цифрах',
    description:
      'Измеримый эффект: сколько часов сэкономлено, на сколько выросла конверсия, насколько снизились расходы.'
  },
  {
    icon: '🔒',
    title: 'Прозрачная работа',
    description:
      'Чёткий договор, поэтапная оплата, доступ к коду и документации. Вы всегда в курсе хода проекта.'
  }
]

export default function Benefits() {
  return (
    <section id='benefits' className='py-24 px-6 bg-[#0d0d0d]'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white mb-4'>
            Почему выбирают меня
          </h2>
          <p className='text-gray-400 text-lg max-w-xl mx-auto'>
            Работаю так, чтобы клиенты возвращались снова
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {benefits.map(benefit => (
            <div
              key={benefit.title}
              className='p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/5 transition-colors'
            >
              <div className='text-3xl mb-4'>{benefit.icon}</div>
              <h3 className='text-base font-semibold text-white mb-2'>
                {benefit.title}
              </h3>
              <p className='text-sm text-gray-400 leading-relaxed'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

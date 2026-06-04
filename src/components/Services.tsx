const services = [
  {
    icon: "⚡",
    title: "Автоматизация бизнеса",
    description:
      "Освобождаю ваших сотрудников от рутины: автоматизирую документооборот, отчётность, уведомления, интеграции между системами. Экономия времени — от нескольких часов в день.",
    bullets: [
      "Автоматизация документооборота",
      "Интеграция CRM, 1С, ERP",
      "Боты и авторассылки",
      "Автоматические отчёты",
    ],
    gradient: "from-purple-900/40 to-purple-900/5",
    accent: "#7d2cc8",
  },
  {
    icon: "🌐",
    title: "Сайты и веб-приложения",
    description:
      "Разрабатываю сайты под ключ: лендинги, корпоративные сайты, интернет-магазины и сложные веб-приложения. Быстро, современно, с учётом SEO.",
    bullets: [
      "Лендинги и корпоративные сайты",
      "Интернет-магазины",
      "Личные кабинеты и CRM",
      "API и backend-системы",
    ],
    gradient: "from-blue-900/40 to-blue-900/5",
    accent: "#0070f3",
  },
  {
    icon: "🤖",
    title: "Внедрение ИИ в организации",
    description:
      "Интегрирую ИИ-ассистентов и инструменты в рабочие процессы компании: обработка заявок, анализ данных, поддержка клиентов, генерация контента.",
    bullets: [
      "ИИ-ассистенты для сотрудников",
      "Чат-боты с GPT для клиентов",
      "Автоматический анализ данных",
      "Обработка заявок и документов",
    ],
    gradient: "from-cyan-900/40 to-cyan-900/5",
    accent: "#00d4ff",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Что я делаю для вашего бизнеса
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Три направления, которые помогают компаниям расти быстрее
            и работать эффективнее
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-2xl p-8 border border-white/8 bg-gradient-to-b ${service.gradient} hover:border-white/15 transition-colors`}
            >
              <div
                className="text-4xl mb-5 w-14 h-14 flex items-center justify-center rounded-xl bg-white/5"
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: service.accent }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

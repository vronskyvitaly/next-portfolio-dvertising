const services = [
  {
    icon: "🌐",
    title: "Создаю сайты\nи приложения",
    desc: "Современный сайт или сложное веб-приложение — под ключ, в срок",
    glow: "#0070f3",
    border: "rgba(0,112,243,0.3)",
    bg: "rgba(0,112,243,0.07)",
  },
  {
    icon: "🤖",
    title: "Внедряю\nИИ в бизнес",
    desc: "Умный ассистент отвечает клиентам, обрабатывает заявки и экономит часы работы",
    glow: "#7d2cc8",
    border: "rgba(125,44,200,0.35)",
    bg: "rgba(125,44,200,0.08)",
    featured: true,
  },
  {
    icon: "⚡",
    title: "Автоматизирую\nпроцессы",
    desc: "Убираю рутину: отчёты, уведомления, документы — всё работает само",
    glow: "#00d4ff",
    border: "rgba(0,212,255,0.25)",
    bg: "rgba(0,212,255,0.06)",
  },
];

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "30+", label: "проектов" },
  { value: "24ч", label: "время ответа" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24">

      {/* Точечная сетка */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 30%, #0a0a0a 80%)",
        }}
      />

      {/* Сферы */}
      <div
        className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse-slow"
        style={{ background: "radial-gradient(circle, #7d2cc8 0%, transparent 65%)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse-slow-2"
        style={{ background: "radial-gradient(circle, #0070f3 0%, transparent 65%)", filter: "blur(100px)" }}
      />

      {/* Контент */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

        {/* Имя */}
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-5 font-mono">
          Виталий Вронский — разработчик
        </p>

        {/* Главный заголовок */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-4">
          <span className="text-white">Помогаю бизнесу </span>
          <span
            className="bg-clip-text text-transparent animate-shimmer"
            style={{
              backgroundImage: "linear-gradient(90deg, #7d2cc8, #0070f3, #00d4ff, #0070f3, #7d2cc8)",
              backgroundSize: "200% auto",
            }}
          >
            расти и зарабатывать
          </span>
        </h1>

        {/* Подзаголовок прямой */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 font-light">
          Делаю сайты · Разрабатываю приложения · Внедряю искусственный интеллект
        </p>

        {/* Три карточки услуг */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl p-6 text-left transition-transform hover:-translate-y-1"
              style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
                boxShadow: s.featured ? `0 0 40px ${s.glow}33` : "none",
              }}
            >
              {s.featured && (
                <div
                  className="absolute -top-px left-6 right-6 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.glow}, transparent)` }}
                />
              )}

              <div className="text-4xl mb-4">{s.icon}</div>

              <h2 className="text-white font-bold text-xl leading-tight mb-3 whitespace-pre-line">
                {s.title}
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed">
                {s.desc}
              </p>

              {s.featured && (
                <div
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{ background: `${s.glow}22`, color: "#c084fc" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                  Популярно у клиентов
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7d2cc8, #0070f3)",
              boxShadow: "0 0 32px rgba(125,44,200,0.4)",
            }}
          >
            Обсудить проект →
          </a>
          <a
            href="https://vronskyvitaly.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border border-white/12 text-gray-300 hover:border-white/25 hover:text-white transition-all bg-white/3"
          >
            Посмотреть портфолио
          </a>
        </div>

        {/* Статистика */}
        <div className="flex items-center justify-center gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="text-center">
                <div
                  className="text-2xl font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #c084fc, #60a5fa)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Стрелка */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float pointer-events-none">
        <span className="text-[10px] text-gray-600 tracking-widest uppercase">scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-gray-600">
          <path d="M7 0v14M1 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

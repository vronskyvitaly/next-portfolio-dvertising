const floatingTags = [
  { label: "Next.js", x: "8%", y: "22%", delay: "0s" },
  { label: "GPT-4", x: "82%", y: "18%", delay: "0.8s" },
  { label: "React", x: "5%", y: "62%", delay: "1.4s" },
  { label: "n8n", x: "85%", y: "58%", delay: "0.4s" },
  { label: "TypeScript", x: "12%", y: "80%", delay: "1s" },
  { label: "Автоматизация", x: "72%", y: "80%", delay: "1.8s" },
];

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "30+", label: "проектов" },
  { value: "24ч", label: "время ответа" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">

      {/* Точечная сетка */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, #0a0a0a 85%)",
        }}
      />

      {/* Градиентные сферы */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, #7d2cc8 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none animate-pulse-slow-2"
        style={{
          background: "radial-gradient(circle, #0070f3 0%, transparent 65%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #00d4ff 0%, transparent 65%)",
          filter: "blur(100px)",
          opacity: 0.08,
        }}
      />

      {/* Плавающие теги (только десктоп) */}
      {floatingTags.map((tag) => (
        <div
          key={tag.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/4 text-xs text-gray-400 backdrop-blur-sm pointer-events-none"
          style={{
            left: tag.x,
            top: tag.y,
            animation: `float ${4 + parseFloat(tag.delay) * 0.5}s ease-in-out ${tag.delay} infinite`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7d2cc8]" />
          {tag.label}
        </div>
      ))}

      {/* Основной контент */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Бейдж */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/10 bg-white/4 backdrop-blur-sm text-sm text-gray-300">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, #7d2cc8, #00d4ff)",
              boxShadow: "0 0 8px rgba(0,212,255,0.6)",
            }}
          />
          Разработка · Автоматизация · Искусственный интеллект
        </div>

        {/* Имя */}
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-mono">
          Виталий Вронский
        </p>

        {/* Заголовок */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight mb-6">
          <span className="text-white">Ваши идеи —</span>
          <br />
          <span
            className="bg-clip-text text-transparent animate-shimmer"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #7d2cc8, #0070f3, #00d4ff, #0070f3, #7d2cc8)",
              backgroundSize: "200% auto",
            }}
          >
            в реальный бизнес
          </span>
        </h1>

        {/* Подзаголовок */}
        <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Автоматизирую процессы, создаю сайты и веб-приложения, внедряю ИИ —
          чтобы ваш бизнес работал быстрее и приносил больше.
        </p>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white text-base transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7d2cc8, #0070f3)",
              boxShadow: "0 0 30px rgba(125,44,200,0.35)",
            }}
          >
            Обсудить проект →
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold border border-white/12 text-gray-300 hover:border-white/25 hover:text-white transition-all bg-white/3 backdrop-blur-sm"
          >
            Посмотреть услуги
          </a>
        </div>

        {/* Разделитель */}
        <div className="flex items-center gap-4 mb-8 max-w-sm mx-auto">
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1))" }}
          />
          <span className="text-xs text-gray-600 whitespace-nowrap">в цифрах</span>
          <div
            className="flex-1 h-px"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }}
          />
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center py-4 px-3 rounded-2xl border border-white/8 bg-white/3"
            >
              <span
                className="text-2xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #c084fc, #60a5fa)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 mt-1 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float pointer-events-none">
        <span className="text-[10px] text-gray-600 tracking-widest uppercase">scroll</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" className="text-gray-600">
          <path d="M7 0v14M1 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}

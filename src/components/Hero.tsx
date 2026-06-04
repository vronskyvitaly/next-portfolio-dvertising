const stats = [
  { value: "5+", label: "лет опыта", accent: false },
  { value: "✓", label: "работаю по договору", accent: true },
  { value: "30+", label: "проектов", accent: false },
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
          <span className="text-white">Пока AI работает за вас —</span>
          <br />
          <span
            className="bg-clip-text text-transparent animate-shimmer"
            style={{
              backgroundImage: "linear-gradient(90deg, #7d2cc8, #0070f3, #00d4ff, #0070f3, #7d2cc8)",
              backgroundSize: "200% auto",
            }}
          >
            вы занимаетесь главным
          </span>
        </h1>

        {/* Подзаголовок */}
        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
          Беру на себя рутину и общение с клиентами — через сайты, AI и автоматизацию,
          которые работают круглосуточно
        </p>

        {/* CTA */}
        <div className="flex justify-center mb-14">
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
        </div>

        {/* Статистика */}
        <div className="flex items-center justify-center gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3 sm:gap-6">
              {stat.accent ? (
                <div
                  className="relative px-3 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(125,44,200,0.15), rgba(0,112,243,0.15))",
                    border: "1px solid rgba(125,44,200,0.4)",
                    boxShadow: "0 0 24px rgba(125,44,200,0.2)",
                  }}
                >
                  <div
                    className="absolute -top-px left-3 right-3 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, #7d2cc8, #0070f3, transparent)" }}
                  />
                  <div
                    className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #c084fc, #60a5fa)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-0.5 whitespace-nowrap">{stat.label}</div>
                </div>
              ) : (
                <div className="text-center">
                  <div
                    className="text-lg sm:text-2xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: "linear-gradient(135deg, #c084fc, #60a5fa)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              )}
              {i < stats.length - 1 && (
                <div className="w-px h-6 sm:h-8 bg-white/10" />
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

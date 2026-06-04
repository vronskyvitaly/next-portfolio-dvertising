export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-white/8 overflow-hidden">
          {/* Шапка с градиентом */}
          <div
            className="px-8 py-12 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(125,44,200,0.3) 0%, rgba(0,112,243,0.3) 50%, rgba(0,212,255,0.15) 100%)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(125,44,200,0.2), transparent 70%)",
              }}
            />
            <h2 className="relative text-3xl sm:text-4xl font-bold text-white mb-4">
              Готовы обсудить задачу?
            </h2>
            <p className="relative text-gray-300 text-lg max-w-xl mx-auto">
              Напишите в Telegram — отвечу в течение нескольких часов.
              Первая консультация бесплатно.
            </p>
          </div>

          {/* Контакты */}
          <div className="px-8 py-10 bg-[#111] grid sm:grid-cols-2 gap-6">
            <a
              href="https://t.me/vitalyvronsky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "rgba(0,112,243,0.15)" }}
              >
                ✈️
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Telegram</div>
                <div className="text-white font-medium group-hover:text-[#00d4ff] transition-colors">
                  @vitalyvronsky
                </div>
              </div>
            </a>

            <a
              href="mailto:vronskyvitaly@mail.ru"
              className="flex items-center gap-4 p-5 rounded-2xl border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: "rgba(125,44,200,0.15)" }}
              >
                ✉️
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-0.5">Email</div>
                <div className="text-white font-medium group-hover:text-[#7d2cc8] transition-colors">
                  vronskyvitaly@mail.ru
                </div>
              </div>
            </a>
          </div>

          {/* CTA кнопка */}
          <div className="px-8 pb-10 bg-[#111] text-center">
            <a
              href="https://t.me/vitalyvronsky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-full font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7d2cc8, #0070f3)",
                boxShadow: "0 0 30px rgba(125,44,200,0.3)",
              }}
            >
              Написать в Telegram
            </a>
            <p className="text-gray-500 text-sm mt-4">
              Или найдите меня в портфолио:{" "}
              <a
                href="https://vronskyvitaly.ru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors underline underline-offset-2"
              >
                vronskyvitaly.ru
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

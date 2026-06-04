export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-white/8 overflow-hidden">

          {/* Шапка */}
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
                background: "radial-gradient(ellipse at 50% 0%, rgba(125,44,200,0.25), transparent 70%)",
              }}
            />

            {/* Иконка бота */}
            <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(125,44,200,0.3), rgba(0,112,243,0.3))",
                border: "1px solid rgba(125,44,200,0.4)",
                boxShadow: "0 0 32px rgba(125,44,200,0.25)",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="6" y="10" width="20" height="14" rx="4" stroke="#c084fc" strokeWidth="1.5"/>
                <path d="M11 16h2M19 16h2M11 20h10" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M12 10V8M20 10V8" stroke="#c084fc" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="1" fill="#c084fc"/>
                <circle cx="20" cy="7" r="1" fill="#c084fc"/>
              </svg>
            </div>

            <h2 className="relative text-3xl sm:text-4xl font-bold text-white mb-3">
              Готовы обсудить задачу?
            </h2>
            <p className="relative text-gray-300 text-base max-w-lg mx-auto leading-relaxed mb-6">
              Напишите боту — он примет заявку, расскажет об услугах
              и передаст всё мне. Отвечу лично, как только появится возможность.
            </p>

            {/* Два обещания */}
            <div className="relative flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
              <div
                className="flex items-start gap-3 px-4 py-3 rounded-xl text-left flex-1"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="text-lg mt-0.5">🔒</span>
                <div>
                  <div className="text-white text-sm font-medium">Заявка не пропадёт</div>
                  <div className="text-gray-400 text-xs mt-0.5">Бот сохраняет каждое обращение — я увижу и отвечу</div>
                </div>
              </div>
              <div
                className="flex items-start gap-3 px-4 py-3 rounded-xl text-left flex-1"
                style={{ background: "rgba(125,44,200,0.08)", border: "1px solid rgba(125,44,200,0.2)" }}
              >
                <span className="text-lg mt-0.5">🤖</span>
                <div>
                  <div className="text-white text-sm font-medium">Такой бот — и для вас</div>
                  <div className="text-gray-400 text-xs mt-0.5">Сделаю вашему бизнесу точно такого же помощника</div>
                </div>
              </div>
            </div>
          </div>

          {/* Главная CTA */}
          <div className="px-8 pt-10 pb-6 bg-[#111] flex flex-col items-center gap-4">
            <a
              href="https://t.me/vitalyvronsky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white text-lg transition-all hover:scale-105 w-full sm:w-auto justify-center"
              style={{
                background: "linear-gradient(135deg, #7d2cc8, #0070f3)",
                boxShadow: "0 0 36px rgba(125,44,200,0.4)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="5" width="16" height="11" rx="3" stroke="white" strokeWidth="1.5"/>
                <path d="M6 10h2M12 10h2M6 13h8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Обсудить проект с ботом
            </a>
            <p className="text-gray-500 text-xs text-center">
              Бот работает 24/7 — ответит мгновенно
            </p>
          </div>

          {/* Разделитель */}
          <div className="mx-8 h-px bg-white/6" />

          {/* Прямые контакты */}
          <div className="px-8 py-8 bg-[#111]">
            <p className="text-xs text-gray-500 uppercase tracking-widest text-center mb-5">
              или напрямую
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://t.me/vitalyvronsky"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "rgba(0,112,243,0.15)" }}
                >
                  ✈️
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Telegram</div>
                  <div className="text-white text-sm font-medium group-hover:text-[#00d4ff] transition-colors">
                    @vitalyvronsky
                  </div>
                </div>
              </a>

              <a
                href="mailto:vronskyvitaly@mail.ru"
                className="flex items-center gap-4 p-4 rounded-2xl border border-white/8 hover:border-white/20 hover:bg-white/5 transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "rgba(125,44,200,0.15)" }}
                >
                  ✉️
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="text-white text-sm font-medium group-hover:text-[#7d2cc8] transition-colors">
                    vronskyvitaly@mail.ru
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

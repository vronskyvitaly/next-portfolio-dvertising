"use client";

import { useEffect, useState } from "react";

const floatingTags = [
  { label: "Next.js", x: "4%", y: "18%", delay: "0s" },
  { label: "React", x: "3%", y: "72%", delay: "1.4s" },
  { label: "TypeScript", x: "6%", y: "88%", delay: "1s" },
];

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "30+", label: "проектов" },
  { value: "24ч", label: "ответ" },
];

const aiMessages = [
  { role: "user", text: "Хочу автоматизировать приём заявок" },
  {
    role: "ai",
    text: "Отлично! Настрою бота, который будет принимать заявки, отправлять уведомления менеджерам и вносить данные в CRM автоматически.",
  },
  { role: "user", text: "А можно добавить ИИ для ответов клиентам?" },
  {
    role: "ai",
    text: "Да — интегрирую GPT-ассистента, который отвечает на типовые вопросы 24/7 и передаёт сложные случаи живому менеджеру.",
  },
];

function AiChat() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      await new Promise((r) => setTimeout(r, 600));
      if (cancelled) return;

      for (let i = 0; i < aiMessages.length; i++) {
        const msg = aiMessages[i];

        if (msg.role === "ai") {
          setIsTyping(true);
          await new Promise((r) => setTimeout(r, 900));
          if (cancelled) return;
          setIsTyping(false);

          // Побуквенный вывод
          for (let j = 1; j <= msg.text.length; j++) {
            if (cancelled) return;
            setTypingText(msg.text.slice(0, j));
            await new Promise((r) => setTimeout(r, 18));
          }
          setTypingText("");
          setVisibleMessages(i + 1);
          await new Promise((r) => setTimeout(r, 700));
        } else {
          setVisibleMessages(i + 1);
          await new Promise((r) => setTimeout(r, 500));
        }
      }

      // Пауза, затем перезапуск
      await new Promise((r) => setTimeout(r, 3000));
      if (!cancelled) {
        setVisibleMessages(0);
        setTypingText("");
        run();
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-sm mx-auto rounded-2xl border border-white/10 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      {/* Шапка карточки */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b border-white/8"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex items-center gap-2 ml-1">
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
            style={{
              background: "linear-gradient(135deg, #7d2cc8, #00d4ff)",
            }}
          >
            ✦
          </span>
          <span className="text-xs text-gray-400 font-medium">
            ИИ-ассистент
          </span>
          <span className="ml-auto flex items-center gap-1 text-[10px] text-green-400">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            online
          </span>
        </div>
      </div>

      {/* Сообщения */}
      <div className="flex flex-col gap-3 p-4 min-h-[260px]">
        {aiMessages.slice(0, visibleMessages).map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "ai" && (
              <span
                className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-2 mt-0.5"
                style={{
                  background: "linear-gradient(135deg, #7d2cc8, #0070f3)",
                }}
              >
                ✦
              </span>
            )}
            <div
              className="max-w-[78%] px-3 py-2 rounded-xl text-xs leading-relaxed"
              style={
                msg.role === "user"
                  ? {
                      background: "linear-gradient(135deg, #7d2cc8, #0070f3)",
                      color: "#fff",
                    }
                  : {
                      background: "rgba(255,255,255,0.06)",
                      color: "#d1d5db",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Индикатор набора */}
        {isTyping && (
          <div className="flex items-center gap-2">
            <span
              className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs"
              style={{ background: "linear-gradient(135deg, #7d2cc8, #0070f3)" }}
            >
              ✦
            </span>
            <div
              className="px-3 py-2.5 rounded-xl flex gap-1"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gray-400"
                  style={{
                    animation: `float 1s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Текущий печатаемый текст AI */}
        {typingText && (
          <div className="flex items-start gap-2">
            <span
              className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs"
              style={{ background: "linear-gradient(135deg, #7d2cc8, #0070f3)" }}
            >
              ✦
            </span>
            <div
              className="max-w-[78%] px-3 py-2 rounded-xl text-xs leading-relaxed"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#d1d5db",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {typingText}
              <span className="inline-block w-0.5 h-3 bg-[#00d4ff] ml-0.5 align-middle animate-pulse" />
            </div>
          </div>
        )}
      </div>

      {/* Поле ввода (декоративное) */}
      <div
        className="px-4 py-3 border-t border-white/8 flex items-center gap-2"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div
          className="flex-1 h-8 rounded-lg px-3 flex items-center text-xs text-gray-600"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          Напишите задачу...
        </div>
        <button
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs flex-shrink-0 transition-opacity"
          style={{ background: "linear-gradient(135deg, #7d2cc8, #0070f3)" }}
          disabled
        >
          ↑
        </button>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 py-20">

      {/* Точечная сетка */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 35%, #0a0a0a 80%)",
        }}
      />

      {/* Сферы */}
      <div
        className="absolute top-[-15%] left-[-8%] w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse-slow"
        style={{
          background: "radial-gradient(circle, #7d2cc8 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-[-15%] right-[-8%] w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse-slow-2"
        style={{
          background: "radial-gradient(circle, #0070f3 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />

      {/* Плавающие теги слева (только десктоп) */}
      {floatingTags.map((tag) => (
        <div
          key={tag.label}
          className="absolute hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/4 text-xs text-gray-400 backdrop-blur-sm pointer-events-none"
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

      {/* Центральная сетка: текст + карточка AI */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* Левая колонка — текст */}
        <div>
          {/* Бейдж */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/4 backdrop-blur-sm text-sm text-gray-300">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, #7d2cc8, #00d4ff)",
                boxShadow: "0 0 8px rgba(0,212,255,0.6)",
              }}
            />
            Разработка · Автоматизация · ИИ
          </div>

          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4 font-mono">
            Виталий Вронский
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
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

          <p className="text-base text-gray-400 max-w-md mb-10 leading-relaxed">
            Автоматизирую процессы, создаю сайты и веб-приложения,
            внедряю ИИ — чтобы бизнес работал быстрее и приносил больше.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #7d2cc8, #0070f3)",
                boxShadow: "0 0 28px rgba(125,44,200,0.35)",
              }}
            >
              Обсудить проект →
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold border border-white/12 text-gray-300 hover:border-white/25 hover:text-white transition-all bg-white/3"
            >
              Услуги
            </a>
          </div>

          {/* Статистика */}
          <div className="flex items-center gap-5">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-5">
                <div className="text-center">
                  <div
                    className="text-xl font-bold bg-clip-text text-transparent"
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

        {/* Правая колонка — AI-карточка */}
        <div className="flex flex-col items-center gap-4">
          {/* Заголовок над карточкой */}
          <div className="flex items-center gap-2 self-start">
            <span
              className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
              style={{ background: "linear-gradient(135deg, #7d2cc8, #00d4ff)" }}
            >
              ✦
            </span>
            <span className="text-sm text-gray-300 font-medium">
              Пример ИИ-ассистента для бизнеса
            </span>
          </div>

          <AiChat />

          {/* Подпись снизу */}
          <p className="text-xs text-gray-600 text-center max-w-xs">
            Такой ассистент отвечает клиентам 24/7, обрабатывает заявки
            и передаёт нужное менеджерам
          </p>
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

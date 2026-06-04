"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Сколько стоит разработка сайта?",
    answer:
      "Стоимость зависит от сложности. Лендинг — от 30 000 ₽, корпоративный сайт — от 60 000 ₽, веб-приложение — от 100 000 ₽. Точную цену назову после изучения задачи.",
  },
  {
    question: "Как долго занимает разработка?",
    answer:
      "Лендинг — 3–7 дней, корпоративный сайт — 2–4 недели, сложное приложение — 1–3 месяца. Сроки фиксируем в договоре.",
  },
  {
    question: "Что такое автоматизация бизнеса и как она помогает?",
    answer:
      "Это перевод ручных повторяющихся задач в автоматический режим: автоматическая выгрузка отчётов, уведомления клиентам, обработка заявок, интеграция сервисов. В среднем экономит 2–5 часов работы в день.",
  },
  {
    question: "Как внедряется ИИ в организацию?",
    answer:
      "Анализирую процессы компании, нахожу задачи, где ИИ даёт эффект. Затем настраиваю и интегрирую: ИИ-ассистент для сотрудников, автоматическая обработка входящих, генерация документов и ответов.",
  },
  {
    question: "Работаете ли вы с небольшими компаниями?",
    answer:
      "Да. Работаю как с малым бизнесом и ИП, так и со средними компаниями. Решения подбираю под реальный бюджет и задачи.",
  },
  {
    question: "Остаётесь ли на связи после завершения проекта?",
    answer:
      "Да. После сдачи проекта включается период поддержки. Мелкие правки — бесплатно. Доработки и новые задачи — по договорённости.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/8">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        style={{ touchAction: "manipulation" }}
      >
        <span className="text-base font-medium text-white">{question}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full border border-white/15 flex items-center justify-center text-gray-400"
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-5 text-sm text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Частые вопросы
          </h2>
          <p className="text-gray-400 text-lg">
            Отвечаю на то, что спрашивают чаще всего
          </p>
        </div>

        <div>
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

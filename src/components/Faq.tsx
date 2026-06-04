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

export default function Faq() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <style>{`
        .faq-item summary {
          list-style: none;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }
        .faq-item summary::-webkit-details-marker {
          display: none;
        }
        .faq-icon {
          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #6b7280;
        }
        .faq-item[open] .faq-icon {
          transform: rotate(180deg);
          background: linear-gradient(135deg, rgba(125,44,200,0.2), rgba(0,112,243,0.2));
          border-color: rgba(125,44,200,0.4);
          box-shadow: 0 0 16px rgba(125,44,200,0.2);
          color: #c084fc;
        }
        .faq-item[open] summary .faq-question {
          background: linear-gradient(90deg, #fff, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

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
            <details key={faq.question} className="faq-item border-b border-white/8">
              <summary className="flex items-center justify-between gap-4 py-5">
                <span className="faq-question text-base font-medium text-white">
                  {faq.question}
                </span>
                <span className="faq-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </summary>
              <p className="pb-5 text-sm text-gray-400 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

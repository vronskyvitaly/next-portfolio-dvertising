const steps = [
  {
    number: "01",
    title: "Бесплатная консультация",
    description:
      "Созваниваемся или переписываемся в Telegram. Разбираю вашу задачу, задаю вопросы, понимаю цели и ограничения.",
  },
  {
    number: "02",
    title: "Техническое предложение",
    description:
      "Готовлю конкретное решение: что именно будет сделано, в какие сроки, за какой бюджет. Всё в письменном виде.",
  },
  {
    number: "03",
    title: "Разработка и согласование",
    description:
      "Работаю итерациями. Показываю промежуточные результаты — вы видите прогресс и можете вносить правки на ходу.",
  },
  {
    number: "04",
    title: "Запуск и передача",
    description:
      "Запускаю проект, передаю исходники, документацию и инструкции. Остаюсь на связи для поддержки.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Как я работаю
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Простой процесс без лишней бюрократии
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl border border-white/8 bg-white/3 overflow-hidden"
            >
              <div
                className="absolute top-4 right-6 text-7xl font-bold select-none"
                style={{ color: "rgba(255,255,255,0.04)" }}
              >
                {step.number}
              </div>
              <div
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-sm font-bold mb-5 text-white"
                style={{
                  background:
                    index === 0
                      ? "#7d2cc8"
                      : index === 1
                        ? "#0070f3"
                        : index === 2
                          ? "#0058c4"
                          : "#00d4ff",
                }}
              >
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

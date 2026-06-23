const PROJECT_LABELS: Record<string, string> = {
  site: 'Сайт / лендинг',
  shop: 'Интернет-магазин',
  bot: 'Telegram-бот',
  automation: 'Автоматизация бизнеса',
  ai: 'Внедрение ИИ',
  webapp: 'Веб-приложение',
  other: 'Другое'
}

const QUESTION_LABELS: Record<string, string> = {
  // Общие сведения
  description: 'Описание проекта',
  project_type_detail: 'Тип проекта',
  goal: 'Цель создания проекта',
  audience: 'Целевая аудитория',
  competitors: 'Основные конкуренты',
  contacts: 'Контакты в проекте',
  // Функциональные требования
  pages: 'Количество страниц',
  catalog: 'Каталог товаров / услуг',
  feedback_forms: 'Формы обратной связи',
  search: 'Поиск по сайту',
  blog: 'Блог / новостная лента',
  cart: 'Корзина / оформление заказа',
  schedule: 'Режим работы',
  payment_method: 'Как клиент будет оплачивать заказ',
  cms: 'Административная панель (CMS)',
  // Дизайн
  style: 'Стиль и настроение',
  colors: 'Цветовая гамма',
  references: 'Примеры сайтов для референса',
  logo: 'Логотип и фирменный стиль',
  responsive: 'Адаптивность (мобильная версия)',
  animation: 'Анимация / спецэффекты',
  // Контент
  texts: 'Кто пишет тексты на сайт',
  media: 'Фотографии / иллюстрации / видео',
  // Домен и хостинг
  hosting: 'Кто выбирает хостинг',
  domain: 'Кто выбирает доменное имя',
  domain_payment: 'Кто оплачивает продление домена и хостинга',
  // Дополнительно
  products: 'Товарные позиции',
  future_updates: 'Планируете ли дорабатывать сайт',
  extra_pages: 'Требуется ли создание доп. страниц',
  preferences: 'Ваши предпочтения',
  code_delivery: 'В каком виде предоставить код проекта',
  dev_questions: 'Вопросы к разработчику',
  // Telegram-бот
  bot_description: 'Функционал бота',
  bot_integrations: 'Интеграции для бота',
  bot_existing_tools: 'Текущие инструменты / системы',
  bot_deadline: 'Дедлайн и бюджет',
  // Внедрение ИИ
  ai_task: 'Задача для ИИ',
  ai_type: 'Тип решения',
  ai_example: 'Пример результата',
  ai_data: 'Данные для обучения / контекста',
  ai_systems: 'Интеграция с системами',
  ai_stack: 'Предпочтения по технологиям',
  ai_quality: 'Критерии оценки результата',
  ai_deadline: 'Дедлайн и бюджет',
  // Другое
  other_description: 'Что нужно сделать',
  other_result: 'Ожидаемый результат',
  other_audience: 'Для кого и в каком контексте',
  other_references: 'Примеры или аналоги',
  other_tech: 'Предпочтения по технологиям',
  other_deadline: 'Дедлайн и бюджет',
  // Автоматизация бизнеса
  auto_process: 'Процесс для автоматизации',
  auto_trigger: 'Что запускает процесс',
  auto_result: 'Результат на выходе',
  auto_tools: 'Сервисы и системы',
  auto_data_flow: 'Как сейчас передаются данные',
  auto_volume: 'Объём операций',
  auto_errors: 'Текущие ошибки и потери',
  auto_success: 'Критерии успеха',
  auto_deadline: 'Дедлайн и бюджет'
}

const PROJECT_QUESTIONS: Record<string, string[]> = {
  site:       ['description','project_type_detail','goal','audience','competitors','contacts','pages','catalog','feedback_forms','search','blog','cart','schedule','payment_method','cms','style','colors','references','logo','responsive','animation','texts','media','hosting','domain','domain_payment','products','future_updates','extra_pages','preferences','code_delivery','dev_questions'],
  shop:       ['description','project_type_detail','goal','audience','competitors','contacts','pages','catalog','feedback_forms','search','blog','cart','schedule','payment_method','cms','style','colors','references','logo','responsive','animation','texts','media','hosting','domain','domain_payment','products','future_updates','extra_pages','preferences','code_delivery','dev_questions'],
  webapp:     ['description','project_type_detail','goal','audience','competitors','contacts','pages','catalog','feedback_forms','search','blog','cart','schedule','payment_method','cms','style','colors','references','logo','responsive','animation','texts','media','hosting','domain','domain_payment','products','future_updates','extra_pages','preferences','code_delivery','dev_questions'],
  other:      ['other_description','other_result','other_audience','other_references','other_tech','other_deadline'],
  bot:        ['bot_description','bot_integrations','bot_existing_tools','bot_deadline'],
  ai:         ['ai_task','ai_type','ai_example','ai_data','ai_systems','ai_stack','ai_quality','ai_deadline'],
  automation: ['auto_process','auto_trigger','auto_result','auto_tools','auto_data_flow','auto_volume','auto_errors','auto_success','auto_deadline'],
}

export const briefOptions = (
  brief: Record<string, unknown>,
  briefId: unknown
) => {
  const answers = brief.answers as Record<string, string>
  const projectType = brief.project_type as string
  const projectLabel = PROJECT_LABELS[projectType] ?? projectType
  const questionIds = PROJECT_QUESTIONS[projectType] ?? Object.keys(answers)

  const answersHtml = questionIds
    .map(k => {
      const label = QUESTION_LABELS[k] ?? k
      const v = answers[k]?.trim()
      return `
        <tr>
          <td style="padding:10px 16px;color:#666;font-size:13px;vertical-align:top;width:38%;border-bottom:1px solid rgba(255,255,255,0.04)">${label}</td>
          <td style="padding:10px 16px;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.04);${v ? 'color:#e0e0e0' : 'color:#444;font-style:italic'}">${v ? String(v).replace(/\n/g, '<br/>') : 'Пользователь не ответил'}</td>
        </tr>`
    })
    .join('')

  const currentDate = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const html = `<!DOCTYPE html>
<html>
<body style="background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;padding:32px 16px">
  <div style="max-width:620px;margin:0 auto">
    <div style="background:linear-gradient(135deg,#7d2cc8,#0070f3);border-radius:16px;padding:28px 32px;margin-bottom:20px">
      <p style="color:rgba(255,255,255,0.6);font-size:12px;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px">Новый бриф</p>
      <h1 style="color:white;margin:0 0 4px;font-size:22px;font-weight:600">${projectLabel}</h1>
      <p style="color:rgba(255,255,255,0.75);margin:0;font-size:15px">${brief.first_name} ${brief.last_name} · ${brief.email}</p>
    </div>
    <div style="background:#111;border-radius:16px;border:1px solid rgba(255,255,255,0.06);overflow:hidden">
      <table style="width:100%;border-collapse:collapse">
        ${answersHtml}
      </table>
    </div>
    <p style="color:#333;font-size:12px;text-align:center;margin-top:24px">
      Бриф #${briefId} · ${currentDate}
    </p>
  </div>
</body>
</html>`

  return {
    from: `"Бриф" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER as string,
    subject: `Бриф: ${projectLabel} — ${brief.first_name} ${brief.last_name}`,
    html
  }
}

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { db, ensureTables } from '@/lib/db'

const PROJECT_LABELS: Record<string, string> = {
  site: 'Сайт / лендинг',
  shop: 'Интернет-магазин',
  bot: 'Telegram-бот',
  automation: 'Автоматизация бизнеса',
  ai: 'Внедрение ИИ',
  webapp: 'Веб-приложение',
  other: 'Другое'
}

// Все лейблы вопросов для отображения в письме
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

export async function POST(req: NextRequest) {
  await ensureTables()
  const { briefId } = await req.json()

  const { rows: briefs } = await db.query(
    'SELECT b.*, u.email, u.first_name, u.last_name FROM briefs b JOIN brief_users u ON b.user_id = u.id WHERE b.id = $1',
    [briefId]
  )
  if (!briefs[0]) return NextResponse.json({ error: 'brief not found' }, { status: 404 })
  const brief = briefs[0]

  await db.query('UPDATE briefs SET submitted = true, updated_at = NOW() WHERE id = $1', [briefId])

  // Email отправляется в фоне — не блокируем ответ клиенту
  sendBriefEmail(brief, briefId).catch(err => console.error('[brief] email error:', err))

  return NextResponse.json({ ok: true })
}

async function sendBriefEmail(brief: Record<string, unknown>, briefId: unknown) {
  const EMAIL_USER = process.env.EMAIL_USER
  const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
  if (!EMAIL_USER || !EMAIL_PASSWORD) {
    console.warn('[brief] EMAIL_USER or EMAIL_PASSWORD not set, skipping email')
    return
  }

  const answers = brief.answers as Record<string, string>
  const projectLabel = PROJECT_LABELS[brief.project_type as string] ?? brief.project_type

  const answersHtml = Object.entries(answers)
    .filter(([, v]) => v?.trim())
    .map(([k, v]) => {
      const label = QUESTION_LABELS[k] ?? k
      return `
        <tr>
          <td style="padding:10px 16px;color:#666;font-size:13px;vertical-align:top;width:38%;border-bottom:1px solid rgba(255,255,255,0.04)">${label}</td>
          <td style="padding:10px 16px;color:#e0e0e0;font-size:13px;border-bottom:1px solid rgba(255,255,255,0.04)">${String(v).replace(/\n/g, '<br/>')}</td>
        </tr>`
    })
    .join('')

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
      Бриф #${briefId} · ${new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
    </p>
  </div>
</body>
</html>`

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    connectionTimeout: 10000,
    socketTimeout: 15000,
    auth: { user: EMAIL_USER, pass: EMAIL_PASSWORD }
  })

  await transporter.sendMail({
    from: `"Бриф" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    subject: `Бриф: ${projectLabel} — ${brief.first_name} ${brief.last_name}`,
    html
  })
  console.log('[brief] email sent to', EMAIL_USER)
}

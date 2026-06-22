import { NextRequest, NextResponse } from 'next/server'
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

export async function POST(req: NextRequest) {
  await ensureTables()
  const { briefId, login } = await req.json()

  const { rows: briefs } = await db.query(
    'SELECT b.*, u.login, u.first_name, u.last_name FROM briefs b JOIN brief_users u ON b.user_id = u.id WHERE b.id = $1',
    [briefId]
  )
  if (!briefs[0]) return NextResponse.json({ error: 'brief not found' }, { status: 404 })
  const brief = briefs[0]

  await db.query('UPDATE briefs SET submitted = true, updated_at = NOW() WHERE id = $1', [briefId])

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const BRIEF_EMAIL = process.env.BRIEF_EMAIL ?? 'vronskyvitaly@mail.ru'

  if (RESEND_API_KEY) {
    const answers = brief.answers as Record<string, string>
    const answersHtml = Object.entries(answers)
      .filter(([, v]) => v?.trim())
      .map(
        ([k, v]) =>
          `<tr>
            <td style="padding:8px 12px;color:#888;font-size:13px;vertical-align:top">${k}</td>
            <td style="padding:8px 12px;color:#f0f0f0;font-size:13px">${String(v).replace(/\n/g, '<br/>')}</td>
          </tr>`
      )
      .join('')

    const html = `<!DOCTYPE html>
<html>
<body style="background:#0a0a0a;font-family:sans-serif;margin:0;padding:32px">
  <div style="max-width:600px;margin:0 auto">
    <div style="background:linear-gradient(135deg,#7d2cc8,#0070f3);border-radius:16px;padding:24px 32px;margin-bottom:24px">
      <h1 style="color:white;margin:0;font-size:22px">Новый бриф</h1>
      <p style="color:rgba(255,255,255,0.75);margin:8px 0 0;font-size:15px">
        ${brief.first_name} ${brief.last_name} · @${brief.login}
      </p>
    </div>
    <div style="background:#111;border-radius:16px;padding:24px;border:1px solid rgba(255,255,255,0.06)">
      <p style="color:#555;font-size:11px;text-transform:uppercase;margin:0 0 8px">Тип проекта</p>
      <p style="color:#f0f0f0;font-size:18px;font-weight:600;margin:0 0 24px">${PROJECT_LABELS[brief.project_type] ?? brief.project_type}</p>
      <table style="width:100%;border-collapse:collapse">${answersHtml}</table>
    </div>
  </div>
</body>
</html>`

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'brief@vitalyvronsky.ru',
        to: BRIEF_EMAIL,
        subject: `Бриф: ${PROJECT_LABELS[brief.project_type] ?? brief.project_type} — ${brief.first_name} ${brief.last_name}`,
        html
      })
    })
  }

  return NextResponse.json({ ok: true })
}

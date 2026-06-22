import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

const PROJECT_LABELS: Record<string, string> = {
  site: 'Сайт / лендинг',
  bot: 'Telegram-бот',
  automation: 'Автоматизация бизнеса',
  ai: 'Внедрение ИИ',
  webapp: 'Веб-приложение',
  other: 'Другое'
}

export async function POST(req: NextRequest) {
  const { login, projectType, answers } = await req.json()

  const user = await prisma.briefUser.findUnique({ where: { login } })
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })

  // Пометить бриф как отправленный
  await prisma.brief.updateMany({
    where: { userId: user.id, submitted: false },
    data: { submitted: true, projectType, answers }
  })

  // Отправить email
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const BRIEF_EMAIL = process.env.BRIEF_EMAIL ?? 'vronskyvitaly@mail.ru'

  if (RESEND_API_KEY) {
    const answersHtml = Object.entries(answers as Record<string, string>)
      .filter(([, v]) => v?.trim())
      .map(
        ([k, v]) =>
          `<tr>
            <td style="padding:8px 12px;color:#888;font-size:13px;vertical-align:top;white-space:nowrap">${k}</td>
            <td style="padding:8px 12px;color:#f0f0f0;font-size:13px">${v.replace(/\n/g, '<br/>')}</td>
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
        ${user.firstName} ${user.lastName} · @${user.login}
      </p>
    </div>
    <div style="background:#111;border-radius:16px;padding:24px;border:1px solid rgba(255,255,255,0.06)">
      <p style="color:#555;font-size:11px;text-transform:uppercase;letter-spacing:.1em;margin:0 0 8px">Тип проекта</p>
      <p style="color:#f0f0f0;font-size:18px;font-weight:600;margin:0 0 24px">${PROJECT_LABELS[projectType] ?? projectType}</p>
      <table style="width:100%;border-collapse:collapse">
        ${answersHtml}
      </table>
    </div>
  </div>
</body>
</html>`

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'brief@vitalyvronsky.ru',
        to: BRIEF_EMAIL,
        subject: `Бриф: ${PROJECT_LABELS[projectType] ?? projectType} — ${user.firstName} ${user.lastName}`,
        html
      })
    })
  }

  return NextResponse.json({ ok: true })
}

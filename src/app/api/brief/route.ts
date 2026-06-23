import { NextRequest, NextResponse } from 'next/server'
import { db, ensureTables } from '@/lib/db'
import { transporter, briefOptions } from '@/common/helpers/send-mail'

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

  await transporter().sendMail(briefOptions(brief, briefId))
  console.log('[brief] email sent to', EMAIL_USER)
}

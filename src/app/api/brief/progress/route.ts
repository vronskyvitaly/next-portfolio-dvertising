import { NextRequest, NextResponse } from 'next/server'
import { db, ensureTables } from '@/lib/db'

// POST — создать новый бриф
export async function POST(req: NextRequest) {
  await ensureTables()
  const { email, projectType } = await req.json()

  const { rows: users } = await db.query('SELECT id FROM brief_users WHERE email = $1', [email])
  if (!users[0]) return NextResponse.json({ error: 'user not found' }, { status: 404 })

  const { rows } = await db.query(
    'INSERT INTO briefs (user_id, project_type, answers) VALUES ($1, $2, $3) RETURNING id',
    [users[0].id, projectType, '{}']
  )
  return NextResponse.json({ briefId: rows[0].id })
}

// DELETE — удалить неотправленный бриф
export async function DELETE(req: NextRequest) {
  await ensureTables()
  const { briefId } = await req.json()
  if (!briefId) return NextResponse.json({ error: 'briefId required' }, { status: 400 })

  await db.query('DELETE FROM briefs WHERE id = $1 AND submitted = false', [briefId])
  return NextResponse.json({ ok: true })
}

// PUT — обновить бриф (ответы или статус архива)
export async function PUT(req: NextRequest) {
  await ensureTables()
  const body = await req.json()
  const { briefId } = body
  if (!briefId) return NextResponse.json({ error: 'briefId required' }, { status: 400 })

  if (typeof body.archived === 'boolean') {
    await db.query('UPDATE briefs SET archived = $1, updated_at = NOW() WHERE id = $2', [body.archived, briefId])
  } else {
    const { projectType, answers } = body
    await db.query(
      'UPDATE briefs SET project_type = $1, answers = $2, updated_at = NOW() WHERE id = $3',
      [projectType, JSON.stringify(answers), briefId]
    )
  }
  return NextResponse.json({ ok: true })
}

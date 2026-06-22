import { NextRequest, NextResponse } from 'next/server'
import { db, ensureTables } from '@/lib/db'

// POST — создать новый бриф
export async function POST(req: NextRequest) {
  await ensureTables()
  const { login, projectType } = await req.json()

  const { rows: users } = await db.query('SELECT id FROM brief_users WHERE login = $1', [login])
  if (!users[0]) return NextResponse.json({ error: 'user not found' }, { status: 404 })

  const { rows } = await db.query(
    'INSERT INTO briefs (user_id, project_type, answers) VALUES ($1, $2, $3) RETURNING id',
    [users[0].id, projectType, '{}']
  )
  return NextResponse.json({ briefId: rows[0].id })
}

// PUT — обновить существующий бриф
export async function PUT(req: NextRequest) {
  await ensureTables()
  const { briefId, projectType, answers } = await req.json()
  if (!briefId) return NextResponse.json({ error: 'briefId required' }, { status: 400 })

  await db.query(
    'UPDATE briefs SET project_type = $1, answers = $2, updated_at = NOW() WHERE id = $3',
    [projectType, JSON.stringify(answers), briefId]
  )
  return NextResponse.json({ ok: true })
}

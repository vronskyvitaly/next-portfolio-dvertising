import { NextRequest, NextResponse } from 'next/server'
import { db, ensureTables } from '@/lib/db'

export async function PUT(req: NextRequest) {
  await ensureTables()
  const { login, projectType, answers } = await req.json()

  const { rows: users } = await db.query('SELECT id FROM brief_users WHERE login = $1', [login])
  if (!users[0]) return NextResponse.json({ error: 'user not found' }, { status: 404 })
  const userId = users[0].id

  const { rows: existing } = await db.query(
    'SELECT id FROM briefs WHERE user_id = $1 AND submitted = false',
    [userId]
  )

  if (existing[0]) {
    await db.query(
      'UPDATE briefs SET project_type = $1, answers = $2, updated_at = NOW() WHERE id = $3',
      [projectType, JSON.stringify(answers), existing[0].id]
    )
  } else {
    await db.query(
      'INSERT INTO briefs (user_id, project_type, answers) VALUES ($1, $2, $3)',
      [userId, projectType, JSON.stringify(answers)]
    )
  }

  return NextResponse.json({ ok: true })
}

export async function GET(req: NextRequest) {
  await ensureTables()
  const login = req.nextUrl.searchParams.get('login')
  if (!login) return NextResponse.json({ error: 'login required' }, { status: 400 })

  const { rows: users } = await db.query('SELECT * FROM brief_users WHERE login = $1', [login])
  if (!users[0]) return NextResponse.json({ user: null })

  const u = users[0]
  const { rows: briefs } = await db.query(
    'SELECT * FROM briefs WHERE user_id = $1 AND submitted = false ORDER BY updated_at DESC LIMIT 1',
    [u.id]
  )

  return NextResponse.json({
    user: { login: u.login, firstName: u.first_name, lastName: u.last_name },
    brief: briefs[0] ?? null
  })
}

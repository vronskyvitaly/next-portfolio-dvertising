import { NextRequest, NextResponse } from 'next/server'
import { db, ensureTables } from '@/lib/db'

// POST — проверить или создать пользователя
export async function POST(req: NextRequest) {
  await ensureTables()
  const { login, firstName, lastName } = await req.json()
  if (!login) return NextResponse.json({ error: 'login required' }, { status: 400 })

  const { rows } = await db.query('SELECT * FROM brief_users WHERE login = $1', [login])
  const existing = rows[0] ?? null

  if (!firstName) {
    return NextResponse.json({ exists: !!existing, user: existing ?? null })
  }

  if (existing) return NextResponse.json({ error: 'login_taken' }, { status: 409 })

  const { rows: created } = await db.query(
    'INSERT INTO brief_users (login, first_name, last_name) VALUES ($1, $2, $3) RETURNING *',
    [login, firstName, lastName]
  )
  return NextResponse.json({ user: created[0] })
}

// GET — пользователь + все его брифы
export async function GET(req: NextRequest) {
  await ensureTables()
  const login = req.nextUrl.searchParams.get('login')
  if (!login) return NextResponse.json({ error: 'login required' }, { status: 400 })

  const { rows: users } = await db.query('SELECT * FROM brief_users WHERE login = $1', [login])
  if (!users[0]) return NextResponse.json({ user: null, briefs: [] })

  const u = users[0]
  const { rows: briefs } = await db.query(
    'SELECT * FROM briefs WHERE user_id = $1 ORDER BY updated_at DESC',
    [u.id]
  )

  return NextResponse.json({
    user: { id: u.id, login: u.login, firstName: u.first_name, lastName: u.last_name },
    briefs
  })
}

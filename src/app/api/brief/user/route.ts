import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { db, ensureTables } from '@/lib/db'

// POST — войти или зарегистрироваться
export async function POST(req: NextRequest) {
  await ensureTables()
  const { email, password, firstName, lastName } = await req.json()
  if (!email || !password) return NextResponse.json({ error: 'email and password required' }, { status: 400 })

  const { rows } = await db.query('SELECT * FROM brief_users WHERE email = $1', [email])
  const existing = rows[0] ?? null

  // Режим входа (firstName не передан)
  if (!firstName) {
    if (!existing) return NextResponse.json({ exists: false })
    const valid = await bcrypt.compare(password, existing.password_hash)
    if (!valid) return NextResponse.json({ error: 'invalid_password' }, { status: 401 })
    return NextResponse.json({
      exists: true,
      user: { id: existing.id, email: existing.email, firstName: existing.first_name, lastName: existing.last_name }
    })
  }

  // Режим регистрации
  if (existing) return NextResponse.json({ error: 'email_taken' }, { status: 409 })
  const hash = await bcrypt.hash(password, 10)
  const { rows: created } = await db.query(
    'INSERT INTO brief_users (email, password_hash, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
    [email, hash, firstName, lastName ?? '']
  )
  const u = created[0]
  return NextResponse.json({
    user: { id: u.id, email: u.email, firstName: u.first_name, lastName: u.last_name }
  })
}

// GET — пользователь + все его брифы
export async function GET(req: NextRequest) {
  await ensureTables()
  const email = req.nextUrl.searchParams.get('email')
  if (!email) return NextResponse.json({ error: 'email required' }, { status: 400 })

  const { rows: users } = await db.query('SELECT * FROM brief_users WHERE email = $1', [email])
  if (!users[0]) return NextResponse.json({ user: null, briefs: [] })

  const u = users[0]
  const { rows: briefs } = await db.query(
    'SELECT * FROM briefs WHERE user_id = $1 ORDER BY updated_at DESC',
    [u.id]
  )
  return NextResponse.json({
    user: { id: u.id, email: u.email, firstName: u.first_name, lastName: u.last_name },
    briefs
  })
}

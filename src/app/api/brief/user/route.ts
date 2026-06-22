import { NextRequest, NextResponse } from 'next/server'
import { db, ensureTables } from '@/lib/db'

export async function POST(req: NextRequest) {
  await ensureTables()
  const { login, firstName, lastName } = await req.json()

  if (!login) return NextResponse.json({ error: 'login required' }, { status: 400 })

  const { rows } = await db.query('SELECT * FROM brief_users WHERE login = $1', [login])
  const existing = rows[0] ?? null

  // Только проверка существования (без имени)
  if (!firstName) {
    return NextResponse.json({ exists: !!existing, user: existing ?? null })
  }

  // Регистрация — логин занят
  if (existing) {
    return NextResponse.json({ error: 'login_taken' }, { status: 409 })
  }

  const { rows: created } = await db.query(
    'INSERT INTO brief_users (login, first_name, last_name) VALUES ($1, $2, $3) RETURNING *',
    [login, firstName, lastName]
  )

  return NextResponse.json({ user: created[0] })
}

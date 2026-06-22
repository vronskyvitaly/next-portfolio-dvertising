import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// POST /api/brief/user — проверить или создать пользователя
export async function POST(req: NextRequest) {
  const { login, firstName, lastName } = await req.json()

  if (!login) return NextResponse.json({ error: 'login required' }, { status: 400 })

  const existing = await prisma.briefUser.findUnique({ where: { login } })

  // Логин уже занят — только проверяем (без имени)
  if (!firstName) {
    return NextResponse.json({ exists: !!existing, user: existing ?? null })
  }

  // Регистрация нового пользователя
  if (existing) {
    return NextResponse.json({ error: 'login_taken' }, { status: 409 })
  }

  const user = await prisma.briefUser.create({
    data: { login, firstName, lastName }
  })

  return NextResponse.json({ user })
}

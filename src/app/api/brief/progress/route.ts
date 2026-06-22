import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// PUT /api/brief/progress — сохранить или обновить прогресс
export async function PUT(req: NextRequest) {
  const { login, projectType, answers } = await req.json()

  const user = await prisma.briefUser.findUnique({ where: { login } })
  if (!user) return NextResponse.json({ error: 'user not found' }, { status: 404 })

  // Найти незавершённый бриф или создать новый
  let brief = await prisma.brief.findFirst({
    where: { userId: user.id, submitted: false }
  })

  if (brief) {
    brief = await prisma.brief.update({
      where: { id: brief.id },
      data: { projectType, answers }
    })
  } else {
    brief = await prisma.brief.create({
      data: { userId: user.id, projectType, answers }
    })
  }

  return NextResponse.json({ brief })
}

// GET /api/brief/progress?login=xxx — загрузить сохранённый прогресс
export async function GET(req: NextRequest) {
  const login = req.nextUrl.searchParams.get('login')
  if (!login) return NextResponse.json({ error: 'login required' }, { status: 400 })

  const user = await prisma.briefUser.findUnique({
    where: { login },
    include: {
      briefs: {
        where: { submitted: false },
        orderBy: { updatedAt: 'desc' },
        take: 1
      }
    }
  })

  if (!user) return NextResponse.json({ user: null })

  return NextResponse.json({
    user: {
      login: user.login,
      firstName: user.firstName,
      lastName: user.lastName
    },
    brief: user.briefs[0] ?? null
  })
}

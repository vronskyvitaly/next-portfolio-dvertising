import type { Metadata } from 'next'
import { ROUTES } from '@/config/routes'

export const metadata: Metadata = {
  title: 'Описать проект — заполните бриф',
  description:
    'Расскажите о своём проекте — создайте бриф за несколько минут. Сайт, бот, автоматизация или внедрение ИИ: опишите задачу и получите предложение.',
  alternates: { canonical: ROUTES.brief },
  robots: { index: false, follow: false }
}

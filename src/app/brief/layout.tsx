import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Описать проект — заполните бриф',
  description:
    'Расскажите о своём проекте — создайте бриф за несколько минут. Сайт, бот, автоматизация или внедрение ИИ: опишите задачу и получите предложение.',
  alternates: { canonical: '/brief' },
  robots: { index: false, follow: false }
}

export default function BriefLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

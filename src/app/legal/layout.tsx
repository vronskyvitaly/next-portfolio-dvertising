import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Юридические документы — Виталий Вронский',
  description:
    'Политика конфиденциальности, согласие на обработку персональных данных, политика cookie и пользовательское соглашение.',
  robots: { index: true, follow: true }
}

export default function LegalLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}

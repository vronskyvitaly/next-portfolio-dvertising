import type { Metadata } from 'next'
import { ROUTES } from '@/config/routes'

export const metadata: Metadata = {
  title: 'Юридические документы — Виталий Вронский',
  description:
    'Политика конфиденциальности, согласие на обработку персональных данных, политика cookie и пользовательское соглашение.',
  alternates: { canonical: ROUTES.legal },
  robots: { index: true, follow: true }
}

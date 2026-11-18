import type { Metadata, Viewport } from 'next'
import { SITE_URL } from '@/config/contacts'

export const metadata: Metadata = {
  title: 'Виталий Вронский — разработка сайтов и автоматизация бизнеса',
  description:
    'Разрабатываю сайты и веб-приложения, автоматизирую бизнес-процессы, внедряю ИИ. Работаю в Москве и Санкт-Петербурге.',
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '120x120', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.png'
  }
}

// Масштабирование не ограничиваем: запрет зума — это минус в доступности
// и в Lighthouse. Авто-зум на iOS уже погашен через font-size: 16px в globals.css.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a'
}

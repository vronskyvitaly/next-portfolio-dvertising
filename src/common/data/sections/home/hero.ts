import { BLOG_ROUTES, ROUTES, SERVICE_ROUTES } from '@/config/routes'

export interface HeroService {
  icon: string
  label: string
  href?: string
}

export const services: HeroService[] = [
  { icon: '🌐', label: 'Сайты', href: ROUTES.services },
  { icon: '🛒', label: 'Интернет-магазины', href: SERVICE_ROUTES.shop },
  { icon: '⚙️', label: 'Веб-приложения', href: SERVICE_ROUTES.webApp },
  { icon: '📱', label: 'Мобильные приложения' },
  { icon: '💬', label: 'Telegram-боты' },
  { icon: '🤖', label: 'AI-ассистенты' },
  { icon: '🔗', label: 'Интеграция CRM' },
  {
    icon: '🎓',
    label: 'Обучение Битрикс24 и amoCRM',
    href: BLOG_ROUTES.obuchenieRaboteVBitrix24IAmocrm
  },
  { icon: '⚡', label: 'Автоматизация бизнеса' }
]

export const stats = [
  { value: '5+', label: 'лет опыта', accent: false },
  { value: '✓', label: 'работаю по договору', accent: true },
  { value: '30+', label: 'проектов', accent: false }
]

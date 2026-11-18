import { ogImages } from '@/lib/og'
import coverImage from './ai-business-cover.webp'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'

export { coverImage }

export const PUBLISHED = '2026-10-21'

export const URL_PATH = BLOG_ROUTES.vnedrenieIiVBiznes

export const FULL_URL = absoluteUrl(URL_PATH)

export const TITLE = 'Внедрение ИИ в бизнес: пошаговый план, сроки и стоимость'

export const COVER_ALT =
  'Внедрение ИИ в бизнес: схема от аудита процессов до ИИ-агента, подключённого к CRM и мессенджерам'

export const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

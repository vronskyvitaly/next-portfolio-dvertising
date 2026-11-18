import { ogImages } from '@/lib/og'
import coverImage from './ii-dlya-sozdaniya-sajta-besplatno.webp'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'

export { coverImage }

export const PUBLISHED = '2026-11-17'

export const URL_PATH = BLOG_ROUTES.iiDlyaSozdaniyaSajtaBesplatno

export const FULL_URL = absoluteUrl(URL_PATH)

export const TITLE =
  'ИИ для создания сайта бесплатно: как сделать сайт с Claude'

export const DESCRIPTION =
  'ИИ для создания сайта бесплатно: что умеет Claude без подписки, сколько стоит Pro, где делать картинки и что нужно кроме нейросети. Консультация бесплатно.'

export const COVER_ALT =
  'Владелец небольшого бизнеса собирает страницу сайта на ноутбуке с помощью нейросети'

export const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

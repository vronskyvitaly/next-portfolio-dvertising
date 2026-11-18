import { ogImages } from '@/lib/og'
import coverImage from './trendy-avtomatizacii-biznesa-2026.webp'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'

export { coverImage }

export const PUBLISHED = '2026-11-10'

export const URL_PATH = BLOG_ROUTES.trendyAvtomatizaciiBiznesa2026

export const FULL_URL = absoluteUrl(URL_PATH)

export const TITLE =
  'Тренды автоматизации бизнеса 2026: что работает, а что пока рано'

export const DESCRIPTION =
  'Тренды автоматизации бизнеса 2026 простыми словами: шесть направлений, кому они подходят, что пока рано, цены и бесплатная консультация по вашей задаче.'

export const COVER_ALT =
  'Владелец небольшого бизнеса у ноутбука разбирает, какие процессы стоит автоматизировать'

export const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

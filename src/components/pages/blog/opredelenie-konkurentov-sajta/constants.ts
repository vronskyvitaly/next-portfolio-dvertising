import { ogImages } from '@/lib/og'
import coverImage from './seo-competitor-analysis.webp'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'

export { coverImage }

export const PUBLISHED = '2026-10-19'

export const URL_PATH = BLOG_ROUTES.opredelenieKonkurentovSajta

export const FULL_URL = absoluteUrl(URL_PATH)

export const TITLE =
  'Определение основных конкурентов сайта: анализ поисковых запросов'

export const COVER_ALT =
  'Анализ поисковых конкурентов: лупа над выдачей, пересечение запросов и план новой страницы'

export const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

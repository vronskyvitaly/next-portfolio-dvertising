import { ogImages } from '@/lib/og'
import coverImage from './indeksaciya-sajta.webp'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'

export { coverImage }

export const PUBLISHED = '2026-11-09'

export const URL_PATH = BLOG_ROUTES.indeksaciyaSajta

export const FULL_URL = absoluteUrl(URL_PATH)

export const TITLE =
  'Индексация сайта: как проверить и ускорить в Яндексе и Google'

export const COVER_ALT =
  'Иллюстрация к статье об индексации сайта: страницы попадают в поисковый индекс'

export const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

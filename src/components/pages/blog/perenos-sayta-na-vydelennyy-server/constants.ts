import { ogImages } from '@/lib/og'
import coverImage from './perenos-sayta-na-vydelennyy-server.webp'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'

export { coverImage }

export const PUBLISHED = '2026-11-06'

export const URL_PATH = BLOG_ROUTES.perenosSaytaNaVydelennyyServer

export const FULL_URL = absoluteUrl(URL_PATH)

export const TITLE =
  'Как защитить сайт, если хостинг взломают: перенос на выделенный сервер'

export const COVER_ALT =
  'Схема разнесения: сервер с сайтами, резервные копии в другом хранилище и домен у отдельного регистратора'

export const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

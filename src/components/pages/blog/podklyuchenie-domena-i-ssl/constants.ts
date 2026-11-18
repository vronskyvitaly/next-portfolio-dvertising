import { ogImages } from '@/lib/og'
import coverImage from './podklyuchenie-domena-i-ssl.webp'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'

export { coverImage }

export const PUBLISHED = '2026-11-09'

export const URL_PATH = BLOG_ROUTES.podklyuchenieDomenaISsl

export const FULL_URL = absoluteUrl(URL_PATH)

export const TITLE =
  'Подключение домена и SSL-сертификата: инструкция для владельца сайта'

export const DESCRIPTION =
  'Как подключить домен к сайту и включить SSL-сертификат без разработчика: шаги, частые ошибки и подключение свободного домена и SSL-сертификат в подарок.'

export const COVER_ALT =
  'Домен подключается к сайту, защищённому SSL-сертификатом'

export const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

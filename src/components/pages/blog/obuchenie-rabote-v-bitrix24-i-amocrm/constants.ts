import { ogImages } from '@/lib/og'
import coverImage from './obuchenie-rabote-v-bitrix24-i-amocrm.webp'
import { BLOG_ROUTES, absoluteUrl } from '@/config/routes'

export { coverImage }

export const PUBLISHED = '2026-11-16'

export const URL_PATH = BLOG_ROUTES.obuchenieRaboteVBitrix24IAmocrm

export const FULL_URL = absoluteUrl(URL_PATH)

export const TITLE = 'Обучение сотрудников работе в Битрикс24 и amoCRM'

export const DESCRIPTION =
  'Обучение сотрудников работе в Битрикс24 и amoCRM: разбор настройки, программа для менеджеров, руководителей и администратора, инструкции. Консультация бесплатно.'

export const COVER_ALT =
  'Руководитель и менеджеры отдела продаж разбирают сделки в CRM на экране ноутбука'

export const coverOg = [
  {
    url: coverImage.src,
    width: coverImage.width,
    height: coverImage.height,
    alt: COVER_ALT
  },
  ...ogImages()
]

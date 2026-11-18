import { ROUTES } from '@/config/routes'

/**
 * Картинка для превью в соцсетях.
 *
 * Файловая конвенция opengraph-image применяется только к своему сегменту:
 * если страница объявляет свой `openGraph` в metadata, унаследованная
 * картинка не подставляется. Поэтому на таких страницах указываем её явно.
 *
 * Пути ведут на сгенерированные маршруты:
 *  - /opengraph-image                 → src/app/opengraph-image.tsx
 *  - /sozdanie-saytov/opengraph-image → src/app/sozdanie-saytov/opengraph-image.tsx
 */

export const OG_DEFAULT = '/opengraph-image'
export const OG_SERVICES = `${ROUTES.services}/opengraph-image`

export function ogImages(
  url: string = OG_DEFAULT,
  alt = 'Виталий Вронский — разработка сайтов и автоматизация бизнеса'
) {
  return [{ url, width: 1200, height: 630, alt }]
}

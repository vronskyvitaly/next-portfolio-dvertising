/**
 * Единый реестр внутренних путей сайта.
 *
 * Все ссылки, canonical, хлебные крошки, sitemap и JSON-LD берут пути отсюда,
 * а не прописывают строкой: опечатку в имени ключа поймает TypeScript,
 * а переименование раздела делается в одном месте.
 *
 * Слаги должны совпадать с реестрами: services.ts, niches.ts, posts.ts
 * и src/lib/legal/registry.ts.
 */

import { SITE_URL } from '@/config/contacts'

export const ROUTES = {
  home: '/',
  services: '/sozdanie-saytov',
  blog: '/blog',
  brief: '/brief',
  legal: '/legal'
} as const

export const servicePath = (slug: string) => `${ROUTES.services}/${slug}`
export const blogPath = (slug: string) => `${ROUTES.blog}/${slug}`
export const legalPath = (slug: string) => `${ROUTES.legal}/${slug}`

/** Полный адрес с доменом сайта: для canonical-ссылок, Open Graph и JSON-LD */
export const absoluteUrl = (path: string) => `${SITE_URL}${path}`

/** Типы сайтов: src/config/services.ts */
export const SERVICE_ROUTES = {
  lending: servicePath('lending'),
  corporate: servicePath('korporativnyy-sayt'),
  shop: servicePath('internet-magazin'),
  webApp: servicePath('veb-prilozhenie')
} as const

/** Отраслевые страницы: src/config/niches.ts */
export const NICHE_ROUTES = {
  dentistry: servicePath('sayt-dlya-stomatologii'),
  lawyer: servicePath('sayt-dlya-yurista'),
  construction: servicePath('sayt-dlya-stroitelnoy-kompanii'),
  beautySalon: servicePath('sayt-dlya-salona-krasoty')
} as const

/** Статьи блога: src/components/pages/blog/*, src/app/blog/* и src/config/posts.ts */
export const BLOG_ROUTES = {
  iiDlyaSozdaniyaSajtaBesplatno: blogPath('ii-dlya-sozdaniya-sajta-besplatno'),
  obuchenieRaboteVBitrix24IAmocrm: blogPath('obuchenie-rabote-v-bitrix24-i-amocrm'),
  trendyAvtomatizaciiBiznesa2026: blogPath('trendy-avtomatizacii-biznesa-2026'),
  podklyuchenieDomenaISsl: blogPath('podklyuchenie-domena-i-ssl'),
  indeksaciyaSajta: blogPath('indeksaciya-sajta'),
  perenosSaytaNaVydelennyyServer: blogPath('perenos-sayta-na-vydelennyy-server'),
  vnedrenieIiVBiznes: blogPath('vnedrenie-ii-v-biznes'),
  opredelenieKonkurentovSajta: blogPath('opredelenie-konkurentov-sajta'),
  analizSajtovKonkurentov: blogPath('analiz-sajtov-konkurentov'),
  sozdanieSajtovVMoskve: blogPath('sozdanie-sajtov-v-moskve'),
  zachemBiznesuSajt: blogPath('zachem-biznesu-sajt'),
  chtoTakoeApiSajta: blogPath('chto-takoe-api-sajta'),
  bitrix24IClaudeAvtomatizaciyaCrm: blogPath('bitrix24-i-claude-avtomatizaciya-crm'),
  telegramBotyDlyaBiznesa: blogPath('telegram-boty-dlya-biznesa'),
  sozdanieSajtovNadoZnat: blogPath('sozdanie-sajtov-nado-znat'),
  avtomatizaciyaBiznesa: blogPath('avtomatizaciya-biznesa'),
  kakUstanovitClaudeCode: blogPath('kak-ustanovit-claude-code')
} as const

/** Юридические документы: src/lib/legal/registry.ts */
export const LEGAL_ROUTES = {
  privacyPolicy: legalPath('privacy-policy'),
  personalDataConsent: legalPath('personal-data-consent'),
  cookiePolicy: legalPath('cookie-policy'),
  termsOfUse: legalPath('terms-of-use')
} as const

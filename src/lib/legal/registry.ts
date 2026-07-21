import type { ComponentType } from 'react'
import { siteConfig } from '@/config/site.config'
import { CookiePolicy } from '@/legal/cookie-policy'
import { PersonalDataConsent } from '@/legal/personal-data-consent'
import { PrivacyPolicy } from '@/legal/privacy-policy'
import { TermsOfUse } from '@/legal/terms-of-use'
import type { SiteLegalConfig } from './types'

export interface LegalDocument {
  slug: string
  title: string
  description: string
  Component: ComponentType<{ config: SiteLegalConfig }>
  basis: string
}

const ALL_DOCUMENTS: LegalDocument[] = [
  {
    slug: 'privacy-policy',
    title: 'Политика в отношении обработки персональных данных',
    description:
      'Порядок обработки персональных данных, цели, сроки хранения и права субъекта персональных данных.',
    Component: PrivacyPolicy,
    basis: 'ст. 18.1 152-ФЗ'
  },
  {
    slug: 'personal-data-consent',
    title: 'Согласие на обработку персональных данных',
    description:
      'Самостоятельный документ, на условиях которого посетитель даёт согласие на обработку своих данных.',
    Component: PersonalDataConsent,
    basis: 'ст. 9 152-ФЗ'
  },
  {
    slug: 'cookie-policy',
    title: 'Политика использования cookie-файлов',
    description:
      'Какие cookie использует сайт, зачем и как отозвать согласие на их установку.',
    Component: CookiePolicy,
    basis: 'ст. 9 152-ФЗ'
  },
  {
    slug: 'terms-of-use',
    title: 'Пользовательское соглашение',
    description:
      'Условия использования сайта, интеллектуальные права и ограничение ответственности.',
    Component: TermsOfUse,
    basis: 'ст. 435, 1286 ГК РФ'
  }
]

export function getLegalDocuments(config: SiteLegalConfig = siteConfig): LegalDocument[] {
  return ALL_DOCUMENTS
}

export function getLegalDocument(
  slug: string,
  config: SiteLegalConfig = siteConfig
): LegalDocument | undefined {
  return getLegalDocuments(config).find(doc => doc.slug === slug)
}

const PLACEHOLDER_PATTERN = /<[^<>]+>/

export function findPlaceholders(value: unknown, path = ''): string[] {
  if (typeof value === 'string') return PLACEHOLDER_PATTERN.test(value) ? [path] : []
  if (Array.isArray(value))
    return value.flatMap((item, index) => findPlaceholders(item, `${path}[${index}]`))
  if (value !== null && typeof value === 'object')
    return Object.entries(value).flatMap(([key, nested]) =>
      findPlaceholders(nested, path ? `${path}.${key}` : key)
    )
  return []
}

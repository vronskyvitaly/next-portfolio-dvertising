export type OperatorKind = 'legal-entity' | 'individual-entrepreneur' | 'individual'

export interface Operator {
  kind: OperatorKind
  fullName: string
  shortName: string
  inn: string
  ogrn: string | null
  kpp?: string | null
  legalAddress: string
  actualAddress: string
}

export interface Contacts {
  email: string
  privacyEmail: string
  phone: string
  postalAddress: string
}

export interface Site {
  domain: string
  url: string
  name: string
}

export interface RknNotification {
  submitted: boolean
  registryNumber: string | null
  registeredAt: string | null
}

export type LegalBasis =
  | 'consent'
  | 'contract'
  | 'legal-obligation'
  | 'legitimate-interest'
  | 'public-data'

export interface ProcessingPurpose {
  id: string
  title: string
  dataCategories: string[]
  legalBasis: LegalBasis
  retention: string
}

export interface Processor {
  name: string
  purpose: string
  dataCategories: string[]
  country: string
}

export type CookieCategory = 'essential' | 'analytics' | 'marketing' | 'preferences'

export interface CookieEntry {
  name: string
  category: CookieCategory
  provider: string
  purpose: string
  lifetime: string
}

export interface OfferTerms {
  enabled: boolean
  subject: string
  priceSource: string
  payment: string
  delivery: string
  refund: string
  bankDetails: {
    accountNumber: string
    bankName: string
    correspondentAccount: string
    bic: string
  } | null
}

export interface DocumentRevision {
  effectiveDate: string
  version: string
}

export interface SiteLegalConfig {
  operator: Operator
  contacts: Contacts
  site: Site
  rkn: RknNotification
  dataLocalizedInRussia: boolean
  crossBorderTransfer: { enabled: boolean; countries: string[] }
  dataSubjects: string[]
  purposes: ProcessingPurpose[]
  processors: Processor[]
  cookies: CookieEntry[]
  offer: OfferTerms
  revisions: Record<string, DocumentRevision>
}

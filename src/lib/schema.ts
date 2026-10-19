import { contacts, SITE_URL } from '@/config/contacts'
import { siteConfig } from '@/config/site.config'
import type { NicheType } from '@/config/niches'
import type { ServiceFaqItem, ServiceType } from '@/config/services'

/**
 * Сборка JSON-LD. Идентификаторы узлов стабильные (`#person`, `#organization`),
 * чтобы страницы могли ссылаться на них через `{ '@id': ... }` вместо дублирования.
 */

export const PERSON_ID = `${SITE_URL}/#person`
export const ORGANIZATION_ID = `${SITE_URL}/#organization`

type Node = Record<string, unknown>

export function graph(...nodes: (Node | null | undefined)[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter((node): node is Node => Boolean(node))
  }
}

export function personNode(): Node {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Виталий Вронский',
    jobTitle: 'Разработчик и специалист по автоматизации бизнеса',
    url: SITE_URL,
    telephone: contacts.phone,
    email: contacts.email,
    sameAs: [contacts.telegram, contacts.portfolio],
    knowsAbout: [
      'Создание сайтов',
      'Разработка сайтов под ключ',
      'Веб-приложения',
      'Интернет-магазины',
      'Автоматизация бизнеса',
      'Внедрение искусственного интеллекта',
      'Telegram-боты',
      'Next.js',
      'React'
    ]
  }
}

/**
 * Organization отдельно от Person: поисковики используют её для панели
 * организации, реквизитов и контактов. taxID берётся из юридического конфига.
 */
export function organizationNode(): Node {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: siteConfig.site.name,
    legalName: siteConfig.operator.fullName,
    url: SITE_URL,
    taxID: siteConfig.operator.inn,
    telephone: contacts.phone,
    email: contacts.email,
    founder: { '@id': PERSON_ID },
    sameAs: [contacts.telegram, contacts.portfolio],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: contacts.phone,
      email: contacts.email,
      availableLanguage: 'Russian',
      url: contacts.telegram
    }
  }
}

export function breadcrumbNode(
  items: { name: string; path: string }[],
  id: string
): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  }
}

export function faqNode(faq: ServiceFaqItem[], id: string): Node {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faq.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  }
}

/** Offer с реальной ценой — коммерческий фактор, который поисковики читают */
export function serviceOfferNode(service: ServiceType): Node {
  const url = `${SITE_URL}/sozdanie-saytov/${service.slug}`

  return {
    '@type': 'Offer',
    '@id': `${url}#offer`,
    url,
    name: service.name,
    price: service.priceFrom,
    priceCurrency: 'RUB',
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: service.priceFrom,
      priceCurrency: 'RUB'
    },
    availability: 'https://schema.org/InStock',
    itemOffered: {
      '@type': 'Service',
      name: service.h1,
      description: service.purpose,
      serviceType: service.name,
      provider: { '@id': PERSON_ID },
      areaServed: { '@type': 'Country', name: 'Россия' }
    }
  }
}

/** Отраслевая страница: Service с ценой базовой услуги */
export function nicheServiceNode(
  niche: NicheType,
  baseService: ServiceType
): Node {
  const url = `${SITE_URL}/sozdanie-saytov/${niche.slug}`

  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: niche.h1,
    description: niche.purpose,
    serviceType: niche.name,
    url,
    provider: { '@id': PERSON_ID },
    areaServed: { '@type': 'Country', name: 'Россия' },
    offers: {
      '@type': 'Offer',
      url,
      price: baseService.priceFrom,
      priceCurrency: 'RUB',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: baseService.priceFrom,
        priceCurrency: 'RUB'
      },
      availability: 'https://schema.org/InStock'
    }
  }
}

export function serviceCatalogNode(services: ServiceType[]): Node {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}/sozdanie-saytov#service`,
    name: 'Создание сайтов под ключ',
    description:
      'Разработка лендингов, корпоративных сайтов, интернет-магазинов и веб-приложений под ключ. Фиксированный состав работ и сроки в договоре.',
    serviceType: 'Разработка сайтов',
    url: `${SITE_URL}/sozdanie-saytov`,
    provider: { '@id': PERSON_ID },
    areaServed: [
      { '@type': 'Country', name: 'Россия' },
      { '@type': 'City', name: 'Москва' },
      { '@type': 'City', name: 'Санкт-Петербург' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Типы сайтов',
      itemListElement: services.map(serviceOfferNode)
    }
  }
}

/**
 * Узел главной страницы. Каталог предложений собирается из реестра услуг,
 * поэтому цены в разметке всегда совпадают с ценами на страницах.
 */
export function professionalServiceNode(services: ServiceType[]): Node {
  const unpricedServices = [
    {
      name: 'Автоматизация бизнеса',
      description:
        'Освобождение сотрудников от рутины: документооборот, отчёты, интеграции между системами.'
    },
    {
      name: 'Внедрение ИИ в организации',
      description:
        'Интеграция ИИ-ассистентов в рабочие процессы: обработка заявок, анализ данных, поддержка клиентов.'
    },
    {
      name: 'Telegram-боты для бизнеса',
      description:
        'Приём заявок, ответы на типовые вопросы и уведомления в мессенджере круглосуточно.'
    }
  ]

  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: siteConfig.site.name,
    description:
      'Создание сайтов и веб-приложений под ключ, автоматизация бизнес-процессов, внедрение ИИ в организации, разработка Telegram-ботов.',
    url: SITE_URL,
    telephone: contacts.phone,
    email: contacts.email,
    provider: { '@id': PERSON_ID },
    parentOrganization: { '@id': ORGANIZATION_ID },
    areaServed: [
      { '@type': 'Country', name: 'Россия' },
      { '@type': 'City', name: 'Москва' },
      { '@type': 'City', name: 'Санкт-Петербург' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Услуги',
      itemListElement: [
        ...services.map(serviceOfferNode),
        ...unpricedServices.map(service => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: { '@id': PERSON_ID }
          }
        }))
      ]
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: contacts.phone,
      email: contacts.email,
      availableLanguage: 'Russian',
      url: contacts.telegram
    }
  }
}

export function itemListNode(
  items: { name: string; path: string }[],
  id: string
): Node {
  return {
    '@type': 'ItemList',
    '@id': id,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`
    }))
  }
}

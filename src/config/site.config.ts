import type { SiteLegalConfig } from '@/lib/legal/types'

export const siteConfig: SiteLegalConfig = {
  operator: {
    kind: 'individual',
    fullName: 'Вронский Виталий Федорович',
    shortName: 'Вронский В.Ф.',
    inn: '505029904347',
    ogrn: null,
    kpp: null,
    legalAddress:
      '142072, город Домодедово, микрорайон Востряково, улица Донская, дом 1, квартира 251',
    actualAddress:
      'город Домодедово, микрорайон Востряково, улица Донская, дом 1, квартира 251'
  },

  contacts: {
    email: 'vronskyvitaly@gmail.com',
    privacyEmail: 'vronskyvitaly@gmail.com',
    phone: '+7 (925) 131-31-78',
    postalAddress:
      '142072, город Домодедово, микрорайон Востряково, улица Донская, дом 1, квартира 251'
  },

  site: {
    domain: 'vitalyvronsky.ru',
    url: 'https://vitalyvronsky.ru',
    name: 'Виталий Вронский — разработка и автоматизация'
  },

  rkn: {
    submitted: true,
    registryNumber: '100349765',
    registeredAt: '2026-07-13'
  },

  dataLocalizedInRussia: true,

  crossBorderTransfer: {
    enabled: true,
    countries: ['США (Google LLC — обработка почты через Gmail при ответе на обращения)']
  },

  dataSubjects: [
    'посетители Сайта',
    'пользователи, заполнившие форму брифа или направившие обращение через контактную форму Сайта'
  ],

  purposes: [
    {
      id: 'brief',
      title: 'Обработка брифов и обращений, направленных через формы Сайта',
      dataCategories: ['имя', 'адрес электронной почты', 'текст обращения', 'описание проекта'],
      legalBasis: 'consent',
      retention: '1 (один) год с даты последнего обращения субъекта'
    },
    {
      id: 'analytics',
      title: 'Анализ посещаемости Сайта и улучшение его работы',
      dataCategories: [
        'cookie-файлы',
        'IP-адрес',
        'данные о браузере и устройстве',
        'источник перехода',
        'действия на Сайте'
      ],
      legalBasis: 'consent',
      retention: '13 (тринадцать) месяцев с момента сбора'
    }
  ],

  processors: [
    {
      name: 'Coolify (VPS-хостинг, сервер в РФ)',
      purpose: 'размещение Сайта и хранение данных',
      dataCategories: ['все категории персональных данных, обрабатываемые на Сайте'],
      country: 'Российская Федерация'
    },
    {
      name: 'Google LLC (сервис Gmail)',
      purpose: 'доставка уведомлений об обращениях через форму обратной связи',
      dataCategories: ['имя', 'адрес электронной почты', 'текст обращения'],
      country: 'США'
    },
    {
      name: 'Яндекс (сервис Яндекс.Метрика)',
      purpose: 'анализ посещаемости и поведения пользователей на Сайте',
      dataCategories: ['cookie-файлы', 'IP-адрес', 'данные о браузере и устройстве'],
      country: 'Российская Федерация'
    }
  ],

  cookies: [
    {
      name: 'cookie_consent',
      category: 'essential',
      provider: 'Сайт',
      purpose: 'сохранение выбора посетителя в баннере согласия на cookie',
      lifetime: '12 месяцев'
    },
    {
      name: '_ym_uid, _ym_d, _ym_isad',
      category: 'analytics',
      provider: 'Яндекс Метрика',
      purpose: 'идентификация уникальных посетителей и сбор статистики',
      lifetime: '12 месяцев'
    }
  ],

  offer: {
    enabled: false,
    subject: 'разработка и сопровождение веб-приложений, Telegram-ботов и систем автоматизации',
    priceSource: 'разделе «Услуги» Сайта либо в счёте, выставленном Исполнителем',
    payment:
      '100% предоплата в течение 3 (трёх) банковских дней с момента выставления счёта',
    delivery:
      'услуги оказываются в сроки, согласованные Сторонами; результат передаётся в электронной форме',
    refund:
      'Заказчик вправе отказаться от исполнения договора до начала оказания услуг с возвратом внесённой оплаты; после начала оказания услуг возврату подлежит сумма за вычетом фактически понесённых Исполнителем расходов (ст. 782 ГК РФ)',
    bankDetails: null
  },

  revisions: {
    'privacy-policy': { effectiveDate: '2026-07-21', version: '1.0' },
    'personal-data-consent': { effectiveDate: '2026-07-21', version: '1.0' },
    'cookie-policy': { effectiveDate: '2026-07-21', version: '1.0' },
    'terms-of-use': { effectiveDate: '2026-07-21', version: '1.0' }
  }
}

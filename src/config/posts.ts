/**
 * Реестр статей блога — единственный источник списка публикаций.
 *
 * Из него строятся: src/components/Blog.tsx, /blog (индекс) и sitemap.ts.
 * Дата `published` должна совпадать с константой PUBLISHED внутри самой статьи.
 */

export interface BlogPost {
  slug: string
  /** ISO-дата публикации, совпадает с PUBLISHED в файле статьи */
  published: string
  tag: string
  tagColor: string
  tagBg: string
  tagText: string
  title: string
  excerpt: string
}

/** Отсортированы от новых к старым — в этом же порядке выводятся в списках */
const POSTS: BlogPost[] = [
  {
    slug: 'opredelenie-konkurentov-sajta',
    published: '2026-10-19',
    tag: 'SEO и конкуренты',
    tagColor: 'rgba(34,211,238,0.35)',
    tagBg: 'rgba(34,211,238,0.1)',
    tagText: '#22d3ee',
    title: 'Определение основных конкурентов сайта и анализ их запросов',
    excerpt:
      'Как найти тех, кто реально забирает ваш поисковый трафик, выгрузить их запросы, сравнить семантику и составить план новых страниц.'
  },
  {
    slug: 'analiz-sajtov-konkurentov',
    published: '2026-07-29',
    tag: 'Анализ конкурентов',
    tagColor: 'rgba(34,211,238,0.35)',
    tagBg: 'rgba(34,211,238,0.1)',
    tagText: '#22d3ee',
    title: 'Анализ сайтов конкурентов: подходы и инструменты',
    excerpt:
      'Как искать конкурентов, какие метрики и технические показатели смотреть, какими сервисами пользоваться и как выделить свой сайт среди конкурентов.'
  },
  {
    slug: 'sozdanie-sajtov-v-moskve',
    published: '2026-07-28',
    tag: 'Разработка сайтов',
    tagColor: 'rgba(251,191,36,0.35)',
    tagBg: 'rgba(251,191,36,0.1)',
    tagText: '#fbbf24',
    title: 'Создание сайтов под ключ: сколько стоит и как заказать сайт',
    excerpt:
      'Из чего складывается цена сайта, сколько занимает разработка по этапам и как выбрать подрядчика, чтобы не переплатить и не переделывать через полгода.'
  },
  {
    slug: 'zachem-biznesu-sajt',
    published: '2026-07-27',
    tag: 'Сайты для бизнеса',
    tagColor: 'rgba(244,114,182,0.35)',
    tagBg: 'rgba(244,114,182,0.1)',
    tagText: '#f9a8d4',
    title: 'Зачем бизнесу нужен сайт, если есть соцсети и маркетплейсы',
    excerpt:
      'Честный разбор: экономика лида, SEO как накопительный актив, интеграции с CRM и когда сайт бизнесу правда не нужен.'
  },
  {
    slug: 'chto-takoe-api-sajta',
    published: '2026-07-27',
    tag: 'API и интеграции',
    tagColor: 'rgba(16,185,129,0.35)',
    tagBg: 'rgba(16,185,129,0.1)',
    tagText: '#34d399',
    title: 'Что такое API сайта и для чего он нужен',
    excerpt:
      'Как программы общаются между собой, зачем это бизнесу, и какие вебхуки, лимиты и ключи скрываются за словом «интеграция».'
  },
  {
    slug: 'bitrix24-i-claude-avtomatizaciya-crm',
    published: '2026-07-21',
    tag: 'Автоматизация CRM',
    tagColor: 'rgba(251,146,60,0.35)',
    tagBg: 'rgba(251,146,60,0.1)',
    tagText: '#fb923c',
    title: 'Bitrix24 + Claude: автоматизация CRM без программиста',
    excerpt:
      'Как подключить Claude к Bitrix24 через MCP-сервер, автоматизировать сделки через Claude Code и создавать UI через Claude Design.'
  },
  {
    slug: 'telegram-boty-dlya-biznesa',
    published: '2026-07-07',
    tag: 'Telegram-боты',
    tagColor: 'rgba(0,136,204,0.35)',
    tagBg: 'rgba(0,136,204,0.1)',
    tagText: '#38b6e6',
    title: 'Telegram-бот для бизнеса: продаёт и отвечает 24/7',
    excerpt:
      'Что реально умеет Telegram-бот, какие задачи он закрывает лучше менеджера и когда его внедрение окупается за первый же месяц.'
  },
  {
    slug: 'sozdanie-sajtov-nado-znat',
    published: '2026-06-08',
    tag: 'Разработка',
    tagColor: 'rgba(0,112,243,0.35)',
    tagBg: 'rgba(0,112,243,0.1)',
    tagText: '#60a5fa',
    title: 'Создать сайт сейчас легко. Но это ещё не сайт.',
    excerpt:
      'No-code и ИИ-конструкторы дали всем возможность «сделать сайт». Разбираю, почему большинство таких сайтов не приносят клиентов — и что реально нужно знать.'
  },
  {
    slug: 'avtomatizaciya-biznesa',
    published: '2026-06-08',
    tag: 'Автоматизация',
    tagColor: 'rgba(125,44,200,0.35)',
    tagBg: 'rgba(125,44,200,0.1)',
    tagText: '#c084fc',
    title: 'Автоматизация бизнеса: как убрать рутину и сосредоточиться на росте',
    excerpt:
      'Разбираю, что реально можно автоматизировать прямо сейчас — от приёма заявок до аналитики. Инструменты, примеры и пошаговый старт.'
  },
  {
    slug: 'kak-ustanovit-claude-code',
    published: '2026-06-08',
    tag: 'Инструменты',
    tagColor: 'rgba(125,44,200,0.35)',
    tagBg: 'rgba(125,44,200,0.1)',
    tagText: '#c084fc',
    title: 'Как установить Claude Code и начать работать: простая инструкция',
    excerpt:
      'Пошаговая инструкция для Mac, Windows и Linux. Простым языком, без технических терминов — от скачивания до первого запроса.'
  }
]

export function getPosts(): BlogPost[] {
  return POSTS
}

export function getPostHref(post: BlogPost): string {
  return `/blog/${post.slug}`
}

export function formatPostDate(published: string): string {
  return new Date(published).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

import {
  PUBLISHED,
  FULL_URL
} from '@/components/pages/blog/kak-ustanovit-claude-code/constants'
import { SITE_URL } from '@/config/contacts'

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Как установить Claude Code и начать работать: простая инструкция',
  description:
    'Пошаговая инструкция по установке Claude Code для Mac, Windows и Linux. Простым языком, без технических терминов.',
  author: {
    '@type': 'Person',
    name: 'Виталий Вронский',
    url: SITE_URL
  },
  publisher: {
    '@type': 'Person',
    name: 'Виталий Вронский',
    url: SITE_URL
  },
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  url: FULL_URL,
  mainEntityOfPage: { '@type': 'WebPage', '@id': FULL_URL },
  inLanguage: 'ru',
  keywords:
    'установить claude code, claude code инструкция, claude code для начинающих, как пользоваться claude code'
}

export const faq = [
  {
    q: 'Claude Code платный?',
    a: 'Да — нужна подписка Claude Pro ($20/месяц) или API-ключ с оплатой по факту. Есть бесплатный пробный период. Для большинства задач API-ключ с оплатой за токены выходит дешевле подписки.'
  },
  {
    q: 'Нужно ли знать программирование, чтобы пользоваться Claude Code?',
    a: 'Не обязательно. Claude Code понимает обычный язык — вы просто описываете задачу, он разбирается, что нужно сделать. Но базовое понимание того, что такое файлы и папки, не помешает.'
  },
  {
    q: 'На каких языках можно общаться с Claude Code?',
    a: 'На любых — он отлично понимает русский. Можно писать запросы полностью на русском языке.'
  },
  {
    q: 'Claude Code портит файлы?',
    a: 'Перед изменениями он всегда показывает, что собирается сделать, и просит подтверждение. Если работаете с важными файлами — сделайте бэкап или используйте Git, тогда любое изменение можно откатить.'
  },
  {
    q: 'Чем Claude Code отличается от обычного Claude на сайте?',
    a: 'Claude на сайте — это чат в браузере. Claude Code работает прямо в вашем компьютере: видит файлы, папки, может их менять, запускать команды. Это полноценный помощник для работы с проектами.'
  }
]

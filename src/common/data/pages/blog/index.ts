import { getPosts } from '@/config/posts'
import { breadcrumbNode, graph, itemListNode, personNode } from '@/lib/schema'
import { ROUTES, blogPath } from '@/config/routes'
import { FULL_URL, URL_PATH } from '@/components/pages/blog/constants'

export const CRUMBS = [
  { name: 'Главная', path: ROUTES.home },
  { name: 'Блог', path: URL_PATH }
]

export const posts = getPosts()

export const jsonLd = graph(
  personNode(),
  breadcrumbNode(CRUMBS, `${FULL_URL}#breadcrumbs`),
  itemListNode(
    posts.map(post => ({ name: post.title, path: blogPath(post.slug) })),
    `${FULL_URL}#posts`
  )
)

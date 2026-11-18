import Breadcrumbs from '@/components/ui/Breadcrumbs'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/config/contacts'
import { getPosts } from '@/config/posts'
import { breadcrumbNode, graph } from '@/lib/schema'
import { ROUTES } from '@/config/routes'

/**
 * Хлебные крошки статьи: видимая навигация + BreadcrumbList одной вставкой.
 * Название берётся из реестра статей по пути, чтобы не дублировать заголовок.
 */
export default function BlogBreadcrumbs({ path }: { path: string }) {
  const slug = path.replace(/^\/blog\//, '')
  const post = getPosts().find(item => item.slug === slug)

  const items = [
    { name: 'Главная', path: ROUTES.home },
    { name: 'Блог', path: ROUTES.blog },
    { name: post?.title ?? 'Статья', path }
  ]

  return (
    <>
      <JsonLd
        data={graph(breadcrumbNode(items, `${SITE_URL}${path}#breadcrumbs`))}
      />
      <Breadcrumbs items={items} />
    </>
  )
}

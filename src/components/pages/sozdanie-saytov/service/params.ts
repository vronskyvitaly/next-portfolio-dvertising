import { getNiches } from '@/config/niches'
import { getServices } from '@/config/services'

/** В сегменте живут два реестра: типы сайтов и отраслевые страницы */
export function generateStaticParams() {
  return [...getServices(), ...getNiches()].map(item => ({ slug: item.slug }))
}

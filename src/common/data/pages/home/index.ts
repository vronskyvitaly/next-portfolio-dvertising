import { SITE_URL } from '@/config/contacts'
import { homeFaq } from '@/config/faq'
import { getServices } from '@/config/services'
import {
  faqNode,
  graph,
  organizationNode,
  personNode,
  professionalServiceNode
} from '@/lib/schema'

export const jsonLd = graph(
  personNode(),
  organizationNode(),
  professionalServiceNode(getServices()),
  faqNode(homeFaq, `${SITE_URL}/#faq`)
)

import type { DiscoveryConfig } from '@/src/types/questionnaire'
import testclient from './testclient'
import edg from './edg'

/**
 * Registry of all client questionnaire configs.
 * Key = URL slug  →  /[slug]/discovery-questionnaire
 *
 * To add a new client:
 *   1. Create src/data/questionnaires/[clientslug].ts
 *   2. Import it here and add to the map.
 */
const questionnaires: Record<string, DiscoveryConfig> = {
  testclient,
  edg,
}

export function getQuestionnaire(clientSlug: string): DiscoveryConfig | null {
  return questionnaires[clientSlug] ?? null
}

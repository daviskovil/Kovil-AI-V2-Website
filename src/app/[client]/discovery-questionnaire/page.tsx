import { notFound } from 'next/navigation'
import { getQuestionnaire } from '@/src/data/questionnaires'
import DiscoveryTable from './DiscoveryTable'

export const dynamic = 'force-dynamic'

export default async function DiscoveryQuestionnairePage({
  params,
}: {
  params: Promise<{ client: string }>
}) {
  const { client } = await params
  const config = getQuestionnaire(client)

  if (!config) notFound()

  return <DiscoveryTable config={config} />
}

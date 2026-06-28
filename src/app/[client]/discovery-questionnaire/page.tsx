import { notFound } from 'next/navigation'
import { getQuestionnaire } from '@/src/data/questionnaires'
import type { DiscoveryConfig } from '@/src/types/questionnaire'
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

  // SECURITY: Strip the password before passing to the client bundle.
  // The password only ever lives in server-side code (src/data/questionnaires/).
  // Auth is verified server-side via POST /api/discovery/auth.
  // Only the `uid` (Access ID) is kept — used by the client as the localStorage auth token.
  const safeConfig: DiscoveryConfig = config.accessCredentials
    ? {
        ...config,
        accessCredentials: {
          uid: config.accessCredentials.uid,
          password: '', // cleared — client never sees the real password
        },
      }
    : config

  return <DiscoveryTable config={safeConfig} />
}

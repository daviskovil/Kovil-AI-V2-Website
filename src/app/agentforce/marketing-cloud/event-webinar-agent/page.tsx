import type { Metadata } from 'next'
import EventWebinarAgentPage from '@/src/pages/agentforce/marketing-cloud/EventWebinarAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Event & Webinar Agent — Automated Registration, Reminders & Lead Scoring | Kovil AI',
  description: 'An Agentforce agent that manages event registrations, sends personalised reminders, follows up post-event, and scores leads for sales handoff — fully automated from sign-up to pipeline.',
  alternates: { canonical: 'https://kovil.ai/agentforce/marketing-cloud/event-webinar-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce Event & Webinar Agent — Automated Registration, Reminders & Lead Scoring | Kovil AI',
    description: 'An Agentforce agent that manages event registrations, sends personalised reminders, follows up post-event, and scores leads for sales handoff — fully automated from sign-up to pipeline.',
    url: 'https://kovil.ai/agentforce/marketing-cloud/event-webinar-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <EventWebinarAgentPage />
}

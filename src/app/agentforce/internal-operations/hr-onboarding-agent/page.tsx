import type { Metadata } from 'next'
import HROnboardingAgentPage from '@/src/pages/agentforce/internal-operations/HROnboardingAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce HR Onboarding Agent — Automated New Hire Onboarding | Kovil AI',
  description: 'An Agentforce agent that guides new hires through onboarding checklists, answers policy questions, triggers system provisioning via Slack, and ensures nothing falls through the cracks.',
  alternates: { canonical: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent' },
  openGraph: {
    type: 'website',
    title: 'Agentforce HR Onboarding Agent — Automated New Hire Onboarding | Kovil AI',
    description: 'An Agentforce agent that guides new hires through onboarding checklists, answers policy questions, triggers system provisioning via Slack, and ensures nothing falls through the cracks.',
    url: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 }],
  },
}

export default function Page() {
  return <HROnboardingAgentPage />
}

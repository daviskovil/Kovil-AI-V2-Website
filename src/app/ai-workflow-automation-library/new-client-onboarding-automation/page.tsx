import type { Metadata } from 'next'
import ClientOnboardingPage from '@/src/pages/ai-workflow-automation-library/ClientOnboardingPage'

export const metadata: Metadata = {
  title: 'New Client Onboarding Automation — HubSpot + n8n + Notion | Kovil AI',
  description: 'Deal Won in HubSpot triggers DocuSign, Stripe invoice, onboarding form, Notion workspace, Slack channel and Calendly kickoff — all automatically. 3 days → 2 hours.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/new-client-onboarding-automation' },
  openGraph: {
    type: 'website',
    title: 'New Client Onboarding Automation | Kovil AI',
    description: 'HubSpot deal Won → DocuSign + Stripe + Typeform in parallel → Notion workspace + Slack channel + Calendly kickoff. 3 days → 2 hours.',
    url: 'https://kovil.ai/ai-workflow-automation-library/new-client-onboarding-automation',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'New Client Onboarding Automation with HubSpot, n8n and Notion',
  description: 'An automated workflow triggered when a deal is marked Won in HubSpot. Fires DocuSign, Stripe invoice and Typeform onboarding simultaneously, waits for all three to complete, then builds the Notion workspace, creates the Slack channel and books the kickoff call.',
  totalTime: 'PT2H',
  tool: ['HubSpot CRM', 'DocuSign API', 'Stripe API', 'Typeform API', 'n8n', 'Notion API', 'Slack API', 'Calendly API', 'Gmail API'],
  step: [
    { '@type': 'HowToStep', position: 1, name: 'HubSpot deal Won triggers workflow', text: "When a deal is moved to Won in HubSpot, a webhook fires to n8n which extracts the client name, email, deal value, package tier and account manager from the payload." },
    { '@type': 'HowToStep', position: 2, name: 'Three parallel branches fire simultaneously', text: 'n8n splits into parallel branches: DocuSign sends pre-filled contract, Stripe creates and sends deposit invoice, Typeform sends onboarding intake form. All within 30 seconds.' },
    { '@type': 'HowToStep', position: 3, name: 'n8n Wait node pauses for all three', text: 'The Wait node listens for three webhook callbacks confirming contract signed, invoice paid and form submitted. A 48hr escalation alert fires via Slack if any are outstanding.' },
    { '@type': 'HowToStep', position: 4, name: 'Notion workspace built from master template', text: "Notion API clones the agency's master client workspace template and populates all pages with client-specific data from HubSpot." },
    { '@type': 'HowToStep', position: 5, name: 'Slack channel created and team invited', text: 'Slack API creates a private #client-[brandname] channel and auto-invites the account manager, creative lead and strategy lead.' },
    { '@type': 'HowToStep', position: 6, name: 'Kickoff call scheduled via Calendly', text: 'Calendly API generates a scheduling link for the kickoff call. n8n sends it to the client via personalised Gmail email. Booking syncs to Google Calendar automatically.' },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'New Client Onboarding Automation', item: 'https://kovil.ai/ai-workflow-automation-library/new-client-onboarding-automation' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <ClientOnboardingPage />
      </div>
    </>
  )
}

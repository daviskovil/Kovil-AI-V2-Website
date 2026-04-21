import type { Metadata } from 'next'
import MultiChannelInboundPage from '@/src/pages/ai-workflow-automation-library/MultiChannelInboundPage'

export const metadata: Metadata = {
  title: 'Multi-Channel Inbound Dispatching — AI Workflow | Kovil AI',
  description: 'See how Kovil AI builds a unified AI dispatcher: Instagram DMs, WhatsApp, and email piped into GPT-4o → intent classified → FAQs auto-answered → leads qualified → meetings booked into Calendly automatically.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/multi-channel-inbound-dispatching' },
  robots: { index: true, follow: true },
  keywords: [
    'multi-channel inbound dispatching',
    'Instagram DM automation',
    'WhatsApp AI automation',
    'lead qualification automation',
    'GPT-4o intent classification',
    'n8n inbound workflow',
    'AI lead routing',
  ],
  openGraph: {
    type: 'website',
    title: 'Multi-Channel Inbound Dispatching — AI Workflow | Kovil AI',
    description: 'Instagram DMs + WhatsApp + email → GPT-4o intent classification → FAQ auto-reply → lead qualification → Calendly booking. Zero lead leakage.',
    url: 'https://kovil.ai/ai-workflow-automation-library/multi-channel-inbound-dispatching',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Multi-Channel Inbound Dispatching — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Channel Inbound Dispatching — AI Workflow | Kovil AI',
    description: 'Instagram DMs + WhatsApp + email → GPT-4o intent classification → FAQ auto-reply → lead qualification → Calendly booking. Zero lead leakage.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Multi-Channel Inbound Dispatching with Instagram, WhatsApp, Email and GPT-4o',
  description: 'An automated AI dispatcher that captures inbound messages from Instagram DMs, WhatsApp Business, and email, classifies intent with GPT-4o, auto-answers FAQs from a Notion knowledge base, qualifies new leads with a 3-question flow, books meetings via Calendly for leads scoring ≥7, and syncs every interaction to HubSpot CRM.',
  dateModified: '2025-04-21',
  tool: ['Instagram API', 'WhatsApp Business API', 'Gmail API', 'GPT-4o', 'n8n', 'Calendly', 'HubSpot'],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'n8n Webhook capture across all three channels',
      text: 'Messages arrive via Instagram DM, WhatsApp Business, and email simultaneously. n8n webhook listeners capture all three channels in real time, normalising each message into a unified payload with channel source, sender ID, message text, timestamp, and attachments.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Intent classification via GPT-4o structured JSON output',
      text: 'GPT-4o classifies the message into one of four buckets: FAQ, New Lead, Existing Client, or Spam/Irrelevant. Classification is done via a structured JSON output prompt — no free-text parsing required.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'FAQ auto-reply from Notion knowledge base in under 8 seconds',
      text: 'For FAQ classifications, GPT-4o pulls the relevant answer from a Notion knowledge base page (cached in n8n memory every 6 hours) and replies instantly in the same channel the message came from. Average response time: under 8 seconds.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Lead qualification via 3-question async flow with scoring',
      text: 'For new leads, GPT-4o sends three qualifying questions tailored to the detected channel: budget range, project type, and timeline. Once all three are answered, a lead score (1–10) is calculated based on predefined criteria.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Calendly booking link sent to leads scoring ≥7 with UTM tracking',
      text: 'Leads scoring ≥7 receive a personalised Calendly booking link with a contextual message. The link uses UTM parameters to track which channel the booking came from.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'HubSpot CRM sync with contact deduplication and timeline events',
      text: 'Every interaction is logged in HubSpot: contact created/updated with all conversation data, lead score, channel source, qualification answers, and booking status. Existing contacts are matched by email or phone and updated rather than duplicated.',
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'Multi-Channel Inbound Dispatching', item: 'https://kovil.ai/ai-workflow-automation-library/multi-channel-inbound-dispatching' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the AI handle messages it cannot confidently answer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "GPT-4o's intent classification includes a confidence score. If the message is ambiguous or classified as Existing Client with a complex query, the workflow routes it to a human handoff queue in Slack — tagged with the original message, channel source, and contact history. No message is ever dropped.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can this workflow handle multiple languages?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. GPT-4o detects the language of each incoming message and responds in the same language. The Notion knowledge base can contain multilingual FAQ entries, and GPT-4o will match the response language to the sender automatically.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to a lead who scores below the booking threshold?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Leads scoring below 7 receive a nurture message — typically a case study or resource link — and are logged to HubSpot with their score and answers. A follow-up reminder is created in HubSpot for the account manager to review and manually re-engage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this work with existing HubSpot contacts or only new ones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Both. The workflow checks HubSpot for an existing contact matching the sender's email or phone before creating a new record. If a match is found, the interaction is logged as a new timeline event on the existing contact — enriching the record rather than duplicating it.",
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Multi-Channel Inbound Dispatching',
  description: 'AI-powered inbound dispatching workflow that classifies and routes messages from Instagram, WhatsApp, and email using GPT-4o with zero lead leakage.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Workflow Automation',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/ai-workflow-automation-library/multi-channel-inbound-dispatching',
  category: 'Ad & Marketing',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="pt-20">
        <MultiChannelInboundPage />
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import VoiceflowDevelopersPage from '@/src/pages/hire/VoiceflowDevelopersPage'

export const metadata: Metadata = {
  title: 'Hire Voiceflow Developers — Conversational AI Agents, Matched in 48 Hours',
  description: 'Hire vetted Voiceflow developers embedded in your team in 48 hours. Conversational AI agent design, support chatbots, voice agents, custom API integrations, dynamic fallbacks. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/voiceflow-developers' },
  keywords: [
    'hire voiceflow developers',
    'voiceflow developer',
    'voiceflow expert',
    'hire voiceflow expert',
    'voiceflow chatbot builder',
    'conversational ai designer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire Voiceflow Developers — Conversational AI Agents, Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 Voiceflow developers embedded in your team in 48 hours. Conversation design, API integrations, support chatbots — sprint-delivered.',
    url: 'https://kovil.ai/hire/voiceflow-developers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-hire-voiceflow-developers.png', width: 1200, height: 630, alt: 'Hire Voiceflow Developers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Voiceflow Developers — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 Voiceflow developers in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-hire-voiceflow-developers.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Voiceflow Developers',
  description: 'Embed vetted Tier-1 Voiceflow developers into your team in 48 hours. Specialists in conversation design, intent training, custom API integrations, dynamic fallbacks, and omnichannel deployments.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'Voiceflow Conversational AI Development',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/voiceflow-developers',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.', url: 'https://kovil.ai/hire/voiceflow-developers' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a Voiceflow Developer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Needs', text: 'Fill a 5-minute intake form describing your conversational flows, backend systems, and launch channels.', url: 'https://kovil.ai/hire/voiceflow-developers' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Developer', text: 'We surface 2–3 hand-picked Voiceflow developers matched to your specific channel and API needs.', url: 'https://kovil.ai/hire/voiceflow-developers' },
    { '@type': 'HowToStep', position: 3, name: 'Sprint & Deliver', text: 'Your developer builds in focused sprints. An Engagement Manager audits every milestone output.', url: 'https://kovil.ai/hire/voiceflow-developers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Voiceflow and what can a Voiceflow developer build?', acceptedAnswer: { '@type': 'Answer', text: 'Voiceflow is a visual development platform for building conversational AI agents for chat and voice channels. A developer builds autonomous support agents, booking systems, and voice assistants that connect to backend databases.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Voiceflow developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24–48 hours of submitting their brief. The developer starts on a milestone plan within 3–4 days with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Can Voiceflow interface with custom APIs and CRM platforms?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Voiceflow includes a robust API block. Our developers configure it to update customer tickets, verify bookings, pull order statuses, and execute dynamic backend queries.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                  item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',      item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'Voiceflow Developers',   item: 'https://kovil.ai/hire/voiceflow-developers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><VoiceflowDevelopersPage /></div>
    </>
  )
}

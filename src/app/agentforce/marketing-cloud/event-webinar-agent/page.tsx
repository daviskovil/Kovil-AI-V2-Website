import type { Metadata } from 'next'
import EventWebinarAgentPage from '@/src/pages/agentforce/marketing-cloud/EventWebinarAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Event & Webinar Agent — Automated Registration, Reminders & Lead Scoring | Kovil AI',
  description: 'Deploy an Agentforce Event & Webinar Agent that automates registration, personalised reminders, live attendance tracking, post-event follow-up, and intent-gated sales handoff.',
  alternates: { canonical: 'https://kovil.ai/agentforce/marketing-cloud/event-webinar-agent' },
  keywords: [
    'Agentforce event agent',
    'Salesforce webinar automation AI',
    'Agentforce event registration agent',
    'Marketing Cloud event AI',
    'Salesforce AI event management',
    'Agentforce webinar lead scoring',
    'Salesforce Agentforce implementation',
    'Marketing Cloud webinar automation',
    'Einstein lead scoring events',
    'Salesforce event follow-up automation',
    'AI webinar management Salesforce',
    'Agentforce post-event nurture',
    'Salesforce event pipeline automation',
    'Marketing Cloud event personalisation',
    'Kovil AI Agentforce',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Event & Webinar Agent — Automated Registration, Reminders & Lead Scoring | Kovil AI',
    description: 'Deploy an Agentforce Event & Webinar Agent that automates registration, personalised reminders, live attendance tracking, post-event follow-up, and intent-gated sales handoff.',
    url: 'https://kovil.ai/agentforce/marketing-cloud/event-webinar-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Event & Webinar Agent — Automated Registration, Reminders & Lead Scoring | Kovil AI',
    description: 'Deploy an Agentforce Event & Webinar Agent that automates registration, personalised reminders, live attendance tracking, post-event follow-up, and intent-gated sales handoff.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Event & Webinar Agent — Automated Registration, Reminders & Lead Scoring',
  description: 'Deploy an Agentforce Event & Webinar Agent that automates registration, personalised reminders, live attendance tracking, post-event follow-up, and intent-gated sales handoff.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'Salesforce Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/marketing-cloud/event-webinar-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Fixed-price 3-week sprint with 2-week risk-free pilot' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which event platforms does the integration support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We configure integrations with Zoom Webinars, GoToWebinar, and ON24 via webhook — these cover the majority of B2B webinar use cases. For in-person events using platforms like Cvent or Eventbrite, we use their API or Zapier integration to feed registration and attendance data into Salesforce. The specific platform is scoped in Week 1 — if you use a platform not listed, we confirm integration feasibility before the sprint begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are no-shows handled differently from attendees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No-shows receive a differentiated follow-up sequence: a 'you missed it' framing with the event recording and key takeaways, rather than the post-event engagement content sent to attendees. The messaging assumes they were interested enough to register but could not attend — not that they are cold. No-show follow-up typically achieves 40–50% recording view rates, which re-activates intent. If the no-show engages with the recording follow-up, their intent score updates and they can re-enter the standard nurture sequence.",
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly does the post-event follow-up go out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The post-event scoring pass runs automatically as soon as the event platform sends the final attendance data — typically within 1–2 hours of event end. Follow-up emails are queued immediately after scoring and send within 24 hours of event end. For high-intent leads (attending, asking questions, clicking CTAs), the sales handoff notification fires the same day. The window between event participation and sales contact is typically under 4 hours for qualified leads — while interest is still fresh.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it handle multi-track conference events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, with additional configuration. Multi-track events require session-level attendance tracking, which we configure per event platform's data model. The follow-up sequence can then reference the specific sessions attended rather than the event generically — significantly improving personalisation quality. Multi-track configuration is typically scoped as a Week 1 addition if needed.",
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Marketing Cloud', item: 'https://kovil.ai/agentforce/marketing-cloud' },
    { '@type': 'ListItem', position: 4, name: 'Event & Webinar Agent', item: 'https://kovil.ai/agentforce/marketing-cloud/event-webinar-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <EventWebinarAgentPage />
    </>
  )
}

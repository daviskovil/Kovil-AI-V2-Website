import type { Metadata } from 'next'
import ITHelpdeskAgentPage from '@/src/pages/agentforce/internal-operations/ITHelpdeskAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce IT Helpdesk Agent — Autonomous L1 IT Support & Ticket Resolution | Kovil AI',
  description: 'Agentforce IT helpdesk agent that resolves 70% of L1 tickets autonomously — credential resets, access provisioning, account unlocks — 24/7, with complex issues routed to engineers.',
  alternates: { canonical: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent' },
  keywords: [
    'Agentforce IT helpdesk agent',
    'Salesforce AI IT support',
    'Agentforce autonomous IT helpdesk',
    'Salesforce IT ticket resolution AI',
    'Agentforce L1 IT support',
    'Salesforce AI helpdesk automation',
    'Agentforce IT service management',
    'Salesforce Agentforce implementation',
    'Agentforce internal operations',
    'Salesforce IT ticket automation',
    'Agentforce credential reset automation',
    'Salesforce AI IT agent',
    'Agentforce access provisioning',
    'Salesforce Einstein Case Classification',
    'Kovil AI Agentforce',
    'Salesforce Agentforce partner New York',
    'AI IT helpdesk Salesforce',
    'Salesforce Atlas Reasoning Engine IT',
    'Agentforce Okta integration',
    'autonomous L1 support Salesforce',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce IT Helpdesk Agent — Autonomous L1 IT Support & Ticket Resolution | Kovil AI',
    description: 'Agentforce IT helpdesk agent that resolves 70% of L1 tickets autonomously — credential resets, access provisioning, account unlocks — 24/7, with complex issues routed to engineers.',
    url: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce IT Helpdesk Agent — Autonomous L1 IT Support & Ticket Resolution | Kovil AI',
    description: 'Agentforce IT helpdesk agent that resolves 70% of L1 tickets autonomously — credential resets, access provisioning, account unlocks — 24/7, with complex issues routed to engineers.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce IT Helpdesk Agent — Autonomous L1 IT Support & Ticket Resolution',
  description: 'Agentforce IT helpdesk agent that resolves 70% of L1 tickets autonomously — credential resets, access provisioning, account unlocks — 24/7, with complex issues routed to engineers.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
  },
  serviceType: 'Salesforce Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce for Internal Operations',
    url: 'https://kovil.ai/agentforce/internal-operations',
  },
  offers: { '@type': 'Offer', description: 'Fixed-price 3-week sprint with 2-week risk-free pilot' },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce IT Helpdesk Agent — Autonomous L1 IT Support & Ticket Resolution | Kovil AI',
  description: 'Agentforce IT helpdesk agent that resolves 70% of L1 tickets autonomously — credential resets, access provisioning, account unlocks — 24/7, with complex issues routed to engineers.',
  url: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', 'h3', 'p'] },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What L1 issues can the agent resolve autonomously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The autonomous resolution library is configured during implementation based on your IT environment. Common autonomous resolutions include: password and credential resets, account unlocks, MFA reset, basic software access grants for configured applications, VPN troubleshooting (connectivity checks and guided steps), standard onboarding system provisioning, and known configuration issues with documented fixes. Issues requiring physical intervention (hardware failure, network infrastructure), security investigation, or systems without API integration are always routed to engineering.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the credential reset work securely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The agent calls your identity provider's API (Okta or Azure AD) to initiate the reset — it does not handle or transmit the new credential. The reset link is sent directly from the identity provider to the employee's verified secondary contact method (personal email or backup phone number configured in their profile). The agent never sees the credential itself. All API calls are made within the Einstein Trust Layer — no credential data leaves Salesforce's security boundary.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens with P1 incidents — infrastructure outages and security events?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "P1 incidents are detected by urgency classification signals: keywords like 'everyone is affected', 'whole team can't access', 'security breach', 'data leak', or 'production is down'. P1 tickets bypass the standard queue and trigger immediate on-call paging via PagerDuty integration (or your configured on-call system). The page includes the full ticket context. Simultaneously, a Slack alert fires to the IT leadership channel. The agent does not attempt autonomous resolution for P1 incidents — it escalates immediately.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long until autonomous resolution rate improves over time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Initial autonomous resolution rate depends on the breadth of the configured action library and KB coverage at launch — typically 50–60% in week 1. As engineers document new resolution procedures (prompted by the KB gap detection system) and new API actions are added, the rate improves. Most clients reach 70%+ within 90 days. We track resolution rate, CSAT, and KB coverage as standard post-launch metrics and report weekly.',
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
    { '@type': 'ListItem', position: 3, name: 'Internal Operations', item: 'https://kovil.ai/agentforce/internal-operations' },
    { '@type': 'ListItem', position: 4, name: 'IT Helpdesk Agent', item: 'https://kovil.ai/agentforce/internal-operations/it-helpdesk-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ITHelpdeskAgentPage />
    </>
  )
}

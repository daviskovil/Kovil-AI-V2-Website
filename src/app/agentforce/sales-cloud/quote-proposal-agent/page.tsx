import type { Metadata } from 'next'
import QuoteProposalAgentPage from '@/src/pages/agentforce/sales-cloud/QuoteProposalAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce Quote & Proposal Agent — Automated CPQ & Proposal Generation',
  description: 'Agentforce CPQ agent that auto-drafts personalised proposals from live Salesforce CPQ data, routes through approval, and delivers via DocuSign — from proposal stage to signed in under 4 hours.',
  alternates: { canonical: 'https://kovil.ai/agentforce/sales-cloud/quote-proposal-agent' },
  keywords: [
    'Agentforce CPQ agent',
    'Salesforce quote agent AI',
    'Agentforce proposal automation',
    'Salesforce AI quote generation',
    'Agentforce CPQ automation',
    'Salesforce proposal AI agent',
    'Agentforce quote proposal agent',
    'Salesforce automated proposal generation',
    'Agentforce Sales Cloud CPQ',
    'Salesforce CPQ AI automation',
    'proposal generation Salesforce',
    'Agentforce DocuSign integration',
    'Salesforce quote automation agent',
    'Agentforce implementation',
    'Salesforce AI sales agent',
    'Kovil AI Agentforce',
    'CPQ proposal automation Salesforce',
    'Agentforce approval process automation',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Quote & Proposal Agent — Automated CPQ & Proposal Generation | Kovil AI',
    description: 'Agentforce CPQ agent that auto-drafts personalised proposals from live Salesforce CPQ data, routes through approval, and delivers via DocuSign — from proposal stage to signed in under 4 hours.',
    url: 'https://kovil.ai/agentforce/sales-cloud/quote-proposal-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Quote & Proposal Agent — Automated CPQ & Proposal Generation | Kovil AI',
    description: 'Agentforce CPQ agent that auto-drafts personalised proposals from live Salesforce CPQ data, routes through approval, and delivers via DocuSign — from proposal stage to signed in under 4 hours.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce Quote & Proposal Agent — Automated CPQ & Proposal Generation',
  description: 'Agentforce CPQ agent that auto-drafts personalised proposals from live Salesforce CPQ data, routes through approval, and delivers via DocuSign — from proposal stage to signed in under 4 hours.',
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
  url: 'https://kovil.ai/agentforce/sales-cloud/quote-proposal-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce for Sales Cloud',
    url: 'https://kovil.ai/agentforce/sales-cloud',
  },
  offers: {
    '@type': 'Offer',
    description: 'Fixed-price 3-week sprint with 2-week risk-free pilot',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce Quote & Proposal Agent — Automated CPQ & Proposal Generation | Kovil AI',
  description: 'Agentforce CPQ agent that auto-drafts personalised proposals from live Salesforce CPQ data, routes through approval, and delivers via DocuSign — from proposal stage to signed in under 4 hours.',
  url: 'https://kovil.ai/agentforce/sales-cloud/quote-proposal-agent',
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
      name: 'Do we need Salesforce CPQ already set up?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the agent pulls product and pricing data from an existing CPQ configuration. If you do not have CPQ, we offer a separate CPQ setup engagement before the agent sprint. If you have CPQ but it needs cleanup (outdated pricing rules, missing products), we do a CPQ audit and tidy in Week 1 before wiring the agent to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it handle custom pricing exceptions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CPQ enforces your configured pricing rules automatically for standard deals. Custom pricing exceptions — bespoke enterprise deals outside CPQ rules — are flagged for rep input before the agent proceeds. The rep enters the agreed custom pricing, and the agent takes it from there for the rest of the proposal workflow. You control which deal types require human pricing sign-off.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the approval process work for complex orgs with multiple approval tiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Salesforce's native Approval Process supports multi-tier, parallel, and sequential approval chains. We configure approval routing to match your exact sign-off hierarchy during implementation. Manager approvals for standard deals can be SLA-enforced (auto-approve after X hours if no action is taken). Strategic deal approvals include a full side-by-side review view. Annotated rejections feed directly into the agent's revision loop — the agent re-drafts flagged sections without starting from scratch.",
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if the prospect does not sign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The agent monitors DocuSign envelope status and fires follow-up actions on configurable timers: a personalised follow-up email at 48 hours drafted by Prompt Builder with deal-specific context, a rep alert at 5 days, and a manager alert at 10 days. If the proposal expires, the agent flags for rep review rather than re-sending automatically. All follow-up actions are logged as Activities on the Opportunity record.',
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
    { '@type': 'ListItem', position: 3, name: 'Sales Cloud', item: 'https://kovil.ai/agentforce/sales-cloud' },
    { '@type': 'ListItem', position: 4, name: 'Quote & Proposal Agent', item: 'https://kovil.ai/agentforce/sales-cloud/quote-proposal-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <QuoteProposalAgentPage />
    </>
  )
}

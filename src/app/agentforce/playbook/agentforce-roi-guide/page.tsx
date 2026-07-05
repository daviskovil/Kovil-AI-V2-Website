import type { Metadata } from 'next'
import AgentforceROIGuidePage from '@/src/pages/agentforce/playbook/AgentforceROIGuidePage'

export const metadata: Metadata = {
  title: 'Agentforce ROI Guide: How to Build the Business Case',
  description:
    'Complete Agentforce ROI guide — cost savings model, revenue uplift calculation, time-to-ROI analysis, and real deployment numbers. Build a board-ready Agentforce business case with proven frameworks.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/agentforce-roi-guide' },
  keywords: [
    'agentforce roi',
    'agentforce business case',
    'agentforce return on investment',
    'agentforce cost savings',
    'agentforce revenue uplift',
    'salesforce agentforce roi',
    'agentforce roi calculator',
    'agentforce productivity gains',
    'agentforce break even',
    'agentforce financial justification',
  ],
  openGraph: {
    type: 'article',
    title: 'Agentforce ROI Guide: How to Build the Business Case | Kovil AI',
    description:
      'Complete Agentforce ROI guide — cost savings model, revenue uplift calculation, time-to-ROI analysis, and real deployment numbers. Build a board-ready Agentforce business case.',
    url: 'https://kovil.ai/agentforce/playbook/agentforce-roi-guide',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce ROI Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce ROI Guide: How to Build the Business Case | Kovil AI',
    description:
      'Complete Agentforce ROI guide — cost savings model, revenue uplift calculation, time-to-ROI analysis, and real deployment numbers.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Agentforce ROI Guide: How to Build the Business Case for Salesforce AI Agents',
  description:
    'Complete Agentforce ROI guide — cost savings model, revenue uplift calculation, time-to-ROI analysis, and real deployment numbers. Build a board-ready business case with proven frameworks.',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  author: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://kovil.ai/agentforce/playbook/agentforce-roi-guide',
  },
  image: { '@type': 'ImageObject', url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a typical Agentforce ROI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on production deployments, Agentforce typically delivers 35–70% gross cost reduction in the targeted function. Net ROI after licence and implementation costs depends on autonomous resolution rate and conversation volume. Service Cloud deployments targeting Tier 1 deflection typically deliver $150,000–$400,000 in annual net saving for mid-size organisations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Agentforce take to reach positive ROI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typical time to positive ROI is 14–24 months from deployment go-live, depending on use case mix and licence cost. The fastest ROI profile is a Service Cloud agent targeting high-volume Tier 1 queries with a high autonomous resolution rate. The slowest profile involves complex multi-cloud deployments with heavy MuleSoft integration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I calculate autonomous resolution rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Autonomous resolution rate = conversations resolved by the agent without human escalation divided by total conversations handled by the agent. Track every conversation and categorise its outcome: autonomous resolution, expected human escalation, unexpected escalation (gap in Topic coverage), or agent failure. The unexpected escalation rate identifies what needs tuning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of an Agentforce SDR agent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ROI for an SDR agent is primarily revenue uplift. The key metric is qualified pipeline increase — typically 25–40% in production deployments. At a $3M qualified pipeline with 20% close rate, a 34% pipeline increase adds $204K incremental ARR. SDR teams also free up 60% of their time from manual qualification, increasing effective team capacity by 1.6× without adding headcount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Agentforce ROI include revenue uplift or just cost savings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete business case includes both. Cost savings appear in the first 6–12 months. Revenue uplift from SDR agents expanding pipeline and faster quote cycles typically materialises over 12–24 months but is often larger in absolute terms. Present both to the board with clear assumptions and keep them separate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I present the Agentforce business case to the board?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Structure in four parts: (1) Current state cost — what you spend today on the function being automated. (2) Deployment cost — Year 1 total including licences and implementation. (3) Steady-state economics — Year 2+ cost vs. saving. (4) Sensitivity analysis — what happens if resolution rate comes in 15 points below target. Boards respond to sensitivity analysis; avoid presenting a single-point ROI without showing the range.',
      },
    },
    {
      '@type': 'Question',
      name: 'What KPIs should I track for Agentforce ROI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primary KPIs: autonomous resolution rate, average handle time for escalated cases, conversation volume, CSAT score, and cost per resolved case. Secondary KPIs: escalation reason distribution, repeat contact rate, and first-contact resolution rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an Agentforce ROI calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Salesforce's general-purpose ROI calculator tends to be optimistic on resolution rate and does not account for implementation cost or Data Cloud. Kovil AI builds custom ROI models as part of our Strategy & Readiness engagement — modelled against your specific conversation volume, use case mix, current headcount cost, and negotiated pricing.",
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
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/agentforce/playbook' },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Agentforce ROI Guide',
      item: 'https://kovil.ai/agentforce/playbook/agentforce-roi-guide',
    },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce ROI Guide: How to Build the Business Case | Kovil AI',
  description:
    'Complete Agentforce ROI guide — cost savings model, revenue uplift calculation, time-to-ROI analysis, and real deployment numbers from production.',
  url: 'https://kovil.ai/agentforce/playbook/agentforce-roi-guide',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', 'h3', 'p'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <AgentforceROIGuidePage />
    </>
  )
}

import type { Metadata } from 'next'
import AgentforcePage from '@/src/pages/AgentforcePage'

export const metadata: Metadata = {
  title: 'Salesforce Agentforce Implementation Partner | Kovil AI',
  description:
    'Kovil AI is a specialist Salesforce Agentforce implementation partner in New York. We design, build and deploy Agentforce agents for Sales Cloud, Service Cloud, Marketing Cloud and custom enterprise workflows. Book a discovery call.',
  alternates: { canonical: 'https://kovil.ai/agentforce' },
  keywords: [
    'Salesforce Agentforce implementation',
    'Agentforce partner New York',
    'Agentforce consulting',
    'Agentforce deployment',
    'Salesforce AI agents',
    'Agentforce Sales Cloud',
    'Agentforce Service Cloud',
  ],
  openGraph: {
    type: 'website',
    title: 'Salesforce Agentforce Implementation Partner | Kovil AI',
    description:
      'Kovil AI is a specialist Salesforce Agentforce implementation partner in New York. Fixed-price sprints. 2-week risk-free pilot.',
    url: 'https://kovil.ai/agentforce',
    siteName: 'Kovil AI',
    images: [
      {
        url: 'https://kovil.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kovil AI — Salesforce Agentforce Implementation Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salesforce Agentforce Implementation Partner | Kovil AI',
    description:
      'Kovil AI is a specialist Salesforce Agentforce implementation partner in New York. Fixed-price sprints. 2-week risk-free pilot.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const agentforceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Kovil AI — Agentforce Practice',
  description:
    'Salesforce Agentforce implementation partner specialising in AI agent deployment for Sales, Service, and Marketing Cloud',
  url: 'https://kovil.ai/agentforce',
  areaServed: 'New York, United States',
  serviceType: 'Salesforce Agentforce Implementation',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(agentforceSchema) }}
      />
      <AgentforcePage />
    </>
  )
}

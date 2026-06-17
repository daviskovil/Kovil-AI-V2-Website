import type { Metadata } from 'next'
import WhatWeDoPage from '@/src/pages/WhatWeDoPage'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Engineering, Operations & Talent Services',
  description: 'Kovil AI builds, operates, and staffs AI systems. Managed AI engineers, outcome-based projects, app rescue, AI operations monitoring, and specialist AI talent — all milestone-gated.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'Managed AI Engineering',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/what-we-do',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AI Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Managed AI Engineer', description: 'Embed a vetted AI engineer into your team. 48-hour match, 2-week risk-free trial, milestone-gated sprints.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outcome-Based AI Project', description: 'Fixed price, fixed timeline AI builds. You describe the outcome — we scope, build, and ship it.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI App Rescue', description: 'We audit, fix, and stabilise failing AI applications — hallucinations, instability, vibe-coded builds.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Operations Monitoring', description: 'Production AI health monitoring — model drift, latency, error rates, cost tracking.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What services does Kovil AI offer?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI offers managed AI engineers (embedded talent, 48-hour match), outcome-based AI projects (fixed price and timeline), AI app rescue (fixing broken or unstable AI systems), AI operations monitoring, and specialist AI talent across LLM engineering, data engineering, ML, and more.' } },
    { '@type': 'Question', name: 'What is the difference between a Managed AI Engineer and an Outcome-Based Project?', acceptedAnswer: { '@type': 'Answer', text: 'A Managed AI Engineer is an embedded staff augmentation model — you get a vetted engineer in your team on a monthly basis, working within your existing processes. An Outcome-Based Project is a fixed-scope, fixed-price engagement where Kovil AI owns the delivery of a specific outcome from start to finish.' } },
    { '@type': 'Question', name: 'Does Kovil AI work with Agentforce, Azure AI Foundry, and Vertex AI?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kovil AI is an implementation partner for Salesforce Agentforce, Microsoft Azure AI Foundry, and Google Cloud Vertex AI. We build, configure, and deploy AI agents on all three platforms.' } },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'What We Do', item: 'https://kovil.ai/what-we-do' },
  ],
}

export const metadata: Metadata = {
  title: 'What We Do — AI Engineering, Operations & Talent | Kovil AI',
  description: 'Kovil AI builds, operates, and staffs AI systems. Managed AI engineers, outcome-based projects, app rescue, AI operations monitoring, and specialist AI talent — all milestone-gated with zero delivery risk.',
  alternates: { canonical: 'https://kovil.ai/what-we-do' },
  openGraph: {
    type: 'website',
    title: 'What We Do — AI Engineering, Operations & Talent | Kovil AI',
    description: 'Build AI systems, keep them healthy in production, and staff every engineering discipline you need — Salesforce, Azure, Google Cloud, and beyond.',
    url: 'https://kovil.ai/what-we-do',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'What Kovil AI Does' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What We Do — AI Engineering, Operations & Talent | Kovil AI',
    description: 'Build, operate & scale AI — milestone-gated, zero delivery risk.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20"><WhatWeDoPage /></div>
    </>
  )
}

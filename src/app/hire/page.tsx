import type { Metadata } from 'next'
import HireHubPage from '@/src/pages/hire/HireHubPage'

export const metadata: Metadata = {
  title: 'Hire a Specialist AI Engineer — Matched in 48 Hours | Kovil AI',
  description: 'Hire vetted Tier-1 specialist AI engineers in 48 hours. Computer vision, machine learning, LLM, NLP, and data engineering. Engagement Manager oversight, 2-week risk-free trial, 100% IP ownership.',
  alternates: { canonical: 'https://kovil.ai/hire' },
  keywords: [
    'hire AI engineer',
    'hire specialist AI engineer',
    'hire machine learning engineer',
    'hire computer vision developer',
    'hire LLM developer',
    'hire NLP engineer',
    'hire data engineer',
    'AI engineering staffing',
    'embedded AI engineers',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire a Specialist AI Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 specialist AI engineers embedded in your team in 48 hours. CV, ML, LLM, NLP, Data Engineering — sprint-delivered, Engagement Manager audited.',
    url: 'https://kovil.ai/hire',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire Specialist AI Engineers — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Specialist AI Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 specialist AI engineers embedded in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Specialist AI Engineers',
  description: 'Embed vetted Tier-1 specialist AI engineers into your team in 48 hours. Specialists across computer vision, machine learning, LLMs, NLP, and data engineering. Sprint-based delivery with Engagement Manager oversight and a 2-week risk-free trial.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/og-image.png',
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'AI Engineering Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Specialist AI Engineering Roles',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire Computer Vision Engineers', url: 'https://kovil.ai/hire/computer-vision-engineers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire Machine Learning Engineers', url: 'https://kovil.ai/hire/machine-learning-engineers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire LLM Engineers', url: 'https://kovil.ai/hire/llm-engineers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire NLP Engineers', url: 'https://kovil.ai/hire/nlp-engineers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hire Data Engineers', url: 'https://kovil.ai/hire/data-engineers' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can I hire an AI engineer through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted specialist AI engineer within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days. Every engagement includes a 2-week risk-free trial.' },
    },
    {
      '@type': 'Question',
      name: 'What types of AI engineers can I hire through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI provides specialist AI engineers across five domains: computer vision (object detection, video analytics, OCR), machine learning (predictive models, recommendations, MLOps), LLM engineering (RAG systems, fine-tuning, AI agents), NLP (sentiment analysis, NER, document intelligence), and data engineering (pipelines, warehouses, streaming, feature stores).' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Kovil AI and a staffing agency?',
      acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI is an embedded engineering partner, not a staffing agency. Every engineer is Tier-1 vetted through a 5-stage process. Every engagement includes an Engagement Manager who audits milestone deliverables before they reach you. You get sprint-based delivery with clear outcomes — not open-ended hours billed to a ticket queue.' },
    },
    {
      '@type': 'Question',
      name: 'What does the 2-week risk-free trial mean?',
      acceptedAnswer: { '@type': 'Answer', text: 'You start working with your matched engineer for two weeks. If the fit is not right — technically or culturally — you owe nothing. We will rematch you with a different engineer at no additional cost.' },
    },
    {
      '@type': 'Question',
      name: 'Who owns the code and models that the engineer produces?',
      acceptedAnswer: { '@type': 'Answer', text: '100% of the IP belongs to you. Code, models, data pipelines, documentation, and any other deliverables are fully owned by your organisation. There are no exceptions and no licensing complications.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',   item: 'https://kovil.ai/hire' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><HireHubPage /></div>
    </>
  )
}

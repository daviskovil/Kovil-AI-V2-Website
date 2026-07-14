import type { Metadata } from 'next'
import ReturnsFraudAssessmentPage from '@/src/pages/shopify/workflows/ReturnsFraudAssessmentPage'

export const metadata: Metadata = {
  title: 'Autonomous Returns Fraud Assessment & Auditing Agent',
  description: 'Returns auditor agents that check customer history, cross-reference item photos with vision models, and flag risk before processing refunds. 48-hour average processing. Live in 2 weeks.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/returns-fraud-assessment' },
  keywords: [
    'returns fraud detection shopify',
    'autonomous refund auditor',
    'returns photo analysis ai',
    'shopify returns risk engine',
    'loop returns fraud integration',
    'ai return abuse detection',
  ],
  openGraph: {
    type: 'website',
    title: 'Autonomous Returns Fraud Assessment & Auditing Agent | Kovil AI',
    description: 'Returns auditor agents that check customer history and cross-reference item photos with vision models.',
    url: 'https://kovil.ai/shopify/workflows/returns-fraud-assessment',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Autonomous Returns Fraud Assessment & Auditing Agent | Kovil AI',
    description: 'Returns auditor agents that check customer history and cross-reference item photos with vision models.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Returns Fraud Assessment Agent',
  description: 'Cognitive returns fraud auditing for Shopify — vision-model photo verification, cross-order risk pattern detection, and auto-approval within configurable thresholds.',
  provider: {
    '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp', telephone: '+16465359141',
    sameAs: ['https://www.linkedin.com/company/kovil-ai/', 'https://clutch.co/profile/kovil-ai', 'https://www.crunchbase.com/organization/kovil-ai'],
    address: [{ '@type': 'PostalAddress', streetAddress: '734 Franklin Ave', addressLocality: 'Garden City', addressRegion: 'NY', postalCode: '11530', addressCountry: 'US' }],
  },
  serviceType: 'Fraud Detection Automation',
  category: 'Shopify Workflow Blueprints',
  areaServed: [
    { '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' }, { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/shopify/workflows/returns-fraud-assessment',
  isPartOf: { '@type': 'Service', name: 'Shopify AI Agent Integration', url: 'https://kovil.ai/shopify' },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. 2-week sprint to first live auditor.' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How does the system audit return photo quality?', acceptedAnswer: { '@type': 'Answer', text: 'Visual model algorithms check pixel-level details, structural parameters, and brand tags against template catalog images, highlighting discrepancies.' } },
    { '@type': 'Question', name: 'Does the auditor initiate refunds autonomously?', acceptedAnswer: { '@type': 'Answer', text: 'Only within strict price thresholds. Higher-value or flagged refunds require a manager\'s validation in Slack before processing.' } },
    { '@type': 'Question', name: 'How accurate is the fraud risk scoring?', acceptedAnswer: { '@type': 'Answer', text: 'The scoring model combines photo audit confidence, purchase history, and return-rate patterns to reduce fraudulent approvals while keeping legitimate customer friction low.' } },
    { '@type': 'Question', name: 'Can this integrate with our existing returns platform?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build direct connectors to Loop Returns, Returnly, and similar platforms.' } },
    { '@type': 'Question', name: 'Can the system detect patterns across multiple orders from the same customer?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The risk model looks at return-rate history across a customer\'s full order history, not just the current transaction.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Shopify', item: 'https://kovil.ai/shopify' },
    { '@type': 'ListItem', position: 3, name: 'Returns Fraud Assessment', item: 'https://kovil.ai/shopify/workflows/returns-fraud-assessment' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org', '@type': 'WebPage',
  name: 'Autonomous Returns Fraud Assessment & Auditing Agent | Kovil AI',
  description: 'Returns auditor agents that check customer history and cross-reference item photos with vision models.',
  url: 'https://kovil.ai/shopify/workflows/returns-fraud-assessment',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#pipeline h2', '#pipeline h3'] },
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' } },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <ReturnsFraudAssessmentPage />
    </>
  )
}

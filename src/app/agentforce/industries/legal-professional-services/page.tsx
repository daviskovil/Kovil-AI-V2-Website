import type { Metadata } from 'next'
import LegalProfessionalServicesAgentforcePage from '@/src/pages/agentforce/industries/LegalProfessionalServicesAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Legal & Professional Services | Kovil AI',
  description: 'Production Agentforce for law firms, consultancies, and professional services — contract review automation, client intake agents, matter management, billing inquiry resolution. Einstein Trust Layer · Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/legal-professional-services' },
  keywords: [
    'agentforce legal services',
    'salesforce agentforce law firm',
    'agentforce contract review',
    'agentforce client intake',
    'agentforce matter management',
    'agentforce professional services',
    'salesforce legal AI',
    'agentforce legal compliance',
    'agentforce law firm automation',
    'agentforce billing inquiry legal',
    'salesforce legal cloud agentforce',
    'agentforce document review',
    'agentforce legal research',
    'agentforce law firm implementation',
    'salesforce agentforce consulting firms',
    'agentforce accounting firm',
    'agentforce SRA compliance',
    'agentforce GDPR legal',
    'agentforce client onboarding legal',
    'agentforce legal implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Legal & Professional Services | Kovil AI',
    description: 'Production Agentforce for law firms, consultancies, and professional services — contract review automation, client intake agents, matter management, billing inquiry resolution.',
    url: 'https://kovil.ai/agentforce/industries/legal-professional-services',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Legal & Professional Services — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Legal & Professional Services | Kovil AI',
    description: 'Production Agentforce for law firms, consultancies, and professional services — contract review automation, client intake agents, matter management.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Legal & Professional Services',
  description: 'Production Agentforce implementations for law firms, consultancies, and professional services firms — contract review automation, client intake agents, matter management, and billing inquiry resolution.',
  serviceType: 'Agentforce Implementation',
  category: 'Legal & Professional Services',
  url: 'https://kovil.ai/agentforce/industries/legal-professional-services',
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation Services',
    url: 'https://kovil.ai/agentforce',
  },
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    telephone: '+16465359141',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '734 Franklin Ave',
      addressLocality: 'Garden City',
      addressRegion: 'NY',
      postalCode: '11530',
      addressCountry: 'US',
    },
  },
  areaServed: ['New York', 'United States', 'Worldwide'],
  offers: {
    '@type': 'Offer',
    description: 'Fixed-price Agentforce legal & professional services implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Legal & Professional Services Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contract Review & Analysis Agent', description: 'AI-assisted contract review, clause extraction, risk flagging, and comparison against standard templates.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Client Intake & Onboarding Agent', description: 'Automated client onboarding — conflict checks, KYC document collection, engagement letter generation, and matter opening.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Matter & Case Management Agent', description: 'Deadline tracking, task assignment, status updates, and billing milestone alerts across active matters.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Billing Inquiry Agent', description: 'WIP query resolution, invoice explanation, payment plan setup, and billing dispute triage without fee earner involvement.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Compliance Monitoring Agent', description: 'SRA, ABA, and regulatory deadline tracking with automated alerts, document request workflows, and audit trail generation.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Research Support Agent', description: 'Case research briefing, precedent identification, and document summarisation to reduce fee earner research time.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Agentforce use cases work best for law firms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strongest Agentforce use cases for legal are client intake automation (conflict checks, engagement letter generation, KYC collection), billing inquiry resolution (WIP queries, invoice explanation, payment plans), matter status updates and deadline tracking, and contract review assistance. These are high-volume administrative tasks that consume fee earner time without generating billable value. Agentforce handles the administrative orchestration while fee earners focus on client-facing work.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce handle legal professional privilege and client confidentiality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Einstein Trust Layer ensures that client data and privileged communications are masked before any information is included in LLM prompts, with zero data retention at external model providers. All Agentforce processing occurs within your Salesforce trust boundary. We configure agents with strict matter-level access controls ensuring agents only surface data relevant to the specific matter and client context — privilege boundaries are enforced at the data model level, not as an afterthought.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with legal practice management systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft connects Agentforce to legal practice management systems — iManage, NetDocuments, Clio, Thomson Reuters Elite 3E, and Aderant — to surface matter data, document status, and billing information without requiring fee earners to switch between systems. For firms already on Salesforce, native integrations with Revenue Cloud and custom matter management objects are available without MuleSoft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Agentforce suitable for professional services firms beyond law?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The same Agentforce patterns apply across accounting firms, management consultancies, and advisory firms — client onboarding automation, engagement management, billing inquiry resolution, and compliance deadline tracking are common to all professional services businesses. The specific data integrations and compliance requirements differ by firm type but the underlying agent architecture is consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a legal Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot on one use case — client intake automation or billing inquiry resolution — takes 2–3 weeks from kick-off to production. Full deployments covering multiple use cases with practice management system integration run 6–10 weeks. We always recommend starting with a single, clearly scoped use case to prove the approach and build internal confidence before expanding.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce help with SRA or ABA compliance requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce compliance monitoring agents track regulatory deadlines, trigger document collection workflows, and generate audit trail exports for SRA or ABA regulatory reviews. The Einstein Trust Layer provides immutable logging of every agent action with timestamps. Compliance configurations are reviewed against your specific regulatory obligations before deployment — we do not use generic templates for regulated legal environments.',
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
    { '@type': 'ListItem', position: 3, name: 'Industries', item: 'https://kovil.ai/agentforce/industries' },
    { '@type': 'ListItem', position: 4, name: 'Legal & Professional Services', item: 'https://kovil.ai/agentforce/industries/legal-professional-services' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Legal & Professional Services | Kovil AI',
  description: 'Production Agentforce for law firms, consultancies, and professional services — contract review automation, client intake agents, matter management, and billing inquiry resolution.',
  url: 'https://kovil.ai/agentforce/industries/legal-professional-services',
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <LegalProfessionalServicesAgentforcePage />
    </>
  )
}

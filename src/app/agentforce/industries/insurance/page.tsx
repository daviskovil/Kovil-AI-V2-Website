import type { Metadata } from 'next'
import InsuranceAgentforcePage from '@/src/pages/agentforce/industries/InsuranceAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Insurance | Kovil AI',
  description: 'Production Agentforce for insurance — FNOL claims intake automation, policy renewal agents, underwriting triage, and broker support. Financial Services Cloud · NAIC compliant · Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/insurance' },
  keywords: [
    'agentforce insurance',
    'salesforce agentforce insurance',
    'agentforce claims automation',
    'agentforce FNOL',
    'agentforce policy renewal',
    'agentforce underwriting',
    'agentforce insurance implementation',
    'agentforce P&C insurance',
    'salesforce insurance AI',
    'agentforce claims triage',
    'agentforce financial services cloud insurance',
    'agentforce broker support',
    'salesforce insurance automation',
    'agentforce NAIC compliance',
    'agentforce Guidewire integration',
    'agentforce Duck Creek',
    'insurance AI agent',
    'agentforce specialty insurance',
    'salesforce FSC insurance',
    'agentforce insurance partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Insurance | Kovil AI',
    description: 'Production Agentforce for insurance — FNOL claims intake automation, policy renewal agents, underwriting triage, and broker support. Financial Services Cloud · NAIC compliant · Fixed-price sprints.',
    url: 'https://kovil.ai/agentforce/industries/insurance',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Insurance — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Insurance | Kovil AI',
    description: 'Production Agentforce for insurance — FNOL claims intake automation, policy renewal agents, underwriting triage, and broker support. Financial Services Cloud · NAIC compliant.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Insurance',
  description: 'Production Agentforce deployments for P&C, life, and specialty insurers — FNOL claims intake automation, policy renewal agents, underwriting triage, fraud alert triage, broker support, and customer coverage inquiry agents built on Financial Services Cloud (Insurance), Data Cloud, and MuleSoft.',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
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
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '734 Franklin Ave',
        addressLocality: 'Garden City',
        addressRegion: 'NY',
        postalCode: '11530',
        addressCountry: 'US',
      },
    ],
  },
  serviceType: 'Salesforce Agentforce Implementation',
  category: 'Insurance',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/agentforce/industries/insurance',
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce Implementation',
    url: 'https://kovil.ai/agentforce',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Insurance Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'FNOL Claims Intake Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Policy Renewal Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Underwriting Triage Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Broker Support Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fraud Alert Triage Agent' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Coverage Inquiry Agent' } },
    ],
  },
  offers: { '@type': 'Offer', description: 'Fixed-price 2–3 week sprint to production' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Salesforce products are needed for insurance Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The core stack is Agentforce (included in qualifying Salesforce licences), Financial Services Cloud with the Insurance module, Data Cloud for unified policyholder and claims data, and MuleSoft for connecting claims management and policy admin systems. Einstein Trust Layer is included. Revenue Cloud handles billing and payment automation. DocuSign is optional for document generation workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Agentforce NAIC compliant for insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce running on Salesforce Financial Services Cloud (Insurance) supports NAIC compliance through the Einstein Trust Layer audit trail, configurable escalation thresholds, and claims handling timeline monitoring. Every agent decision is logged with a full reasoning chain for regulatory examination. State-specific requirements — prompt payment laws, acknowledgement timelines — are configured into the agent\'s action boundaries during implementation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with Guidewire ClaimCenter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft provides a native Guidewire API connector that gives Agentforce real-time read and write access to ClaimCenter — FNOL creation, claim status retrieval, adjuster assignment, reserve setting, and payment triggering. The same connector supports Duck Creek, Majesco, and other major claims management systems. We scope the integration depth during the pre-sprint discovery.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best Agentforce use cases for P&C insurers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For P&C carriers, the highest-ROI use cases are FNOL claims intake automation, policy renewal agents, and underwriting triage. Fraud alert triage and broker support agents typically follow in a second sprint once the core claims and renewal workflows are proven.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an Agentforce insurance implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production Agentforce insurance sprint — scoped to one primary workflow such as FNOL intake or policy renewal — takes 2–3 weeks from kickoff to production deployment. This includes FSC configuration, MuleSoft integration to the claims or policy admin system, agent Topic and Action build, testing against real-world claim scenarios, and go-live.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Financial Services Cloud have an insurance-specific module?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Financial Services Cloud includes an Insurance vertical layer with native objects for policies, coverage lines, claims, and beneficiaries. This gives Agentforce direct access to structured insurance data without custom object development. The Insurance module supports P&C, life, and health line-specific data models.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does FNOL automation work in Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The FNOL agent receives the first notice of loss via any configured digital channel — web portal, mobile app, email, or API. It extracts incident details using Atlas Reasoning Engine, classifies the claim type and severity tier, retrieves the policyholder\'s policy data from FSC to validate coverage, sets an initial reserve, routes the claim to the appropriate adjuster queue with priority scoring, and sends an acknowledgement. The entire intake process completes in under two minutes without adjuster involvement for standard claims.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce detect insurance fraud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce can be configured to review claims flagged by Einstein anomaly detection against historical patterns in Data Cloud. When anomalies are detected, the fraud triage agent reviews the pattern, creates an SIU referral case with a structured evidence package, initiates customer verification outreach, and links related claims for cross-case analysis.',
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
    { '@type': 'ListItem', position: 4, name: 'Insurance', item: 'https://kovil.ai/agentforce/industries/insurance' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Insurance | Kovil AI',
  description: 'Production Agentforce for insurance — FNOL claims intake automation, policy renewal agents, underwriting triage, and broker support. Financial Services Cloud · NAIC compliant · Fixed-price sprints.',
  url: 'https://kovil.ai/agentforce/industries/insurance',
  datePublished: '2026-06-23',
  dateModified: '2026-06-23',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  breadcrumb: { '@type': 'BreadcrumbList', itemListElement: breadcrumbSchema.itemListElement },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#use-cases h2', '#use-cases h3', '#faq-grid h3'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <InsuranceAgentforcePage />
    </>
  )
}

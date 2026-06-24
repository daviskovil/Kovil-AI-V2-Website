import type { Metadata } from 'next'
import FinancialServicesAgentforcePage from '@/src/pages/agentforce/industries/FinancialServicesAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Financial Services & Banking | Kovil AI',
  description: 'Production Agentforce implementations for banks, lenders, and wealth managers — KYC onboarding automation, loan servicing case resolution, compliance monitoring agents, and investment advisory support. Financial Services Cloud · Einstein Trust Layer · Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/financial-services' },
  keywords: [
    'agentforce financial services',
    'salesforce agentforce banking',
    'agentforce wealth management',
    'agentforce loan servicing',
    'agentforce compliance monitoring',
    'agentforce KYC',
    'financial services cloud agentforce',
    'agentforce fintech',
    'agentforce FSC',
    'salesforce financial services AI',
    'agentforce investment advisory',
    'agentforce fraud triage',
    'agentforce mortgage processing',
    'salesforce FSC agentforce implementation',
    'agentforce einstein trust layer financial',
    'agentforce AML compliance',
    'agentforce wealth onboarding automation',
    'salesforce agentforce SEC FINRA',
    'agentforce financial services cloud deployment',
    'agentforce banking implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Financial Services & Banking | Kovil AI',
    description: 'Production Agentforce implementations for banks, lenders, and wealth managers — KYC onboarding automation, loan servicing case resolution, compliance monitoring agents, and investment advisory support. Financial Services Cloud · Einstein Trust Layer · Fixed-price sprints.',
    url: 'https://kovil.ai/agentforce/industries/financial-services',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce Financial Services' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Financial Services & Banking | Kovil AI',
    description: 'Production Agentforce implementations for banks, lenders, and wealth managers — KYC onboarding automation, loan servicing case resolution, compliance monitoring agents, and investment advisory support.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Financial Services & Banking',
  description: 'Production Agentforce implementations for banks, lenders, and wealth managers — KYC onboarding automation, loan servicing case resolution, compliance monitoring agents, and investment advisory support.',
  serviceType: 'Agentforce Implementation',
  category: 'Financial Services',
  url: 'https://kovil.ai/agentforce/industries/financial-services',
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
    description: 'Fixed-price Agentforce financial services implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Financial Services Use Cases',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Wealth Management Onboarding Agent',
          description: 'KYC document collection, suitability questionnaire, account opening — automated via Agentforce and Financial Services Cloud.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Loan Servicing Case Resolution Agent',
          description: 'Payment queries, deferral requests, and payoff statements resolved autonomously by Agentforce Service agents.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Compliance Monitoring Agent',
          description: 'AML alert triage, KYC refresh management, suspicious activity flagging with Einstein Trust Layer audit trail.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Investment Advisory Support Agent',
          description: 'Portfolio review prep, client query response, and personalised market update delivery for financial advisors.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mortgage Application Support Agent',
          description: 'Document completeness monitoring, applicant outreach, status updates, and underwriting queue management.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fraud Alert Triage Agent',
          description: 'Transaction anomaly investigation, customer verification, and structured fraud case creation via Agentforce and Data Cloud.',
        },
      },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Salesforce products does Agentforce for financial services require?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production Agentforce financial services deployment typically requires Agentforce licences (included with certain Sales/Service Cloud editions or available as an add-on), Financial Services Cloud for relationship and account data, Salesforce Data Cloud for unified customer profiles grounding agent actions in real-time context, and Einstein licences for generative features. The exact licence combination depends on your use case scope — we assess this during the readiness phase.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce handle regulatory compliance in financial services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce includes Einstein Trust Layer as the compliance backbone. Every agent action — prompt content, data retrieved, response generated — is logged to an immutable audit trail with full traceability. The Trust Layer enforces zero data retention with external LLM providers, applies configurable PII masking before any data reaches the model, and provides prompt injection prevention. For SEC, FINRA, and SOX requirements, we configure audit log exports to your compliance SIEM and define explicit escalation thresholds in Agent Instructions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with our loan origination or core banking system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft is the standard integration layer connecting Agentforce to external banking systems — loan origination systems (Encompass, Blend, nCino), core banking platforms (Finastra, Temenos, Jack Henry, FIS), and compliance databases. MuleSoft provides circuit breaker, retry logic, and rate limiting out of the box. For simpler integrations, Apex callouts and named credentials can connect directly to REST APIs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What financial services use cases does Agentforce handle best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce performs strongest on high-volume, repetitive financial services interactions with clear resolution logic: loan servicing queries (payment status, payoff statements, deferral eligibility), KYC and wealth management onboarding sequences, compliance alert triage (AML, KYC refresh), investment advisory support (portfolio briefings, client queries), and mortgage application status management. Use cases requiring nuanced human judgment — complex loss mitigation, investment advice, regulatory disputes — are best handled with agent-assisted handoff rather than full autonomy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an Agentforce financial services implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot targeting one use case — for example, loan servicing case resolution or KYC onboarding automation — typically takes 2–3 weeks from kick-off to production. Full financial services deployments covering multiple use cases with compliance review, MuleSoft integration, and multi-channel configuration typically run 6–12 weeks. We always recommend starting with a single, read-only use case to prove the approach before expanding scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Agentforce work with Financial Services Cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce has native integration with Financial Services Cloud — agents operate within the Relationship Manager workspace, have direct access to FSC data objects (Financial Accounts, Households, Financial Goals, Referrals), and can surface next-best-action recommendations to advisors. The FSC data model grounds agent responses in real client and account data without requiring separate data transformation pipelines.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ROI of Agentforce for financial services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ROI in financial services Agentforce deployments is typically driven by three factors: case resolution cost reduction (autonomous resolution of Tier 1 and Tier 2 cases eliminates agent handling time), response time improvement (lead and case response drops from hours to minutes, improving conversion and retention), and compliance cost reduction (automated audit logging and alert triage reduces compliance team workload). Our financial services clients have seen projected annual savings of $280K–$400K per deployment at mid-size organisations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce handle sensitive client financial data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einstein Trust Layer is Salesforce\'s data protection architecture for Agentforce. It ensures that sensitive client financial data — account numbers, balances, transaction history — is masked before being included in any LLM prompt, that no prompt content is retained by external model providers, and that every data access event is logged with full traceability. All agent processing occurs within your Salesforce trust boundary. For organisations with strict data residency requirements, Salesforce offers private cloud deployment options that ensure no data leaves your designated region.',
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
    { '@type': 'ListItem', position: 4, name: 'Financial Services', item: 'https://kovil.ai/agentforce/industries/financial-services' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Financial Services & Banking | Kovil AI',
  description: 'Production Agentforce implementations for banks, lenders, and wealth managers — KYC onboarding automation, loan servicing case resolution, compliance monitoring agents, and investment advisory support.',
  url: 'https://kovil.ai/agentforce/industries/financial-services',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <FinancialServicesAgentforcePage />
    </>
  )
}

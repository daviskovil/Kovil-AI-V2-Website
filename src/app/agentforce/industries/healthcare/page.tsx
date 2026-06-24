import type { Metadata } from 'next'
import HealthcareAgentforcePage from '@/src/pages/agentforce/industries/HealthcareAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Healthcare & Life Sciences | Kovil AI',
  description: 'Production Agentforce for healthcare — patient scheduling automation, prior authorization agents, care coordination, and billing inquiry resolution. Health Cloud · HIPAA · Einstein Trust Layer · Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/healthcare' },
  keywords: [
    'agentforce healthcare',
    'salesforce agentforce health cloud',
    'agentforce patient scheduling',
    'agentforce prior authorization',
    'agentforce hipaa',
    'health cloud agentforce',
    'agentforce life sciences',
    'salesforce health AI',
    'agentforce EHR integration',
    'agentforce care coordination',
    'agentforce billing inquiry',
    'agentforce clinical triage',
    'salesforce agentforce hospital',
    'agentforce epic integration',
    'agentforce FHIR R4',
    'agentforce health cloud implementation',
    'agentforce revenue cycle healthcare',
    'salesforce AI patient scheduling',
    'agentforce post discharge follow up',
    'agentforce healthcare implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Healthcare & Life Sciences | Kovil AI',
    description: 'Production Agentforce for healthcare — patient scheduling automation, prior authorization agents, care coordination, and billing inquiry resolution. Health Cloud · HIPAA · Einstein Trust Layer · Fixed-price sprints.',
    url: 'https://kovil.ai/agentforce/industries/healthcare',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce Healthcare' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Healthcare & Life Sciences | Kovil AI',
    description: 'Production Agentforce for healthcare — patient scheduling automation, prior authorization agents, care coordination, and billing inquiry resolution.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Healthcare & Life Sciences',
  description: 'Production Agentforce implementations for health systems, clinics, and life sciences companies — patient scheduling automation, prior authorisation agents, care coordination, and billing inquiry resolution.',
  serviceType: 'Agentforce Implementation',
  category: 'Healthcare & Life Sciences',
  url: 'https://kovil.ai/agentforce/industries/healthcare',
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
    description: 'Fixed-price Agentforce healthcare implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Healthcare Use Cases',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Patient Scheduling Agent',
          description: 'Appointment booking, rescheduling, cancellations, and waitlist management via Health Cloud and EHR integration.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Prior Authorization Resolution Agent',
          description: 'Clinical documentation collection, payer portal submission, status tracking, and clinical staff alert automation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Care Coordination Agent',
          description: 'Care transitions, post-discharge follow-up, referral coordination, and care gap outreach via Health Cloud.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Patient Billing Inquiry Agent',
          description: 'EOB queries, payment plan setup, insurance claim status, and financial assistance eligibility routing.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Clinical Query Triage Agent',
          description: 'Patient message routing, clinical context surfacing, protocol triggering, and urgent escalation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Revenue Cycle Support Agent',
          description: 'Prior authorisation denial management, claim status monitoring, payer follow-up automation, and appeals documentation.',
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
      name: 'What Salesforce products are needed for healthcare Agentforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A production healthcare Agentforce deployment typically requires Agentforce licences, Health Cloud for patient relationship and care data management, Salesforce Data Cloud for unified patient 360 profiles that ground agent actions in real-time clinical context, and Einstein licences for generative features. MuleSoft is required for EHR system integration (Epic, Cerner, athenahealth). The exact licence combination depends on your use case scope and existing Salesforce investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Agentforce HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salesforce Health Cloud and Agentforce operate within Salesforce\'s HIPAA-eligible environment. The Einstein Trust Layer ensures that PHI is masked before any data is included in LLM prompts, that no patient data is retained by external model providers, and that every agent action is logged to an immutable audit trail. Salesforce makes a Business Associate Agreement (BAA) available for Health Cloud customers. We configure every healthcare Agentforce deployment with PHI minimisation, minimum necessary access controls, and HIPAA-compliant escalation paths as non-negotiable design requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with Epic or Cerner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft connects Agentforce to Epic via FHIR R4 APIs — the Epic App Orchard MuleSoft connector provides structured access to scheduling, clinical, and patient data. Oracle Health (Cerner) integration follows the same FHIR R4 pattern. athenahealth and Meditech integrations are available via MuleSoft connectors. FHIR R4 compliance means Agentforce agents can read and write clinical data in structured format without custom parsing logic for each EHR vendor.',
      },
    },
    {
      '@type': 'Question',
      name: 'What healthcare use cases does Agentforce handle best?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce performs strongest on high-volume, protocol-driven healthcare interactions: patient scheduling (booking, rescheduling, waitlist management), patient billing inquiries (EOB explanation, claim status, payment plan setup), prior authorisation status tracking and follow-up, care coordination outreach (post-discharge follow-up, referral confirmation, care gap outreach), and clinical message triage and routing. Use cases requiring clinical judgment — diagnosis, treatment decisions, prescription management — require human oversight and are best configured as agent-assisted workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a healthcare Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot targeting one use case — for example, patient scheduling automation or billing inquiry resolution — typically takes 2–3 weeks from kick-off to production. Full healthcare deployments covering multiple use cases with HIPAA review, MuleSoft EHR integration, clinical governance configuration, and multi-channel setup typically run 6–12 weeks. EHR integration timelines depend heavily on your EHR vendor and the availability of FHIR-compliant APIs in your environment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Agentforce work with Health Cloud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Agentforce has native integration with Health Cloud — agents operate within the Health Cloud data model, have direct access to care plan records, patient timelines, care team assignments, and referral management objects. Health Cloud\'s patient 360 view provides the clinical context that grounds every Agentforce agent response. Care gap, care coordination, and scheduling agents are all natural fits for the Health Cloud data model.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce handle prior authorizations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Prior authorisation is a strong Agentforce use case for the administrative components: collecting required clinical documentation from the patient record in Health Cloud, submitting to payer portals via MuleSoft integration with clearinghouses (Change Healthcare, Availity), tracking authorisation status, and alerting clinical staff when decisions are received or additional information is required. The clinical determination of medical necessity remains a physician responsibility — Agentforce handles the administrative orchestration around that clinical decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce protect patient data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einstein Trust Layer is the PHI protection architecture for Agentforce in healthcare. It masks protected health information — MRN, diagnosis codes, medication data, insurance identifiers — before any data is included in an LLM prompt. No PHI is retained by external model providers. Every data access event is logged with full traceability for HIPAA audit purposes. All agent processing occurs within the Salesforce Health Cloud trust boundary, which operates under a BAA. For organisations with additional data residency requirements, Salesforce offers private cloud deployment options.',
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
    { '@type': 'ListItem', position: 4, name: 'Healthcare & Life Sciences', item: 'https://kovil.ai/agentforce/industries/healthcare' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Healthcare & Life Sciences | Kovil AI',
  description: 'Production Agentforce for healthcare — patient scheduling automation, prior authorization agents, care coordination, and billing inquiry resolution.',
  url: 'https://kovil.ai/agentforce/industries/healthcare',
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
      <HealthcareAgentforcePage />
    </>
  )
}

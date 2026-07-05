import type { Metadata } from 'next'
import CRMOpsLayerPage from '@/src/pages/ai-workflow-automation-library/CRMOpsLayerPage'

export const metadata: Metadata = {
  title: 'CRM Ops Layer — AI Data Hygiene',
  description: 'See how Kovil AI builds an intelligent CRM ops layer: inbound records → GPT-4o parser → 18 validation checks → Clearbit enrichment → clean push to Salesforce or HubSpot. Zero duplicate, zero dirty data.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/crm-ops-layer' },
  robots: { index: true, follow: true },
  keywords: [
    'CRM data hygiene automation',
    'Salesforce data cleaning',
    'HubSpot data validation',
    'AI CRM ops',
    'CRM enrichment automation',
    'Clearbit enrichment',
    'n8n CRM workflow',
  ],
  openGraph: {
    type: 'website',
    title: 'CRM Ops Layer — AI Data Hygiene | Kovil AI',
    description: 'Inbound records → GPT-4o parser → 18 validation checks → Clearbit enrichment → clean Salesforce/HubSpot push. 5 hrs/day saved.',
    url: 'https://kovil.ai/ai-workflow-automation-library/crm-ops-layer',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'CRM Ops Layer — Intelligent Data Hygiene — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM Ops Layer — AI Data Hygiene | Kovil AI',
    description: 'Inbound records → GPT-4o parser → 18 validation checks → Clearbit enrichment → clean Salesforce/HubSpot push. 5 hrs/day saved.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'CRM Ops Layer — Intelligent Data Hygiene for Salesforce and HubSpot',
  description: 'An automated workflow that captures inbound records from forms, email, CSV and API, parses and normalises them with GPT-4o, runs 18 validation checks, enriches contacts via Clearbit, and writes clean records to Salesforce or HubSpot with zero duplicates.',
  totalTime: 'PT30S',
  dateModified: '2025-04-21',
  tool: ['n8n', 'GPT-4o', 'Clearbit', 'Salesforce', 'HubSpot', 'Slack'],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Inbound capture from all four sources',
      text: 'n8n captures inbound records from web forms (Typeform/HubSpot), email parsing inbox, CSV bulk uploads via Slack, and direct API POST from partner systems. All four sources feed a single normalisation pipeline.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'GPT-4o field parser',
      text: 'GPT-4o receives the raw record and a strict JSON schema matching the CRM field structure. It extracts and maps every field: company name to full legal format, phone to E.164, industry to standardised taxonomy, and deal stage to CRM pipeline stage names.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Validation engine — 18 checks',
      text: 'A rule-based validator runs 18 checks: required fields, MX record email validation, dialable phone, blocklist check, deal value range, duplicate detection, and industry taxonomy matching. Critical failures are rejected with error codes; soft failures are flagged and allowed through.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Clearbit enrichment',
      text: 'For contacts with a valid business email, n8n calls the Clearbit Enrichment API to append 12+ firmographic fields: employee count, annual revenue, tech stack, LinkedIn URL, company description, and HQ location.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'CRM write to Salesforce or HubSpot',
      text: 'The clean, enriched record is pushed to the target CRM via API. Upsert logic prevents duplicates: existing contacts are updated, new contacts are created with all fields populated and the correct owner and pipeline stage assigned.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Slack audit trail',
      text: 'Every processed record is logged to #crm-ops-log with a status emoji (clean, flagged, or rejected). Rejections include the specific validation failure and raw data for resubmission. A weekly digest is posted every Monday with pass rates and top failure reasons.',
    },
  ],
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'AI Workflow Library', item: 'https://kovil.ai/ai-workflow-automation-library' },
    { '@type': 'ListItem', position: 3, name: 'CRM Ops Layer — Intelligent Data Hygiene', item: 'https://kovil.ai/ai-workflow-automation-library/crm-ops-layer' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the 18 validation checks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 18 checks cover: required fields present (company name, primary email, phone), email format valid, MX record check (the email domain must have active mail servers), phone number dialable in E.164 format, company name not on the configured blocklist, deal value within acceptable range, no duplicate contact email in CRM, industry matches the approved taxonomy of 24 categories, deal stage matches CRM pipeline stage names, first and last name split correctly, website URL resolvable, country code ISO 3166-1 compliant, and six custom business-logic rules configured per client.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can this work with both Salesforce and HubSpot simultaneously?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The workflow can be configured to write to either CRM or both simultaneously. For agencies managing clients on different CRM platforms, the routing logic uses the client identifier to determine the correct CRM target for each record.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens to records that fail validation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hard failures (invalid email, confirmed duplicate, blocklisted company) are rejected and logged to the Slack #crm-ops-log channel with a specific error code. The ops team can correct the record and resubmit via a dedicated Slack action. Soft failures (missing optional field, unresolvable website) are allowed through with a flag visible in the CRM record.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Clearbit enrichment work and what does it add?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For contacts with a valid business email, n8n calls the Clearbit Enrichment API and appends 12+ firmographic fields: employee headcount, estimated annual revenue, funding stage, tech stack (tools the company uses), LinkedIn company URL, industry classification, and HQ address. This eliminates manual research and ensures every CRM contact is fully populated on entry.',
      },
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CRM Ops Layer — AI Data Hygiene',
  description: 'Intelligent CRM ops layer using GPT-4o and Clearbit to validate, enrich, and write clean records to Salesforce or HubSpot with 18 validation checks and zero duplicates.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'AI Workflow Automation',
  areaServed: { '@type': 'Country', name: 'United States' },
  url: 'https://kovil.ai/ai-workflow-automation-library/crm-ops-layer',
  category: 'Ad & Marketing',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <div className="pt-20">
        <CRMOpsLayerPage />
      </div>
    </>
  )
}

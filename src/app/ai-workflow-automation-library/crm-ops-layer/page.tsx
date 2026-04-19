import type { Metadata } from 'next'
import CRMOpsLayerPage from '@/src/pages/ai-workflow-automation-library/CRMOpsLayerPage'

export const metadata: Metadata = {
  title: 'CRM Ops Layer — AI Data Hygiene for Salesforce & HubSpot | Kovil AI',
  description: 'See how Kovil AI builds an intelligent CRM ops layer: inbound records → GPT-4o parser → 18 validation checks → Clearbit enrichment → clean push to Salesforce or HubSpot. Zero duplicate, zero dirty data.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/crm-ops-layer' },
  openGraph: {
    type: 'website',
    title: 'CRM Ops Layer — AI Data Hygiene for Salesforce & HubSpot | Kovil AI',
    description: 'Inbound records → GPT-4o parser → 18 validation checks → Clearbit enrichment → clean push to Salesforce or HubSpot. Zero duplicate, zero dirty data.',
    url: 'https://kovil.ai/ai-workflow-automation-library/crm-ops-layer',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'CRM Ops Layer — Intelligent Data Hygiene for Salesforce and HubSpot',
  description: 'An automated workflow that captures inbound records from forms, email, CSV and API, parses and normalises them with GPT-4o, runs 18 validation checks, enriches contacts via Clearbit, and writes clean records to Salesforce or HubSpot with zero duplicates.',
  totalTime: 'PT30S',
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="pt-20">
        <CRMOpsLayerPage />
      </div>
    </>
  )
}

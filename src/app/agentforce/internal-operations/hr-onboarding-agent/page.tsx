import type { Metadata } from 'next'
import HROnboardingAgentPage from '@/src/pages/agentforce/internal-operations/HROnboardingAgentPage'

export const metadata: Metadata = {
  title: 'Agentforce HR Onboarding Agent — Automated New Hire Onboarding | Kovil AI',
  description: 'Agentforce HR onboarding agent that auto-generates personalised checklists, triggers system provisioning, answers policy questions 24/7, and sends manager nudges — zero chase emails.',
  alternates: { canonical: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent' },
  keywords: [
    'Agentforce HR onboarding agent',
    'Salesforce AI employee onboarding',
    'Agentforce HR automation',
    'Salesforce internal operations AI',
    'HR onboarding Agentforce',
    'Salesforce AI new hire onboarding',
    'Agentforce HR workflow',
    'Salesforce Agentforce implementation',
    'Agentforce internal operations',
    'HR onboarding automation Salesforce',
    'Salesforce new hire provisioning',
    'Agentforce employee onboarding checklist',
    'Salesforce HR AI agent',
    'Agentforce policy Q&A',
    'Kovil AI Agentforce',
    'Salesforce Agentforce partner New York',
    'AI HR onboarding workflow',
    'Salesforce Atlas Reasoning Engine HR',
    'Agentforce system access provisioning',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce HR Onboarding Agent — Automated New Hire Onboarding | Kovil AI',
    description: 'Agentforce HR onboarding agent that auto-generates personalised checklists, triggers system provisioning, answers policy questions 24/7, and sends manager nudges — zero chase emails.',
    url: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce HR Onboarding Agent — Automated New Hire Onboarding | Kovil AI',
    description: 'Agentforce HR onboarding agent that auto-generates personalised checklists, triggers system provisioning, answers policy questions 24/7, and sends manager nudges — zero chase emails.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce HR Onboarding Agent — Automated New Hire Onboarding',
  description: 'Agentforce HR onboarding agent that auto-generates personalised checklists, triggers system provisioning, answers policy questions 24/7, and sends manager nudges — zero chase emails.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
    sameAs: [
      'https://www.linkedin.com/company/kovil-ai/',
      'https://clutch.co/profile/kovil-ai',
      'https://www.crunchbase.com/organization/kovil-ai',
    ],
  },
  serviceType: 'Salesforce Agentforce Implementation',
  url: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent',
  areaServed: ['New York', 'United States', 'Worldwide'],
  isPartOf: {
    '@type': 'Service',
    name: 'Agentforce for Internal Operations',
    url: 'https://kovil.ai/agentforce/internal-operations',
  },
  offers: { '@type': 'Offer', description: 'Fixed-price 3-week sprint with 2-week risk-free pilot' },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce HR Onboarding Agent — Automated New Hire Onboarding | Kovil AI',
  description: 'Agentforce HR onboarding agent that auto-generates personalised checklists, triggers system provisioning, answers policy questions 24/7, and sends manager nudges — zero chase emails.',
  url: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which HRIS systems does the integration support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We configure integrations with Workday, BambooHR, and HiBob via API — these cover the majority of mid-market and enterprise HR setups. For other HRIS platforms, we use the platform\'s API or a middleware integration (Mulesoft or n8n) to feed the employee record creation event into Salesforce. The specific integration is scoped in Week 1 — if you use a platform not listed, we confirm integration feasibility before the sprint begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a new hire does not complete checklist items on time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The agent sends automated nudges to the new hire for self-service items (reminders via Slack at configurable intervals). For items requiring manager action, the manager receives a Slack alert. If mandatory items are still incomplete after a configured grace period, HR receives an escalation flag with the specific items outstanding and the hire\'s name. No mandatory item is silently allowed to expire — the system keeps nudging until completion or HR manually overrides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can it handle different onboarding tracks for different departments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — this is a core configuration during implementation. Each department gets its own onboarding track: different checklist items, different system access requirements, different compliance training, and different policy document sets for the Q&A library. Location-based variations are also supported — US vs UK vs APAC hires have different compliance training and policy requirements configured separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the policy Q&A work in practice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'New hires DM the onboarding Slack bot with their question in plain English. Atlas retrieves the relevant policy section, summarises it conversationally, and responds within seconds. For questions that require nuance or HR judgement (edge cases, exceptions to policy), Atlas flags the question for HR follow-up and tells the new hire that a human will respond. All Q&A is logged — the HR team can see every question asked and every answer given, with the option to improve the policy library based on frequently asked questions.',
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
    { '@type': 'ListItem', position: 3, name: 'Internal Operations', item: 'https://kovil.ai/agentforce/internal-operations' },
    { '@type': 'ListItem', position: 4, name: 'HR Onboarding Agent', item: 'https://kovil.ai/agentforce/internal-operations/hr-onboarding-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <HROnboardingAgentPage />
    </>
  )
}

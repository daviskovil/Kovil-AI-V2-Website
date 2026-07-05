import type { Metadata } from 'next'
import FinancialServicesServiceCloudPage from '@/src/pages/agentforce/playbook/FinancialServicesServiceCloudPage'

export const metadata: Metadata = {
  title: 'From 48-Hour Case Resolution to 4 Hours: An Agentforce Service Cloud Build',
  description: 'Real Agentforce financial services deployment walkthrough — FCA-regulated lending platform, MuleSoft LMS integration, Einstein Trust Layer configuration, and 68% autonomous resolution at 90 days.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build' },
  keywords: [
    'Agentforce financial services',
    'Salesforce Service Cloud financial AI',
    'Agentforce FS implementation',
    'financial services case resolution Agentforce',
    'Agentforce banking service cloud',
    'Agentforce insurance implementation',
    'Salesforce AI financial services',
    'Agentforce MuleSoft integration',
    'Agentforce FCA compliance',
    'Agentforce lending platform',
    'Agentforce Service Cloud deployment',
    'Agentforce Einstein Trust Layer financial',
    'Agentforce PII masking financial services',
    'Agentforce case study results',
    'Agentforce autonomous resolution rate',
    'Salesforce Agentforce UK financial services',
    'Agentforce regulated industry deployment',
    'Agentforce loan status agent',
    'Agentforce Data Cloud financial',
    'Salesforce AI customer service financial',
  ],
  openGraph: {
    type: 'article',
    title: 'From 48-Hour Case Resolution to 4 Hours: An Agentforce Service Cloud Build',
    description: 'Real Agentforce financial services deployment walkthrough — FCA-regulated lending platform, MuleSoft LMS integration, Einstein Trust Layer configuration, and 68% autonomous resolution at 90 days.',
    url: 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI Agentforce Playbook' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From 48-Hour Case Resolution to 4 Hours: An Agentforce Service Cloud Build',
    description: 'Real Agentforce financial services deployment walkthrough — FCA-regulated lending platform, MuleSoft LMS integration, Einstein Trust Layer configuration, and 68% autonomous resolution at 90 days.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From 48-Hour Case Resolution to 4 Hours: An Agentforce Service Cloud Build',
  description: 'Real Agentforce financial services deployment walkthrough — FCA-regulated lending platform, MuleSoft LMS integration, Einstein Trust Layer configuration, and 68% autonomous resolution at 90 days.',
  author: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
  image: { '@type': 'ImageObject', url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630 },
  url: 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build' },
  datePublished: '2026-04-01',
  dateModified: '2026-04-30',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'From 48-Hour Case Resolution to 4 Hours: An Agentforce Service Cloud Build | Kovil AI',
  description: 'Real Agentforce financial services deployment walkthrough — FCA-regulated lending platform, MuleSoft LMS integration, Einstein Trust Layer configuration, and 68% autonomous resolution at 90 days.',
  url: 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build',
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
      name: 'What results did this Agentforce financial services deployment achieve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At 90 days, the deployment achieved a 68% autonomous resolution rate on loan status queries, reduced average case resolution time from 48 hours to 4.2 hours, maintained a 4.7/5 CSAT score (identical to the pre-deployment baseline), and generated a projected annual cost reduction of £340,000 based on saved handling time across autonomously resolved cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why was loan status queries chosen as the first Agentforce use case instead of all three case types?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Loan status queries were entirely read-only — no write operations, no record updates, no system-of-record changes. This dramatically reduced the blast radius if something went wrong in the first weeks of production. Repayment schedule changes required writes to the loan management system and policy validation logic. Hardship requests involved FCA-regulated customer communication guidance. Both introduced compliance risk that was avoided by starting with a read-only use case and proving the approach before expanding scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'How was MuleSoft used in this Agentforce financial services build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MuleSoft Anypoint Platform was used to connect Agentforce to the client\'s proprietary loan management system (LMS), which held all loan account data outside Salesforce. MuleSoft provided circuit breaker and retry logic out of the box, and implemented request queuing with a token bucket to manage the LMS API\'s undocumented rate limit of 200 requests per minute. The circuit breaker tripped twice during 90 days of production, both due to LMS maintenance windows — the agent handled both gracefully with zero customer complaints.',
      },
    },
    {
      '@type': 'Question',
      name: 'How was FCA compliance handled in the Agentforce Trust Layer configuration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FCA-regulated configuration included: PII masking of loan account numbers, Sort Codes, Account Numbers, and National Insurance numbers before any values were included in LLM prompts; full audit logging of every agent action exported to the client\'s compliance SIEM on a 15-minute schedule; a structured prompt injection test suite of 34 test cases run before go-live; and an explicit hardship detection trigger in the Instructions — if a customer used language indicating financial distress, the agent was required by FCA guidelines to immediately route to a vulnerable customer pathway.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Topics and Actions were built in this Agentforce Service Cloud deployment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The deployment defined 4 Topics: Loan Status Query (read-only, authenticated sessions), Communication Preference Update (low-risk write to Contact fields), Out-of-Scope Acknowledgement (creates a Case and confirms handoff for repayment changes and hardship requests), and General Enquiry (Knowledge Base informational queries). Six Actions were built: Get Loan Status (Apex to MuleSoft to LMS), Get Payment Schedule, Update Communication Preference, Create Hardship Flag, Escalate to Human (Omni-Channel routing), and Send Confirmation Email.',
      },
    },
    {
      '@type': 'Question',
      name: 'What went wrong in this Agentforce build and what would be done differently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three issues extended the build timeline by approximately 10 days. First, Data Cloud unification took 8 days instead of 3 due to duplicate Contact records from multiple legacy onboarding flows — the recommendation is to plan twice as long for Data Cloud unification in orgs with legacy data. Second, the LMS API rate limits were undocumented and only discovered during load testing in week 2. Third, the compliance officer only joined at UAT — for regulated industries, compliance should be included in the scoping phase and mid-build review to avoid retrofitting Instructions changes during UAT.',
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
    { '@type': 'ListItem', position: 3, name: 'Playbook', item: 'https://kovil.ai/agentforce/playbook' },
    { '@type': 'ListItem', position: 4, name: 'Financial Services Service Cloud Build', item: 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <FinancialServicesServiceCloudPage />
    </>
  )
}

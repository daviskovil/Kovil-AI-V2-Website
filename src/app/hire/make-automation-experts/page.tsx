import type { Metadata } from 'next'
import MakeAutomationExpertsPage from '@/src/pages/hire/MakeAutomationExpertsPage'

export const metadata: Metadata = {
  title: 'Hire Make.com Automation Experts — AI Workflow Automation, Matched in 48 Hours',
  description: 'Hire vetted Make.com automation experts embedded in your team in 48 hours. Complex scenario design, SaaS integrations, custom app development, webhook routing, error handling. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/make-automation-experts' },
  keywords: [
    'hire make.com automation experts',
    'make.com developer',
    'make.com expert',
    'hire make developer',
    'make.com workflow automation',
    'make.com specialist',
    'integromat developer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire Make.com Automation Experts — AI Workflow Automation, Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 Make.com automation experts embedded in your team in 48 hours. Scenario design, SaaS integrations, custom app development — sprint-delivered.',
    url: 'https://kovil.ai/hire/make-automation-experts',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-hire-make-automation-experts.png', width: 1200, height: 630, alt: 'Hire Make.com Automation Experts — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Make.com Automation Experts — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 Make.com experts in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-hire-make-automation-experts.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Make.com Automation Experts',
  description: 'Embed vetted Tier-1 Make.com automation experts into your team in 48 hours. Specialists in visual workflow design, complex SaaS integrations, custom app development, webhook routers, and error-handling setups.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'Make.com Workflow Automation',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/make-automation-experts',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.', url: 'https://kovil.ai/hire/make-automation-experts' },
}

// DefinedTerm — gives answer engines and LLMs a clean, unambiguous
// definition to lift for "what is a Make.com automation expert" queries,
// independent of the FAQ prose.
const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Make.com Automation Expert',
  description: 'A Make.com Automation Expert is an engineer who designs and builds workflow automations on Make.com (formerly Integromat), a visual platform that connects apps, APIs, and databases through drag-and-drop scenarios. They build advanced scenarios using routers, iterators, aggregators, filters, and raw HTTP calls — from simple cross-app syncs to complex, multi-route business logic with embedded AI decision steps, custom database updates, and error-handling pathways. The role spans scenario architecture, SaaS integration, custom Make app development, and production hardening.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Hiring Glossary', url: 'https://kovil.ai/hire' },
  url: 'https://kovil.ai/hire/make-automation-experts',
}

// WebPage + Speakable — mirrors the pattern used on kovil.ai/ and the
// other newer service pages: dateModified for freshness signals,
// speakable for voice/AEO surfaces.
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Hire Make.com Automation Experts — AI Workflow Automation, Matched in 48 Hours',
  description: 'Hire vetted Make.com automation experts embedded in your team in 48 hours. Complex scenario design, SaaS integrations, custom app development, webhook routing, error handling.',
  url: 'https://kovil.ai/hire/make-automation-experts',
  datePublished: '2026-07-10',
  dateModified: '2026-08-24',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'Kovil AI', url: 'https://kovil.ai' },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '#definition p', '#faq h3'],
  },
  publisher: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: { '@type': 'ImageObject', url: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a Make.com Automation Expert with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Needs', text: 'Fill a 5-minute intake form describing your automation requirements — scenarios to build, apps to connect, and tools to integrate.', url: 'https://kovil.ai/hire/make-automation-experts' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Expert', text: 'We surface 2–3 hand-picked Make.com experts matched to your exact SaaS integration use cases.', url: 'https://kovil.ai/hire/make-automation-experts' },
    { '@type': 'HowToStep', position: 3, name: 'Sprint & Deliver', text: 'Your expert works in focused sprints. An Engagement Manager audits every milestone output.', url: 'https://kovil.ai/hire/make-automation-experts' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Make.com and what can a Make.com expert build?', acceptedAnswer: { '@type': 'Answer', text: 'Make.com is a powerful visual workflow automation platform that connects apps, APIs, and databases. An expert builds advanced scenarios including routing, iteration, aggregation, custom webhook handling, and AI integrations.' } },
    { '@type': 'Question', name: 'How quickly can I hire a Make.com expert through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24–48 hours of submitting their brief. The expert starts on a milestone plan within 3–4 days with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Make.com vs Zapier vs n8n — which is right for my team?', acceptedAnswer: { '@type': 'Answer', text: 'Make.com offers visual scenario builder with robust branching and looping logic without complex code. Zapier is simpler but more expensive and limited. n8n is great for self-hosted requirements.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                          item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',             item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'Make.com Automation Experts',    item: 'https://kovil.ai/hire/make-automation-experts' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><MakeAutomationExpertsPage /></div>
    </>
  )
}

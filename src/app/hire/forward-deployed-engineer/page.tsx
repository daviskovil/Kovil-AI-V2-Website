import type { Metadata } from 'next'
import ForwardDeployedEngineerPage from '@/src/pages/hire/ForwardDeployedEngineerPage'

export const metadata: Metadata = {
  title: 'Hire a Forward Deployed Engineer (FDE) — Embedded in 48 Hours',
  description: 'Hire a vetted Forward Deployed Engineer through Kovil AI. Senior engineers embedded directly with your team, building, integrating, and shipping AI against your real workflows and systems. Matched in 48 hours, 2-week risk-free trial, 100% IP yours.',
  alternates: { canonical: 'https://kovil.ai/hire/forward-deployed-engineer' },
  keywords: [
    'hire forward deployed engineer',
    'forward deployed engineer',
    'forward deployed engineering',
    'what is a forward deployed engineer',
    'forward deployed engineer meaning',
    'forward deployed engineer vs solutions engineer',
    'FDE hire',
    'embedded AI engineer',
    'hire embedded engineer',
    'forward deployed engineer jobs',
    'forward deployed software engineer',
    'AI implementation engineer',
    'enterprise AI deployment engineer',
    'palantir forward deployed engineer alternative',
    'customer facing AI engineer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire a Forward Deployed Engineer (FDE) — Embedded in 48 Hours | Kovil AI',
    description: 'Senior engineers embedded directly with your team, building, integrating, and shipping AI against your real workflows and systems. Matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/hire/forward-deployed-engineer',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-hire-forward-deployed-engineer.png', width: 1200, height: 630, alt: 'Hire a Forward Deployed Engineer — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Forward Deployed Engineer (FDE) — Embedded in 48 Hours | Kovil AI',
    description: 'Senior engineers embedded directly with your team, building and shipping AI against your real workflows. Matched in 48 hours. 2-week risk-free trial.',
    images: ['https://kovil.ai/og-hire-forward-deployed-engineer.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire a Forward Deployed Engineer',
  description: 'Embed a vetted, senior Forward Deployed Engineer into your team in 48 hours. Specialists in bespoke workflow integration, rapid onsite prototyping, custom data pipelines, production hardening, and direct end-user iteration.',
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
  serviceType: 'Forward Deployed Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/forward-deployed-engineer',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/hire/forward-deployed-engineer' },
}

// DefinedTerm — gives answer engines and LLMs a clean, unambiguous
// definition to lift for "what is a forward deployed engineer" queries,
// independent of the FAQ prose.
const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Forward Deployed Engineer',
  alternateName: 'FDE',
  description: 'A Forward Deployed Engineer (FDE) is a senior engineer embedded directly with a customer’s team — on-site or tightly integrated remotely — who builds, integrates, and iterates software against that customer’s real, specific workflows and systems, rather than building generic product features from a distance. The role was popularized by Palantir and is now widely used by AI-native companies to move enterprise AI deployments from pilot to production.',
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Hiring Glossary', url: 'https://kovil.ai/hire' },
  url: 'https://kovil.ai/hire/forward-deployed-engineer',
}

// WebPage + Speakable — mirrors the pattern used on kovil.ai/ and the
// other newer service pages (e.g. /intelligent-document-processing):
// dateModified for freshness signals, speakable for voice/AEO surfaces.
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Hire a Forward Deployed Engineer (FDE) — Embedded in 48 Hours',
  description: 'Hire a vetted Forward Deployed Engineer through Kovil AI. Senior engineers embedded directly with your team, building, integrating, and shipping AI against your real workflows and systems.',
  url: 'https://kovil.ai/hire/forward-deployed-engineer',
  datePublished: '2026-08-24',
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
  name: 'How to Hire a Forward Deployed Engineer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Environment', text: 'Describe the workflow, systems, and data your engineer needs to embed against. A Delivery Lead scopes access and integration points within 24 hours.', url: 'https://kovil.ai/hire/forward-deployed-engineer' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Engineer', text: 'Review 2–3 vetted FDEs with proven embedded delivery in your domain. Interview and choose your fit.', url: 'https://kovil.ai/hire/forward-deployed-engineer' },
    { '@type': 'HowToStep', position: 3, name: 'Embed & Iterate', text: 'Your engineer embeds with your team, builds against real systems and users, and iterates in tight feedback loops. An Engagement Manager audits every milestone.', url: 'https://kovil.ai/hire/forward-deployed-engineer' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is a Forward Deployed Engineer (FDE)?', acceptedAnswer: { '@type': 'Answer', text: 'A Forward Deployed Engineer is a senior engineer embedded directly with a customer’s team — on-site or tightly integrated remotely — who builds, integrates, and iterates software against that customer’s real, specific workflows and systems, rather than building generic product features from a distance. The role was popularized by Palantir and is now widely used by AI-native companies to get complex AI deployments from pilot to production inside real enterprise environments.' } },
    { '@type': 'Question', name: 'How is a Forward Deployed Engineer different from a regular engineer or consultant?', acceptedAnswer: { '@type': 'Answer', text: 'A regular product engineer builds features for many customers at once from a central roadmap. A traditional consultant hands over a report or a generic implementation plan. A Forward Deployed Engineer does neither — they embed directly in your environment, learn your actual systems and data, write and ship real code against your specific workflows, and iterate directly with your end users until it works in production.' } },
    { '@type': 'Question', name: 'How much does it cost to hire a Forward Deployed Engineer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Kovil AI places vetted, Engagement-Manager-audited Forward Deployed Engineers on a fixed monthly or milestone basis — a fraction of the fully-loaded cost of a traditional senior hire or a systems-integrator engagement, with no recruiting delay, a 2-week risk-free trial, and no lock-in.' } },
    { '@type': 'Question', name: 'How quickly can I get a Forward Deployed Engineer embedded with my team?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted FDE within 24–48 hours of submitting their brief, with embedded work starting on an agreed milestone plan within 3–4 days — versus 4–6 months for a traditional senior hire. A 2-week risk-free trial lets you validate fit and output first.' } },
    { '@type': 'Question', name: 'Do your Forward Deployed Engineers work on-site or remotely?', acceptedAnswer: { '@type': 'Answer', text: 'Both. Most engagements run tightly-integrated remote — daily stand-ups, shared access to your systems, and direct channels with your end users — with on-site time available for kickoff, discovery, or critical rollout weeks where being physically present accelerates adoption.' } },
    { '@type': 'Question', name: 'What systems and tools can your Forward Deployed Engineers integrate with?', acceptedAnswer: { '@type': 'Answer', text: 'Our FDEs regularly integrate against CRMs, ERPs, internal tools, legacy databases, data warehouses, and bespoke internal APIs — using REST/GraphQL, webhooks, message queues, and whatever access model your environment requires. They adapt to your stack rather than forcing you onto a template.' } },
    { '@type': 'Question', name: 'Who owns the code and integrations the Forward Deployed Engineer builds?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All code, integrations, pipelines, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no carve-outs, no shared IP, and no lock-in.' } },
    { '@type': 'Question', name: 'Can we extend the engagement or bring the FDE in-house afterward?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many clients extend the embed as new workflows come online, scale to a small embedded pod, or wind down once the system is stable and handed off to their own team. There’s no minimum lock-in either way.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers', item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'Forward Deployed Engineer', item: 'https://kovil.ai/hire/forward-deployed-engineer' },
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
      <div className="pt-20"><ForwardDeployedEngineerPage /></div>
    </>
  )
}

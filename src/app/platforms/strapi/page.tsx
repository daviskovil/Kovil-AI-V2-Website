import type { Metadata } from 'next'
import StrapiPlatformPage from '@/src/pages/platforms/strapi/StrapiPlatformPage'

export const metadata: Metadata = {
  title: "Strapi Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for Strapi — AI-assisted content workflow builds, plus vetted Node.js/Strapi developers, Jamstack engineers, and self-hosting specialists matched in 48 hours. 2-week risk-free trial.",
  alternates: { canonical: 'https://kovil.ai/platforms/strapi' },
  keywords: ["strapi ai agents","hire strapi developer","strapi staff augmentation","strapi developer","strapi v5 upgrade","headless cms node.js","strapi self hosting","what is strapi"],
  openGraph: {
    type: 'website',
    title: "Strapi Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "AI-assisted content workflow builds, plus vetted Node.js/Strapi developers, Jamstack engineers, and self-hosting specialists matched in 48 hours. 2-week risk-free trial.",
    url: 'https://kovil.ai/platforms/strapi',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Strapi Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "AI-assisted content workflow builds, plus vetted Node.js/Strapi developers, Jamstack engineers, and self-hosting specialists matched in 48 hours.",
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Strapi Platform Services — AI Agents & Specialist Talent",
  description: "Kovil AI delivers AI-assisted content workflow builds on Strapi and staffs vetted Node.js/Strapi developers, Jamstack engineers, and self-hosting specialists.",
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
  serviceType: "Strapi Implementation and Staffing",
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/strapi',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Strapi Platform Services",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "AI Agent Build on Strapi" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Node.js / Strapi Developers Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Jamstack Engineers Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Strapi DevOps & Self-Hosting Engineers Staffing" } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/strapi' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: "Strapi",
  description: "Strapi is an open-source headless CMS built on Node.js that lets teams define content types and expose them through REST and GraphQL APIs, with full control over hosting and customization.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/strapi',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Strapi Platform Partner — AI Agents & Specialist Talent",
  description: "AI-assisted content workflow builds, plus vetted Node.js/Strapi developers, Jamstack engineers, and self-hosting specialists matched in 48 hours. 2-week risk-free trial.",
  url: 'https://kovil.ai/platforms/strapi',
  datePublished: '2026-10-03',
  dateModified: '2026-10-03',
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
  name: "How to Work With Kovil AI on Strapi",
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: "Brief Your Project", text: "Tell us how you use Strapi, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/strapi' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: "Review 2-3 vetted Strapi specialists matched to your stack and scale.", url: 'https://kovil.ai/platforms/strapi' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/strapi' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Strapi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strapi is an open-source headless CMS built on Node.js that lets teams define content types and expose them through REST and GraphQL APIs, with full control over hosting and customization."
      }
    },
    {
      "@type": "Question",
      "name": "Does Strapi have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Strapi's open, plugin-based architecture makes it straightforward to add AI features through plugins and custom code. Kovil AI configures what is available natively and builds custom LLM workflows and integrations where it isn't."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kovil AI build custom AI on Strapi, or only staff talent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, and they're often the same engagement. Clients commonly hire a Node.js/Strapi developer to clean up content types, permissions, and deployment first, then add AI-assisted content workflows on top of a backend that is already solid."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Strapi developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Strapi talent bills $22-$34 per hour depending on role and experience, versus $65-$115+ per hour for prevailing US onsite rates for the same roles — typically 68-69% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Strapi Developer, Jamstack Engineer, and DevOps Engineer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Node.js/Strapi Developer builds content types, custom controllers, and plugins. A Jamstack Engineer builds the frontends that consume the API. A Strapi DevOps & Self-Hosting Engineer handles deployment, scaling, backups, and upgrades of self-hosted instances."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Strapi specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Strapi specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant platform experience and certifications where they exist, but weight a live build challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI integrate Strapi with our frontend, search, and commerce stack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Strapi talent regularly builds integrations with Next.js and Nuxt frontends, Algolia search, Stripe, and commerce platforms through the API and webhooks."
      }
    },
    {
      "@type": "Question",
      "name": "Who owns the work built during an engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do, 100%. All code, configuration, and documentation produced during your engagement are fully owned by you under clear IP-assignment terms — no shared IP, no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine an AI build with Strapi staff augmentation in one engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same project."
      }
    },
    {
      "@type": "Question",
      "name": "What does Kovil AI typically build on Strapi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Content-type design, custom plugins and lifecycle hooks, REST and GraphQL API optimization, Jamstack frontends, self-hosted deployment on cloud infrastructure, and AI-assisted content workflows."
      }
    },
    {
      "@type": "Question",
      "name": "How is Kovil AI different from a Strapi partner agency or freelancer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A partner agency typically scopes a fixed project and hands it to a rotating bench. A freelancer works solo with no oversight. Kovil AI embeds a single accountable specialist or small pod under an Engagement Manager who audits every milestone, with a 2-week risk-free trial and no lock-in."
      }
    },
    {
      "@type": "Question",
      "name": "Can we extend a trial engagement or convert it to a long-term hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most clients extend the engagement as scope grows, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way."
      }
    },
    {
      "@type": "Question",
      "name": "Do you support Strapi rescues or fixing a fragile deployment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A meaningful share of our Strapi engagements start as a rescue — an outdated version, brittle custom code, an unscalable self-hosted setup, or a stalled v4-to-v5 upgrade. We audit it, then stabilize and upgrade in milestone-gated phases."
      }
    }
  ]
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: "Strapi", item: 'https://kovil.ai/platforms/strapi' },
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
      <div className="pt-20"><StrapiPlatformPage /></div>
    </>
  )
}

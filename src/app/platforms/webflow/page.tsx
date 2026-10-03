import type { Metadata } from 'next'
import WebflowPlatformPage from '@/src/pages/platforms/webflow/WebflowPlatformPage'

export const metadata: Metadata = {
  title: "Webflow Platform Partner — AI Agents & Specialist Talent",
  description: "Kovil AI is your single partner for Webflow — AI-powered website feature builds, plus vetted Webflow developers, custom JavaScript engineers, and CMS & SEO specialists matched in 48 hours. 2-week risk-free trial.",
  alternates: { canonical: 'https://kovil.ai/platforms/webflow' },
  keywords: ["webflow ai agents","hire webflow developer","webflow staff augmentation","webflow developer","webflow custom code","webflow cms specialist","webflow ai integration","what is webflow"],
  openGraph: {
    type: 'website',
    title: "Webflow Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "AI-powered website feature builds, plus vetted Webflow developers, custom JavaScript engineers, and CMS & SEO specialists matched in 48 hours. 2-week risk-free trial.",
    url: 'https://kovil.ai/platforms/webflow',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Webflow Platform Partner — AI Agents & Specialist Talent | Kovil AI",
    description: "AI-powered website feature builds, plus vetted Webflow developers, custom JavaScript engineers, and CMS & SEO specialists matched in 48 hours.",
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Webflow Platform Services — AI Agents & Specialist Talent",
  description: "Kovil AI delivers AI-powered website feature builds on Webflow and staffs vetted Webflow developers, custom JavaScript engineers, and CMS & SEO specialists.",
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
  serviceType: "Webflow Implementation and Staffing",
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/webflow',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: "Webflow Platform Services",
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "AI Agent Build on Webflow" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Webflow Developers Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Custom JS Frontend Engineers Staffing" } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: "Webflow CMS & SEO Specialists Staffing" } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/webflow' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: "Webflow",
  description: "Webflow is a visual web development platform that lets designers and developers build, manage, and host custom websites with a built-in CMS, interactions, and hosting, without hand-writing every line of code.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/webflow',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: "Webflow Platform Partner — AI Agents & Specialist Talent",
  description: "AI-powered website feature builds, plus vetted Webflow developers, custom JavaScript engineers, and CMS & SEO specialists matched in 48 hours. 2-week risk-free trial.",
  url: 'https://kovil.ai/platforms/webflow',
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
  name: "How to Work With Kovil AI on Webflow",
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: "Brief Your Site", text: "Tell us how you use Webflow, what's broken or backlogged, and whether you need an AI build, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/webflow' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: "Review 2-3 vetted Webflow specialists matched to your stack and scale.", url: 'https://kovil.ai/platforms/webflow' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/webflow' },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Webflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Webflow is a visual web development platform that lets designers and developers build, manage, and host custom websites with a built-in CMS, interactions, and hosting, without hand-writing every line of code."
      }
    },
    {
      "@type": "Question",
      "name": "Does Webflow have native AI, or do I need a custom build?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Webflow ships native AI features for generating content and accelerating site-building. Kovil AI configures those natively and builds custom JavaScript, API integrations, and LLM-powered experiences where they aren't enough."
      }
    },
    {
      "@type": "Question",
      "name": "Does Kovil AI build custom AI on Webflow, or only staff talent?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both, and they're often the same engagement. Clients commonly hire a Webflow developer to clean up structure, CMS collections, and performance first, then add AI-powered features on top of a site that is already well-built."
      }
    },
    {
      "@type": "Question",
      "name": "How much does it cost to hire a Webflow developer through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kovil AI's remote Webflow talent bills $20-$32 per hour depending on role and experience, versus $50-$110+ per hour for prevailing US onsite rates for the same roles — typically 66-69% lower."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a Webflow Developer, Custom JS Engineer, and CMS & SEO Specialist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Webflow Developer builds responsive sites, CMS collections, and interactions in the Designer. A Custom JS Frontend Engineer adds custom code, APIs, and integrations beyond what the Designer can do. A CMS & SEO Specialist structures collections and metadata so the site scales and ranks."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I hire a Webflow specialist through Kovil AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most clients are matched with a vetted specialist within 24–48 hours of submitting a brief, with work starting within a week. A 2-week risk-free trial lets you validate fit and output before committing to a longer engagement."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Webflow specialists certified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We verify relevant platform experience and certifications where they exist, but weight a live build challenge and production portfolio review just as heavily, since credentials alone do not test real production judgment."
      }
    },
    {
      "@type": "Question",
      "name": "Can Kovil AI integrate Webflow with our CRM, forms, and analytics stack?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our Webflow talent regularly builds integrations connecting forms and CMS data to HubSpot, Salesforce, Stripe, and analytics tools through the Webflow API, webhooks, and custom code."
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
      "name": "Can I combine an AI build with Webflow staff augmentation in one engagement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — this is one of the most common engagement shapes we run. A single Engagement Manager can coordinate an AI build alongside dedicated specialist talent working in the same site."
      }
    },
    {
      "@type": "Question",
      "name": "What does Kovil AI typically build on Webflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marketing sites and CMS-driven blogs, custom JavaScript and API integrations, gated and personalized content, AI-powered chat and search on top of site content, and performance and SEO overhauls."
      }
    },
    {
      "@type": "Question",
      "name": "How is Kovil AI different from a Webflow partner agency or freelancer?",
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
      "name": "Do you support Webflow rescues or fixing a messy site?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A meaningful share of our Webflow engagements start as a rescue — inconsistent class structure, slow pages, CMS collections that grew without a plan, or custom code nobody understands. We audit it, then rebuild in milestone-gated phases without taking the site down."
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
    { '@type': 'ListItem', position: 3, name: "Webflow", item: 'https://kovil.ai/platforms/webflow' },
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
      <div className="pt-20"><WebflowPlatformPage /></div>
    </>
  )
}

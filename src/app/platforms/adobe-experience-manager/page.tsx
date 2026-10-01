import type { Metadata } from 'next'
import AdobeExperienceManagerPlatformPage from '@/src/pages/platforms/adobe-experience-manager/AdobeExperienceManagerPlatformPage'

export const metadata: Metadata = {
  title: 'Adobe Experience Manager Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for AEM — Adobe Sensei AI agents, plus vetted AEM developers, architects, and DAM specialists matched in 48 hours. 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/platforms/adobe-experience-manager' },
  keywords: [
    'adobe experience manager ai agents',
    'hire aem developer',
    'aem architect for hire',
    'adobe sensei integration',
    'aem staff augmentation',
    'aem assets dam specialist',
    'aem certified expert',
    'what is adobe experience manager',
  ],
  openGraph: {
    type: 'website',
    title: 'Adobe Experience Manager Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Adobe Sensei AI agents, plus vetted AEM developers, architects, and DAM specialists matched in 48 hours. 2-week risk-free trial.',
    url: 'https://kovil.ai/platforms/adobe-experience-manager',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adobe Experience Manager Platform Partner — AI Agents & Specialist Talent | Kovil AI',
    description: 'Adobe Sensei AI agents, plus vetted AEM developers, architects, and DAM specialists matched in 48 hours.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Adobe Experience Manager Platform Services — AI Agents & Specialist Talent',
  description: 'Kovil AI delivers Adobe Sensei AI agents on AEM and staffs vetted developers, architects, and DAM specialists — covering Sites, Assets, Forms, and multi-channel integrations.',
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
  serviceType: 'Adobe Experience Manager Implementation and Staffing',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/platforms/adobe-experience-manager',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'AEM Platform Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Adobe Sensei AI Agent Build' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEM Developer Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEM Architect Staffing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AEM Assets/DAM Specialist Staffing' } },
    ],
  },
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in. 100% IP ownership.', url: 'https://kovil.ai/platforms/adobe-experience-manager' },
}

const definedTermSchema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTerm',
  name: 'Adobe Experience Manager',
  description: "Adobe Experience Manager (AEM) is an enterprise content management and digital asset management platform, part of Adobe Experience Cloud, powered in part by Adobe Sensei, Adobe's AI/ML engine for tagging, cropping, and personalization.",
  inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Kovil AI Platforms Glossary', url: 'https://kovil.ai/platforms' },
  url: 'https://kovil.ai/platforms/adobe-experience-manager',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Adobe Experience Manager Platform Partner — AI Agents & Specialist Talent',
  description: 'Kovil AI is your single partner for AEM — Adobe Sensei AI agents, plus vetted AEM developers, architects, and DAM specialists.',
  url: 'https://kovil.ai/platforms/adobe-experience-manager',
  datePublished: '2026-10-02',
  dateModified: '2026-10-02',
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
  name: 'How to Work With Kovil AI on Adobe Experience Manager',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Instance', text: "Tell us which AEM modules you run, what's broken or missing, and whether you need an AI agent, dedicated talent, or both. A Delivery Lead scopes it within 24 hours.", url: 'https://kovil.ai/platforms/adobe-experience-manager' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Match', text: 'Review 2-3 vetted AEM specialists matched to your content model and stack.', url: 'https://kovil.ai/platforms/adobe-experience-manager' },
    { '@type': 'HowToStep', position: 3, name: 'Build & Iterate', text: 'Work moves in weekly milestones with an Engagement Manager auditing every checkpoint, backed by a 2-week risk-free trial.', url: 'https://kovil.ai/platforms/adobe-experience-manager' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is Adobe Experience Manager?', acceptedAnswer: { '@type': 'Answer', text: 'Adobe Experience Manager (AEM) is an enterprise content management and digital asset management platform, part of Adobe Experience Cloud, powered in part by Adobe Sensei, Adobe\'s AI/ML engine for tagging, cropping, and personalization.' } },
    { '@type': 'Question', name: 'What is the difference between AEM and Adobe Sensei?', acceptedAnswer: { '@type': 'Answer', text: "AEM is the underlying content and asset management platform; Sensei is Adobe's AI/ML layer for smart tagging, image cropping, and content personalization. Kovil AI configures Sensei natively and, where it isn't enough, builds custom AI integrations on top." } },
    { '@type': 'Question', name: 'Does Kovil AI build custom AI features on AEM, or only staff talent?', acceptedAnswer: { '@type': 'Answer', text: "Both, and they're often the same engagement. Clients commonly hire an AEM developer to clean up content model structure, then layer Sensei AI features on top." } },
    { '@type': 'Question', name: 'How much does it cost to hire an AEM developer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: "Kovil AI's remote AEM talent bills $24-$45 per hour depending on role and experience, versus $65-$160+ per hour for prevailing US onsite rates for the same roles, typically 66-70% lower." } },
    { '@type': 'Question', name: 'What is the difference between an AEM Developer, Architect, and Assets Specialist?', acceptedAnswer: { '@type': 'Answer', text: 'An AEM Developer builds components and Sling Models. An Architect designs the content architecture and dispatcher caching strategy. An Assets/DAM Specialist configures digital asset management workflows, and is typically engaged for brands with large content libraries.' } },
    { '@type': 'Question', name: 'How quickly can I hire an AEM specialist through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24-48 hours of submitting a brief, with work starting within a week, backed by a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'Do your AEM engineers hold official certifications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We verify Adobe Certified Expert (ACE) credentials directly as part of vetting, alongside a live technical assessment.' } },
    { '@type': 'Question', name: 'Can Kovil AI integrate AEM with other systems like Adobe Target or Analytics?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our AEM talent regularly builds integrations using AEM APIs, GraphQL, and custom OSGi services.' } },
    { '@type': 'Question', name: 'Who owns the components and configurations built during an engagement?', acceptedAnswer: { '@type': 'Answer', text: 'You do, 100%. All components, Sling Models, OSGi services, and documentation are fully owned by you under clear IP-assignment terms, with no shared IP and no lock-in.' } },
    { '@type': 'Question', name: 'Can I combine a Sensei AI build with AEM staff augmentation in one engagement?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A single Engagement Manager can coordinate a Sensei build alongside dedicated developer or architect talent working in the same instance.' } },
    { '@type': 'Question', name: 'What AEM modules does Kovil AI have experience with?', acceptedAnswer: { '@type': 'Answer', text: 'AEM Sites, Assets (DAM), Forms, Content Fragments, and AEM Commerce, plus integrations including Adobe Target and Analytics.' } },
    { '@type': 'Question', name: 'How is Kovil AI different from a traditional Adobe systems integrator?', acceptedAnswer: { '@type': 'Answer', text: 'Traditional SIs typically scope a fixed project and hand it to a rotating bench of consultants. Kovil AI embeds a single accountable engineer under an Engagement Manager who audits every milestone.' } },
    { '@type': 'Question', name: 'Can we extend a trial engagement or convert it to a long-term hire?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Most clients extend the engagement as new sites or Sensei use cases come online, scale to a small embedded pod, or wind down once the work is stable, with no minimum lock-in either way.' } },
    { '@type': 'Question', name: 'Do you support AEM rescues or fixing a failing implementation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. A significant share of our AEM engagements start as a rescue of an instance with years of component debt or an upgrade that never finished, which we audit and rebuild in milestone-gated phases.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://kovil.ai/platforms' },
    { '@type': 'ListItem', position: 3, name: 'Adobe Experience Manager', item: 'https://kovil.ai/platforms/adobe-experience-manager' },
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
      <div className="pt-20"><AdobeExperienceManagerPlatformPage /></div>
    </>
  )
}

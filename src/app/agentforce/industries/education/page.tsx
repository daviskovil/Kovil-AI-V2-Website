import type { Metadata } from 'next'
import EducationAgentforcePage from '@/src/pages/agentforce/industries/EducationAgentforcePage'

export const metadata: Metadata = {
  title: 'Agentforce for Education & Higher Education | Kovil AI',
  description: 'Production Agentforce for universities, colleges, and education providers — admissions inquiry agents, enrolment support, financial aid automation, student support, alumni engagement, and course advising. Fixed-price sprints.',
  alternates: { canonical: 'https://kovil.ai/agentforce/industries/education' },
  keywords: [
    'agentforce education',
    'salesforce agentforce higher education',
    'agentforce admissions',
    'agentforce student support',
    'agentforce financial aid',
    'agentforce university',
    'salesforce education cloud agentforce',
    'agentforce enrolment automation',
    'agentforce higher ed',
    'agentforce alumni engagement',
    'salesforce agentforce university',
    'agentforce course advisor',
    'agentforce student inquiry',
    'agentforce college automation',
    'salesforce AI education',
    'agentforce Ellucian integration',
    'agentforce Banner integration',
    'agentforce student success',
    'agentforce education implementation',
    'agentforce higher education implementation partner',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce for Education & Higher Education | Kovil AI',
    description: 'Production Agentforce for universities and colleges — admissions inquiry agents, enrolment support, financial aid automation, student support, and alumni engagement.',
    url: 'https://kovil.ai/agentforce/industries/education',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce for Education & Higher Education — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce for Education & Higher Education | Kovil AI',
    description: 'Production Agentforce for universities — admissions inquiry agents, enrolment support, financial aid automation, and student support.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Agentforce for Education & Higher Education',
  description: 'Production Agentforce implementations for universities, colleges, and education providers — admissions inquiry agents, enrolment support, financial aid automation, student support, alumni engagement, and course advising.',
  serviceType: 'Agentforce Implementation',
  category: 'Education & Higher Education',
  url: 'https://kovil.ai/agentforce/industries/education',
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
    description: 'Fixed-price Agentforce education implementation sprint — 2 to 3 weeks to production',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Agentforce Education Use Cases',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Admissions Inquiry Agent', description: '24/7 programme information, application requirement guidance, deadline reminders, and personalised next-step outreach for prospective students.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Enrolment Support Agent', description: 'Course registration guidance, schedule conflict resolution, prerequisite checking, and enrolment status updates for current students.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Financial Aid Agent', description: 'Financial aid eligibility queries, application status updates, award letter explanation, and SAP appeal process guidance.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Student Support Agent', description: 'IT support, housing queries, student services navigation, academic calendar queries, and escalation to appropriate campus departments.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Alumni Engagement Agent', description: 'Event invitations, giving campaign outreach, career network facilitation, and alumni record update management.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Course Advisor Agent', description: 'Degree plan guidance, course recommendation, prerequisite verification, and graduation requirement check for students planning their academic path.' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What Agentforce use cases work best for higher education?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The strongest Agentforce use cases for higher education are admissions inquiry handling (programme questions, application requirements, deadline guidance — available 24/7 during peak inquiry periods), financial aid support (eligibility queries, status updates, award letter explanation), and student support services (IT, housing, scheduling, campus navigation). These are high-volume, repetitive query types that consume student services staff time without requiring nuanced human judgment for standard cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Agentforce integrate with Ellucian, Banner, or Workday Student?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MuleSoft connects Agentforce to student information systems including Ellucian Banner, Colleague, and Quik Start, Workday Student, and PeopleSoft Campus Solutions — surfacing live enrolment status, course availability, financial aid awards, and degree audit data to ground agent responses in real student records. Salesforce Education Cloud provides the student relationship management layer that Agentforce agents operate within.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Agentforce help with student yield and admissions conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agentforce admissions agents improve yield by ensuring every prospective student receives an immediate, personalised response to their inquiry — reducing the average response time from days to minutes. Agents deliver programme-specific information, trigger personalised follow-up sequences based on applicant profile and interest, and proactively reach out to accepted students who have not yet enrolled. The combination of speed and personalisation materially improves conversion rates at each stage of the funnel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What FERPA compliance considerations apply to Agentforce in education?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FERPA requires that student education records are only disclosed to authorised parties. Agentforce agents are configured with role-based access controls that restrict student record access to authenticated student sessions — agents do not surface another student\'s record data under any circumstances. The Einstein Trust Layer masks student identifiers before any data is included in LLM prompts, and all agent actions are logged to an immutable audit trail for FERPA compliance review.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does an education Agentforce implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused pilot on one use case — admissions inquiry handling or financial aid support — takes 2–3 weeks from kick-off to production. Full deployments covering multiple student lifecycle touchpoints with SIS integration run 6–12 weeks. We recommend timing the pilot to launch before a peak admissions inquiry period so you can demonstrate ROI at maximum volume.',
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
    { '@type': 'ListItem', position: 4, name: 'Education & Higher Education', item: 'https://kovil.ai/agentforce/industries/education' },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Agentforce for Education & Higher Education | Kovil AI',
  description: 'Production Agentforce for universities and colleges — admissions inquiry agents, enrolment support, financial aid automation, student support, and alumni engagement.',
  url: 'https://kovil.ai/agentforce/industries/education',
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

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <EducationAgentforcePage />
    </>
  )
}

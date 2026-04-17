import type { Metadata } from 'next'
import DataEngineersPage from '@/src/pages/hire/DataEngineersPage'

export const metadata: Metadata = {
  title: 'Hire a Data Engineer — Matched in 48 Hours | Kovil AI',
  description: 'Hire a vetted data engineer in 48 hours. Data pipelines, warehouses, real-time streaming, ML feature stores, dbt, Spark, Kafka. Engagement Manager oversight, 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/data-engineers' },
  keywords: [
    'hire data engineer',
    'data engineer',
    'data pipeline engineer',
    'hire data engineering',
    'data infrastructure engineer',
    'ETL engineer',
    'hire dbt engineer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire a Data Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 data engineers embedded in your team in 48 hours. Data pipelines, warehouses, real-time streaming, ML feature stores — sprint-delivered, Engagement Manager audited.',
    url: 'https://kovil.ai/hire/data-engineers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire a Data Engineer — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Data Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 data engineers embedded in your team in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Data Engineers',
  description: 'Embed a vetted Tier-1 data engineer into your team in 48 hours. Specialists in data pipeline architecture, data warehouse and lakehouse design, real-time streaming, dbt modelling, ML feature stores, and data quality observability. Sprint-based delivery with Engagement Manager oversight and a 2-week risk-free trial.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/og-image.png',
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'Data Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/data-engineers',
  offers: {
    '@type': 'Offer',
    description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.',
    url: 'https://kovil.ai/hire/data-engineers',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Data Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Pipeline Architecture' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Warehouse & Lakehouse Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Real-Time Streaming Pipelines' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Modelling & Transformation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ML Feature Stores & AI Data Infra' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Quality & Observability' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a Data Engineer with Kovil AI',
  description: 'Embed a vetted data engineer into your team in under 48 hours with milestone-gated delivery and Engagement Manager oversight.',
  totalTime: 'PT48H',
  step: [
    {
      '@type': 'HowToStep', position: 1,
      name: 'Brief Your Needs',
      text: 'Fill a 5-minute intake form describing your data infrastructure challenges, current stack, and goals. A Delivery Lead contacts you within 24 hours.',
      url: 'https://kovil.ai/hire/data-engineers',
    },
    {
      '@type': 'HowToStep', position: 2,
      name: 'Meet Your Engineer',
      text: 'We surface 2–3 hand-picked data engineers matched to your tooling and domain. You review profiles, join intro calls, and choose your fit.',
      url: 'https://kovil.ai/hire/data-engineers',
    },
    {
      '@type': 'HowToStep', position: 3,
      name: 'Sprint & Deliver',
      text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone output. You get reliable, production-ready data infrastructure.',
      url: 'https://kovil.ai/hire/data-engineers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a data engineer do?',
      acceptedAnswer: { '@type': 'Answer', text: 'A data engineer builds and maintains the infrastructure that collects, stores, transforms, and delivers data across an organisation. They design and operate pipelines that move data from source systems into warehouses, lakes, or real-time streams — making it clean, reliable, and accessible for analysts, data scientists, and AI systems. They also own orchestration, data quality, and observability.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I hire a data engineer through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted data engineer within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days. We offer a 2-week risk-free trial so you can validate fit before committing to a longer engagement.' },
    },
    {
      '@type': 'Question',
      name: 'What tools and technologies do your data engineers work with?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our data engineers are proficient across Python, SQL, dbt, Apache Spark, Kafka, Airflow, Prefect, Snowflake, BigQuery, Redshift, Databricks, and all major cloud platforms — AWS, GCP, and Azure. They cover the full modern data stack from ingestion to serving.' },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a data engineer and a data scientist?",
      acceptedAnswer: { '@type': 'Answer', text: 'A data engineer builds and maintains the systems that collect, transform, and deliver data — pipelines, warehouses, and streaming infrastructure. A data scientist uses that data to build models, run analyses, and generate insights. Data engineers make data scientists productive by ensuring data is clean, reliable, and accessible at scale.' },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I need a data engineer or a data analyst?',
      acceptedAnswer: { '@type': 'Answer', text: 'If your data is messy, siloed, or arrives unreliably — you need a data engineer to fix the infrastructure first. If your data is clean and accessible but you need business insights and reporting — a data analyst is the right hire. Most growing companies need both, but the data engineer typically comes first to build the foundation analysts rely on.' },
    },
    {
      '@type': 'Question',
      name: 'Can a data engineer help us migrate from our legacy data warehouse?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — data warehouse and lakehouse migrations are a core use case for our data engineers. They can assess your current architecture, plan the migration strategy, rewrite legacy ETL jobs into modern dbt models, and execute a zero-downtime cutover. They are experienced with migrations from on-premise systems and legacy warehouses to Snowflake, BigQuery, Databricks, and Redshift.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',               item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',  item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'Data Engineers',     item: 'https://kovil.ai/hire/data-engineers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><DataEngineersPage /></div>
    </>
  )
}

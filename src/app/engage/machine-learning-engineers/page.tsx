import type { Metadata } from 'next'
import MachineLearningEngineersPage from '@/src/pages/engage/MachineLearningEngineersPage'

export const metadata: Metadata = {
  title: 'Hire a Machine Learning Developer — Matched in 48 Hours | Kovil AI',
  description: 'Hire a vetted machine learning engineer embedded in your team in 48 hours. Predictive models, recommendation systems, NLP, LLM fine-tuning, MLOps. Engagement Manager oversight, 2-week risk-free trial. No lock-in.',
  alternates: { canonical: 'https://kovil.ai/engage/machine-learning-engineers' },
  keywords: [
    'hire machine learning developer',
    'machine learning engineer',
    'hire ML engineer',
    'machine learning developer for hire',
    'hire ML developer',
    'MLOps engineer',
    'hire data scientist',
    'LLM fine-tuning engineer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire a Machine Learning Developer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 ML engineers embedded in your team in 48 hours. Predictive models, NLP, LLM fine-tuning, MLOps — sprint-delivered, Engagement Manager audited.',
    url: 'https://kovil.ai/engage/machine-learning-engineers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire a Machine Learning Developer — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Machine Learning Developer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 ML engineers embedded in your team in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Machine Learning Engineers',
  description: 'Embed a vetted Tier-1 machine learning engineer into your team in 48 hours. Specialists in predictive ML, recommendation systems, NLP, LLM fine-tuning, and MLOps. Sprint-based delivery with Engagement Manager oversight and a 2-week risk-free trial.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/og-image.png',
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'Machine Learning Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/engage/machine-learning-engineers',
  offers: {
    '@type': 'Offer',
    description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.',
    url: 'https://kovil.ai/engage/machine-learning-engineers',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Machine Learning Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Predictive ML Models' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recommendation Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NLP & Text ML Pipelines' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LLM Fine-Tuning & RAG' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Time Series & Anomaly Detection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'MLOps & Production Pipelines' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a Machine Learning Engineer with Kovil AI',
  description: 'Embed a vetted machine learning engineer into your team in under 48 hours with milestone-gated delivery and Engagement Manager oversight.',
  totalTime: 'PT48H',
  step: [
    {
      '@type': 'HowToStep', position: 1,
      name: 'Brief Your Needs',
      text: 'Fill a 5-minute intake form describing your ML use case, data situation, and stack. A Delivery Lead contacts you within 24 hours.',
      url: 'https://kovil.ai/engage/machine-learning-engineers',
    },
    {
      '@type': 'HowToStep', position: 2,
      name: 'Meet Your Engineer',
      text: 'We surface 2–3 hand-picked ML engineers matched to your domain. You review profiles, join intro calls, and choose your fit.',
      url: 'https://kovil.ai/engage/machine-learning-engineers',
    },
    {
      '@type': 'HowToStep', position: 3,
      name: 'Sprint & Deliver',
      text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone. You get working, production-ready ML systems.',
      url: 'https://kovil.ai/engage/machine-learning-engineers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a machine learning engineer do?',
      acceptedAnswer: { '@type': 'Answer', text: 'A machine learning engineer designs, builds, and deploys ML systems that make predictions or decisions from data. They work across the full ML lifecycle — problem framing, data pipeline design, feature engineering, model training and evaluation, deployment, and production monitoring. Unlike data scientists who focus on analysis and experimentation, ML engineers focus on building reliable, scalable ML systems in production.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I hire a machine learning engineer through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted ML engineer within 24–48 hours of submitting their brief. The engineer starts on an agreed milestone plan within 3–4 days. We offer a 2-week risk-free trial so you can validate fit and output quality before committing to a longer engagement.' },
    },
    {
      '@type': 'Question',
      name: 'What frameworks and tools do your ML engineers use?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our engineers are proficient across Python, PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, Hugging Face Transformers, LangChain, MLflow, DVC, AWS SageMaker, Google Vertex AI, and Azure ML. They cover the full stack from data processing to production deployment and monitoring.' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a machine learning engineer and a data scientist?',
      acceptedAnswer: { '@type': 'Answer', text: 'A data scientist focuses on analysis, experimentation, and model research — finding insights and proving that ML can solve a problem. A machine learning engineer focuses on building the systems that run those models reliably in production — data pipelines, model serving, retraining automation, and monitoring. For building a working ML product, you typically need both, but an ML engineer is often the missing piece.' },
    },
    {
      '@type': 'Question',
      name: 'Can ML engineers help with model deployment and MLOps?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes — MLOps is a core part of what our ML engineers do. This includes containerising models, building CI/CD pipelines for ML, setting up monitoring for model drift and data drift, automating retraining pipelines, and ensuring production reliability.' },
    },
    {
      '@type': 'Question',
      name: 'Do I own all the code and models built by the ML engineer?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, 100%. All code, trained models, data pipelines, and documentation produced during your engagement are fully owned by you. We operate under clear IP assignment terms with no carve-outs, no shared IP, and no lock-in to proprietary tooling.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                         item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Engage',                       item: 'https://kovil.ai/engage/managed-ai-engineer' },
    { '@type': 'ListItem', position: 3, name: 'Machine Learning Engineers',   item: 'https://kovil.ai/engage/machine-learning-engineers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><MachineLearningEngineersPage /></div>
    </>
  )
}

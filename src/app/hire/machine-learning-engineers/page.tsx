import type { Metadata } from 'next'
import MachineLearningEngineersPage from '@/src/pages/engage/MachineLearningEngineersPage'

export const metadata: Metadata = {
  title: 'Hire a Machine Learning Engineer — Matched in 48 Hours | Kovil AI',
  description: 'Hire a vetted machine learning engineer embedded in your team in 48 hours. Predictive ML, recommendation systems, NLP, LLM fine-tuning, MLOps. Engagement Manager oversight, 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/hire/machine-learning-engineers' },
  keywords: [
    'hire machine learning engineer',
    'machine learning developer',
    'hire ML engineer',
    'hire machine learning developer',
    'ML engineer for hire',
    'hire data scientist',
    'machine learning specialist',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire a Machine Learning Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 machine learning engineers embedded in your team in 48 hours. Predictive ML, recommendations, LLM fine-tuning, MLOps — sprint-delivered, Engagement Manager audited.',
    url: 'https://kovil.ai/hire/machine-learning-engineers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire a Machine Learning Engineer — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Machine Learning Engineer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 ML engineers embedded in your team in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Machine Learning Engineers',
  description: 'Embed a vetted Tier-1 machine learning engineer into your team in 48 hours. Specialists in predictive ML, recommendation systems, NLP, LLM fine-tuning, time series, and MLOps.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai' },
  serviceType: 'Machine Learning Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/hire/machine-learning-engineers',
  offers: { '@type': 'Offer', description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.', url: 'https://kovil.ai/hire/machine-learning-engineers' },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a Machine Learning Engineer with Kovil AI',
  totalTime: 'PT48H',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief Your Needs', text: 'Fill a 5-minute intake form describing your ML use case, data situation, and stack.', url: 'https://kovil.ai/hire/machine-learning-engineers' },
    { '@type': 'HowToStep', position: 2, name: 'Meet Your Engineer', text: 'We surface 2–3 hand-picked ML engineers matched to your domain and tech stack.', url: 'https://kovil.ai/hire/machine-learning-engineers' },
    { '@type': 'HowToStep', position: 3, name: 'Sprint & Deliver', text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone.', url: 'https://kovil.ai/hire/machine-learning-engineers' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does a machine learning engineer do?', acceptedAnswer: { '@type': 'Answer', text: 'A machine learning engineer builds systems that learn from data. They design, train, evaluate, and deploy ML models — from predictive analytics to recommendation engines, NLP pipelines, and LLM fine-tuning. They also own the MLOps infrastructure to keep models reliable in production.' } },
    { '@type': 'Question', name: 'How quickly can I hire a machine learning engineer through Kovil AI?', acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days with a 2-week risk-free trial.' } },
    { '@type': 'Question', name: 'What frameworks do your ML engineers use?', acceptedAnswer: { '@type': 'Answer', text: 'PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, Hugging Face, LangChain, MLflow, Weights & Biases, SageMaker, and Vertex AI.' } },
    { '@type': 'Question', name: 'What is the difference between an ML engineer and a data scientist?', acceptedAnswer: { '@type': 'Answer', text: 'A data scientist focuses on analysis, experimentation, and model development. An ML engineer focuses on productionising those models — building the pipelines, APIs, monitoring, and infrastructure that make ML work reliably at scale.' } },
    { '@type': 'Question', name: 'Can an ML engineer help with LLM fine-tuning?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our ML engineers handle LLM fine-tuning on GPT, Claude, Llama, and Mistral — including data preparation, training runs, evaluation, and deployment. They also build RAG systems that combine retrieval with generation for accurate, grounded outputs.' } },
    { '@type': 'Question', name: 'Who owns the IP and models your ML engineer produces?', acceptedAnswer: { '@type': 'Answer', text: '100% of the IP belongs to you — trained models, code, pipelines, and documentation. No exceptions.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                          item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Hire AI Engineers',             item: 'https://kovil.ai/hire' },
    { '@type': 'ListItem', position: 3, name: 'Machine Learning Engineers',    item: 'https://kovil.ai/hire/machine-learning-engineers' },
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

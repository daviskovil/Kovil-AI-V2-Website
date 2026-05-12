import type { Metadata } from 'next'
import BigQueryMLAgentsPage from '@/src/pages/vertex-ai/services/BigQueryMLAgentsPage'

export const metadata: Metadata = {
  title: 'BigQuery ML & Data Intelligence Agents | Kovil AI Google Cloud Vertex AI',
  description: 'AI agents and ML models built on BigQuery ML. Predictive analytics, anomaly detection, Gemini in BigQuery natural language SQL, and data intelligence automation — all within your GCP data warehouse.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/services/bigquery-ml-data-agents' },
  keywords: [
    'BigQuery ML consulting',
    'BigQuery ML development',
    'Gemini in BigQuery',
    'BigQuery ML data agents',
    'BigQuery AI integration',
    'natural language SQL BigQuery',
    'BigQuery ML predictive analytics',
    'BigQuery ML anomaly detection',
    'Vertex AI BigQuery integration',
    'Looker AI integration',
    'Dataflow ETL automation',
    'BigQuery ML model monitoring',
    'GCP data intelligence',
    'BigQuery ML developer',
    'Google Cloud ML consulting',
    'BigQuery ML algorithms',
    'BQML model training',
    'BigQuery AI agents',
  ],
  openGraph: {
    type: 'website',
    title: 'BigQuery ML & Data Intelligence Agents | Kovil AI Google Cloud Vertex AI',
    description: 'AI agents and ML models built on BigQuery ML. Predictive analytics, anomaly detection, Gemini in BigQuery natural language SQL, and data intelligence automation — all within your GCP data warehouse.',
    url: 'https://kovil.ai/vertex-ai/services/bigquery-ml-data-agents',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'Kovil AI BigQuery ML & Data Intelligence Agents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BigQuery ML & Data Intelligence Agents | Kovil AI Google Cloud Vertex AI',
    description: 'AI agents and ML models built on BigQuery ML. Predictive analytics, anomaly detection, Gemini in BigQuery natural language SQL, and data intelligence automation — all within your GCP data warehouse.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'BigQuery ML & Data Intelligence Agents',
  description: 'AI agents and ML models built on BigQuery ML. Predictive analytics, anomaly detection, Gemini in BigQuery natural language SQL, and data intelligence automation — all within your GCP data warehouse.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'BigQuery ML Implementation',
  url: 'https://kovil.ai/vertex-ai/services/bigquery-ml-data-agents',
  areaServed: ['New York', 'Austin', 'United States', 'Worldwide'],
  offers: { '@type': 'Offer', description: 'Four-week ML build with production deployment, model monitoring, and automated retraining' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between BigQuery ML and Vertex AI custom models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BigQuery ML trains and serves models directly inside BigQuery using SQL — no data movement, no separate ML infrastructure, and models train on your full warehouse dataset. Vertex AI custom models offer more flexibility for complex deep learning architectures and custom training loops. For tabular data, time series, and classification tasks on BigQuery data, BQML is typically faster to deploy and cheaper to operate. We recommend based on your model complexity and team\'s skills.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Gemini in BigQuery and how does it help data teams?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gemini in BigQuery is a suite of AI-assisted features embedded in BigQuery Studio. It enables natural language SQL generation — analysts type a plain English question and Gemini generates the SQL — along with code completion, query explanation, and data insights generation. For data teams, it dramatically reduces the barrier to complex query writing and accelerates exploratory analysis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What ML algorithms does BigQuery ML support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BigQuery ML supports linear and logistic regression, k-means clustering, time series forecasting (ARIMA Plus), random forest, gradient boosted trees (XGBoost), deep neural networks, matrix factorisation for recommendations, PCA, and anomaly detection. It also supports importing and running TensorFlow, PyTorch, and ONNX models, as well as calling remote Vertex AI model endpoints from SQL.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does BigQuery ML cost compared to Vertex AI training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BigQuery ML training costs are charged as BigQuery compute — typically at flat-rate or on-demand slot pricing, which means model training cost is often bundled into your existing BigQuery spend. Vertex AI custom training uses separate compute pricing and can be more expensive for large training runs. For organisations with BigQuery flat-rate commitments, BQML model training is effectively free beyond the existing slot cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can BigQuery ML models connect to Vertex AI agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BigQuery ML model predictions can be called from Vertex AI agents as tool functions — the agent triggers a BigQuery ML prediction call as part of its reasoning, incorporates the result into its response, and takes follow-on actions based on the prediction output. We design the agent-to-BQML integration architecture during the build phase.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://kovil.ai/vertex-ai/services' },
    { '@type': 'ListItem', position: 4, name: 'BigQuery ML & Data Intelligence Agents', item: 'https://kovil.ai/vertex-ai/services/bigquery-ml-data-agents' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BigQueryMLAgentsPage />
    </>
  )
}

import type { Metadata } from 'next'
import MLOpsPipelineAgentPage from '@/src/pages/vertex-ai/developer-tools/MLOpsPipelineAgentPage'

export const metadata: Metadata = {
  title: 'MLOps Pipeline Agent — Vertex AI Pipelines Automation | Kovil AI',
  description: 'Automates model evaluation, deployment gating, and retraining triggers on Vertex AI Pipelines — with Gemini monitoring and explaining model performance changes on Google Cloud.',
  alternates: { canonical: 'https://kovil.ai/vertex-ai/developer-tools/mlops-pipeline-agent' },
  keywords: ['MLOps pipeline agent GCP', 'Vertex AI Pipelines', 'MLOps automation GCP', 'Vertex AI model monitoring', 'Gemini MLOps', 'Google Cloud MLOps', 'Vertex AI retraining automation', 'ML pipeline automation GCP', 'Vertex AI model deployment', 'MLOps Vertex AI partner', 'GCP ML pipeline agent', 'Vertex AI CI/CD ML'],
  openGraph: {
    type: 'website',
    title: 'MLOps Pipeline Agent — Vertex AI Pipelines Automation | Kovil AI',
    description: 'Automated model evaluation, deployment gating, and retraining on Vertex AI Pipelines. Gemini explains model performance changes in plain language.',
    url: 'https://kovil.ai/vertex-ai/developer-tools/mlops-pipeline-agent',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-vertex-ai.png', width: 1200, height: 630, alt: 'MLOps Pipeline Agent — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MLOps Pipeline Agent | Kovil AI Vertex AI',
    description: 'Automated model evaluation, deployment gating, and retraining on Vertex AI Pipelines. Gemini-narrated model health.',
    images: ['https://kovil.ai/og-vertex-ai.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'MLOps Pipeline Agent',
  description: 'Automates model evaluation, deployment gating, and retraining triggers on Vertex AI Pipelines — with Gemini monitoring and explaining model performance changes in plain language.',
  provider: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
  serviceType: 'Vertex AI Implementation',
  url: 'https://kovil.ai/vertex-ai/developer-tools/mlops-pipeline-agent',
  areaServed: ['New York', 'Austin', 'United States', 'United Kingdom'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What does the MLOps pipeline agent automate on Vertex AI?', acceptedAnswer: { '@type': 'Answer', text: 'The MLOps pipeline agent automates the full model lifecycle on Vertex AI: training triggers (on schedule, on data drift detection, or on performance degradation); automated evaluation against your evaluation dataset with configurable pass/fail criteria; deployment gating (the model is only deployed if it outperforms the current production model on your defined metrics); canary and shadow deployment management; production monitoring via Vertex AI Model Monitoring (prediction distribution drift, feature drift); and automatic retraining trigger when drift thresholds are crossed. Gemini narrates performance changes — explaining why a model passed or failed evaluation in plain language for engineering and product teams.' } },
    { '@type': 'Question', name: 'What ML frameworks and model types does this support?', acceptedAnswer: { '@type': 'Answer', text: 'Vertex AI Pipelines supports any ML framework via containerised pipeline components: scikit-learn, XGBoost, LightGBM, TensorFlow, PyTorch, and Hugging Face Transformers are all supported natively. BigQuery ML models (ARIMA Plus, boosted trees, DNNs) can be managed through the same pipeline framework using the BigQuery ML components for Vertex AI Pipelines. LLM fine-tuning pipelines — including supervised fine-tuning of Gemini models and RLHF — are supported via the Vertex AI SDK fine-tuning API and can be gated by the same automated evaluation framework.' } },
    { '@type': 'Question', name: 'How does model drift detection work?', acceptedAnswer: { '@type': 'Answer', text: 'Vertex AI Model Monitoring continuously compares the distribution of features and predictions in production against a baseline distribution captured at training time. Drift is measured using population stability index (PSI) or Jensen-Shannon divergence depending on feature type. When drift exceeds configurable thresholds, the monitoring service emits an alert to Cloud Pub/Sub, which triggers the MLOps pipeline agent to: notify the ML engineering team via Slack or email with a Gemini-narrated drift report; trigger a data validation pipeline to assess ground truth availability; and if configured, initiate an automated retraining pipeline with the latest data.' } },
    { '@type': 'Question', name: 'Can this integrate with our existing CI/CD pipeline?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Vertex AI Pipelines integrates with standard CI/CD tools via REST API and Python SDK. We implement GitOps-style ML workflows: a git commit to your model training code triggers a Cloud Build pipeline that packages the training container, submits the Vertex AI Pipeline run, monitors evaluation, and conditionally promotes the model to production via the Vertex AI Model Registry. This integrates with GitHub Actions, GitLab CI, Cloud Build, and Jenkins. The result is a fully automated ML development workflow where model deployments go through the same code review, testing, and approval gates as application deployments.' } },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Vertex AI', item: 'https://kovil.ai/vertex-ai' },
    { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: 'https://kovil.ai/vertex-ai/developer-tools' },
    { '@type': 'ListItem', position: 4, name: 'MLOps Pipeline Agent', item: 'https://kovil.ai/vertex-ai/developer-tools/mlops-pipeline-agent' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <MLOpsPipelineAgentPage />
    </>
  )
}

import type { Metadata } from 'next'
import ComputerVisionEngineersPage from '@/src/pages/engage/ComputerVisionEngineersPage'

export const metadata: Metadata = {
  title: 'Hire a Computer Vision Developer — Matched in 48 Hours | Kovil AI',
  description: 'Hire a vetted computer vision engineer embedded in your team in 48 hours. Object detection, video analytics, medical imaging, OCR, edge AI. Engagement Manager oversight, 2-week risk-free trial. No lock-in.',
  alternates: { canonical: 'https://kovil.ai/engage/computer-vision-engineers' },
  keywords: [
    'hire computer vision developer',
    'computer vision engineer',
    'hire CV engineer',
    'computer vision AI engineer',
    'computer vision developer for hire',
    'object detection engineer',
    'hire machine vision engineer',
  ],
  openGraph: {
    type: 'website',
    title: 'Hire a Computer Vision Developer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 computer vision engineers embedded in your team in 48 hours. Object detection, video analytics, medical imaging — sprint-delivered, Engagement Manager audited.',
    url: 'https://kovil.ai/engage/computer-vision-engineers',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Hire a Computer Vision Developer — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire a Computer Vision Developer — Matched in 48 Hours | Kovil AI',
    description: 'Vetted Tier-1 computer vision engineers embedded in your team in 48 hours. Sprint-delivered, Engagement Manager audited.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hire Computer Vision Engineers',
  description: 'Embed a vetted Tier-1 computer vision engineer into your team in 48 hours. Specialists in object detection, image segmentation, video analytics, OCR, medical imaging, and edge AI. Sprint-based delivery with Engagement Manager oversight and a 2-week risk-free trial.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/og-image.png',
    contactPoint: { '@type': 'ContactPoint', contactType: 'Sales', url: 'https://kovil.ai/contact' },
  },
  serviceType: 'Computer Vision Engineering',
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
  ],
  url: 'https://kovil.ai/engage/computer-vision-engineers',
  offers: {
    '@type': 'Offer',
    description: '2-week risk-free trial. Matched in 48 hours. No lock-in contracts.',
    url: 'https://kovil.ai/engage/computer-vision-engineers',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Computer Vision Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Object Detection Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Image Classification Pipelines' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Video Analytics & Tracking' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'OCR & Document AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medical Imaging AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Edge & Embedded Vision' } },
    ],
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Hire a Computer Vision Developer with Kovil AI',
  description: 'Embed a vetted computer vision engineer into your team in under 48 hours with milestone-gated delivery and Engagement Manager oversight.',
  totalTime: 'PT48H',
  step: [
    {
      '@type': 'HowToStep', position: 1,
      name: 'Brief Your Needs',
      text: 'Fill a 5-minute intake form describing your computer vision use case, data situation, and stack. A Delivery Lead contacts you within 24 hours.',
      url: 'https://kovil.ai/engage/computer-vision-engineers',
    },
    {
      '@type': 'HowToStep', position: 2,
      name: 'Meet Your Engineer',
      text: 'We surface 2–3 hand-picked computer vision engineers matched to your domain. You review profiles, join intro calls, and choose your fit.',
      url: 'https://kovil.ai/engage/computer-vision-engineers',
    },
    {
      '@type': 'HowToStep', position: 3,
      name: 'Sprint & Deliver',
      text: 'Your engineer works in focused sprints. An Engagement Manager audits every milestone output. You get working, production-ready computer vision systems.',
      url: 'https://kovil.ai/engage/computer-vision-engineers',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a computer vision engineer do?',
      acceptedAnswer: { '@type': 'Answer', text: 'A computer vision engineer builds systems that enable machines to interpret and understand visual data — images and video. They design, train, and deploy models for tasks like object detection, image classification, segmentation, facial recognition, OCR, and video analytics. They also handle the full ML pipeline from data preparation to production deployment.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can I hire a computer vision developer through Kovil AI?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most clients are matched with a vetted computer vision engineer within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days. We offer a 2-week risk-free trial so you can validate fit before committing.' },
    },
    {
      '@type': 'Question',
      name: 'What frameworks and tools do your computer vision engineers use?',
      acceptedAnswer: { '@type': 'Answer', text: 'Our engineers are proficient across PyTorch, TensorFlow, OpenCV, YOLO (v5/v8/v9), Detectron2, Hugging Face, ONNX, TensorRT, CoreML, and AWS Rekognition. They cover the full stack from model training to edge deployment.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to provide labelled training data to get started?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. Your engineer can help you design a data collection and annotation strategy from scratch. For many use cases, transfer learning from pre-trained models reduces the amount of labelled data required significantly.' },
    },
    {
      '@type': 'Question',
      name: 'What industries do your computer vision engineers work across?',
      acceptedAnswer: { '@type': 'Answer', text: 'Retail (shelf analytics, cashierless checkout), healthcare (medical imaging, diagnostics), manufacturing (defect detection, QC automation), logistics (package sorting, vehicle tracking), security (surveillance, access control), and agritech (crop monitoring, disease detection).' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a computer vision engineer and a machine learning engineer?',
      acceptedAnswer: { '@type': 'Answer', text: 'A machine learning engineer works broadly across ML — recommendation systems, NLP, tabular data, time series. A computer vision engineer specialises in visual data — images and video. CV engineers have deep knowledge of convolutional architectures, image preprocessing, spatial reasoning, and visual model optimisation that generalist ML engineers typically lack.' },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',                           item: 'https://kovil.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Engage',                         item: 'https://kovil.ai/engage/managed-ai-engineer' },
    { '@type': 'ListItem', position: 3, name: 'Computer Vision Engineers',      item: 'https://kovil.ai/engage/computer-vision-engineers' },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="pt-20"><ComputerVisionEngineersPage /></div>
    </>
  )
}

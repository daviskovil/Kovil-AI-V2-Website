import type { Metadata } from 'next'
import RealTimeFraudPage from '@/src/pages/ai-workflow-automation-library/RealTimeFraudPage'

export const metadata: Metadata = {
  title: 'Real-Time Fraud Detection — FinTech AI Pipeline | Kovil AI',
  description: 'ML-powered real-time fraud detection with sub-80ms decision latency. XGBoost scoring, configurable rule engine, SHAP explainability, analyst queue, and PCI-DSS compliant audit logging.',
  alternates: { canonical: 'https://kovil.ai/ai-workflow-automation-library/real-time-fraud-detection' },
  openGraph: {
    type: 'website',
    title: 'Real-Time Fraud Detection — FinTech AI Pipeline | Kovil AI',
    description: 'XGBoost fraud scoring in <80ms. 94% detection rate, 0.1% false positives, full regulatory audit trail.',
    url: 'https://kovil.ai/ai-workflow-automation-library/real-time-fraud-detection',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'Real-Time Fraud Detection' }],
  },
}

export default function Page() {
  return <div className="pt-20"><RealTimeFraudPage /></div>
}

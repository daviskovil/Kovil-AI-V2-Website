import type { Metadata } from 'next'
import FinancialServicesServiceCloudPage from '@/src/pages/agentforce/playbook/FinancialServicesServiceCloudPage'

export const metadata: Metadata = {
  title: 'From 48-Hour Case Resolution to 4 Hours: An Agentforce Service Cloud Build | Kovil AI',
  description: 'A step-by-step walkthrough of a real Agentforce Service Cloud deployment at a Series B lending platform — architecture decisions, MuleSoft integration, guardrail configuration, and the results.',
  alternates: { canonical: 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build' },
  openGraph: {
    type: 'article',
    title: 'From 48-Hour Case Resolution to 4 Hours: An Agentforce Service Cloud Build',
    description: 'A step-by-step walkthrough of a real Agentforce Service Cloud deployment at a Series B lending platform — architecture decisions, MuleSoft integration, and results.',
    url: 'https://kovil.ai/agentforce/playbook/financial-services-service-cloud-build',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Kovil AI' }],
  },
}

export default function Page() {
  return <FinancialServicesServiceCloudPage />
}

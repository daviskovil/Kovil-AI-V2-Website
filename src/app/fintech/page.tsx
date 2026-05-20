import type { Metadata } from 'next'
import FinTechPage from '@/src/pages/fintech/FinTechPage'

export const metadata: Metadata = {
  title: 'AI Engineering for FinTech & Financial Services | Kovil AI',
  description: 'Kovil AI embeds vetted AI engineers into FinTech companies. Build compliant fraud detection, KYC automation, underwriting AI, and financial workflow systems — 48hr match, 2-week risk-free trial.',
  alternates: { canonical: 'https://kovil.ai/fintech' },
  openGraph: {
    type: 'website',
    title: 'AI Engineering for FinTech & Financial Services | Kovil AI',
    description: 'Production-grade AI for FinTech — fraud detection, KYC/AML, underwriting automation. 48hr engineer match, compliance-ready builds.',
    url: 'https://kovil.ai/fintech',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-image.png', width: 1200, height: 630, alt: 'AI Engineering for FinTech — Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Engineering for FinTech | Kovil AI',
    description: 'Fraud detection, KYC automation, underwriting AI — production-grade FinTech AI engineering. 48hr match, risk-free trial.',
    images: ['https://kovil.ai/og-image.png'],
  },
}

export default function Page() {
  return <div className="pt-20"><FinTechPage /></div>
}

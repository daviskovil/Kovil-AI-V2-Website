import type { Metadata } from 'next'
import FAQPage from '@/src/pages/FAQPage'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — Kovil AI',
  description: 'Got questions about hiring AI engineers, fixed-price AI projects, or rescuing a failing AI app? Find answers to every question about Kovil AI.',
  alternates: { canonical: 'https://kovil.ai/frequently-asked-questions' },
}

export default function Page() {
  return <div className="pt-20"><FAQPage /></div>
}

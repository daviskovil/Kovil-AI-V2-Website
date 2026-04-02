import type { Metadata } from 'next'
import ContactPage from '@/src/pages/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Kovil AI — Get in Touch',
  description: 'Contact Kovil AI to discuss your AI engineering project, managed engineer placement, or app rescue needs.',
  alternates: { canonical: 'https://kovil.ai/contact' },
}

export default function Page() {
  return <div className="pt-20"><ContactPage /></div>
}

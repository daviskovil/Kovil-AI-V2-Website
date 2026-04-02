import type { Metadata } from 'next'
import AboutPage from '@/src/pages/AboutPage'

export const metadata: Metadata = {
  title: 'About Kovil AI — Managed AI Engineering Company, New York',
  description: 'Kovil AI is a managed AI engineering company based in Garden City, New York. We embed vetted AI engineers into your team and own the delivery.',
  alternates: { canonical: 'https://kovil.ai/about' },
}

export default function Page() {
  return <div className="pt-20"><AboutPage /></div>
}

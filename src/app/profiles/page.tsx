import type { Metadata } from 'next'
import EngineersPage from '@/src/pages/EngineersPage'

export const metadata: Metadata = {
  title: 'AI & Data Engineers',
  description: 'Browse Kovil AI\'s curated roster of vetted AI and Data engineers available for staff augmentation and fixed-price AI projects.',
  robots: { index: false, follow: false }, // unlisted — shared via direct link only
  openGraph: {
    title: 'AI & Data Engineers | Kovil AI',
    description: '16 vetted engineers across AI, Data, ML & Data Science. Available for staff aug & fixed-price AI builds.',
    images: [
      {
        url: '/og-profiles.png',
        width: 1200,
        height: 630,
        alt: 'AI & Data Engineers — Kovil AI',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Data Engineers | Kovil AI',
    description: '16 vetted engineers across AI, Data, ML & Data Science. Available for staff aug & fixed-price AI builds.',
    images: ['/og-profiles.png'],
  },
}

export default function Page() {
  return (
    <div className="pt-20">
      <EngineersPage />
    </div>
  )
}

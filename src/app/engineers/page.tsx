import type { Metadata } from 'next'
import EngineersPage from '@/src/pages/EngineersPage'

export const metadata: Metadata = {
  title: 'Available AI & Data Engineers | Kovil AI',
  description: 'Browse Kovil AI\'s curated roster of vetted AI and Data engineers available for staff augmentation and fixed-price AI projects.',
  robots: { index: false, follow: false }, // unlisted — shared via direct link only
}

export default function Page() {
  return (
    <div className="pt-20">
      <EngineersPage />
    </div>
  )
}

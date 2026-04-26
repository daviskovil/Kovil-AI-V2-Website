import type { Metadata } from 'next'
import BookACallPage from '@/src/pages/BookACallPage'

export const metadata: Metadata = {
  title: 'Book a Discovery Call',
  description: 'Book a 30-minute discovery call with the Kovil AI team. No sales pitch — just a real conversation about your AI build.',
  alternates: { canonical: 'https://kovil.ai/book-a-call' },
}

export default function Page() {
  return <BookACallPage />
}

import type { Metadata } from 'next'
import MeetingConfirmedPage from '@/src/pages/MeetingConfirmedPage'

export const metadata: Metadata = {
  title: 'Call Confirmed — Kovil AI',
  description: 'Your discovery call with Kovil AI is booked. Here\'s what happens next and a few things worth thinking about before we speak.',
  alternates: { canonical: 'https://kovil.ai/meeting-confirmed' },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <MeetingConfirmedPage />
}

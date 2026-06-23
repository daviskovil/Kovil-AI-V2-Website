import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found | Kovil AI',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-lg mx-auto px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">404</p>
        <h1 className="font-display font-bold text-5xl tracking-tight mb-4">Page not found</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page does not exist or has been moved. Head back to the homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground font-semibold px-8 py-3 text-base hover:opacity-90 transition-opacity"
        >
          Back to Kovil AI
        </Link>
      </div>
    </div>
  )
}

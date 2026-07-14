import type { Metadata } from 'next'
import CompetitorPriceRepricerPage from '@/src/pages/shopify/workflows/CompetitorPriceRepricerPage'

export const metadata: Metadata = {
  title: 'AI Competitor Price Scraper & Dynamic Repricer | Kovil AI',
  description: 'Deploy AI pricing scraper agents that analyze competitor store prices and adjust Shopify product variants dynamically based on margins.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/competitor-price-repricer' },
  keywords: [
    'competitor price scraper shopify',
    'dynamic pricing ai agent',
    'ecommerce price repricer',
    'automated pricing rule engine',
    'shopify scraper agent'
  ]
}

export default function Page() {
  return <CompetitorPriceRepricerPage />
}

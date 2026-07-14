import type { Metadata } from 'next'
import SpecSheetEnricherPage from '@/src/pages/shopify/workflows/SpecSheetEnricherPage'

export const metadata: Metadata = {
  title: 'Automated supplier PDF Spec Sheet Catalog Enricher | Kovil AI',
  description: 'Ingest raw supplier PDF spec sheets and format them autonomously into high-converting, SEO-optimized Shopify product descriptions.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/spec-sheet-catalog-enricher' },
  keywords: [
    'pdf spec sheet parser shopify',
    'automated catalog enricher',
    'llm supplier sheet ingestion',
    'shopify description copywriter',
    'bulk catalog import ai'
  ]
}

export default function Page() {
  return <SpecSheetEnricherPage />
}

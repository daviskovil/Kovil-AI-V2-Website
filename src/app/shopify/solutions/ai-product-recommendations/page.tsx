import type { Metadata } from 'next'
import AiProductRecommendationsPage from '@/src/pages/shopify/solutions/AiProductRecommendationsPage'

export const metadata: Metadata = {
  title: 'Semantic Product Recommendation RAG Systems | Kovil AI',
  description: 'Deploy vector-database semantic product recommendation systems. Let models map buyer preferences directly to high-SKU catalogs with 100% accuracy.',
  alternates: { canonical: 'https://kovil.ai/shopify/solutions/ai-product-recommendations' },
  keywords: [
    'shopify ai product recommendations',
    'vector search product recommendation',
    'rag ecommerce catalog',
    'semantic recommendation shopify',
    'high SKU search agent'
  ]
}

export default function Page() {
  return <AiProductRecommendationsPage />
}

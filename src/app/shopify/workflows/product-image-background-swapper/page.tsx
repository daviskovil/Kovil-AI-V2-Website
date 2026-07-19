import type { Metadata } from 'next'
import ProductImageBackgroundSwapperPage from '@/src/pages/shopify/workflows/ProductImageBackgroundSwapperPage'

export const metadata: Metadata = {
  title: 'Product Image AI Background Swapper Agent',
  description: 'Deploy image editing agents to automatically generate custom lifestyle backgrounds for product images, matching catalog colors and shapes.',
  alternates: { canonical: 'https://kovil.ai/shopify/workflows/product-image-background-swapper' },
  keywords: [
    'product image background swap ai',
    'shopify dynamic product image background',
    'automated product mockup bg switcher',
    'image background editing flow shopify',
    'd2c e-commerce product visual generator',
  ],
  openGraph: {
    type: 'website',
    title: 'Product Image AI Background Swapper Agent | Kovil AI',
    description: 'Image editing agents to automatically generate custom lifestyle backgrounds for product images, matching catalog colors and shapes.',
    url: 'https://kovil.ai/shopify/workflows/product-image-background-swapper',
    siteName: 'Kovil AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Image AI Background Swapper Agent | Kovil AI',
    description: 'Image editing agents to automatically generate custom lifestyle backgrounds for product images, matching catalog colors and shapes.',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Product Image AI Background Swapper Agent',
  description: 'Custom product photo editor workflows utilizing advanced generative image models to generate lifestyle backgrounds around item frames autonomously.',
  provider: {
    '@type': 'Organization',
    name: 'Kovil AI',
    url: 'https://kovil.ai',
    logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp',
  },
  serviceType: 'AI Agent Development for E-Commerce',
  category: 'Image Editing & Media Workflows',
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ProductImageBackgroundSwapperPage />
    </>
  )
}

import type { MetadataRoute } from 'next'

const BASE_URL = 'https://kovil.ai'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',
          '/api/',
          '/monitoring',
          '/*?*', // Disallow crawling of any URLs with query parameters to prevent indexing filters/duplicates
        ],
      },
    ],
    sitemap: [
      `${BASE_URL}/sitemap.xml`,
    ],
  }
}

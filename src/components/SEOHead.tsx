import { Helmet } from "react-helmet-async"

const SITE_NAME = "Kovil AI"
const SITE_URL = "https://kovil.ai"
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`
const TWITTER_HANDLE = "@kovilai"

interface ArticleMeta {
  publishedTime?: string   // ISO 8601: "2026-03-30T00:00:00Z"
  modifiedTime?: string
  author?: string
  section?: string
}

interface SEOHeadProps {
  title: string
  description: string
  canonical: string          // relative path e.g. "/blog/my-post"
  ogType?: "website" | "article"
  ogImage?: string
  article?: ArticleMeta
  schema?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
}

export function SEOHead({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  article,
  schema,
  noindex = false,
}: SEOHeadProps) {
  // Ensure "Kovil AI" appears in every title
  const fullTitle = title.includes("Kovil AI") ? title : `${title} | ${SITE_NAME}`
  const canonicalUrl = `${SITE_URL}${canonical}`

  return (
    <Helmet>
      {/* ── Primary ─────────────────────────────────────────── */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow" />
      }

      {/* ── Open Graph ──────────────────────────────────────── */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* ── Article OG (blog posts only) ────────────────────── */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.modifiedTime && (
        <meta property="article:modified_time" content={article.modifiedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article?.section && (
        <meta property="article:section" content={article.section} />
      )}

      {/* ── Twitter Card ────────────────────────────────────── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* ── JSON-LD Structured Data ─────────────────────────── */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema], null, 0)}
        </script>
      )}
    </Helmet>
  )
}

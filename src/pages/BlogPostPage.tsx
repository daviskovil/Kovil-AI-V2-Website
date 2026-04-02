import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { getPost } from "../data/posts"
import { SEOHead } from "../components/SEOHead"

// Convert "Mar 30, 2026" → "2026-03-30T00:00:00Z"
function toIso(dateStr: string): string {
  try {
    return new Date(dateStr).toISOString()
  } catch {
    return ""
  }
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPost(slug) : undefined

  if (!post) return <Navigate to="/blog" replace />

  const isoDate = toIso(post.date)

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",  "item": "https://kovil.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Blog",  "item": "https://kovil.ai/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://kovil.ai/blog/${post.slug}` }
    ]
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://kovil.ai/blog/${post.slug}`,
    "datePublished": isoDate,
    "dateModified": isoDate,
    "author": {
      "@type": "Organization",
      "name": "Kovil AI",
      "url": "https://kovil.ai",
      "sameAs": ["https://www.linkedin.com/company/kovil-ai/"]
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kovil AI",
      "url": "https://kovil.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kovil.ai/kovil-logo-symbol.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kovil.ai/blog/${post.slug}`
    }
  }

  return (
    <>
    <SEOHead
      title={post.title}
      description={post.excerpt}
      canonical={`/blog/${post.slug}`}
      ogType="article"
      article={{
        publishedTime: isoDate,
        modifiedTime: isoDate,
        author: post.author,
        section: post.category,
      }}
      schema={[articleSchema, breadcrumbSchema]}
    />
    <div className="min-h-screen bg-background text-foreground">
      {/* Back link */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-4">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>

      {/* Article header */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">{post.category}</span>
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-balance leading-[1.1] mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-border">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
          </div>
        </header>

        {/* Article body */}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* Internal CTA */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Ready to Build?</p>
          <p className="text-lg font-display font-bold mb-4">See how Kovil AI engineers deliver production-grade AI.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/case-studies" className="text-sm font-medium text-accent hover:underline">View Case Studies →</Link>
            <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">How It Works →</Link>
          </div>
        </div>
      </article>
    </div>
    </>
  )
}

'use client'

import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { posts } from "../data/posts"

const BLOG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Kovil AI Blog",
  "url": "https://kovil.ai/blog",
  "description": "Expert guides on AI engineering, LLM deployment, RAG pipelines, and AI automation. Written by Kovil AI engineers.",
  "publisher": { "@type": "Organization", "name": "Kovil AI", "url": "https://kovil.ai" }
}

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kovil.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://kovil.ai/blog" }
  ]
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Blog</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight text-balance leading-[1.05] mb-4">
            Insights on AI Engineering
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Practical guides, case breakdowns, and opinions on building with AI.
          </p>
        </div>
        <div className="mt-10 h-px bg-border relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Featured post */}
        {featured && (
          <Link href={`/blog/${featured.slug}`}
            className="group block mb-16 rounded-2xl border border-border bg-muted/30 hover:border-accent/40 hover:bg-muted/50 transition-all overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/30 group-hover:bg-accent transition-colors" />
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-widest">
                  <Tag className="h-3 w-3" /> Featured
                </span>
                <span className="text-muted-foreground text-sm">·</span>
                <span className="text-sm text-muted-foreground">{featured.category}</span>
              </div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight text-balance leading-tight mb-4 group-hover:text-accent transition-colors">
                {featured.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{featured.readTime}</span>
                <span>{featured.date}</span>
                <span className="flex items-center gap-1 font-medium text-accent group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Rest of posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border hover:border-accent/40 bg-muted/20 hover:bg-muted/40 transition-all p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">{post.category}</span>
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight leading-snug mb-3 group-hover:text-accent transition-colors flex-1">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

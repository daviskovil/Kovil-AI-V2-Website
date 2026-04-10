'use client'

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, ChevronDown } from "lucide-react"
import { getPost } from "../data/posts"

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toIso(dateStr: string): string {
  try { return new Date(dateStr).toISOString() } catch { return "" }
}

function toSlug(text: string): string {
  return text
    .replace(/<[^>]+>/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

interface Heading { level: number; text: string; id: string }

function parseHeadings(html: string): Heading[] {
  const regex = /<h([23])[^>]*>([\s\S]*?)<\/h[23]>/gi
  const results: Heading[] = []
  let match
  while ((match = regex.exec(html)) !== null) {
    const text = match[2].replace(/<[^>]+>/g, "").trim()
    if (text) results.push({ level: parseInt(match[1]), text, id: toSlug(text) })
  }
  return results
}

function injectHeadingIds(html: string): string {
  return html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h[23]>/gi, (_, level, attrs, content) => {
    const text = content.replace(/<[^>]+>/g, "").trim()
    const id = toSlug(text)
    // Don't double-inject if already has an id
    if (attrs.includes("id=")) return `<h${level}${attrs}>${content}</h${level}>`
    return `<h${level}${attrs} id="${id}">${content}</h${level}>`
  })
}

// ─── TOC Component ───────────────────────────────────────────────────────────

function TocList({ headings }: { headings: Heading[] }) {
  // Number only H2s
  let h2Counter = 0
  const items = headings.map((h) => {
    if (h.level === 2) { h2Counter++; return { ...h, num: h2Counter } }
    return { ...h, num: null }
  })

  return (
    <ol className="space-y-1.5">
      {items.map((h) => (
        <li
          key={h.id}
          className={h.level === 3 ? "pl-4" : ""}
        >
          <a
            href={`#${h.id}`}
            className={[
              "flex items-baseline gap-1.5 text-sm leading-snug transition-colors hover:text-accent",
              h.level === 2 ? "text-foreground/80" : "text-muted-foreground",
            ].join(" ")}
          >
            {h.level === 2 ? (
              <span className="shrink-0 tabular-nums text-muted-foreground text-xs w-4">
                {h.num}.
              </span>
            ) : (
              <span className="shrink-0 text-muted-foreground/60 text-xs">○</span>
            )}
            <span>{h.text}</span>
          </a>
        </li>
      ))}
    </ol>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BlogPostPage() {
  const params = useParams()
  const slug = params && typeof params.slug === "string" ? params.slug : undefined
  const post = slug ? getPost(slug) : undefined
  const [tocOpen, setTocOpen] = useState(false)

  if (!post) return null

  const isoDate = toIso(post.date)
  const headings = parseHeadings(post.body)
  const bodyWithIds = injectHeadingIds(post.body)
  const showToc = headings.length >= 3

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",  item: "https://kovil.ai/" },
      { "@type": "ListItem", position: 2, name: "Blog",  item: "https://kovil.ai/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://kovil.ai/blog/${post.slug}` },
    ],
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://kovil.ai/blog/${post.slug}`,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: "Kovil AI",
      url: "https://kovil.ai",
      sameAs: ["https://www.linkedin.com/company/kovil-ai/"],
    },
    publisher: {
      "@type": "Organization",
      name: "Kovil AI",
      url: "https://kovil.ai",
      logo: { "@type": "ImageObject", url: "https://kovil.ai/kovil-logo-symbol.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://kovil.ai/blog/${post.slug}` },
  }

  const localBusinessSchema = post.localBusiness ? {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Kovil AI",
    description: "AI automation and engineering services for New York City ad and marketing agencies",
    url: "https://kovil.ai",
    logo: "https://kovil.ai/kovil-logo-symbol.png",
    image: "https://kovil.ai/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "New York City" },
      { "@type": "State", name: "New York" },
    ],
    serviceType: ["AI Automation", "AI Engineering", "Marketing Technology Automation"],
    knowsAbout: [
      "AI automation for marketing agencies",
      "campaign reporting automation",
      "NYC ad agency AI",
      "creative brief automation",
      "AI workflow automation",
    ],
    sameAs: [
      "https://www.linkedin.com/company/kovil-ai/",
      "https://clutch.co/profile/kovil-ai",
    ],
  } : null

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {localBusinessSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      )}

      <div className="min-h-screen bg-background text-foreground">

        {/* Back link */}
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>

        {/* Content wrapper — single col on mobile, sidebar layout on xl */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className={showToc ? "xl:flex xl:gap-16" : ""}>

            {/* ── Article ── */}
            <article className="min-w-0 flex-1 max-w-3xl">

              {/* Header */}
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

              {/* Hero image */}
              {post.heroImage && (
                <div className="mb-10 rounded-2xl overflow-hidden">
                  <img src={post.heroImage} alt={post.title} className="w-full h-auto object-cover" />
                </div>
              )}

              {/* Mobile TOC — collapsible card, hidden on xl */}
              {showToc && (
                <div className="xl:hidden mb-8 border border-border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setTocOpen(!tocOpen)}
                    className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold hover:bg-muted/40 transition-colors"
                    aria-expanded={tocOpen}
                  >
                    <span>Table of Contents</span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${tocOpen ? "rotate-180" : ""}`} />
                  </button>
                  {tocOpen && (
                    <div className="px-5 pb-5 border-t border-border pt-4">
                      <div className="border-l-2 border-border pl-4">
                        <TocList headings={headings} />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Body */}
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: bodyWithIds }} />

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-16 pt-10 border-t border-border">
                  <h2 className="font-display font-bold text-2xl mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {post.faqs.map((faq, i) => (
                      <div key={i} className="border border-border rounded-xl p-6">
                        <h3 className="font-semibold text-base mb-3">{faq.q}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Inline CTA Banner ── */}
              <div className="mt-14 rounded-2xl overflow-hidden border border-border">
                <div className="bg-[#111827] px-8 py-10 relative">
                  {/* Subtle grid texture */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }} />
                  <div className="relative">
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">Kovil AI · Workflow Automation</p>
                    <h3 className="font-display font-bold text-white text-2xl lg:text-3xl leading-tight mb-4 text-balance">
                      Looking to automate workflows<br className="hidden sm:block" /> inside your business?
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-lg">
                      We help businesses replace hours of manual, repetitive work with AI-powered automations — whether that's connecting your tools with n8n, Make, or building something fully custom. Let's figure out what's possible for your team.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        Talk to Us →
                      </Link>
                      <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        See Our Work
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </article>

            {/* ── Desktop TOC sidebar — sticky, xl only ── */}
            {showToc && (
              <aside className="hidden xl:block w-52 shrink-0 pt-2">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] flex flex-col">
                  <p className="text-[11px] font-bold text-foreground uppercase tracking-widest mb-3 shrink-0">
                    Contents
                  </p>
                  <div className="border-l-2 border-border pl-4 overflow-y-auto">
                    <TocList headings={headings} />
                  </div>
                </div>
              </aside>
            )}

          </div>
        </div>
      </div>
    </>
  )
}

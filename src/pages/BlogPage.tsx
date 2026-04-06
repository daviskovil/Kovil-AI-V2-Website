'use client'

import { useState, useMemo, useRef } from "react"
import Link from "next/link"
import { Clock, Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { posts } from "../data/posts"

const POSTS_PER_PAGE = 10

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

const CATEGORY_COLORS: Record<string, string> = {
  "AI Engineering":  "from-orange-950/60 to-orange-900/30",
  "AI Automation":   "from-amber-950/60 to-amber-900/30",
  "Product":         "from-zinc-800/60 to-zinc-700/30",
  "Software":        "from-slate-800/60 to-slate-700/30",
}

function categoryGradient(cat: string) {
  return CATEGORY_COLORS[cat] ?? "from-zinc-800/60 to-zinc-700/30"
}

// ─── Pagination component ────────────────────────────────────────────────────

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  if (totalPages <= 1) return null

  // Build page number list with ellipsis logic
  function pageNumbers(): (number | "…")[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const pages: (number | "…")[] = [1]
    if (currentPage > 3) pages.push("…")
    const start = Math.max(2, currentPage - 1)
    const end   = Math.min(totalPages - 1, currentPage + 1)
    for (let i = start; i <= end; i++) pages.push(i)
    if (currentPage < totalPages - 2) pages.push("…")
    pages.push(totalPages)
    return pages
  }

  return (
    <nav aria-label="Blog pagination" className="flex items-center justify-center gap-1.5 mt-12">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" /> Prev
      </button>

      {/* Page numbers */}
      {pageNumbers().map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="px-2 py-2 text-sm text-muted-foreground select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            aria-label={`Page ${p}`}
            aria-current={p === currentPage ? "page" : undefined}
            className={[
              "min-w-[36px] h-9 rounded-lg text-sm font-medium transition-colors",
              p === currentPage
                ? "bg-accent text-white"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
            ].join(" ")}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        Next <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [query, setQuery]                   = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage]       = useState(1)
  const gridRef = useRef<HTMLElement>(null)

  const sorted = useMemo(
    () => [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  )

  const categories = useMemo(() => {
    const map: Record<string, number> = {}
    posts.forEach((p) => { map[p.category] = (map[p.category] || 0) + 1 })
    return Object.entries(map).sort((a, b) => b[1] - a[1])
  }, [])

  const tags = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), [])

  const filtered = useMemo(() => {
    let result = sorted
    if (activeCategory) result = result.filter((p) => p.category === activeCategory)
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    }
    return result
  }, [sorted, activeCategory, query])

  const totalPages  = Math.ceil(filtered.length / POSTS_PER_PAGE)
  const paginated   = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  function toggleCategory(cat: string) {
    setActiveCategory((prev) => (prev === cat ? null : cat))
    setCurrentPage(1)
  }

  function handleSearch(value: string) {
    setQuery(value)
    setCurrentPage(1)
  }

  function handlePageChange(page: number) {
    setCurrentPage(page)
    // Scroll back up to the grid top
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BLOG_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <div className="min-h-screen bg-background text-foreground">

        {/* ── Page header ── */}
        <section className="bg-muted/30 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-2">Blog</h1>
                <p className="text-muted-foreground text-lg">
                  Practical guides on AI engineering, deployment, and automation.
                </p>
              </div>
              <nav className="hidden md:flex items-center gap-2 text-sm text-muted-foreground mt-1 shrink-0">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>›</span>
                <span className="text-foreground font-medium">Blog</span>
              </nav>
            </div>
          </div>
        </section>

        {/* ── Main + sidebar ── */}
        <div className="max-w-7xl mx-auto px-6 py-12 pb-24">
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* ── Posts grid ── */}
            <main ref={gridRef} className="flex-1 min-w-0 scroll-mt-8">

              {/* Results count */}
              <p className="text-sm text-muted-foreground mb-6">
                {filtered.length === 0
                  ? "No articles found"
                  : `Showing ${(currentPage - 1) * POSTS_PER_PAGE + 1}–${Math.min(currentPage * POSTS_PER_PAGE, filtered.length)} of ${filtered.length} article${filtered.length !== 1 ? "s" : ""}`}
                {activeCategory && (
                  <> in <span className="text-accent font-medium">{activeCategory}</span></>
                )}
              </p>

              {filtered.length === 0 ? (
                <div className="py-16 text-center text-muted-foreground">
                  <p className="text-lg font-medium mb-1">No articles found</p>
                  <p className="text-sm">Try a different search term or category.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {paginated.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col border border-border rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-md transition-all bg-background"
                      >
                        {/* Thumbnail */}
                        {post.heroImage ? (
                          <div className="aspect-[16/9] overflow-hidden bg-muted shrink-0">
                            <img
                              src={post.heroImage}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div className={`aspect-[16/9] shrink-0 bg-gradient-to-br ${categoryGradient(post.category)} flex items-center justify-center`}>
                            <span className="text-xs font-semibold text-accent/80 uppercase tracking-widest px-4 text-center">
                              {post.category}
                            </span>
                          </div>
                        )}

                        {/* Card body */}
                        <div className="p-6 flex flex-col flex-1">
                          <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
                            {post.category}
                          </span>
                          <h2 className="font-display font-bold text-lg leading-snug mb-3 group-hover:text-accent transition-colors line-clamp-2 flex-1">
                            {post.title}
                          </h2>
                          <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/60">
                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />{post.readTime}
                            </span>
                            <span className="text-xs font-semibold text-accent uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read article <ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              )}
            </main>

            {/* ── Sidebar ── */}
            <aside className="w-full lg:w-72 xl:w-80 shrink-0 lg:sticky lg:top-8 space-y-5">

              {/* Search */}
              <div className="border border-border rounded-2xl p-5">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-muted/40 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 placeholder:text-muted-foreground transition-shadow"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="border border-border rounded-2xl p-5">
                <h3 className="font-display font-semibold text-base mb-4">Categories</h3>
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => toggleCategory("")}
                      className={`w-full flex items-center justify-between text-sm py-1.5 px-2 rounded-lg transition-colors ${
                        !activeCategory
                          ? "text-accent font-semibold bg-accent/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <span>All Articles</span>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded-full tabular-nums">{posts.length}</span>
                    </button>
                  </li>
                  {categories.map(([cat, count]) => (
                    <li key={cat}>
                      <button
                        onClick={() => toggleCategory(cat)}
                        className={`w-full flex items-center justify-between text-sm py-1.5 px-2 rounded-lg transition-colors ${
                          activeCategory === cat
                            ? "text-accent font-semibold bg-accent/5"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full tabular-nums">{count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div className="border border-border rounded-2xl p-5">
                <h3 className="font-display font-semibold text-base mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleCategory(tag)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                        activeCategory === tag
                          ? "bg-accent text-white border-accent"
                          : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

'use client'

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User, ChevronDown } from "lucide-react"
import { getPost } from "../data/posts"
import { OnboardingModal } from "../components/OnboardingModal"

// ─── CTA Config ──────────────────────────────────────────────────────────────

type CtaConfig = {
  label: string
  headline: string
  body: string
  teaser: string
  defaultGoal: string  // pre-selects the modal radio: "talent" | "project" | "rescue"
  primary: { text: string; href: string }
  secondary: { text: string; href: string }
}

const CTA_MAP: Record<string, CtaConfig> = {
  'n8n-vs-zapier-vs-power-automate': {
    label: 'Kovil AI · Workflow Automation',
    teaser: 'Need help choosing and implementing the right automation tool for your business?',
    headline: 'Looking to automate workflows inside your business?',
    body: 'We help businesses replace hours of manual, repetitive work with AI-powered automations — whether that\'s connecting your tools with n8n, Make, or building something fully custom. Let\'s figure out what\'s possible for your team.',
    defaultGoal: 'project',
    primary: { text: 'Talk to Us →', href: '/contact' },
    secondary: { text: 'See Our Work', href: '/case-studies' },
  },
  'rag-vs-fine-tuning': {
    label: 'Kovil AI · AI Engineering',
    teaser: 'Not sure whether RAG or fine-tuning is right for your use case? Our engineers can help.',
    headline: 'Building a custom AI model for your business?',
    body: 'RAG or fine-tuning — our engineers have implemented both in production. We help you choose the right approach for your use case and build it without the guesswork.',
    defaultGoal: 'project',
    primary: { text: 'Talk to Our Engineers →', href: '/contact' },
    secondary: { text: 'See AI Case Studies', href: '/case-studies' },
  },
  'ai-agents-vs-chatbots': {
    label: 'Kovil AI · AI Engineering',
    teaser: 'We build production-grade AI agents and chatbots — not demos. From scoping to deployment.',
    headline: 'Ready to deploy an AI agent or chatbot for your business?',
    body: 'We build production-grade AI agents and chatbots — not demos. From scoping to deployment, our engineers handle the full build and make sure it works in the real world.',
    defaultGoal: 'project',
    primary: { text: 'Start a Conversation →', href: '/contact' },
    secondary: { text: 'View Case Studies', href: '/case-studies' },
  },
  'ai-development-lifecycle': {
    label: 'Kovil AI · AI Engineering',
    teaser: 'Our engineers guide AI projects from planning to production — step in at any stage.',
    headline: 'Need an experienced team to guide your AI project?',
    body: 'We\'ve taken AI projects from whiteboard to production across every stage of the lifecycle. Whether you\'re planning, mid-build, or stuck — we can step in.',
    defaultGoal: 'talent',
    primary: { text: 'Talk to Us →', href: '/contact' },
    secondary: { text: 'How We Work', href: '/how-it-works' },
  },
  'ai-automation-nyc-ad-marketing-agencies': {
    label: 'Kovil AI · NYC Agency Automation',
    teaser: 'We specialize in AI automation for New York ad and marketing agencies.',
    headline: 'Running an ad or marketing agency in New York?',
    body: 'We specialize in AI automation for NYC agencies — campaign reporting, brief generation, client dashboards. Let\'s replace your most time-consuming manual workflows.',
    defaultGoal: 'project',
    primary: { text: 'Book a Discovery Call →', href: '/contact' },
    secondary: { text: 'See Our Work', href: '/case-studies' },
  },
  'what-is-ai-integration': {
    label: 'Kovil AI · AI Integration',
    teaser: 'We connect AI to your existing business stack — no rip-and-replace, just targeted integrations.',
    headline: 'Ready to integrate AI into your existing business stack?',
    body: 'We connect AI models, APIs, and your existing tools into workflows that actually work. No rip-and-replace — just targeted integrations that save real time.',
    defaultGoal: 'project',
    primary: { text: 'Talk to Us →', href: '/contact' },
    secondary: { text: 'How It Works', href: '/how-it-works' },
  },
  'build-mvp-4-weeks': {
    label: 'Kovil AI · 4-Week MVP Sprint',
    teaser: 'We build production MVPs in 4 weeks — fixed scope, fixed timeline, fixed price.',
    headline: 'Got a product idea? We\'ll build your MVP in 4 weeks.',
    body: 'Fixed scope, fixed timeline, fixed price. Our engineers have shipped MVPs across fintech, healthtech, logistics, and SaaS. Let\'s scope yours.',
    defaultGoal: 'project',
    primary: { text: 'Scope My MVP →', href: '/engage/outcome-based-project' },
    secondary: { text: 'See MVP Case Studies', href: '/case-studies' },
  },
  'real-cost-building-mvp-2026': {
    label: 'Kovil AI · Fixed-Cost MVP Build',
    teaser: 'We scope and price your MVP upfront — no hourly billing surprises.',
    headline: 'Want to know exactly what your MVP will cost?',
    body: 'No hourly billing surprises. We scope your MVP upfront and deliver at a fixed price — typically in 4 weeks. Get a clear number before you commit.',
    defaultGoal: 'project',
    primary: { text: 'Get a Fixed-Cost Quote →', href: '/engage/outcome-based-project' },
    secondary: { text: 'See What We\'ve Built', href: '/case-studies' },
  },
  'software-maintenance-time-bomb': {
    label: 'Kovil AI · App Rescue',
    teaser: 'Struggling with tech debt or an unmaintained codebase? Our App Rescue service can help.',
    headline: 'Is your software becoming a liability?',
    body: 'Outdated dependencies, missing tests, mounting tech debt — we\'ve seen it all. Our App Rescue service gets your codebase back to a stable, maintainable state before it becomes a crisis.',
    defaultGoal: 'rescue',
    primary: { text: 'Get an App Rescue Assessment →', href: '/engage/app-rescue' },
    secondary: { text: 'How It Works', href: '/how-it-works' },
  },
  'llm-chatbot-for-business': {
    label: 'Kovil AI · AI Chatbot Build',
    teaser: 'We build LLM chatbots connected to your data and deployed in your stack — not generic wrappers.',
    headline: 'Want to build an AI chatbot for your business?',
    body: 'We build LLM-powered chatbots that are actually useful — connected to your data, trained on your docs, and deployed in your stack. Not a generic off-the-shelf wrapper.',
    defaultGoal: 'project',
    primary: { text: 'Talk to Our Engineers →', href: '/contact' },
    secondary: { text: 'See Our Work', href: '/case-studies' },
  },
  'why-ai-projects-fail': {
    label: 'Kovil AI · AI Engineering',
    teaser: 'Our engineers have rescued AI projects from broken proof-of-concept and taken them to production.',
    headline: "Don't let your AI project become another statistic.",
    body: "The failure points are predictable — and avoidable. Our engineers have rescued AI projects from broken proof-of-concept and taken them to production. We know what it takes.",
    defaultGoal: 'rescue',
    primary: { text: 'Talk to Our Team →', href: '/contact' },
    secondary: { text: 'How We Work', href: '/how-it-works' },
  },
}


  'how-to-write-an-ai-project-brief': {
    label: 'Kovil AI · Fixed-Cost AI Builds',
    teaser: 'We scope AI projects in 48 hours and give you a fixed price before any work begins.',
    headline: 'Ready to scope your AI project?',
    body: "Hand us your brief — or let us help you write one. We'll scope your AI project in 48 hours with a fixed price, clear deliverables, and a team that has shipped AI products across fintech, retail, and SaaS.",
    defaultGoal: 'project',
    primary: { text: 'Get a Fixed Scope →', href: '/engage/outcome-based-project' },
    secondary: { text: "See What We've Built", href: '/case-studies' },
  },


  'gpt-4o-vs-claude-vs-gemini': {
    label: 'Kovil AI · AI Engineering',
    teaser: 'Not sure which AI model to build on? Our engineers work across GPT-4o, Claude, and Gemini.',
    headline: 'Need help choosing the right AI model for your business?',
    body: "The wrong model choice can double your inference costs or cut your accuracy in half. Our engineers have built production systems on all three — we'll help you choose and build right.",
    defaultGoal: 'project',
    primary: { text: 'Talk to Our Engineers →', href: '/contact' },
    secondary: { text: 'See Our Work', href: '/case-studies' },
  },

const DEFAULT_CTA: CtaConfig = {
  label: 'Kovil AI',
  teaser: 'We build AI-powered software for businesses — from automations to full product builds.',
  headline: 'Looking to bring AI into your business?',
  body: "Whether you need a custom AI build, workflow automation, or a fast MVP — our engineers have done it across industries. Let's talk about what you're trying to solve.",
  defaultGoal: '',
  primary: { text: 'Talk to Us →', href: '/contact' },
  secondary: { text: 'See Our Work', href: '/case-studies' },
}

// Split HTML after the Nth closing </p> tag
function splitAfterParagraph(html: string, afterN = 2): [string, string] {
  let count = 0
  let idx = 0
  while (count < afterN) {
    const next = html.indexOf('</p>', idx)
    if (next === -1) break
    count++
    idx = next + 4
  }
  return [html.slice(0, idx), html.slice(idx)]
}


const GRID_BG = { backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '32px 32px' }

function BlogCta({ cta }: { cta: CtaConfig }) {
  return (
    <div className="mt-14 rounded-2xl overflow-hidden border border-border">
      <div className="bg-[#111827] px-8 py-10 relative">
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} />
        <div className="relative">
          <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3">{cta.label}</p>
          <h3 className="font-display font-bold text-white text-2xl lg:text-3xl leading-tight mb-4 text-balance">
            {cta.headline}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-lg">{cta.body}</p>
          <div className="flex flex-wrap gap-3">
            <OnboardingModal defaultGoal={cta.defaultGoal}>
              <button className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors">
                {cta.primary.text}
              </button>
            </OnboardingModal>
            <Link
              href={cta.secondary.href}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              {cta.secondary.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function MidBlogCta({ cta }: { cta: CtaConfig }) {
  return (
    <div className="my-10 rounded-xl overflow-hidden border border-border">
      <div className="bg-[#111827] px-6 py-5 relative flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} />
        <div className="relative flex-1 min-w-0">
          <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{cta.label}</p>
          <p className="text-white text-sm font-medium leading-snug">{cta.teaser}</p>
        </div>
        <OnboardingModal defaultGoal={cta.defaultGoal}>
          <button className="relative shrink-0 text-sm font-semibold bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
            {cta.primary.text}
          </button>
        </OnboardingModal>
      </div>
    </div>
  )
}

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

  const cta = CTA_MAP[post.slug] ?? DEFAULT_CTA
  const isoDate = toIso(post.date)
  const headings = parseHeadings(post.body)
  const bodyWithIds = injectHeadingIds(post.body)
  const [bodyTop, bodyBottom] = splitAfterParagraph(bodyWithIds, 2)
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

              {/* Body — split to inject mid-article CTA after 2nd paragraph */}
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: bodyTop }} />
              <MidBlogCta cta={cta} />
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: bodyBottom }} />

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
              <BlogCta cta={cta} />

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

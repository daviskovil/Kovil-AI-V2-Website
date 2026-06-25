'use client'

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getCaseStudy } from "../data/case-studies"

// ── Icon SVGs for h2 headings ─────────────────────────────────────────────────

function getH2Icon(heading: string): string {
  const t = heading.toLowerCase()
  const c = '#FF4F00'
  const a = `width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.5rem;margin-bottom:3px;flex-shrink:0"`

  if (/solution|built|what we|deliver|phase|engine|how it works/.test(t)) {
    // Lightbulb
    return `<svg ${a}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`
  } else if (/result|outcome|impact|metric|key metric/.test(t)) {
    // Trending up
    return `<svg ${a}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`
  } else if (/challenge|problem|pain|difficult/.test(t)) {
    // Alert triangle
    return `<svg ${a}><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`
  } else if (/approach|method|strategy|how we/.test(t)) {
    // Compass
    return `<svg ${a}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`
  } else if (/situation|context|background|brief|introduction|client background|the context/.test(t)) {
    // Info
    return `<svg ${a}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`
  } else if (/technical|architect|infrastructure|stack|ingestion|pipeline/.test(t)) {
    // Settings/cog
    return `<svg ${a}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
  } else if (/who|user|serve|role|persona/.test(t)) {
    // Users
    return `<svg ${a}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  } else {
    // Default: chevron right
    return `<svg ${a}><polyline points="9 18 15 12 9 6"/></svg>`
  }
}

// ── Body preprocessing: em dash removal + h2 icon injection ──────────────────

function processBody(html: string): string {
  return html
    // Remove em/en dashes
    .replace(/—/g, ',')   // em dash —
    .replace(/–/g, '-')   // en dash –
    .replace(/&mdash;/g, ',')
    .replace(/&ndash;/g, '-')
    // Inject icon before h2 heading text
    .replace(/<h2>([\s\S]*?)<\/h2>/g, (_match, inner) => {
      const icon = getH2Icon(inner.trim())
      return `<h2>${icon}${inner}</h2>`
    })
}

export default function CaseStudyPage() {
  const params = useParams()
  const slug = params && typeof params.slug === 'string' ? params.slug : undefined
  const cs = slug ? getCaseStudy(slug) : undefined

  if (!cs) return null

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",          "item": "https://kovil.ai/" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies",  "item": "https://kovil.ai/case-studies" },
      { "@type": "ListItem", "position": 3, "name": cs.headline,     "item": `https://kovil.ai/case-studies/${cs.slug}` }
    ]
  }

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": cs.headline,
    "description": cs.excerpt,
    "url": `https://kovil.ai/case-studies/${cs.slug}`,
    "author": {
      "@type": "Organization",
      "name": "Kovil AI",
      "url": "https://kovil.ai"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kovil AI",
      "url": "https://kovil.ai",
      "logo": { "@type": "ImageObject", "url": "https://kovil.ai/kovil-logo-symbol.png" }
    },
    "about": {
      "@type": "Service",
      "name": cs.service,
      "provider": { "@type": "Organization", "name": "Kovil AI" }
    }
  }

  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <Link href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Case Studies
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="text-xs font-semibold bg-accent/10 text-accent px-2.5 py-1 rounded-full">{cs.service}</span>
            <span className="text-xs text-muted-foreground">{cs.industry}</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{cs.published}</span>
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight text-balance leading-[1.1] mb-4">
            {cs.headline}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{cs.excerpt}</p>
        </header>

        {/* Meta + Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cs.metrics.map((m, i) => (
            <div key={i} className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="font-display font-bold text-2xl text-accent mb-1">{m.value}</p>
              <p className="text-sm font-medium text-foreground">{m.label}</p>
              {m.sublabel && <p className="text-xs text-muted-foreground">{m.sublabel}</p>}
            </div>
          ))}
        </div>

        {/* Project details */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm mb-10 pb-10 border-b border-border">
          <div>
            <span className="text-muted-foreground">Client type: </span>
            <span className="font-medium">{cs.clientType}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Timeline: </span>
            <span className="font-medium">{cs.timeline}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Team: </span>
            <span className="font-medium">{cs.teamSize}</span>
          </div>
        </div>

        {/* Engineers */}
        {cs.engineers && cs.engineers.length > 0 && (
          <div className="mb-6">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Engineers Used</p>
            <div className="flex flex-wrap gap-2">
              {cs.engineers.map((eng) => (
                <span key={eng} className="text-xs font-medium text-accent border border-accent/30 bg-accent/5 px-2.5 py-1 rounded-full">
                  {eng}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tech stack */}
        <div className="mb-10">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {cs.techStack.map((t) => (
              <span key={t.name} className={`text-xs font-medium text-white px-2.5 py-1 rounded-full ${t.color}`}>
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: processBody(cs.body) }}
        />

        {/* Internal CTA */}
        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">Start Your Project</p>
          <p className="text-lg font-display font-bold mb-4">See the engagement model that fits your situation.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/engage/managed-ai-engineer" className="text-sm font-medium text-accent hover:underline">Managed AI Engineer →</Link>
            <Link href="/engage/outcome-based-project" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Fixed-Price Project →</Link>
            <Link href="/engage/app-rescue" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">AI App Rescue →</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

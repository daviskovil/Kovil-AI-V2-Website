'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { caseStudies } from "../data/case-studies"

const serviceColors: Record<string, string> = {
  "Outcome-Based AI Project": "bg-accent/10 text-accent",
  "Managed AI Engineer": "bg-blue-50 text-blue-700",
  "AI Reliability & App Rescue": "bg-green-50 text-green-700",
}

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kovil.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://kovil.ai/case-studies" }
  ]
}

export default function CaseStudiesPage() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Case Studies</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight text-balance leading-[1.05] mb-4">
            Real Work. Real Results.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            How Kovil AI engineers deliver measurable outcomes across fintech, SaaS, healthcare, and beyond.
          </p>
        </div>
        <div className="mt-10 h-px bg-border relative">
          <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => (
            <Link key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col rounded-2xl border border-border hover:border-accent/40 bg-muted/20 hover:bg-muted/40 transition-all p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
              {/* Top row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${serviceColors[cs.service] ?? "bg-muted text-muted-foreground"}`}>
                    {cs.service}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {cs.industry}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground shrink-0">{cs.published}</span>
              </div>

              {/* Title & excerpt */}
              <h3 className="font-display font-bold text-xl tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors">
                {cs.headline}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
                {cs.excerpt}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {cs.metrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="bg-background rounded-xl p-3 border border-border">
                    <p className="font-display font-bold text-xl text-accent">{m.value}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex gap-2">
                  {cs.techStack.slice(0, 3).map((t) => (
                    <span key={t.name} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                      {t.name}
                    </span>
                  ))}
                  {cs.techStack.length > 3 && (
                    <span className="text-xs text-muted-foreground">+{cs.techStack.length - 3}</span>
                  )}
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                  Read <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

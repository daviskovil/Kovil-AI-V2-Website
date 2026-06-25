'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Loader2 } from "lucide-react"
import { caseStudies, type CaseStudy } from "../data/case-studies"

const serviceColors: Record<string, string> = {
  "Outcome-Based AI Project": "bg-accent/10 text-accent",
  "Managed AI Engineer": "bg-blue-50 text-blue-700",
  "AI Reliability & App Rescue": "bg-green-50 text-green-700",
}

export default function CaseStudiesPage() {
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = async (e: React.MouseEvent, cs: CaseStudy) => {
    e.preventDefault()
    e.stopPropagation()
    if (downloading) return
    setDownloading(cs.slug)
    try {
      const { generateCaseStudyPDF } = await import('@/src/lib/generateCaseStudyPDF')
      await generateCaseStudyPDF(cs)
    } catch (err) {
      console.error('PDF generation failed:', err)
    } finally {
      setDownloading(null)
    }
  }

  const sorted = [...caseStudies].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime()
  )

  return (
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
          {sorted.map((cs) => (
            <div
              key={cs.slug}
              className="group relative flex flex-col rounded-2xl border border-border hover:border-accent/40 bg-muted/20 hover:bg-muted/40 transition-all overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors pointer-events-none" />

              {/* Card inner — padded container */}
              <div className="flex flex-col flex-1 p-7">

                {/* Top row: badges + date + download */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${serviceColors[cs.service] ?? "bg-muted text-muted-foreground"}`}>
                      {cs.service}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                      {cs.industry}
                    </span>
                  </div>

                  {/* Right: date + download button */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-muted-foreground">{cs.published}</span>
                    <button
                      onClick={(e) => handleDownload(e, cs)}
                      disabled={downloading === cs.slug}
                      title="Download case study as PDF"
                      className="flex items-center justify-center p-1.5 rounded-lg border border-border/60 hover:border-red-500/40 hover:bg-red-500/5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {downloading === cs.slug ? (
                        <Loader2 className="h-4 w-4 text-accent animate-spin" />
                      ) : (
                        <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                          {/* Main red body */}
                          <path d="M2.5 0H14L21.5 7.5V23.5Q21.5 26 19 26H3Q0.5 26 0.5 23.5V2.5Q0.5 0 2.5 0Z" fill="#C8201E"/>
                          {/* Darker folded corner */}
                          <path d="M14 0L21.5 7.5H14V0Z" fill="#9B1515"/>
                          {/* Two white content lines */}
                          <rect x="3.5" y="9" width="13" height="2.5" rx="1.25" fill="white"/>
                          <rect x="3.5" y="13.5" width="13" height="2.5" rx="1.25" fill="white"/>
                          {/* PDF label */}
                          <text x="11" y="24.5" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="7.5" fontWeight="800" fill="white">PDF</text>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Main link area — headline + excerpt + metrics + footer */}
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="flex flex-col flex-1"
                >
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

                  {/* Engineers */}
                  {cs.engineers && cs.engineers.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {cs.engineers.map((eng) => (
                        <span key={eng} className="text-xs text-accent/80 border border-accent/20 bg-accent/5 px-2 py-0.5 rounded-full">
                          {eng}
                        </span>
                      ))}
                    </div>
                  )}

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

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

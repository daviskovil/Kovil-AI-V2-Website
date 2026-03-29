import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, Quote } from "lucide-react"
import { getCaseStudy } from "../data/case-studies"

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>()
  const cs = slug ? getCaseStudy(slug) : undefined

  if (!cs) return <Navigate to="/case-studies" replace />

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-4">
        <Link
          to="/case-studies"
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

        {/* Quote */}
        {cs.quote && (
          <blockquote className="mb-10 rounded-2xl border border-border bg-muted/30 p-6 lg:p-8">
            <Quote className="h-6 w-6 text-accent mb-4" />
            <p className="text-lg leading-relaxed font-medium text-foreground mb-4">"{cs.quote}"</p>
            <footer className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{cs.quoteAuthor}</span>
              {cs.quoteRole && <span>, {cs.quoteRole}</span>}
            </footer>
          </blockquote>
        )}

        {/* Body */}
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: cs.body }}
        />
      </div>
    </div>
  )
}

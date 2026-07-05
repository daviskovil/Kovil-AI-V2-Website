import type { Metadata } from 'next'
import Link from 'next/link'
import { agentforceCaseStudies } from '@/src/data/agentforce-case-studies'

export const metadata: Metadata = {
  title: 'Agentforce Case Studies: Real Deployments, Real Results',
  description:
    'Explore Agentforce case studies across telecom, insurance, real estate, hospitality, education, staffing, and enterprise IT. See how Kovil AI has deployed Salesforce Agentforce to drive measurable outcomes.',
  alternates: { canonical: 'https://kovil.ai/agentforce/case-studies' },
  keywords: [
    'Agentforce case studies',
    'Salesforce Agentforce results',
    'Agentforce deployment examples',
    'Agentforce ROI case studies',
    'Salesforce AI case studies',
    'Agentforce implementation examples',
    'Atlas Reasoning Engine case study',
    'Agentforce real estate case study',
    'Agentforce telecom case study',
    'Salesforce Data Cloud case studies',
  ],
  openGraph: {
    type: 'website',
    title: 'Agentforce Case Studies: Real Deployments, Real Results | Kovil AI',
    description:
      'See how Kovil AI deploys Agentforce across industries, telecom, insurance, real estate, hospitality, education, and enterprise IT, with measurable outcomes on every engagement.',
    url: 'https://kovil.ai/agentforce/case-studies',
    siteName: 'Kovil AI',
    images: [{ url: 'https://kovil.ai/og-agentforce.png', width: 1200, height: 630, alt: 'Agentforce Case Studies, Kovil AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentforce Case Studies: Real Deployments, Real Results | Kovil AI',
    description:
      'Explore Agentforce case studies across telecom, insurance, real estate, hospitality, education, staffing, and enterprise IT.',
    images: ['https://kovil.ai/og-agentforce.png'],
  },
}

const listingSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Agentforce Case Studies',
  description:
    'A collection of Agentforce case studies and capability spotlights from Kovil AI, covering Service Cloud automation, Data Cloud deployments, WhatsApp integrations, and Atlas Reasoning Engine implementations.',
  url: 'https://kovil.ai/agentforce/case-studies',
  publisher: { '@type': 'Organization', name: 'Kovil AI', url: 'https://kovil.ai', logo: 'https://kovil.ai/kovil-logo-symbol-orange.webp' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://kovil.ai' },
    { '@type': 'ListItem', position: 2, name: 'Agentforce', item: 'https://kovil.ai/agentforce' },
    { '@type': 'ListItem', position: 3, name: 'Case Studies', item: 'https://kovil.ai/agentforce/case-studies' },
  ],
}

export default function AgentforceCaseStudiesPage() {
  const caseStudies = agentforceCaseStudies.filter((cs) => cs.type === 'case-study')
  const spotlights  = agentforceCaseStudies.filter((cs) => cs.type === 'capability-spotlight')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-background text-foreground">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pt-28 pb-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/agentforce" className="hover:text-accent transition-colors">Agentforce</Link>
            <span>/</span>
            <span>Case Studies</span>
          </nav>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Agentforce in Production</p>
            <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight text-balance leading-[1.05] mb-4">
              Real Deployments.<br />Real Results.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every engagement below is a production Agentforce deployment, from Service Cloud automation in telecom to Atlas Reasoning Engine across five enterprise systems.
            </p>
          </div>

          <div className="mt-10 h-px bg-border relative">
            <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
          </div>

          <div className="flex flex-wrap gap-10 mt-8">
            {[
              { value: '8', label: 'Case Studies' },
              { value: '6', label: 'Capability Spotlights' },
              { value: '10+', label: 'Agentforce Components' },
              { value: '6', label: 'Industries' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-accent">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="group relative flex flex-col rounded-2xl border border-border hover:border-accent/40 bg-muted/20 hover:bg-muted/40 transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors pointer-events-none" />

                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                        Case Study
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {cs.industry}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{cs.published}</span>
                  </div>

                  <Link href={`/agentforce/case-studies/${cs.slug}`} className="flex flex-col flex-1">
                    <h3 className="font-display font-bold text-xl tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors">
                      {cs.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
                      {cs.subheadline}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {cs.metrics.slice(0, 2).map((m, i) => (
                        <div key={i} className="bg-background rounded-xl p-3 border border-border">
                          <p className="font-display font-bold text-xl text-accent">{m.value}</p>
                          <p className="text-xs text-muted-foreground leading-tight">{m.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-2 flex-wrap">
                        {cs.techStack.slice(0, 3).map((t) => (
                          <span key={t} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                            {t}
                          </span>
                        ))}
                        {cs.techStack.length > 3 && (
                          <span className="text-xs text-muted-foreground">+{cs.techStack.length - 3}</span>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all shrink-0">
                        Read
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CAPABILITY SPOTLIGHTS ─────────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="h-px bg-border mb-10 relative">
            <div className="absolute left-0 top-0 h-px w-24 bg-accent" />
          </div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">Capability Spotlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spotlights.map((cs) => (
              <div
                key={cs.slug}
                className="group relative flex flex-col rounded-2xl border border-border hover:border-accent/40 bg-muted/20 hover:bg-muted/40 transition-all overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors pointer-events-none" />

                <div className="flex flex-col flex-1 p-7">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                        Capability
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                        {cs.industry}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{cs.published}</span>
                  </div>

                  <Link href={`/agentforce/case-studies/${cs.slug}`} className="flex flex-col flex-1">
                    <h3 className="font-display font-bold text-lg tracking-tight leading-snug mb-2 group-hover:text-accent transition-colors">
                      {cs.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5 flex-1">
                      {cs.subheadline}
                    </p>

                    <div className="bg-background rounded-xl p-3 border border-border mb-5">
                      <p className="font-display font-bold text-xl text-accent">{cs.metrics[0]?.value}</p>
                      <p className="text-xs text-muted-foreground leading-tight">{cs.metrics[0]?.label}</p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex gap-2 flex-wrap">
                        {cs.techStack.slice(0, 2).map((t) => (
                          <span key={t} className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                            {t}
                          </span>
                        ))}
                        {cs.techStack.length > 2 && (
                          <span className="text-xs text-muted-foreground">+{cs.techStack.length - 2}</span>
                        )}
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all shrink-0">
                        Explore
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section className="border-t border-border bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-4">
                Ready to build your own Agentforce success story?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every engagement starts with a discovery call to map your highest-ROI Agentforce use case. Fixed-price delivery. 2-week risk-free pilot.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book-a-call"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors"
                >
                  Book a Discovery Call
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/agentforce"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-accent/40 hover:text-accent transition-colors"
                >
                  Explore Agentforce Services
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Zap, BarChart3, Users } from 'lucide-react'
import { Button } from '../components/ui/button'
import { OnboardingModal } from '../components/OnboardingModal'

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "AI Readiness Assessment for Ad & Marketing Agencies",
  "description": "Free AI readiness assessment for ad and marketing agencies. Find out where you stand on AI automation readiness and get a personalised action plan.",
  "url": "https://kovil.ai/ai-readiness-ad-marketing-agencies",
  "provider": { "@type": "Organization", "name": "Kovil AI", "url": "https://kovil.ai" }
}

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://kovil.ai/" },
    { "@type": "ListItem", "position": 2, "name": "AI Readiness Assessment", "item": "https://kovil.ai/ai-readiness-ad-marketing-agencies" }
  ]
}

const benefits = [
  { icon: Clock,     label: '3 minutes',      sub: 'to complete' },
  { icon: Zap,       label: 'Instant results', sub: 'no email required' },
  { icon: BarChart3, label: 'Scored across',   sub: '4 readiness dimensions' },
  { icon: Users,     label: 'Built for',       sub: 'agency founders & ops leaders' },
]

const whatYouGet = [
  'Your AI readiness score across automation, data, team, and tooling dimensions',
  'The highest-leverage automation opportunities specific to your agency type',
  'A prioritised action plan — what to do first, second, and what to skip',
  'Honest context on what AI can and cannot realistically deliver for your situation',
]

export default function AIReadinessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <main className="min-h-screen bg-background">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-4">
              Free Assessment · Ad &amp; Marketing Agencies
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-5">
              Is Your Agency<br className="hidden sm:block" /> Ready for AI?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Most agencies know AI matters. Very few know where to start, what to automate first, or whether their data and team are actually ready. This assessment tells you exactly where you stand — in 3 minutes.
            </p>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {benefits.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-2.5 bg-muted/60 border border-border rounded-full px-4 py-2">
                <Icon className="h-4 w-4 text-orange-500 shrink-0" />
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <span className="text-sm text-muted-foreground">{sub}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Embed ────────────────────────────────────────────────────── */}
        <section className="max-w-4xl mx-auto px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border overflow-hidden shadow-sm bg-card"
          >
            <iframe
              src="https://claude.site/public/artifacts/77ad247b-906b-4118-98e0-0f36e688289f/embed"
              title="Kovil AI — AI Readiness Assessment for Ad & Marketing Agencies"
              width="100%"
              height="680"
              frameBorder="0"
              allow="clipboard-write"
              allowFullScreen
              className="block w-full"
            />
          </motion.div>
        </section>

        {/* ── What you get ─────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.2 }}
            className="bg-muted/40 border border-border rounded-2xl p-8"
          >
            <h2 className="text-xl font-bold text-foreground mb-5">What you get from this assessment</h2>
            <ul className="space-y-3.5">
              {whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-foreground text-background py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.25 }}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Want an expert to review your results?
              </h2>
              <p className="text-background/70 mb-8 leading-relaxed">
                Book a free 20-minute call with a Kovil AI engineer. We'll look at your assessment results, identify the highest-ROI automation for your agency, and tell you exactly what it would take to build it.
              </p>
              <OnboardingModal defaultGoal="automation">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 rounded-xl"
                >
                  Book a Free Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </OnboardingModal>
              <p className="text-background/40 text-xs mt-4">No pitch. No pressure. Just a direct conversation about what's possible.</p>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  )
}

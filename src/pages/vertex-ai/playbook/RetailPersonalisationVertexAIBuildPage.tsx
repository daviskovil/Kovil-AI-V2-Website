'use client'

import { motion } from "motion/react"
import { ArrowRight, ChevronRight, Clock, BookOpen, CheckCircle2, AlertCircle, Zap, BarChart3, Users } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"
const G_RED = "#EA4335"
const G_GREEN = "#34A853"
const G_YELLOW = "#FBBC04"

const phases = [
  {
    number: "01",
    color: G_BLUE,
    title: "Discovery & Architecture Design (Week 1)",
    points: [
      "Audit existing recommendation logic and data signals",
      "Map user journey touchpoints where personalisation applies (homepage, PDP, search results, cart, email)",
      "Design Gemini embedding pipeline and Bigtable signal store schema",
      "Select Vertex AI Matching Engine configuration for sub-100ms ANN retrieval",
      "Define A/B testing framework and primary success metrics",
    ],
  },
  {
    number: "02",
    color: G_GREEN,
    title: "Signal Pipeline & Embedding Index (Weeks 2–3)",
    points: [
      "Build real-time user signal ingestion pipeline with Pub/Sub and Dataflow",
      "Generate Gemini text embeddings for the full product catalogue (name, description, attributes, category)",
      "Configure Vertex AI Matching Engine index with approximate nearest-neighbour parameters tuned for your catalogue size",
      "Implement Bigtable user feature store with sub-millisecond read latency",
      "Build cold-start fallback using session signals and contextual features",
    ],
  },
  {
    number: "03",
    color: G_RED,
    title: "Recommendation Serving Layer (Week 4)",
    points: [
      "Deploy recommendation serving API on Cloud Run with autoscaling",
      "Implement pre-fetching and session-level caching for homepage and high-traffic pages",
      "Integrate serving API with e-commerce platform (Shopify, Magento, custom) via REST",
      "Build email personalisation pipeline triggered by Pub/Sub recommendation events",
      "Configure Looker Studio dashboard for real-time recommendation metrics",
    ],
  },
  {
    number: "04",
    color: G_YELLOW,
    title: "A/B Test & Measurement (Week 5–6)",
    points: [
      "Configure A/B test with 50/50 traffic split: control (existing logic) vs. treatment (Vertex AI personalisation)",
      "Instrument CTR, conversion rate, average order value, and revenue per session event tracking",
      "Run test for minimum 2 weeks to reach statistical significance",
      "Present full results report with lift metrics, confidence intervals, and go/no-go recommendation",
      "Optional: deploy multi-armed bandit for continuous optimisation post-experiment",
    ],
  },
]

const techChoices = [
  {
    decision: "Why Gemini embeddings over collaborative filtering?",
    answer: "Collaborative filtering (item-item or user-item matrix factorisation) requires dense interaction history — it fails for new products and new users. Gemini embeddings capture semantic meaning from product attributes, so new products are immediately recommendable and cross-category discovery is natural. For a 240K-item catalogue with frequent new arrivals, Gemini embeddings dramatically outperform collaborative filtering on catalogue coverage.",
    color: G_BLUE,
  },
  {
    decision: "Why Vertex AI Matching Engine over vector databases?",
    answer: "Vertex AI Matching Engine is Google's managed ANN service — it handles index updates, scaling, and serving infrastructure automatically. For a production streaming platform at 85M users, the managed infrastructure matters: we don't want to run and scale a vector database cluster. Matching Engine supports brute-force (exact) and ScaNN (approximate) retrieval, with configurable accuracy/latency tradeoffs, and integrates natively with Vertex AI and Gemini under the same IAM and VPC perimeter.",
    color: G_GREEN,
  },
  {
    decision: "Why Bigtable for the user feature store?",
    answer: "The user feature store needs sub-millisecond read latency at millions of QPS — that's Bigtable's design point. Redis can work at smaller scale but adds operational complexity. Bigtable is managed, scales horizontally without resharding, and integrates with Dataflow for streaming writes. We use a row key design that partitions by user_id with consistent hashing to avoid hotspots, and set TTLs on historical interaction features to control storage costs.",
    color: G_RED,
  },
]

const results = [
  { metric: "+28%", label: "Average order value", color: G_BLUE },
  { metric: "4.1x", label: "Recommendation click-through rate", color: G_GREEN },
  { metric: "$1.8M", label: "Annual revenue uplift", color: G_RED },
  { metric: "17 min", label: "Content tagging time (from 6 hrs)", color: G_YELLOW },
]

const lessonsLearned = [
  {
    icon: AlertCircle,
    color: G_RED,
    lesson: "Cold-start is the hardest problem — plan for it upfront",
    detail: "Don't assume you can launch with collaborative filtering for warm users and add cold-start handling later. Design the cold-start fallback as a first-class feature: session signals, entry source, device, time-of-day, and category-level popularity need to be wired from day one.",
  },
  {
    icon: Zap,
    color: G_BLUE,
    lesson: "Pre-fetch recommendations at session start — don't generate on demand",
    detail: "Generating recommendations on every page render adds 100–300ms to load time. We pre-fetch the top-100 recommendations for each user at session initialisation, cache them in the browser session, and refresh asynchronously. The serving latency the user experiences is effectively zero.",
  },
  {
    icon: BarChart3,
    color: G_GREEN,
    lesson: "Run A/B tests for at least 2 weeks — not 3 days",
    detail: "Day-of-week effects, email campaign traffic, and weekend browsing patterns mean 3-day tests produce misleading results. We always run for a minimum of 2 weeks covering at least 2 full business cycles, and we pre-register our primary metric and minimum detectable effect before the test starts to avoid p-hacking.",
  },
  {
    icon: Users,
    color: G_YELLOW,
    lesson: "Business stakeholders need to own the success metrics",
    detail: "The ML team wanted to optimise for recommendation CTR. The business team cared about revenue per session. These are different objectives and can pull in different directions. We align on one primary metric before building anything, and make the business team sign off on the A/B test design before launch.",
  },
]

export default function RetailPersonalisationVertexAIBuildPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai/playbook" className="hover:text-foreground transition-colors">Playbook</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Retail Personalisation Build</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${G_BLUE}15`, color: G_BLUE }}>Case Study</span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5" /> 18 min read
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            From 6-Hour Manual Content Review to 17 Minutes: A Vertex AI Build for a Streaming Platform
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Step-by-step walkthrough of a production entertainment deployment — Gemini Vision content tagging pipeline, Vertex AI Search index design, real-time update architecture, and A/B test measurement. Including the decisions we got right, and the ones we had to redo.
          </p>

          {/* Results strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-10 p-6 rounded-2xl border border-border bg-card">
            {results.map(r => (
              <div key={r.label} className="text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: r.color }}>{r.metric}</div>
                <div className="text-xs text-muted-foreground leading-snug">{r.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Context */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">The Client and the Problem</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A global streaming platform with 85 million subscribers and a catalogue of 240,000 hours of content was operating on a manual content tagging and cataloguing process. Each new title required human editorial review — assigning genre tags, content descriptors, mood labels, and thematic keywords — taking an average of 6 hours per title.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The result: 22% of the catalogue was effectively undiscoverable via their search and recommendation systems because it lacked sufficient tag coverage. New content took days to become discoverable after upload, affecting engagement on new releases during their critical first-week window.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The engineering team had evaluated traditional computer vision classification models but found them too narrow — each model could classify one taxonomy dimension (genre, mood, age rating) and required separate training data for each. They needed a single system that could handle the full tag taxonomy from a single pass.
          </p>
        </motion.div>
      </section>

      {/* Why Vertex AI */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">Why Gemini Vision and Vertex AI Search</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Gemini Vision&apos;s multimodal capability was the decisive factor: a single Gemini Vision call can analyse video frames, audio transcripts, and textual metadata simultaneously — generating a comprehensive tag set across all taxonomy dimensions in one pass. Traditional CV models would have required separate models and separate inference pipelines for each tag category.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vertex AI Search provided the discovery layer: once titles were tagged, Vertex AI Search indexed the enriched metadata with semantic embeddings, enabling the recommendation engine and search interface to surface content based on meaning rather than keyword matching. A user searching for &quot;intense psychological drama&quot; finds relevant content even when those exact words don&apos;t appear in the title or description.
          </p>
        </motion.div>
      </section>

      {/* Build Phases */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">How We Built It — Phase by Phase</h2>
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ background: phase.color }}>
                    {phase.number}
                  </div>
                  {i < phases.length - 1 && <div className="w-0.5 flex-1 mt-2" style={{ background: `${phase.color}30` }} />}
                </div>
                <div className="pb-8 flex-1">
                  <h3 className="font-bold text-lg mb-3" style={{ color: phase.color }}>{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.points.map(point => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: phase.color }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Technical Choices */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Key Architecture Decisions Explained</h2>
          <div className="space-y-6">
            {techChoices.map((tc, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 overflow-hidden">
                <div className="flex items-start gap-3">
                  <div className="w-1 self-stretch rounded-full shrink-0" style={{ background: tc.color }} />
                  <div>
                    <h3 className="font-semibold mb-3" style={{ color: tc.color }}>{tc.decision}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tc.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Lessons Learned */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">What We Learned</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {lessonsLearned.map((lesson, i) => {
              const Icon = lesson.icon
              return (
                <div key={i} className="rounded-xl border bg-card p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${lesson.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: lesson.color }} />
                    </div>
                    <h3 className="font-semibold text-sm leading-snug">{lesson.lesson}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{lesson.detail}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl p-10 text-center text-white"
          style={{ background: `linear-gradient(135deg, ${G_BLUE} 0%, #1a73e8 100%)` }}>
          <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Build This for Your Organisation</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Whether you&apos;re tagging content, personalising recommendations, or building discovery — we can implement the same Vertex AI architecture for your use case. Fixed-price. 2-week risk-free pilot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
              Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link href="/vertex-ai">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Explore All Vertex AI Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  )
}

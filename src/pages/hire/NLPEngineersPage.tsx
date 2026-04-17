'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  MessageSquare, FileText, Brain, Zap, ShieldCheck, BarChart3,
  Repeat2, CheckCircle2, ArrowRight, Clock, ChevronDown
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form describing your NLP use case, data situation, and stack. A Delivery Lead contacts you within 24 hours.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Stack & domain matched"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Engineer",
    description: "We surface 2–3 hand-picked NLP engineers with proven experience in your domain. You review profiles, join intro calls, and choose your fit.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your engineer works in focused sprints. An Engagement Manager audits every milestone output. You get working, production-ready NLP systems.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted NLP Engineers", desc: "Every NLP engineer passes a rigorous 5-stage vetting — NLP theory, coding, system design, model optimisation, and live delivery simulation." },
  { icon: Repeat2, title: "Engagement Manager Oversight", desc: "A senior Kovil AI lead audits every milestone before it reaches you. Model accuracy, inference speed, edge cases — all checked." },
  { icon: Zap, title: "Sprint-Based Delivery", desc: "Work happens in structured weekly sprints with clear deliverables. Not open-ended hours billed to a ticket queue." },
  { icon: MessageSquare, title: "NLP Depth Across Domains", desc: "Specialists across sentiment analysis, NER, text classification, machine translation, conversational AI, and document intelligence." },
  { icon: BarChart3, title: "Production-Ready Pipelines", desc: "We don't just fine-tune models — we deploy them. REST APIs, streaming inference, batch processing, and real-time NLP pipelines." },
  { icon: Brain, title: "Data & MLOps Included", desc: "Your engineer handles annotation strategy, data augmentation, model versioning, and CI/CD for ML — end to end." },
]

const buildItems = [
  {
    title: "Sentiment & Opinion Analysis",
    desc: "Multi-class sentiment models fine-tuned on your domain. Social media, reviews, support tickets, survey responses — at scale.",
  },
  {
    title: "Named Entity Recognition & Extraction",
    desc: "Extract people, organisations, locations, dates, and custom entities from unstructured text. Legal, medical, financial documents.",
  },
  {
    title: "Text Classification Pipelines",
    desc: "Intent detection, topic modelling, document routing, content moderation — trained on your labelled data, deployed to production.",
  },
  {
    title: "Machine Translation & Localisation",
    desc: "Custom fine-tuned translation models for domain-specific language. Legal, medical, and technical content where generic MT fails.",
  },
  {
    title: "Conversational AI & Dialogue Systems",
    desc: "Task-oriented dialogue systems, slot filling, context tracking, and multi-turn conversation management beyond simple chatbots.",
  },
  {
    title: "Document Intelligence & Summarisation",
    desc: "Abstractive and extractive summarisation, document Q&A, contract analysis, and structured data extraction from free text.",
  },
]

const forWho = [
  {
    title: "Legal & Compliance Teams",
    desc: "Extract clauses, obligations, and risks from contracts automatically. NLP engineers who understand the precision requirements of legal text.",
  },
  {
    title: "Product Teams Building Language Features",
    desc: "Smart search, auto-tagging, content recommendations, spam detection — NLP features that make your product meaningfully better.",
  },
  {
    title: "Enterprises Processing Text at Scale",
    desc: "Support ticket routing, document classification, knowledge extraction from years of unstructured data. Engineers who've done it in production.",
  },
]

const timeline = [
  { day: "Day 1",     title: "Submit Your Brief",       desc: "Fill a 5-minute intake form. A Delivery Lead calls you within 24 hours to scope requirements, data situation, and preferred stack." },
  { day: "Day 2–3",   title: "Meet Your Shortlist",     desc: "We surface 2–3 NLP engineers matched to your domain. You review profiles, join intro calls, and choose your fit." },
  { day: "Day 3–4",   title: "Milestone Plan Locked",   desc: "You and your engineer agree a sprint plan — model targets, accuracy benchmarks, timelines, and success criteria before any work begins." },
  { day: "Week 1+",   title: "Sprint & Deliver",        desc: "Your engineer works in focused sprints. Your Engagement Manager audits every output. You review at each milestone checkpoint." },
  { day: "Ongoing",   title: "Scale or Wind Down",      desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because it's working, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",        kovil: "24–48 hours",   inhouse: "2–3 months",   agency: "2–4 weeks",    freelancer: "1–2 weeks" },
  { label: "NLP specialisation",   kovil: "Deep domain",   inhouse: "Varies",       agency: "Varies",       freelancer: "Varies" },
  { label: "Managed delivery",     kovil: "✓ Always",      inhouse: "✗",            agency: "Partial",      freelancer: "✗" },
  { label: "Risk-free trial",      kovil: "✓ 2 weeks",     inhouse: "✗",            agency: "✗",            freelancer: "Rarely" },
  { label: "Production deploy",    kovil: "✓ Included",    inhouse: "Depends",      agency: "Extra cost",   freelancer: "Varies" },
  { label: "IP ownership",         kovil: "100% yours",    inhouse: "100% yours",   agency: "Often shared", freelancer: "Varies" },
]

const faqs = [
  {
    q: "What does an NLP engineer do?",
    a: "An NLP engineer builds systems that enable machines to understand, interpret, and generate human language. They design, fine-tune, and deploy models for tasks like sentiment analysis, named entity recognition, text classification, machine translation, summarisation, and conversational AI. They also handle the full ML pipeline from data preparation and annotation through to production deployment and monitoring.",
  },
  {
    q: "How quickly can I hire an NLP engineer through Kovil AI?",
    a: "Most clients are matched with a vetted NLP engineer within 24–48 hours of submitting their brief. The engineer starts on a milestone plan within 3–4 days. We offer a 2-week risk-free trial so you can validate fit before committing.",
  },
  {
    q: "What NLP frameworks and models do your engineers use?",
    a: "Our engineers are proficient across spaCy, Hugging Face Transformers, NLTK, BERT, RoBERTa, T5, GPT fine-tuning, and LangChain. They cover the full stack — from corpus preparation and model fine-tuning to serving inference APIs at production scale.",
  },
  {
    q: "What's the difference between an NLP engineer and an LLM engineer?",
    a: "An NLP engineer has deep expertise in the full spectrum of language processing — from classical statistical methods and task-specific fine-tuned models to modern transformer architectures. An LLM engineer focuses specifically on prompting, orchestrating, and deploying large pre-trained language models. There is significant overlap, but NLP engineers typically handle lower-level text processing, custom model training, and domain-specific fine-tuning that general LLM engineers may not.",
  },
  {
    q: "Do I need a large labelled dataset to get started with NLP?",
    a: "Not necessarily. Many NLP tasks benefit from transfer learning — fine-tuning a pre-trained model like BERT or RoBERTa on even a few hundred labelled examples can yield strong results. Your engineer will assess your data situation on day one and advise on annotation strategy, data augmentation, and whether zero-shot or few-shot approaches can reduce labelling requirements.",
  },
  {
    q: "What industries do your NLP engineers have experience in?",
    a: "Legal (contract analysis, clause extraction, compliance monitoring), healthcare (clinical NLP, medical coding, patient record extraction), finance (sentiment on earnings calls, regulatory document parsing, fraud detection), e-commerce (review analysis, product categorisation, search relevance), and SaaS (intent detection, churn prediction from support tickets, automated routing).",
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-base pr-4">{item.q}</span>
            <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function NLPEngineersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">NLP Engineers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire an NLP Engineer —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 NLP engineers embedded into your team. Sentiment analysis, NER, text classification, document intelligence, conversational AI — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire an NLP Engineer <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="text-sm text-muted-foreground">Two-week risk-free trial. No lock-in.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border">
          {[
            { stat: "< 48h",   label: "Time to match" },
            { stat: "Top 1%",  label: "Engineer tier" },
            { stat: "100%",    label: "IP ownership" },
            { stat: "2 weeks", label: "Risk-free trial" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display font-black text-3xl text-accent">{s.stat}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What They Build */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What They Build</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can an NLP Engineer Build for You?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Who It's For</p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire an NLP Developer Through Kovil AI?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {forWho.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-muted/20 p-6"
            >
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <FileText className="h-4 w-4 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire an NLP Engineer with Kovil AI?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl border border-border bg-background p-7 overflow-hidden group hover:border-accent/40 hover:bg-muted/40 transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/20 group-hover:bg-accent/60 transition-colors" />
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-black text-4xl text-accent/20 leading-none">{step.number}</span>
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                    <Clock className="h-3 w-3" />{step.timeline}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{step.description}</p>
                <ul className="space-y-2">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire an NLP engineer?</h3>
            <p className="text-sm text-muted-foreground">Tell us your use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button variant="accent" className="rounded-full font-semibold px-8 h-11 shrink-0">
              Start Hiring <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What's Included</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included When You Hire an NLP Developer Through Kovil AI?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl border border-border bg-background p-6"
                >
                  <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">What to Expect</p>
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring an NLP Engineer?</h2>
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 w-[136px] flex flex-col items-end gap-1 pt-1 hidden md:flex">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent bg-accent/10 px-2.5 py-1 rounded-full">{item.day}</span>
                </div>
                <div className="shrink-0 h-3 w-3 rounded-full bg-accent mt-2 hidden md:block ring-4 ring-background z-10" />
                <div className="flex-1 bg-muted/20 border border-border rounded-xl p-5 hover:border-accent/30 transition-colors">
                  <span className="text-xs font-bold tracking-widest uppercase text-accent mb-1 block md:hidden">{item.day}</span>
                  <h3 className="font-display font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Why Kovil AI</p>
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire an NLP Developer?</h2>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground w-40"></th>
                <th className="text-left py-4 px-6 font-bold text-accent">Kovil AI</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">In-House Hire</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Big Agency</th>
                <th className="text-left py-4 px-6 font-semibold text-muted-foreground">Freelancer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparison.map((row) => (
                <tr key={row.label} className="hover:bg-muted/20 transition-colors">
                  <td className="py-4 px-6 text-muted-foreground font-medium">{row.label}</td>
                  <td className="py-4 px-6 font-semibold text-foreground">{row.kovil}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.inhouse}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.agency}</td>
                  <td className="py-4 px-6 text-muted-foreground">{row.freelancer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/20 border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring NLP Engineers</h2>
          <div className="max-w-3xl">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-border">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">Explore More</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { href: "/hire/llm-engineers",               label: "Hire LLM Engineers",               desc: "Prompt engineering, RAG, fine-tuning, LLM deployment" },
            { href: "/hire/machine-learning-engineers",   label: "Hire Machine Learning Engineers",   desc: "ML pipelines, model training, MLOps" },
            { href: "/engage/managed-ai-engineer",        label: "Managed AI Engineer",               desc: "Embedded AI engineer for any AI task" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl border border-border p-5 hover:border-accent/40 hover:bg-muted/20 transition-all group"
            >
              <p className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{link.label}</p>
              <p className="text-xs text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-2xl bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your NLP engineer?</h2>
            <p className="text-background/60 text-base">Tell us your use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire an NLP Engineer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}

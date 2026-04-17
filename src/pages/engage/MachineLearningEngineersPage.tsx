'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
  Brain, CheckCircle2, ArrowRight, Clock, ChevronDown,
  Zap, ShieldCheck, BarChart3, Repeat2, Database, Layers
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { OnboardingModal } from "../../components/OnboardingModal"

// ── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01", timeline: "Day 1",
    title: "Brief Your Needs",
    description: "Fill a 5-minute intake form describing your ML use case, data situation, existing stack, and goals. A Delivery Lead contacts you within 24 hours.",
    bullets: ["5-minute async intake", "Delivery Lead assigned same day", "Stack & domain matched"],
  },
  {
    number: "02", timeline: "Days 2–3",
    title: "Meet Your Engineer",
    description: "We surface 2–3 hand-picked ML engineers with proven experience in your domain and tech stack. You review profiles, join intro calls, and choose your fit.",
    bullets: ["Curated match — not a marketplace", "Live intro call included", "Milestone plan agreed upfront"],
  },
  {
    number: "03", timeline: "Week 1 onwards",
    title: "Sprint & Deliver",
    description: "Your engineer works in focused sprints. An Engagement Manager audits every milestone. You get working, production-ready ML systems — not notebooks, not experiments.",
    bullets: ["Weekly milestone check-ins", "Engagement Manager quality audit", "Two-week risk-free trial"],
  },
]

const included = [
  { icon: ShieldCheck, title: "Tier-1 Vetted ML Engineers",     desc: "Every ML engineer passes a rigorous 5-stage vetting — statistics & theory, ML system design, coding, model evaluation, and live delivery simulation." },
  { icon: Repeat2,    title: "Engagement Manager Oversight",    desc: "A senior Kovil AI lead audits every milestone before it reaches you. Model accuracy, data leakage, production readiness — all verified." },
  { icon: Zap,        title: "Sprint-Based Delivery",           desc: "Work happens in structured weekly sprints with clear deliverables. Not open-ended hours billed to a Jira ticket." },
  { icon: Brain,      title: "ML Domain Depth",                 desc: "Specialists across supervised learning, deep learning, NLP, recommendation systems, time series, tabular ML, and LLM fine-tuning." },
  { icon: Database,   title: "Data Pipeline & MLOps Included",  desc: "Your engineer owns the full stack — data ingestion, feature engineering, model training, versioning, CI/CD for ML, and production monitoring." },
  { icon: BarChart3,  title: "Production-Ready Models",         desc: "We don't just build models — we deploy them. FastAPI, BentoML, SageMaker, Vertex AI, or your own infra. Monitored and maintained." },
]

const buildItems = [
  { title: "Predictive ML Models",           desc: "Churn prediction, demand forecasting, fraud detection, credit scoring — trained, validated, and deployed to production." },
  { title: "Recommendation Systems",         desc: "Collaborative filtering, content-based, and hybrid recommender engines for e-commerce, SaaS, and media platforms." },
  { title: "NLP & Text ML Pipelines",        desc: "Sentiment analysis, entity extraction, text classification, summarisation — from BERT fine-tuning to custom transformer models." },
  { title: "LLM Fine-Tuning & RAG",          desc: "Fine-tune foundation models on your data. Build RAG pipelines that retrieve and reason over your knowledge base accurately." },
  { title: "Time Series & Anomaly Detection",desc: "Sales forecasting, predictive maintenance, anomaly detection in logs, metrics, or IoT sensor data." },
  { title: "MLOps & Production Pipelines",   desc: "Model versioning, automated retraining, drift monitoring, A/B testing infrastructure — making ML reliable in production." },
]

const forWho = [
  { title: "Startups Building ML-Powered Products", desc: "You have a product that needs ML capabilities but no in-house expertise. Get a vetted ML engineer embedded in 48 hours — not 3 months of hiring cycles." },
  { title: "Data Teams Needing ML Engineering",     desc: "Your data scientists have models but struggle to productionise them. An ML engineer bridges the gap between experiment and production." },
  { title: "CTOs & Heads of Product",               desc: "You know what ML needs to power your product but can't hire fast enough. Sprint-gated delivery, one point of contact, no vendor chaos." },
]

const timeline = [
  { day: "Day 1",     title: "Submit Your Brief",       desc: "Fill a 5-minute intake form. A Delivery Lead calls you within 24 hours to scope requirements, data situation, and preferred stack." },
  { day: "Day 2–3",   title: "Meet Your Shortlist",     desc: "We surface 2–3 ML engineers matched to your domain. You review profiles, join intro calls, and choose your fit." },
  { day: "Day 3–4",   title: "Milestone Plan Locked",   desc: "You and your engineer agree a sprint plan — model targets, accuracy benchmarks, timelines, and success criteria before any work begins." },
  { day: "Week 1+",   title: "Sprint & Deliver",        desc: "Your engineer works in focused sprints. Your Engagement Manager audits every output. You review at each milestone checkpoint." },
  { day: "Ongoing",   title: "Scale or Wind Down",      desc: "Add engineers, extend sprints, or wind down — no lock-in. You stay because it's working, not because you're contracted." },
]

const comparison = [
  { label: "Time to start",       kovil: "24–48 hours",     inhouse: "2–3 months",   agency: "2–4 weeks",    freelancer: "1–2 weeks" },
  { label: "ML specialisation",   kovil: "Deep domain",     inhouse: "Varies",       agency: "Varies",       freelancer: "Varies" },
  { label: "Managed delivery",    kovil: "✓ Always",        inhouse: "✗",            agency: "Partial",      freelancer: "✗" },
  { label: "Risk-free trial",     kovil: "✓ 2 weeks",       inhouse: "✗",            agency: "✗",            freelancer: "Rarely" },
  { label: "MLOps included",      kovil: "✓ Always",        inhouse: "Separate hire", agency: "Extra cost",  freelancer: "Rarely" },
  { label: "IP ownership",        kovil: "100% yours",      inhouse: "100% yours",   agency: "Often shared", freelancer: "Varies" },
]

const faqs = [
  {
    q: "What does a machine learning engineer do?",
    a: "A machine learning engineer designs, builds, and deploys ML systems that make predictions or decisions from data. They work across the full ML lifecycle — problem framing, data pipeline design, feature engineering, model training and evaluation, deployment, and production monitoring. Unlike data scientists who focus on analysis and experimentation, ML engineers focus on building reliable, scalable ML systems in production.",
  },
  {
    q: "How quickly can I hire a machine learning engineer through Kovil AI?",
    a: "Most clients are matched with a vetted ML engineer within 24–48 hours of submitting their brief. The engineer starts on an agreed milestone plan within 3–4 days. We offer a 2-week risk-free trial so you can validate fit and output quality before committing to a longer engagement.",
  },
  {
    q: "What frameworks and tools do your ML engineers use?",
    a: "Our engineers are proficient across Python, PyTorch, TensorFlow, scikit-learn, XGBoost, LightGBM, Hugging Face Transformers, LangChain, MLflow, DVC, AWS SageMaker, Google Vertex AI, and Azure ML. They cover the full stack from data processing to production deployment and monitoring.",
  },
  {
    q: "What is the difference between a machine learning engineer and a data scientist?",
    a: "A data scientist focuses on analysis, experimentation, and model research — finding insights and proving that ML can solve a problem. A machine learning engineer focuses on building the systems that run those models reliably in production — data pipelines, model serving, retraining automation, and monitoring. For building a working ML product, you typically need both, but an ML engineer is often the missing piece.",
  },
  {
    q: "Can ML engineers help with model deployment and MLOps?",
    a: "Yes — MLOps is a core part of what our ML engineers do. This includes containerising models, building CI/CD pipelines for ML, setting up monitoring for model drift and data drift, automating retraining pipelines, and ensuring production reliability. Many clients hire specifically for MLOps when their data science team can train models but can't get them reliably into production.",
  },
  {
    q: "Do I own all the code and models built by the ML engineer?",
    a: "Yes, 100%. All code, trained models, data pipelines, and documentation produced during your engagement are fully owned by you. We operate under clear IP assignment terms with no carve-outs, no shared IP, and no lock-in to proprietary tooling.",
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

export default function MachineLearningEngineersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">Machine Learning Engineers</p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl tracking-tight leading-[1.05] text-balance mb-6">
            Hire a Machine Learning Developer —<br />
            <span className="text-accent">Matched in 48 Hours.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Vetted Tier-1 ML engineers embedded into your team. Predictive models, recommendation systems, NLP, LLM fine-tuning, MLOps — sprint-delivered, Engagement Manager audited.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <OnboardingModal defaultGoal="talent">
              <Button variant="accent" className="rounded-full font-semibold px-8 text-base h-12">
                Hire an ML Engineer <ArrowRight className="ml-2 h-4 w-4" />
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What Can a Machine Learning Engineer Build for You?</h2>
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
                  <Brain className="h-5 w-5 text-accent" />
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
        <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Who Should Hire a Machine Learning Developer Through Kovil AI?</h2>
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
                <Layers className="h-4 w-4 text-accent" />
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">How Do You Hire a Machine Learning Engineer with Kovil AI?</h2>
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
            <h3 className="font-display font-bold text-xl mb-1">Ready to hire a machine learning engineer?</h3>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">What's Included When You Hire a Machine Learning Developer Through Kovil AI?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">What Should You Expect When Hiring a Machine Learning Engineer?</h2>
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
        <h2 className="font-display font-bold text-3xl mb-12">How Does Kovil AI Compare to Other Ways to Hire a Machine Learning Developer?</h2>
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
          <h2 className="font-display font-bold text-3xl lg:text-4xl mb-10">Frequently Asked Questions About Hiring Machine Learning Engineers</h2>
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
            { href: "/engage/computer-vision-engineers", label: "Hire Computer Vision Engineers", desc: "Object detection, video analytics, medical imaging" },
            { href: "/engage/managed-ai-engineer",       label: "Managed AI Engineer",           desc: "Embedded AI engineer for any AI task" },
            { href: "/engage/outcome-based-project",     label: "Outcome-Based Project",         desc: "Fixed scope, fixed price, fixed outcome" },
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
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-3">Ready to hire your machine learning engineer?</h2>
            <p className="text-background/60 text-base">Tell us your use case. Matched in 48 hours. 2-week risk-free trial.</p>
          </div>
          <OnboardingModal defaultGoal="talent">
            <Button className="bg-accent text-white hover:bg-accent/90 rounded-full font-semibold px-10 h-12 text-base whitespace-nowrap shrink-0">
              Hire an ML Engineer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
        </div>
      </section>
    </div>
  )
}

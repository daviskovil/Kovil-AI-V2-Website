'use client'

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, Send, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"

// ── FAQ Knowledge Base ────────────────────────────────────────────────────────
const FAQ_DB = [
  // About Kovil
  { q: "What is Kovil AI?", a: "Kovil AI is a managed AI engineering company. We embed vetted AI engineers into your team, build AI projects at a fixed price and timeline, and rescue failing AI applications. Everything we do is milestone-gated — you only pay when work is delivered.", tags: ["about", "what", "kovil", "who", "company"] },
  { q: "Who is Kovil AI for?", a: "Kovil AI is built for tech companies, product teams, and founders who need AI engineering capacity but don't want to hire full-time staff or manage the process themselves. If you need to ship AI and want someone to own the delivery — that's us.", tags: ["for", "who", "target", "audience", "ideal", "client"] },
  { q: "Where is Kovil AI based?", a: "Kovil AI is based in Garden City, New York, US. We work with clients globally.", tags: ["location", "based", "where", "new york", "usa"] },
  { q: "What makes Kovil different from other AI companies?", a: "Three things: managed delivery (we own the outcome, not just log hours), milestone-gated sprints (you approve and pay per milestone — never pay for work that isn't done), and a two-week risk-free trial on every engagement.", tags: ["different", "unique", "competitors", "vs", "compare", "better"] },
  { q: "What is an Engagement Manager?", a: "Your dedicated Engagement Manager is your point of contact who manages the engineer, owns the delivery, and ensures quality standards throughout the project. Think of them as a project manager who speaks AI fluently.", tags: ["engagement manager", "shadow", "manager", "point of contact", "who manages"] },

  // Managed AI Engineer
  { q: "How does the Managed AI Engineer model work?", a: "We match you with a vetted AI engineer embedded into your team. Your Engagement Manager oversees delivery and hits every milestone. You get full-time AI engineering capacity without the hiring risk, HR overhead, or management burden.", tags: ["managed", "engineer", "how", "works", "model", "embedded"] },
  { q: "How quickly can I get an AI engineer?", a: "Day 1: scoping and engineer matching. Day 2–3: candidate shortlisting. Day 3–4: intro calls. Week 1: engineer starts. Most clients have an active engineer in their codebase within 5 business days.", tags: ["how fast", "quick", "time", "start", "speed", "when"] },
  { q: "Can I try before I commit?", a: "Yes. Every Managed AI Engineer engagement starts with a two-week risk-free trial. If it's not the right fit, you don't pay. Only pay if you hire.", tags: ["trial", "try", "risk free", "test", "commit", "guarantee"] },
  { q: "What technologies do your AI engineers work with?", a: "Our engineers cover the full AI stack: GPT-4, Claude, LangChain, LlamaIndex, Python, Node.js, FastAPI, AWS, Azure, n8n, Twilio, Pinecone, Weaviate, Redis, and more. We match engineers to your specific tech stack.", tags: ["technology", "tech stack", "tools", "python", "gpt", "langchain", "what can"] },
  { q: "How are AI engineers vetted?", a: "Our engineers go through a multi-stage technical assessment: live coding, system design review, LLM architecture challenges, and domain-specific AI tasks. Only the top 5% are accepted into the Kovil network.", tags: ["vetting", "vet", "quality", "how vetted", "assessment", "tested"] },

  // Outcome-Based Projects
  { q: "What is an Outcome-Based AI Project?", a: "You describe the outcome you want — we scope it, build it, and ship it. Fixed price. Fixed timeline. No hourly billing, no surprise invoices, no scope creep. You pay for the outcome, not the hours.", tags: ["outcome", "project", "fixed", "price", "sprint", "build"] },
  { q: "How is pricing determined for a project?", a: "We scope the project with you, define the deliverables clearly, and agree on a fixed price upfront. There are no hidden fees or hourly billing — the price you agree to is the price you pay.", tags: ["pricing", "cost", "how much", "price", "fixed", "fee"] },
  { q: "What if the project runs over the timeline?", a: "We guarantee the timeline. If we run over, we absorb the cost — not you. That's what milestone-gated delivery means in practice.", tags: ["overrun", "delay", "late", "timeline", "guarantee", "overdue"] },
  { q: "What kinds of AI projects do you build?", a: "We build AI agents, RAG systems, LLM-powered applications, workflow automations, AI-powered data pipelines, voice AI systems, and custom AI integrations for any industry.", tags: ["what kind", "types", "projects", "build", "what can you build"] },

  // App Rescue
  { q: "What is AI Reliability and App Rescue?", a: "If your AI app is failing, hallucinating, vibe-coded, or just unstable in production — we audit it, fix it, and stabilise it. We turn broken AI into reliable systems.", tags: ["rescue", "reliability", "app", "failing", "broken", "fix", "hallucinating"] },
  { q: "What kinds of AI apps do you rescue?", a: "RAG systems that hallucinate, AI chatbots with poor accuracy, poorly architected LLM apps, vibe-coded AI that worked in demo but fails in production, and any AI application with reliability or performance issues.", tags: ["types", "rag", "hallucination", "chatbot", "vibe code", "production"] },
  { q: "How quickly can you start an App Rescue?", a: "We can begin a same-day technical audit for critical situations. Within 24 hours we'll have a full assessment and a prioritised fix plan.", tags: ["how fast", "quick", "start", "rescue", "when", "same day"] },

  // Process & Delivery
  { q: "What is milestone-gated delivery?", a: "Work is broken into clear milestones. You review and approve each milestone before we move to the next. You only pay when a milestone is complete — no advance payments for work that hasn't happened yet.", tags: ["milestone", "gated", "delivery", "payment", "how paid", "how billing"] },
  { q: "Do I own the code and IP?", a: "Yes. All code, models, and intellectual property built during your engagement are fully owned by you. Kovil AI retains no rights to your project output.", tags: ["ip", "intellectual property", "ownership", "code", "mine", "own"] },
  { q: "What happens after the project is delivered?", a: "We offer ongoing support, maintenance retainers, or you can take the codebase in-house. We document everything thoroughly so your team can maintain it independently if needed.", tags: ["after", "support", "maintenance", "handover", "done"] },

  // Pricing
  { q: "How much does Kovil AI cost?", a: "Pricing depends on the engagement type and scope. We don't publish fixed rates because every project is different. Book a discovery call for a custom quote — it takes 30 minutes and you'll have a clear number.", tags: ["cost", "price", "how much", "expensive", "rates", "budget"] },
  { q: "Is there a minimum commitment?", a: "For Managed AI Engineers, there's a two-week trial period. After that, engagements run month-to-month with no long lock-in. For projects, we scope a fixed timeline upfront.", tags: ["minimum", "commitment", "contract", "lock in", "term"] },

  // For Engineers
  { q: "How do I apply as an AI Engineer?", a: "Visit kovil.ai/apply to submit your application. We review all applications and conduct a technical assessment. The process takes 1–2 weeks. We're looking for senior AI engineers with production experience.", tags: ["apply", "engineer", "join", "work", "application", "talent"] },
  { q: "What kind of engineers do you accept?", a: "Senior AI engineers with hands-on experience shipping LLMs, RAG systems, AI agents, and production-grade AI applications. We look for engineers who have real deployment experience — not just demos.", tags: ["what kind", "engineer", "senior", "requirements", "skills"] },

  // General
  { q: "How is Kovil different from Toptal or Turing?", a: "Toptal and Turing place engineers and step back. Kovil AI actively manages delivery — your Engagement Manager owns the outcome. We're not a marketplace, we're a managed service. And we specialise exclusively in AI engineering.", tags: ["toptal", "turing", "vs", "compare", "competitors", "difference"] },
  { q: "Do you work with startups or only enterprises?", a: "Both. We work with funded startups, scale-ups, and enterprise product teams. Our flexible engagement models are designed to fit different team sizes and budgets.", tags: ["startup", "enterprise", "company size", "who", "small"] },
]

// ── FAQ Page Schema (Item 2) ──────────────────────────────────────────────────
const FAQ_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DB.map(item => ({
    "@type": "Question",
    "name": item.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.a
    }
  }))
}

// ── Simple keyword matcher ────────────────────────────────────────────────────
function matchFAQ(query: string) {
  const q = query.toLowerCase()
  const words = q.split(/\s+/).filter(w => w.length > 2)

  let best = { score: 0, item: null as typeof FAQ_DB[0] | null }

  for (const item of FAQ_DB) {
    const corpus = (item.q + " " + item.tags.join(" ") + " " + item.a).toLowerCase()
    const score = words.reduce((acc, w) => acc + (corpus.includes(w) ? 1 : 0), 0) / Math.max(words.length, 1)
    if (score > best.score) best = { score, item }
  }

  return best.score > 0.25 ? best.item : null
}

// ── FAQ Categories ────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    label: "About Kovil AI",
    items: FAQ_DB.slice(0, 5),
  },
  {
    label: "Managed AI Engineer",
    items: FAQ_DB.slice(5, 10),
  },
  {
    label: "Outcome-Based AI Projects",
    items: FAQ_DB.slice(10, 14),
  },
  {
    label: "AI Reliability & App Rescue",
    items: FAQ_DB.slice(14, 17),
  },
  {
    label: "Process & Delivery",
    items: FAQ_DB.slice(17, 20),
  },
  {
    label: "Pricing & Commitment",
    items: FAQ_DB.slice(20, 22),
  },
  {
    label: "Applying as an AI Engineer",
    items: FAQ_DB.slice(22, 24),
  },
  {
    label: "Kovil vs Alternatives",
    items: FAQ_DB.slice(24),
  },
]

// ── Accordion Item ────────────────────────────────────────────────────────────
function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border border-border rounded-xl overflow-hidden transition-colors ${open ? "bg-accent/5 border-accent/30" : "bg-card hover:border-border/80"}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
      >
        <span className={`font-medium text-sm ${open ? "text-accent" : "text-foreground"}`}>{q}</span>
        <ChevronDown className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180 text-accent" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function FAQPage() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState<{ q: string; a: string } | null>(null)
  const [noMatch, setNoMatch] = useState(false)
  const [thinking, setThinking] = useState(false)
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({})
  const inputRef = useRef<HTMLInputElement>(null)

  function handleAsk(e?: React.FormEvent) {
    if (e) e.preventDefault()
    if (!question.trim()) return

    setThinking(true)
    setAnswer(null)
    setNoMatch(false)

    setTimeout(() => {
      const match = matchFAQ(question)
      setThinking(false)
      if (match) {
        setAnswer({ q: match.q, a: match.a })
      } else {
        setNoMatch(true)
      }
    }, 800)
  }

  function toggle(key: string) {
    setOpenMap(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>

      <div className="pt-20 min-h-screen bg-background">

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">FAQ</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
              Got Questions?<br />
              <span className="text-accent">We Have Answers.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask anything about Kovil AI's engagement models, process, pricing, or how we work. Or browse the full FAQ below.
            </p>
          </motion.div>
        </section>

        {/* Ask Anything Box */}
        <section className="max-w-3xl mx-auto px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-foreground rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-9 w-9 rounded-xl bg-accent/20 flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="font-display font-bold text-background text-lg leading-tight">Ask Kovil AI anything</p>
                <p className="text-background/50 text-xs">Type your question — we'll find the answer instantly</p>
              </div>
            </div>

            <form onSubmit={handleAsk} className="flex gap-3">
              <input
                ref={inputRef}
                value={question}
                onChange={e => setQuestion(e.target.value)}
                placeholder="e.g. How quickly can I get started? What does it cost?"
                className="flex-1 px-4 py-3.5 rounded-xl bg-background/10 border border-white/10 text-background placeholder:text-background/30 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm"
              />
              <button
                type="submit"
                disabled={thinking || !question.trim()}
                className="px-5 py-3.5 bg-accent rounded-xl text-white font-semibold text-sm hover:bg-accent/90 disabled:opacity-50 transition-all flex items-center gap-2"
              >
                {thinking ? (
                  <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>

            {/* Answer */}
            <AnimatePresence>
              {answer && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 p-5 rounded-xl bg-white/5 border border-white/10"
                >
                  <p className="text-xs text-accent font-mono uppercase tracking-wider mb-2">Answer</p>
                  <p className="text-background/90 text-sm leading-relaxed">{answer.a}</p>
                  <button
                    onClick={() => { setAnswer(null); setQuestion(""); inputRef.current?.focus() }}
                    className="mt-3 text-xs text-background/40 hover:text-background/70 transition-colors"
                  >
                    Ask another question →
                  </button>
                </motion.div>
              )}
              {noMatch && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-5 p-5 rounded-xl bg-white/5 border border-white/10"
                >
                  <p className="text-background/70 text-sm">We don't have a pre-written answer for that — but our team does.</p>
                  <a
                    href="https://calendly.com/kovil-ai/talent"
                    target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                  >
                    Book a 30-min call <ArrowRight className="h-3 w-3" />
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Suggested questions */}
            {!answer && !noMatch && (
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "How does the trial work?",
                  "How much does it cost?",
                  "How fast can we start?",
                  "What is an Engagement Manager?",
                ].map(q => (
                  <button
                    key={q}
                    onClick={() => { setQuestion(q); setTimeout(() => handleAsk(), 50) }}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/15 text-background/60 hover:border-accent/50 hover:text-accent transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </section>

        {/* Full FAQ Accordion */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">All Questions</h2>
            <p className="text-muted-foreground">Browse everything — organised by topic.</p>
          </motion.div>

          <div className="space-y-10">
            {CATEGORIES.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: ci * 0.05 }}
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-3">
                  <span className="h-px flex-1 bg-border" />
                  {cat.label}
                  <span className="h-px flex-1 bg-border" />
                </h3>
                <div className="space-y-2">
                  {cat.items.map((item) => {
                    const key = `${ci}-${item.q}`
                    return (
                      <AccordionItem
                        key={key}
                        q={item.q}
                        a={item.a}
                        open={!!openMap[key]}
                        onToggle={() => toggle(key)}
                      />
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="bg-foreground rounded-2xl p-12 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-background mb-3">Still have questions?</h2>
            <p className="text-background/60 mb-8 max-w-md mx-auto">Book a 30-minute discovery call. No sales pitch — just a real conversation about your AI build.</p>
            <a href="https://calendly.com/kovil-ai/talent" target="_blank" rel="noopener noreferrer">
              <Button variant="accent" size="lg" className="rounded-full px-8 h-13 text-base">
                Book a Discovery Call <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </section>
      </div>
    </>
  )
}

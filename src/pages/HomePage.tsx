import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Bot, Code2, ShieldCheck, Sparkles, Users, Zap, CheckCircle2, Check, X, Rocket, LifeBuoy, Activity, Landmark, HeartPulse, BarChart3, ShieldAlert, LucideIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../components/ui/button"
import { OnboardingModal } from "../components/OnboardingModal"
import { caseStudies } from "../data/case-studies"
import { SEOHead } from "../components/SEOHead"

const HOME_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kovil AI",
    "url": "https://kovil.ai",
    "logo": "https://kovil.ai/kovil-logo-symbol.png",
    "description": "Kovil AI embeds vetted Tier-1 AI engineers into your team. Fixed-price AI projects, managed delivery, and AI app rescue.",
    "sameAs": ["https://www.linkedin.com/company/kovil-ai/"],
    "contactPoint": { "@type": "ContactPoint", "email": "info@kovil.ai", "contactType": "customer support" }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kovil AI",
    "url": "https://kovil.ai"
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kovil AI",
    "url": "https://kovil.ai",
    "email": "info@kovil.ai",
    "description": "Kovil AI embeds vetted Tier-1 AI engineers into your team. Fixed-price AI projects, managed delivery, and AI app rescue.",
    "logo": "https://kovil.ai/kovil-logo-symbol.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "734 Franklin Ave",
      "addressLocality": "Garden City",
      "addressRegion": "NY",
      "postalCode": "11530",
      "addressCountry": "US"
    },
    "areaServed": "Worldwide",
    "priceRange": "$$",
    "sameAs": ["https://www.linkedin.com/company/kovil-ai/"]
  }
]

const builderCards: { id: string; name: string; role: string; tags: string[]; result: string; resultSub: string; domainIcon: LucideIcon }[] = [
  {
    id: "DR",
    name: "AI ENGINEER: DAVID R.",
    role: "MANAGED FINTECH AUTOMATOR",
    tags: ["GPT-4O VISION", "PYTHON", "EXTRACTOR"],
    result: "RESULT: AUTO-LOAN VERIFICATION",
    resultSub: "Replaces Manual PDF Sorting",
    domainIcon: Landmark,
  },
  {
    id: "EM",
    name: "AI ENGINEER: ELENA M.",
    role: "MANAGED PATIENT AUTOMATOR",
    tags: ["VOICE AI", "N8N", "TWILIO"],
    result: "RESULT: AUTOMATED PATIENT INTAKE",
    resultSub: "Eliminated Appointment No-Shows",
    domainIcon: HeartPulse,
  },
  {
    id: "RS",
    name: "AI ENGINEER: RAFAEL S.",
    role: "MANAGED AI PERFORMANCE ARCHITECT",
    tags: ["AWS AUTO-SCALE", "REDIS", "NODE.JS"],
    result: "RESULT: 55% LOAD REDUCTION",
    resultSub: "Zero-Crash Scalability",
    domainIcon: BarChart3,
  },
  {
    id: "TH",
    name: "AI ENGINEER: TOMAS H.",
    role: "MANAGED AI RELIABILITY ARCHITECT",
    tags: ["LEGACY SYNC", "UPTIME OPS", "P1 TRIAGE"],
    result: "RESULT: 23 → 4 MONTHLY P1 BUGS",
    resultSub: "99.9% Uptime Restoration",
    domainIcon: ShieldAlert,
  },
]

function HeroCards() {
  const [pairIndex, setPairIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setPairIndex(prev => (prev + 1) % 2)
    }, 24000)
    return () => clearInterval(interval)
  }, [])
  const topCard = builderCards[pairIndex * 2]
  const bottomCard = builderCards[pairIndex * 2 + 1]
  return (
    <div className="relative h-[580px] hidden lg:block">
      <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl" />
      {/* Top card — top-right */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`top-${pairIndex}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 z-20"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <BuilderCard card={topCard} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      {/* Bottom card — positioned well below top card, offset left */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bottom-${pairIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="absolute top-[300px] left-0 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <BuilderCard card={bottomCard} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      {/* Pair indicators */}
      <div className="absolute bottom-0 right-0 flex gap-1.5">
        {[0, 1].map(i => (
          <button
            key={i}
            onClick={() => setPairIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === pairIndex ? "w-6 bg-accent" : "w-1.5 bg-border"}`}
          />
        ))}
      </div>
    </div>
  )
}

function BuilderCard({ card }: { card: (typeof builderCards)[0] }) {
  const DomainIcon = card.domainIcon
  return (
    <div className="bg-background p-5 rounded-2xl shadow-lg border border-border w-80 relative">
      {/* Domain icon — bottom right */}
      <div className="absolute bottom-4 right-4 opacity-60">
        <DomainIcon className="h-6 w-6 text-accent" strokeWidth={1.8} />
      </div>
      {/* Role Title */}
      <h3 className="font-display font-bold text-xl leading-[1.2] text-foreground mb-4">
        {card.role}
      </h3>
      {/* Tech Tags - outlined */}
      <div className="flex flex-wrap gap-2 mb-4">
        {card.tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold px-2.5 py-1 border border-border rounded text-foreground tracking-widest uppercase">
            {tag}
          </span>
        ))}
      </div>
      {/* Divider */}
      <div className="border-t border-border mb-3" />
      {/* Result */}
      <div className="flex items-start gap-2 mb-1">
        <Activity className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
        <p className="text-[11px] font-semibold text-accent tracking-wide italic">{card.result}</p>
      </div>
      <p className="text-[10px] text-muted-foreground font-medium pl-5 mb-4">{card.resultSub}</p>
      {/* Builder Name */}
      <div className="border-t border-border pt-3 flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-muted flex items-center justify-center text-[10px] font-bold text-foreground shrink-0">
          {card.id}
        </div>
        <p className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">{card.name}</p>
      </div>
    </div>
  )
}

function CaseStudyCarousel() {
  const [current, setCurrent] = useState(0)
  const perPage = 3
  const total = caseStudies.length
  const maxIndex = Math.ceil(total / perPage) - 1

  const prev = () => setCurrent(i => Math.max(0, i - 1))
  const next = () => setCurrent(i => Math.min(maxIndex, i + 1))

  const visible = caseStudies.slice(current * perPage, current * perPage + perPage)

  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">Case Studies</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
              Real Results. <span className="text-accent">Real AI Deployments.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm text-muted-foreground">{current + 1} / {maxIndex + 1}</span>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {visible.map((cs) => (
              <Link
                key={cs.slug}
                to={`/case-studies/${cs.slug}`}
                className="group flex flex-col bg-background border border-border rounded-2xl p-6 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Industry tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-muted-foreground">{cs.timeline}</span>
                </div>

                {/* Headline */}
                <h3 className="font-display font-bold text-lg leading-snug mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {cs.headline}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-6 flex-1">
                  {cs.excerpt}
                </p>

                {/* Metrics row */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {cs.metrics.slice(0, 2).map((m) => (
                    <div key={m.label} className="bg-muted/40 rounded-xl p-3">
                      <div className="font-display font-bold text-xl text-foreground">{m.value}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-accent">
                  Read Case Study
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button onClick={prev} disabled={current === 0} className="h-10 w-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30 cursor-pointer">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-sm text-muted-foreground">{current + 1} / {maxIndex + 1}</span>
          <button onClick={next} disabled={current === maxIndex} className="h-10 w-10 rounded-full border border-border flex items-center justify-center disabled:opacity-30 cursor-pointer">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link to="/case-studies">
            <Button variant="outline" className="rounded-full px-8 cursor-pointer">
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
    <SEOHead
      title="Kovil AI — Elite AI Engineers On Demand"
      description="Kovil AI embeds vetted Tier-1 AI engineers into your team. Fixed-price AI projects, managed delivery, and AI app rescue. Free audit or matched in 48 hours."
      canonical="/"
      schema={HOME_SCHEMA}
    />
    <main className="pt-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance leading-[1.05]"
            >
              Ship AI Agents, <br/><span className="text-accent">Deployed by Elite AI Engineers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Managed AI implementation with zero delivery risk. Access elite engineers for fixed-price sprints or scalable team augmentation.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-3"
            >
              {[
                "Vetted Tier-1 AI Engineers",
                "Milestone Gated Sprints",
                "Active Managed Delivery"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col items-start gap-3"
            >
              <OnboardingModal>
                <Button variant="accent" size="lg" className="text-lg h-14 px-8 rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all">
                  Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </OnboardingModal>
              <span className="text-sm text-muted-foreground font-medium px-4">Only pay if you hire. Two-week trial.</span>
            </motion.div>
          </div>

          {/* Hero Visual - Cycling Builder Cards */}
          <HeroCards />
        </div>
      </section>

      {/* Logos & Big Stats */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">

          {/* Divider ABOVE logos */}
          <div className="border-t border-border mb-12" />

          {/* Label */}
          <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground/50 mb-10">
            Built and trusted by teams from
          </p>

          {/* Logos — no boxes, greyscale, subtle */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 mb-16">
            {[
              { name: "smartfren.", style: "font-sans font-bold text-xl tracking-tight" },
              { name: "▲ laVie", style: "font-sans font-semibold text-xl" },
              { name: "closeup", style: "font-sans font-light text-xl tracking-widest" },
              { name: "blibli", style: "font-sans font-bold text-xl" },
              { name: "Unilever", style: "font-sans font-semibold text-xl tracking-wide" },
            ].map((brand) => (
              <span
                key={brand.name}
                className={`${brand.style} text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300`}
              >
                {brand.name}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-foreground">150+</div>
              <div className="text-sm text-muted-foreground/60 mt-3 tracking-wide uppercase font-medium">Successful AI Deployments</div>
            </div>
            <div className="md:border-x border-border/70">
              <div className="text-5xl md:text-6xl font-display font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground/60 mt-3 tracking-wide uppercase font-medium">Happy Enterprise Customers</div>
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-display font-bold text-foreground">98%</div>
              <div className="text-sm text-muted-foreground/60 mt-3 tracking-wide uppercase font-medium">Trial-to-hire rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-border">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
            Flexible <span className="text-accent">Engagement Models</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you need an extra set of hands, a full squad, or an emergency rescue—we have a model for your exact stage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-muted group-hover:bg-accent transition-colors" />
            <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">Managed AI Engineer</h3>
            <p className="text-muted-foreground mb-6">
              Seamlessly integrate top 1% AI engineers into your existing team. Scale up or down as needed.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Pre-vetted AI specialists</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Matches your timezone & stack</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>2-week risk-free trial</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <OnboardingModal defaultGoal="talent">
                <Button variant="outline" className="w-full rounded-full">Hire AI Engineer</Button>
              </OnboardingModal>
            </div>
          </div>

          <div className="bg-background border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-muted group-hover:bg-accent transition-colors" />
            <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">Outcome Based AI-Projects</h3>
            <p className="text-muted-foreground mb-6">
              Have an idea? We'll scope, build, and ship your AI product from scratch with a dedicated squad.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>End-to-end development</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Fixed scope & timeline</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Dedicated Project Manager</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <OnboardingModal defaultGoal="project">
                <Button variant="outline" className="w-full rounded-full">Build an AI Project</Button>
              </OnboardingModal>
            </div>
          </div>

          <div className="bg-background border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1 bg-muted group-hover:bg-accent transition-colors" />
            <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
              <LifeBuoy className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">AI Reliability & App Rescue</h3>
            <p className="text-muted-foreground mb-6">
              Stuck with a failing agency, hallucinating RAG, or a half-finished "Vibe Coded" app? Our SWAT team will audit, fix, and maintain it.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Deep codebase & architecture audit</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Fix hallucinations & performance</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>Ongoing maintenance & optimization</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <OnboardingModal defaultGoal="rescue">
                <Button variant="outline" className="w-full rounded-full">Get Rescued</Button>
              </OnboardingModal>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
            From Guesswork to Deployed in <span className="text-accent">14 Days</span>
          </h2>
          <p className="text-xl text-muted-foreground">Don't waste months waiting for the right hire. We use millions of data points and human expertise to find the perfect fit in days.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 - Describe Your Needs */}
          <div className="relative pt-12">
            <div className="absolute top-0 left-0 text-sm font-bold text-accent uppercase tracking-wider">Today</div>
            <div className="bg-muted/30 border border-border rounded-2xl p-5 h-52 mb-6 overflow-hidden relative">
              {/* Chat icon row */}
              <div className="flex items-center gap-2 mb-3">
                <div className="h-7 w-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-accent" />
                </div>
                <div className="h-2 w-28 bg-muted-foreground/20 rounded" />
              </div>
              {/* Form fields */}
              <div className="space-y-2 mb-3">
                <div className="h-8 w-full bg-background rounded-lg border border-border" />
                <div className="h-8 w-full bg-background rounded-lg border border-border" />
              </div>
              {/* CTA button */}
              <div className="h-9 w-36 bg-accent rounded-lg flex items-center justify-center">
                <div className="h-2 w-20 bg-white/50 rounded" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">Describe Your Needs</h3>
            <p className="text-muted-foreground leading-relaxed">Complete a brief intake. Talk with a Hiring Specialist.</p>
          </div>

          {/* Step 2 - Meet Your Expert */}
          <div className="relative pt-12">
            <div className="absolute top-0 left-0 text-sm font-bold text-accent uppercase tracking-wider">This Week</div>
            <div className="bg-muted/30 border border-border rounded-2xl p-5 h-52 mb-6 overflow-hidden relative flex items-center justify-center">
              <div className="bg-background rounded-xl border border-border p-4 w-52 shadow-sm">
                {/* Profile row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-9 w-9 rounded-full bg-muted border border-border flex items-center justify-center">
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-24 bg-foreground/20 rounded" />
                    <div className="h-1.5 w-16 bg-muted-foreground/20 rounded" />
                  </div>
                </div>
                {/* Skill tags */}
                <div className="flex gap-1.5 mb-3">
                  <div className="h-5 w-12 bg-accent/10 rounded-full" />
                  <div className="h-5 w-16 bg-muted rounded-full" />
                  <div className="h-5 w-10 bg-muted rounded-full" />
                </div>
                {/* Match badge */}
                <div className="h-7 w-full bg-green-50 border border-green-200 rounded-lg flex items-center justify-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
                  <span className="text-[11px] font-bold text-green-600">98% Match</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">Meet Your Expert</h3>
            <p className="text-muted-foreground leading-relaxed">Match in 24-48 hours. Meet with your engineer. Start 2 week trial.</p>
          </div>

          {/* Step 3 - Watch Results Roll In */}
          <div className="relative pt-12">
            <div className="absolute top-0 left-0 text-sm font-bold text-accent uppercase tracking-wider">This Month</div>
            <div className="bg-muted/30 border border-border rounded-2xl p-5 h-52 mb-6 overflow-hidden relative">
              {/* +240% badge */}
              <div className="absolute top-4 right-4 bg-background border border-border rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 shadow-sm z-10">
                <Zap className="h-3.5 w-3.5 text-accent" />
                <span className="text-[11px] font-bold text-accent">+240%</span>
              </div>
              {/* Bar chart */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-2 px-6 pb-0">
                {[30, 42, 55, 60, 72, 80, 100].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-t-md ${i === 6 ? "bg-accent" : "bg-muted-foreground/20"}`}
                    style={{ height: `${h * 0.9}px` }}
                  />
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-3">Watch Results Roll In</h3>
            <p className="text-muted-foreground leading-relaxed">Watch velocity go up. Scale up and down as needed.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <OnboardingModal>
            <Button variant="accent" size="lg" className="rounded-full px-8">
              Hire AI Engineers <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </OnboardingModal>
          <p className="text-sm text-muted-foreground mt-4">No commitment, two-week trial</p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
            <span className="text-accent">Dream AI Engineers,</span> Without Hiring Nightmares
          </h2>
          <p className="text-xl text-muted-foreground">Get the people you need to grow, without the overhead or hassle of wrong hires, agencies, or unvetted freelancers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 — Expert Profile */}
          <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
            <div className="h-52 bg-[#0f0f0f] rounded-xl mb-8 border border-white/10 flex items-center justify-center overflow-hidden relative p-4">
              <div className="w-full max-w-[220px] bg-[#1a1a1a] rounded-lg border border-white/10 p-4 font-mono text-xs">
                <div className="text-[#666] mb-3 text-[10px]">expert_profile.ts</div>
                {[
                  { label: "Machine Learning", pct: "98%", w: "w-[98%]", color: "bg-accent" },
                  { label: "System Design",    pct: "95%", w: "w-[95%]", color: "bg-purple-500" },
                  { label: "React / Node",     pct: "92%", w: "w-[92%]", color: "bg-blue-500" },
                ].map(skill => (
                  <div key={skill.label} className="mb-2.5">
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-white/70">{skill.label}</span>
                      <span className="text-white/50">{skill.pct}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full">
                      <div className={`h-1 ${skill.color} rounded-full ${skill.w}`} />
                    </div>
                  </div>
                ))}
                <div className="mt-3 inline-flex items-center gap-1.5 bg-accent/20 text-accent text-[10px] font-bold px-2 py-1 rounded-full">
                  <span>✦</span> Ex-FAANG
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Experts Who Have Done What You Need</h3>
            <p className="text-muted-foreground leading-relaxed">Every engineer brings experience from top tech companies, with proven playbooks that eliminate guesswork. No experiments, just expertise.</p>
          </div>

          {/* Card 2 — Stack Match */}
          <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
            <div className="h-52 bg-[#0f0f0f] rounded-xl mb-8 border border-white/10 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,79,0,0.18)_0%,transparent_65%)]" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-accent/60 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap justify-center max-w-[180px]">
                  {["React", "Python", "AWS", "LangChain", "GPT-4"].map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-white/70 border border-white/20 px-2 py-0.5 rounded">{tag}</span>
                  ))}
                </div>
                <div className="text-[10px] text-accent font-bold tracking-widest">98% STACK MATCH</div>
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Matched to Your Stack & Scale</h3>
            <p className="text-muted-foreground leading-relaxed">Not only is your engineer a pro, they have experience helping companies exactly like yours. We match on stack, industry, and specific challenges.</p>
          </div>

          {/* Card 3 — Timeline */}
          <div className="bg-background border border-border rounded-3xl p-8 shadow-sm">
            <div className="h-52 bg-[#0f0f0f] rounded-xl mb-8 border border-white/10 flex items-center justify-center overflow-hidden relative p-4">
              <div className="flex flex-col gap-3 w-full max-w-[200px]">
                {[
                  { label: "Match Found",     sub: "4th",   done: true,  color: "bg-accent" },
                  { label: "Trial Started",   sub: "Day 7", done: true,  color: "bg-purple-500" },
                  { label: "Feature Shipped", sub: "Day 14",done: true,  color: "bg-green-500" },
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#1a1a1a] rounded-lg px-3 py-2 border border-white/10">
                    <div className={`w-4 h-4 rounded-full ${step.color} flex items-center justify-center shrink-0`}>
                      <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 text-white fill-none stroke-white stroke-2">
                        <polyline points="2,5 4,7 8,3" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[11px] font-bold text-white">{step.label}</div>
                    </div>
                    <div className="text-[10px] text-white/40">{step.sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Available Now, Satisfaction Guaranteed</h3>
            <p className="text-muted-foreground leading-relaxed">Most matches are made within 48 hours. If you approve, they start within a week. Try them for two weeks, keep going, or replace them no questions asked.</p>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="bg-foreground text-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                NEW: The Zero-Chase Policy
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 leading-tight">
                10x Velocity with Full Stack Human + AI Engineering
              </h2>
              <p className="text-xl text-muted/80 leading-relaxed mb-8">
                You shouldn't have to manage developers to get AI built. Every engineer you hire through Kovil AI is pair-locked with an Engagement Manager who audits every commit.
              </p>
              <Button variant="accent" size="lg" className="rounded-full px-8">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] bg-background/5 rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,79,0,0.15)_0%,transparent_70%)]" />
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="col-span-2 bg-background/10 backdrop-blur border border-white/10 p-4 rounded-xl text-center">
                  <Bot className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="font-bold">AI-Native Specialists</div>
                </div>
                <div className="bg-background/10 backdrop-blur border border-white/10 p-4 rounded-xl text-center">
                  <Code2 className="h-6 w-6 text-white/70 mx-auto mb-2" />
                  <div className="text-sm">Automations</div>
                </div>
                <div className="bg-background/10 backdrop-blur border border-white/10 p-4 rounded-xl text-center">
                  <Zap className="h-6 w-6 text-white/70 mx-auto mb-2" />
                  <div className="text-sm">Agents</div>
                </div>
                <div className="col-span-2 bg-accent/20 backdrop-blur border border-accent/30 p-4 rounded-xl text-center mt-4">
                  <div className="font-bold text-accent">10X OUTCOMES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Highest Quality, Perfectly Paired, <span className="text-accent">Fully Integrated</span>
            </h2>
          </div>

          <div className="bg-background rounded-3xl border border-border overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    <th className="p-6 border-b border-border w-1/3"></th>
                    <th className="p-6 border-b border-border w-1/4 bg-accent/5 text-center">
                      <div className="flex items-center justify-center gap-2 text-lg font-display font-bold text-foreground">
                        <Sparkles className="h-5 w-5 text-accent" /> Kovil AI
                      </div>
                    </th>
                    <th className="p-6 border-b border-border w-1/4 text-center font-semibold text-muted-foreground">In-House Hire</th>
                    <th className="p-6 border-b border-border w-1/4 text-center font-semibold text-muted-foreground">Freelance Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { label: "Time to Hire", kovil: "3-5 Days", inhouse: "1-3 Months", freelance: "2-3 Weeks" },
                    { label: "Pre-vetted Candidates", kovil: <Check className="h-5 w-5 text-accent mx-auto" />, inhouse: <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />, freelance: <X className="h-5 w-5 text-muted-foreground/50 mx-auto" /> },
                    { label: "Cost", kovil: "$$", inhouse: "$$$$", freelance: "$" },
                    { label: "Cost of Failure", kovil: "$0", inhouse: "$$$", freelance: "$$" },
                    { label: "Free Rematching", kovil: <Check className="h-5 w-5 text-accent mx-auto" />, inhouse: <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />, freelance: <X className="h-5 w-5 text-muted-foreground/50 mx-auto" /> },
                    { label: "Termination Fees", kovil: "$0", inhouse: "$$$$", freelance: "$0" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-muted/10 transition-colors">
                      <td className="p-6 font-medium text-muted-foreground">{row.label}</td>
                      <td className="p-6 text-center font-bold bg-accent/5">{row.kovil}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.inhouse}</td>
                      <td className="p-6 text-center text-muted-foreground">{row.freelance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Carousel */}
      <CaseStudyCarousel />

      {/* Final CTA */}
      <section className="py-32 bg-accent/5 text-center px-6">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
          Join Kovil AI
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          Scale your business with elite AI engineers — or join our network and work on cutting-edge AI projects.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <OnboardingModal>
            <Button variant="accent" size="lg" className="rounded-full px-8 h-14 text-lg cursor-pointer">
              Start My AI Build <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </OnboardingModal>
          <Link to="/apply">
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg bg-background cursor-pointer">
              Apply as AI Engineer
            </Button>
          </Link>
        </div>
      </section>
    </main>
    </>
  )
}

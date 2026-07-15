'use client'

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

type Stat = { value: string; label: string }
type Slide = { tag: string; title: string; desc: string; stats: [Stat, Stat] }

const SLIDES: Slide[] = [
  {
    tag: "D2C Case Study",
    title: "A cosmetics brand needed automated content and retention — without extra headcount.",
    desc: "Kovil AI designed an integrated agent network on top of the brand's existing Shopify store, automating retention campaigns and supplier spec-sheet ingestion end to end.",
    stats: [
      { value: "–82%", label: "Support tickets deflected" },
      { value: "0 hrs", label: "Manual content production" },
    ],
  },
  {
    tag: "Under the Hood",
    title: "Agents get native Shopify tools via the Model Context Protocol.",
    desc: "Instead of a flat data export, a custom MCP server lets the agents query product descriptions, live inventory levels, and order state directly — and reason over them, not just read them.",
    stats: [
      { value: "MCP", label: "Native tool access" },
      { value: "Live", label: "Inventory + order state" },
    ],
  },
  {
    tag: "LangGraph Orchestration",
    title: "A Manager Agent coordinates the Design and Communication agents.",
    desc: "The Manager triggers the Design Agent to generate a campaign banner from a supplier spec sheet, then routes the finished asset to the Communication Agent to draft the marketing email — one workflow, no hand-offs between tools.",
    stats: [
      { value: "3", label: "Agents in the loop" },
      { value: "+14%", label: "Cart recovery conversions" },
    ],
  },
  {
    tag: "Safety Controls",
    title: "Every price change or send waits for a human in Slack.",
    desc: "Pricing overrides and campaign launches are held for review and routed to the merchant as a Slack approval request — the agents act, but nothing ships without sign-off.",
    stats: [
      { value: "100%", label: "Actions reviewed before send" },
      { value: "24–48h", label: "Approval turnaround" },
    ],
  },
  {
    tag: "Outcome",
    title: "One store, one integrated agent team, measurable results.",
    desc: "Fewer tickets reaching a human, more recovered carts, and zero manual hours spent on recurring content — all running on the store's existing stack.",
    stats: [
      { value: "–82%", label: "Ticket deflection" },
      { value: "+14%", label: "Cart recovery" },
    ],
  },
]

const CARD_WIDTH = 672 // 640px card + 16px padding each side

export function ShopifyProofCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(prev => (paused ? prev : (prev + 1) % SLIDES.length))
    }, 4500)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused])

  const goTo = (i: number) => {
    const n = SLIDES.length
    setActive(((i % n) + n) % n)
  }

  const offset = active * CARD_WIDTH + CARD_WIDTH / 2

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">In Practice</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.08] mb-4 text-balance">
          How one cosmetics brand put agents to work.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          A real deployment, walked step by step — from native store tools to multi-agent handoffs to the human check before anything ships.
        </p>
      </div>

      <div
        className="relative max-w-6xl mx-auto mt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="overflow-hidden py-5">
          <motion.div
            className="flex items-stretch"
            animate={{ x: `calc(50% - ${offset}px)` }}
            transition={{ type: "tween", duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {SLIDES.map((slide, i) => {
              const isActive = i === active
              return (
                <div key={i} className="shrink-0 w-[640px] px-4 box-border">
                  <div
                    className={`h-full border rounded-3xl p-8 md:p-11 transition-all duration-500 ${
                      isActive
                        ? "bg-background border-border shadow-[0_20px_48px_rgba(10,10,10,0.10)] opacity-100 scale-100"
                        : "bg-muted/40 border-border opacity-45 scale-[0.94]"
                    }`}
                  >
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/25 shrink-0 flex items-center justify-center text-accent font-display font-bold text-base">
                        0{i + 1}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">{slide.tag}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-[26px] tracking-tight leading-snug mb-3.5">
                      {slide.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">{slide.desc}</p>
                    <div className="flex gap-7 flex-wrap border-t border-border pt-5">
                      {slide.stats.map((stat, si) => (
                        <div key={si}>
                          <div className="font-display font-extrabold text-2xl text-accent">{stat.value}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        <button
          aria-label="Previous"
          onClick={() => goTo(active - 1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-border text-foreground shadow-lg flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        >
          ←
        </button>
        <button
          aria-label="Next"
          onClick={() => goTo(active + 1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-border text-foreground shadow-lg flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
        >
          →
        </button>
      </div>

      <div className="flex justify-center gap-2.5 mt-9">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-7 bg-accent" : "w-2 bg-border"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

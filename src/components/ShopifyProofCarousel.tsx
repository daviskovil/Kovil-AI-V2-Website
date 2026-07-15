'use client'

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

export type Stat = { value: string; label: string }
export type Slide = { tag: string; title: string; desc: string; stats: [Stat, Stat] }

type ShopifyProofCarouselProps = {
  eyebrow?: string
  heading: string
  subheading: string
  slides: Slide[]
}

const CARD_WIDTH = 672 // 640px card + 16px padding each side

export function ShopifyProofCarousel({ eyebrow = "In Practice", heading, subheading, slides }: ShopifyProofCarouselProps) {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length)
    }, 4500)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [slides.length])

  const goTo = (i: number) => {
    const n = slides.length
    setActive(((i % n) + n) % n)
  }

  const offset = active * CARD_WIDTH + CARD_WIDTH / 2

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-accent font-mono mb-2">{eyebrow}</p>
        <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-[1.08] mb-4 text-balance">
          {heading}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          {subheading}
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto mt-14">
        <div className="overflow-hidden py-5">
          <motion.div
            className="flex items-stretch"
            animate={{ x: `calc(50% - ${offset}px)` }}
            transition={{ type: "tween", duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {slides.map((slide, i) => {
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
        {slides.map((_, i) => (
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

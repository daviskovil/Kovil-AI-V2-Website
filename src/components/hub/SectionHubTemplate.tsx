'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "@/src/components/ui/button"
import { openCalendly } from "@/src/lib/calendly"

export interface HubCard {
  href: string
  icon: LucideIcon
  color: string
  title: string
  description: string
  tag?: string
}

export interface SectionHubData {
  brandColor: string
  breadcrumbs: { label: string; href?: string }[]
  sectionTag: string
  headline: string
  headlineAccent: string
  description: string
  stats?: { value: string; label: string }[]
  cards: HubCard[]
  ctaHeadline: string
  ctaBody: string
}

export default function SectionHubTemplate({ data }: { data: SectionHubData }) {
  if (!data) return null

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ── */}
      <section className="pt-24 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            {data.breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-foreground transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
              style={{ color: data.brandColor, background: `${data.brandColor}15`, border: `1px solid ${data.brandColor}25` }}
            >
              {data.sectionTag}
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              {data.headline}<br />
              <span style={{ color: data.brandColor }}>{data.headlineAccent}</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              {data.description}
            </p>

            <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
              Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar (optional) ── */}
      {data.stats && (
        <section className="border-b border-border py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold" style={{ color: data.brandColor }}>{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Cards ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.cards.map((card, i) => (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={card.href}
                  className="group flex flex-col bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full"
                  style={{ borderLeftWidth: "4px", borderLeftColor: card.color }}
                >
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 shrink-0"
                    style={{ background: `${card.color}15`, border: `1px solid ${card.color}30` }}
                  >
                    <card.icon className="h-5 w-5" style={{ color: card.color }} />
                  </div>

                  {card.tag && (
                    <span className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: card.color }}>
                      {card.tag}
                    </span>
                  )}

                  <h2 className="font-display font-bold text-base mb-2 group-hover:text-accent transition-colors leading-snug">
                    {card.title}
                  </h2>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{card.description}</p>

                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: card.color }}
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">{data.ctaHeadline}</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">{data.ctaBody}</p>
            <Button variant="accent" size="lg" className="rounded-full px-10" onClick={openCalendly}>
              Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

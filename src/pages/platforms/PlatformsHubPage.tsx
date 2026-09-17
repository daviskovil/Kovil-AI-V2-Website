'use client'

import Link from 'next/link'
import {
  ArrowRight, Building2, DollarSign, ShoppingCart, MessageSquare,
  ClipboardList, GitBranch, Headphones, Code2, Package,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/src/components/ui/button'
import { openCalendly } from '@/src/lib/calendly'
import { PLATFORM_GROUPS, getPlatformsByGroup } from '@/src/data/platforms'

const ICON_MAP: Record<string, LucideIcon> = {
  Building2, DollarSign, ShoppingCart, MessageSquare, ClipboardList, GitBranch, Headphones, Code2, Package,
}

const TOTAL_PLATFORMS = PLATFORM_GROUPS.reduce((sum, g) => sum + getPlatformsByGroup(g.id).length, 0)

export default function PlatformsHubPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Hero ── */}
      <section className="pt-24 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">

          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="flex items-center gap-2">
              <span>/</span>
              <span className="text-foreground">Platforms</span>
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 text-accent bg-accent/10 border border-accent/25">
              Enterprise Platform Integrations
            </span>

            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              AI Agents Built Into<br />
              <span className="text-accent">The Platforms You Run</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Kovil AI designs and deploys custom AI agents inside the enterprise systems your business already
              depends on — CRM, ERP, e-commerce, support, and everything in between. We're building dedicated
              playbooks for every platform below.
            </p>

            <Button variant="accent" size="lg" className="rounded-full px-8" onClick={openCalendly}>
              Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-b border-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: String(TOTAL_PLATFORMS), label: 'Platforms' },
              { value: String(PLATFORM_GROUPS.length), label: 'Categories' },
              { value: '2 weeks', label: 'To first pilot' },
              { value: 'Fixed', label: 'Price' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform groups ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {PLATFORM_GROUPS.map((group, gi) => {
            const GroupIcon = ICON_MAP[group.icon] ?? Package
            const groupPlatforms = getPlatformsByGroup(group.id)
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(gi * 0.05, 0.3) }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${group.color}15`, border: `1px solid ${group.color}30` }}
                  >
                    <GroupIcon className="h-4.5 w-4.5" style={{ color: group.color }} />
                  </div>
                  <h2 className="font-display font-bold text-xl tracking-tight">{group.title}</h2>
                  <span className="text-xs text-muted-foreground">{groupPlatforms.length} platform{groupPlatforms.length !== 1 ? 's' : ''}</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {groupPlatforms.map((platform) => (
                    <div
                      key={platform.slug}
                      className="bg-card border border-border rounded-xl p-5 transition-all duration-300 hover:shadow-md"
                      style={{ borderLeftWidth: '3px', borderLeftColor: group.color }}
                    >
                      <h3 className="font-display font-semibold text-sm mb-1 leading-snug">{platform.name}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{platform.category}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
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
            <h2 className="font-display text-4xl font-bold tracking-tight mb-4">Don't see your platform listed?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              If it has an API, we can build an AI agent for it. Tell us what you're running and we'll scope a
              fixed-price pilot.
            </p>
            <Button variant="accent" size="lg" className="rounded-full px-10" onClick={openCalendly}>
              Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

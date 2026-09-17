'use client'

import Link from 'next/link'
import {
  ArrowRight, Building2, DollarSign, ShoppingCart, MessageSquare,
  ClipboardList, GitBranch, Headphones, Code2, Package, Bot, Users,
  TrendingUp, Flame,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '@/src/components/ui/button'
import { openCalendly } from '@/src/lib/calendly'
import {
  PLATFORM_GROUPS, getPlatformsByGroup, LTV_RANK,
  type Platform, type TalentDemand,
} from '@/src/data/platforms'

const ICON_MAP: Record<string, LucideIcon> = {
  Building2, DollarSign, ShoppingCart, MessageSquare, ClipboardList, GitBranch, Headphones, Code2, Package,
}

const TOTAL_PLATFORMS = PLATFORM_GROUPS.reduce((sum, g) => sum + getPlatformsByGroup(g.id).length, 0)
const TOTAL_ROLES = new Set(PLATFORM_GROUPS.flatMap((g) => getPlatformsByGroup(g.id).flatMap((p) => p.roles))).size

// ── Talent demand badge styling — surfaces the resourcing signal per platform ──
const DEMAND_STYLE: Record<TalentDemand, { bg: string; text: string; border: string; icon?: LucideIcon }> = {
  'Critically High': { bg: '#FF4F00', text: '#FFFFFF', border: '#FF4F00', icon: Flame },
  'Constant': { bg: '#FF4F00', text: '#FFFFFF', border: '#FF4F00', icon: Flame },
  'Very High': { bg: '#FF4F0014', text: '#FF4F00', border: '#FF4F0035' },
  'Growing Fast': { bg: '#F59E0B14', text: '#B45309', border: '#F59E0B35', icon: TrendingUp },
  'High': { bg: '#0A0A0A0A', text: '#374151', border: '#0A0A0A1A' },
  'Moderate-High': { bg: '#0A0A0A08', text: '#6B7280', border: '#0A0A0A14' },
  'Moderate': { bg: '#0A0A0A05', text: '#9CA3AF', border: '#0A0A0A0F' },
}

function DemandBadge({ demand }: { demand: TalentDemand }) {
  const style = DEMAND_STYLE[demand]
  const Icon = style.icon
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full whitespace-nowrap"
      style={{ background: style.bg, color: style.text, border: `1px solid ${style.border}` }}
    >
      {Icon && <Icon className="h-2.5 w-2.5" />}
      {demand} demand
    </span>
  )
}

function LtvMeter({ ltv }: { ltv: Platform['ltv'] }) {
  const rank = LTV_RANK[ltv]
  return (
    <div className="flex items-center gap-1.5 shrink-0" title={`${ltv} customer LTV`}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: i <= rank ? '#FF4F00' : '#0A0A0A14' }}
          />
        ))}
      </div>
      <span className="text-[10px] text-muted-foreground font-medium whitespace-nowrap">{ltv} LTV</span>
    </div>
  )
}

function monogram(name: string): string {
  const primary = name.split(' (')[0]
  const parts = primary.split(/\s+/)
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase()
  return primary.slice(0, 2).toUpperCase()
}

function PlatformCard({ platform, color }: { platform: Platform; color: string }) {
  return (
    <div
      className="group bg-card border border-border rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
      style={{ borderTopWidth: '3px', borderTopColor: color }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div
          className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0 font-display font-bold text-xs"
          style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
        >
          {monogram(platform.name)}
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-bold text-sm leading-snug">{platform.name}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{platform.category}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {platform.roles.slice(0, 2).map((role) => (
          <span
            key={role}
            className="inline-flex items-center text-[10px] font-medium text-foreground/70 bg-muted px-2 py-1 rounded-md leading-none"
          >
            {role}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2 pt-3 border-t border-border/60">
        <DemandBadge demand={platform.demand} />
        <LtvMeter ltv={platform.ltv} />
      </div>
    </div>
  )
}

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
              Kovil AI designs AI agents for the enterprise platforms you already run — and staffs the specialist
              engineers who build and maintain them. Vetted CRM, ERP, and automation talent, matched in 48 hours.
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
              { value: `${TOTAL_ROLES}+`, label: 'Specialist roles' },
              { value: '48 hrs', label: 'To match talent' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two ways to engage ── */}
      <section className="py-16 border-b border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="h-11 w-11 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center mb-5">
                <Bot className="h-5 w-5 text-accent" />
              </div>
              <h2 className="font-display font-bold text-xl mb-2">AI Agent Integration</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Custom agents built into the platform itself — reading and writing through native APIs, automating
                the workflows your team does manually today. Fixed-price sprints, live in 2 weeks.
              </p>
              <Button variant="accent" size="sm" className="rounded-full" onClick={openCalendly}>
                Scope an AI agent <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="h-11 w-11 rounded-xl bg-[#2563EB1A] border border-[#2563EB35] flex items-center justify-center mb-5">
                <Users className="h-5 w-5" style={{ color: '#2563EB' }} />
              </div>
              <h2 className="font-display font-bold text-xl mb-2">Specialist Talent & Staff Augmentation</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Can't find the platform expertise in-house? We match vetted engineers for the exact roles listed
                below — admins, developers, and architects — embedded on your team in 48 hours.
              </p>
              <Link href="/staff-augmentation">
                <Button variant="outline" size="sm" className="rounded-full">
                  Explore staff augmentation <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Platform groups ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          {PLATFORM_GROUPS.map((group, gi) => {
            const GroupIcon = ICON_MAP[group.icon] ?? Package
            const groupPlatforms = getPlatformsByGroup(group.id)
            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(gi * 0.04, 0.24) }}
                className="rounded-3xl border border-border overflow-hidden"
              >
                <div className="h-1 w-full" style={{ background: group.color }} />
                <div className="p-6 md:p-8" style={{ background: `${group.color}07` }}>

                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="h-9 w-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${group.color}18`, border: `1px solid ${group.color}35` }}
                    >
                      <GroupIcon className="h-4.5 w-4.5" style={{ color: group.color }} />
                    </div>
                    <h2 className="font-display font-bold text-xl tracking-tight">{group.title}</h2>
                    <span className="text-xs text-muted-foreground">{groupPlatforms.length} platform{groupPlatforms.length !== 1 ? 's' : ''}</span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {groupPlatforms.map((platform) => (
                      <PlatformCard key={platform.slug} platform={platform} color={group.color} />
                    ))}
                  </div>
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
              If it has an API, we can build an AI agent for it — or staff the engineer who knows it cold.
              Tell us what you're running.
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

import type { CSSProperties, ReactNode } from 'react'
import { PLATFORM_LOGOS } from '@/src/data/platform-logos'

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n))

interface TileProps {
  slug: string
  /** Rendered when we don't have a logo for this platform. */
  fallback?: ReactNode
  alt?: string
}

/** Hero badge: real platform logo on a white tile (full-bleed logos render edge to edge). */
export function PlatformLogoBadge({ slug, fallback, alt }: TileProps) {
  const logo = PLATFORM_LOGOS[slug]
  if (!logo) return <>{fallback ?? null}</>

  const filled = !!logo.bg
  const width = filled
    ? clamp(Math.round(64 * logo.aspect), 64, 104)
    : clamp(Math.round(40 * logo.aspect) + 24, 64, 132)
  const style: CSSProperties = { width, background: filled ? logo.bg! : '#FFFFFF' }

  return (
    <div
      className="relative h-16 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden ring-1 ring-white/20"
      style={style}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={alt ?? `${slug} logo`}
        className={filled ? 'h-full w-full object-cover' : 'h-full w-full object-contain p-3'}
        draggable={false}
      />
    </div>
  )
}

/** Small tile for lists/cards (hub). */
export function PlatformLogoTile({ slug, fallback, alt }: TileProps) {
  const logo = PLATFORM_LOGOS[slug]
  if (!logo) return <>{fallback ?? null}</>

  const filled = !!logo.bg
  const width = filled
    ? clamp(Math.round(40 * logo.aspect), 40, 64)
    : clamp(Math.round(26 * logo.aspect) + 14, 40, 72)

  return (
    <div
      className="h-10 rounded-xl flex items-center justify-center shrink-0 overflow-hidden border border-border"
      style={{ width, background: filled ? logo.bg! : '#FFFFFF' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo.src}
        alt={alt ?? `${slug} logo`}
        className={filled ? 'h-full w-full object-cover' : 'h-full w-full object-contain p-[7px]'}
        draggable={false}
      />
    </div>
  )
}

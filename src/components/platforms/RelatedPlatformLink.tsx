import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PlatformLogoTile } from '@/src/components/platforms/PlatformLogo'

/** Slim contextual link from a content page to the matching /platforms/<slug> page. */
export default function RelatedPlatformLink({ slug, name, blurb }: { slug: string; name: string; blurb: string }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <Link
        href={`/platforms/${slug}`}
        className="group flex items-center gap-4 rounded-2xl border border-border bg-muted/20 p-5 hover:border-accent/40 transition-colors"
      >
        <PlatformLogoTile slug={slug} alt={`${name} logo`} />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-accent mb-0.5">Platform page</p>
          <p className="font-display font-bold text-base group-hover:text-accent transition-colors">{name}: AI agents &amp; specialist talent</p>
          <p className="text-sm text-muted-foreground">{blurb}</p>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
      </Link>
    </section>
  )
}

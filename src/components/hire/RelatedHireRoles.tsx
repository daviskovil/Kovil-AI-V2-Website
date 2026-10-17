'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { relatedHireRoles } from '@/src/data/hire-directory'

/** "Related roles" links for a hire page. Reads the current path unless `currentHref` is given. */
export default function RelatedHireRoles({ currentHref }: { currentHref?: string }) {
  const pathname = usePathname()
  const related = relatedHireRoles(currentHref ?? (pathname || '').replace(/\/$/, ''))
  if (related.length === 0) return null
  return (
    <section className="border-t border-border bg-background py-12 px-6" aria-labelledby="related-roles-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="related-roles-heading" className="font-display font-bold text-xl mb-5 text-foreground">Related roles</h2>
        <div className="flex flex-wrap gap-3">
          {related.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="text-sm border border-border rounded-full px-4 py-1.5 text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
            >
              Hire {r.name}
            </Link>
          ))}
          <Link href="/hire" className="text-sm border border-border rounded-full px-4 py-1.5 text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors">
            All roles
          </Link>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img src="/kovil-logo-symbol-orange.webp" alt="Kovil AI" className="h-7 w-auto" loading="lazy" />
            <span className="font-display font-bold text-2xl tracking-tight">Kovil AI</span>
          </div>
          <p className="text-sm text-muted/60 mb-6">
            Managed AI implementation with zero delivery risk.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Engage</h4>
          <ul className="space-y-3 text-sm text-muted/60">
            <li><Link href="/engage/managed-ai-engineer" className="hover:text-accent transition-colors">Managed AI Engineer</Link></li>
            <li><Link href="/engage/outcome-based-project" className="hover:text-accent transition-colors">Outcome-Based AI Project</Link></li>
            <li><Link href="/engage/app-rescue" className="hover:text-accent transition-colors">AI Reliability & App Rescue</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-muted/60">
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/how-it-works" className="hover:text-accent transition-colors">How It Works</Link></li>
            <li><Link href="/apply" className="hover:text-accent transition-colors">Apply as AI Engineer</Link></li>
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
            <li><Link href="/frequently-asked-questions" className="hover:text-accent transition-colors">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted/60">
            <li>+1 646-535-9141</li>
            <li><a href="mailto:info@kovil.ai" className="hover:text-accent transition-colors">info@kovil.ai</a></li>
            <li className="pt-1">734 Franklin Ave,<br />Garden City, New York<br />11530, US</li>
            <li className="pt-2">
              <a href="https://www.linkedin.com/company/kovil-ai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-sm text-muted/40 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Kovil AI LLC. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms</Link>
          <Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}

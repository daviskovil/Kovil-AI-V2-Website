import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Main grid: brand | engage | other | company | tools */}
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1.3fr_1.2fr_1fr_1fr] gap-8 md:gap-8">

          {/* Brand + contact */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <img src="/kovil-logo-symbol-orange.webp" alt="Kovil AI" className="h-7 w-auto" loading="lazy" />
              <span className="font-display font-bold text-2xl tracking-tight">Kovil AI</span>
            </div>
            <ul className="space-y-2 text-sm text-muted/60 mt-2">
              <li><a href="tel:+16465359141" className="hover:text-accent transition-colors">+1 646-535-9141</a></li>
              <li><a href="mailto:info@kovil.ai" className="hover:text-accent transition-colors">info@kovil.ai</a></li>
              <li className="pt-1 leading-relaxed">734 Franklin Ave,<br />Garden City, NY 11530</li>
              <li className="pt-1 leading-relaxed">1401 Lavaca Street, Unit #7259,<br />Austin, TX 78701</li>
              <li className="pt-3">
                <a href="https://www.linkedin.com/company/kovil-ai/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-accent transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Engage */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Engage</h4>
            <ul className="space-y-3 text-sm text-muted/60">
              <li><Link href="/engage/managed-ai-engineer" className="hover:text-accent transition-colors">Managed AI Engineer</Link></li>
              <li><Link href="/engage/outcome-based-project" className="hover:text-accent transition-colors">Outcome-Based AI Project</Link></li>
              <li><Link href="/engage/app-rescue" className="hover:text-accent transition-colors">AI Reliability & App Rescue</Link></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm text-muted/60">
              <li>
                <Link href="/agentforce" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  Salesforce Agentforce
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "#00A1E020", color: "#00A1E0" }}>New</span>
                </Link>
              </li>
              <li>
                <Link href="/azure-ai-foundry" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  Azure AI Foundry
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "#0078D420", color: "#0078D4" }}>New</span>
                </Link>
              </li>
              <li>
                <Link href="/vertex-ai" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  GCP Vertex AI
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "#4285F420", color: "#4285F4" }}>New</span>
                </Link>
              </li>
              <li>
                <Link href="/intelligent-document-processing" className="hover:text-accent transition-colors flex items-center gap-1.5">
                  Document AI & IDP
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full" style={{ background: "#F9731620", color: "#F97316" }}>New</span>
                </Link>
              </li>
              <li><Link href="/ai-operations" className="hover:text-accent transition-colors">AI Operations</Link></li>
              <li><Link href="/hire" className="hover:text-accent transition-colors">Hire an AI Engineer</Link></li>
              <li><Link href="/ad-marketing-agencies" className="hover:text-accent transition-colors">Ad & Marketing Agencies</Link></li>
              <li><Link href="/ai-workflow-automation-library" className="hover:text-accent transition-colors">Workflow Library</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h4>
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

          {/* Free Tools */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Free Tools</h4>
            <ul className="space-y-3 text-sm text-muted/60">
              <li><Link href="/tools" className="hover:text-accent transition-colors">All Tools</Link></li>
              <li><Link href="/tools/ai-project-estimator" className="hover:text-accent transition-colors">AI Project Cost Estimator</Link></li>
              <li><Link href="/tools/ai-readiness-ad-marketing-agencies" className="hover:text-accent transition-colors">AI Readiness Assessment</Link></li>
              <li><Link href="/tools/azure-ai-agent-readiness" className="hover:text-accent transition-colors">Azure AI Agent Assessment</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-sm text-muted/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Kovil AI LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

import { motion } from "motion/react"
import { ArrowRight, Bot, Code2, ShieldCheck, Sparkles, Users, Zap, Star, CheckCircle2, Check, X, ChevronDown, Rocket, LifeBuoy } from "lucide-react"
import { Button } from "./components/ui/button"
import { OnboardingModal } from "./components/OnboardingModal"

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-foreground rounded-sm flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-background" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">Kovil AI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How We Vet</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#roles" className="hover:text-foreground transition-colors">Roles</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-sm font-medium hover:text-accent transition-colors">Apply as Talent</a>
            <OnboardingModal>
              <Button variant="accent" className="rounded-full font-semibold">
                Hire AI Engineers
              </Button>
            </OnboardingModal>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="fill-current h-4 w-4" />)}
                </div>
                <span className="text-sm font-medium text-muted-foreground">4.9/5 Loved by 50+ innovative companies</span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-balance leading-[1.05]"
              >
                Elite AI Engineers <br/><span className="text-accent">On Demand</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                Scale your AI capabilities overnight. Skip the 6-month search and get results now. Flexible & ROI-focused.
              </motion.p>

              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 space-y-3"
              >
                {[
                  "Top 1% of Vetted AI Specialists",
                  "Proven for Your Stack, Industry, Budget",
                  "Zero-Chase Managed Output Guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col items-start gap-3"
              >
                <OnboardingModal>
                  <Button variant="accent" size="lg" className="text-lg h-14 px-8 rounded-full shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all">
                    Hire AI Engineers <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </OnboardingModal>
                <span className="text-sm text-muted-foreground font-medium px-4">Only pay if you hire. Two-week trial.</span>
              </motion.div>
            </div>

            {/* Hero Visual - Floating Cards */}
            <div className="relative h-[500px] hidden lg:block">
              <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl" />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-background p-5 rounded-2xl shadow-xl border border-border w-72 z-20"
              >
                <div className="flex gap-4 items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center text-xl font-bold">SJ</div>
                  <div>
                    <p className="font-bold text-lg leading-tight">Sarah J.</p>
                    <p className="text-sm text-accent font-medium">AI Agent Builder</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded">OpenAI</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded">LangChain</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded">Python</span>
                </div>
                <div className="text-xs font-medium text-muted-foreground border-t border-border pt-3">
                  Ex-Anthropic • 5+ Enterprise Deployments
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 bg-background p-5 rounded-2xl shadow-xl border border-border w-72 z-10"
              >
                <div className="flex gap-4 items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center text-xl font-bold">MT</div>
                  <div>
                    <p className="font-bold text-lg leading-tight">Michael T.</p>
                    <p className="text-sm text-accent font-medium">LLM Ops Engineer</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded">Pinecone</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded">RAG</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-muted rounded">AWS</span>
                </div>
                <div className="text-xs font-medium text-muted-foreground border-t border-border pt-3">
                  Ex-Google • Scaled to 1M+ daily tokens
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logos & Big Stats */}
        <section className="border-y border-border bg-muted/20">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale mb-12">
              <div className="flex items-center gap-2 font-display font-bold text-xl"><div className="h-6 w-6 bg-foreground rounded-full" /> Stripe</div>
              <div className="flex items-center gap-2 font-display font-bold text-xl"><div className="h-6 w-6 bg-foreground rounded-sm" /> Netflix</div>
              <div className="flex items-center gap-2 font-display font-bold text-xl"><div className="h-6 w-6 bg-foreground rounded-tl-lg rounded-br-lg" /> Airbnb</div>
              <div className="flex items-center gap-2 font-display font-bold text-xl"><div className="h-6 w-6 border-2 border-foreground rounded-full" /> Square</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="pt-6 md:pt-0">
                <div className="text-4xl md:text-5xl font-display font-bold">150+</div>
                <div className="text-muted-foreground mt-2 font-medium">Successful AI Deployments</div>
              </div>
              <div className="pt-6 md:pt-0">
                <div className="text-4xl md:text-5xl font-display font-bold">50+</div>
                <div className="text-muted-foreground mt-2 font-medium">Happy Enterprise Customers</div>
              </div>
              <div className="pt-6 md:pt-0">
                <div className="text-4xl md:text-5xl font-display font-bold">98%</div>
                <div className="text-muted-foreground mt-2 font-medium">Trial-to-hire rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-b border-border">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
              Flexible <span className="text-accent">Engagement Models</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Whether you need an extra set of hands, a full squad, or an emergency rescue—we have a model for your exact stage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-muted group-hover:bg-accent transition-colors" />
              <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Embedded Talent</h3>
              <p className="text-muted-foreground mb-6">
                Seamlessly integrate top 1% AI engineers into your existing team. Scale up or down as needed.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Pre-vetted AI specialists</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Matches your timezone & stack</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>2-week risk-free trial</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <OnboardingModal defaultGoal="talent">
                  <Button variant="outline" className="w-full rounded-full">Hire Talent</Button>
                </OnboardingModal>
              </div>
            </div>

            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-muted group-hover:bg-accent transition-colors" />
              <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">Outcome-Based</h3>
              <p className="text-muted-foreground mb-6">
                Have an idea? We'll scope, build, and ship your AI product from scratch with a dedicated squad.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>End-to-end development</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Fixed scope & timeline</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Dedicated Project Manager</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <OnboardingModal defaultGoal="project">
                  <Button variant="outline" className="w-full rounded-full">Build a Project</Button>
                </OnboardingModal>
              </div>
            </div>

            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col">
              <div className="absolute top-0 left-0 w-full h-1 bg-muted group-hover:bg-accent transition-colors" />
              <div className="h-12 w-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                <LifeBuoy className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">App Rescue</h3>
              <p className="text-muted-foreground mb-6">
                Stuck with a failing agency, hallucinating RAG, or a half-finished "Vibe Coded" app? Our SWAT team will audit, fix, and maintain it.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Deep codebase & architecture audit</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Fix hallucinations & performance</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>Ongoing maintenance & optimization</span>
                </li>
              </ul>
              <div className="mt-auto pt-6">
                <OnboardingModal defaultGoal="rescue">
                  <Button variant="outline" className="w-full rounded-full">Get Rescued</Button>
                </OnboardingModal>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              From Guesswork to Deployed in <span className="text-accent">14 Days</span>
            </h2>
            <p className="text-xl text-muted-foreground">Don't waste months waiting for the right hire. We use millions of data points and human expertise to find the perfect fit in days.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Describe Your Needs",
                desc: "Complete a brief intake. Talk with a Hiring Specialist.",
                tag: "Today"
              },
              {
                title: "Meet Your Expert",
                desc: "Match in 24-48 hours. Meet with your engineer. Start 2 week trial.",
                tag: "This Week"
              },
              {
                title: "Watch Results Roll In",
                desc: "Watch velocity go up. Scale up and down as needed.",
                tag: "This Month"
              }
            ].map((step, i) => (
              <div key={i} className="relative pt-12">
                <div className="absolute top-0 left-0 text-sm font-bold text-accent uppercase tracking-wider">{step.tag}</div>
                <div className="bg-muted/30 border border-border rounded-2xl p-6 h-48 mb-6 flex items-center justify-center">
                  {/* UI Mockup Placeholder */}
                  <div className="w-full max-w-[200px] space-y-3">
                    <div className="h-2 w-full bg-muted-foreground/20 rounded" />
                    <div className="h-2 w-4/5 bg-muted-foreground/20 rounded" />
                    <div className="h-8 w-full bg-background rounded border border-border mt-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <OnboardingModal>
              <Button variant="accent" size="lg" className="rounded-full px-8">
                Hire AI Engineers <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </OnboardingModal>
            <p className="text-sm text-muted-foreground mt-4">No commitment, two-week trial</p>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 text-balance">
              <span className="text-accent">Dream AI Engineers,</span> Without Hiring Nightmares
            </h2>
            <p className="text-xl text-muted-foreground">Get the people you need to grow, without the overhead or hassle of wrong hires, agencies, or unvetted freelancers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Experts Who Have Done What You Need",
                desc: "Every engineer brings experience from top tech companies, with proven playbooks that eliminate guesswork. No experiments, just expertise."
              },
              {
                title: "Matched to Your Stack & Scale",
                desc: "Not only is your engineer a pro, they have experience helping companies exactly like yours. We match on stack, industry, and specific challenges."
              },
              {
                title: "Available Now, Satisfaction Guaranteed",
                desc: "Most matches are made within 48 hours. If you approve, they start within a week. Try them for two weeks, keep going, or replace them no questions asked."
              }
            ].map((prop, i) => (
              <div key={i} className="bg-background border border-border rounded-3xl p-8 shadow-sm">
                <div className="h-48 bg-muted/50 rounded-xl mb-8 border border-border/50 flex items-center justify-center overflow-hidden relative">
                  {/* Abstract visual placeholders */}
                  <div className="absolute inset-0 bg-gradient-to-br from-background to-muted" />
                  <div className="relative z-10 w-3/4 h-3/4 bg-background rounded-lg shadow-sm border border-border flex flex-col p-4 gap-2">
                    <div className="h-2 w-1/3 bg-muted rounded" />
                    <div className="h-2 w-full bg-muted rounded" />
                    <div className="h-2 w-2/3 bg-muted rounded" />
                    <div className="mt-auto h-8 w-full bg-accent/10 rounded flex items-center justify-center">
                      <div className="h-1.5 w-12 bg-accent/40 rounded" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{prop.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prop.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dark Mode Feature */}
        <section className="bg-foreground text-background py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                  NEW: The Zero-Chase Policy
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 leading-tight">
                  10x Velocity with Full Stack Human + AI Engineering
                </h2>
                <p className="text-xl text-muted/80 leading-relaxed mb-8">
                  You shouldn't have to manage developers to get AI built. Every builder you hire through Kovil AI is pair-locked with a Shadow Lead who audits every commit.
                </p>
                <Button variant="accent" size="lg" className="rounded-full px-8">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative aspect-square md:aspect-[4/3] bg-background/5 rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden">
                {/* Abstract Diagram */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,79,0,0.15)_0%,transparent_70%)]" />
                <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-md">
                  <div className="col-span-2 bg-background/10 backdrop-blur border border-white/10 p-4 rounded-xl text-center">
                    <Bot className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="font-bold">AI-Native Specialists</div>
                  </div>
                  <div className="bg-background/10 backdrop-blur border border-white/10 p-4 rounded-xl text-center">
                    <Code2 className="h-6 w-6 text-white/70 mx-auto mb-2" />
                    <div className="text-sm">Automations</div>
                  </div>
                  <div className="bg-background/10 backdrop-blur border border-white/10 p-4 rounded-xl text-center">
                    <Zap className="h-6 w-6 text-white/70 mx-auto mb-2" />
                    <div className="text-sm">Agents</div>
                  </div>
                  <div className="col-span-2 bg-accent/20 backdrop-blur border border-accent/30 p-4 rounded-xl text-center mt-4">
                    <div className="font-bold text-accent">10X OUTCOMES</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 bg-muted/30 border-y border-border">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
                Highest Quality, Perfectly Paired, <span className="text-accent">Fully Integrated</span>
              </h2>
            </div>
            
            <div className="bg-background rounded-3xl border border-border overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr>
                      <th className="p-6 border-b border-border w-1/3"></th>
                      <th className="p-6 border-b border-border w-1/4 bg-accent/5 text-center">
                        <div className="flex items-center justify-center gap-2 text-lg font-display font-bold text-foreground">
                          <Sparkles className="h-5 w-5 text-accent" /> Kovil AI
                        </div>
                      </th>
                      <th className="p-6 border-b border-border w-1/4 text-center font-semibold text-muted-foreground">In-House Hire</th>
                      <th className="p-6 border-b border-border w-1/4 text-center font-semibold text-muted-foreground">Freelance Platform</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { label: "Time to Hire", kovil: "3-5 Days", inhouse: "1-3 Months", freelance: "2-3 Weeks" },
                      { label: "Pre-vetted Candidates", kovil: <Check className="h-5 w-5 text-accent mx-auto" />, inhouse: <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />, freelance: <X className="h-5 w-5 text-muted-foreground/50 mx-auto" /> },
                      { label: "Cost", kovil: "$$", inhouse: "$$$$", freelance: "$" },
                      { label: "Cost of Failure", kovil: "$0", inhouse: "$$$", freelance: "$$" },
                      { label: "Free Rematching", kovil: <Check className="h-5 w-5 text-accent mx-auto" />, inhouse: <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />, freelance: <X className="h-5 w-5 text-muted-foreground/50 mx-auto" /> },
                      { label: "Termination Fees", kovil: "$0", inhouse: "$$$$", freelance: "$0" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-muted/10 transition-colors">
                        <td className="p-6 font-medium text-muted-foreground">{row.label}</td>
                        <td className="p-6 text-center font-bold bg-accent/5">{row.kovil}</td>
                        <td className="p-6 text-center text-muted-foreground">{row.inhouse}</td>
                        <td className="p-6 text-center text-muted-foreground">{row.freelance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Roles Grid (Pills) */}
        <section id="roles" className="py-24 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            AI Specialists <span className="text-accent">Ready to Hire</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Understanding what each AI specialization does can be tricky. We're here to help. Dive in to learn about each role.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AI Agent Builder", "LLM Ops Engineer", "RAG Specialist", 
              "Prompt Engineer", "AI Workflow Architect", "Vector Database Expert", 
              "AI Automation Lead", "Fine-tuning Specialist", "AI Product Manager",
              "Computer Vision Engineer", "NLP Data Scientist"
            ].map((role, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between gap-4 px-6 py-4 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white font-semibold transition-all cursor-pointer group border border-accent/20 hover:border-accent"
              >
                <span>{role}</span>
                <ArrowRight className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-muted/30 border-t border-border">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
                Engineers You Need, <span className="text-accent">Whenever You Need</span>
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                "How is the process tailored to my needs?",
                "How do I know I'm getting top talent?",
                "How much does this actually cost?",
                "What if my needs change?",
                "What if my engineer isn't a good fit?"
              ].map((q, i) => (
                <details key={i} className="group bg-background border border-border rounded-2xl [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between p-6 font-display font-bold text-lg cursor-pointer list-none">
                    {q}
                    <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    We match you with pre-vetted AI specialists based on your specific tech stack, industry, and project goals. Our Shadow Lead ensures the output meets enterprise standards from day one.
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-accent/5 text-center px-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
            Join Kovil AI Today
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            We'll match you with a perfect expert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <OnboardingModal>
              <Button variant="accent" size="lg" className="rounded-full px-8 h-14 text-lg">
                Hire AI Engineers <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </OnboardingModal>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg bg-background">
              Apply as a Freelancer
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-accent" />
              <span className="font-display font-bold text-2xl tracking-tight">Kovil AI</span>
            </div>
            <p className="text-sm text-muted/60 mb-6">
              The premier network for elite AI engineering talent.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Roles for Hire</h4>
            <ul className="space-y-3 text-sm text-muted/60">
              <li><a href="#" className="hover:text-accent transition-colors">AI Agent Builder</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LLM Ops Engineer</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">RAG Specialist</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Prompt Engineer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">About Us</h4>
            <ul className="space-y-3 text-sm text-muted/60">
              <li><a href="#" className="hover:text-accent transition-colors">How We Vet</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">For Talent</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted/60">
              <li>San Francisco, CA</li>
              <li>hello@kovilai.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-sm text-muted/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Kovil AI LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

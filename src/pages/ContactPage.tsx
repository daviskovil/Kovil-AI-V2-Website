import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "motion/react"
import { Mail, Linkedin, Calendar, Send, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "../components/ui/button"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", role: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const contactMethods = [
    {
      icon: Mail,
      label: "Email us",
      value: "info@kovil.ai",
      href: "mailto:info@kovil.ai",
      desc: "We respond within one business day.",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Kovil AI",
      href: "https://www.linkedin.com/company/kovil-ai/",
      desc: "Follow us for AI engineering insights.",
    },
    {
      icon: Calendar,
      label: "Book a call",
      value: "Schedule 30 minutes",
      href: "https://calendly.com/kovil-ai/talent",
      desc: "Speak directly with our team.",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Contact Kovil AI — Talk to Our Team</title>
        <meta name="description" content="Get in touch with Kovil AI. Book a discovery call, send us a message, or connect on LinkedIn. We respond within one business day." />
        <link rel="canonical" href="https://kovil.ai/contact" />
      </Helmet>

      <div className="pt-20 min-h-screen bg-background">

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-mono text-accent tracking-widest uppercase mb-4">Get in Touch</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
              Let's Talk About<br />
              <span className="text-accent">Your AI Build</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Whether you need an embedded AI engineer, want a fixed-price project, or have a failing AI app — we're here to help. No sales pitch. Just a real conversation.
            </p>
          </motion.div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-5 gap-16">

          {/* Contact Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-20 border border-border rounded-2xl bg-card px-8">
                <CheckCircle className="h-14 w-14 text-accent mb-6" />
                <h2 className="font-display text-3xl font-bold mb-3">Message received.</h2>
                <p className="text-muted-foreground text-lg max-w-sm">
                  We'll be in touch within one business day. In the meantime, feel free to browse our case studies.
                </p>
                <a href="/case-studies" className="mt-8 inline-flex items-center gap-2 text-accent font-medium hover:underline">
                  View case studies <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-border rounded-2xl bg-card p-8 space-y-6">
                <h2 className="font-display text-2xl font-bold text-foreground">Send us a message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full name <span className="text-accent">*</span></label>
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                    <input
                      name="company" value={form.company} onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Work email <span className="text-accent">*</span></label>
                  <input
                    name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">What are you looking to do? <span className="text-accent">*</span></label>
                  <select
                    name="role" required value={form.role} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition text-sm"
                  >
                    <option value="">Select an option...</option>
                    <option value="hire-engineer">Hire a Managed AI Engineer</option>
                    <option value="outcome-project">Start an Outcome-Based AI Project</option>
                    <option value="app-rescue">Fix or Rescue an AI App</option>
                    <option value="apply">Apply as an AI Engineer</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message <span className="text-accent">*</span></label>
                  <textarea
                    name="message" required value={form.message} onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your project, your tech stack, and what you're trying to build or fix..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit" variant="accent" size="lg"
                  className="w-full rounded-xl h-13 text-base font-semibold"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2"><span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2">Send Message <Send className="h-4 w-4" /></span>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">We respond within one business day. No spam, ever.</p>
              </form>
            )}
          </motion.div>

          {/* Contact Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Prefer to talk directly?</h2>
              <p className="text-muted-foreground text-sm">Book a 30-minute discovery call and speak with someone from the Kovil team.</p>
            </div>

            {contactMethods.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target={m.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent/40 hover:bg-accent/5 transition-all"
              >
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <m.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">{m.label}</p>
                  <p className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors">{m.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{m.desc}</p>
                </div>
              </a>
            ))}

            {/* Quick facts */}
            <div className="mt-4 p-6 rounded-2xl bg-foreground text-background">
              <h3 className="font-display font-bold text-lg mb-4">Quick facts</h3>
              <ul className="space-y-3 text-sm text-background/70">
                {[
                  "Two-week risk-free trial on all engagements",
                  "Vetted Tier-1 AI engineers only",
                  "Engagement Manager on every project",
                  "Fixed price, fixed timeline — no surprises",
                  "Based in Garden City, New York",
                ].map(fact => (
                  <li key={fact} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  )
}

'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"
import {
  ArrowRight, CheckCircle2, Upload, X, AlertCircle,
  User, Briefcase, Code2, FileText
} from "lucide-react"
import { Button } from "../components/ui/button"

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  // Step 1
  fullName: string
  email: string
  phone: string
  linkedin: string
  github: string
  location: string
  timezone: string
  // Step 2
  primaryRole: string
  yearsExperience: string
  specializations: string[]
  specializationOther: string
  languages: string[]
  languageOther: string
  aiTools: string[]
  aiToolOther: string
  primaryRoleOther: string
  cloudPlatforms: string[]
  cloudOther: string
  // Step 3
  impactProject: string
  industries: string[]
  industryOther: string
  availability: string[]
  // Step 4
  resume: File | null
  hearAboutUs: string
  agreedToTerms: boolean
  // Bot trap
  _honeypot: string
}

// ─── Constants ────────────────────────────────────────────────────────────────
const STEPS = [
  { label: "Personal Info",  icon: User },
  { label: "AI Expertise",   icon: Code2 },
  { label: "Experience",     icon: Briefcase },
  { label: "Final Step",     icon: FileText },
]

const ROLES = [
  "AI Agent Engineer", "LLM Engineer", "ML Engineer",
  "LLM Ops / MLOps Engineer", "AI Product Manager",
  "Data Engineer", "Voice AI Engineer", "Full-Stack AI Developer", "Other",
]

const YEARS = ["Less than 1 year", "1–2 years", "3–5 years", "6–9 years", "10+ years"]

const SPECIALIZATIONS = [
  "AI Agents & Orchestration", "RAG Systems", "LLM Fine-tuning",
  "Prompt Engineering", "Voice AI", "Computer Vision",
  "NLP / Text Processing", "MLOps & Deployment",
  "AI Security & Red Teaming", "Multi-modal AI",
]

const LANGUAGES = ["Python", "TypeScript / JavaScript", "Go", "Java", "Rust", "C++", "SQL"]

const AI_TOOLS = [
  "OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex",
  "HuggingFace", "Pinecone", "Weaviate", "AWS Bedrock",
  "Google Vertex AI", "Azure AI", "n8n / Zapier AI", "Twilio AI",
]

const CLOUD_PLATFORMS = [
  "AWS", "Google Cloud (GCP)", "Microsoft Azure",
  "Vercel / Netlify", "Cloudflare", "DigitalOcean",
  "Kubernetes / K8s", "Docker / Containerisation",
  "Terraform / IaC", "CI/CD (GitHub Actions, Jenkins)",
]

const INDUSTRIES = [
  "Fintech / Banking", "Healthcare", "Legal Tech", "E-commerce / Retail",
  "SaaS / Product", "Government / Public Sector", "Education",
  "Real Estate", "Logistics / Supply Chain", "Media / Content",
]

const AVAILABILITY_OPTIONS = [
  "Full-time (40h/week)",
  "Part-time (20h/week)",
  "Project-based only",
]

const HEAR_ABOUT = [
  "LinkedIn", "Google Search", "Referral from a friend",
  "Twitter / X", "A blog post", "Event / Meetup", "Other",
]

const TIMEZONES = [
  "USA — Eastern (ET, UTC−5/−4)",
  "USA — Central (CT, UTC−6/−5)",
  "USA — Mountain (MT, UTC−7/−6)",
  "USA — Pacific (PT, UTC−8/−7)",
  "Canada — Eastern / Toronto",
  "Canada — Pacific / Vancouver",
  "Brazil (BRT, UTC−3)",
  "Argentina (ART, UTC−3)",
  "UK — London (GMT/BST, UTC+0/+1)",
  "Ireland — Dublin (IST, UTC+0/+1)",
  "France / Germany / Spain (CET, UTC+1/+2)",
  "Netherlands / Sweden / Norway (CET, UTC+1/+2)",
  "Eastern Europe / Finland (EET, UTC+2/+3)",
  "South Africa (SAST, UTC+2)",
  "UAE / Dubai (GST, UTC+4)",
  "India (IST, UTC+5:30)",
  "Pakistan (PKT, UTC+5)",
  "Bangladesh (BST, UTC+6)",
  "Sri Lanka (SLST, UTC+5:30)",
  "Nepal (NPT, UTC+5:45)",
  "Indonesia — Jakarta (WIB, UTC+7)",
  "Thailand / Vietnam (ICT, UTC+7)",
  "Singapore / Malaysia (SGT, UTC+8)",
  "Philippines (PHT, UTC+8)",
  "China / Hong Kong (CST, UTC+8)",
  "Taiwan (TST, UTC+8)",
  "Japan (JST, UTC+9)",
  "South Korea (KST, UTC+9)",
  "Australia — Sydney (AEST, UTC+10/+11)",
  "Australia — Melbourne (AEST, UTC+10/+11)",
  "Australia — Perth (AWST, UTC+8)",
  "New Zealand (NZST, UTC+12/+13)",
  "Nigeria / West Africa (WAT, UTC+1)",
  "Kenya / East Africa (EAT, UTC+3)",
  "Egypt / Cairo (EET, UTC+2)",
]

// ─── Helpers ──────────────────────────────────────────────────────────────────
function generateMathQuestion() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return { question: `${a} + ${b}`, answer: String(a + b) }
}

function CheckItem({
  label, checked, onChange,
}: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <div
        onClick={onChange}
        className={`h-5 w-5 rounded flex items-center justify-center border-2 transition-colors shrink-0 cursor-pointer ${
          checked ? "bg-accent border-accent" : "border-border group-hover:border-accent/60"
        }`}
      >
        {checked && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
      </div>
      <span className="text-sm text-foreground">{label}</span>
    </label>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ApplyPage() {
  const [step, setStep]           = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]       = useState<Record<string, string>>({})
  const [dragOver, setDragOver]   = useState(false)
  const [mathQ]                   = useState(generateMathQuestion)
  const [mathAnswer, setMathAnswer] = useState("")
  const formLoadTime              = useRef(Date.now())
  const fileInputRef              = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState<FormData>({
    fullName: "", email: "", phone: "", linkedin: "", github: "",
    location: "", timezone: "",
    primaryRole: "", primaryRoleOther: "", yearsExperience: "",
    specializations: [], specializationOther: "",
    languages: [], languageOther: "",
    aiTools: [], aiToolOther: "",
    cloudPlatforms: [], cloudOther: "",
    impactProject: "",
    industries: [], industryOther: "",
    availability: [],
    resume: null, hearAboutUs: "", agreedToTerms: false,
    _honeypot: "",
  })

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }) }, [step])

  const set = (field: keyof FormData, value: unknown) =>
    setForm((f) => ({ ...f, [field]: value }))

  const toggleArray = (
    field: "specializations" | "languages" | "aiTools" | "cloudPlatforms" | "industries" | "availability",
    val: string
  ) =>
    setForm((f) => {
      const arr = f[field] as string[]
      return { ...f, [field]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val] }
    })

  // ── Validation per step ──
  const validate = (s: number): boolean => {
    const e: Record<string, string> = {}
    if (s === 1) {
      if (!form.fullName.trim())     e.fullName  = "Full name is required."
      if (!form.email.includes("@")) e.email     = "A valid email is required."
      if (!form.linkedin.trim())     e.linkedin  = "LinkedIn URL is required."
      if (!form.location.trim())     e.location  = "Location is required."
      if (!form.timezone)            e.timezone  = "Please select your timezone."
    }
    if (s === 2) {
      if (!form.primaryRole)       e.primaryRole     = "Please select your primary role."
      if (!form.yearsExperience)   e.yearsExperience = "Please select your years of experience."
      if (form.specializations.length === 0) e.specializations = "Select at least one specialization."
      if (form.languages.length === 0)       e.languages       = "Select at least one language."
    }
    if (s === 3) {
      if (form.impactProject.trim().length < 50) e.impactProject = "Please describe your project in at least 50 characters."
      if (form.availability.length === 0) e.availability = "Please select at least one availability option."
    }
    if (s === 4) {
      if (!form.resume)          e.resume      = "Please upload your resume."
      if (!form.hearAboutUs)     e.hearAboutUs = "Please let us know how you found us."
      if (!form.agreedToTerms)   e.terms       = "You must agree to our terms."
      if (mathAnswer.trim() !== mathQ.answer) e.math = "Incorrect answer. Please try again."
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => { if (validate(step)) setStep((s) => s + 1) }
  const handleBack = () => { setErrors({}); setStep((s) => s - 1) }

  const handleSubmit = async () => {
    if (!validate(4)) return
    if (form._honeypot) return
    const elapsed = (Date.now() - formLoadTime.current) / 1000
    if (elapsed < 5) return

    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    // Upload resume to Supabase Storage
    let resume_url: string | null = null
    if (form.resume) {
      const ext = form.resume.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const uploadRes = await fetch(`${SUPABASE_URL}/storage/v1/object/resumes/${fileName}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': form.resume.type,
        },
        body: form.resume,
      })
      if (uploadRes.ok) {
        resume_url = `${SUPABASE_URL}/storage/v1/object/resumes/${fileName}`
      }
    }

    // Build full skills list including "other" text
    const allSkills = [
      ...form.specializations,
      ...(form.specializationOther ? [`Specialization Other: ${form.specializationOther}`] : []),
      ...form.languages,
      ...(form.languageOther ? [`Language Other: ${form.languageOther}`] : []),
      ...form.aiTools,
      ...(form.aiToolOther ? [`AI Tool Other: ${form.aiToolOther}`] : []),
      ...form.cloudPlatforms,
      ...(form.cloudOther ? [`Cloud Other: ${form.cloudOther}`] : []),
    ]

    const applicationData = {
      full_name: form.fullName,
      email: form.email,
      phone: form.phone || null,
      role: form.primaryRole === 'Other' && form.primaryRoleOther ? form.primaryRoleOther : form.primaryRole,
      linkedin_url: form.linkedin,
      portfolio_url: form.github || null,
      timezone: form.timezone,
      availability: form.availability.join(', '),
      specializations: [...form.specializations, ...(form.specializationOther ? [`Other: ${form.specializationOther}`] : [])],
      tech_stack: [
        ...form.aiTools,
        ...(form.aiToolOther ? [`Other: ${form.aiToolOther}`] : []),
        ...form.cloudPlatforms,
        ...(form.cloudOther ? [`Other: ${form.cloudOther}`] : []),
      ],
      languages: [...form.languages, ...(form.languageOther ? [`Other: ${form.languageOther}`] : [])],
      referral_source: form.hearAboutUs,
      resume_url,
      status: 'new',
      notes: [
        `Location: ${form.location}`,
        `Experience: ${form.yearsExperience}`,
        `Industries: ${[...form.industries, ...(form.industryOther ? [`Other: ${form.industryOther}`] : [])].join(', ') || 'Not specified'}`,
        form.impactProject ? `Impact project: ${form.impactProject}` : '',
      ].filter(Boolean).join('\n'),
    }

    try {
      await fetch(`${SUPABASE_URL}/rest/v1/applications`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(applicationData),
      })

      fetch(`${SUPABASE_URL}/functions/v1/notify-application`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          linkedin: form.linkedin,
          github: form.github,
          location: form.location,
          timezone: form.timezone,
          primaryRole: form.primaryRole,
          yearsExperience: form.yearsExperience,
          specializations: [...form.specializations, ...(form.specializationOther ? [`Other: ${form.specializationOther}`] : [])],
          languages: [...form.languages, ...(form.languageOther ? [`Other: ${form.languageOther}`] : [])],
          aiTools: [...form.aiTools, ...(form.aiToolOther ? [`Other: ${form.aiToolOther}`] : [])],
          cloudPlatforms: [...form.cloudPlatforms, ...(form.cloudOther ? [`Other: ${form.cloudOther}`] : [])],
          industries: [...form.industries, ...(form.industryOther ? [`Other: ${form.industryOther}`] : [])],
          impactProject: form.impactProject,
          availability: form.availability,
        }),
      }).catch(err => console.error('Email notification error:', err))
    } catch (err) {
      console.error('Application submission error:', err)
    }

    setSubmitted(true)
  }

  // ── File handling ──
  const handleFile = (file: File | null) => {
    if (!file) return
    if (!["application/pdf", "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ].includes(file.type)) {
      setErrors((e) => ({ ...e, resume: "Only PDF or Word documents are accepted." }))
      return
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors((e) => ({ ...e, resume: "File must be under 5 MB." }))
      return
    }
    setErrors((e) => ({ ...e, resume: "" }))
    set("resume", file)
  }

  const progress = ((step - 1) / STEPS.length) * 100

  // ── Success Screen ──
  if (submitted) {
    return (
      <>
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg text-center space-y-6"
        >
          <div className="h-24 w-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="h-12 w-12 text-accent" />
          </div>
          <h1 className="font-display font-bold text-3xl">Application Received</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Thank you for applying to the Kovil AI Engineer Network. Our team will
            review your profile and reach out if there's a strong match for an
            upcoming engagement.
          </p>
          <p className="text-sm text-muted-foreground">
            Keep an eye on <strong>{form.email}</strong> — we'll be in touch within 5–7 business days.
          </p>
          <Link href="/">
            <Button variant="accent" className="mt-4">Back to Home</Button>
          </Link>
        </motion.div>
      </main>
      </>
    )
  }

  return (
    <>
    <main className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Join the Network</p>
          <h1 className="font-display font-bold text-4xl mb-3">Apply as an AI Engineer</h1>
          <p className="text-muted-foreground text-lg">
            Join our vetted network of elite AI engineers. When a project matches your profile,
            we'll reach out with an opportunity.
          </p>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-8">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            const num  = i + 1
            const done = step > num
            const active = step === num
            return (
              <div key={s.label} className="flex items-center gap-2 flex-1 last:flex-none">
                <div className={`flex items-center gap-2 ${active ? "text-foreground" : done ? "text-accent" : "text-muted-foreground"}`}>
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all ${
                    active ? "border-accent bg-accent text-white"
                    : done  ? "border-accent bg-accent/10 text-accent"
                    : "border-border"
                  }`}>
                    {done ? <CheckCircle2 className="h-4 w-4" /> : <Icon className="h-3.5 w-3.5" />}
                  </div>
                  <span className="text-xs font-medium hidden sm:block">{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`flex-1 h-px transition-colors ${done ? "bg-accent" : "bg-border"}`} />
                )}
              </div>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-muted rounded-full mb-10 overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            animate={{ width: `${progress + 25}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Honeypot */}
        <input
          type="text"
          name="website_url"
          value={form._honeypot}
          onChange={(e) => set("_honeypot", e.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">

          {/* ── STEP 1: Personal Info ───────────────────────────────── */}
          {step === 1 && (
            <motion.div key="s1"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-2xl">Personal Information</h2>

              <Field label="Full Name *" error={errors.fullName}>
                <input className={input(errors.fullName)} placeholder="Jane Smith"
                  value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email Address *" error={errors.email}>
                  <input type="email" className={input(errors.email)} placeholder="jane@company.com"
                    value={form.email} onChange={(e) => set("email", e.target.value)} />
                </Field>
                <Field label="Phone (optional)">
                  <input type="tel" className={input()} placeholder="+1 555 000 0000"
                    value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                </Field>
              </div>

              <Field label="LinkedIn Profile URL *" error={errors.linkedin}>
                <input className={input(errors.linkedin)} placeholder="https://linkedin.com/in/yourname"
                  value={form.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
              </Field>

              <Field label="GitHub / Portfolio URL (optional)">
                <input className={input()} placeholder="https://github.com/yourname"
                  value={form.github} onChange={(e) => set("github", e.target.value)} />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="City & Country *" error={errors.location}>
                  <input className={input(errors.location)} placeholder="Mumbai, India"
                    value={form.location} onChange={(e) => set("location", e.target.value)} />
                </Field>
                <Field label="Timezone *" error={errors.timezone}>
                  <select className={input(errors.timezone)} value={form.timezone}
                    onChange={(e) => set("timezone", e.target.value)}>
                    <option value="">Select timezone…</option>
                    {TIMEZONES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              <NavButtons onNext={handleNext} />
            </motion.div>
          )}

          {/* ── STEP 2: AI Expertise ───────────────────────────────── */}
          {step === 2 && (
            <motion.div key="s2"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <h2 className="font-display font-bold text-2xl">Your AI Expertise</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Primary Role *" error={errors.primaryRole}>
                  <select className={input(errors.primaryRole)} value={form.primaryRole}
                    onChange={(e) => set("primaryRole", e.target.value)}>
                    <option value="">Select role…</option>
                    {ROLES.map((r) => <option key={r}>{r}</option>)}
                  </select>
                  {form.primaryRole === "Other" && (
                    <input
                      className={`${input()} mt-2`}
                      placeholder="e.g. AI Research Engineer, Conversational AI Specialist…"
                      value={form.primaryRoleOther}
                      onChange={(e) => set("primaryRoleOther", e.target.value)}
                    />
                  )}
                </Field>
                <Field label="Years of AI/ML Experience *" error={errors.yearsExperience}>
                  <select className={input(errors.yearsExperience)} value={form.yearsExperience}
                    onChange={(e) => set("yearsExperience", e.target.value)}>
                    <option value="">Select…</option>
                    {YEARS.map((y) => <option key={y}>{y}</option>)}
                  </select>
                </Field>
              </div>

              {/* AI Specializations */}
              <Field label="AI Specializations * (select all that apply)" error={errors.specializations}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {SPECIALIZATIONS.map((s) => (
                    <CheckItem key={s} label={s}
                      checked={form.specializations.includes(s)}
                      onChange={() => toggleArray("specializations", s)} />
                  ))}
                  <CheckItem label="Other"
                    checked={form.specializations.includes("Other")}
                    onChange={() => toggleArray("specializations", "Other")} />
                </div>
                {form.specializations.includes("Other") && (
                  <input
                    className={`${input()} mt-3`}
                    placeholder="e.g. Autonomous systems, robotics AI…"
                    value={form.specializationOther}
                    onChange={(e) => set("specializationOther", e.target.value)}
                  />
                )}
              </Field>

              {/* Programming Languages */}
              <Field label="Programming Languages * (select all that apply)" error={errors.languages}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {LANGUAGES.map((l) => (
                    <CheckItem key={l} label={l}
                      checked={form.languages.includes(l)}
                      onChange={() => toggleArray("languages", l)} />
                  ))}
                  <CheckItem label="Other"
                    checked={form.languages.includes("Other")}
                    onChange={() => toggleArray("languages", "Other")} />
                </div>
                {form.languages.includes("Other") && (
                  <input
                    className={`${input()} mt-3`}
                    placeholder="e.g. Scala, Julia, R…"
                    value={form.languageOther}
                    onChange={(e) => set("languageOther", e.target.value)}
                  />
                )}
              </Field>

              {/* AI Frameworks & Tools */}
              <Field label="AI Frameworks & Tools (select all that apply)">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {AI_TOOLS.map((t) => (
                    <CheckItem key={t} label={t}
                      checked={form.aiTools.includes(t)}
                      onChange={() => toggleArray("aiTools", t)} />
                  ))}
                  <CheckItem label="Other"
                    checked={form.aiTools.includes("Other")}
                    onChange={() => toggleArray("aiTools", "Other")} />
                </div>
                {form.aiTools.includes("Other") && (
                  <input
                    className={`${input()} mt-3`}
                    placeholder="e.g. Mistral, Cohere, AutoGen…"
                    value={form.aiToolOther}
                    onChange={(e) => set("aiToolOther", e.target.value)}
                  />
                )}
              </Field>

              {/* Cloud & Infrastructure */}
              <Field label="Cloud & Infrastructure (select all that apply)">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {CLOUD_PLATFORMS.map((c) => (
                    <CheckItem key={c} label={c}
                      checked={form.cloudPlatforms.includes(c)}
                      onChange={() => toggleArray("cloudPlatforms", c)} />
                  ))}
                  <CheckItem label="Other"
                    checked={form.cloudPlatforms.includes("Other")}
                    onChange={() => toggleArray("cloudPlatforms", "Other")} />
                </div>
                {form.cloudPlatforms.includes("Other") && (
                  <input
                    className={`${input()} mt-3`}
                    placeholder="e.g. Oracle Cloud, IBM Cloud, on-prem…"
                    value={form.cloudOther}
                    onChange={(e) => set("cloudOther", e.target.value)}
                  />
                )}
              </Field>

              <NavButtons onBack={handleBack} onNext={handleNext} />
            </motion.div>
          )}

          {/* ── STEP 3: Experience & Availability ─────────────────── */}
          {step === 3 && (
            <motion.div key="s3"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <h2 className="font-display font-bold text-2xl">Experience & Availability</h2>

              <Field label="Describe your most impactful AI project *" error={errors.impactProject}>
                <textarea
                  className={`${input(errors.impactProject)} min-h-[140px] resize-none`}
                  placeholder="Tell us what you built, the problem it solved, the stack you used, and the measurable outcome. (min. 50 characters)"
                  value={form.impactProject}
                  onChange={(e) => set("impactProject", e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1 text-right">{form.impactProject.length} chars</p>
              </Field>

              {/* Industries */}
              <Field label="Industries you've worked in (select all that apply)">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {INDUSTRIES.map((i) => (
                    <CheckItem key={i} label={i}
                      checked={form.industries.includes(i)}
                      onChange={() => toggleArray("industries", i)} />
                  ))}
                  <CheckItem label="Other"
                    checked={form.industries.includes("Other")}
                    onChange={() => toggleArray("industries", "Other")} />
                </div>
                {form.industries.includes("Other") && (
                  <input
                    className={`${input()} mt-3`}
                    placeholder="e.g. Agriculture, Defence, Sports tech…"
                    value={form.industryOther}
                    onChange={(e) => set("industryOther", e.target.value)}
                  />
                )}
              </Field>

              {/* Availability — multi-choice */}
              <Field label="Availability * (select all that apply)" error={errors.availability}>
                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                  {AVAILABILITY_OPTIONS.map((opt) => (
                    <label key={opt} className={`flex-1 border rounded-xl px-4 py-3 cursor-pointer text-sm font-medium transition-colors text-center ${
                      form.availability.includes(opt) ? "border-accent bg-accent/5 text-foreground" : "border-border hover:border-accent/40"
                    }`}>
                      <input type="checkbox" className="sr-only" checked={form.availability.includes(opt)}
                        onChange={() => toggleArray("availability", opt)} />
                      {opt}
                    </label>
                  ))}
                </div>
              </Field>

              <NavButtons onBack={handleBack} onNext={handleNext} />
            </motion.div>
          )}

          {/* ── STEP 4: Resume & Final ─────────────────────────────── */}
          {step === 4 && (
            <motion.div key="s4"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="space-y-8"
            >
              <h2 className="font-display font-bold text-2xl">Almost There</h2>

              <Field label="Upload Your Resume * (PDF or Word · max 5 MB)" error={errors.resume}>
                <div
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault(); setDragOver(false)
                    handleFile(e.dataTransfer.files[0] ?? null)
                  }}
                  onClick={() => fileInputRef.current?.click()}
                  className={`mt-1 border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    dragOver ? "border-accent bg-accent/5"
                    : form.resume ? "border-accent/40 bg-accent/5"
                    : "border-border hover:border-accent/40"
                  }`}
                >
                  {form.resume ? (
                    <div className="flex items-center gap-3">
                      <FileText className="h-8 w-8 text-accent" />
                      <div>
                        <p className="font-semibold text-sm">{form.resume.name}</p>
                        <p className="text-xs text-muted-foreground">{(form.resume.size / 1024).toFixed(0)} KB</p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); set("resume", null) }}
                        className="ml-4 text-muted-foreground hover:text-foreground"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground mb-3" />
                      <p className="text-sm font-medium">Drag & drop or <span className="text-accent">browse</span></p>
                      <p className="text-xs text-muted-foreground mt-1">PDF or DOCX · Max 5 MB</p>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                />
              </Field>

              <Field label="How did you hear about us? *" error={errors.hearAboutUs}>
                <select className={input(errors.hearAboutUs)} value={form.hearAboutUs}
                  onChange={(e) => set("hearAboutUs", e.target.value)}>
                  <option value="">Select…</option>
                  {HEAR_ABOUT.map((h) => <option key={h}>{h}</option>)}
                </select>
              </Field>

              {/* Math CAPTCHA */}
              <Field label={`Quick verification: What is ${mathQ.question}?`} error={errors.math}>
                <input
                  className={input(errors.math)}
                  placeholder="Your answer"
                  value={mathAnswer}
                  onChange={(e) => setMathAnswer(e.target.value)}
                  maxLength={4}
                />
                <p className="text-xs text-muted-foreground mt-1">This helps us keep out bots.</p>
              </Field>

              {/* Terms */}
              <div className="space-y-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    onClick={() => set("agreedToTerms", !form.agreedToTerms)}
                    className={`mt-0.5 h-5 w-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                      form.agreedToTerms ? "bg-accent border-accent" : "border-border"
                    }`}
                  >
                    {form.agreedToTerms && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    I confirm the information provided is accurate. I agree to Kovil AI storing
                    my details and contacting me about relevant opportunities. I understand my
                    data will be handled in accordance with Kovil AI's privacy policy.
                  </span>
                </label>
                {errors.terms && <p className="text-xs text-red-500 flex items-center gap-1 pl-8"><AlertCircle className="h-3 w-3" />{errors.terms}</p>}
              </div>

              <div className="flex justify-between pt-2">
                <Button variant="ghost" onClick={handleBack}>Back</Button>
                <Button variant="accent" onClick={handleSubmit} className="group">
                  Submit Application <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
    </>
  )
}

// ─── Sub-components ────────────────────────────────────────────────────────────
function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      {children}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="h-3 w-3 shrink-0" />{error}
        </p>
      )}
    </div>
  )
}

function input(error?: string) {
  return `w-full px-4 py-3 rounded-xl border bg-transparent text-sm focus:outline-none focus:ring-2 transition-colors ${
    error ? "border-red-400 focus:ring-red-400/30" : "border-border focus:ring-accent/30 focus:border-accent"
  }`
}

function NavButtons({ onBack, onNext }: { onBack?: () => void; onNext?: () => void }) {
  return (
    <div className="flex justify-between pt-4">
      {onBack
        ? <Button variant="ghost" onClick={onBack}>Back</Button>
        : <div />}
      {onNext && (
        <Button variant="accent" onClick={onNext} className="group">
          Continue <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      )}
    </div>
  )
}

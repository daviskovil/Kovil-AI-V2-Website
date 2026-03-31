import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Link } from "react-router-dom"
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
  languages: string[]
  aiTools: string[]
  // Step 3
  impactProject: string
  industries: string[]
  availability: string
  engagementType: string[]
  rateRange: string
  // Step 4
  resume: File | null
  hearAboutUs: string
  agreedToTerms: boolean
  // Bot traps
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

const LANGUAGES = ["Python", "TypeScript / JavaScript", "Go", "Java", "Rust", "C++", "SQL", "Other"]

const AI_TOOLS = [
  "OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex",
  "HuggingFace", "Pinecone", "Weaviate", "AWS Bedrock",
  "Google Vertex AI", "Azure AI", "n8n / Zapier AI", "Twilio AI",
]

const INDUSTRIES = [
  "Fintech / Banking", "Healthcare", "Legal Tech", "E-commerce / Retail",
  "SaaS / Product", "Government / Public Sector", "Education",
  "Real Estate", "Logistics / Supply Chain", "Media / Content",
]

const RATES = [
  "Under $50 / hr", "$50–$100 / hr", "$100–$150 / hr",
  "$150–$200 / hr", "$200+ / hr", "Open to discuss",
]

const HEAR_ABOUT = [
  "LinkedIn", "Google Search", "Referral from a friend",
  "Twitter / X", "A blog post", "Event / Meetup", "Other",
]

const TIMEZONES = [
  "UTC−12 to UTC−8 (Americas West)",
  "UTC−7 to UTC−5 (Americas Central/East)",
  "UTC−4 to UTC−2 (Atlantic)",
  "UTC−1 to UTC+1 (Europe West)",
  "UTC+2 to UTC+3 (Europe East / Middle East)",
  "UTC+4 to UTC+6 (Gulf / South Asia)",
  "UTC+7 to UTC+9 (SE Asia / Japan)",
  "UTC+10 to UTC+12 (Australia / Pacific)",
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
    primaryRole: "", yearsExperience: "", specializations: [],
    languages: [], aiTools: [],
    impactProject: "", industries: [], availability: "",
    engagementType: [], rateRange: "",
    resume: null, hearAboutUs: "", agreedToTerms: false,
    _honeypot: "",
  })

  // Scroll to top on step change
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }) }, [step])

  const set = (field: keyof FormData, value: unknown) =>
    setForm((f) => ({ ...f, [field]: value }))

  const toggleArray = (field: "specializations" | "languages" | "aiTools" | "industries" | "engagementType", val: string) =>
    setForm((f) => {
      const arr = f[field] as string[]
      return { ...f, [field]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val] }
    })

  // ── Validation per step ──
  const validate = (s: number): boolean => {
    const e: Record<string, string> = {}
    if (s === 1) {
      if (!form.fullName.trim())   e.fullName  = "Full name is required."
      if (!form.email.includes("@")) e.email   = "A valid email is required."
      if (!form.linkedin.trim())   e.linkedin  = "LinkedIn URL is required."
      if (!form.location.trim())   e.location  = "Location is required."
      if (!form.timezone)          e.timezone  = "Please select your timezone."
    }
    if (s === 2) {
      if (!form.primaryRole)       e.primaryRole       = "Please select your primary role."
      if (!form.yearsExperience)   e.yearsExperience   = "Please select your years of experience."
      if (form.specializations.length === 0) e.specializations = "Select at least one specialization."
      if (form.languages.length === 0)       e.languages       = "Select at least one language."
    }
    if (s === 3) {
      if (form.impactProject.trim().length < 50) e.impactProject = "Please describe your project in at least 50 characters."
      if (!form.availability) e.availability = "Please select your availability."
      if (form.engagementType.length === 0) e.engagementType = "Select at least one engagement type."
    }
    if (s === 4) {
      if (!form.resume)           e.resume       = "Please upload your resume."
      if (!form.hearAboutUs)      e.hearAboutUs  = "Please let us know how you found us."
      if (!form.agreedToTerms)    e.terms        = "You must agree to our terms."
      if (mathAnswer.trim() !== mathQ.answer) e.math = "Incorrect answer. Please try again."
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => { if (validate(step)) setStep((s) => s + 1) }
  const handleBack = () => { setErrors({}); setStep((s) => s - 1) }

  const handleSubmit = () => {
    if (!validate(4)) return
    // Bot protection checks
    if (form._honeypot) return // Honeypot triggered
    const elapsed = (Date.now() - formLoadTime.current) / 1000
    if (elapsed < 5) return // Too fast — likely a bot
    // Here you would POST form data to your backend / CRM
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
          <Link to="/">
            <Button variant="accent" className="mt-4">Back to Home</Button>
          </Link>
        </motion.div>
      </main>
    )
  }

  return (
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

        {/* Honeypot — invisible to humans, bots will fill it */}
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

        {/* Form Steps */}
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
                  <input className={input(errors.location)} placeholder="London, UK"
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
                </Field>
                <Field label="Years of AI/ML Experience *" error={errors.yearsExperience}>
                  <select className={input(errors.yearsExperience)} value={form.yearsExperience}
                    onChange={(e) => set("yearsExperience", e.target.value)}>
                    <option value="">Select…</option>
                    {YEARS.map((y) => <option key={y}>{y}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="AI Specializations * (select all that apply)" error={errors.specializations}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {SPECIALIZATIONS.map((s) => (
                    <CheckItem key={s} label={s}
                      checked={form.specializations.includes(s)}
                      onChange={() => toggleArray("specializations", s)} />
                  ))}
                </div>
              </Field>

              <Field label="Programming Languages * (select all that apply)" error={errors.languages}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {LANGUAGES.map((l) => (
                    <CheckItem key={l} label={l}
                      checked={form.languages.includes(l)}
                      onChange={() => toggleArray("languages", l)} />
                  ))}
                </div>
              </Field>

              <Field label="AI Frameworks & Tools (select all that apply)">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-1">
                  {AI_TOOLS.map((t) => (
                    <CheckItem key={t} label={t}
                      checked={form.aiTools.includes(t)}
                      onChange={() => toggleArray("aiTools", t)} />
                  ))}
                </div>
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

              <Field label="Industries you've worked in (select all that apply)">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  {INDUSTRIES.map((i) => (
                    <CheckItem key={i} label={i}
                      checked={form.industries.includes(i)}
                      onChange={() => toggleArray("industries", i)} />
                  ))}
                </div>
              </Field>

              <Field label="Availability *" error={errors.availability}>
                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                  {["Full-time (40h/week)", "Part-time (20h/week)", "Project-based only"].map((opt) => (
                    <label key={opt} className={`flex-1 border rounded-xl px-4 py-3 cursor-pointer text-sm font-medium transition-colors text-center ${
                      form.availability === opt ? "border-accent bg-accent/5 text-foreground" : "border-border hover:border-accent/40"
                    }`}>
                      <input type="radio" className="sr-only" checked={form.availability === opt}
                        onChange={() => set("availability", opt)} />
                      {opt}
                    </label>
                  ))}
                </div>
              </Field>

              <Field label="Preferred Engagement Type * (select all that apply)" error={errors.engagementType}>
                <div className="flex flex-col sm:flex-row gap-3 mt-1">
                  {["Staff Augmentation", "Fixed-Price Project", "Both"].map((opt) => (
                    <CheckItem key={opt} label={opt}
                      checked={form.engagementType.includes(opt)}
                      onChange={() => toggleArray("engagementType", opt)} />
                  ))}
                </div>
              </Field>

              <Field label="Expected Rate Range (optional)">
                <select className={input()} value={form.rateRange}
                  onChange={(e) => set("rateRange", e.target.value)}>
                  <option value="">Prefer not to say</option>
                  {RATES.map((r) => <option key={r}>{r}</option>)}
                </select>
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

              {/* Resume Upload */}
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

              {/* Nav */}
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

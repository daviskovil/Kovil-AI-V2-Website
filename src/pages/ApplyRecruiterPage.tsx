'use client'

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle2, Upload, X, AlertCircle,
  User, Briefcase, Search, FileText, MapPin,
} from "lucide-react"
import { Button } from "../components/ui/button"

// ─── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  // Step 1
  fullName: string
  email: string
  phone: string
  linkedin: string
  city: string
  // Step 2
  yearsExperience: string
  recruiterType: string
  placementTypes: string[]
  atsTools: string[]
  atsToolOther: string
  placementsPerYear: string
  // Step 3
  techRoleTypes: string[]
  successPlacement: string
  availability: string[]
  // Step 4
  resume: File | null
  hearAboutUs: string
  agreedToTerms: boolean
  _honeypot: string
}

// ─── Constants ────────────────────────────────────────────────────────────────
const STEPS = [
  { label: "Personal Info",   icon: User },
  { label: "Your Experience", icon: Search },
  { label: "Specialisation",  icon: Briefcase },
  { label: "Final Step",      icon: FileText },
]

const YEARS_EXP = [
  "Less than 1 year", "1–2 years", "3–5 years", "6–9 years", "10+ years",
]

const RECRUITER_TYPES = [
  "Agency / Third-party Recruiter",
  "In-house / Corporate Recruiter",
  "Executive Search / Headhunter",
  "Independent / Freelance Recruiter",
  "RPO (Recruitment Process Outsourcing)",
]

const PLACEMENT_TYPES = [
  "Permanent / Full-time",
  "Contract / Freelance",
  "Temp-to-Perm",
  "Executive / C-Suite",
  "Part-time / Fractional",
]

const ATS_TOOLS = [
  "LinkedIn Recruiter",
  "Indeed",
  "Greenhouse",
  "Lever",
  "Workday",
  "Bullhorn",
  "SmartRecruiters",
  "Workable",
  "HireVue",
  "SeekOut",
  "Beamery",
  "Wellfound (AngelList)",
]

const PLACEMENTS_PER_YEAR = [
  "1–10 placements",
  "11–25 placements",
  "26–50 placements",
  "51–100 placements",
  "100+ placements",
]

const TECH_ROLE_TYPES = [
  "Software Engineers (Frontend / Backend / Full-Stack)",
  "AI / ML Engineers",
  "Data Engineers / Data Scientists",
  "DevOps / Platform / SRE",
  "Product Managers",
  "UX / Product Designers",
  "Engineering Managers / VPs",
  "CTOs / Technical Co-founders",
  "Cybersecurity",
  "QA / Test Engineers",
  "IT Support / Systems Admin",
  "Technical Recruiters (meta!)",
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

// ─── Helpers ──────────────────────────────────────────────────────────────────
function generateMathQuestion() {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return { question: `${a} + ${b}`, answer: String(a + b) }
}

function CheckItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
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

function Field({ label, error, children }: { label?: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      {label && <label className="text-sm font-medium text-foreground">{label}</label>}
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  )
}

const input = (err?: string) =>
  `w-full px-3.5 py-2.5 rounded-xl border text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition ${
    err ? "border-red-500" : "border-border"
  }`

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ApplyRecruiterPage() {
  const [step, setStep]             = useState(1)
  const [submitted, setSubmitted]   = useState(false)
  const [errors, setErrors]         = useState<Record<string, string>>({})
  const [dragOver, setDragOver]     = useState(false)
  const [mathQ]                     = useState(generateMathQuestion)
  const [mathAnswer, setMathAnswer] = useState("")
  const formLoadTime                = useRef(Date.now())
  const fileInputRef                = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState<FormData>({
    fullName: "", email: "", phone: "", linkedin: "", city: "",
    yearsExperience: "", recruiterType: "",
    placementTypes: [], atsTools: [], atsToolOther: "", placementsPerYear: "",
    techRoleTypes: [], successPlacement: "", availability: [],
    resume: null, hearAboutUs: "", agreedToTerms: false,
    _honeypot: "",
  })

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }) }, [step])

  const set = (field: keyof FormData, value: unknown) =>
    setForm((f) => ({ ...f, [field]: value }))

  const toggleArray = (
    field: "placementTypes" | "atsTools" | "techRoleTypes" | "availability",
    val: string
  ) =>
    setForm((f) => {
      const arr = f[field] as string[]
      return { ...f, [field]: arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val] }
    })

  // ── Validation ──
  const validate = (s: number): boolean => {
    const e: Record<string, string> = {}
    if (s === 1) {
      if (!form.fullName.trim())     e.fullName = "Full name is required."
      if (!form.email.includes("@")) e.email    = "A valid email is required."
      if (!form.linkedin.trim())     e.linkedin = "LinkedIn URL is required."
      if (!form.city.trim())         e.city     = "City is required."
      const digits = form.phone.replace(/\D/g, '')
      const indiaDigits = digits.startsWith('91') ? digits.slice(2) : digits
      if (!form.phone.trim()) {
        e.phone = "Phone number is required."
      } else if (!/^[6-9]\d{9}$/.test(indiaDigits)) {
        e.phone = "Enter a valid 10-digit Indian mobile number."
      }
    }
    if (s === 2) {
      if (!form.yearsExperience)            e.yearsExperience   = "Please select your years of experience."
      if (!form.recruiterType)              e.recruiterType     = "Please select your recruiter type."
      if (form.placementTypes.length === 0) e.placementTypes    = "Select at least one placement type."
      if (!form.placementsPerYear)          e.placementsPerYear = "Please select your placement volume."
    }
    if (s === 3) {
      if (form.techRoleTypes.length === 0)           e.techRoleTypes    = "Select at least one role type."
      if (form.successPlacement.trim().length < 50)  e.successPlacement = "Please describe your placement in at least 50 characters."
      if (form.availability.length === 0)            e.availability     = "Please select at least one availability option."
    }
    if (s === 4) {
      if (!form.resume)        e.resume      = "Please upload your CV / resume."
      if (!form.hearAboutUs)   e.hearAboutUs = "Please let us know how you found us."
      if (!form.agreedToTerms) e.terms       = "You must agree to our terms."
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

    const SUPABASE_URL      = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    // Upload CV to Supabase Storage
    let resume_url: string | null = null
    if (form.resume) {
      const ext      = form.resume.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const uploadRes = await fetch(`${SUPABASE_URL}/storage/v1/object/resumes/${fileName}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${SUPABASE_ANON_KEY}`, 'Content-Type': form.resume.type },
        body: form.resume,
      })
      if (uploadRes.ok) {
        resume_url = `${SUPABASE_URL}/storage/v1/object/public/resumes/${fileName}`
      }
    }

    const applicationData = {
      full_name:       form.fullName,
      email:           form.email,
      phone:           form.phone || null,
      role:            'IT Recruiter',
      linkedin_url:    form.linkedin,
      portfolio_url:   null,
      timezone:        'India (IST, UTC+5:30)',
      availability:    form.availability.join(', '),
      specializations: form.techRoleTypes,
      tech_stack:      [...form.atsTools, ...(form.atsToolOther ? [`Other: ${form.atsToolOther}`] : [])],
      languages:       [],
      referral_source: form.hearAboutUs,
      resume_url,
      status: 'new',
      notes: [
        `Location: ${form.city}, India`,
        `Experience: ${form.yearsExperience}`,
        `Recruiter type: ${form.recruiterType}`,
        `Placement types: ${form.placementTypes.join(', ')}`,
        `Placements/year: ${form.placementsPerYear}`,
        form.successPlacement ? `Placement story: ${form.successPlacement}` : '',
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
          fullName:          form.fullName,
          email:             form.email,
          phone:             form.phone,
          linkedin:          form.linkedin,
          location:          `${form.city}, India`,
          timezone:          'India (IST, UTC+5:30)',
          primaryRole:       'IT Recruiter (India)',
          yearsExperience:   form.yearsExperience,
          recruiterType:     form.recruiterType,
          placementTypes:    form.placementTypes,
          placementsPerYear: form.placementsPerYear,
          atsTools:          [...form.atsTools, ...(form.atsToolOther ? [`Other: ${form.atsToolOther}`] : [])],
          techRoleTypes:     form.techRoleTypes,
          availability:      form.availability,
          successPlacement:  form.successPlacement,
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
            Thank you for applying to join Kovil AI as an IT Recruiter. Our team will
            review your profile and reach out if there&apos;s a strong match.
          </p>
          <p className="text-sm text-muted-foreground">
            Keep an eye on <strong>{form.email}</strong> — we&apos;ll be in touch within 5–7 business days.
          </p>
          <Link href="/">
            <Button variant="accent" className="mt-4">Back to Home</Button>
          </Link>
        </motion.div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Banner */}
        <div className="mb-10 rounded-2xl overflow-hidden">
          <Image
            src="/banners/it-recruiter-banner.png"
            alt="Apply as an IT Recruiter — Kovil AI"
            width={1200}
            height={400}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Join the Team</p>
          <h1 className="font-display font-bold text-4xl mb-3">Apply as an IT Recruiter</h1>
          <p className="text-muted-foreground text-lg mb-4">
            We&apos;re looking for experienced technical recruiters based in India to help us
            build elite AI engineering teams. Tell us about your background and we&apos;ll be in touch.
          </p>
          {/* India-only banner */}
          <div className="flex items-center gap-2 bg-accent/8 border border-accent/20 rounded-xl px-4 py-3">
            <MapPin className="h-4 w-4 text-accent shrink-0" />
            <p className="text-sm text-foreground font-medium">
              This role is open to candidates based in <span className="text-accent">India only</span>.
            </p>
          </div>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2 mb-8">
          {STEPS.map((s, i) => {
            const Icon  = s.icon
            const num   = i + 1
            const done  = step > num
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
          type="text" name="website_url" value={form._honeypot}
          onChange={(e) => set("_honeypot", e.target.value)}
          style={{ display: "none" }} tabIndex={-1} autoComplete="off" aria-hidden="true"
        />

        <AnimatePresence mode="wait">

          {/* ── STEP 1: Personal Info ────────────────────────────────────────── */}
          {step === 1 && (
            <motion.div key="s1"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="space-y-6"
            >
              <h2 className="font-display font-bold text-2xl">Personal Information</h2>

              <Field label="Full Name *" error={errors.fullName}>
                <input className={input(errors.fullName)} placeholder="Priya Sharma"
                  value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email Address *" error={errors.email}>
                  <input type="email" className={input(errors.email)} placeholder="priya@company.com"
                    value={form.email} onChange={(e) => set("email", e.target.value)} maxLength={254} />
                </Field>
                <Field label="Phone Number * (India)" error={errors.phone}>
                  <div className="flex gap-2">
                    <div className="flex items-center px-3.5 rounded-xl border border-border bg-muted text-sm font-medium text-muted-foreground whitespace-nowrap">
                      🇮🇳 +91
                    </div>
                    <input type="tel" className={`${input(errors.phone)} flex-1`}
                      placeholder="98765 43210"
                      value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                </Field>
              </div>

              <Field label="LinkedIn Profile URL *" error={errors.linkedin}>
                <input className={input(errors.linkedin)} placeholder="https://linkedin.com/in/yourname"
                  value={form.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
              </Field>

              {/* City + locked India badge */}
              <Field label="City *" error={errors.city}>
                <div className="flex gap-3">
                  <input className={`${input(errors.city)} flex-1`} placeholder="Mumbai, Bengaluru, Delhi…"
                    value={form.city} onChange={(e) => set("city", e.target.value)} />
                  <div className="flex items-center gap-1.5 px-3.5 rounded-xl border border-border bg-muted text-sm font-medium text-muted-foreground whitespace-nowrap">
                    🇮🇳 India
                  </div>
                </div>
              </Field>
            </motion.div>
          )}

          {/* ── STEP 2: Recruiter Experience ─────────────────────────────────── */}
          {step === 2 && (
            <motion.div key="s2"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="space-y-7"
            >
              <h2 className="font-display font-bold text-2xl">Your Recruiting Experience</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Years of Recruiting Experience *" error={errors.yearsExperience}>
                  <select className={input(errors.yearsExperience)} value={form.yearsExperience}
                    onChange={(e) => set("yearsExperience", e.target.value)}>
                    <option value="">Select…</option>
                    {YEARS_EXP.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </Field>
                <Field label="Annual Placement Volume *" error={errors.placementsPerYear}>
                  <select className={input(errors.placementsPerYear)} value={form.placementsPerYear}
                    onChange={(e) => set("placementsPerYear", e.target.value)}>
                    <option value="">Select…</option>
                    {PLACEMENTS_PER_YEAR.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Recruiter Type *" error={errors.recruiterType}>
                <select className={input(errors.recruiterType)} value={form.recruiterType}
                  onChange={(e) => set("recruiterType", e.target.value)}>
                  <option value="">Select…</option>
                  {RECRUITER_TYPES.map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>

              <Field label="Placement Types — select all that apply *" error={errors.placementTypes}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
                  {PLACEMENT_TYPES.map((p) => (
                    <CheckItem key={p} label={p} checked={form.placementTypes.includes(p)}
                      onChange={() => toggleArray("placementTypes", p)} />
                  ))}
                </div>
              </Field>

              <Field label="Recruitment Tools & ATS — select all you use" error={errors.atsTools}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
                  {ATS_TOOLS.map((t) => (
                    <CheckItem key={t} label={t} checked={form.atsTools.includes(t)}
                      onChange={() => toggleArray("atsTools", t)} />
                  ))}
                </div>
                <input className={`${input()} mt-3`} placeholder="Other tools (optional)"
                  value={form.atsToolOther} onChange={(e) => set("atsToolOther", e.target.value)} />
              </Field>
            </motion.div>
          )}

          {/* ── STEP 3: Specialisation ───────────────────────────────────────── */}
          {step === 3 && (
            <motion.div key="s3"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="space-y-7"
            >
              <h2 className="font-display font-bold text-2xl">Specialisation</h2>

              <Field label="Tech roles you recruit for — select all that apply *" error={errors.techRoleTypes}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-1">
                  {TECH_ROLE_TYPES.map((r) => (
                    <CheckItem key={r} label={r} checked={form.techRoleTypes.includes(r)}
                      onChange={() => toggleArray("techRoleTypes", r)} />
                  ))}
                </div>
              </Field>

              <Field
                label="Tell us about a placement you're proud of *"
                error={errors.successPlacement}
              >
                <textarea
                  rows={5}
                  className={input(errors.successPlacement)}
                  placeholder="Describe the role, what made it challenging, how you found the candidate, and the outcome…"
                  value={form.successPlacement}
                  onChange={(e) => set("successPlacement", e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {form.successPlacement.length} / 50 characters minimum
                </p>
              </Field>

              <Field label="Availability *" error={errors.availability}>
                <div className="flex flex-col gap-2.5 mt-1">
                  {AVAILABILITY_OPTIONS.map((a) => (
                    <CheckItem key={a} label={a} checked={form.availability.includes(a)}
                      onChange={() => toggleArray("availability", a)} />
                  ))}
                </div>
              </Field>
            </motion.div>
          )}

          {/* ── STEP 4: Final Step ───────────────────────────────────────────── */}
          {step === 4 && (
            <motion.div key="s4"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="space-y-7"
            >
              <h2 className="font-display font-bold text-2xl">Almost There</h2>

              {/* CV upload */}
              <Field label="Upload Your CV / Resume *" error={errors.resume}>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]) }}
                  className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                    dragOver ? "border-accent bg-accent/5" : errors.resume ? "border-red-500" : "border-border hover:border-accent/50"
                  }`}
                >
                  {form.resume ? (
                    <div className="flex items-center justify-center gap-3">
                      <FileText className="h-5 w-5 text-accent" />
                      <span className="text-sm font-medium text-foreground">{form.resume.name}</span>
                      <button type="button" onClick={(e) => { e.stopPropagation(); set("resume", null) }}
                        className="text-muted-foreground hover:text-foreground">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">Drag & drop or click to upload</p>
                      <p className="text-xs text-muted-foreground mt-1">PDF or Word — max 5 MB</p>
                    </>
                  )}
                  <input ref={fileInputRef} type="file" accept=".pdf,.doc,.docx" className="hidden"
                    onChange={(e) => handleFile(e.target.files?.[0] ?? null)} />
                </div>
              </Field>

              <Field label="How did you find out about us? *" error={errors.hearAboutUs}>
                <select className={input(errors.hearAboutUs)} value={form.hearAboutUs}
                  onChange={(e) => set("hearAboutUs", e.target.value)}>
                  <option value="">Select…</option>
                  {HEAR_ABOUT.map((h) => <option key={h} value={h}>{h}</option>)}
                </select>
              </Field>

              <Field label={`Quick check: what is ${mathQ.question}?`} error={errors.math}>
                <input
                  type="text" inputMode="numeric" className={input(errors.math)}
                  placeholder="Your answer" value={mathAnswer}
                  onChange={(e) => setMathAnswer(e.target.value)}
                />
              </Field>

              <Field error={errors.terms}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    onClick={() => set("agreedToTerms", !form.agreedToTerms)}
                    className={`mt-0.5 h-5 w-5 rounded flex items-center justify-center border-2 shrink-0 transition-colors cursor-pointer ${
                      form.agreedToTerms ? "bg-accent border-accent" : errors.terms ? "border-red-500" : "border-border"
                    }`}
                  >
                    {form.agreedToTerms && <CheckCircle2 className="h-3.5 w-3.5 text-white" />}
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    I agree to Kovil AI&apos;s{" "}
                    <Link href="/privacy" className="text-accent underline underline-offset-2">Privacy Policy</Link>
                    {" "}and consent to my information being used to assess my application.
                  </span>
                </label>
              </Field>
            </motion.div>
          )}

        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
          {step > 1 ? (
            <Button variant="ghost" onClick={handleBack}>← Back</Button>
          ) : <div />}

          {step < 4 ? (
            <Button variant="accent" onClick={handleNext}>
              Continue <span className="ml-1">→</span>
            </Button>
          ) : (
            <Button variant="accent" onClick={handleSubmit}>
              Submit Application <CheckCircle2 className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>

      </div>
    </main>
  )
}

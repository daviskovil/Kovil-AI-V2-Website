'use client'

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, CheckCircle2, CalendarDays } from "lucide-react"
import { openCalendly } from "../lib/calendly"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "./ui/dialog"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"

export function OnboardingModal({ children, defaultGoal = "" }: { children: React.ReactNode, defaultGoal?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    goal: defaultGoal,
    details: "",
    email: "",
    firstName: "",
    lastName: "",
    countryCode: "+1",
    phone: "",
  })
  const [emailError, setEmailError] = useState("")

  const BLOCKED_DOMAINS = [
    'gmail.com','googlemail.com','hotmail.com','hotmail.co.uk','hotmail.fr',
    'outlook.com','outlook.in','outlook.co.uk','live.com','msn.com',
    'yahoo.com','yahoo.co.uk','yahoo.in','yahoo.fr','yahoo.de',
    'icloud.com','me.com','mac.com','aol.com','protonmail.com',
    'proton.me','zoho.com','yandex.com','yandex.ru','mail.com',
    'inbox.com','gmx.com','gmx.net','rediffmail.com','tutanota.com',
  ]

  const validateCorporateEmail = (email: string): string => {
    if (!email.includes('@')) return ''
    const domain = email.split('@')[1]?.toLowerCase()
    if (!domain) return ''
    if (BLOCKED_DOMAINS.includes(domain)) {
      return 'Please use your corporate email address — personal emails are not accepted.'
    }
    return ''
  }

  const handleNext = () => setStep((s) => s + 1)
  const handleBack = () => setStep((s) => s - 1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate corporate email before submitting
    const emailErr = validateCorporateEmail(formData.email)
    if (emailErr) { setEmailError(emailErr); return }

    const engagementMap: Record<string, string> = {
      talent: 'managed_ai_builder',
      project: 'outcome_project',
      rescue: 'app_rescue',
    }

    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(' ')
    const phoneWithCode = formData.phone ? `${formData.countryCode} ${formData.phone}` : ''

    const leadData = {
      name: fullName,
      email: formData.email,
      engagement_type: engagementMap[formData.goal] ?? formData.goal,
      project_description: formData.details,
      source: 'website',
      notes: phoneWithCode ? `Phone: ${phoneWithCode}` : undefined,
    }

    try {
      // 1. Save lead to Supabase
      await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(leadData),
      })

      // 2. Send notification email (fire-and-forget — don't block UX)
      fetch(`${SUPABASE_URL}/functions/v1/notify-lead`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      }).catch(err => console.error('Email notification error:', err))
    } catch (err) {
      console.error('Lead submission error:', err)
    }

    handleNext() // Move to success step regardless
  }

  const resetForm = () => {
    setStep(1)
    setFormData({ goal: defaultGoal, details: "", email: "", firstName: "", lastName: "", countryCode: "+1", phone: "" })
    setEmailError("")
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open)
      if (!open) setTimeout(resetForm, 300)
    }}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-background border-border">
        <VisuallyHidden.Root>
          <DialogTitle>Onboarding Flow</DialogTitle>
        </VisuallyHidden.Root>
        <div className="relative min-h-[400px] flex flex-col">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-muted">
            <motion.div 
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-display font-semibold">How do you want to work with us?</h2>
                    <p className="text-muted-foreground">Select the engagement model that fits your needs.</p>
                  </div>
                  <RadioGroup 
                    value={formData.goal} 
                    onValueChange={(val) => setFormData({ ...formData, goal: val })}
                    className="gap-4"
                  >
                    {[
                      { id: "talent", label: "Managed AI Engineer", desc: "Embed a vetted Tier-1 AI engineer into your team — milestone-gated and fully managed." },
                      { id: "project", label: "Outcome-Based AI Project", desc: "We scope, build, and ship your AI product — fixed price, fixed timeline." },
                      { id: "rescue", label: "AI Reliability & App Rescue", desc: "Audit, fix, and stabilise a failing, hallucinating, or half-finished AI app." }
                    ].map((option) => (
                      <Label
                        key={option.id}
                        htmlFor={option.id}
                        className={`flex flex-col space-y-1.5 border p-4 rounded-xl cursor-pointer transition-all ${
                          formData.goal === option.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <span className="font-semibold text-base">{option.label}</span>
                        </div>
                        <span className="text-sm text-muted-foreground pl-7 font-normal leading-relaxed">{option.desc}</span>
                      </Label>
                    ))}
                  </RadioGroup>
                  <div className="pt-4 flex justify-end">
                    <Button onClick={handleNext} disabled={!formData.goal} className="group">
                      Continue <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-display font-semibold">Tell us about your project.</h2>
                    <p className="text-muted-foreground">What are you trying to build or solve?</p>
                  </div>
                  <textarea
                    className="w-full min-h-[150px] p-4 rounded-xl border border-border bg-transparent focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="e.g., We need an AI agent to categorize and route customer support emails..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  />
                  <div className="pt-2 space-y-3">
                    <div className="flex justify-between pt-1">
                      <Button variant="ghost" onClick={handleBack}>Back</Button>
                      <Button onClick={handleNext} disabled={!formData.details.trim()} className="group">
                        Continue <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex-1 h-px bg-border" />
                      <span className="text-xs text-muted-foreground">or</span>
                      <span className="flex-1 h-px bg-border" />
                    </div>
                    <button
                      onClick={openCalendly}
                      className="flex items-center justify-center gap-2 w-full border border-accent text-accent rounded-xl py-3 text-sm font-semibold hover:bg-accent/5 transition-colors"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Book a Call Instead
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-display font-semibold">Where should we reach you?</h2>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* First Name + Last Name */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium">
                          First Name <span className="text-accent">*</span>
                        </Label>
                        <Input
                          type="text"
                          placeholder="Jane"
                          className="h-11 rounded-xl"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-sm font-medium text-muted-foreground">
                          Last Name <span className="text-xs">(optional)</span>
                        </Label>
                        <Input
                          type="text"
                          placeholder="Smith"
                          className="h-11 rounded-xl"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Corporate Email */}
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium">
                        Corporate Email <span className="text-accent">*</span>
                      </Label>
                      <Input
                        type="email"
                        placeholder="jane@company.com"
                        className={`h-11 rounded-xl ${emailError ? 'border-red-400 focus-visible:ring-red-400' : ''}`}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value })
                          if (emailError) setEmailError(validateCorporateEmail(e.target.value))
                        }}
                        required
                      />
                      {emailError && (
                        <p className="text-xs text-red-500 mt-1">{emailError}</p>
                      )}
                    </div>

                    {/* Phone (optional) */}
                    <div className="space-y-1.5">
                      <Label className="text-sm font-medium text-muted-foreground">
                        Phone <span className="text-xs">(optional)</span>
                      </Label>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="h-11 w-28 rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0 shrink-0"
                        >
                          {[
                            ["+1","🇺🇸 +1"],["+44","🇬🇧 +44"],["+91","🇮🇳 +91"],
                            ["+61","🇦🇺 +61"],["+971","🇦🇪 +971"],["+65","🇸🇬 +65"],
                            ["+49","🇩🇪 +49"],["+33","🇫🇷 +33"],["+81","🇯🇵 +81"],
                            ["+86","🇨🇳 +86"],["+55","🇧🇷 +55"],["+27","🇿🇦 +27"],
                            ["+234","🇳🇬 +234"],["+254","🇰🇪 +254"],
                          ].map(([val, label]) => (
                            <option key={val} value={val}>{label}</option>
                          ))}
                        </select>
                        <Input
                          type="tel"
                          placeholder="Phone number"
                          className="h-11 rounded-xl flex-1"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between">
                      <Button type="button" variant="ghost" onClick={handleBack}>Back</Button>
                      <Button
                        type="submit"
                        disabled={!formData.email.includes("@") || !formData.firstName.trim()}
                        className="bg-accent text-accent-foreground hover:bg-accent/90"
                      >
                        Submit Request
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 py-8"
                >
                  <div className="h-20 w-20 bg-accent/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-display font-semibold">Request Received</h2>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      Our Engagement Manager will review your requirements and reach out shortly to discuss the next steps.
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => setIsOpen(false)} className="mt-4">
                    Close
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

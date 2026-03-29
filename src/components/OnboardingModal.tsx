import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight, CheckCircle2 } from "lucide-react"
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
  })

  const handleNext = () => setStep((s) => s + 1)
  const handleBack = () => setStep((s) => s - 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here we would typically send the data to a backend
    handleNext() // Move to success step
  }

  const resetForm = () => {
    setStep(1)
    setFormData({ goal: defaultGoal, details: "", email: "" })
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
                      { id: "talent", label: "Hire Talent", desc: "Embed elite, pre-vetted AI engineers into your existing team." },
                      { id: "project", label: "Build a Project", desc: "We scope, build, and ship your AI product from scratch." },
                      { id: "rescue", label: "Rescue an App", desc: "Audit, fix, and maintain a failing or half-finished AI app." }
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
                  <div className="pt-4 flex justify-between">
                    <Button variant="ghost" onClick={handleBack}>Back</Button>
                    <Button onClick={handleNext} disabled={!formData.details.trim()} className="group">
                      Continue <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      type="email"
                      placeholder="name@company.com"
                      className="h-14 text-lg rounded-xl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <div className="pt-4 flex justify-between">
                      <Button type="button" variant="ghost" onClick={handleBack}>Back</Button>
                      <Button type="submit" disabled={!formData.email.includes("@")} className="bg-accent text-accent-foreground hover:bg-accent/90">
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
                      Our Shadow Lead will review your requirements and reach out shortly to discuss the next steps.
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

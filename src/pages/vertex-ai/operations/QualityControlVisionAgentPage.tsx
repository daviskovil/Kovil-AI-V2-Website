'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, Camera, Tag, UserCheck, BarChart3, RefreshCw, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"

const techStack = [
  "Vertex AI Vision",
  "Gemini 2.0 Flash Vision",
  "Cloud Vision API",
  "Cloud Storage",
  "BigQuery",
]

const problems = [
  {
    title: "Manual inspection is slow and inconsistent",
    description: "Human visual inspection is limited by fatigue, subjectivity, and throughput — inspectors miss defects at high line speeds and apply inconsistent standards across shifts.",
  },
  {
    title: "Defects reaching customers",
    description: "When inspection fails to catch defects on the line, the cost multiplies — warranty claims, returns, customer complaints, and brand damage that far exceed line-level prevention costs.",
  },
  {
    title: "High false positive rates from legacy systems",
    description: "Rules-based inspection systems generate high false positive rates — rejecting acceptable product and triggering unnecessary line stoppages that reduce throughput.",
  },
]

const capabilities = [
  {
    icon: Camera,
    title: "Real-Time Defect Detection",
    description: "Vertex AI Vision and Gemini Vision process camera feeds in real time — detecting surface defects, dimensional deviations, assembly errors, and cosmetic issues at line speed.",
  },
  {
    icon: Tag,
    title: "Multi-Class Defect Classification",
    description: "Defects are classified by type, severity, and location — enabling root cause analysis and targeted process adjustments rather than undifferentiated rejection.",
  },
  {
    icon: UserCheck,
    title: "Confidence-Gated Human Review",
    description: "Borderline cases below confidence thresholds are routed to human review with the camera frame and AI assessment highlighted — keeping humans in the loop for ambiguous cases.",
  },
  {
    icon: BarChart3,
    title: "Quality Trend Analytics in BigQuery",
    description: "All inspection results land in BigQuery — enabling SPC analysis, shift-by-shift trend monitoring, defect Pareto charts, and correlation with process parameters.",
  },
  {
    icon: RefreshCw,
    title: "Model Retraining Automation",
    description: "Confirmed human review decisions feed back into model training automatically via Vertex AI Pipelines — continuously improving accuracy on new defect types and product variants.",
  },
]

const metrics = [
  { value: "98.7%", label: "Defect detection accuracy" },
  { value: "0.3 sec", label: "Inspection time per unit" },
  { value: "82%", label: "Reduction in defective units reaching customers" },
]

const faqs = [
  {
    q: "What types of defects can the vision system detect?",
    a: "Vertex AI Vision can be trained to detect any visually distinguishable defect: surface scratches, dents, discoloration, missing components, incorrect assembly, label placement errors, dimensional deviations, and contamination. The specific defect classes are defined during model training using your labelled image dataset. Detection capability is directly related to the quality and diversity of the training data we build with your quality team.",
  },
  {
    q: "What camera hardware and lighting does the system require?",
    a: "The system is camera-agnostic and works with any IP camera capable of streaming RTSP or HTTP video. Industrial cameras (Basler, FLIR, IDS) provide the best results for high-speed inspection. Lighting requirements depend on the defect type — surface defects benefit from structured lighting; dimensional checks work with standard diffuse illumination. We advise on camera positioning and lighting during the site survey phase of implementation.",
  },
  {
    q: "How is the model trained for our specific products and defect types?",
    a: "We work with your quality team during implementation to collect and label a training image dataset of acceptable product and known defect categories. Vertex AI Vision requires approximately 100–500 images per defect class for initial model training. The model improves continuously through the human review feedback loop. We handle model training, evaluation, and deployment as part of the implementation.",
  },
  {
    q: "What is the line speed limitation of the system?",
    a: "The system processes images at 0.3 seconds per frame, enabling inspection of up to 200 units per minute at one frame per unit. Higher throughput is achieved by deploying multiple camera stations or using GPU-accelerated inference nodes. For very high-speed lines, we design a multi-camera array with parallel inference to maintain 100% inspection coverage. Exact throughput is validated during the site assessment.",
  },
]

export default function QualityControlVisionAgentPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai" className="hover:text-foreground transition-colors">Vertex AI</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vertex-ai/operations" className="hover:text-foreground transition-colors">Operations</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">Quality Control Vision Agent</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_BLUE, color: G_BLUE }}>
            Operations
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Quality Control Vision Agent
            <span className="block" style={{ color: G_BLUE }}>AI Visual Inspection</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Computer vision quality control system using Vertex AI Vision, Cloud Vision API, and Gemini Vision — detecting defects, anomalies, and quality deviations in real-time from production line cameras. 98.7% accuracy at 0.3 seconds per unit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={openCalendly} size="lg" style={{ backgroundColor: G_BLUE }} className="text-white hover:opacity-90">
              Build This for Your Organisation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/vertex-ai">Explore Vertex AI Services</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* What We Build */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-3xl mb-6">
            We implement a production-grade computer vision inspection system on Google Cloud — training custom Vertex AI Vision models on your defect taxonomy, deploying real-time inference at the edge or in the cloud, routing borderline cases to human review, and streaming all results to BigQuery for SPC analytics. The system integrates with your existing MES and quality management software.
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((chip) => (
              <span key={chip} className="px-3 py-1 rounded-full text-sm font-medium border" style={{ borderColor: G_BLUE, color: G_BLUE, backgroundColor: `${G_BLUE}10` }}>
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* The Problem It Solves */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">The Problem It Solves</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="rounded-xl border bg-card p-6">
                <div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: G_BLUE }} />
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What You Get */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">What You Get</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="rounded-xl border bg-card p-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${G_BLUE}15` }}>
                    <Icon className="w-5 h-5" style={{ color: G_BLUE }} />
                  </div>
                  <h3 className="font-semibold mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Business Impact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Business Impact</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-xl border bg-card p-8 text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: G_BLUE }}>{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border bg-card p-6">
                <h3 className="font-semibold mb-3 flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: G_BLUE }} />
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="rounded-2xl p-10 text-center text-white"
          style={{ background: `linear-gradient(135deg, ${G_BLUE} 0%, #1a73e8 100%)` }}>
          <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Build This for Your Organisation</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Catch defects before they reach customers. We implement a production-ready AI vision inspection system in 4–6 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}

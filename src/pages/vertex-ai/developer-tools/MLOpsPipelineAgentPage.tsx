'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, GitMerge, Bell, BarChart3, RefreshCw, Shield, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"
const G_GREEN = "#34A853"

const techStack = [
  "Vertex AI Pipelines",
  "Vertex AI Model Monitoring",
  "Vertex AI Model Registry",
  "Gemini 2.0 Flash",
  "Cloud Build",
  "BigQuery ML",
]

const problems = [
  {
    title: "Model retraining is manual and error-prone",
    description: "ML teams manually trigger retraining, evaluate models against ad-hoc criteria, and promote to production via informal processes — leading to inconsistency, human error, and delays.",
  },
  {
    title: "Production model drift goes undetected",
    description: "Models silently degrade in production as data distributions shift, with no automated detection until business metrics drop — by which point the damage is done.",
  },
  {
    title: "No one understands why model performance changed",
    description: "When model accuracy drops, engineers spend days investigating feature drift, data pipeline changes, and distributional shifts — with no tooling to explain the root cause quickly.",
  },
]

const capabilities = [
  {
    icon: RefreshCw,
    title: "Automated Retraining Triggers",
    description: "Retraining pipelines fire automatically on schedule, on data drift detection, or on performance degradation — no manual intervention required for routine model lifecycle events.",
  },
  {
    icon: GitMerge,
    title: "Deployment Gating",
    description: "New models are only promoted to production if they outperform the current production model on your defined evaluation metrics — with configurable gate criteria per model.",
  },
  {
    icon: Bell,
    title: "Drift Detection Alerts",
    description: "Vertex AI Model Monitoring continuously tracks feature and prediction distribution drift. Alerts route to Slack or email with Gemini-narrated drift reports.",
  },
  {
    icon: BarChart3,
    title: "Gemini Performance Narration",
    description: "When model performance changes, Gemini generates a plain-language explanation of what changed, which features drove the change, and what corrective actions are recommended.",
  },
  {
    icon: Shield,
    title: "Model Registry Versioning",
    description: "Every trained model is registered in the Vertex AI Model Registry with full lineage — training data version, hyperparameters, evaluation metrics, and deployment history.",
  },
]

const metrics = [
  { value: "85%", label: "Reduction in manual retraining effort" },
  { value: "3x", label: "Faster time from data change to model update" },
  { value: "Zero", label: "Silent model failures in production" },
]

const faqs = [
  {
    q: "What ML frameworks does Vertex AI Pipelines support?",
    a: "Vertex AI Pipelines supports any ML framework via containerised pipeline components: scikit-learn, XGBoost, LightGBM, TensorFlow, PyTorch, and Hugging Face Transformers. BigQuery ML models can also be managed through the same pipeline framework. LLM fine-tuning pipelines — including supervised fine-tuning of Gemini models — are supported via the Vertex AI SDK fine-tuning API and can be gated by the same automated evaluation framework.",
  },
  {
    q: "How does drift detection work?",
    a: "Vertex AI Model Monitoring continuously compares feature and prediction distributions in production against a training baseline using population stability index (PSI) or Jensen-Shannon divergence. When drift exceeds configurable thresholds, the monitoring service triggers the MLOps agent to notify the team with a Gemini-narrated drift report, validate data availability for retraining, and optionally initiate an automated retraining pipeline.",
  },
  {
    q: "Can this integrate with our existing CI/CD pipeline?",
    a: "Yes. We implement GitOps-style ML workflows: a git commit to your model training code triggers Cloud Build, which packages the training container, submits the Vertex AI Pipeline run, monitors evaluation, and conditionally promotes the model via the Vertex AI Model Registry. This integrates with GitHub Actions, GitLab CI, Cloud Build, and Jenkins.",
  },
  {
    q: "How long does implementation take?",
    a: "A production MLOps pipeline with automated training, evaluation gating, model registry, drift monitoring, and Gemini narration typically takes 4–6 weeks from scoping to go-live. The timeline depends on the number of models to migrate to the pipeline and the complexity of your existing training code.",
  },
]

export default function MLOpsPipelineAgentPage() {
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
            <Link href="/vertex-ai/developer-tools" className="hover:text-foreground transition-colors">Developer Tools</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">MLOps Pipeline Agent</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_GREEN, color: G_GREEN }}>
            Developer Tools
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            MLOps Pipeline Agent
            <span className="block" style={{ color: G_BLUE }}>Automated ML Lifecycle on Vertex AI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            Automates model evaluation, deployment gating, and retraining triggers on Vertex AI Pipelines — with Gemini monitoring and explaining model performance changes in plain language. From training to production to drift detection, fully automated.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={openCalendly} size="lg" style={{ backgroundColor: G_BLUE }} className="text-white hover:opacity-90">
              Automate My ML Lifecycle <ArrowRight className="ml-2 w-4 h-4" />
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
            We implement a fully automated ML lifecycle on Vertex AI Pipelines — connecting training, evaluation, deployment, and monitoring into a single governed workflow. Gemini monitors model health and narrates performance changes in plain language for engineering and product stakeholders.
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
          <h2 className="text-3xl font-bold mb-4">Automate Your ML Lifecycle on GCP</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Stop manually managing model training, evaluation, and deployment. We implement a fully automated ML pipeline on Vertex AI — with Gemini monitoring and explaining every model change. Deployed in 4–6 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}

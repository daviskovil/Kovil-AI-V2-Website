'use client'

import { motion } from "motion/react"
import { CheckCircle2, ArrowRight, ChevronRight, TestTube, FileText, AlertCircle, GitMerge, Clock, TrendingUp } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { openCalendly } from "../../../lib/calendly"
import Link from "next/link"

const G_BLUE = "#4285F4"
const G_RED = "#EA4335"

const techStack = [
  "Gemini 2.0 Flash",
  "Vertex AI Agent Builder",
  "Cloud Build",
  "Apigee",
  "Cloud Run",
  "BigQuery",
]

const problems = [
  {
    title: "API tests are written once and never maintained",
    description: "Test suites fall out of sync with API changes, accumulate false positives, and give teams false confidence — until a production incident reveals the gap.",
  },
  {
    title: "API documentation is always out of date",
    description: "OpenAPI specs are manually maintained and lag behind actual API behaviour by weeks or months, causing integration failures for internal and external consumers.",
  },
  {
    title: "Contract violations between services go undetected",
    description: "In microservices architectures, upstream API changes silently break downstream consumers — discovered only when services fail in production rather than in the CI pipeline.",
  },
]

const capabilities = [
  {
    icon: TestTube,
    title: "AI Test Generation",
    description: "Gemini analyses your API spec or observes actual traffic and generates comprehensive test suites — positive, negative, boundary, and security tests — in your framework of choice.",
  },
  {
    icon: FileText,
    title: "OpenAPI Documentation Generation",
    description: "Generates and updates OpenAPI documentation by observing real API behaviour — enriched with Gemini-written natural language descriptions for each endpoint and parameter.",
  },
  {
    icon: AlertCircle,
    title: "Regression Detection",
    description: "Detects schema changes, status code regressions, and latency degradation across every commit — with Gemini-narrated reports explaining exactly what broke and which consumers are affected.",
  },
  {
    icon: GitMerge,
    title: "Contract Testing",
    description: "Consumer-driven contract tests (Pact) ensure upstream changes don't silently break downstream services — run automatically in CI before any merge.",
  },
  {
    icon: Clock,
    title: "Auto-updating Test Suites",
    description: "When API behaviour changes, the agent updates test assertions automatically and opens a PR with a summary of what changed and why the tests were updated.",
  },
]

const metrics = [
  { value: "91%", label: "API test coverage across all endpoints" },
  { value: "Zero", label: "Contract violations reaching production" },
  { value: "3 hrs", label: "Saved per sprint on test maintenance" },
]

const faqs = [
  {
    q: "What API specifications and frameworks does the agent support?",
    a: "The agent supports OpenAPI 2.0 and 3.x (Swagger), gRPC proto files, and GraphQL schemas as input specifications. Generated tests are output as executable code in pytest, Jest/Supertest, Postman collections, k6 for load testing, or Pact for contract tests. For organisations without an existing spec, the agent can infer an OpenAPI spec by observing Apigee or Cloud Endpoints traffic.",
  },
  {
    q: "How does Gemini identify what tests to generate?",
    a: "Gemini analyses the API specification to identify: all endpoint paths and HTTP methods; all required and optional parameters with their types and constraints; all defined response schemas and status codes; authentication requirements; and example request/response pairs. It generates test cases covering the happy path, boundary values, invalid inputs, missing required fields, type mismatches, and authentication bypass attempts. For APIs without complete specs, it supplements with traffic-observed patterns.",
  },
  {
    q: "How does the agent keep documentation up to date?",
    a: "The agent observes actual API traffic through Apigee or Cloud Endpoints and compares observed request/response shapes against the OpenAPI spec. When it detects divergence — a field present in responses but missing from the spec, a new endpoint receiving traffic, a changed response schema — it generates a spec update PR with Gemini-written changelog notes and a plain-language summary of what changed. Documentation is deployed as a static Redoc or Swagger UI site updated on every spec change.",
  },
  {
    q: "How does CI/CD integration work?",
    a: "The test agent integrates with Cloud Build, GitHub Actions, and GitLab CI as a pipeline step. On every PR, it runs the complete test suite against a staging deployment, reports pass/fail status with Gemini-narrated summaries, and blocks merges when contract violations or regressions are detected. Test results and API health metrics are stored in BigQuery and visualised in a Looker Studio quality dashboard.",
  },
]

export default function APITestingAgentPage() {
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
            <span className="text-foreground">API Testing Agent</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border" style={{ borderColor: G_RED, color: G_RED }}>
            Developer Tools
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            API Testing & Documentation Agent
            <span className="block" style={{ color: G_BLUE }}>Gemini-Powered QA on Google Cloud</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            AI agent that generates, runs, and maintains API tests using Gemini — produces OpenAPI documentation from real traffic, detects regressions across every commit, and flags contract violations before they reach production. Built on Vertex AI and Cloud Build.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={openCalendly} size="lg" style={{ backgroundColor: G_BLUE }} className="text-white hover:opacity-90">
              Build This for My API Team <ArrowRight className="ml-2 w-4 h-4" />
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
            We implement an end-to-end API testing and documentation agent on Google Cloud — using Gemini to generate and maintain test suites, observe traffic for documentation accuracy, and detect regressions and contract violations in CI. Test quality improves automatically as your APIs evolve.
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
                <div className="w-2 h-8 rounded-full mb-4" style={{ backgroundColor: G_RED }} />
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
          <h2 className="text-3xl font-bold mb-4">Stop Maintaining API Tests Manually</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Gemini generates and maintains your API tests, keeps your OpenAPI docs accurate, and catches contract violations before they reach production. Deployed in 3 weeks.
          </p>
          <Button onClick={openCalendly} size="lg" className="bg-white hover:bg-gray-50 font-semibold" style={{ color: G_BLUE }}>
            Book a Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </section>

    </div>
  )
}

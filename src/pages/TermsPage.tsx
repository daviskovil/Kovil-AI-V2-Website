'use client'


export default function TermsPage() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Legal</p>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">Terms of Service</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2026</p>
        <div className="prose-content space-y-8 text-foreground">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the Kovil AI website (kovil.ai) or any services provided by Kovil AI ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          <section>
            <h2>2. Services</h2>
            <p>Kovil AI provides AI engineering services including but not limited to: managed AI engineer placements, fixed-price AI project delivery, and AI application rescue and maintenance. All services are subject to separate engagement agreements signed between Kovil AI and the client.</p>
          </section>
          <section>
            <h2>3. Intellectual Property</h2>
            <p>Work product created under a client engagement — including code, models, prompts, and documentation — is assigned to the client upon final payment as specified in the engagement agreement. Kovil AI retains ownership of its proprietary methodologies, frameworks, and pre-existing tools.</p>
          </section>
          <section>
            <h2>4. Confidentiality</h2>
            <p>Kovil AI treats all client information as confidential and does not disclose client data to third parties without explicit consent, except as required by law. A mutual NDA can be executed prior to any engagement.</p>
          </section>
          <section>
            <h2>5. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Kovil AI shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability in any claim shall not exceed the fees paid for the specific engagement giving rise to the claim.</p>
          </section>
          <section>
            <h2>6. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.</p>
          </section>
          <section>
            <h2>7. Contact</h2>
            <p>For questions about these Terms, please contact us at <a href="mailto:info@kovil.ai" className="text-accent hover:underline">info@kovil.ai</a>.</p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}

'use client'


export default function PrivacyPage() {
  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-3">Legal</p>
        <h1 className="font-display font-bold text-4xl lg:text-5xl tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: March 2026</p>
        <div className="prose-content space-y-8 text-foreground">
          <section>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including name, email address, company details, and project information submitted through our contact forms, onboarding modal, or application form. We also collect anonymised analytics data (page visits, referral sources) to improve our website.</p>
          </section>
          <section>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to: respond to your enquiries, match you with appropriate AI engineers, deliver and improve our services, send relevant communications (with your consent), and comply with legal obligations.</p>
          </section>
          <section>
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with our vetted engineers and delivery leads strictly for the purpose of fulfilling your engagement. All parties are bound by confidentiality obligations.</p>
          </section>
          <section>
            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information. All data is stored securely and access is limited to authorised Kovil AI personnel.</p>
          </section>
          <section>
            <h2>5. Cookies</h2>
            <p>Our website uses essential cookies for functionality and anonymised analytics cookies to understand how visitors use the site. You can control cookie preferences through your browser settings.</p>
          </section>
          <section>
            <h2>6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information at any time. To exercise these rights, contact us at <a href="mailto:info@kovil.ai" className="text-accent hover:underline">info@kovil.ai</a>.</p>
          </section>
          <section>
            <h2>7. Contact</h2>
            <p>For privacy-related enquiries, contact us at <a href="mailto:info@kovil.ai" className="text-accent hover:underline">info@kovil.ai</a>.</p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AP Marketing terms of service.',
  alternates: { canonical: '/terms' },
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: March 2025</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the AP Marketing website and services, you accept and agree
              to be bound by these Terms of Service. If you do not agree, please do not use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
            <p>
              AP Marketing provides AI SEO, AEO, and digital marketing consulting services. The
              specific scope, deliverables, and terms of engagement are defined in individual
              service agreements or proposals provided to clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and design — is the
              property of AP Marketing and protected by applicable intellectual property laws.
              Client deliverables are governed by individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Limitation of Liability</h2>
            <p>
              AP Marketing makes no guarantees regarding specific search ranking outcomes. SEO
              results depend on many factors outside our control including search engine algorithm
              changes. Our liability is limited to the fees paid for the specific service in
              question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Governing Law</h2>
            <p>
              These terms are governed by the laws of Singapore. Any disputes shall be subject to
              the exclusive jurisdiction of the Singapore courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
            <p>
              For any questions regarding these terms, contact us at{' '}
              <a
                href="mailto:hello@apmarketing.sg"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                hello@apmarketing.sg
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

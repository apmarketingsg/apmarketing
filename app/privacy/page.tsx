import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AP Marketing privacy policy — how we collect, use, and protect your information.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12">Last updated: March 2025</p>

        <div className="space-y-10 text-slate-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
            <p>
              We collect information you voluntarily provide when submitting forms on this site,
              including your name, email address, company name, website URL, phone number, and
              message. We do not collect any sensitive personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
            <p className="mb-3">
              Information submitted through our contact form is used solely to respond to your
              inquiry and deliver the requested service (e.g., your free AI SEO Audit). We do not
              sell, trade, or share your personal information with third parties for marketing
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your
              personal data against unauthorized access, alteration, disclosure, or destruction.
              This site uses HTTPS encryption and follows security best practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
            <p>
              This website uses minimal cookies necessary for site functionality. We do not use
              third-party advertising cookies or behavioural tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or request deletion of your personal data.
              To exercise these rights, contact us at{' '}
              <a
                href="mailto:hello@apmarketing.sg"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                hello@apmarketing.sg
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
            <p>
              For privacy-related inquiries, please contact AP Marketing at{' '}
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

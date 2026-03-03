import type { Metadata } from 'next'
import { CheckCircle2, Mail, Clock, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Get Your Free AI SEO Audit',
  description:
    "Request your free AI SEO Audit. We'll identify your top ranking opportunities and deliver a personalised strategy within 5-7 business days.",
  alternates: { canonical: '/contact' },
}

const AUDIT_BENEFITS = [
  'Technical SEO health score & issue list',
  'Top 3 highest-impact ranking opportunities',
  'AEO readiness assessment',
  'Competitor gap snapshot',
  '15-minute strategy call to walk you through findings',
  'Zero obligation — just pure clarity',
]

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-white/[0.06] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
            Get Your{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Free AI SEO Audit
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Fill in the form and we&apos;ll deliver your personalised AI SEO audit and opportunity
            report within 5–7 business days — backed by a dedicated strategy call.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: benefits sidebar */}
            <aside className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-white mb-6">
                What&apos;s in Your Free Audit
              </h2>
              <ul className="space-y-4 mb-10">
                {AUDIT_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 space-y-4">
                <h3 className="text-sm font-semibold text-white">Contact Directly</h3>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Mail className="h-4 w-4 text-indigo-400 flex-shrink-0" aria-hidden="true" />
                  <a
                    href="mailto:hello@apmarketing.sg"
                    className="hover:text-white transition-colors"
                  >
                    hello@apmarketing.sg
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <Clock className="h-4 w-4 text-indigo-400 flex-shrink-0" aria-hidden="true" />
                  <span>We reply within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-400">
                  <MapPin className="h-4 w-4 text-indigo-400 flex-shrink-0" aria-hidden="true" />
                  <span>Singapore-based · Serving clients worldwide</span>
                </div>
              </div>
            </aside>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

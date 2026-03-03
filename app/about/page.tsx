import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Zap, Brain, BarChart3 } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'About AP Marketing',
  description:
    'We are a Singapore-based AI SEO agency on a mission to help ambitious businesses dominate search — both traditional and AI-powered.',
  alternates: { canonical: '/about' },
}

const VALUES = [
  {
    icon: Target,
    title: 'Results First',
    description:
      'We measure success in rankings, traffic, and leads — not vanity metrics. Every strategy is tied to business outcomes.',
  },
  {
    icon: Brain,
    title: 'AI-Native Thinking',
    description:
      "We don't bolt AI onto traditional SEO. We've rebuilt our entire methodology around how AI models understand and recommend content.",
  },
  {
    icon: Zap,
    title: 'Speed Without Shortcuts',
    description:
      'We move fast and execute with precision, but never at the expense of quality or long-term search health.',
  },
  {
    icon: BarChart3,
    title: 'Radical Transparency',
    description:
      'Every report shows exactly where you stand, what moved, why, and what happens next. No smoke, no mirrors.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-white/[0.06] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-6 md:text-5xl leading-tight">
            Built for the Future of Search —{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Not the Past
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6 max-w-3xl">
            AP Marketing is a Singapore-based AI SEO and Answer Engine Optimization agency. We
            exist for one reason: to help ambitious businesses rank on every search surface that
            matters — Google, Perplexity, SearchGPT, Claude, and whatever comes next.
          </p>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            Traditional SEO agencies are playing a game that&apos;s changing under their feet.
            AI-powered answer engines are cannibalizing click-through rates and rendering
            outdated tactics obsolete. We saw this shift coming and rebuilt our entire playbook
            around it. The result is an approach that doesn&apos;t just chase rankings — it builds
            authority that AI models trust and recommend.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/25">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.06] p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-indigo-100 leading-relaxed">
              To make AI-powered search work <em>for</em> our clients — not against them.
              We ensure that when AI engines answer questions in your market, your brand is
              the one they cite.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl">
          <h2 id="values-heading" className="text-3xl font-bold text-white mb-12 text-center md:text-4xl">
            How We Work
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-7"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/25">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 md:text-4xl">Why AP Marketing?</h2>
          <div className="prose-dark space-y-5">
            <p className="text-slate-300 leading-relaxed">
              Most SEO agencies optimise for the Google of 2020. We optimise for the search
              landscape of 2025 and beyond — where AI-generated answers are replacing blue links and
              brand citations in AI engines are the new first-page rankings.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Our proprietary AI SEO framework combines traditional technical SEO excellence
              with AEO-specific strategies: structured data that AI models can parse, E-E-A-T
              signals that build model trust, and content architecture designed to be cited in
              AI-generated answers.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Based in Singapore with clients across Southeast Asia, Australia, the UK, and the
              US, we bring a global perspective to AI search — helping businesses of all sizes
              compete and win in the new era of search.
            </p>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-all duration-200 group"
            >
              Work With Us
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to Own Your Search Presence?"
        subtitle="Start with a free AI SEO Audit and see exactly where your biggest opportunities lie."
      />
    </>
  )
}

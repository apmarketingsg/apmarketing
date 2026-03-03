import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Bot, Map, Rocket, BarChart3, CheckCircle2 } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'From free AI SEO Audit to measurable growth — learn exactly how AP Marketing delivers results in four clear phases.',
  alternates: { canonical: '/how-it-works' },
}

const PHASES = [
  {
    number: '01',
    icon: Bot,
    title: 'Free AI SEO Audit',
    subtitle: 'No cost. No commitment. Just clarity.',
    description:
      "We start by understanding your business, goals, and current search footprint. Our AI audit tool crawls your site and cross-references your presence against your top competitors. Within 5-7 business days, you receive a comprehensive report covering technical health, content gaps, AEO readiness, and your top 3 prioritised growth opportunities.",
    deliverables: [
      'Technical SEO health score',
      'AEO readiness assessment',
      'Competitor gap analysis',
      'Top 3 priority opportunities',
      '15-minute strategy call',
    ],
    color: 'from-indigo-600 to-indigo-700',
  },
  {
    number: '02',
    icon: Map,
    title: 'Custom Strategy Roadmap',
    subtitle: 'A prioritised plan built for your specific situation.',
    description:
      "Based on the audit findings, we build a custom 90-day roadmap that prioritises actions by potential impact vs effort. Every recommendation is tied to a specific business outcome — more traffic, higher-quality leads, or market share from key competitors. You know exactly what we're doing, why, and what result to expect.",
    deliverables: [
      'Prioritised 90-day action plan',
      'Content strategy & calendar',
      'Technical fix priority list',
      'AEO schema implementation plan',
      'KPIs and success benchmarks',
    ],
    color: 'from-violet-600 to-violet-700',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution',
    subtitle: 'We do the work — properly.',
    description:
      "Our team handles implementation end-to-end. That means technical fixes, content creation, schema markup, optimization of existing pages, and local SEO management — all delivered with the quality and precision that earns long-term rankings. We work within your CMS or alongside your dev team, adapting to how you work.",
    deliverables: [
      'Technical SEO implementation',
      'AEO schema markup across key pages',
      'Content optimization & creation',
      'Local SEO management (if applicable)',
      'Internal linking architecture',
    ],
    color: 'from-indigo-700 to-violet-700',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'Reporting & Iteration',
    subtitle: "Transparent reporting on what matters — not what looks good.",
    description:
      "Every month you receive a clear report covering ranking movement, organic traffic changes, lead attribution, and AEO appearances (citations in AI engines). We don't hide behind vanity metrics — you see exactly what moved, what didn't, and what we're adjusting. Strategies evolve as search evolves.",
    deliverables: [
      'Monthly performance report',
      'Ranking & traffic movement tracking',
      'AI engine citation monitoring',
      'Next-month priority actions',
      'Quarterly strategy review call',
    ],
    color: 'from-violet-700 to-indigo-600',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-white/[0.06] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
            How It{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Works
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            From free audit to measurable growth — a clear, transparent process with no
            surprises.
          </p>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-12">
          {PHASES.map((phase, i) => (
            <article
              key={phase.number}
              className="grid grid-cols-1 gap-8 md:grid-cols-5 items-start"
            >
              {/* Step number */}
              <div className="md:col-span-1 flex md:flex-col items-center md:items-start gap-4">
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${phase.color} text-white font-bold text-lg shadow-lg`}
                >
                  {phase.number}
                </div>
                {i < PHASES.length - 1 && (
                  <div className="hidden md:block h-20 w-px bg-gradient-to-b from-indigo-500/30 to-transparent ml-7 mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="md:col-span-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-7">
                <div className="mb-1 flex items-center gap-3">
                  <phase.icon className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                  <h2 className="text-xl font-bold text-white">{phase.title}</h2>
                </div>
                <p className="text-indigo-300 text-sm font-medium mb-4">{phase.subtitle}</p>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">{phase.description}</p>

                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    Deliverables
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-all duration-200 group"
          >
            Start With My Free AI SEO Audit
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTABanner
        title="Start the Process Today"
        subtitle="Your free AI SEO Audit is the first step. No commitment, just a clear picture of your biggest opportunities."
      />
    </>
  )
}

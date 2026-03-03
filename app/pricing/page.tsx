import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Sparkles, Zap } from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent AI SEO pricing for every growth stage. All packages include a free AI SEO Audit and a dedicated strategy call.',
  alternates: { canonical: '/pricing' },
}

const PLANS = [
  {
    name: 'Starter',
    price: 'SGD 1,497',
    period: '/month',
    tagline: 'Perfect for small businesses starting their SEO journey',
    features: [
      'Free AI SEO Audit (included)',
      'Technical SEO fixes (up to 20 issues)',
      'Keyword research & intent mapping',
      '4 AI-optimized content pieces/month',
      'Monthly performance report',
      'Google Business Profile setup (1×)',
      'AEO schema markup (key pages)',
      'Email support',
    ],
    cta: 'Get Started',
    href: '/contact',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'SGD 2,997',
    period: '/month',
    tagline: 'For businesses serious about dominating their niche',
    badge: 'Most Popular',
    features: [
      'Everything in Starter',
      'Full technical SEO management',
      'Advanced competitor gap analysis',
      '10 AI-optimized content pieces/month',
      'Bi-weekly performance calls',
      'Local SEO management (1 location)',
      'AEO schema markup (full site)',
      'Featured snippet targeting',
      'Priority support',
    ],
    cta: 'Get Started',
    href: '/contact',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    tagline: 'For agencies, enterprises, and high-growth companies',
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      'Unlimited content creation',
      'Custom AI SEO reporting dashboard',
      'Multi-location Local SEO',
      'Weekly strategy calls',
      'Competitor intelligence monitoring',
      'AEO citation monitoring (all AI engines)',
      'White-glove onboarding',
    ],
    cta: "Let's Talk",
    href: '/contact',
    highlighted: false,
  },
]

const FAQ = [
  {
    question: 'Is there a minimum contract length?',
    answer:
      'We offer month-to-month flexibility after an initial 3-month commitment. SEO is a long-term investment, and meaningful results typically appear within 3-6 months. We want to earn your ongoing business through results.',
  },
  {
    question: 'What is included in the free AI SEO Audit?',
    answer:
      'All packages begin with a comprehensive free AI SEO Audit covering your technical health score, top 3 ranking opportunities, AEO readiness, and competitor gaps — plus a 15-minute strategy call.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'Yes. Plans can be upgraded at any time and adjusted at the start of a new billing cycle. We\'ll work with you to ensure your plan always matches your growth stage.',
  },
  {
    question: 'Do you offer one-off projects?',
    answer:
      'We offer standalone AI SEO Audits and keyword research projects. Contact us to discuss your requirements — some projects fit better as one-offs.',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-white/[0.06] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
            Transparent{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed mb-6">
            Every plan starts with a free AI SEO Audit. No lock-ins after the initial period.
            Priced for real ROI.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/[0.07] px-4 py-1.5 text-sm font-medium text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Free AI SEO Audit included in all plans
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  plan.highlighted
                    ? 'border-indigo-500/50 bg-indigo-500/[0.08] shadow-xl shadow-indigo-500/10'
                    : 'border-white/[0.07] bg-white/[0.02]'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-md">
                      <Zap className="h-3 w-3" aria-hidden="true" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white mb-1">{plan.name}</h2>
                  <p className="text-sm text-slate-400 mb-4 leading-snug">{plan.tagline}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-slate-500 text-sm">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-indigo-300' : 'text-indigo-400'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-slate-300 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20'
                      : 'bg-white/[0.06] text-white border border-white/10 hover:bg-white/[0.10] hover:border-white/20'
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="inline-block h-4 w-4 ml-1.5" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            All prices in SGD. GST may apply for Singapore businesses.{' '}
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Contact us for custom pricing.
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/25" aria-labelledby="pricing-faq">
        <div className="mx-auto max-w-3xl">
          <h2 id="pricing-faq" className="text-2xl font-bold text-white mb-8 text-center">
            Pricing FAQs
          </h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <article
                key={i}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6"
              >
                <h3 className="font-semibold text-white mb-2">{item.question}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Start With the Free Audit"
        subtitle="Before committing to any plan, let us show you what's possible. Your free AI SEO Audit reveals your exact growth opportunities."
        ctaText="Get My Free AI SEO Audit"
      />
    </>
  )
}

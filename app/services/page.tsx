import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Bot,
  Search,
  FileEdit,
  FilePlus2,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'AI SEO Services',
  description:
    'Five focused AI SEO and AEO services to maximize your visibility in Google, Perplexity, SearchGPT, and Claude.',
  alternates: { canonical: '/services' },
}

const SERVICES = [
  {
    icon: Bot,
    name: 'AI SEO Audit & Opportunity Report',
    tagline: 'Uncover every growth opportunity your competitors have missed',
    description:
      'A comprehensive AI-driven analysis of your website covering technical SEO, content gaps, competitor weaknesses, and AEO readiness — delivered as a prioritized 90-day action roadmap.',
    highlights: [
      'Full technical crawl & health score',
      'AEO readiness assessment',
      'Competitor gap mapping',
      '90-day prioritized roadmap',
    ],
    href: '/services/ai-seo-audit',
    cta: 'Learn about AI SEO Audits',
  },
  {
    icon: Search,
    name: 'Keyword Research & Search Intent Mapping',
    tagline: 'Target the exact phrases your ideal customers are searching',
    description:
      'AI-powered keyword discovery that maps search intent to your buyer journey. We identify high-value terms traditional tools miss, including AEO and voice search opportunities.',
    highlights: [
      'Intent-mapped keyword clusters',
      'AEO & voice search opportunities',
      'Competitive gap analysis',
      'Content calendar & roadmap',
    ],
    href: '/services/keyword-research',
    cta: 'Learn about Keyword Research',
  },
  {
    icon: FileEdit,
    name: 'AI Content Optimization',
    tagline: 'Transform existing pages into traffic and conversion machines',
    description:
      'We identify your highest-leverage existing pages and upgrade them with AEO-ready structure, enhanced topical depth, E-E-A-T signals, and structured data markup.',
    highlights: [
      'AI content quality benchmarking',
      'AEO schema markup',
      'E-E-A-T enhancement',
      'Featured snippet targeting',
    ],
    href: '/services/ai-content-optimization',
    cta: 'Learn about Content Optimization',
  },
  {
    icon: FilePlus2,
    name: 'AI SEO Content Creation',
    tagline: 'New pages built to rank, answer, and convert',
    description:
      'Fully-optimized new content pages designed from the ground up for both traditional search and AI answer engines. Expert human writers, AI-accelerated research.',
    highlights: [
      'AEO-first content structure',
      'Authority-building long-form pieces',
      'Schema markup on every page',
      'Semantic & NLP optimization',
    ],
    href: '/services/ai-content-creation',
    cta: 'Learn about Content Creation',
  },
  {
    icon: MapPin,
    name: 'Local SEO Setup & Optimization',
    tagline: "Own your local market and dominate 'near me' searches",
    description:
      "Complete local SEO setup and management — from Google Business Profile optimization to citation building, review strategy, and local schema markup.",
    highlights: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review generation strategy',
      'Local schema markup',
    ],
    href: '/services/local-seo',
    cta: 'Learn about Local SEO',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-white/[0.06] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
            AI SEO{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Five focused services. One goal: maximum visibility across Google, Perplexity,
            SearchGPT, and Claude.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          {SERVICES.map((service, i) => (
            <article
              key={service.href}
              className={`rounded-2xl border p-8 transition-colors ${
                i === 0
                  ? 'border-indigo-500/30 bg-indigo-500/[0.06]'
                  : 'border-white/[0.07] bg-white/[0.02] hover:border-indigo-500/20'
              }`}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                    <service.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                    {service.tagline}
                  </p>
                  <h2 className="text-xl font-bold text-white mb-3">{service.name}</h2>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors group"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service You Need?"
        subtitle="Start with a free AI SEO Audit. We'll identify exactly which services would have the biggest impact for your business."
        ctaText="Get My Free AI SEO Audit"
        secondaryText="See how we work"
        secondaryHref="/how-it-works"
      />
    </>
  )
}

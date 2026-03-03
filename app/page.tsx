import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Bot,
  Search,
  FileEdit,
  FilePlus2,
  MapPin,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Zap,
  ChevronRight,
  BarChart3,
  Globe2,
  Shield,
  MessageSquareQuote,
} from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'AI SEO & Answer Engine Optimization Agency',
  description:
    'Rank on Google, Perplexity, SearchGPT, and Claude. AP Marketing delivers AI-powered SEO strategies that dominate the future of search.',
  alternates: { canonical: '/' },
}

// AEO-optimized FAQ schema — helps appear in AI answer engines
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Answer Engine Optimization (AEO)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Answer Engine Optimization (AEO) is the practice of optimizing your website content to appear as the preferred cited answer in AI-powered search engines like Perplexity, SearchGPT, and Claude, as well as Google's AI Overviews and featured snippets. As AI replaces traditional 10-blue-link results, AEO ensures your brand is the answer these engines recommend.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is AI SEO different from traditional SEO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI SEO combines traditional ranking signals with semantic content optimization, E-E-A-T authority building, structured data markup, and natural language processing (NLP) optimization. It ensures your content is understood and recommended by both search algorithms and AI language models.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take to show results?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO results typically appear within 3-6 months, with significant growth at the 6-12 month mark. Local SEO can show results within 30-90 days. AI-optimized content targeting featured snippets and AI answer boxes can sometimes rank within weeks of publication.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the free AI SEO Audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The free AI SEO Audit includes: a technical SEO health score, identification of your top 3 highest-impact ranking opportunities, an AEO readiness assessment, a competitor snapshot showing where you're losing ground, and a 15-minute strategy call to walk you through findings.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which AI search engines does AP Marketing optimize for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AP Marketing optimizes for Google AI Overviews, Perplexity AI, OpenAI SearchGPT, Claude (Anthropic), Microsoft Copilot, and Bing AI — ensuring your brand is cited as an authoritative source across all major AI-powered search platforms.',
      },
    },
  ],
}

const SERVICES = [
  {
    icon: Bot,
    name: 'AI SEO Audit & Opportunity Report',
    description:
      'Comprehensive AI-driven analysis revealing every technical issue, content gap, and competitive opportunity in a prioritized action roadmap.',
    href: '/services/ai-seo-audit',
  },
  {
    icon: Search,
    name: 'Keyword Research & Search Intent Mapping',
    description:
      'AI-powered keyword discovery that maps search intent to your buyer journey so every piece of content drives revenue.',
    href: '/services/keyword-research',
  },
  {
    icon: FileEdit,
    name: 'AI Content Optimization',
    description:
      "Transform your existing pages into high-ranking, AEO-ready assets that answer questions better than your competitors.",
    href: '/services/ai-content-optimization',
  },
  {
    icon: FilePlus2,
    name: 'AI SEO Content Creation',
    description:
      'Brand-new pages built from the ground up to rank in traditional search and AI answer engines simultaneously.',
    href: '/services/ai-content-creation',
  },
  {
    icon: MapPin,
    name: 'Local SEO Setup & Optimization',
    description:
      "Own 'near me' searches and dominate your local market with fully managed local SEO and Google Business Profile optimization.",
    href: '/services/local-seo',
  },
]

const STATS = [
  { value: '3.2×', label: 'Average Traffic Growth', icon: TrendingUp },
  { value: '87%', label: 'Clients Reach Page 1', icon: BarChart3 },
  { value: '50+', label: 'Businesses Scaled', icon: Globe2 },
  { value: '94%', label: 'Client Retention Rate', icon: Shield },
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Free AI SEO Audit',
    description:
      "We analyze your site, uncover your top 3 growth opportunities, and deliver an AEO readiness score — completely free, no strings attached.",
  },
  {
    number: '02',
    title: 'Custom Strategy',
    description:
      "We build a prioritized roadmap based on your goals, competition level, and the specific opportunities the audit uncovered.",
  },
  {
    number: '03',
    title: 'Execution & Results',
    description:
      "Our team executes with precision, reporting on rankings, organic traffic, and leads — the metrics that actually matter to your business.",
  },
]

const FAQS = [
  {
    question: 'What is Answer Engine Optimization (AEO)?',
    answer:
      "AEO is the practice of optimizing content to be cited and recommended by AI-powered search engines like Perplexity, SearchGPT, and Claude. As AI replaces traditional search results, businesses that don't adapt to AEO will become invisible. We ensure your brand is the answer these engines recommend.",
  },
  {
    question: 'How is AI SEO different from traditional SEO?',
    answer:
      'AI SEO combines traditional ranking signals with semantic optimization, E-E-A-T authority building, structured schema data, and NLP optimization. It future-proofs your visibility across both algorithmic rankings and AI answer generation.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Meaningful improvements typically appear within 3-6 months, with compounding growth at 6-12 months. Local SEO results arrive faster — often within 30-90 days. AI answer box appearances can happen within weeks for well-structured content.',
  },
  {
    question: "What's included in the free AI SEO Audit?",
    answer:
      "A technical health score, your top 3 ranking opportunities, an AEO readiness assessment, a competitor gap snapshot, and a dedicated 15-minute strategy call. Zero fluff, all signal.",
  },
]

const AI_ENGINES = [
  { name: 'Google AI Overview', status: 'Featured', color: 'bg-blue-500' },
  { name: 'Perplexity AI', status: 'Top Source', color: 'bg-teal-400' },
  { name: 'SearchGPT', status: 'Cited Answer', color: 'bg-emerald-500' },
  { name: 'Claude (Anthropic)', status: 'Authority Source', color: 'bg-violet-500' },
]

export default function HomePage() {
  return (
    <>
      {/* JSON-LD FAQ Schema for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        {/* Background */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#050510] via-indigo-950/10 to-[#050510]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-indigo-600/[0.07] blur-3xl" />
          <div className="absolute bottom-0 right-10 h-[350px] w-[350px] rounded-full bg-violet-600/[0.05] blur-3xl" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-4 py-1.5 text-sm font-medium text-indigo-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                AI SEO &amp; Answer Engine Optimization
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-white leading-[1.1] mb-6 md:text-6xl lg:text-7xl">
                Rank on Google.{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
                  Dominate AI Search.
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl md:text-2xl">
                We build SEO strategies that earn top rankings in traditional search{' '}
                <em>and</em> position your brand as the trusted answer in Perplexity,
                SearchGPT, and Claude.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 hover:shadow-xl transition-all duration-200 group"
                >
                  Get My Free AI SEO Audit
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-medium text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
                >
                  See How It Works
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-5 text-sm text-slate-400">
                {[
                  'No long-term contracts',
                  'Free strategy call included',
                  'Results-focused reporting',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: AI engine visual */}
            <div className="hidden xl:block">
              <div className="relative max-w-[420px] ml-auto">
                <div className="rounded-2xl border border-white/[0.08] bg-slate-900/70 backdrop-blur-sm p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="h-3 w-3 rounded-full bg-red-500/60" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <span className="h-3 w-3 rounded-full bg-green-500/60" />
                    <span className="ml-2 text-xs text-slate-600">AI Answer Engines · Your Brand</span>
                  </div>

                  <div className="space-y-2.5">
                    {AI_ENGINES.map((engine) => (
                      <div
                        key={engine.name}
                        className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.03] px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-2 w-2 rounded-full ${engine.color}`} />
                          <span className="text-sm text-slate-300">{engine.name}</span>
                        </div>
                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                          {engine.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.05] flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-indigo-400" aria-hidden="true" />
                    <span className="text-xs text-slate-500">
                      Your brand cited across every AI platform
                    </span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-6 rounded-xl border border-emerald-500/20 bg-slate-900 px-4 py-2.5 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-400">+312% organic traffic</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Client result · 8 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <section className="border-y border-white/[0.06] py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <dl className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                  <dd className="text-3xl font-bold text-white md:text-4xl">{stat.value}</dd>
                </div>
                <dt className="text-sm text-slate-500">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl">
          <header className="text-center mb-14">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/25 bg-indigo-500/[0.07] px-4 py-1.5 text-sm font-medium text-indigo-300">
              <Zap className="h-3.5 w-3.5" aria-hidden="true" />
              Our Services
            </div>
            <h2 id="services-heading" className="text-3xl font-bold text-white mb-3 md:text-4xl">
              Everything You Need to Own Search
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Five focused services designed to maximize your visibility in traditional search and
              the new generation of AI answer engines.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.href}
                icon={service.icon}
                name={service.name}
                description={service.description}
                href={service.href}
                featured={i === 0}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Explore all services in detail
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AEO EXPLAINER ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/25" aria-labelledby="aeo-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/[0.07] px-4 py-1.5 text-sm font-medium text-violet-300">
                <MessageSquareQuote className="h-3.5 w-3.5" aria-hidden="true" />
                The AEO Advantage
              </div>
              <h2 id="aeo-heading" className="text-3xl font-bold text-white mb-5 md:text-4xl leading-tight">
                Search is Changing.{' '}
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  Is Your Strategy?
                </span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-5">
                Over <strong className="text-white">50% of searches</strong> now end without a
                click. AI engines like Perplexity, SearchGPT, and Claude are replacing traditional
                results — and they rank differently.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Businesses that don&apos;t adapt to AEO will become invisible. We build content
                and schema strategies that ensure your brand is the answer these AI engines
                confidently recommend.
              </p>
              <ul className="space-y-3">
                {[
                  'Structured schema markup for AI comprehension',
                  'E-E-A-T optimization to build model trust',
                  'FAQ and Q&A content targeting AI answer boxes',
                  'Citability signals so AI engines quote your content',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison cards */}
            <div className="space-y-4">
              <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-6 opacity-60">
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
                  Old Approach: Traditional SEO
                </h3>
                <ul className="space-y-2">
                  {[
                    'Chase high-volume keyword rankings',
                    'Optimize for 10 blue links',
                    'Focus on click-through rate',
                    'Build backlink volume',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-700 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/[0.07] p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-indigo-300 uppercase tracking-wide">
                    New Approach: AI SEO + AEO
                  </h3>
                  <span className="rounded-full bg-indigo-500/20 px-2.5 py-0.5 text-xs font-medium text-indigo-300">
                    What we do
                  </span>
                </div>
                <ul className="space-y-2">
                  {[
                    'Optimize for AI answer citations',
                    'Semantic & intent-first content',
                    'Build brand authority signals',
                    'E-E-A-T & citability focus',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl">
          <header className="text-center mb-14">
            <h2 id="process-heading" className="text-3xl font-bold text-white mb-3 md:text-4xl">
              How It Works
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              From your free audit to measurable growth in three clear steps.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="relative rounded-xl border border-white/[0.07] bg-white/[0.02] p-8 text-center hover:border-indigo-500/20 transition-colors"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-bold text-xl shadow-lg shadow-indigo-500/20">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 transition-all duration-200 group"
            >
              Start With My Free Audit
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/25" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl">
          <header className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold text-white mb-3 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400">Everything you need to know about AI SEO and AEO.</p>
          </header>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <article
                key={i}
                className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6"
              >
                <h3 className="text-base font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Have more questions? Talk to our team →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <CTABanner />
    </>
  )
}

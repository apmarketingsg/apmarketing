import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

interface CTABannerProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  secondaryText?: string
  secondaryHref?: string
}

export default function CTABanner({
  title = 'Ready to Dominate AI Search?',
  subtitle =
    "Get your free AI SEO Audit and discover the exact opportunities your competitors are missing. No commitment, just clarity.",
  ctaText = 'Get My Free AI SEO Audit',
  ctaHref = '/contact',
  secondaryText = 'See how it works first',
  secondaryHref = '/how-it-works',
}: CTABannerProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 p-8 md:p-14 shadow-2xl shadow-indigo-500/25">
          {/* Background blobs */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-violet-400/20 blur-3xl" />
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-sm font-medium text-white mb-6">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Limited Spots Available Each Month
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-indigo-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-indigo-700 shadow-xl hover:bg-indigo-50 hover:shadow-white/20 transition-all duration-200 group"
              >
                {ctaText}
                <ArrowRight
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href={secondaryHref}
                className="text-sm font-medium text-indigo-100 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                {secondaryText} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

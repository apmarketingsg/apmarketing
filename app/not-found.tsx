import Link from 'next/link'
import { ArrowLeft, Zap } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
        <Zap className="h-8 w-8" aria-hidden="true" />
      </div>
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-slate-400 mb-8 max-w-sm">
        This page doesn&apos;t exist — but your SEO opportunities do.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-white hover:bg-white/[0.04] transition-colors"
        >
          Get Free Audit
        </Link>
      </div>
    </div>
  )
}

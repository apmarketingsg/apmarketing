import Link from 'next/link'
import { Zap, Twitter, Linkedin, Mail, MapPin } from 'lucide-react'

const serviceLinks = [
  { name: 'AI SEO Audit', href: '/services/ai-seo-audit' },
  { name: 'Keyword Research', href: '/services/keyword-research' },
  { name: 'AI Content Optimization', href: '/services/ai-content-optimization' },
  { name: 'AI Content Creation', href: '/services/ai-content-creation' },
  { name: 'Local SEO', href: '/services/local-seo' },
]

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050510]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 w-fit group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                AP<span className="text-indigo-400">Marketing</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-[200px]">
              AI-powered SEO & AEO for businesses ready to own the future of search.
            </p>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://twitter.com/apmarketingsg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-white transition-colors"
                aria-label="AP Marketing on Twitter / X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/company/apmarketingsg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-white transition-colors"
                aria-label="AP Marketing on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@apmarketing.sg"
                className="text-slate-600 hover:text-white transition-colors"
                aria-label="Email AP Marketing"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-600">
              <MapPin className="h-3 w-3" />
              <span>Singapore</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div>
            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.06] p-5">
              <p className="text-sm font-semibold text-white mb-1">Start with a Free Audit</p>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                No commitment. We&apos;ll show you exactly where your biggest opportunities are.
              </p>
              <Link
                href="/contact"
                className="block w-full text-center rounded-lg bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-indigo-500 transition-colors"
              >
                Get Free AI SEO Audit →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} AP Marketing Pte. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

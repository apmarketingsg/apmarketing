import Link from 'next/link'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  name: string
  description: string
  href: string
  featured?: boolean
}

export default function ServiceCard({
  icon: Icon,
  name,
  description,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div
        className={`h-full rounded-xl p-6 border transition-all duration-300 ${
          featured
            ? 'border-indigo-500/40 bg-indigo-500/[0.07] hover:border-indigo-400/60 hover:bg-indigo-500/[0.12]'
            : 'border-white/[0.07] bg-white/[0.02] hover:border-indigo-500/30 hover:bg-indigo-500/[0.05]'
        }`}
      >
        <div
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
            featured
              ? 'bg-indigo-500/20 text-indigo-300 group-hover:bg-indigo-500/30'
              : 'bg-white/[0.06] text-slate-300 group-hover:bg-indigo-500/15 group-hover:text-indigo-300'
          }`}
        >
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <h3 className="text-base font-semibold text-white mb-2 leading-snug group-hover:text-indigo-200 transition-colors duration-200">
          {name}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-5">{description}</p>

        <div className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">
          Learn more
          <ArrowRight
            className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  )
}

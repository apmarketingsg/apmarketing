import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Bot,
  Search,
  FileEdit,
  FilePlus2,
  MapPin,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import { services, getServiceBySlug } from '@/lib/services'
import CTABanner from '@/components/CTABanner'

// Map slug -> Lucide icon
const ICON_MAP: Record<string, LucideIcon> = {
  Bot,
  Search,
  FileEdit,
  FilePlus2,
  MapPin,
}

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | AP Marketing`,
      description: service.description,
    },
  }
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const Icon = ICON_MAP[service.iconName] ?? Bot

  // JSON-LD Service schema for AEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.schemaDescription,
    provider: {
      '@type': 'Organization',
      name: 'AP Marketing',
      url: 'https://apmarketing.sg',
    },
    url: `https://apmarketing.sg/services/${service.slug}`,
    areaServed: { '@type': 'Place', name: 'Singapore' },
    serviceType: 'SEO Services',
  }

  const faqSchema =
    service.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: service.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-slate-400">{service.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="border-b border-white/[0.06] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
              <Icon className="h-8 w-8" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-indigo-400 mb-1">{service.tagline}</p>
              <h1 className="text-3xl font-bold text-white md:text-4xl">{service.name}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-slate-300 leading-relaxed">{service.longDescription}</p>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
                <div className="space-y-5">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-5">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white font-bold text-sm">
                        {String(step.step).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {service.faq.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {service.faq.map((item, i) => (
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
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Benefits */}
              <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.06] p-6">
                <h2 className="text-base font-semibold text-white mb-4">What You Get</h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-slate-300 leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-6 text-center">
                <p className="text-sm font-semibold text-white mb-2">
                  Ready to Get Started?
                </p>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Start with a free AI SEO Audit to see if this service is right for your business.
                </p>
                <Link
                  href="/contact"
                  className="block w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors text-center"
                >
                  Get Free AI SEO Audit
                  <ArrowRight className="inline-block h-4 w-4 ml-1.5" aria-hidden="true" />
                </Link>
              </div>

              {/* Other services */}
              <div className="rounded-xl border border-white/[0.07] p-6">
                <p className="text-sm font-semibold text-white mb-3">Other Services</p>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                        >
                          <ArrowRight className="h-3.5 w-3.5 text-slate-600 group-hover:text-indigo-400 flex-shrink-0" aria-hidden="true" />
                          {s.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Ready for ${service.name}?`}
        subtitle="Start with a free AI SEO Audit and we'll show you exactly how this service can move the needle for your business."
      />
    </>
  )
}

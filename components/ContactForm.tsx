'use client'

import { useState, useRef } from 'react'
import { Send, Loader2, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react'
import { contactFormSchema } from '@/lib/schemas'
import type { ContactFormData } from '@/lib/schemas'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
type FieldErrors = Partial<Record<keyof ContactFormData, string>>
type TouchedFields = Partial<Record<keyof ContactFormData, boolean>>

const SERVICE_OPTIONS = [
  { value: 'ai-seo-audit', label: 'AI SEO Audit & Opportunity Report' },
  { value: 'keyword-research', label: 'Keyword Research & Intent Mapping' },
  { value: 'ai-content-optimization', label: 'AI Content Optimization' },
  { value: 'ai-content-creation', label: 'AI SEO Content Creation' },
  { value: 'local-seo', label: 'Local SEO Setup & Optimization' },
  { value: 'not-sure', label: "Not sure yet — help me figure it out" },
] as const

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [touched, setTouched] = useState<TouchedFields>({})

  const handleBlur = (field: keyof ContactFormData) =>
    setTouched((prev) => ({ ...prev, [field]: true }))

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const fd = new FormData(form)

    // Mark all fields as touched to show all errors on submit
    setTouched({
      honeypot: true,
      name: true,
      email: true,
      company: true,
      website: true,
      phone: true,
      service: true,
      message: true,
    })

    const raw = {
      honeypot: (fd.get('honeypot') as string) ?? '',
      name: (fd.get('name') as string) ?? '',
      email: (fd.get('email') as string) ?? '',
      company: (fd.get('company') as string) ?? '',
      website: (fd.get('website') as string) ?? '',
      phone: (fd.get('phone') as string) ?? '',
      service: (fd.get('service') as string) ?? '',
      message: (fd.get('message') as string) ?? '',
    }

    const result = contactFormSchema.safeParse(raw)

    if (!result.success) {
      const errors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData
        if (!errors[field]) errors[field] = issue.message
      }
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})
    setStatus('submitting')

    try {
      // Replace with your API endpoint (e.g., Resend, Formspree, or custom API route)
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(result.data),
      // })

      // Simulate network latency for MVP
      await new Promise((r) => setTimeout(r, 1200))

      setStatus('success')
      formRef.current?.reset()
      setTouched({})
    } catch {
      setStatus('error')
      setErrorMessage(
        "Something went wrong. Please try again or email us directly at hello@apmarketing.sg"
      )
    }
  }

  const fieldClass = (field: keyof ContactFormData) =>
    [
      'w-full rounded-lg border px-4 py-3 text-sm text-white placeholder-slate-600',
      'bg-slate-900/60 transition-all duration-200 outline-none',
      touched[field] && fieldErrors[field]
        ? 'border-red-500/60 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
        : 'border-white/[0.08] focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/15',
    ].join(' ')

  const FieldError = ({ field }: { field: keyof ContactFormData }) =>
    touched[field] && fieldErrors[field] ? (
      <p role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400">
        <AlertCircle className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
        {fieldErrors[field]}
      </p>
    ) : null

  /* ── Success State ─────────────────────────────────────────── */
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-10 px-4">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Audit Request Received!</h3>
        <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
          Thank you! We&apos;ll review your details and be in touch within 24 hours to kick off your
          free AI SEO Audit.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-4"
        >
          Submit another request
        </button>
      </div>
    )
  }

  /* ── Form ───────────────────────────────────────────────────── */
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Free AI SEO Audit request form"
      className="space-y-5"
    >
      {/* ── Honeypot (hidden from real users, catches bots) ─── */}
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <label htmlFor="hp_website">Website</label>
        <input
          id="hp_website"
          name="honeypot"
          type="text"
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      {/* ── Name + Email ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
            Full Name <span className="text-indigo-400" aria-label="required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={fieldClass('name')}
            onBlur={() => handleBlur('name')}
          />
          <FieldError field="name" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
            Email Address <span className="text-indigo-400" aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldClass('email')}
            onBlur={() => handleBlur('email')}
          />
          <FieldError field="email" />
        </div>
      </div>

      {/* ── Company + Website ─────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Pte Ltd"
            className={fieldClass('company')}
            onBlur={() => handleBlur('company')}
          />
          <FieldError field="company" />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-slate-300 mb-1.5">
            Website URL
          </label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://yoursite.com"
            className={fieldClass('website')}
            onBlur={() => handleBlur('website')}
          />
          <FieldError field="website" />
        </div>
      </div>

      {/* ── Phone ─────────────────────────────────────────────── */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
          Phone Number <span className="text-slate-600 text-xs font-normal">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+65 9123 4567"
          className={fieldClass('phone')}
          onBlur={() => handleBlur('phone')}
        />
        <FieldError field="phone" />
      </div>

      {/* ── Service ───────────────────────────────────────────── */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1.5">
          Service of Interest <span className="text-indigo-400" aria-label="required">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className={`${fieldClass('service')} cursor-pointer`}
          onBlur={() => handleBlur('service')}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-slate-900">
              {opt.label}
            </option>
          ))}
        </select>
        <FieldError field="service" />
      </div>

      {/* ── Message ───────────────────────────────────────────── */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Tell Us About Your Goals{' '}
          <span className="text-indigo-400" aria-label="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your website, your goals, and what challenges you're currently facing with SEO…"
          className={`${fieldClass('message')} resize-none`}
          onBlur={() => handleBlur('message')}
        />
        <FieldError field="message" />
      </div>

      {/* ── API Error ─────────────────────────────────────────── */}
      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-500/25 bg-red-500/[0.08] p-4"
        >
          <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm text-red-300">{errorMessage}</p>
        </div>
      )}

      {/* ── Submit ────────────────────────────────────────────── */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500 hover:shadow-indigo-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending your request…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Request My Free AI SEO Audit
          </>
        )}
      </button>

      {/* Trust note */}
      <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
        <ShieldCheck className="h-3.5 w-3.5 text-slate-700" aria-hidden="true" />
        <span>We reply within 24 hours · No spam, ever · No obligation</span>
      </div>
    </form>
  )
}

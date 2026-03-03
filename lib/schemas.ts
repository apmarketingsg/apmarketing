import { z } from 'zod'

// Helper: strip HTML tags to prevent XSS injection
const stripHtml = (val: string) => val.replace(/<[^>]*>/g, '').trim()

// Helper: detect script injection patterns
const noScriptInjection = (val: string) =>
  !/javascript:|data:|vbscript:|on\w+=/i.test(val)

export const contactFormSchema = z.object({
  // Honeypot: bots fill it in, humans don't see it
  honeypot: z
    .string()
    .max(0, 'Bot detected. Form submission rejected.')
    .default(''),

  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .transform(stripHtml)
    .refine((val) => /^[a-zA-Z\s\-'.]+$/.test(val), {
      message: 'Name contains invalid characters',
    }),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .transform((val) => val.toLowerCase().trim()),

  company: z
    .string()
    .max(200, 'Company name must be less than 200 characters')
    .transform(stripHtml)
    .optional()
    .or(z.literal('')),

  website: z
    .string()
    .max(2048, 'URL is too long')
    .transform((val) => val?.trim() ?? '')
    .refine(
      (val) => val === '' || /^https?:\/\/.+\..+/.test(val),
      { message: 'Please enter a valid URL including https://' }
    )
    .optional()
    .or(z.literal('')),

  phone: z
    .string()
    .max(20, 'Phone number is too long')
    .transform((val) => val?.trim() ?? '')
    .refine(
      (val) => val === '' || /^[\d\s\-+().]{7,20}$/.test(val),
      { message: 'Please enter a valid phone number' }
    )
    .optional()
    .or(z.literal('')),

  service: z.enum(
    [
      'ai-seo-audit',
      'keyword-research',
      'ai-content-optimization',
      'ai-content-creation',
      'local-seo',
      'not-sure',
    ],
    { errorMap: () => ({ message: 'Please select a service of interest' }) }
  ),

  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .transform(stripHtml)
    .refine(noScriptInjection, {
      message: 'Message contains disallowed content',
    }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Quick audit request schema (hero/inline CTAs)
export const auditRequestSchema = z.object({
  honeypot: z.string().max(0, 'Bot detected').default(''),
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100)
    .transform(stripHtml)
    .refine((val) => /^[a-zA-Z\s\-'.]+$/.test(val), {
      message: 'Name contains invalid characters',
    }),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .max(254)
    .transform((val) => val.toLowerCase().trim()),
  website: z
    .string()
    .min(1, 'Website URL is required')
    .max(2048)
    .transform((val) => val.trim())
    .refine((val) => /^https?:\/\/.+\..+/.test(val), {
      message: 'Please enter a valid website URL including https://',
    }),
})

export type AuditRequestData = z.infer<typeof auditRequestSchema>

export interface Service {
  id: string
  slug: string
  iconName: string
  name: string
  tagline: string
  description: string
  longDescription: string
  benefits: string[]
  process: { step: number; title: string; description: string }[]
  faq: { question: string; answer: string }[]
  schemaDescription: string
}

export const services: Service[] = [
  {
    id: 'ai-seo-audit',
    slug: 'ai-seo-audit',
    iconName: 'Bot',
    name: 'AI SEO Audit & Opportunity Report',
    tagline: 'Uncover every growth opportunity your competitors have missed',
    description:
      'A comprehensive AI-driven analysis of your website — covering technical SEO, content gaps, and AEO readiness — delivered as a prioritized action roadmap.',
    longDescription:
      'Our AI SEO Audit deploys advanced machine learning models to analyze your entire digital presence. We cross-reference hundreds of ranking signals — technical health, content quality, E-E-A-T signals, backlink profile, and AEO readiness — to identify exactly what\'s holding your site back and what could propel you to the top of both traditional and AI-powered search results.',
    benefits: [
      'Full technical SEO crawl with issue prioritization',
      'AI-powered content gap & opportunity analysis',
      'Competitor weakness & gap mapping',
      'Answer Engine Optimization (AEO) readiness score',
      'Core Web Vitals & performance assessment',
      'Prioritized 90-day opportunity roadmap',
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'We analyze your site, niche, goals, and top 5 competitors' },
      { step: 2, title: 'AI Analysis', description: 'Our models process 200+ data points across your digital presence' },
      { step: 3, title: 'Report Delivery', description: 'A detailed, prioritized report lands in your inbox within 5-7 days' },
      { step: 4, title: 'Strategy Call', description: 'We walk you through every finding, answer your questions, and define next steps' },
    ],
    faq: [
      {
        question: 'What is an AI SEO Audit?',
        answer: 'An AI SEO Audit uses artificial intelligence to analyze your website across hundreds of signals simultaneously — far beyond what manual audits catch. It identifies technical issues, content gaps, AEO readiness, and competitive opportunities in one comprehensive report.',
      },
      {
        question: 'How is this different from a standard SEO audit?',
        answer: 'A standard SEO audit checks a checklist of known issues. Our AI audit identifies patterns, predicts ranking opportunities, scores your content against AI quality standards, and delivers a prioritized roadmap ranked by potential impact — not just a list of problems.',
      },
      {
        question: 'How long does the audit take?',
        answer: 'Most audits are delivered within 5-7 business days, including a comprehensive report and a dedicated strategy call to discuss findings.',
      },
    ],
    schemaDescription: 'AI-powered SEO audit service that analyzes websites for technical issues, content gaps, and answer engine optimization opportunities.',
  },
  {
    id: 'keyword-research',
    slug: 'keyword-research',
    iconName: 'Search',
    name: 'Keyword Research & Search Intent Mapping',
    tagline: 'Target the exact phrases your ideal customers are searching',
    description:
      'AI-powered keyword discovery that maps search intent to your buyer journey, so every piece of content has a strategic purpose and a path to revenue.',
    longDescription:
      'Gone are the days of chasing high-volume keywords blindly. Our research identifies the specific phrases your target audience uses at every stage of their journey — informational, navigational, commercial, and transactional — and maps them to content that converts. We also identify AEO and voice search opportunities that traditional tools miss entirely.',
    benefits: [
      'Intent-mapped keyword clusters for every funnel stage',
      'AEO & voice search opportunity identification',
      'Long-tail opportunity mining (low competition, high intent)',
      'Competitive keyword gap analysis',
      'Search volume, difficulty & opportunity scoring',
      'Ready-to-use content calendar & topic roadmap',
    ],
    process: [
      { step: 1, title: 'Niche Research', description: 'We deeply study your industry, audience, and language' },
      { step: 2, title: 'AI Keyword Mining', description: 'Thousands of relevant terms uncovered and semantically clustered' },
      { step: 3, title: 'Intent Mapping', description: 'Every keyword is mapped to the correct funnel stage and content type' },
      { step: 4, title: 'Content Roadmap', description: 'You receive a complete, prioritized content strategy' },
    ],
    faq: [
      {
        question: 'What is search intent mapping?',
        answer: 'Search intent mapping means understanding WHY someone searches a term — are they researching, comparing options, or ready to buy? — and ensuring your content matches that intent exactly. Google and AI engines reward content that perfectly satisfies intent.',
      },
      {
        question: 'How many keywords will I get?',
        answer: 'Depending on your niche and package, we typically identify 300–1,500 relevant keyword opportunities, organized into strategic clusters and prioritized by potential impact.',
      },
    ],
    schemaDescription: 'Professional keyword research and search intent mapping service using AI to identify high-value ranking opportunities.',
  },
  {
    id: 'ai-content-optimization',
    slug: 'ai-content-optimization',
    iconName: 'FileEdit',
    name: 'AI Content Optimization',
    tagline: 'Transform existing pages into traffic and conversion machines',
    description:
      'We analyze your existing content against AI quality standards and enhance it for higher rankings in both traditional search and AI answer engines.',
    longDescription:
      'Your existing content is a goldmine waiting to be unlocked. We identify your highest-leverage pages — those closest to page 1 with the most conversion potential — and upgrade them with AEO-ready structure, enhanced topical depth, E-E-A-T signals, and conversion triggers. Every updated page gets proper schema markup for AI engine citability.',
    benefits: [
      'AI content quality scoring & benchmark analysis',
      'AEO schema markup implementation',
      'E-E-A-T signal strengthening',
      'Internal linking architecture optimization',
      'Featured snippet & AI answer box targeting',
      'Conversion rate optimization integration',
    ],
    process: [
      { step: 1, title: 'Content Audit', description: 'We identify your highest-impact pages ranked by opportunity score' },
      { step: 2, title: 'Gap Analysis', description: 'Each page is scored against AI quality and AEO standards' },
      { step: 3, title: 'Optimization', description: 'Content is enhanced for depth, structure, and search intent' },
      { step: 4, title: 'Schema & Publish', description: 'AEO-ready structured data is applied to all optimized pages' },
    ],
    faq: [
      {
        question: 'Which pages should be optimized first?',
        answer: 'We prioritize pages ranking on positions 8-20 (page 1-2) that have existing authority. These have the fastest ROI — small improvements push them into featured positions and dramatically increase clicks.',
      },
      {
        question: 'Will you change my brand voice?',
        answer: 'Never. We analyze and document your brand voice before making any changes, ensuring all optimized content maintains your established tone, style, and personality.',
      },
    ],
    schemaDescription: 'AI-driven content optimization service that upgrades existing website pages to rank higher in search engines and appear in AI answer boxes.',
  },
  {
    id: 'ai-content-creation',
    slug: 'ai-content-creation',
    iconName: 'FilePlus2',
    name: 'AI SEO Content Creation',
    tagline: 'New pages built to rank, answer, and convert',
    description:
      'Fully-optimized new content pages designed from the ground up to rank in Google and appear as the trusted answer in AI-powered search engines.',
    longDescription:
      "We create content that doesn't just rank — it answers. Every piece is built with AEO-first structure: proper heading hierarchy, FAQ sections, expert quotes, and structured data that helps AI models understand, trust, and recommend your content. Written by expert humans, accelerated by AI research.",
    benefits: [
      'AEO-first content structure with Q&A and FAQ sections',
      'Authority-building long-form pillar articles',
      'Landing pages optimized for conversion',
      'Schema markup on every single piece',
      'Semantic SEO & NLP optimization',
      'Internal linking to strengthen your topic clusters',
    ],
    process: [
      { step: 1, title: 'Topic Research', description: 'We identify topics with the highest traffic and business potential' },
      { step: 2, title: 'AEO Brief', description: 'Every piece is briefed with AI answer engine structure in mind' },
      { step: 3, title: 'Expert Writing', description: 'Human writers create with AI-accelerated research and optimization' },
      { step: 4, title: 'Optimize & Publish', description: 'Final QA, schema markup, internal links, and go-live' },
    ],
    faq: [
      {
        question: 'Is the content AI-generated?',
        answer: 'Our content is AI-assisted but human-led. Expert writers and editors drive every piece — AI accelerates research, identifies opportunities, and assists with structure. The result is authoritative content that no AI detector will flag.',
      },
      {
        question: 'How many pieces of content per month?',
        answer: 'Content packages start from 4 fully-optimized pieces per month, scaling based on your growth velocity and content roadmap.',
      },
    ],
    schemaDescription: 'AI-assisted SEO content creation service producing high-quality, fully optimized articles and landing pages designed for search and answer engine visibility.',
  },
  {
    id: 'local-seo',
    slug: 'local-seo',
    iconName: 'MapPin',
    name: 'Local SEO Setup & Optimization',
    tagline: "Own your local market and dominate 'near me' searches",
    description:
      "Complete local SEO setup and management to ensure your business appears in Google Maps, local packs, and AI-powered local recommendations.",
    longDescription:
      'Local search is the highest-intent traffic available to local businesses. We ensure your business is found across every relevant local touchpoint — from traditional Google Maps to AI-powered local recommendations in Perplexity and Google AI Overviews. Every element of your local presence is optimized for maximum visibility and conversion.',
    benefits: [
      'Google Business Profile optimization & management',
      'Local citation building & inconsistency cleanup',
      'Hyperlocal keyword targeting strategy',
      'NAP consistency audit & remediation',
      'Review generation & reputation strategy',
      'Local schema markup implementation',
    ],
    process: [
      { step: 1, title: 'Local Audit', description: 'We assess your current local visibility, citations, and gaps' },
      { step: 2, title: 'Profile Optimization', description: 'GBP and all major listings are fully optimized' },
      { step: 3, title: 'Citation Building', description: 'Consistent citations built across all key local directories' },
      { step: 4, title: 'Ongoing Management', description: 'Monthly monitoring, optimization, and performance reporting' },
    ],
    faq: [
      {
        question: 'How quickly can I see local SEO results?',
        answer: 'Local SEO typically shows results within 30-90 days — significantly faster than broader organic SEO. Google Business Profile optimizations can impact rankings within weeks.',
      },
      {
        question: 'Do I need a physical address for local SEO?',
        answer: 'Most effective with a physical storefront, though we also specialize in service-area businesses (SABs) that operate without a public address.',
      },
    ],
    schemaDescription: 'Complete local SEO setup and optimization service for businesses wanting to dominate local search results and Google Maps rankings.',
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export const serviceIconMap: Record<string, string> = {
  'ai-seo-audit': 'Bot',
  'keyword-research': 'Search',
  'ai-content-optimization': 'FileEdit',
  'ai-content-creation': 'FilePlus2',
  'local-seo': 'MapPin',
}

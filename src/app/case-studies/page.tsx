import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Case Studies | S.D Consultancy Healthcare Brand Success Stories',
  description: 'Explore how S.D Consultancy has transformed healthcare brands across hospital chains, diagnostics, IVF, HealthTech, and MedTech organizations.',
};

const caseStudies = [
  {
    id: 'multi-specialty-rebrand',
    category: 'Hospital Chain',
    color: '#2E75B6',
    badge: 'Brand Transformation',
    title: 'Rebranding a 12-Hospital Network: From Regional Player to National Authority',
    challenge: 'A 12-hospital network with strong regional presence was struggling to communicate a unified brand identity across locations. Each hospital had evolved independently, resulting in inconsistent patient experience, fragmented physician communications, and minimal brand equity at the network level.',
    approach: 'We deployed the full HCLF™ Framework — starting with deep market intelligence and stakeholder research across all locations, developing a unified brand architecture, and creating an integrated communications system that balanced network strength with local relevance.',
    strategy: 'Developed a master brand strategy with a clear endorsement architecture, a unified visual identity system, and a tiered communications approach — national brand campaigns building network awareness, supported by localized content and physician engagement programs at each facility.',
    results: [
      { metric: '45%', label: 'Increase in digital patient inquiries (6 months)' },
      { metric: '3x', label: 'Growth in physician referral rate across network' },
      { metric: '62%', label: 'Improvement in brand awareness in target markets' },
      { metric: '#1', label: 'Ranked brand recall in 4 key cities' },
    ],
    services: ['Brand Architecture', 'Visual Identity', 'ATL Campaigns', 'Physician Engagement', 'Digital Strategy'],
    timeline: '18 months',
  },
  {
    id: 'ivf-chain-positioning',
    category: 'IVF & Fertility',
    color: '#4F8A77',
    badge: 'Brand Positioning',
    title: 'Building a Trusted Fertility Brand: Turning Science Into Hope',
    challenge: 'A rapidly growing IVF chain with 8 centres across 3 cities was competing in an increasingly crowded fertility market. Despite strong clinical outcomes, the brand was perceived as "just another IVF clinic" — lacking the emotional differentiation and patient-centricity that fertility patients desperately seek.',
    approach: 'We began with extensive patient research — understanding the emotional journey from diagnosis through treatment, identifying the moments of fear, hope, and decision that define the fertility experience. This informed a fundamentally different approach to brand positioning.',
    strategy: 'Developed a positioning around "evidence-based hope" — combining clinical rigour with emotional intelligence. Created a comprehensive patient journey design, reoriented all communications toward the patient experience, and produced a documentary-style brand film following three patient stories.',
    results: [
      { metric: '58%', label: 'Increase in consultation bookings (year 1)' },
      { metric: '4.9/5', label: 'Average patient satisfaction score post-rebrand' },
      { metric: '40%', label: 'Growth in organic digital patient inquiries' },
      { metric: '2x', label: 'Increase in patient-generated referrals' },
    ],
    services: ['Brand Positioning', 'Patient Journey Design', 'Brand Film', 'Content Strategy', 'Digital Strategy'],
    timeline: '12 months',
  },
  {
    id: 'diagnostics-premium',
    category: 'Diagnostics Network',
    color: '#1F3A5F',
    badge: 'Premium Positioning',
    title: 'Breaking the Price War: Repositioning a Diagnostics Chain as the Premium Choice',
    challenge: 'A 25-centre diagnostics chain was caught in an intensifying price war with budget competitors. Despite superior quality, NABL accreditation, and faster turnaround times, the brand was unable to command a premium — and physician loyalty was eroding.',
    approach: 'We conducted deep research with referring physicians and patients to understand what quality truly means in diagnostics. The insight was clear: quality is not communicated by price points or discounts — it is communicated through trust, precision, and the confidence of the report.',
    strategy: 'Repositioned the brand around "diagnostic confidence" — a positioning that spoke directly to what physicians and patients most fear: the wrong result. Created a physician engagement program, redesigned all patient communications for clarity and confidence, and launched a digital-first acquisition campaign targeting corporate health check buyers.',
    results: [
      { metric: '28%', label: 'Reduction in price-based objections from physicians' },
      { metric: '35%', label: 'Growth in premium home collection bookings' },
      { metric: '15', label: 'New corporate health check accounts signed (year 1)' },
      { metric: '22%', label: 'Improvement in physician loyalty index' },
    ],
    services: ['Brand Repositioning', 'Physician Engagement', 'B2B Communications', 'Digital Strategy', 'Corporate Programs'],
    timeline: '9 months',
  },
  {
    id: 'healthtech-gtm',
    category: 'HealthTech',
    color: '#B8924A',
    badge: 'Go-to-Market Strategy',
    title: 'From MVP to Market: HealthTech B2B Go-to-Market Strategy',
    challenge: 'A HealthTech startup with a validated chronic disease management platform needed to transition from product development to market entry. The team had deep clinical and technology expertise but no healthcare market strategy, brand, or sales communications infrastructure.',
    approach: "We deployed a compressed HCLF™ process tailored for a startup — rapid market intelligence, clinical buyer persona research, competitive landscape analysis, and positioning development, culminating in a full go-to-market plan that could be executed within the startup's runway.",
    strategy: 'Developed a clinical-first brand positioning that led with outcomes data and HIPAA compliance credibility. Created a phased GTM plan starting with 3 pilot hospital partnerships, built a sales enablement kit, produced a clinical validation white paper, and launched targeted HCP communications.',
    results: [
      { metric: '3', label: 'Hospital system partnerships in first 6 months' },
      { metric: '₹2.4Cr', label: 'ARR secured in year 1' },
      { metric: '82%', label: 'Pilot-to-conversion rate among target hospitals' },
      { metric: 'Series A', label: 'Successfully raised with brand narrative alignment' },
    ],
    services: ['GTM Strategy', 'Brand Positioning', 'Sales Enablement', 'Clinical Communications', 'Investor Narrative'],
    timeline: '6 months',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#4F8A77]/40 bg-[#4F8A77]/10">
              <span className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">Case Studies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              Healthcare Brand{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">Transformations</span>
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              Real strategies, real implementations, real results. Explore how we&apos;ve helped healthcare organizations achieve market leadership across sectors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((cs, idx) => (
              <AnimatedSection key={cs.id}>
                <div className={`rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 ${idx % 2 === 0 ? 'bg-[#f8fafc] dark:bg-[#162d4a]' : 'bg-white dark:bg-[#0f1923]'}`}>
                  <div className="h-1.5 w-full" style={{ backgroundColor: cs.color }} />
                  <div className="p-8 md:p-12">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
                        style={{ color: cs.color, backgroundColor: cs.color + '15' }}>{cs.category}</span>
                      <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#1F3A5F]/10 dark:bg-white/10 text-[#1F3A5F] dark:text-white">{cs.badge}</span>
                      <span className="text-xs text-[#3A3A3A]/50 dark:text-white/40 ml-auto">Engagement: {cs.timeline}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-8 leading-tight">{cs.title}</h2>
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div>
                        <h3 className="font-semibold text-sm text-[#3A3A3A]/50 dark:text-white/40 uppercase tracking-wide mb-3">The Challenge</h3>
                        <p className="text-sm text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#3A3A3A]/50 dark:text-white/40 uppercase tracking-wide mb-3">Our Approach</h3>
                        <p className="text-sm text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed">{cs.approach}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm text-[#3A3A3A]/50 dark:text-white/40 uppercase tracking-wide mb-3">Creative Strategy</h3>
                        <p className="text-sm text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed">{cs.strategy}</p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#0f1923] rounded-2xl p-6 mb-6">
                      <div className="flex items-center gap-2 mb-5">
                        <TrendingUp className="w-5 h-5" style={{ color: cs.color }} />
                        <h3 className="font-semibold text-[#1F3A5F] dark:text-white">Results &amp; Impact</h3>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {cs.results.map((r) => (
                          <div key={r.label} className="text-center">
                            <div className="stat-number text-3xl font-bold mb-1" style={{ color: cs.color }}>{r.metric}</div>
                            <div className="text-xs text-[#3A3A3A]/60 dark:text-white/50 leading-tight">{r.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {cs.services.map((s) => (
                          <span key={s} className="text-xs px-3 py-1 rounded-full font-medium border"
                            style={{ color: cs.color, borderColor: cs.color + '30' }}>{s}</span>
                        ))}
                      </div>
                      <Link href="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white hover:-translate-y-0.5 transition-all"
                        style={{ backgroundColor: cs.color }}>
                        Discuss a Similar Project <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

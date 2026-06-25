import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Industries We Serve | S.D Consultancy Healthcare Strategy',
  description: 'Specialized healthcare brand strategy for hospital chains, specialty hospitals, diagnostics networks, IVF chains, HealthTech, and MedTech organizations.',
};

const industries = [
  {
    id: 'hospitals', emoji: '🏥', title: 'Hospital Chains', color: '#2E75B6', bg: '#DCE9F4',
    description: 'Multi-location hospital groups face unique challenges: maintaining brand coherence across sites, managing physician relationships, competing with both established players and emerging boutique specialists, and building patient loyalty in an increasingly digital-first discovery environment.',
    challenges: ['Inconsistent brand identity across locations', 'Complex multi-stakeholder communications', 'Physician recruitment and retention communications', 'Competing with specialized boutique providers', 'Balancing institutional authority with patient-centricity'],
    opportunities: ['Network strength as a competitive moat', 'Cross-referral pathway optimization', 'Institutional thought leadership building', 'Digital patient acquisition at scale'],
    outcomes: ['30-45% increase in digital patient inquiries', 'Improved physician referral rates', 'Stronger inter-location brand consistency', 'Premium positioning in key service lines'],
    services: ['Brand Architecture', 'ATL Campaigns', 'Physician Engagement', 'Digital Strategy'],
  },
  {
    id: 'specialty', emoji: '⚕️', title: 'Specialty Hospitals', color: '#4F8A77', bg: '#e8f4f0',
    description: 'Specialty hospitals and centres of excellence must communicate clinical superiority with absolute precision — to patients seeking the best care, to referring physicians evaluating options, and to payers assessing clinical quality. The stakes are high, and generic marketing simply does not work.',
    challenges: ['Communicating clinical excellence to non-clinical audiences', 'Building referral networks with general practitioners', 'Differentiating from multi-specialty competition', 'Attracting international patients in select specialties', 'KOL and specialist reputation management'],
    opportunities: ['Clinical leadership as brand equity', 'Outcome data as marketing asset', 'International patient attraction programs', 'KOL-driven thought leadership'],
    outcomes: ['Established specialty brand authority', 'Measurable increase in physician referrals', 'Premium pricing sustainability', 'National or regional brand recognition'],
    services: ['Clinical Brand Positioning', 'Physician Engagement', 'Patient Education', 'PR Strategy'],
  },
  {
    id: 'diagnostics', emoji: '🔬', title: 'Diagnostics Networks', color: '#1F3A5F', bg: '#e8eef5',
    description: 'Diagnostics is a trust-intensive, precision-dependent business where brand reputation directly correlates with growth. Whether a standalone diagnostics chain or a hospital-embedded pathology network, building a trusted diagnostics brand requires consistent quality communication across every touchpoint.',
    challenges: ['Price competition eroding brand value', 'Physician loyalty in a commoditizing market', 'Home collection and B2C digital acquisition', 'Quality perception vs. budget players', 'Report turnaround and accuracy communication'],
    opportunities: ['Quality and accuracy as premium differentiator', 'B2C digital acquisition through patient convenience', 'Corporate health check programs', 'Preventive health positioning'],
    outcomes: ['Premium positioning in target markets', 'Improved physician loyalty scores', 'Digital home-collection growth', 'Corporate client acquisition'],
    services: ['Brand Positioning', 'Digital Strategy', 'BTL Activations', 'B2B Communications'],
  },
  {
    id: 'ivf', emoji: '🌱', title: 'IVF & Fertility Chains', color: '#B8924A', bg: '#f7f0e6',
    description: 'IVF and fertility brands operate in one of the most emotionally sensitive intersections of healthcare and hope. Communications must be scientifically credible, emotionally intelligent, and deeply respectful of the vulnerability patients experience. This requires a very different approach to healthcare communications.',
    challenges: ['Balancing clinical science with emotional empathy', 'Building patient trust in an intimate, vulnerable context', 'Communicating success rates ethically and compellingly', 'Digital presence in a highly competitive market', 'Cultural sensitivity across diverse patient demographics'],
    opportunities: ['Story-driven patient testimonials and journeys', 'Thought leadership in fertility science', 'Community building for fertility patients', 'Digital-first patient acquisition programs'],
    outcomes: ['Trusted fertility brand identity', 'Increased consultation bookings', 'Strong patient community and advocacy', 'Ethical differentiation on outcomes'],
    services: ['Sensitive Brand Positioning', 'Patient Journey Design', 'Content Strategy', 'Community Programs'],
  },
  {
    id: 'healthtech', emoji: '💻', title: 'HealthTech Companies', color: '#2E75B6', bg: '#DCE9F4',
    description: 'HealthTech companies face a dual challenge: communicating complex technology to clinical buyers who prioritize evidence over hype, while simultaneously building consumer-facing brands that drive patient adoption. Adding regulatory complexity and funding-stage considerations makes HealthTech branding uniquely demanding.',
    challenges: ['Translating technology into clinical value', 'B2B clinical buyer acquisition vs. B2C patient growth', 'Building trust in a nascent regulatory environment', 'Competing for attention in a crowded digital health market', 'Aligning investor narrative with brand strategy'],
    opportunities: ['First-mover advantage in emerging digital health categories', 'Clinical validation as brand equity', 'Partnership with hospital systems and clinics', 'Patient adoption through behaviour design'],
    outcomes: ['Credible clinical brand positioning', 'Accelerated B2B sales pipeline', 'Patient app adoption and retention', 'Investor-aligned brand narrative'],
    services: ['Go-to-Market Strategy', 'Clinical Communications', 'Digital Brand', 'Investor Relations Comms'],
  },
  {
    id: 'medtech', emoji: '🧬', title: 'MedTech Organizations', color: '#4F8A77', bg: '#e8f4f0',
    description: 'MedTech organizations operate at the intersection of engineering excellence and clinical adoption — where the best technology wins only if it is communicated effectively to the right physician at the right time. MedTech marketing requires deep HCP understanding, market access communications, and brand credibility in highly regulated environments.',
    challenges: ['HCP education on new devices and technologies', 'Market access and reimbursement communications', 'KOL development and clinical champion programs', 'Regulatory constraint on promotional claims', 'Global brand with local clinical needs'],
    opportunities: ['Clinical data as brand asset', 'Surgical training and certification programs', 'Regional KOL development programs', 'Hospital procurement communications'],
    outcomes: ['Accelerated clinical adoption', 'Established HCP thought leadership', 'Improved market access outcomes', 'Stronger distributor and channel brand'],
    services: ['HCP Communications', 'KOL Programs', 'Clinical Education', 'Market Access Strategy'],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#4F8A77]/40 bg-[#4F8A77]/10">
              <span className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">Industries We Serve</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              Deep Expertise Across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">Healthcare Verticals</span>
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">We bring specialized knowledge, proven strategies, and sector-specific insights to every healthcare vertical we serve.</p>
          </AnimatedSection>
          <AnimatedSection delay={200} className="mt-10 flex flex-wrap gap-3">
            {industries.map((ind) => (
              <a key={ind.id} href={`#${ind.id}`} className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors">
                <span>{ind.emoji}</span>
                {ind.title}
              </a>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {industries.map((ind, idx) => (
        <section key={ind.id} id={ind.id} className={`py-24 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0f1923]' : 'bg-[#f8fafc] dark:bg-[#0d1520]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{ind.emoji}</span>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: ind.color }}>Industry Focus</div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F3A5F] dark:text-white">{ind.title}</h2>
                  </div>
                </div>
                <p className="text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed mb-8">{ind.description}</p>
                <div className="mb-6">
                  <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-3">Typical Outcomes</h3>
                  <div className="space-y-2">
                    {ind.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: ind.color }} />
                        <span className="text-sm text-[#3A3A3A]/70 dark:text-white/65">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-3">Relevant Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {ind.services.map((s) => (
                      <span key={s} className="text-xs px-3 py-1.5 rounded-full font-medium" style={{ color: ind.color, backgroundColor: ind.color + '12' }}>{s}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl font-semibold text-white hover:-translate-y-0.5 transition-all" style={{ backgroundColor: ind.color }}>
                  Discuss Your {ind.title} Strategy
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={200}>
                <div className="grid gap-4">
                  <div className="bg-white dark:bg-[#162d4a] rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                    <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ind.color }} />
                      Key Challenges We Solve
                    </h3>
                    <ul className="space-y-3">
                      {ind.challenges.map((c) => (
                        <li key={c} className="text-sm text-[#3A3A3A]/70 dark:text-white/60 flex items-start gap-2">
                          <span className="text-red-400 mt-0.5">→</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-[#162d4a] rounded-2xl p-6 border border-gray-100 dark:border-white/5">
                    <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#4F8A77]" />
                      Strategic Opportunities
                    </h3>
                    <ul className="space-y-3">
                      {ind.opportunities.map((o) => (
                        <li key={o} className="text-sm text-[#3A3A3A]/70 dark:text-white/60 flex items-start gap-2">
                          <span style={{ color: ind.color }}>→</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <ContactCTA />
    </>
  );
}

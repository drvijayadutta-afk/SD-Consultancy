import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, TrendingDown, Sparkles, Scale } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { accentText } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Overview | SD Square Consulting Healthcare Growth & AI Strategy',
  description:
    'A one-page brief on how SD Square Consulting helps hospitals, specialty chains, and healthcare startups convert digital investment into patient volume using the HCLF™ methodology.',
};

const stats = [
  { num: '10+ yrs', label: 'Inside enterprise hospital marketing at Manipal Hospitals and Max Healthcare' },
  { num: 'HCLF™', label: 'Proprietary Healthcare Communications & Leadership Framework, six phases' },
  { num: 'Clinical +', label: 'Strategic dual lens: BDS clinical training, MBA & IIM-B Brand Management' },
  { num: '4', label: 'Core engagement programs, scoped to your growth stage' },
];

const problems = [
  { title: 'Digital spend without a conversion system', desc: "Marketing budgets are active, but enquiries don't translate into booked appointments, because no one owns the funnel between click and consult." },
  { title: 'Doctor and brand identity are invisible', desc: 'Specialists with genuine expertise have no digital presence proportional to their clinical standing, ceding authority to competitors online.' },
  { title: 'Fragmented martech, no single view', desc: 'Website, ads, CRM, and reputation platforms operate in isolation, so leadership cannot see what is actually driving footfall.' },
  { title: 'AI and automation sit unused', desc: 'Tools exist to cut response time and staff load, but without a healthcare-specific rollout plan, they remain unadopted.' },
];

const services = [
  { idx: '01', tag: 'Evidence', title: 'Market & Business Intelligence', desc: 'Primary research with patients, physicians, and administrators, competitive positioning, and a digital maturity baseline, so every decision that follows is grounded in evidence, not assumption.', color: '#25405F' },
  { idx: '02', tag: 'Position', title: 'Brand Positioning', desc: 'A positioning statement, value proposition, and messaging framework that is clinically credible and commercially powerful, tested with the audiences it needs to convince.', color: '#3E5776' },
  { idx: '03', tag: 'Ecosystem', title: 'Stakeholder Ecosystem Design', desc: "Physician KOL mapping, patient journey design, and referral pathway optimisation, tailored engagement strategies for every group that influences a patient's decision.", color: '#101E36' },
  { idx: '04', tag: 'Activate', title: 'Integrated Communications Strategy', desc: 'ATL, BTL, and digital strategy unified into one channel mix, message architecture, and content plan, so every touchpoint — from mass media to physician events to digital — reinforces the same brand story.', color: '#E8E0CB' },
  { idx: '05', tag: 'Create', title: 'Creative Strategy & Production', desc: 'Creative production — films, campaigns, and visual identity systems — that carries the strategy with emotional resonance while holding clinical credibility and brand consistency.', color: '#25405F' },
  { idx: '06', tag: 'Govern', title: 'Measurement & Governance', desc: 'KPI frameworks, brand health tracking, and quarterly governance reviews that keep the investment accountable and the brand on track over time.', color: '#3E5776' },
];

const deliverables = [
  { phase: 'Intelligence & Positioning', items: ['Competitive Landscape Report', 'Market Opportunity Assessment', 'Brand Positioning Statement', 'Messaging Matrix'] },
  { phase: 'Ecosystem & Communications', items: ['Stakeholder Ecosystem Map', 'Patient Journey Blueprint', 'Integrated Communications Plan', 'Content Strategy Framework'] },
  { phase: 'Creative & Governance', items: ['Brand Film Production', 'Visual Identity Guidelines', 'Brand KPI Framework', 'Performance Dashboard'] },
];

const benefits = [
  { icon: TrendingUp, title: 'Patient Acquisition', desc: 'A funnel engineered to convert enquiry into booked appointment, not just traffic.', color: '#25405F' },
  { icon: TrendingDown, title: 'Cost Per Patient', desc: 'Spend consolidated around what is proven to convert, cutting waste on unmeasured channels.', color: '#3E5776' },
  { icon: Sparkles, title: 'Brand Authority', desc: 'Institutional and doctor-level positioning that reflects genuine clinical standing.', color: '#E8E0CB' },
  { icon: Scale, title: 'Executive Visibility', desc: 'One dashboard leadership can trust, replacing fragmented channel reporting.', color: '#101E36' },
];

const credentials = [
  { label: 'BDS (Dental Surgery)', sub: 'Clinical foundation informing every strategic recommendation', color: '#25405F' },
  { label: 'MBA (in progress), MAHE Manipal', sub: 'Formal business and strategy grounding', color: '#3E5776' },
  { label: 'Brand Management, IIM Bangalore', sub: 'Executive-level brand strategy credential', color: '#E8E0CB' },
  { label: 'Outstanding Performance Award, Max Healthcare (2023)', sub: 'Delhi NCR marketing leadership', color: '#101E36' },
];

const process = [
  { n: '1', title: 'Discovery Call', desc: 'Understand your growth objectives, current position, and stakeholders.' },
  { n: '2', title: 'Framework Scoping', desc: 'Map how the six HCLF™ phases apply to your specific goals and timeline.' },
  { n: '3', title: 'Phased Execution', desc: 'Market Intelligence through Creative Development, delivered phase by phase.' },
  { n: '4', title: 'Activation', desc: 'Campaigns, content, and stakeholder programmes go live across channels.' },
  { n: '5', title: 'Governance & Review', desc: 'Quarterly tracking against the Brand KPI Framework, with iterative optimisation.' },
];

export default function OverviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#3E5776]/40 bg-[#3E5776]/10">
              <span className="text-[#8393a7] text-xs font-semibold tracking-widest uppercase">One-Page Overview</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              Healthcare growth, engineered, not{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3E5776] to-[#E8E0CB]">
                guessed at
              </span>.
            </h1>
            <p className="text-lg text-white/65 leading-relaxed max-w-2xl">
              SD Square Consulting helps hospitals, specialty chains, and healthcare startups convert digital investment into patient volume, using the HCLF™ methodology, a diagnostic-led framework built on a decade inside India&apos;s leading hospital networks.
            </p>
            <div className="mt-8 flex items-center gap-6 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#101E36] to-[#25405F] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#25405F]/30 hover:-translate-y-1 transition-all"
              >
                Book a Growth Diagnostic
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-white/55 text-sm">30-minute call · No obligation</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150} className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.num} className="bg-white/[0.04] p-6">
                <div className="font-heading text-2xl font-bold text-white mb-2">{s.num}</div>
                <div className="text-xs text-white/55 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white dark:bg-[#0f1923]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-[var(--text-gold)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Value Proposition</div>
            <p className="text-xl md:text-2xl leading-relaxed text-[#3A3A3A] dark:text-white/85">
              Most hospitals and healthcare brands are not short of marketing activity; they are short of a system that turns that activity into patients.{' '}
              <strong className="text-[#101E36] dark:text-white font-semibold">
                SD Square Consulting diagnoses where your growth engine is leaking, rebuilds the brand and digital architecture around it, and installs the operating rhythm to keep it converting
              </strong>
              , without the generic playbooks that agencies repurpose from unrelated industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Problem"
            title="The growth issues we're consistently called in to fix"
            subtitle="Patterns observed across specialty hospitals, IVF centres, dental chains, and cosmetic and dermatology practices."
            className="mb-14"
          />
          <div className="grid md:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 80}>
                <div className="bg-white dark:bg-[#162d4a] rounded-2xl p-7 border border-gray-100 dark:border-white/5 h-full">
                  <h3 className="font-bold font-heading text-[#101E36] dark:text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-[#3A3A3A]/75 dark:text-white/55 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Services"
            title="Six phases, one methodology"
            subtitle="Every engagement runs on HCLF™, from evidence to impact."
            className="mb-14"
          />
          <div className="space-y-4">
            {services.map((s, i) => (
              <AnimatedSection key={s.idx} delay={i * 80}>
                <div className="grid md:grid-cols-[64px_1fr_1.4fr] gap-4 md:gap-8 items-start p-6 rounded-2xl border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-lg hover:shadow-[#25405F]/8 transition-all duration-300">
                  <div className="font-mono text-sm font-bold" style={{ color: accentText(s.color) }}>{s.idx}</div>
                  <div>
                    <h3 className="font-bold font-heading text-[#101E36] dark:text-white text-lg mb-1">{s.title}</h3>
                    <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: accentText(s.color) }}>{s.tag}</div>
                  </div>
                  <p className="text-sm text-[#3A3A3A]/75 dark:text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Deliverables" title="What leadership walks away with" className="mb-14" />
          <div className="grid md:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <AnimatedSection key={d.phase} delay={i * 100}>
                <div className="border-t-2 border-[#101E36] dark:border-[#3E5776] pt-5">
                  <div className="font-heading font-bold text-[#101E36] dark:text-white mb-4">{d.phase}</div>
                  <ul className="space-y-2.5">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#3A3A3A]/75 dark:text-white/55">
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 bg-[#3E5776]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Benefits" title="What changes for your organisation" className="mb-14" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 100}>
                <div className="bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl p-6 border border-gray-100 dark:border-white/5 h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: b.color + '15' }}>
                    <b.icon className="w-5 h-5" style={{ color: accentText(b.color) }} />
                  </div>
                  <div className="font-bold font-heading text-[#101E36] dark:text-white text-sm mb-2">{b.title}</div>
                  <p className="text-xs text-[#3A3A3A]/75 dark:text-white/55 leading-relaxed">{b.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why SD Square Consulting" title="A strategist who has sat inside the hospital, not just outside it" className="mb-14" />
          <div className="grid lg:grid-cols-2 gap-14">
            <AnimatedSection className="space-y-5 text-[#3A3A3A]/75 dark:text-white/60 leading-relaxed">
              <p>
                Most agencies advising healthcare brands have never sat inside a hospital marketing function. Dr. Vijaya Dutta has, leading marketing across Manipal Hospitals&apos; South and South-East region and Max Healthcare&apos;s Delhi NCR cluster, where clinical stakes, doctor relationships, and patient trust shape every decision differently than in any other industry.
              </p>
              <p>
                That experience, combined with a clinical (BDS) foundation and formal brand strategy training, is codified into HCLF™, a six-phase framework built specifically for healthcare, not adapted from consumer marketing.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" className="bg-white dark:bg-[#162d4a] rounded-2xl p-8 border-l-4 border-[#E8E0CB]">
              <div className="text-xs font-bold tracking-widest uppercase text-[#101E36] dark:text-white mb-5">Credentials</div>
              <div className="space-y-0">
                {credentials.map((c, i) => (
                  <div key={c.label} className={`py-4 ${i !== 0 ? 'border-t border-gray-100 dark:border-white/10' : ''}`}>
                    <div className="text-sm font-semibold text-[#101E36] dark:text-white">{c.label}</div>
                    <div className="text-xs text-[#3A3A3A]/75 dark:text-white/55 mt-1">{c.sub}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Engagement Process" title="How an engagement runs, start to finish" className="mb-16" />
          <div className="grid md:grid-cols-5 gap-6 relative">
            <div className="hidden md:block absolute top-[15px] left-0 right-0 h-px bg-gray-200 dark:bg-white/10" />
            {process.map((p, i) => (
              <AnimatedSection key={p.n} delay={i * 80} className="relative">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-[#0f1923] border-2 border-[#101E36] dark:border-[#3E5776] flex items-center justify-center text-xs font-bold font-mono text-[#101E36] dark:text-white mb-4 relative z-10">
                  {p.n}
                </div>
                <h3 className="font-bold font-heading text-[#101E36] dark:text-white text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-[#3A3A3A]/75 dark:text-white/55 leading-relaxed">{p.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[#101E36] to-[#162d4a] rounded-3xl p-10 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mb-3">Investment</h2>
                <p className="text-white/60 leading-relaxed max-w-xl">
                  Engagements are scoped following the Growth Diagnostic and sized to your organisation&apos;s stage: single facility, multi-location chain, or new healthcare venture.
                </p>
              </div>
              <div className="text-left md:text-right flex-shrink-0">
                <div className="font-heading font-bold text-[#E8E0CB]">Growth Diagnostic — scoped on call</div>
                <div className="text-white/55 text-sm mt-1">Full engagement pricing on scoping call</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

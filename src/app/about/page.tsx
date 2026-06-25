import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Award, CheckCircle2, Stethoscope } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'About S.D Consultancy | Founded by a Doctor, Built for Healthcare Leaders',
  description: 'S.D Consultancy was founded in 2026 by a doctor with a decade of frontline healthcare marketing expertise. Learn about our story, mission, and approach.',
};

const values = [
  { icon: Target, title: 'Strategic Precision', desc: 'Every recommendation is grounded in data, market intelligence, and sector expertise.' },
  { icon: Award, title: 'Clinical Understanding', desc: 'Founded by a doctor, we speak the language of healthcare professionals and patients alike.' },
  { icon: Heart, title: 'Purpose-Driven Creativity', desc: 'Creative excellence in service of meaningful healthcare outcomes.' },
  { icon: Eye, title: 'Long-Term Partnership', desc: 'We invest in your growth as a true strategic partner, not a vendor.' },
];

const timeline = [
  { year: '2016', event: 'Began clinical career as an MBBS doctor, simultaneously developing a deep fascination with healthcare communications and patient decision-making' },
  { year: '2018', event: 'Transitioned into healthcare marketing, bringing clinical credibility to brand strategy for hospitals and diagnostics networks' },
  { year: '2020', event: 'Developed the foundational thinking for the HCLF™ Framework — a first-of-its-kind methodology for healthcare brand strategy' },
  { year: '2022', event: 'Led integrated brand and communications programs across IVF, HealthTech, and MedTech sectors, expanding sector expertise' },
  { year: '2024', event: 'Refined the HCLF™ Framework through 30+ client engagements, building a proprietary approach to healthcare market leadership' },
  { year: '2026', event: 'Founded S.D Consultancy — India’s first doctor-founded 360° healthcare brand and communications strategy consultancy' },
];

const pillars = [
  'Clinical Fluency — We understand healthcare from the inside out',
  'Integrated Thinking — Strategy, communications, and creative as one',
  'Strategy Before Channels — Deep insight precedes every tactic',
  'Creative With Purpose — Imagination harnessed for measurable outcomes',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#4F8A77]/40 bg-[#4F8A77]/10">
              <span className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">About S.D Consultancy</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
              Founded by a Doctor.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">
                Built for Healthcare Leaders.
              </span>
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              S.D Consultancy is India’s first doctor-founded 360° healthcare brand, communications, and creative strategy consultancy — bringing clinical insight to every strategy we build.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Card */}
      <section className="py-16 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[#1F3A5F] to-[#162d4a] rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2E75B6]/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4F8A77]/15 rounded-full blur-[60px]" />
              <div className="relative grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#4F8A77]/20 border border-[#4F8A77]/40 flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-[#4F8A77]" />
                    </div>
                    <div>
                      <div className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">Founder & Chief Strategist</div>
                      <div className="text-white font-bold text-lg font-heading">Dr. S.D., MBBS</div>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6">
                    A practising doctor who discovered that the gap between clinical excellence and market recognition was costing healthcare organizations patients, partnerships, and potential. With a decade of frontline healthcare marketing experience across hospitals, diagnostics, IVF, HealthTech, and MedTech, Dr. S.D. founded this consultancy in 2026 to bridge that gap — permanently.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    The result is a consultancy that doesn’t just understand healthcare marketing — it understands healthcare. Every strategy we build is filtered through clinical understanding that generalist agencies simply cannot replicate.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '10+', label: 'Years in Healthcare', color: '#4F8A77' },
                    { value: '50+', label: 'Projects Delivered', color: '#B8924A' },
                    { value: 'MBBS', label: 'Clinical Credential', color: '#2E75B6' },
                    { value: '2026', label: 'Founded', color: '#4F8A77' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                      <div className="stat-number text-3xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                      <div className="text-xs text-white/50">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                label: 'Our Mission',
                color: '#2E75B6',
                text: 'To help healthcare organizations build stronger brands, deeper stakeholder trust, and sustainable market leadership through integrated strategy, communications, and creative excellence.',
              },
              {
                icon: Eye,
                label: 'Our Vision',
                color: '#4F8A77',
                text: 'To be the most trusted strategic partner for healthcare organizations across South Asia — known for clinical understanding, strategic rigor, and creative impact that transforms healthcare brands.',
              },
              {
                icon: Heart,
                label: 'Brand Promise',
                color: '#B8924A',
                text: "We bring the strategic depth of a management consultancy, the communication expertise of a healthcare agency, and the creative energy of a world-class studio — all in service of your brand's growth.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 120}>
                <div className="bg-white dark:bg-[#162d4a] rounded-2xl p-8 border border-gray-100 dark:border-white/5 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: item.color + '15' }}>
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: item.color }}>{item.label}</div>
                  <p className="text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionHeader
              eyebrow="Our Strategic Approach"
              title="Why Healthcare Expertise Matters"
              subtitle="Healthcare is one of the most regulated, trust-sensitive, and stakeholder-complex sectors in the world. Generic marketing doesn't work here."
            />
            <AnimatedSection direction="right">
              <div className="space-y-4">
                {pillars.map((pillar, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-[#f8fafc] dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-[#4F8A77] mt-0.5 flex-shrink-0" />
                    <p className="text-[#3A3A3A] dark:text-white/80 font-medium">{pillar}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Stand For" title="Our Core Values" centered className="mb-14" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="bg-white dark:bg-[#162d4a] rounded-2xl p-7 border border-gray-100 dark:border-white/5 card-hover text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#DCE9F4] dark:bg-[#2E75B6]/20 flex items-center justify-center mx-auto mb-5">
                    <v.icon className="w-7 h-7 text-[#2E75B6]" />
                  </div>
                  <h3 className="font-bold font-heading text-[#1F3A5F] dark:text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-[#3A3A3A]/65 dark:text-white/55 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-br from-[#1F3A5F] to-[#0f1923]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="The Founder's Journey" title="A Decade of Healthcare Mastery" centered light className="mb-16" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year} delay={i * 100}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 hidden md:block" />
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#2E75B6] border-4 border-[#0f1923] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                      <div className="text-[#B8924A] font-bold font-mono text-sm mb-2">{item.year}</div>
                      <p className="text-white/75 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

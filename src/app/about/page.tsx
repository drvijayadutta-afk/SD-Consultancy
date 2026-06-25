import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Award, CheckCircle2, Stethoscope } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'About S.D Consultancy | Healthcare Brand Strategy Experts',
  description: 'Learn about S.D Consultancy — founded by a doctor with 10 years of healthcare marketing expertise. India\'s premier 360° healthcare brand strategy consultancy.',
};

const values = [
  { icon: Target, title: 'Strategic Precision', desc: 'Every recommendation is grounded in data, market intelligence, and sector expertise.' },
  { icon: Award, title: 'Clinical Understanding', desc: 'Founded by a doctor who speaks the language of healthcare professionals and patients alike.' },
  { icon: Heart, title: 'Purpose-Driven Creativity', desc: 'Creative excellence in service of meaningful healthcare outcomes.' },
  { icon: Eye, title: 'Long-Term Partnership', desc: 'We invest in your growth as a true strategic partner, not a vendor.' },
];

const timeline = [
  { year: '2016', event: 'Dr. S.D. began a career in healthcare marketing after years in clinical practice — identifying the critical gap between clinical excellence and strategic communications' },
  { year: '2018', event: 'Led brand strategy for a multi-specialty hospital network, achieving a 40% increase in patient acquisition through integrated ATL and digital campaigns' },
  { year: '2020', event: 'Expanded expertise into IVF, Diagnostics, and HealthTech — developing unique communication frameworks for emotionally sensitive healthcare contexts' },
  { year: '2022', event: 'Developed the foundational principles of the HCLF™ Framework after working across 20+ healthcare organizations' },
  { year: '2024', event: 'Built an extended team of healthcare strategists, creatives, and digital specialists to serve complex multi-location healthcare brands' },
  { year: '2026', event: 'Founded S.D Consultancy — bringing a decade of frontline healthcare marketing expertise into a dedicated 360° healthcare brand strategy consultancy' },
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
              S.D Consultancy is India&apos;s premier 360° healthcare brand, communications, and creative strategy consultancy — founded in 2026 by a doctor with a decade of frontline healthcare marketing experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeader eyebrow="Our Story" title="A Doctor Who Chose Strategy" />
              <div className="mt-6 space-y-5 text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed">
                <p>
                  S.D Consultancy was founded by a medical doctor who recognized a critical truth: India&apos;s healthcare sector was full of extraordinary clinical talent — but organizations consistently struggled to translate that excellence into market leadership.
                </p>
                <p>
                  After a decade working at the intersection of clinical practice and healthcare marketing, our founder built the HCLF™ Framework — a proprietary methodology grounded in clinical understanding and strategic rigor that no generalist agency could replicate.
                </p>
                <p>
                  Founded in 2026, S.D Consultancy brings together that rare combination of medical credibility, strategic depth, and creative excellence — built specifically to serve healthcare organizations that demand more than conventional marketing.
                </p>
              </div>

              {/* Founder badge */}
              <div className="mt-8 flex items-center gap-4 p-5 bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl border border-gray-100 dark:border-white/5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1F3A5F] to-[#2E75B6] flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#1F3A5F] dark:text-white font-heading">Dr. S.D.</div>
                  <div className="text-sm text-[#4F8A77] font-medium">Founder & Chief Strategy Officer</div>
                  <div className="text-xs text-[#3A3A3A]/50 dark:text-white/40 mt-0.5">MBBS · 10 Years Healthcare Marketing · Founded 2026</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '10+', label: 'Years of Expertise', color: '#2E75B6' },
                  { value: '50+', label: 'Projects Delivered', color: '#4F8A77' },
                  { value: '6', label: 'Healthcare Verticals', color: '#B8924A' },
                  { value: '98%', label: 'Client Retention', color: '#1F3A5F' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl p-6 text-center border border-gray-100 dark:border-white/5 hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="stat-number text-4xl font-bold mb-2" style={{ color: stat.color }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#3A3A3A]/60 dark:text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
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
                <div className="bg-white dark:bg-[#162d4a] rounded-2xl p-8 border border-gray-100 dark:border-white/5 h-full hover:-translate-y-1 transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: item.color + '15' }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: item.color }}>
                    {item.label}
                  </div>
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
              title="Why a Doctor-Founded Consultancy is Different"
              subtitle="Healthcare is one of the most regulated, trust-sensitive, and stakeholder-complex sectors in the world. Generic marketing doesn't work here — and neither do agencies without clinical credibility."
            />
            <AnimatedSection direction="right">
              <div className="space-y-4">
                {pillars.map((pillar, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-[#f8fafc] dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#2E75B6]/30 transition-all duration-300">
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
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Core Values"
            centered
            className="mb-14"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="bg-white dark:bg-[#162d4a] rounded-2xl p-7 border border-gray-100 dark:border-white/5 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2E75B6]/10 transition-all duration-300 text-center">
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
          <SectionHeader eyebrow="A Decade of Dedication" title="The Journey to S.D Consultancy" centered light className="mb-16" />
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
                    <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
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

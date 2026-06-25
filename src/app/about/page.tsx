import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Award, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'About S.D Consultancy | Healthcare Brand Strategy Experts',
  description: 'Learn about S.D Consultancy — our story, mission, vision, and why we are the premier healthcare brand strategy consultancy in India.',
};

const values = [
  { icon: Target, title: 'Strategic Precision', desc: 'Every recommendation is grounded in data, market intelligence, and sector expertise.' },
  { icon: Award, title: 'Clinical Understanding', desc: 'We speak the language of healthcare professionals and patients alike.' },
  { icon: Heart, title: 'Purpose-Driven Creativity', desc: 'Creative excellence in service of meaningful healthcare outcomes.' },
  { icon: Eye, title: 'Long-Term Partnership', desc: 'We invest in your growth as a true strategic partner, not a vendor.' },
];

const timeline = [
  { year: '2008', event: 'Founded with a mission to bring strategic consulting excellence to Indian healthcare' },
  { year: '2012', event: 'Developed the proprietary HCLF™ Framework — a first-of-its-kind for healthcare communications' },
  { year: '2015', event: 'Expanded services to IVF, Diagnostics, and HealthTech sectors' },
  { year: '2018', event: 'Launched integrated digital strategy practice for healthcare organizations' },
  { year: '2021', event: 'Partnered with 50+ healthcare organizations across India' },
  { year: '2024', event: 'Launched MedTech communications practice and AI-driven analytics offerings' },
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
              Built for Healthcare.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">
                Designed for Leaders.
              </span>
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              S.D Consultancy is India&apos;s premier 360° healthcare brand, communications, and creative strategy consultancy — helping healthcare organizations transform expertise into market leadership.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionHeader eyebrow="Our Story" title="A Consultancy Born from Healthcare" />
              <div className="mt-6 space-y-5 text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed">
                <p>
                  S.D Consultancy was founded on a simple but powerful observation: the healthcare sector was full of extraordinary clinical talent, innovative technologies, and genuine commitment to patient welfare — but organizations struggled to translate this excellence into market leadership.
                </p>
                <p>
                  We saw a gap between clinical capability and strategic communication. Between what healthcare organizations could do and what their stakeholders understood about them. Between exceptional care and the recognition it deserved.
                </p>
                <p>
                  We built S.D Consultancy to bridge that gap — with a team that thinks strategically, communicates precisely, and creates compellingly. Not as a generalist agency that occasionally works in healthcare, but as a specialist consultancy that lives and breathes it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '15+', label: 'Years in Healthcare', color: '#2E75B6' },
                  { value: '200+', label: 'Projects Delivered', color: '#4F8A77' },
                  { value: '50+', label: 'Organizations Served', color: '#B8924A' },
                  { value: '98%', label: 'Client Retention', color: '#1F3A5F' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl p-6 text-center border border-gray-100 dark:border-white/5"
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
                <div className="bg-white dark:bg-[#162d4a] rounded-2xl p-8 border border-gray-100 dark:border-white/5 h-full">
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
          <SectionHeader
            eyebrow="What We Stand For"
            title="Our Core Values"
            centered
            className="mb-14"
          />
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
          <SectionHeader eyebrow="Our Journey" title="Two Decades of Healthcare Excellence" centered light className="mb-16" />
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

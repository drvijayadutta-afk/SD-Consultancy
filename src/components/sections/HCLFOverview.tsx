import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const phases = [
  { num: '01', title: 'Market & Business Intelligence', color: '#2E75B6', desc: 'Deep market analysis, competitive landscape, and stakeholder mapping' },
  { num: '02', title: 'Brand Positioning',              color: '#4F8A77', desc: 'Distinctive positioning that commands premium perception' },
  { num: '03', title: 'Stakeholder Ecosystem Design',   color: '#1F3A5F', desc: 'Physician, patient, payer, and partner engagement architecture' },
  { num: '04', title: 'Integrated Communications',      color: '#B8924A', desc: 'Unified brand voice across all ATL, BTL, and digital channels' },
  { num: '05', title: 'Creative Strategy',              color: '#2E75B6', desc: 'Purposeful creative that builds trust and drives action' },
  { num: '06', title: 'Measurement & Governance',       color: '#4F8A77', desc: 'KPI frameworks, brand tracking, and continuous optimization' },
];

export function HCLFOverview() {
  return (
    <section className="py-28 bg-[#f8fafc] dark:bg-[#0d1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#B8924A]/10 border border-[#B8924A]/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8924A]" />
            <span className="text-[#B8924A] text-xs font-bold tracking-[0.2em] uppercase">Proprietary Methodology</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F3A5F] dark:text-white leading-tight mb-4">
            The HCLF™ Framework
          </h2>
          <p className="text-[#3A3A3A]/60 dark:text-white/50 max-w-2xl mx-auto">
            A proprietary 6-phase Healthcare Communications &amp; Leadership Framework — built exclusively for healthcare organizations pursuing sustainable market leadership.
          </p>
        </AnimatedSection>

        {/* Phase cards — horizontal flow */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-14">
          {phases.map((phase, i) => (
            <AnimatedSection key={phase.num} delay={i * 80}>
              <div className="group relative bg-white dark:bg-[#111c2e] rounded-2xl p-5 border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-xl hover:shadow-[#1F3A5F]/8 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Color top accent */}
                <div
                  className="absolute top-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: phase.color }}
                />
                <div
                  className="text-xs font-bold font-mono mb-3 px-2 py-1 rounded-lg inline-block"
                  style={{ color: phase.color, backgroundColor: phase.color + '15' }}
                >
                  {phase.num}
                </div>
                <h4 className="text-xs font-bold font-heading text-[#1F3A5F] dark:text-white mb-2 leading-snug">
                  {phase.title}
                </h4>
                <p className="text-[11px] text-[#3A3A3A]/55 dark:text-white/40 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <AnimatedSection delay={500}>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F3A5F] via-[#2E75B6] to-[#4F8A77]" />
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-8 md:px-12 py-10">
              <div>
                <div className="text-[#B8924A] text-xs font-bold tracking-widest uppercase mb-2">From Intelligence to Impact</div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                  See how the HCLF™ Framework applies to your organization
                </h3>
              </div>
              <Link
                href="/hclf-framework"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-4 bg-white text-[#1F3A5F] font-bold rounded-xl hover:bg-[#DCE9F4] hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-black/20 text-sm"
              >
                Explore the Framework
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

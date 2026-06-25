import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const phases = [
  { num: '01', title: 'Market & Business Intelligence', color: '#2E75B6', desc: 'Deep market analysis, competitive landscape, and stakeholder mapping' },
  { num: '02', title: 'Brand Positioning', color: '#4F8A77', desc: 'Distinctive positioning that commands premium perception' },
  { num: '03', title: 'Stakeholder Ecosystem Design', color: '#1F3A5F', desc: 'Physician, patient, payer, and partner engagement architecture' },
  { num: '04', title: 'Integrated Communications', color: '#B8924A', desc: 'Unified brand voice across all ATL, BTL, and digital channels' },
  { num: '05', title: 'Creative Strategy & Development', color: '#2E75B6', desc: 'Purposeful creative that builds trust and drives action' },
  { num: '06', title: 'Measurement & Governance', color: '#4F8A77', desc: 'KPI frameworks, brand tracking, and continuous optimization' },
];

export function HCLFOverview() {
  return (
    <section className="py-24 bg-white dark:bg-[#0f1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader eyebrow="Our Methodology" title="The HCLF™ Framework" subtitle="A proprietary 6-phase Healthcare Communications & Leadership Framework designed exclusively for healthcare organizations pursuing market leadership." />
            <div className="mt-8">
              <Link href="/hclf-framework" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F3A5F] text-white font-semibold rounded-xl hover:bg-[#2E75B6] transition-colors">
                Explore the Framework <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <AnimatedSection direction="right">
            <div className="grid grid-cols-2 gap-4">
              {phases.map((phase, i) => (
                <AnimatedSection key={phase.num} delay={i * 80}>
                  <div className="group bg-[#f8fafc] dark:bg-[#162d4a] rounded-xl p-5 border border-gray-100 dark:border-white/5 hover:border-[#2E75B6]/40 card-hover cursor-default">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-xs font-bold font-mono px-2 py-1 rounded-md" style={{ color: phase.color, backgroundColor: phase.color + '15' }}>{phase.num}</span>
                    </div>
                    <h4 className="text-sm font-bold font-heading text-[#1F3A5F] dark:text-white mb-2 leading-tight">{phase.title}</h4>
                    <p className="text-xs text-[#3A3A3A]/60 dark:text-white/50 leading-relaxed">{phase.desc}</p>
                    <div className="mt-3 h-0.5 w-6 rounded-full group-hover:w-full transition-all duration-500" style={{ backgroundColor: phase.color }} />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

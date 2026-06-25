import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const industries = [
  { label: 'Hospital Chains', href: '/industries#hospitals', emoji: '🏥', desc: 'Multi-location brand cohesion and patient acquisition' },
  { label: 'Specialty Hospitals', href: '/industries#specialty', emoji: '⚕️', desc: 'Clinical excellence communication and referral networks' },
  { label: 'Diagnostics Networks', href: '/industries#diagnostics', emoji: '🔬', desc: 'Trust-building and differentiation at scale' },
  { label: 'IVF & Fertility Chains', href: '/industries#ivf', emoji: '🌱', desc: 'Sensitive, evidence-based patient communications' },
  { label: 'HealthTech Companies', href: '/industries#healthtech', emoji: '💻', desc: 'B2B and B2C positioning for digital health innovation' },
  { label: 'MedTech Organizations', href: '/industries#medtech', emoji: '🧬', desc: 'HCP engagement and market access communications' },
];

export function IndustriesSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0f1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Industries We Serve" title="Deep Healthcare Sector Expertise" subtitle="We bring specialized knowledge and proven strategies for each healthcare vertical we serve." centered className="mb-14" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.label} delay={i * 80}>
              <Link href={ind.href} className="group flex flex-col bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl p-6 border border-gray-100 dark:border-white/5 hover:border-[#2E75B6]/40 hover:bg-[#DCE9F4]/30 dark:hover:bg-[#2E75B6]/10 card-hover">
                <div className="text-3xl mb-4">{ind.emoji}</div>
                <h3 className="font-bold font-heading text-[#1F3A5F] dark:text-white mb-2">{ind.label}</h3>
                <p className="text-sm text-[#3A3A3A]/60 dark:text-white/50 leading-relaxed flex-1 mb-4">{ind.desc}</p>
                <div className="flex items-center gap-1 text-sm font-semibold text-[#2E75B6]">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={500} className="text-center mt-10">
          <Link href="/industries" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1F3A5F] text-white font-semibold rounded-xl hover:bg-[#2E75B6] transition-colors">
            View All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

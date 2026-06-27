import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const industries = [
  {
    label: 'Hospital Chains',
    href: '/industries#hospitals',
    desc: 'Multi-location brand cohesion, patient acquisition strategy, and physician referral networks at scale.',
    color: '#2E75B6',
    accent: 'from-[#2E75B6] to-[#1F3A5F]',
    abbr: 'HC',
  },
  {
    label: 'Specialty Hospitals',
    href: '/industries#specialty',
    desc: 'Clinical excellence communication and reputation-building for specialist care — including oncology, fertility & IVF, orthopaedics, cardiology, and neurosciences.',
    color: '#4F8A77',
    accent: 'from-[#4F8A77] to-[#3a6b5c]',
    abbr: 'SH',
  },
  {
    label: 'Diagnostics Networks',
    href: '/industries#diagnostics',
    desc: 'Trust-building, quality differentiation, and patient retention across diagnostics and pathology networks.',
    color: '#1F3A5F',
    accent: 'from-[#1F3A5F] to-[#2E75B6]',
    abbr: 'DX',
  },
  {
    label: 'Pharma & Life Sciences',
    href: '/industries#pharma',
    desc: 'HCP-targeted communications, patient education platforms, and brand strategy for pharmaceutical and life sciences companies.',
    color: '#B8924A',
    accent: 'from-[#B8924A] to-[#d4a85e]',
    abbr: 'PH',
  },
  {
    label: 'HealthTech',
    href: '/industries#healthtech',
    desc: 'B2B and B2C positioning, GTM strategy, and digital health brand-building for technology-led companies.',
    color: '#2E75B6',
    accent: 'from-[#2E75B6] to-[#4F8A77]',
    abbr: 'HT',
  },
  {
    label: 'MedTech',
    href: '/industries#medtech',
    desc: 'HCP engagement, market access communications, and clinical credibility building for medical device companies.',
    color: '#4F8A77',
    accent: 'from-[#4F8A77] to-[#1F3A5F]',
    abbr: 'MT',
  },
];

export function IndustriesSection() {
  return (
    <section className="py-28 bg-[#f8fafc] dark:bg-[#0d1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]" />
            <span className="text-[#2E75B6] text-xs font-bold tracking-[0.2em] uppercase">Industries We Serve</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-4 leading-tight">
            Deep Healthcare<br className="hidden md:block" /> Sector Expertise
          </h2>
          <p className="text-[#3A3A3A]/75 dark:text-white/65 max-w-lg mx-auto">
            Specialized knowledge and proven strategies for every healthcare vertical we serve.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.label} delay={i * 80}>
              <Link
                href={ind.href}
                className="group flex gap-5 bg-white dark:bg-[#111c2e] rounded-2xl p-6 border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-xl hover:shadow-[#1F3A5F]/8 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${ind.accent} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white text-[10px] font-bold font-mono tracking-wider">{ind.abbr}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-bold font-heading text-[#1F3A5F] dark:text-white mb-1.5 group-hover:text-[#2E75B6] transition-colors">
                    {ind.label}
                  </h3>
                  <p className="text-sm text-[#3A3A3A]/75 dark:text-white/65 leading-relaxed mb-3">
                    {ind.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: ind.color }}>
                    Learn more
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500} className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#2E75B6]/30 hover:-translate-y-0.5 transition-all duration-200 text-sm"
          >
            View All Industries
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

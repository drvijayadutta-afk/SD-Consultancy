import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Globe, Palette } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const services = [
  { icon: TrendingUp, title: 'ATL Strategy', desc: 'Mass media strategy, TV & radio campaigns, print, OOH planning, and full campaign architecture for maximum reach.', href: '/services#atl', color: '#2E75B6' },
  { icon: Target, title: 'BTL Strategy', desc: 'Healthcare activations, physician engagement programs, referral network development, and community outreach.', href: '/services#btl', color: '#4F8A77' },
  { icon: Globe, title: 'Digital Strategy', desc: 'Website strategy, content architecture, digital communications, and patient journey design for the connected era.', href: '/services#digital', color: '#1F3A5F' },
  { icon: Palette, title: 'Creative Solutions', desc: 'Brand films, corporate films, patient education content, visual identity systems, and compelling campaign concepts.', href: '/services#creative', color: '#B8924A' },
];

export function ServicesHighlight() {
  return (
    <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader eyebrow="What We Do" title="Integrated Services for Healthcare Leaders" subtitle="From strategy to execution, we cover the full spectrum of healthcare brand and communications." />
          <Link href="/services" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1F3A5F] text-[#1F3A5F] dark:border-white dark:text-white font-semibold rounded-xl hover:bg-[#1F3A5F] hover:text-white dark:hover:bg-white dark:hover:text-[#1F3A5F] transition-all">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <Link href={service.href} className="group block bg-white dark:bg-[#162d4a] rounded-2xl p-7 h-full border border-gray-100 dark:border-white/5 card-hover">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: service.color + '15' }}>
                  <service.icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <h3 className="text-lg font-bold font-heading text-[#1F3A5F] dark:text-white mb-3">{service.title}</h3>
                <p className="text-sm text-[#3A3A3A]/65 dark:text-white/55 leading-relaxed mb-5">{service.desc}</p>
                <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: service.color }}>
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

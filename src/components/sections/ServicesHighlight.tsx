import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Globe, Palette } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { accentText } from '@/lib/utils';

const services = [
  {
    icon: TrendingUp,
    title: 'ATL Strategy',
    desc: 'Mass media strategy, TV & radio campaigns, print, OOH planning, and full campaign architecture for maximum brand reach.',
    href: '/services#atl',
    color: '#25405F',
    from: '#25405F',
    to: '#101E36',
    tag: 'Above The Line',
  },
  {
    icon: Target,
    title: 'BTL Strategy',
    desc: 'Healthcare activations, physician engagement programs, referral network development, and precision community outreach.',
    href: '/services#btl',
    color: '#3E5776',
    from: '#3E5776',
    to: '#21384C',
    tag: 'Below The Line',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    desc: 'Website strategy, content architecture, digital communications, and patient journey design for the connected healthcare era.',
    href: '/services#digital',
    color: '#101E36',
    from: '#101E36',
    to: '#25405F',
    tag: 'Digital & Content',
  },
  {
    icon: Palette,
    title: 'Creative Solutions',
    desc: 'Brand films, patient education content, visual identity systems, and compelling campaign concepts that move people.',
    href: '/services#creative',
    color: '#E8E0CB',
    from: '#E8E0CB',
    to: '#F3EEE0',
    tag: 'Brand & Creative',
  },
];

export function ServicesHighlight() {
  return (
    <section className="py-28 bg-white dark:bg-[#0f1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#E7EAEF] dark:bg-[#25405F]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25405F]" />
                <span className="text-[var(--text-blue)] text-xs font-bold tracking-[0.2em] uppercase">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#101E36] dark:text-white leading-tight mb-3">
                Integrated Services for<br className="hidden md:block" /> Healthcare Leaders
              </h2>
              <p className="text-[#3A3A3A]/75 dark:text-white/65 max-w-lg">
                From brand strategy to creative execution — we cover the full spectrum of healthcare communications.
              </p>
            </div>
            <Link
              href="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#101E36] dark:border-white/30 text-[#101E36] dark:text-white font-semibold rounded-xl hover:bg-[#101E36] hover:text-white dark:hover:bg-white/10 transition-all text-sm"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <Link
                href={service.href}
                className="group block bg-[#f8fafc] dark:bg-[#111c2e] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-[#101E36]/10 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1.5 h-full"
              >
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(to right, ${service.from}, ${service.to})` }}
                />
                <div className="p-7">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-5 inline-block"
                    style={{ color: accentText(service.color), backgroundColor: service.color + '12' }}
                  >
                    {service.tag}
                  </span>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: service.color + '15' }}
                  >
                    <service.icon className="w-5 h-5" style={{ color: accentText(service.color) }} />
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#101E36] dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#3A3A3A]/75 dark:text-white/65 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: accentText(service.color) }}>
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

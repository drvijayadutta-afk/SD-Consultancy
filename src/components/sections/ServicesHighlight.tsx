import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Globe, Palette } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const services = [
  {
    icon: TrendingUp,
    title: 'ATL Strategy',
    desc: 'Mass media strategy, TV & radio campaigns, print, OOH planning, and full campaign architecture for maximum brand reach.',
    href: '/services#atl',
    color: '#2E75B6',
    from: '#2E75B6',
    to: '#1F3A5F',
    tag: 'Above The Line',
  },
  {
    icon: Target,
    title: 'BTL Strategy',
    desc: 'Healthcare activations, physician engagement programs, referral network development, and precision community outreach.',
    href: '/services#btl',
    color: '#4F8A77',
    from: '#4F8A77',
    to: '#3a6b5c',
    tag: 'Below The Line',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    desc: 'Website strategy, content architecture, digital communications, and patient journey design for the connected healthcare era.',
    href: '/services#digital',
    color: '#1F3A5F',
    from: '#1F3A5F',
    to: '#2E75B6',
    tag: 'Digital & Content',
  },
  {
    icon: Palette,
    title: 'Creative Solutions',
    desc: 'Brand films, patient education content, visual identity systems, and compelling campaign concepts that move people.',
    href: '/services#creative',
    color: '#B8924A',
    from: '#B8924A',
    to: '#d4a85e',
    tag: 'Brand & Creative',
  },
];

export function ServicesHighlight() {
  return (
    <section className="py-28 bg-white dark:bg-[#0f1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]" />
                <span className="text-[#2E75B6] text-xs font-bold tracking-[0.2em] uppercase">What We Do</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F3A5F] dark:text-white leading-tight mb-3">
                Integrated Services for<br className="hidden md:block" /> Healthcare Leaders
              </h2>
              <p className="text-[#3A3A3A]/55 dark:text-white/45 max-w-lg">
                From brand strategy to creative execution — we cover the full spectrum of healthcare communications.
              </p>
            </div>
            <Link
              href="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1F3A5F] dark:border-white/30 text-[#1F3A5F] dark:text-white font-semibold rounded-xl hover:bg-[#1F3A5F] hover:text-white dark:hover:bg-white/10 transition-all text-sm"
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
                className="group block bg-[#f8fafc] dark:bg-[#111c2e] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-[#1F3A5F]/10 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1.5 h-full"
              >
                {/* Gradient top bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ background: `linear-gradient(to right, ${service.from}, ${service.to})` }}
                />

                <div className="p-7">
                  {/* Tag */}
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-5 inline-block"
                    style={{ color: service.color, backgroundColor: service.color + '12' }}
                  >
                    {service.tag}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: service.color + '15' }}
                  >
                    <service.icon className="w-5 h-5" style={{ color: service.color }} />
                  </div>

                  <h3 className="text-base font-bold font-heading text-[#1F3A5F] dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#3A3A3A]/60 dark:text-white/50 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: service.color }}>
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

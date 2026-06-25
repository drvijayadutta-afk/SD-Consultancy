import { StatCounter } from '@/components/ui/StatCounter';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const stats = [
  { value: 200, suffix: '+', label: 'Healthcare Projects Delivered' },
  { value: 15, suffix: '+', label: 'Years of Sector Expertise' },
  { value: 50, suffix: '+', label: 'Healthcare Organizations Served' },
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
];

export function ImpactStats() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1F3A5F] via-[#162d4a] to-[#1F3A5F] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E75B6]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4F8A77]/15 rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <p className="text-[#4F8A77] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Client Outcomes</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">Measurable Impact Across Healthcare</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 150}>
              <div className="glass-card rounded-2xl p-8">
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

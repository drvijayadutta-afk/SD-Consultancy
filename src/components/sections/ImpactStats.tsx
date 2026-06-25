import { StatCounter } from '@/components/ui/StatCounter';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const stats = [
  { value: 50,  suffix: '+', label: 'Healthcare Projects Delivered', color: '#2E75B6', icon: '📊' },
  { value: 10,  suffix: '+', label: 'Years of Sector Expertise',     color: '#4F8A77', icon: '🏥' },
  { value: 30,  suffix: '+', label: 'Healthcare Organizations Served', color: '#B8924A', icon: '🤝' },
  { value: 98,  suffix: '%', label: 'Client Retention Rate',          color: '#4F8A77', icon: '⭐' },
];

export function ImpactStats() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0d1a2e] via-[#1F3A5F] to-[#162d4a]">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2E75B6]/18 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4F8A77]/12 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-[#B8924A]/6 rounded-full blur-[80px]" />
      </div>

      {/* Decorative ECG line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="absolute top-1/2 -translate-y-1/2 w-full h-16 opacity-10">
          <path
            d="M 0 30 L 150 30 L 180 15 L 200 45 L 220 20 L 240 30 L 400 30 C 500 30 600 20 700 15 C 800 10 900 8 1050 6 L 1200 4"
            stroke="url(#statsEcgGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="statsEcgGrad" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2E75B6" stopOpacity="0" />
              <stop offset="0.2" stopColor="#2E75B6" />
              <stop offset="0.8" stopColor="#B8924A" />
              <stop offset="1" stopColor="#B8924A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#4F8A77]/30 bg-[#4F8A77]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F8A77] animate-pulse" />
            <span className="text-[#4F8A77] text-xs font-bold tracking-[0.2em] uppercase">Client Outcomes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">
            Measurable Impact Across Healthcare
          </h2>
          <p className="text-white/50 mt-3 max-w-lg mx-auto">
            Every engagement is built around one objective: sustainable market leadership.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 120}>
              <div className="glass-card rounded-2xl p-8 text-center border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className="stat-number text-4xl md:text-5xl font-bold mb-2" style={{ color: stat.color }}>
                  <StatCounter value={stat.value} suffix={stat.suffix} label="" />
                </div>
                <div className="text-sm text-white/50 font-medium leading-tight">{stat.label}</div>
                <div className="mt-4 h-0.5 rounded-full mx-auto w-12 opacity-50" style={{ backgroundColor: stat.color }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

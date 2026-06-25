import { StatCounter } from '@/components/ui/StatCounter';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const stats = [
  { value: 10,  suffix: '+', label: 'Years of Sector Expertise',        color: '#2E75B6', icon: '🏥', desc: 'Deep, frontline healthcare experience' },
  { value: 30,  suffix: '+', label: 'Healthcare Organizations Served',  color: '#4F8A77', icon: '🤝', desc: 'Across hospitals, diagnostics & healthtech' },
  { value: 98,  suffix: '%', label: 'Client Retention Rate',            color: '#B8924A', icon: '⭐', desc: 'Long-term partnerships built on results' },
  { value: 6,   suffix: '',  label: 'Healthcare Verticals',             color: '#4F8A77', icon: '📊', desc: 'Specialized expertise across each sector' },
];

export function ImpactStats() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#0d1a2e] via-[#1F3A5F] to-[#162d4a]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2E75B6]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4F8A77]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-[#B8924A]/5 rounded-full blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="absolute top-1/2 -translate-y-1/2 w-full h-16 opacity-[0.07]">
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
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#4F8A77]/30 bg-[#4F8A77]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F8A77] animate-pulse" />
            <span className="text-[#4F8A77] text-xs font-bold tracking-[0.2em] uppercase">Client Outcomes</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            Measurable Impact<br className="hidden md:block" /> Across Healthcare
          </h2>
          <p className="text-white/70 mt-4 max-w-lg mx-auto">
            Every engagement is built around one objective: sustainable market leadership.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 120}>
              <div className="relative group glass-card rounded-2xl p-7 md:p-8 text-center border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-400 hover:-translate-y-1.5 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl blur-sm"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}18 0%, transparent 60%)` }}
                />
                <div className="relative">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="stat-number text-4xl md:text-5xl font-bold mb-1" style={{ color: stat.color }}>
                    <StatCounter value={stat.value} suffix={stat.suffix} label="" />
                  </div>
                  <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
                  <div className="text-xs text-white/60">{stat.desc}</div>
                  <div className="mt-5 h-px rounded-full mx-auto w-10 opacity-40 group-hover:w-16 transition-all duration-400" style={{ backgroundColor: stat.color }} />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

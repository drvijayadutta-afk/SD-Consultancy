import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Stethoscope, Brain, Layers, Sparkles } from 'lucide-react';

const differences = [
  {
    icon: Stethoscope,
    num: '01',
    title: 'Clinical Fluency',
    description: 'We speak the language of healthcare — from clinical pathways and patient journeys to regulatory nuances and physician dynamics. Our team understands the sector from the inside out.',
    color: '#2E75B6',
    gradientFrom: 'from-[#2E75B6]',
    gradientTo: 'to-[#1F3A5F]',
    lightBg: '#DCE9F4',
  },
  {
    icon: Brain,
    num: '02',
    title: 'Strategy Before Channels',
    description: 'We lead with strategy, not tactics. Every campaign, communication, or creative initiative flows from a deeply researched strategic foundation tailored to your market position.',
    color: '#4F8A77',
    gradientFrom: 'from-[#4F8A77]',
    gradientTo: 'to-[#3a6b5c]',
    lightBg: '#e8f4f0',
  },
  {
    icon: Layers,
    num: '03',
    title: 'Integrated Thinking',
    description: 'Brand, communications, digital, and creative — all working together. We design integrated ecosystems where every touchpoint reinforces your core brand promise.',
    color: '#1F3A5F',
    gradientFrom: 'from-[#1F3A5F]',
    gradientTo: 'to-[#2E75B6]',
    lightBg: '#e8eef5',
  },
  {
    icon: Sparkles,
    num: '04',
    title: 'Creative With Purpose',
    description: 'Creative excellence in service of strategic outcomes. Every film, campaign, and visual system is crafted to build trust, differentiate your brand, and drive measurable results.',
    color: '#B8924A',
    gradientFrom: 'from-[#B8924A]',
    gradientTo: 'to-[#d4a85e]',
    lightBg: '#f7f0e6',
  },
];

export function OurDifference() {
  return (
    <section className="py-28 bg-white dark:bg-[#0f1923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]" />
            <span className="text-[#2E75B6] text-xs font-bold tracking-[0.2em] uppercase">Our Difference</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-4 leading-tight">
            Why Healthcare Organizations<br className="hidden md:block" /> Choose S.D Consultancy
          </h2>
          <p className="text-[#3A3A3A]/75 dark:text-white/65 max-w-xl mx-auto">
            We combine clinical understanding, strategic thinking, and creative excellence in ways that generalist agencies simply cannot.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {differences.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100}>
              <div className="group relative bg-[#f8fafc] dark:bg-[#111c2e] rounded-2xl p-7 h-full border border-gray-100/80 dark:border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-[#1F3A5F]/10 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm"
                    style={{ backgroundColor: item.lightBg }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className="text-3xl font-bold font-mono opacity-[0.07] dark:opacity-[0.12] text-[#1F3A5F] dark:text-white select-none">
                    {item.num}
                  </span>
                </div>
                <h3 className="text-base font-bold font-heading text-[#1F3A5F] dark:text-white mb-3 group-hover:text-[#2E75B6] dark:group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#3A3A3A]/75 dark:text-white/65 leading-relaxed">
                  {item.description}
                </p>
                <div
                  className="mt-6 w-8 h-0.5 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stethoscope, Brain, Layers, Sparkles } from 'lucide-react';

const differences = [
  { icon: Stethoscope, title: 'Clinical Fluency', description: 'We speak the language of healthcare — from clinical pathways and patient journeys to regulatory nuances and physician dynamics. Our team understands the sector from the inside out.', color: '#2E75B6', bg: '#DCE9F4' },
  { icon: Brain, title: 'Strategy Before Channels', description: 'We lead with strategy, not tactics. Every campaign, communication, or creative initiative flows from a deeply researched strategic foundation tailored to your market position.', color: '#4F8A77', bg: '#e8f4f0' },
  { icon: Layers, title: 'Integrated Thinking', description: 'Brand, communications, digital, and creative — all working together. We design integrated ecosystems where every touchpoint reinforces your core brand promise.', color: '#1F3A5F', bg: '#e8eef5' },
  { icon: Sparkles, title: 'Creative With Purpose', description: 'Creative excellence in service of strategic outcomes. Every film, campaign, and visual system is crafted to build trust, differentiate your brand, and drive measurable results.', color: '#B8924A', bg: '#f7f0e6' },
];

export function OurDifference() {
  return (
    <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Difference" title="Why Healthcare Organizations Choose S.D Consultancy" subtitle="We combine clinical understanding, strategic thinking, and creative excellence in ways that generalist agencies simply cannot." centered className="mb-16" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 100}>
              <div className="group bg-white dark:bg-[#162d4a] rounded-2xl p-7 h-full border border-gray-100 dark:border-white/5 card-hover">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: item.bg }}>
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold font-heading text-[#1F3A5F] dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm text-[#3A3A3A]/65 dark:text-white/55 leading-relaxed">{item.description}</p>
                <div className="mt-5 w-8 h-0.5 rounded-full transition-all duration-300 group-hover:w-16" style={{ backgroundColor: item.color }} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

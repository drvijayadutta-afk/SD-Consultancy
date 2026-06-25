'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const testimonials = [
  { quote: "S.D Consultancy transformed how we communicate our clinical excellence. Their HCLF™ framework gave us a clear roadmap, and the results exceeded our expectations — patient inquiries increased by 45% within six months.", name: 'Dr. Ananya Krishnamurthy', title: 'CMO, Regional Hospital Group', sector: 'Hospital Chain', initials: 'AK', color: '#2E75B6' },
  { quote: "Their understanding of the fertility sector is unmatched. They helped us communicate with sensitivity and science — building the trust our patients need during one of the most vulnerable times of their lives.", name: 'Dr. Priya Mehta', title: 'Co-Founder & Medical Director', sector: 'IVF & Fertility', initials: 'PM', color: '#4F8A77' },
  { quote: "Working with S.D Consultancy on our MedTech go-to-market strategy was a game changer. They understood both the clinical and commercial dimensions in a way no other agency has.", name: 'Rajesh Nair', title: 'VP Marketing, MedTech Startup', sector: 'MedTech', initials: 'RN', color: '#B8924A' },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-24 bg-gradient-to-br from-[#1F3A5F] to-[#0f1923] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E75B6]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4F8A77]/10 rounded-full blur-[100px]" />
      </div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Client Voices" title="What Healthcare Leaders Say" centered light className="mb-14" />
        <AnimatedSection>
          <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-10 md:p-14">
            <Quote className="w-10 h-10 text-[#B8924A] mb-6 opacity-60" />
            <blockquote className="text-xl md:text-2xl text-white/85 leading-relaxed mb-8 font-light">&ldquo;{testimonials[active].quote}&rdquo;</blockquote>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: testimonials[active].color }}>{testimonials[active].initials}</div>
                <div>
                  <div className="text-white font-semibold">{testimonials[active].name}</div>
                  <div className="text-white/50 text-sm">{testimonials[active].title}</div>
                  <div className="text-xs font-medium mt-0.5 px-2 py-0.5 rounded-full inline-block" style={{ color: testimonials[active].color, backgroundColor: testimonials[active].color + '20' }}>{testimonials[active].sector}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                <button onClick={() => setActive((active + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (<button key={i} onClick={() => setActive(i)} className={`rounded-full transition-all ${i === active ? 'w-8 h-2 bg-[#B8924A]' : 'w-2 h-2 bg-white/30'}`} />))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

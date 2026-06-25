'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

const pillars = ['Clinical Fluency', 'Strategy First', 'Integrated Communications', 'Creative Excellence'];

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    setTimeout(() => {
      el.style.transition = 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)';
      el.style.opacity = '1';
      el.style.transform = 'none';
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#2E75B6]/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#4F8A77]/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#2E75B6]/5 blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#4F8A77]/40 bg-[#4F8A77]/10">
              <span className="w-2 h-2 rounded-full bg-[#4F8A77] animate-pulse" />
              <span className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">360° Healthcare Strategy Consultancy</span>
            </div>
            <h1 ref={headlineRef} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.1] mb-6">
              Transforming{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">Healthcare Expertise</span>{' '}
              Into Market Leadership
            </h1>
            <p className="text-lg text-white/65 leading-relaxed mb-10 max-w-xl">
              We help healthcare organizations build stronger brands, deeper stakeholder trust, and sustainable growth through integrated strategy, communications, and creative excellence.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-[#B8924A] to-[#d4a85e] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#B8924A]/30 hover:-translate-y-1 transition-all duration-300">
                Book a Strategy Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                <Play className="w-4 h-4" /> Explore Our Services
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {pillars.map((pillar) => (
                <div key={pillar} className="flex items-center gap-2 text-sm text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-[#4F8A77]" />{pillar}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 mb-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E75B6] to-[#4F8A77] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SD</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">HCLF™ Framework</div>
                    <div className="text-white/50 text-xs">Healthcare Brand Architecture</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[{ phase: '01', label: 'Market Intelligence' }, { phase: '02', label: 'Brand Positioning' }, { phase: '03', label: 'Stakeholder Design' }, { phase: '04', label: 'Integrated Comms' }, { phase: '05', label: 'Creative Strategy' }, { phase: '06', label: 'Measurement' }].map((item) => (
                    <div key={item.phase} className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#4F8A77]/50 transition-colors cursor-default">
                      <div className="text-[#B8924A] text-xs font-mono mb-1">{item.phase}</div>
                      <div className="text-white/80 text-xs font-medium leading-tight">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/50 text-xs">Proprietary 6-Phase Methodology</span>
                  <Link href="/hclf-framework" className="text-[#4F8A77] text-xs font-medium hover:underline flex items-center gap-1">Explore <ArrowRight className="w-3 h-3" /></Link>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[{ value: '200+', label: 'Healthcare Projects' }, { value: '15+', label: 'Years of Expertise' }, { value: '98%', label: 'Client Retention' }].map((stat) => (
                  <div key={stat.label} className="glass-card rounded-xl p-5 text-center">
                    <div className="stat-number text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/50 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

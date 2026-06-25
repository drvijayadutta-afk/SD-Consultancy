'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const pillars = [
  'Clinical Fluency',
  'Strategy First',
  'Integrated Comms',
  'Creative Excellence',
];

const phases = [
  { num: '01', label: 'Market Intelligence', color: '#2E75B6' },
  { num: '02', label: 'Brand Positioning', color: '#4F8A77' },
  { num: '03', label: 'Stakeholder Design', color: '#1F3A5F' },
  { num: '04', label: 'Integrated Comms', color: '#B8924A' },
  { num: '05', label: 'Creative Strategy', color: '#2E75B6' },
  { num: '06', label: 'Measurement', color: '#4F8A77' },
];

export function HeroSection() {
  const headlineRef  = useRef<HTMLHeadingElement>(null);
  const subtextRef   = useRef<HTMLParagraphElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const pillarsRef   = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const entries = [
      { el: headlineRef.current,   delay: 80 },
      { el: subtextRef.current,    delay: 260 },
      { el: ctaRef.current,        delay: 440 },
      { el: pillarsRef.current,    delay: 600 },
      { el: rightPanelRef.current, delay: 300 },
    ];
    entries.forEach(({ el, delay }) => {
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.85s cubic-bezier(0.4, 0, 0.2, 1), transform 0.85s cubic-bezier(0.4, 0, 0.2, 1)';
        el.style.opacity = '1';
        el.style.transform = 'none';
      }, delay);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[800px] h-[800px] rounded-full bg-[#2E75B6]/18 blur-[140px] animate-pulse-slow" />
        <div className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full bg-[#4F8A77]/12 blur-[120px] animate-pulse-slower" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1F3A5F]/30 blur-[100px] animate-orb" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#B8924A]/8 blur-[80px] animate-float-slow" style={{ animationDelay: '3s' }} />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1400 180"
          preserveAspectRatio="xMidYMid meet"
          className="absolute bottom-16 w-full"
          style={{ opacity: 0 }}
          ref={(el) => {
            if (!el) return;
            setTimeout(() => {
              el.style.transition = 'opacity 1s ease';
              el.style.opacity = '1';
            }, 1000);
          }}
        >
          <path
            d="M 0 110 L 180 110 L 220 80 L 260 110 L 280 50 L 320 150 L 360 90 L 400 110 L 500 110 C 600 110 700 85 800 70 C 900 55 1000 50 1100 40 C 1200 30 1300 25 1400 18"
            stroke="url(#heroEcgGrad)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1400,
              strokeDashoffset: 1400,
              animation: 'ecg-bg-draw 4s ease-out 1.2s forwards',
            }}
          />
          <defs>
            <linearGradient id="heroEcgGrad" x1="0" y1="0" x2="1400" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2E75B6" stopOpacity="0" />
              <stop offset="0.15" stopColor="#2E75B6" stopOpacity="0.4" />
              <stop offset="0.5" stopColor="#4F8A77" stopOpacity="0.5" />
              <stop offset="0.85" stopColor="#B8924A" stopOpacity="0.4" />
              <stop offset="1" stopColor="#B8924A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[#4F8A77]/35 bg-[#4F8A77]/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#4F8A77] animate-pulse" />
              <span className="text-[#4F8A77] text-xs font-bold tracking-[0.18em] uppercase">
                360° Healthcare Strategy Consultancy
              </span>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold font-heading text-white leading-[1.08] mb-6 tracking-tight"
            >
              Transforming{' '}
              <span className="relative inline-block">
                <span className="shimmer-text">Healthcare Expertise</span>
              </span>
              {' '}Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCE9F4] via-white to-[#DCE9F4]">
                Market Leadership
              </span>
            </h1>

            <p
              ref={subtextRef}
              className="text-lg text-white/80 leading-relaxed mb-10 max-w-[520px]"
            >
              We help healthcare organizations build stronger brands, deeper stakeholder trust, and sustainable growth through integrated strategy, communications, and creative excellence.
            </p>

            <div ref={ctaRef} className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-gradient inline-flex items-center gap-2.5 px-7 py-4 text-white font-bold rounded-xl shadow-lg shadow-[#B8924A]/25 hover:shadow-xl hover:shadow-[#B8924A]/35 text-sm"
                >
                  <span>Book a Strategy Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/hclf-framework"
                  className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white/90 font-semibold rounded-xl hover:bg-white/10 hover:border-white/45 transition-all duration-300 text-sm backdrop-blur-sm"
                >
                  Explore HCLF™ Framework
                </Link>
              </div>

              <div ref={pillarsRef} className="flex flex-wrap gap-x-5 gap-y-2">
                {pillars.map((pillar) => (
                  <div key={pillar} className="flex items-center gap-1.5 text-sm text-white/75">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4F8A77] flex-shrink-0" />
                    {pillar}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div ref={rightPanelRef} className="hidden lg:block">
            <div className="relative animate-float-slow">
              <div className="glass-card rounded-2xl p-7 mb-4 border border-white/10 hover:border-white/20 transition-all duration-500 group/card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E75B6] to-[#4F8A77] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#2E75B6]/30">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <text x="10" y="11" textAnchor="middle" dominantBaseline="middle"
                        fill="white" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.5">
                        S·D
                      </text>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">HCLF™ Framework</div>
                    <div className="text-white/65 text-xs">Proprietary 6-Phase Methodology</div>
                  </div>
                  <div className="ml-auto">
                    <span className="px-2 py-0.5 rounded-full bg-[#B8924A]/20 text-[#B8924A] text-[10px] font-bold tracking-wide">
                      PROPRIETARY
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {phases.map((item, i) => (
                    <div
                      key={item.num}
                      className="bg-white/5 rounded-xl p-3 border border-white/8 hover:border-white/25 hover:bg-white/10 transition-all duration-300 cursor-default group/phase"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <div
                        className="text-[10px] font-bold font-mono mb-1.5 tracking-wider"
                        style={{ color: item.color }}
                      >
                        {item.num}
                      </div>
                      <div className="text-white/75 text-[11px] font-medium leading-tight group-hover/phase:text-white transition-colors">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#4F8A77] animate-pulse" />
                    <span className="text-white/65 text-xs">From intelligence to impact</span>
                  </div>
                  <Link
                    href="/hclf-framework"
                    className="text-[#4F8A77] text-xs font-semibold hover:text-[#6aaa95] flex items-center gap-1 transition-colors"
                  >
                    Explore <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '10+',  label: 'Years Expertise',        color: '#2E75B6' },
                  { value: '30+',  label: 'Organizations Served',   color: '#4F8A77' },
                  { value: '98%',  label: 'Client Retention',       color: '#B8924A' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card rounded-xl p-4 text-center hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 border border-white/8 hover:border-white/18 group/stat"
                  >
                    <div
                      className="stat-number text-2xl font-bold mb-0.5 group-hover/stat:scale-110 transition-transform duration-200"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-[10px] leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="absolute -inset-8 bg-gradient-to-br from-[#2E75B6]/8 to-[#4F8A77]/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-scroll" />
      </div>
    </section>
  );
}

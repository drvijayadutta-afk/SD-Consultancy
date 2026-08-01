import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function ContactCTA() {
  return (
    <section className="py-24 bg-white dark:bg-[#0f1923]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#E7EAEF] dark:bg-[#25405F]/20">
            <span className="w-2 h-2 rounded-full bg-[#25405F] animate-pulse" />
            <span className="text-[var(--text-blue)] text-xs font-semibold tracking-widest uppercase">
              Start Your Growth Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#101E36] dark:text-white mb-6 leading-tight">
            Let&apos;s Build Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25405F] to-[#3E5776]">
              Healthcare Brand Leadership
            </span>{' '}
            Strategy
          </h2>

          <p className="text-lg text-[#3A3A3A]/75 dark:text-white/60 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking to strengthen your brand, expand your referral networks, or launch a new digital strategy — we&apos;re ready to help.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#101E36] to-[#25405F] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#25405F]/30 hover:-translate-y-1 transition-all"
            >
              Book a Strategy Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#101E36] dark:border-white text-[#101E36] dark:text-white font-bold rounded-xl hover:bg-[#101E36] hover:text-white dark:hover:bg-white dark:hover:text-[#101E36] transition-all"
            >
              Explore Our Services
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#3A3A3A]/75 dark:text-white/55">
            <a href="mailto:drvijayadutta@gmail.com" className="flex items-center gap-2 hover:text-[var(--text-blue)] transition-colors">
              <Mail className="w-4 h-4" />
              drvijayadutta@gmail.com
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

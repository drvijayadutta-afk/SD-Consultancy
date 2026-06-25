import Link from 'next/link';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export function ContactCTA() {
  return (
    <section className="py-24 bg-white dark:bg-[#0f1923]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/20">
            <span className="w-2 h-2 rounded-full bg-[#2E75B6] animate-pulse" />
            <span className="text-[#2E75B6] text-xs font-semibold tracking-widest uppercase">Start Your Growth Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-6 leading-tight">
            Let&apos;s Build Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E75B6] to-[#4F8A77]">Healthcare Brand Leadership</span>{' '}
            Strategy
          </h2>
          <p className="text-lg text-[#3A3A3A]/65 dark:text-white/60 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re looking to strengthen your brand, expand your referral networks, or launch a new digital strategy — we&apos;re ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#2E75B6]/30 hover:-translate-y-1 transition-all">
              Book a Strategy Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1F3A5F] dark:border-white text-[#1F3A5F] dark:text-white font-bold rounded-xl hover:bg-[#1F3A5F] hover:text-white dark:hover:bg-white dark:hover:text-[#1F3A5F] transition-all">
              Explore Our Services
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-[#3A3A3A]/60 dark:text-white/50">
            <a href="mailto:hello@sdconsultancy.in" className="flex items-center gap-2 hover:text-[#2E75B6] transition-colors"><Mail className="w-4 h-4" />hello@sdconsultancy.in</a>
            <a href="tel:+919999999999" className="flex items-center gap-2 hover:text-[#2E75B6] transition-colors"><Phone className="w-4 h-4" />+91 99999 99999</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

import { AnimatedSection } from '@/components/ui/AnimatedSection';

const partners = [
  'Apollo Hospitals',
  'Fortis Healthcare',
  'Dr. Lal PathLabs',
  'Manipal Health',
  'Max Healthcare',
  'Narayana Health',
  'Thyrocare',
  'Healthkart',
  'Aster DM Healthcare',
  'Medanta',
];

export function TrustedPartners() {
  return (
    <section className="py-14 bg-white dark:bg-[#0f1923] border-y border-gray-100 dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-xs text-[#3A3A3A]/40 dark:text-white/30 font-semibold tracking-[0.25em] uppercase">
            Trusted by India&apos;s Leading Healthcare Organizations
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-[#0f1923] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-[#0f1923] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-8"
            >
              <span className="text-[#3A3A3A]/25 dark:text-white/15 font-bold text-sm tracking-widest uppercase select-none hover:text-[#2E75B6]/60 dark:hover:text-[#2E75B6]/50 transition-colors duration-300">
                {partner}
              </span>
              <span className="ml-8 w-1 h-1 rounded-full bg-[#2E75B6]/20 dark:bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

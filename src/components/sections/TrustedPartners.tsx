import { AnimatedSection } from '@/components/ui/AnimatedSection';

const partners = ['Apollo Hospitals', 'Fortis Healthcare', 'Dr. Lal PathLabs', 'Manipal Health', 'Max Healthcare', 'Narayana Health', 'Thyrocare', 'Healthkart'];

export function TrustedPartners() {
  return (
    <section className="py-16 bg-white dark:bg-[#0f1923] border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm text-[#3A3A3A]/50 dark:text-white/40 font-medium tracking-widest uppercase">Trusted Healthcare Growth Partner</p>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div key={partner} className="text-[#3A3A3A]/30 dark:text-white/20 font-semibold text-sm tracking-wide hover:text-[#2E75B6] dark:hover:text-[#2E75B6] transition-colors cursor-default">
                {partner}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

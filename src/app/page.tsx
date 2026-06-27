import { HeroSection } from '@/components/sections/HeroSection';
import { OurDifference } from '@/components/sections/OurDifference';
import { HCLFOverview } from '@/components/sections/HCLFOverview';
import { ServicesHighlight } from '@/components/sections/ServicesHighlight';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { InsightsPreview } from '@/components/sections/InsightsPreview';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OurDifference />
      <ImpactStats />
      <HCLFOverview />
      <ServicesHighlight />
      <IndustriesSection />
      <TestimonialsSection />
      <InsightsPreview />
      <ContactCTA />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, TrendingUp, Target, Globe, Palette } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Services | S.D Consultancy Healthcare Strategy',
  description: 'Explore our comprehensive healthcare brand and communications services — ATL Strategy, BTL Strategy, Digital Strategy, and Creative Solutions.',
};

const services = [
  {
    id: 'atl',
    icon: TrendingUp,
    color: '#2E75B6',
    bg: '#DCE9F4',
    label: 'ATL Strategy',
    title: 'Above The Line Strategy',
    overview:
      'Strategic mass media campaigns that build brand awareness, establish thought leadership, and create lasting brand equity for healthcare organizations across all major traditional channels.',
    benefits: [
      'Broad reach for new patient acquisition',
      'Brand recall and top-of-mind positioning',
      'Physician and stakeholder trust-building',
      'Integrated multi-channel impact',
    ],
    offerings: [
      { name: 'Mass Media Strategy', desc: 'Comprehensive media strategy across TV, radio, and print aligned to your brand goals' },
      { name: 'TV Campaign Development', desc: 'End-to-end television advertising including scripting, production, and media planning' },
      { name: 'Radio Strategy', desc: 'Regional and national radio campaigns tailored to healthcare audiences' },
      { name: 'Print Media Planning', desc: 'Premium print placements in healthcare publications and mainstream media' },
      { name: 'OOH Planning', desc: 'Out-of-home media strategy for high-visibility healthcare brand presence' },
      { name: 'Campaign Architecture', desc: 'Integrated campaign planning from concept to execution' },
    ],
    deliverables: ['Media Strategy Document', 'Campaign Brief', 'Creative Directions', 'Media Plan & Buy', 'Performance Dashboard'],
  },
  {
    id: 'btl',
    icon: Target,
    color: '#4F8A77',
    bg: '#e8f4f0',
    label: 'BTL Strategy',
    title: 'Below The Line Strategy',
    overview:
      'Targeted, relationship-driven communications that build deep connections with physicians, patients, and community stakeholders through meaningful healthcare activations and engagement programs.',
    benefits: [
      'Direct physician relationship building',
      'Targeted patient community engagement',
      'Measurable referral network growth',
      'High-conversion touchpoint design',
    ],
    offerings: [
      { name: 'Healthcare Activations', desc: 'Branded health camps, CME events, and community health initiatives' },
      { name: 'Physician Engagement Programs', desc: 'Structured KOL programs, medical advisory relationships, and referral networks' },
      { name: 'Referral Programs', desc: 'Incentive architecture and communication systems for referral growth' },
      { name: 'Community Outreach', desc: 'CSR-aligned health awareness campaigns and patient education programs' },
      { name: 'Patient Support Programs', desc: 'Disease awareness, adherence, and wellness programs' },
      { name: 'Event Strategy', desc: 'Annual conferences, grand rounds, and healthcare symposia management' },
    ],
    deliverables: ['Engagement Strategy', 'Program Design', 'Content Calendar', 'Execution Playbook', 'ROI Framework'],
  },
  {
    id: 'digital',
    icon: Globe,
    color: '#1F3A5F',
    bg: '#e8eef5',
    label: 'Digital Strategy',
    title: 'Digital Strategy & Communications',
    overview:
      'Comprehensive digital ecosystem design that connects healthcare organizations with patients, physicians, and stakeholders across every digital touchpoint in their decision journey.',
    benefits: [
      'Accelerated online patient acquisition',
      'SEO-driven organic visibility',
      'Integrated digital patient journey',
      'Data-driven optimization',
    ],
    offerings: [
      { name: 'Website Strategy', desc: 'UX, architecture, and content strategy for high-converting healthcare websites' },
      { name: 'Content Architecture', desc: 'Content strategy, editorial planning, and SEO-optimized healthcare content' },
      { name: 'Social Media Strategy', desc: 'Platform strategy, content planning, and community management' },
      { name: 'Digital Communications', desc: 'Email, WhatsApp, and digital PR strategy for healthcare audiences' },
      { name: 'Patient Journey Design', desc: 'Digital touchpoint mapping from awareness to advocacy' },
      { name: 'Performance Marketing', desc: 'PPC, social ads, and ROI-driven digital acquisition programs' },
    ],
    deliverables: ['Digital Strategy Deck', 'Content Plan', 'SEO Roadmap', 'Campaign Briefs', 'Analytics Dashboard'],
  },
  {
    id: 'creative',
    icon: Palette,
    color: '#B8924A',
    bg: '#f7f0e6',
    label: 'Creative Solutions',
    title: 'Creative Strategy & Development',
    overview:
      'Purposeful creative excellence — brand films, patient stories, visual identity systems, and campaign concepts that build trust, inspire action, and elevate your healthcare brand.',
    benefits: [
      'Brand differentiation through storytelling',
      'Emotional connection with patients',
      'Clinical credibility through creative',
      'Consistent visual identity system',
    ],
    offerings: [
      { name: 'Brand Films', desc: 'Cinematic brand documentaries that tell your healthcare story compellingly' },
      { name: 'Corporate Films', desc: 'Professional institutional films for hospitals, clinics, and healthcare organizations' },
      { name: 'Patient Education Content', desc: 'Accessible, accurate health education across formats and languages' },
      { name: 'Visual Identity Systems', desc: 'Comprehensive brand identity design for healthcare organizations' },
      { name: 'Campaign Concepts', desc: 'Big idea development and creative campaign conceptualization' },
      { name: 'Motion Graphics & Animation', desc: 'Medical explainers, procedure videos, and animated health content' },
    ],
    deliverables: ['Creative Strategy', 'Visual Identity Guide', 'Film Productions', 'Campaign Assets', 'Brand Guidelines'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#4F8A77]/40 bg-[#4F8A77]/10">
              <span className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              Integrated Services for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">
                Healthcare Market Leaders
              </span>
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              From strategy to execution, we provide the full spectrum of brand, communications, and creative services that healthcare organizations need to achieve and sustain market leadership.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200} className="mt-10 flex flex-wrap gap-3">
            {services.map((s) => (
              <a key={s.id} href={`#${s.id}`}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors">
                <s.icon className="w-4 h-4" />
                {s.label}
              </a>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {services.map((service, idx) => (
        <section key={service.id} id={service.id}
          className={`py-24 ${idx % 2 === 0 ? 'bg-white dark:bg-[#0f1923]' : 'bg-[#f8fafc] dark:bg-[#0d1520]'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold"
                  style={{ color: service.color, backgroundColor: service.color + '15' }}>
                  <service.icon className="w-4 h-4" />
                  {service.label}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-5">
                  {service.title}
                </h2>
                <p className="text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed mb-8">{service.overview}</p>
                <div className="mb-8">
                  <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-4">Key Benefits</h3>
                  <div className="space-y-3">
                    {service.benefits.map((b) => (
                      <div key={b} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: service.color }} />
                        <span className="text-[#3A3A3A]/70 dark:text-white/65">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-3">Key Deliverables</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((d) => (
                      <span key={d} className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{ color: service.color, backgroundColor: service.color + '12' }}>{d}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl font-semibold text-white hover:-translate-y-0.5 transition-all"
                  style={{ backgroundColor: service.color }}>
                  Enquire About {service.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={200}>
                <div className="grid gap-4">
                  {service.offerings.map((offering) => (
                    <div key={offering.name}
                      className="group bg-white dark:bg-[#162d4a] rounded-xl p-5 border border-gray-100 dark:border-white/5 card-hover">
                      <h4 className="font-semibold font-heading text-[#1F3A5F] dark:text-white mb-1.5">{offering.name}</h4>
                      <p className="text-sm text-[#3A3A3A]/65 dark:text-white/55">{offering.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <ContactCTA />
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

const phases = [
  {
    num: '01',
    title: 'Market & Business Intelligence',
    color: '#2E75B6',
    icon: '📊',
    summary: 'Deep market analysis, competitive landscape mapping, and stakeholder intelligence to ground all strategy in evidence.',
    description:
      'Phase 1 establishes the intelligence foundation for all subsequent strategic decisions. We conduct comprehensive market research, competitive positioning analysis, patient behavior studies, and stakeholder mapping to ensure every strategy is grounded in evidence — not assumptions.',
    deliverables: [
      'Competitive Landscape Report',
      'Market Opportunity Assessment',
      'Patient Behavior Research',
      'Stakeholder Mapping Document',
      'Brand Health Baseline Audit',
      'Digital Presence Analysis',
    ],
    activities: [
      'Primary research with patients, physicians, and administrators',
      'Competitive intelligence and positioning matrix',
      'Market share and growth opportunity analysis',
      'Regulatory landscape review',
      'Technology and digital maturity assessment',
    ],
  },
  {
    num: '02',
    title: 'Brand Positioning',
    color: '#4F8A77',
    icon: '🎯',
    summary: 'Developing distinctive, evidence-based brand positioning that commands premium perception and stakeholder trust.',
    description:
      'Phase 2 defines exactly where and how your brand should position itself for maximum impact and differentiation. We develop compelling brand architecture, value propositions, messaging frameworks, and positioning territories that are both clinically credible and commercially powerful.',
    deliverables: [
      'Brand Positioning Statement',
      'Value Proposition Framework',
      'Messaging Matrix',
      'Brand Architecture Design',
      'Naming & Tagline Strategy',
      'Brand Personality Profile',
    ],
    activities: [
      'Brand positioning workshop with leadership',
      'Differentiation analysis across competitors',
      'Value proposition testing with target audiences',
      'Brand personality and voice definition',
      'Brand architecture decisions (endorsed, monolithic, or portfolio)',
    ],
  },
  {
    num: '03',
    title: 'Stakeholder Ecosystem Design',
    color: '#1F3A5F',
    icon: '🔗',
    summary: 'Mapping and designing engagement strategies for every critical stakeholder — physicians, patients, payers, partners, and media.',
    description:
      'Healthcare brands operate in complex multi-stakeholder ecosystems. Phase 3 maps every key stakeholder group, understands their motivations, barriers, and decision criteria, then designs tailored engagement strategies for each. From physician KOL programs to patient trust pathways.',
    deliverables: [
      'Stakeholder Ecosystem Map',
      'Physician Engagement Strategy',
      'Patient Journey Blueprint',
      'Payer Relations Framework',
      'Media Relations Strategy',
      'Community Engagement Plan',
    ],
    activities: [
      'Physician segmentation and KOL mapping',
      'Patient persona development',
      'Referral pathway analysis and optimization',
      'Community influencer identification',
      'Payer and insurer communication design',
    ],
  },
  {
    num: '04',
    title: 'Integrated Communications Strategy',
    color: '#B8924A',
    icon: '📡',
    summary: 'A unified communications strategy that ensures consistent brand experience across every ATL, BTL, digital, and earned media touchpoint.',
    description:
      'Phase 4 translates positioning into an actionable communications plan. We design the channel mix, message architecture, and content strategy that ensures every touchpoint — from mass media to physician events to digital content — reinforces your brand story and drives the desired stakeholder actions.',
    deliverables: [
      'Integrated Communications Plan',
      'Channel Strategy & Mix',
      'Content Strategy Framework',
      'ATL Campaign Brief',
      'BTL Activation Playbook',
      'Digital Communications Roadmap',
    ],
    activities: [
      'Channel prioritization based on stakeholder research',
      'Message adaptation for each channel and audience',
      'Content calendar development',
      'Media mix and budget allocation modeling',
      'Integration architecture for seamless brand experience',
    ],
  },
  {
    num: '05',
    title: 'Creative Strategy & Development',
    color: '#2E75B6',
    icon: '✨',
    summary: 'Purposeful creative excellence — films, campaigns, and visual systems that translate strategy into compelling brand experiences.',
    description:
      'Phase 5 brings strategy to life through world-class creative. Our creative team translates positioning and communications strategy into films, campaigns, visual identity systems, and content that resonates emotionally while maintaining clinical credibility and brand consistency.',
    deliverables: [
      'Creative Strategy Document',
      'Campaign Concept Decks',
      'Brand Film Production',
      'Visual Identity Guidelines',
      'Content Templates',
      'Campaign Asset Library',
    ],
    activities: [
      'Creative brief development from strategy',
      'Concept development and presentation',
      'Film scripting, production, and post-production',
      'Visual identity design and guidelines',
      'Campaign asset creation across all formats',
    ],
  },
  {
    num: '06',
    title: 'Measurement & Governance',
    color: '#4F8A77',
    icon: '📈',
    summary: 'Robust KPI frameworks, brand tracking systems, and governance models that ensure sustained brand performance and continuous optimization.',
    description:
      'Phase 6 ensures your brand investment delivers measurable ROI and continuous improvement. We design comprehensive measurement frameworks, establish brand tracking systems, set up reporting dashboards, and create governance structures that keep your brand on track over time.',
    deliverables: [
      'Brand KPI Framework',
      'Performance Dashboard',
      'Brand Health Tracker',
      'Campaign Attribution Model',
      'Governance Playbook',
      'Quarterly Review Template',
    ],
    activities: [
      'KPI definition and target setting',
      'Analytics infrastructure setup',
      'Brand health survey design and deployment',
      'Campaign performance monitoring',
      'Quarterly strategy review and optimization',
    ],
  },
];

export default function HCLFPage() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <>
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#B8924A]/40 bg-[#B8924A]/10">
              <span className="text-[#B8924A] text-xs font-semibold tracking-widest uppercase">Proprietary Methodology</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              The HCLF™ Framework
            </h1>
            <p className="text-xl text-white/65 leading-relaxed mb-4">
              Healthcare Communications &amp; Leadership Framework
            </p>
            <p className="text-white/55 leading-relaxed">
              A proprietary 6-phase methodology designed exclusively for healthcare organizations pursuing sustainable market leadership. Built by a doctor with a decade of frontline healthcare marketing expertise.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Six-Phase Methodology" title="From Intelligence to Impact"
            subtitle="Each phase builds on the last, creating a comprehensive strategic foundation for lasting market leadership."
            centered className="mb-14" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
            {phases.map((phase, i) => (
              <button key={phase.num}
                onClick={() => setActivePhase(activePhase === i ? null : i)}
                className="group text-center p-5 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: activePhase === i ? phase.color : 'transparent',
                  backgroundColor: activePhase === i ? phase.color + '10' : '#f8fafc',
                }}>
                <div className="text-2xl mb-3">{phase.icon}</div>
                <div className="text-xs font-bold font-mono mb-2" style={{ color: phase.color }}>Phase {phase.num}</div>
                <div className="text-xs font-semibold text-[#1F3A5F] dark:text-white leading-tight">{phase.title}</div>
              </button>
            ))}
          </div>

          {activePhase !== null && (
            <AnimatedSection direction="none">
              <div className="rounded-3xl p-8 md:p-12 border-2"
                style={{ borderColor: phases[activePhase].color + '30', backgroundColor: phases[activePhase].color + '05' }}>
                <div className="grid lg:grid-cols-2 gap-10">
                  <div>
                    <div className="text-xs font-bold font-mono mb-3" style={{ color: phases[activePhase].color }}>PHASE {phases[activePhase].num}</div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-4">{phases[activePhase].title}</h2>
                    <p className="text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed mb-6">{phases[activePhase].description}</p>
                    <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-4">Key Activities</h3>
                    <ul className="space-y-2">
                      {phases[activePhase].activities.map((act) => (
                        <li key={act} className="flex items-start gap-2 text-sm text-[#3A3A3A]/70 dark:text-white/60">
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: phases[activePhase].color }} />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-4">Deliverables</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {phases[activePhase].deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-3 p-4 bg-white dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5">
                          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: phases[activePhase].color }} />
                          <span className="text-sm font-medium text-[#1F3A5F] dark:text-white">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {activePhase === null && (
            <p className="text-center text-[#3A3A3A]/50 dark:text-white/40 text-sm">Click any phase above to explore its details →</p>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Deep Dive" title="Explore Every Phase" centered className="mb-12" />
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <AnimatedSection key={phase.num} delay={i * 80}>
                <details className="group bg-white dark:bg-[#162d4a] rounded-2xl border border-gray-100 dark:border-white/5 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold font-mono px-3 py-1 rounded-lg"
                        style={{ color: phase.color, backgroundColor: phase.color + '15' }}>{phase.num}</span>
                      <span className="text-2xl">{phase.icon}</span>
                      <h3 className="font-bold font-heading text-[#1F3A5F] dark:text-white">{phase.title}</h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 border-t border-gray-100 dark:border-white/5 pt-5">
                    <p className="text-[#3A3A3A]/70 dark:text-white/60 leading-relaxed mb-5">{phase.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm text-[#1F3A5F] dark:text-white mb-3">Key Activities</h4>
                        <ul className="space-y-1.5">
                          {phase.activities.map((a) => (
                            <li key={a} className="text-sm text-[#3A3A3A]/65 dark:text-white/55 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: phase.color }} />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[#1F3A5F] dark:text-white mb-3">Deliverables</h4>
                        <ul className="space-y-1.5">
                          {phase.deliverables.map((d) => (
                            <li key={d} className="text-sm text-[#3A3A3A]/65 dark:text-white/55 flex items-start gap-2">
                              <ArrowRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: phase.color }} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Ready to Apply the HCLF™ Framework to Your Organization?</h2>
          <p className="text-white/70 mb-8">Schedule a framework consultation to understand how each phase applies to your specific healthcare organization and growth objectives.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1F3A5F] font-bold rounded-xl hover:bg-[#DCE9F4] transition-all hover:-translate-y-1 shadow-xl">
            Book a Framework Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

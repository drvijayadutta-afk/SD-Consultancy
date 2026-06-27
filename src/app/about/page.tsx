import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Eye, Heart, Award, CheckCircle2, Stethoscope, TrendingUp, Users, Globe, Zap, Star, BookOpen } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ContactCTA } from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'About S.D Consultancy | Dr. Vijaya Dutta | Healthcare Brand Strategy',
  description: 'S.D Consultancy was founded by Dr. Vijaya Dutta — BDS, Rank 14 IP University, formerly Senior Executive Marketing at Manipal Hospitals & Max Healthcare. India\'s premier 360° healthcare brand strategy consultancy.',
};

const expertise = [
  { icon: TrendingUp, label: 'Healthcare Brand Strategy',     color: '#2E75B6' },
  { icon: Users,      label: 'Patient Acquisition & Loyalty', color: '#4F8A77' },
  { icon: Globe,      label: 'Integrated Communications',     color: '#1F3A5F' },
  { icon: Zap,        label: 'Digital Health Marketing',      color: '#B8924A' },
  { icon: Star,       label: 'Physician Engagement Networks', color: '#2E75B6' },
  { icon: BookOpen,   label: 'Clinical Content & Messaging',  color: '#4F8A77' },
];

const credentials = [
  { label: 'BDS Graduate',           sub: 'ESIC Dental College',                    color: '#2E75B6' },
  { label: 'Rank 14',                sub: 'IP University (2018)',                    color: '#B8924A' },
  { label: 'Manipal Hospitals',      sub: 'Sr. Executive – Marketing (South)',       color: '#4F8A77' },
  { label: 'Max Healthcare',         sub: 'Healthcare Brand & Communications',       color: '#1F3A5F' },
];

const values = [
  { icon: Target, title: 'Strategic Precision',     desc: 'Every recommendation is grounded in data, market intelligence, and deep sector expertise — not assumptions.' },
  { icon: Award,  title: 'Clinical Understanding',  desc: 'Founded by a doctor who speaks the language of healthcare professionals, patients, and administrators alike.' },
  { icon: Heart,  title: 'Purpose-Driven Creativity', desc: 'Creative excellence in service of meaningful healthcare outcomes — not awards, not noise.' },
  { icon: Eye,    title: 'Long-Term Partnership',   desc: 'We invest in your growth as a true strategic partner. Not a vendor. Not a retainer. A partner.' },
];

const timeline = [
  {
    year: '2018',
    title: 'Foundation of Clinical Excellence',
    event: 'Dr. Vijaya Dutta completed BDS from ESIC Dental College, ranking 14th in IP University — a rigorous clinical foundation that would inform every strategic decision in the years ahead.',
    color: '#2E75B6',
  },
  {
    year: '2018–2020',
    title: 'Max Healthcare',
    event: 'Joined Max Healthcare — one of India\'s premier hospital networks — gaining deep exposure to enterprise healthcare brand-building, patient communications, and multi-specialty marketing at scale across flagship hospitals.',
    color: '#4F8A77',
  },
  {
    year: '2020–2024',
    title: 'Manipal Hospitals',
    event: 'Rose to Senior Executive – Marketing at Manipal Hospitals (Regional Office South, Bangalore), leading healthcare brand strategy across complex ecosystems — referral networks, specialist positioning, physician engagement, and integrated communications across multiple verticals.',
    color: '#1F3A5F',
  },
  {
    year: '2022',
    title: 'HCLF™ Framework Born',
    event: 'Developed the foundational principles of the HCLF™ Framework — crystallizing years of frontline healthcare marketing experience at India\'s largest hospital groups into a structured, repeatable methodology for market leadership.',
    color: '#B8924A',
  },
  {
    year: '2024',
    title: 'Building the Network',
    event: 'Led brand strategy and communications for multiple healthcare organizations simultaneously, building a curated network of senior strategists, medical writers, digital specialists, and creative directors.',
    color: '#2E75B6',
  },
  {
    year: '2026',
    title: 'S.D Consultancy Founded',
    event: 'Founded S.D Consultancy — channelling clinical credibility, enterprise healthcare marketing experience, and a proven proprietary framework into India\'s premier 360° healthcare brand strategy consultancy.',
    color: '#4F8A77',
  },
];

const pillars = [
  { title: 'Clinical Fluency',         desc: 'We understand healthcare from the inside — the language, the constraints, the trust imperative.' },
  { title: 'Strategy Before Channels', desc: 'Deep insight and positioning always precede tactical channel decisions.' },
  { title: 'Integrated Thinking',      desc: 'Strategy, communications, and creative are unified — not siloed or outsourced.' },
  { title: 'Creative With Purpose',    desc: 'Imagination harnessed for measurable brand outcomes, not just aesthetic appeal.' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero-gradient relative pt-32 pb-24 overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-[#2E75B6]/12 blur-[140px]" />
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#4F8A77]/10 blur-[120px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#4F8A77]/40 bg-[#4F8A77]/10 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F8A77] animate-pulse" />
                <span className="text-[#4F8A77] text-xs font-bold tracking-[0.2em] uppercase">About S.D Consultancy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-[1.05] mb-6 tracking-tight">
                Founded by a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">
                  Doctor.
                </span>
                <br />Built for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCE9F4] to-[#4F8A77]">
                  Healthcare Leaders.
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
                S.D Consultancy is India&apos;s premier 360° healthcare brand, communications, and creative strategy consultancy — built on the rare combination of clinical credibility and enterprise marketing experience.
              </p>
              <div className="flex flex-wrap gap-3">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/8 border border-white/12 backdrop-blur-sm hover:bg-white/14 transition-all duration-300"
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
                    <div>
                      <div className="text-white text-xs font-bold">{c.label}</div>
                      <div className="text-white/50 text-[10px]">{c.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right — founder card */}
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="glass-card rounded-3xl p-8 border border-white/12 hover:border-white/22 transition-all duration-500">
                  {/* Gradient top bar */}
                  <div className="absolute top-0 left-8 right-8 h-0.5 rounded-full bg-gradient-to-r from-[#2E75B6] via-[#4F8A77] to-[#B8924A]" />

                  <div className="flex items-start gap-5 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2E75B6] to-[#4F8A77] flex items-center justify-center flex-shrink-0 shadow-xl shadow-[#2E75B6]/30">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold font-heading text-xl mb-0.5">Dr. Vijaya Dutta</div>
                      <div className="text-[#4F8A77] font-semibold text-sm mb-1">Founder & Chief Strategy Officer</div>
                      <div className="text-white/45 text-xs">S.D Consultancy · New Delhi, India</div>
                    </div>
                  </div>

                  <blockquote className="text-white/75 text-sm leading-relaxed italic border-l-2 border-[#4F8A77] pl-4 mb-8">
                    &ldquo;Clinical excellence is the foundation. Strategic communication is what makes it visible. We built S.D Consultancy because healthcare organizations deserve both — not one or the other.&rdquo;
                  </blockquote>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { n: '10+',  l: 'Years Expertise',    c: '#2E75B6' },
                      { n: '30+',  l: 'Organizations',      c: '#4F8A77' },
                      { n: '98%',  l: 'Client Retention',   c: '#B8924A' },
                      { n: '6',    l: 'Healthcare Verticals', c: '#1F3A5F' },
                    ].map((s) => (
                      <div key={s.l} className="bg-white/5 rounded-xl p-4 border border-white/8 hover:bg-white/10 transition-all duration-300">
                        <div className="text-2xl font-bold font-mono mb-0.5" style={{ color: s.c }}>{s.n}</div>
                        <div className="text-white/55 text-xs">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -inset-6 bg-gradient-to-br from-[#2E75B6]/6 to-[#4F8A77]/4 rounded-3xl blur-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── FOUNDER STORY ── */}
      <section className="py-28 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]" />
                <span className="text-[#2E75B6] text-xs font-bold tracking-[0.2em] uppercase">The Founder&apos;s Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F3A5F] dark:text-white leading-tight mb-6">
                A Dentist Who Chose{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E75B6] to-[#4F8A77]">
                  Strategy
                </span>
              </h2>
              <div className="space-y-5 text-[#3A3A3A]/70 dark:text-white/65 leading-relaxed">
                <p>
                  Dr. Vijaya Dutta graduated in 2018 as a dental surgeon from ESIC Dental College, ranking 14th in IP University — a distinction that reflected both academic rigor and an analytical mind primed for complex problem-solving.
                </p>
                <p>
                  Her path took an unconventional turn when she entered the marketing division of Max Healthcare, one of India&apos;s most respected premium hospital networks. There, she immersed herself in the full spectrum of healthcare brand-building: patient communication strategy, multi-specialty campaign design, and the nuanced art of making clinical excellence visible to patients, physicians, and partner organizations.
                </p>
                <p>
                  At Manipal Hospitals, as Senior Executive – Marketing (Regional Office South, Bangalore), she scaled that expertise across one of Asia&apos;s largest integrated healthcare networks. She led physician referral network development, drove regional brand campaigns, and built patient acquisition systems that blended clinical insight with data-driven strategy.
                </p>
                <p>
                  The pattern she witnessed — world-class clinical capabilities consistently struggling to communicate their value — became the founding insight of S.D Consultancy and the HCLF™ Framework.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-4">
                <div className="mb-8">
                  <div className="text-xs font-bold tracking-widest uppercase text-[#3A3A3A]/45 dark:text-white/35 mb-4">Areas of Expertise</div>
                  <div className="grid grid-cols-1 gap-3">
                    {expertise.map((e, i) => (
                      <div
                        key={e.label}
                        className="flex items-center gap-4 p-4 bg-[#f8fafc] dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-lg hover:shadow-[#2E75B6]/8 dark:hover:shadow-black/20 transition-all duration-300 hover:-translate-x-1"
                        style={{ transitionDelay: `${i * 40}ms` }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: e.color + '18' }}
                        >
                          <e.icon className="w-4 h-4" style={{ color: e.color }} />
                        </div>
                        <span className="font-semibold text-[#1F3A5F] dark:text-white text-sm">{e.label}</span>
                        <div className="ml-auto w-1 h-1 rounded-full" style={{ backgroundColor: e.color }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY PULL QUOTE ── */}
      <section className="py-20 bg-[#f8fafc] dark:bg-[#0d1520] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="relative">
              <div className="text-[120px] md:text-[180px] font-bold font-heading text-[#1F3A5F]/5 dark:text-white/4 leading-none absolute -top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap">
                &ldquo;
              </div>
              <blockquote className="relative text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-[#1F3A5F] dark:text-white leading-snug mb-6">
                Healthcare brands that patients{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E75B6] to-[#4F8A77]">
                  trust
                </span>{' '}
                aren&apos;t built on bigger budgets.{' '}
                They&apos;re built on{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">
                  deeper understanding.
                </span>
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#2E75B6]" />
                <span className="text-[#2E75B6] font-semibold text-sm">Dr. Vijaya Dutta, Founder</span>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#2E75B6]" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── MISSION / VISION / PROMISE ── */}
      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]" />
              <span className="text-[#2E75B6] text-xs font-bold tracking-[0.2em] uppercase">What We Stand For</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F3A5F] dark:text-white">
              Mission, Vision & Promise
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                label: 'Our Mission',
                color: '#2E75B6',
                gradient: 'from-[#2E75B6] to-[#1F3A5F]',
                text: 'To help healthcare organizations build stronger brands, deeper stakeholder trust, and sustainable market leadership through integrated strategy, communications, and creative excellence.',
              },
              {
                icon: Eye,
                label: 'Our Vision',
                color: '#4F8A77',
                gradient: 'from-[#4F8A77] to-[#1F3A5F]',
                text: 'To be the most trusted strategic partner for healthcare organizations across South Asia — known for clinical understanding, strategic rigor, and creative impact that transforms healthcare brands.',
              },
              {
                icon: Heart,
                label: 'Brand Promise',
                color: '#B8924A',
                gradient: 'from-[#B8924A] to-[#4F8A77]',
                text: "We bring the strategic depth of a management consultancy, the communication expertise of a healthcare agency, and the creative energy of a world-class studio — unified in service of your growth.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 120}>
                <div className="group relative bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl p-8 border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-[#2E75B6]/10 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-2 h-full overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.color + '15' }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: item.color }}>
                    {item.label}
                  </div>
                  <p className="text-[#3A3A3A]/70 dark:text-white/65 leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DIFFERENT ── */}
      <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]" />
                <span className="text-[#2E75B6] text-xs font-bold tracking-[0.2em] uppercase">Our Strategic Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F3A5F] dark:text-white leading-tight mb-4">
                Why a Doctor-Founded Consultancy<br />Is Different
              </h2>
              <p className="text-[#3A3A3A]/65 dark:text-white/60 leading-relaxed mb-2">
                Healthcare is one of the most regulated, trust-sensitive, and stakeholder-complex sectors in the world. Generic marketing doesn&apos;t work here — and neither do agencies without clinical credibility.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="space-y-4">
                {pillars.map((pillar, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 bg-white dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#2E75B6]/30 hover:shadow-lg hover:shadow-[#2E75B6]/8 transition-all duration-300 hover:-translate-x-1"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#4F8A77] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-bold text-[#1F3A5F] dark:text-white mb-1 text-sm">{pillar.title}</div>
                      <div className="text-[#3A3A3A]/65 dark:text-white/55 text-sm">{pillar.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]" />
              <span className="text-[#2E75B6] text-xs font-bold tracking-[0.2em] uppercase">What We Stand For</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#1F3A5F] dark:text-white">Our Core Values</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 100}>
                <div className="group bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl p-7 border border-gray-100 dark:border-white/5 hover:border-transparent hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2E75B6]/10 dark:hover:shadow-black/30 transition-all duration-300 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#DCE9F4] dark:bg-[#2E75B6]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <v.icon className="w-7 h-7 text-[#2E75B6]" />
                  </div>
                  <h3 className="font-bold font-heading text-[#1F3A5F] dark:text-white mb-3">{v.title}</h3>
                  <p className="text-sm text-[#3A3A3A]/65 dark:text-white/55 leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A5F] via-[#162d4a] to-[#0b1520]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-20">
          <svg viewBox="0 0 1400 80" className="w-full">
            <path d="M 0 60 L 200 60 L 240 40 L 270 60 L 285 20 L 310 80 L 340 50 L 370 60 L 600 60 C 800 60 1000 40 1200 30 C 1300 25 1370 22 1400 20"
              stroke="url(#tlEcgGrad)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <defs>
              <linearGradient id="tlEcgGrad" x1="0" y1="0" x2="1400" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2E75B6" stopOpacity="0" />
                <stop offset="0.3" stopColor="#2E75B6" stopOpacity="1" />
                <stop offset="0.7" stopColor="#4F8A77" stopOpacity="1" />
                <stop offset="1" stopColor="#B8924A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#B8924A]/30 bg-[#B8924A]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8924A]" />
              <span className="text-[#B8924A] text-xs font-bold tracking-[0.2em] uppercase">The Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight">
              From Clinical Excellence<br />to Strategic Leadership
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:-translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={item.year + item.title} delay={i * 100}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 hidden md:block" />
                    <div className="relative z-10 flex-shrink-0 md:mx-8">
                      <div
                        className="w-12 h-12 rounded-full border-2 border-[#0f1923] flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: item.color }}
                      >
                        <span className="text-white font-bold font-mono text-[10px]">{item.year.slice(0, 4)}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="group bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl p-6 hover:bg-white/9 hover:border-white/18 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg"
                            style={{ color: item.color, backgroundColor: item.color + '18' }}
                          >
                            {item.year}
                          </span>
                          <span className="text-white font-bold text-sm font-heading">{item.title}</span>
                        </div>
                        <p className="text-white/65 text-sm leading-relaxed">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}

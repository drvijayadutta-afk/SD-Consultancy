'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Calendar, Clock, ArrowRight, Send } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const categories = [
  'All',
  'Healthcare Branding',
  'Hospital Marketing Strategy',
  'Patient Experience',
  'Healthcare Communications',
  'Digital Health',
  'MedTech Growth',
  'Referral Network Development',
];

const articles = [
  {
    category: 'Healthcare Branding',
    title: 'Why Clinical Excellence Alone Is No Longer Enough: The Case for Healthcare Brand Strategy',
    excerpt: 'In an era where patients have unprecedented access to information and options, clinical quality is the baseline — not the differentiator. Learn why brand strategy is the new competitive frontier.',
    date: 'June 15, 2026',
    readTime: '8 min read',
    color: '#2E75B6',
    slug: 'clinical-excellence-brand-strategy',
    featured: true,
  },
  {
    category: 'Hospital Marketing Strategy',
    title: 'The Referral Ecosystem: Building Physician Networks That Drive Sustainable Growth',
    excerpt: 'Referral networks remain the backbone of hospital growth. Discover the strategic framework for building, nurturing, and expanding physician relationships at scale.',
    date: 'June 5, 2026',
    readTime: '6 min read',
    color: '#4F8A77',
    slug: 'referral-ecosystem-physician-networks',
    featured: true,
  },
  {
    category: 'Digital Health',
    title: 'Patient Digital Journey Design: From First Search to Brand Loyalty',
    excerpt: 'The patient decision journey begins long before the first appointment. Map the digital touchpoints that matter most and design experiences that build lasting trust.',
    date: 'May 22, 2026',
    readTime: '10 min read',
    color: '#B8924A',
    slug: 'patient-digital-journey-design',
    featured: true,
  },
  {
    category: 'Healthcare Communications',
    title: 'Communicating Clinical Outcomes: The Art and Science of Healthcare Data Storytelling',
    excerpt: 'How do you translate complex clinical data into compelling patient communications? This framework helps healthcare marketers tell outcome stories with integrity and impact.',
    date: 'May 10, 2026',
    readTime: '7 min read',
    color: '#1F3A5F',
    slug: 'clinical-outcomes-data-storytelling',
    featured: false,
  },
  {
    category: 'MedTech Growth',
    title: 'HCP Engagement in the Digital Age: Rethinking Medical Representative Strategies',
    excerpt: 'The traditional medical representative model is under pressure. Discover how leading MedTech brands are redesigning HCP engagement for the post-pandemic world.',
    date: 'April 28, 2026',
    readTime: '9 min read',
    color: '#2E75B6',
    slug: 'hcp-engagement-digital-age',
    featured: false,
  },
  {
    category: 'Patient Experience',
    title: 'Beyond Treatment: Designing the Holistic Patient Experience That Builds Advocacy',
    excerpt: 'Patient experience extends far beyond clinical care. Learn how leading healthcare organizations design end-to-end experiences that turn patients into brand advocates.',
    date: 'April 15, 2026',
    readTime: '8 min read',
    color: '#4F8A77',
    slug: 'holistic-patient-experience-advocacy',
    featured: false,
  },
  {
    category: 'Referral Network Development',
    title: 'The Science of Physician Loyalty: What Makes Doctors Refer — And Keep Referring',
    excerpt: 'Physician referral decisions are driven by trust, communication quality, and relationship depth — not just clinical reputation. Here is the framework for building lasting loyalty.',
    date: 'April 5, 2026',
    readTime: '11 min read',
    color: '#B8924A',
    slug: 'physician-loyalty-referral-science',
    featured: false,
  },
  {
    category: 'Healthcare Branding',
    title: 'Rebranding a Hospital: The Complete Strategic Playbook',
    excerpt: 'A hospital rebrand is one of the highest-stakes communications decisions an organization can make. This guide covers everything — from strategy to stakeholder management to launch.',
    date: 'March 20, 2026',
    readTime: '14 min read',
    color: '#2E75B6',
    slug: 'hospital-rebranding-strategic-playbook',
    featured: false,
  },
  {
    category: 'Digital Health',
    title: 'SEO for Hospitals: The Definitive Guide to Organic Patient Acquisition',
    excerpt: 'Healthcare SEO is uniquely complex — YMYL guidelines, medical terminology, local SEO, and reputation management all intersect. This is the complete guide for healthcare marketers.',
    date: 'March 8, 2026',
    readTime: '12 min read',
    color: '#4F8A77',
    slug: 'hospital-seo-organic-patient-acquisition',
    featured: false,
  },
];

export default function InsightsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = articles.filter((a) => {
    const matchCat = category === 'All' || a.category === category;
    const matchSearch =
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.filter((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured);

  return (
    <>
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#4F8A77]/40 bg-[#4F8A77]/10">
              <span className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">Thought Leadership</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">Healthcare Brand Insights</h1>
            <p className="text-lg text-white/65 leading-relaxed">Strategic perspectives, frameworks, and practical guidance for healthcare leaders navigating complex markets.</p>
          </AnimatedSection>
          <AnimatedSection delay={200} className="mt-10 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Search insights..."
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-[#4F8A77] transition-colors" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? 'bg-[#1F3A5F] text-white'
                    : 'bg-[#f8fafc] dark:bg-[#162d4a] text-[#3A3A3A]/70 dark:text-white/60 hover:bg-[#DCE9F4] dark:hover:bg-[#2E75B6]/20'
                }`}>{cat}</button>
            ))}
          </div>

          {featured.length > 0 && (
            <>
              <SectionHeader eyebrow="Featured" title="Must-Read Insights" className="mb-8" />
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {featured.map((article, i) => (
                  <AnimatedSection key={article.slug} delay={i * 100}>
                    <Link href={`/insights/${article.slug}`}
                      className="group block bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 card-hover h-full">
                      <div className="h-2" style={{ backgroundColor: article.color }} />
                      <div className="p-7">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full"
                          style={{ color: article.color, backgroundColor: article.color + '15' }}>{article.category}</span>
                        <h3 className="mt-4 mb-3 font-bold font-heading text-[#1F3A5F] dark:text-white leading-snug group-hover:text-[#2E75B6] transition-colors">{article.title}</h3>
                        <p className="text-sm text-[#3A3A3A]/65 dark:text-white/55 leading-relaxed mb-5">{article.excerpt}</p>
                        <div className="flex items-center justify-between text-xs text-[#3A3A3A]/50 dark:text-white/40">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}

          {rest.length > 0 && (
            <>
              <SectionHeader eyebrow="All Insights" title="Latest Articles" className="mb-8" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((article, i) => (
                  <AnimatedSection key={article.slug} delay={i * 80}>
                    <Link href={`/insights/${article.slug}`}
                      className="group flex flex-col bg-[#f8fafc] dark:bg-[#162d4a] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 card-hover">
                      <div className="h-1.5" style={{ backgroundColor: article.color }} />
                      <div className="p-6 flex-1 flex flex-col">
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full self-start"
                          style={{ color: article.color, backgroundColor: article.color + '15' }}>{article.category}</span>
                        <h3 className="mt-3 mb-2 font-bold font-heading text-[#1F3A5F] dark:text-white leading-snug group-hover:text-[#2E75B6] transition-colors text-sm flex-1">{article.title}</h3>
                        <div className="flex items-center justify-between text-xs text-[#3A3A3A]/50 dark:text-white/40 mt-4">
                          <span>{article.date}</span>
                          <span className="flex items-center gap-1.5 text-[#2E75B6]">Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#3A3A3A]/50 dark:text-white/40">
              No articles found for your search. Try a different keyword or category.
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-heading text-white mb-4">Healthcare Insights Newsletter</h2>
          <p className="text-white/70 mb-8">Strategic insights, framework updates, and sector perspectives — delivered monthly to healthcare leaders who want to stay ahead.</p>
          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-[#4F8A77] font-semibold text-lg">
              <Send className="w-5 h-5" /> Thank you! You&apos;re subscribed.
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="flex gap-3">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" required
                className="flex-1 px-5 py-3.5 rounded-xl bg-white/15 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:border-white" />
              <button type="submit" className="px-6 py-3.5 bg-white text-[#1F3A5F] font-bold rounded-xl hover:bg-[#DCE9F4] transition-colors">Subscribe</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}

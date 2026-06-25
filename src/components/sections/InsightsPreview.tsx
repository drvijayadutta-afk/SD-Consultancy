import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const articles = [
  { category: 'Healthcare Branding', title: 'Why Clinical Excellence Alone Is No Longer Enough: The Case for Healthcare Brand Strategy', excerpt: 'In an era where patients have unprecedented access to information and options, clinical quality is the baseline. Learn why brand strategy is the new competitive frontier.', date: 'June 15, 2025', readTime: '8 min read', color: '#2E75B6', slug: 'clinical-excellence-brand-strategy' },
  { category: 'Hospital Marketing Strategy', title: 'The Referral Ecosystem: Building Physician Networks That Drive Sustainable Growth', excerpt: 'Referral networks remain the backbone of hospital growth. Discover the strategic framework for building, nurturing, and expanding physician relationships.', date: 'June 5, 2025', readTime: '6 min read', color: '#4F8A77', slug: 'referral-ecosystem-physician-networks' },
  { category: 'Digital Health', title: 'Patient Digital Journey Design: From First Search to Brand Loyalty', excerpt: 'The patient decision journey begins long before the first appointment. Map the digital touchpoints that matter and design experiences that build lasting trust.', date: 'May 22, 2025', readTime: '10 min read', color: '#B8924A', slug: 'patient-digital-journey-design' },
];

export function InsightsPreview() {
  return (
    <section className="py-24 bg-[#f8fafc] dark:bg-[#0d1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeader eyebrow="Thought Leadership" title="Healthcare Brand Insights" subtitle="Strategic perspectives for healthcare leaders navigating complex markets." />
          <Link href="/insights" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1F3A5F] text-[#1F3A5F] dark:border-white dark:text-white font-semibold rounded-xl hover:bg-[#1F3A5F] hover:text-white dark:hover:bg-white dark:hover:text-[#1F3A5F] transition-all">
            View All Insights <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 120}>
              <Link href={`/insights/${article.slug}`} className="group block bg-white dark:bg-[#162d4a] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 card-hover h-full">
                <div className="h-2 w-full" style={{ backgroundColor: article.color }} />
                <div className="p-7">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ color: article.color, backgroundColor: article.color + '15' }}>{article.category}</span>
                  <h3 className="mt-4 mb-3 font-bold font-heading text-[#1F3A5F] dark:text-white leading-snug group-hover:text-[#2E75B6] transition-colors">{article.title}</h3>
                  <p className="text-sm text-[#3A3A3A]/65 dark:text-white/55 leading-relaxed mb-6">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-[#3A3A3A]/50 dark:text-white/40">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{article.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{article.readTime}</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

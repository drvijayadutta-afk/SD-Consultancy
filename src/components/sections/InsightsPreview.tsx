import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const articles = [
  {
    category: 'Healthcare Branding',
    title: 'Why Clinical Excellence Alone Is No Longer Enough: The Case for Healthcare Brand Strategy',
    excerpt: 'In an era where patients have unprecedented access to information and options, clinical quality is the baseline. Brand strategy is the new competitive frontier.',
    date: 'June 15, 2025',
    readTime: '8 min read',
    color: '#2E75B6',
    slug: 'clinical-excellence-brand-strategy',
    featured: true,
  },
  {
    category: 'Hospital Marketing',
    title: 'The Referral Ecosystem: Building Physician Networks That Drive Sustainable Growth',
    excerpt: 'Discover the strategic framework for building, nurturing, and expanding physician relationships that sustain hospital growth.',
    date: 'June 5, 2025',
    readTime: '6 min read',
    color: '#4F8A77',
    slug: 'referral-ecosystem-physician-networks',
    featured: false,
  },
  {
    category: 'Digital Health',
    title: 'Patient Digital Journey Design: From First Search to Brand Loyalty',
    excerpt: 'Map the digital touchpoints that matter and design experiences that build lasting patient trust and advocacy.',
    date: 'May 22, 2025',
    readTime: '10 min read',
    color: '#B8924A',
    slug: 'patient-digital-journey-design',
    featured: false,
  },
];

export function InsightsPreview() {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <section className="py-28 bg-[#f8fafc] dark:bg-[#0d1520]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#DCE9F4] dark:bg-[#2E75B6]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]" />
                <span className="text-[#2E75B6] text-xs font-bold tracking-[0.2em] uppercase">Thought Leadership</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-[#1F3A5F] dark:text-white leading-tight mb-3">
                Healthcare Brand Insights
              </h2>
              <p className="text-[#3A3A3A]/75 dark:text-white/65 max-w-lg">
                Strategic perspectives for healthcare leaders navigating complex markets.
              </p>
            </div>
            <Link
              href="/insights"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 border-2 border-[#1F3A5F] dark:border-white/30 text-[#1F3A5F] dark:text-white font-semibold rounded-xl hover:bg-[#1F3A5F] hover:text-white dark:hover:bg-white/10 transition-all text-sm"
            >
              View All Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-5">
          <AnimatedSection className="lg:col-span-3">
            <Link
              href={`/insights/${featured.slug}`}
              className="group block bg-white dark:bg-[#111c2e] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-2xl hover:shadow-[#1F3A5F]/10 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div className="h-2" style={{ background: `linear-gradient(to right, ${featured.color}, #1F3A5F)` }} />
              <div className="p-8 md:p-10 flex flex-col h-[calc(100%-8px)]">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ color: featured.color, backgroundColor: featured.color + '15' }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs text-[#3A3A3A]/60 dark:text-white/50 font-semibold tracking-widest uppercase">Featured</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-4 leading-snug group-hover:text-[#2E75B6] transition-colors flex-1">
                  {featured.title}
                </h3>
                <p className="text-[#3A3A3A]/75 dark:text-white/65 leading-relaxed mb-8">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5 text-xs text-[#3A3A3A]/60 dark:text-white/55">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: featured.color }}>
                    Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {rest.map((article, i) => (
              <AnimatedSection key={article.slug} delay={(i + 1) * 120} className="flex-1">
                <Link
                  href={`/insights/${article.slug}`}
                  className="group flex flex-col bg-white dark:bg-[#111c2e] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 hover:border-transparent hover:shadow-xl hover:shadow-[#1F3A5F]/8 dark:hover:shadow-black/30 transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="h-1.5" style={{ background: `linear-gradient(to right, ${article.color}, ${article.color}88)` }} />
                  <div className="p-6 flex flex-col flex-1">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full mb-4 self-start"
                      style={{ color: article.color, backgroundColor: article.color + '15' }}
                    >
                      {article.category}
                    </span>
                    <h3 className="font-bold font-heading text-[#1F3A5F] dark:text-white mb-3 leading-snug group-hover:text-[#2E75B6] transition-colors flex-1 text-sm">
                      {article.title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50 dark:border-white/5">
                      <span className="text-xs text-[#3A3A3A]/60 dark:text-white/55 flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />{article.readTime}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: article.color }}>
                        Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

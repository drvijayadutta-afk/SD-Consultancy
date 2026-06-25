'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeader } from '@/components/ui/SectionHeader';

const industries = [
  'Hospital Chain',
  'Specialty Hospital',
  'Diagnostics Network',
  'IVF & Fertility',
  'HealthTech',
  'MedTech',
  'Pharmaceutical',
  'Other Healthcare',
];

const budgets = [
  'Under ₹10 Lakhs',
  '₹10 – ₹25 Lakhs',
  '₹25 – ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  'Above ₹1 Crore',
  'To Be Determined',
];

const inquiryTypes = [
  { label: 'Brand Strategy', icon: '🎯' },
  { label: 'ATL Campaign', icon: '📺' },
  { label: 'BTL Activation', icon: '🤝' },
  { label: 'Digital Strategy', icon: '💻' },
  { label: 'Creative Production', icon: '🎬' },
  { label: 'HCLF™ Framework', icon: '📊' },
  { label: 'General Inquiry', icon: '💬' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    industry: '',
    inquiryType: '',
    challenge: '',
    budget: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[#4F8A77]/40 bg-[#4F8A77]/10">
              <span className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white leading-tight mb-6">
              Let&apos;s Build Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8A77] to-[#B8924A]">
                Healthcare Brand Leadership
              </span>{' '}
              Strategy
            </h1>
            <p className="text-lg text-white/65 leading-relaxed">
              Tell us about your organization and challenges. We&apos;ll respond within 24 hours with an initial perspective on how we can help.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[#0f1923]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <AnimatedSection>
                <SectionHeader eyebrow="Contact" title="Start the Conversation" />
                <p className="mt-4 text-[#3A3A3A]/65 dark:text-white/60 leading-relaxed">
                  Whether you&apos;re ready to start a project or just exploring how we can help, we&apos;re here to have a meaningful conversation about your healthcare brand.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <div className="space-y-5">
                  <a href="mailto:hello@sdconsultancy.in" className="flex items-start gap-4 p-5 bg-[#f8fafc] dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#2E75B6]/40 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-[#DCE9F4] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#2E75B6]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#3A3A3A]/50 dark:text-white/40 uppercase tracking-wide mb-1">Email</div>
                      <div className="font-medium text-[#1F3A5F] dark:text-white group-hover:text-[#2E75B6] transition-colors">hello@sdconsultancy.in</div>
                    </div>
                  </a>
                  <a href="tel:+919999999999" className="flex items-start gap-4 p-5 bg-[#f8fafc] dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5 hover:border-[#2E75B6]/40 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-[#e8f4f0] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#4F8A77]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#3A3A3A]/50 dark:text-white/40 uppercase tracking-wide mb-1">Phone</div>
                      <div className="font-medium text-[#1F3A5F] dark:text-white group-hover:text-[#2E75B6] transition-colors">+91 99999 99999</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-5 bg-[#f8fafc] dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-[#f7f0e6] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#B8924A]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#3A3A3A]/50 dark:text-white/40 uppercase tracking-wide mb-1">Office</div>
                      <div className="font-medium text-[#1F3A5F] dark:text-white">Mumbai, Maharashtra</div>
                      <div className="text-sm text-[#3A3A3A]/60 dark:text-white/50">India</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-[#f8fafc] dark:bg-[#162d4a] rounded-xl border border-gray-100 dark:border-white/5">
                    <div className="w-10 h-10 rounded-xl bg-[#DCE9F4] flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-[#2E75B6]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#3A3A3A]/50 dark:text-white/40 uppercase tracking-wide mb-1">Response Time</div>
                      <div className="font-medium text-[#1F3A5F] dark:text-white">Within 24 hours</div>
                      <div className="text-sm text-[#3A3A3A]/60 dark:text-white/50">Mon – Sat, 9am – 6pm IST</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <h3 className="font-semibold text-[#1F3A5F] dark:text-white mb-4">What can we help with?</h3>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((t) => (
                    <div key={t.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f8fafc] dark:bg-[#162d4a] border border-gray-100 dark:border-white/5 rounded-full text-sm text-[#3A3A3A]/70 dark:text-white/60">
                      <span>{t.icon}</span>
                      {t.label}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="right" className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center bg-[#f8fafc] dark:bg-[#162d4a] rounded-3xl p-12 border border-gray-100 dark:border-white/5">
                  <div className="w-20 h-20 rounded-full bg-[#4F8A77]/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[#4F8A77]" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-4">
                    Thank You, {form.name.split(' ')[0]}!
                  </h2>
                  <p className="text-[#3A3A3A]/65 dark:text-white/60 max-w-md leading-relaxed">
                    We&apos;ve received your enquiry and will respond within 24 hours with our initial perspective on how S.D Consultancy can help {form.organization} achieve its healthcare brand goals.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#f8fafc] dark:bg-[#162d4a] rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-white/5">
                  <h2 className="text-xl font-bold font-heading text-[#1F3A5F] dark:text-white mb-8">Strategy Consultation Enquiry</h2>
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-[#3A3A3A] dark:text-white/80 mb-2">Your Name <span className="text-red-500">*</span></label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Dr. Ananya Krishnamurthy" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1923] text-[#3A3A3A] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#2E75B6] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3A3A3A] dark:text-white/80 mb-2">Organization <span className="text-red-500">*</span></label>
                      <input name="organization" value={form.organization} onChange={handleChange} required placeholder="Apollo Hospitals Group" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1923] text-[#3A3A3A] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#2E75B6] transition-colors" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-[#3A3A3A] dark:text-white/80 mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="ananya@apollohospitals.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1923] text-[#3A3A3A] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#2E75B6] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3A3A3A] dark:text-white/80 mb-2">Phone Number</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1923] text-[#3A3A3A] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#2E75B6] transition-colors" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-[#3A3A3A] dark:text-white/80 mb-2">Industry <span className="text-red-500">*</span></label>
                      <select name="industry" value={form.industry} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1923] text-[#3A3A3A] dark:text-white focus:outline-none focus:border-[#2E75B6] transition-colors">
                        <option value="">Select your industry</option>
                        {industries.map((i) => (<option key={i} value={i}>{i}</option>))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#3A3A3A] dark:text-white/80 mb-2">Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1923] text-[#3A3A3A] dark:text-white focus:outline-none focus:border-[#2E75B6] transition-colors">
                        <option value="">Select budget range</option>
                        {budgets.map((b) => (<option key={b} value={b}>{b}</option>))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-[#3A3A3A] dark:text-white/80 mb-2">Current Challenge <span className="text-red-500">*</span></label>
                    <input name="challenge" value={form.challenge} onChange={handleChange} required placeholder="e.g., We need to differentiate our brand in a competitive market..." className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1923] text-[#3A3A3A] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#2E75B6] transition-colors" />
                  </div>
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#3A3A3A] dark:text-white/80 mb-2">Tell Us More</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Share any additional context about your organization, goals, or timeline..." className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0f1923] text-[#3A3A3A] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:border-[#2E75B6] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6] text-white font-bold rounded-xl hover:shadow-xl hover:shadow-[#2E75B6]/30 hover:-translate-y-0.5 transition-all">
                    <Send className="w-5 h-5" />
                    Submit Strategy Consultation Request
                  </button>
                  <p className="text-center text-xs text-[#3A3A3A]/50 dark:text-white/40 mt-4">We respect your privacy. Your information will never be shared with third parties.</p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

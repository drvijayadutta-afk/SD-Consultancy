'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'HCLF™ Framework', href: '/hclf-framework' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'ATL Strategy', href: '/services#atl' },
    { label: 'BTL Strategy', href: '/services#btl' },
    { label: 'Digital Strategy', href: '/services#digital' },
    { label: 'Creative Solutions', href: '/services#creative' },
  ],
  Industries: [
    { label: 'Hospital Chains', href: '/industries#hospitals' },
    { label: 'Diagnostics Networks', href: '/industries#diagnostics' },
    { label: 'IVF & Fertility', href: '/industries#ivf' },
    { label: 'HealthTech', href: '/industries#healthtech' },
    { label: 'MedTech', href: '/industries#medtech' },
  ],
};

const socials = [
  { label: 'LinkedIn', href: '#', symbol: 'in' },
  { label: 'Facebook', href: '#', symbol: 'f' },
  { label: 'Instagram', href: '#', symbol: '✦' },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0f1923] text-white">
      <div className="bg-gradient-to-r from-[#1F3A5F] via-[#2E75B6] to-[#4F8A77]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-4">
            Ready to Transform Your Healthcare Brand?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let&apos;s build your healthcare brand leadership strategy together. Book a complimentary strategy consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1F3A5F] font-bold rounded-xl hover:bg-[#DCE9F4] transition-all hover:-translate-y-1 shadow-xl"
          >
            Book Your Strategy Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2E75B6] to-[#4F8A77] flex items-center justify-center">
                <span className="text-white font-bold text-sm font-heading">SD</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg font-heading">S.D Consultancy</div>
                <div className="text-[#4F8A77] text-[10px] tracking-widest uppercase">360° Healthcare Strategy</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Transforming healthcare expertise into market leadership through integrated strategy, communications, and creative excellence.
            </p>
            <div className="space-y-3 mb-8">
              <a href="mailto:hello@sdconsultancy.in" className="flex items-center gap-3 text-sm text-white/60 hover:text-[#4F8A77] transition-colors">
                <Mail className="w-4 h-4 text-[#4F8A77]" />
                hello@sdconsultancy.in
              </a>
              <a href="tel:+919999999999" className="flex items-center gap-3 text-sm text-white/60 hover:text-[#4F8A77] transition-colors">
                <Phone className="w-4 h-4 text-[#4F8A77]" />
                +91 99999 99999
              </a>
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#4F8A77] mt-0.5 flex-shrink-0" />
                Mumbai, Maharashtra, India
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map(({ symbol, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#2E75B6] hover:text-white transition-all text-xs font-bold">
                  {symbol}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="text-sm text-white/50 hover:text-[#4F8A77] transition-colors flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-white mb-1">Healthcare Insights Newsletter</h3>
              <p className="text-sm text-white/50">Strategic insights for healthcare leaders, delivered monthly.</p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-[#4F8A77] font-medium">
                <Send className="w-4 h-4" />
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" required
                  className="flex-1 md:w-64 px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#2E75B6] transition-colors" />
                <button type="submit"
                  className="px-5 py-2.5 bg-[#2E75B6] text-white text-sm font-semibold rounded-lg hover:bg-[#1F3A5F] transition-colors">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">© {new Date().getFullYear()} S.D Consultancy. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" className="text-xs text-white/40 hover:text-white/70 transition-colors">{item}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

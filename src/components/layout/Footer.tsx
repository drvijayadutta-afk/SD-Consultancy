'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, MapPin, ArrowRight, Send } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'HCLF™ Framework', href: '/hclf-framework' },
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
    { label: 'Specialty Hospitals', href: '/industries#specialty' },
    { label: 'Diagnostics Networks', href: '/industries#diagnostics' },
    { label: 'HealthTech', href: '/industries#healthtech' },
    { label: 'MedTech', href: '/industries#medtech' },
  ],
};

const socials = [
  { label: 'LinkedIn', href: '#', symbol: 'in' },
  { label: 'Facebook', href: '#', symbol: 'f' },
  { label: 'Instagram', href: '#', symbol: '✦' },
];

function FooterLogo() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="S.D Consultancy Logo"
    >
      <rect width="44" height="44" rx="11" fill="url(#footerSDGrad)" />
      <rect x="0.5" y="0.5" width="43" height="43" rx="10.5" stroke="white" strokeOpacity="0.15" strokeWidth="1" fill="none" />
      <text
        x="22"
        y="20"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontFamily="Space Grotesk, sans-serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="1"
      >
        S·D
      </text>
      <path
        className="logo-ecg-line"
        d="M 3 34 L 9 34 L 12 24 L 16 40 L 20 30 L 23 34 C 31 34 38 27 41 25"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="footerSDGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E75B6" />
          <stop offset="1" stopColor="#4F8A77" />
        </linearGradient>
      </defs>
    </svg>
  );
}

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
    <footer className="bg-[#0b1520] text-white">
      {/* CTA Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#1F3A5F] via-[#1a3358] to-[#162d4a]">
        {/* Decorative ECG line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-8">
          <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-20">
            <path
              d="M 0 50 L 120 50 L 150 30 L 180 70 L 210 40 L 240 50 L 400 50 C 500 50 600 30 700 20 C 800 10 900 15 1000 12 L 1200 8"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeOpacity="0.15"
            />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2E75B6]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4F8A77]/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-[#4F8A77]/30 bg-[#4F8A77]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F8A77] animate-pulse" />
            <span className="text-[#4F8A77] text-xs font-semibold tracking-widest uppercase">Strategy Consultation</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-4">
            Ready to Transform Your Healthcare Brand?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Let&apos;s build your healthcare brand leadership strategy together. Book a complimentary consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1F3A5F] font-bold rounded-xl hover:bg-[#DCE9F4] transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-[#1F3A5F]/30 group/cta"
          >
            Book Your Strategy Consultation
            <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6 group">
              <FooterLogo />
              <div>
                <div className="text-white font-bold text-lg font-heading">S.D Consultancy</div>
                <div className="text-[#4F8A77] text-[10px] font-semibold tracking-[0.18em] uppercase">360° Healthcare Strategy</div>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-sm">
              Transforming healthcare expertise into market leadership through integrated strategy, communications, and creative excellence.
            </p>
            <p className="text-[#B8924A]/80 text-xs font-medium italic mb-8">
              &ldquo;Clinical insight becoming market momentum.&rdquo;
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-8">
              <a href="mailto:drvijayadutta@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-[#4F8A77] transition-colors group/contact">
                <span className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center group-hover/contact:bg-[#4F8A77]/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#4F8A77]" />
                </span>
                drvijayadutta@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <span className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#4F8A77]" />
                </span>
                New Delhi, India
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socials.map(({ symbol, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center text-white/65 hover:bg-gradient-to-br hover:from-[#2E75B6] hover:to-[#4F8A77] hover:text-white hover:border-transparent transition-all duration-200 text-xs font-bold"
                >
                  {symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-bold text-white/80 mb-5 tracking-[0.15em] uppercase">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-[#4F8A77] transition-colors flex items-center gap-1.5 group/link"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200 text-[#4F8A77]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-10 border-t border-white/8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-white mb-1">Healthcare Insights Newsletter</h3>
              <p className="text-sm text-white/65">Strategic insights for healthcare leaders, delivered monthly.</p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-[#4F8A77] font-medium">
                <Send className="w-4 h-4" />
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 md:w-64 px-4 py-2.5 bg-white/8 border border-white/15 rounded-lg text-sm text-white placeholder:text-white/55 focus:outline-none focus:border-[#2E75B6] transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-gradient-to-r from-[#2E75B6] to-[#4F8A77] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#2E75B6]/30 transition-all flex items-center gap-2"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} S.D Consultancy. All rights reserved. Founded 2026.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" className="text-xs text-white/55 hover:text-white/60 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

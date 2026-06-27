'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'ATL Strategy', href: '/services#atl' },
      { label: 'BTL Strategy', href: '/services#btl' },
      { label: 'Digital Strategy', href: '/services#digital' },
      { label: 'Creative Solutions', href: '/services#creative' },
    ],
  },
  { label: 'HCLF™ Framework', href: '/hclf-framework' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

function SDLogo({ size = 44, gradientId = 'navSDGrad' }: { size?: number; gradientId?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
      aria-label="S.D Consultancy Logo"
    >
      <rect width="44" height="44" rx="11" fill={`url(#${gradientId})`} />
      <rect x="0.5" y="0.5" width="43" height="43" rx="10.5" stroke="white" strokeOpacity="0.12" strokeWidth="1" fill="none" />
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
        <linearGradient id={gradientId} x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1F3A5F" />
          <stop offset="1" stopColor="#2E75B6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'nav-blur bg-white/92 dark:bg-[#0f1923]/92 shadow-lg shadow-[#1F3A5F]/8 border-b border-gray-100/80 dark:border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <SDLogo gradientId="navSDGrad" />
            <div>
              <div className={cn(
                'font-bold text-lg leading-tight font-heading transition-colors duration-300',
                scrolled ? 'text-[#1F3A5F] dark:text-white' : 'text-white'
              )}>
                S.D Consultancy
              </div>
              <div className="text-[#4F8A77] text-[10px] font-semibold tracking-[0.18em] uppercase">
                360° Healthcare Strategy
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'text-[#2E75B6] bg-[#DCE9F4] dark:bg-[#2E75B6]/20'
                      : scrolled
                      ? 'text-[#3A3A3A] dark:text-white/80 hover:text-[#2E75B6] hover:bg-[#DCE9F4]/70 dark:hover:bg-white/10'
                      : 'text-white/85 hover:text-white hover:bg-white/12'
                  )}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      activeDropdown === link.label && 'rotate-180'
                    )} />
                  )}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-54">
                    <div className="bg-white dark:bg-[#162d4a] rounded-xl shadow-2xl shadow-[#1F3A5F]/15 border border-gray-100 dark:border-white/10 overflow-hidden">
                      <div className="h-0.5 bg-gradient-to-r from-[#2E75B6] to-[#4F8A77]" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-3 text-sm text-[#3A3A3A] dark:text-white/80 hover:bg-[#DCE9F4] dark:hover:bg-white/10 hover:text-[#2E75B6] transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2E75B6]/40 mr-2.5 flex-shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={cn(
                'p-2 rounded-lg transition-all',
                scrolled
                  ? 'text-[#3A3A3A] dark:text-white/70 hover:bg-gray-100 dark:hover:bg-white/10'
                  : 'text-white/70 hover:bg-white/10'
              )}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#2E75B6]/35 hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group/btn"
            >
              <span className="relative z-10">Book Consultation</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#2E75B6] to-[#4F8A77] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </Link>

            <button
              className={cn(
                'lg:hidden p-2 rounded-lg',
                scrolled ? 'text-[#3A3A3A] dark:text-white' : 'text-white'
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0f1923] border-t border-gray-100 dark:border-white/10 shadow-2xl">
          <div className="h-0.5 bg-gradient-to-r from-[#1F3A5F] via-[#2E75B6] to-[#4F8A77]" />
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-[#DCE9F4] text-[#2E75B6] dark:bg-[#2E75B6]/20'
                      : 'text-[#3A3A3A] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                  )}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center px-4 py-2 text-sm text-[#3A3A3A]/70 dark:text-white/60 hover:text-[#2E75B6] rounded-lg transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#4F8A77]/60 mr-2.5" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="flex items-center justify-center px-5 py-3.5 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6] text-white text-sm font-semibold rounded-xl"
              >
                Book Strategy Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

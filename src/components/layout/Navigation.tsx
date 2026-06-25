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
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

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
          ? 'nav-blur bg-white/90 dark:bg-[#0f1923]/90 shadow-lg shadow-navy/5 border-b border-gray-100 dark:border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1F3A5F] to-[#2E75B6] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm font-heading">SD</span>
            </div>
            <div>
              <div className="text-[#1F3A5F] dark:text-white font-bold text-lg leading-tight font-heading">
                S.D Consultancy
              </div>
              <div className="text-[#4F8A77] text-[10px] font-medium tracking-widest uppercase">
                360° Healthcare Strategy
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
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
                      ? 'text-[#3A3A3A] dark:text-white/80 hover:text-[#2E75B6] hover:bg-[#DCE9F4] dark:hover:bg-white/10'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-white dark:bg-[#162d4a] rounded-xl shadow-2xl border border-gray-100 dark:border-white/10 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center px-4 py-3 text-sm text-[#3A3A3A] dark:text-white/80 hover:bg-[#DCE9F4] dark:hover:bg-white/10 hover:text-[#2E75B6] transition-colors"
                        >
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
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-[#2E75B6]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Book Consultation
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
        <div className="lg:hidden bg-white dark:bg-[#0f1923] border-t border-gray-100 dark:border-white/10">
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
                className="flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#1F3A5F] to-[#2E75B6] text-white text-sm font-semibold rounded-lg"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

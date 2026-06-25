import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/providers/ThemeProvider';

export const metadata: Metadata = {
  title: 'S.D Consultancy | 360° Healthcare Brand & Strategy Consultancy',
  description:
    'S.D Consultancy helps hospitals, specialty healthcare providers, diagnostics networks, healthtech, and medtech organizations build stronger brands, deeper stakeholder trust, and sustainable market leadership.',
  keywords:
    'healthcare branding, hospital marketing, healthcare communications, medical brand strategy, healthtech consulting, medtech marketing',
  openGraph: {
    title: 'S.D Consultancy | Transforming Healthcare Expertise Into Market Leadership',
    description: 'A 360° Healthcare Brand, Communications & Creative Strategy Consultancy',
    type: 'website',
    siteName: 'S.D Consultancy',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const siteUrl = 'https://ldj-empire.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'LDJ Empire | NEMT in Central Florida',
  description: 'Safe, reliable non-emergency medical transportation in Central Florida for medical appointments, therapy, dialysis, senior care, and recurring rides. Call 941-667-0098.',
  keywords: ['non-emergency medical transportation', 'NEMT Central Florida', 'medical transportation Central Florida', 'wheelchair accessible transportation', 'dialysis transportation', 'senior transportation'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: { title: 'LDJ Empire | Reliable Rides, Every Time', description: 'Safe, dependable non-emergency medical transportation across Central Florida.', type: 'website', images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'LDJ Empire — Reliable Rides, Every Time' }] },
  twitter: { card: 'summary_large_image', title: 'LDJ Empire | Reliable Rides, Every Time', description: 'Safe, dependable non-emergency medical transportation across Central Florida.', images: ['/og.png'] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'LDJ Empire',
  url: siteUrl,
  telephone: '+1-941-667-0098',
  description: 'Non-emergency medical transportation serving Central Florida.',
  areaServed: { '@type': 'AdministrativeArea', name: 'Central Florida' },
  logo: `${siteUrl}/ldj-empire-logo.png`,
  image: `${siteUrl}/accessible-transport-van.png`,
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Transportation services',
    itemListElement: [
      'Medical appointment transportation',
      'Senior transportation',
      'Recurring dialysis and therapy rides',
      'Wheelchair-accessible transportation',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}


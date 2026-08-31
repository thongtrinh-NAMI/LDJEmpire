import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LDJ Empire | Non-Emergency Medical Transportation',
  description: 'Reliable non-emergency medical transportation serving Central Florida. Call LDJ Empire at 941-667-0098 to schedule a ride.',
  openGraph: { title: 'LDJ Empire | Reliable Rides, Every Time', description: 'Safe, dependable non-emergency medical transportation across Central Florida.', type: 'website', images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'LDJ Empire — Reliable Rides, Every Time' }] },
  twitter: { card: 'summary_large_image', title: 'LDJ Empire | Reliable Rides, Every Time', description: 'Safe, dependable non-emergency medical transportation across Central Florida.', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
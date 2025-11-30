import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/layout.css';
import '@/styles/dashboard.css';
import '@/styles/modal.css';
import '@/styles/card.css';

export const metadata: Metadata = {
  title: 'AIRAA - Intelligence Layer for Web3',
  description: 'Airaa is the intelligence layer for Web3—turning fragmented social and on-chain data into real-time context.',
  keywords: ['Web3', 'DeFi', 'Crypto', 'Intelligence', 'Analytics', 'Aura'],
  authors: [{ name: 'AIRAA' }],
  openGraph: {
    title: 'AIRAA - Intelligence Layer for Web3',
    description: 'Discover your Aura score and track crypto sentiment with AIRAA.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AIRAA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIRAA - Intelligence Layer for Web3',
    description: 'Discover your Aura score and track crypto sentiment with AIRAA.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

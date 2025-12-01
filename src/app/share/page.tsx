import type { Metadata } from 'next';
import {  MOCK_AURA_DATA } from '@/lib/constants';
import { generateOGUrl } from '@/lib/og';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const ogUrl = generateOGUrl({
    user: MOCK_AURA_DATA.username,
    points: MOCK_AURA_DATA.points.toString(),
    date: MOCK_AURA_DATA.date,
    level: MOCK_AURA_DATA.level,
    color: MOCK_AURA_DATA.colorVariant,
    handle: MOCK_AURA_DATA.handle,
    progress: MOCK_AURA_DATA.progress.toString(),
    pointsToNext: MOCK_AURA_DATA.pointsToNext.toString(),
    nextLevel: MOCK_AURA_DATA.nextLevel || undefined,
  });

  return {
    title: `${MOCK_AURA_DATA.username}'s Aura Score - AIRAA`,
    description: `Check out ${MOCK_AURA_DATA.username}'s Aura score of ${MOCK_AURA_DATA.points} points!`,
    openGraph: {
      title: `${MOCK_AURA_DATA.username}'s Aura Score`,
      description: `${MOCK_AURA_DATA.points} Aura points earned on ${MOCK_AURA_DATA.date}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `${MOCK_AURA_DATA.username}'s Aura Card`,
        },
      ],
      type: 'website',
      siteName: 'AIRAA',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${MOCK_AURA_DATA.username}'s Aura Score`,
      description: `${MOCK_AURA_DATA.points} Aura points earned on ${MOCK_AURA_DATA.date}`,
      images: [ogUrl],
    },
  };
}

export default function SharePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        padding: '20px',
      }}
    >
      <h1
        style={{
          fontSize: '24px',
          color: '#fff',
          marginBottom: '16px',
          fontFamily: 'var(--font-mono)',
        }}
      >
        Share Your Aura Score
      </h1>
      <p
        style={{
          fontSize: '14px',
          color: '#888',
          marginBottom: '32px',
          textAlign: 'center',
        }}
      >
        This page generates a preview when shared on social media.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#52e9ff',
          color: '#000',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        Go to Dashboard
      </Link>
    </div>
  );
}

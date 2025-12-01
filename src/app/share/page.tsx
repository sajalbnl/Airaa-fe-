import type { Metadata } from 'next';
import { MOCK_AURA_DATA } from '@/lib/constants';
import { generateOGUrl } from '@/lib/og';
import Link from 'next/link';
import type { AuraLevel, CardColorVariant, AuraCardData } from '@/types';
import { AuraCardUI } from '@/components/share/AuraCardUI';

interface SharePageProps {
  searchParams: Promise<{
    user?: string;
    points?: string;
    date?: string;
    level?: string;
    color?: string;
    handle?: string;
    progress?: string;
    pointsToNext?: string;
    nextLevel?: string;
  }>;
}

export async function generateMetadata({ searchParams }: SharePageProps): Promise<Metadata> {
  const params = await searchParams;

  const user = params.user || MOCK_AURA_DATA.username;
  const points = params.points || MOCK_AURA_DATA.points.toString();
  const date = params.date || MOCK_AURA_DATA.date;
  const level = (params.level || MOCK_AURA_DATA.level) as AuraLevel;
  const color = (params.color || MOCK_AURA_DATA.colorVariant) as CardColorVariant;
  const handle = params.handle || MOCK_AURA_DATA.handle;
  const progress = params.progress || MOCK_AURA_DATA.progress.toString();
  const pointsToNext = params.pointsToNext || MOCK_AURA_DATA.pointsToNext.toString();
  const nextLevel = params.nextLevel || MOCK_AURA_DATA.nextLevel || undefined;

  const ogUrl = generateOGUrl({
    user,
    points,
    date,
    level,
    color,
    handle,
    progress,
    pointsToNext,
    nextLevel,
  });

  return {
    title: `${user}'s Aura Score - AIRAA`,
    description: `Check out ${user}'s Aura score of ${points} points!`,
    openGraph: {
      title: `${user}'s Aura Score`,
      description: `${points} Aura points earned on ${date}`,
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: `${user}'s Aura Card`,
        },
      ],
      type: 'website',
      siteName: 'AIRAA',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${user}'s Aura Score`,
      description: `${points} Aura points earned on ${date}`,
      images: [ogUrl],
    },
  };
}

export default async function SharePage({ searchParams }: SharePageProps) {
  const params = await searchParams;

  // Build card data from URL params or fall back to mock data
  const cardData: AuraCardData = {
    username: params.user || MOCK_AURA_DATA.username,
    handle: params.handle || MOCK_AURA_DATA.handle,
    avatar: MOCK_AURA_DATA.avatar,
    points: params.points ? parseFloat(params.points) : MOCK_AURA_DATA.points,
    date: params.date || MOCK_AURA_DATA.date,
    level: (params.level || MOCK_AURA_DATA.level) as AuraLevel,
    pointsToNext: params.pointsToNext ? parseInt(params.pointsToNext) : MOCK_AURA_DATA.pointsToNext,
    nextLevel: (params.nextLevel || MOCK_AURA_DATA.nextLevel) as AuraLevel,
    progress: params.progress ? parseInt(params.progress) : MOCK_AURA_DATA.progress,
    colorVariant: (params.color || MOCK_AURA_DATA.colorVariant) as CardColorVariant,
  };

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
        gap: '24px',
      }}
    >
      <AuraCardUI data={cardData} />

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
        Get Your Aura Score
      </Link>
    </div>
  );
}

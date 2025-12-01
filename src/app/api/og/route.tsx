import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import type { AuraLevel, CardColorVariant } from '@/types';

export const runtime = 'edge';

// Map color variants to image file prefixes
const COLOR_IMAGE_PREFIX: Record<CardColorVariant, string> = {
  gold: 'golden',
  bronze: 'bronze',
  pink: 'pink',
  green: 'green',
  cyan: 'cyan',
};

const COLOR_SYSTEMS: Record<CardColorVariant, {
  brand: string;
  glow: string;
  ring: string;
  highlight: string;
  border: string;
  progress: string;
  text: string;
}> = {
  gold: {
    brand: '#f5c842',
    glow: 'rgba(245, 200, 66, 0.6)',
    ring: 'rgba(245, 200, 66, 0.8)',
    highlight: 'rgba(245, 200, 66, 0.3)',
    border: 'rgba(245, 200, 66, 0.5)',
    progress: '#ffd738',
    text: '#ffd738',
  },
  bronze: {
    brand: '#cd7f32',
    glow: 'rgba(205, 127, 50, 0.6)',
    ring: 'rgba(205, 127, 50, 0.8)',
    highlight: 'rgba(205, 127, 50, 0.3)',
    border: 'rgba(205, 127, 50, 0.5)',
    progress: '#cd7f32',
    text: '#cd7f32',
  },
  pink: {
    brand: '#ff69b4',
    glow: 'rgba(255, 105, 180, 0.6)',
    ring: 'rgba(255, 105, 180, 0.8)',
    highlight: 'rgba(255, 105, 180, 0.3)',
    border: 'rgba(255, 105, 180, 0.5)',
    progress: '#ff69b4',
    text: '#ff69b4',
  },
  green: {
    brand: '#00ff88',
    glow: 'rgba(0, 255, 136, 0.6)',
    ring: 'rgba(0, 255, 136, 0.8)',
    highlight: 'rgba(0, 255, 136, 0.3)',
    border: 'rgba(0, 255, 136, 0.5)',
    progress: '#00ff88',
    text: '#00ff88',
  },
  cyan: {
    brand: '#52e9ff',
    glow: 'rgba(82, 233, 255, 0.6)',
    ring: 'rgba(82, 233, 255, 0.8)',
    highlight: 'rgba(82, 233, 255, 0.3)',
    border: 'rgba(82, 233, 255, 0.5)',
    progress: '#52e9ff',
    text: '#52e9ff',
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get base URL from request or environment
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  const user = searchParams.get('user') || 'Anonymous';
  const points = searchParams.get('points') || '0';
  const date = searchParams.get('date') || new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const level = (searchParams.get('level') || 'LOWKEY') as AuraLevel;
  const color = (searchParams.get('color') || 'gold') as CardColorVariant;
  const handle = searchParams.get('handle') || '@user';
  const pointsToNext = searchParams.get('pointsToNext') || '480';
  const nextLevel = searchParams.get('nextLevel') as AuraLevel | null;

  const colors = COLOR_SYSTEMS[color] || COLOR_SYSTEMS.gold;
  const isAtTop = level === 'GOATED';

  // Get color-specific image prefix
  const imagePrefix = COLOR_IMAGE_PREFIX[color] || 'golden';

  // Image URLs - these need to be absolute URLs for @vercel/og
  const ringUrl = `${baseUrl}/assets/images/${imagePrefix}-ring.svg`;
  const progressBarUrl = `${baseUrl}/assets/images/${imagePrefix}-progress.svg`;
  const avatarUrl = `${baseUrl}/assets/images/card-avatar.svg`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000000',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Card Container - matching AuraCardUI exactly */}
        <div
          style={{
            width: '360px',
            padding: '24px',
            paddingBottom: '8px',
            background: `linear-gradient(144deg, #000000 0%, rgba(255, 215, 56, 0.08) 2%, rgba(255, 215, 56, 0.05) 24%, rgba(255, 215, 56, 0.08) 52%, rgba(255, 215, 56, 0.05) 75%, rgba(255, 215, 56, 0.08) 98%)`,
            border: `1px solid ${colors.border}`,
            borderRadius: '24px',
            boxShadow: `0 0 40px ${colors.glow}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px',
              marginTop: '8px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                color: '#ffffff',
                fontWeight: 500,
              }}
            >
              Join me at airaa.xyz
            </span>
          </div>

          {/* Points Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '24px',
            }}
          >
            <span
              style={{
                fontSize: '52px',
                fontWeight: 700,
                color: colors.text,
                lineHeight: 1,
              }}
            >
              {points}
            </span>
            <span
              style={{
                fontSize: '13px',
                color: '#ffffff',
                textAlign: 'center',
                marginTop: '4px',
              }}
            >
              Aura points earned on
            </span>
            <span
              style={{
                fontSize: '13px',
                color: '#ffffff',
                textAlign: 'center',
              }}
            >
              {date}
            </span>
          </div>

          {/* Ring Container - Using actual golden ring image */}
          <div
            style={{
              height: '95px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '64px',
              position: 'relative',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ringUrl}
              alt="aura ring"
              width={340}
              height={270}
              
            />
          </div>

          {/* Progress Section - Using actual progress bar image */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '12px',
            }}
          >
            {/* Progress Bar Container */}
            <div
              style={{
                display: 'flex',
                width: '100%',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={progressBarUrl}
                alt="progress bar"
                width={320}
                height={26}
                
              />
            </div>

            {/* Progress Label */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '8px',
              }}
            >
              {isAtTop ? (
                <span
                  style={{
                    fontSize: '14px',
                    color: colors.text,
                  }}
                >
                  Already at the top
                </span>
              ) : (
                <span
                  style={{
                    fontSize: '14px',
                    color: '#ffffff',
                    display: 'flex',
                  }}
                >
                  {pointsToNext} pts to become a{' '}
                  <span style={{ color: '#FF9C54', fontWeight: 600, marginLeft: '4px' }}>
                    {nextLevel || 'COOKER'}
                  </span>
                </span>
              )}
            </div>
          </div>

          {/* User Badge */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 4px',
              position: 'relative',
            }}
          >
            {/* Gradient border effect on top */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(to right, transparent, rgba(255, 215, 56, 0.5), transparent)',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              {/* Avatar - Using actual avatar image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatarUrl}
                alt="avatar"
                width={48}
                height={48}
                style={{
                  borderRadius: '8px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <span
                  style={{
                    fontSize: '14px',
                    color: '#ffffff',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {user}
                  <span style={{ marginLeft: '4px' }}>🐳</span>
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: '#ffffff',
                  }}
                >
                  {handle}
                </span>
              </div>
            </div>

            {/* Level Badge */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '120px',
                padding: '8px 12px',
                background: `radial-gradient(164% 171% at -70% -74%, rgba(255, 215, 56, 0.5) 10%, rgba(0, 0, 0, 0.7) 50%)`,
                border: `1px solid rgba(255, 215, 56, 0.4)`,
                borderRadius: '8px',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  color: '#ffffff',
                }}
              >
                Level
              </span>
              <span
                style={{
                  fontSize: '14px',
                  color: colors.text,
                  fontWeight: 600,
                }}
              >
                {level}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

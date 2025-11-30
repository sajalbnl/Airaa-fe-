import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import type { AuraLevel, CardColorVariant } from '@/types';

export const runtime = 'edge';

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
    progress: '#f5c842',
    text: '#f5c842',
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
  const progress = parseInt(searchParams.get('progress') || '50', 10);
  const pointsToNext = searchParams.get('pointsToNext') || '480';
  const nextLevel = searchParams.get('nextLevel') as AuraLevel | null;

  const colors = COLOR_SYSTEMS[color] || COLOR_SYSTEMS.gold;
  const isAtTop = level === 'GOATED';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Card Container */}
        <div
          style={{
            width: '380px',
            padding: '32px',
            background: 'linear-gradient(180deg, rgba(20, 20, 20, 0.95) 0%, rgba(0, 0, 0, 0.98) 100%)',
            border: `2px solid ${colors.border}`,
            borderRadius: '24px',
            boxShadow: `0 0 60px ${colors.glow}, 0 0 120px ${colors.glow}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '16px',
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

          {/* Points */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: colors.text,
                lineHeight: 1,
              }}
            >
              {points}
            </span>
            <span
              style={{
                fontSize: '12px',
                color: '#888888',
                textAlign: 'center',
                marginTop: '4px',
              }}
            >
              Aura points earned on
            </span>
            <span
              style={{
                fontSize: '12px',
                color: '#888888',
                textAlign: 'center',
              }}
            >
              {date}
            </span>
          </div>

          {/* Ring Visual */}
          <div
            style={{
              width: '200px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              marginBottom: '24px',
            }}
          >
            {/* Halo */}
            <div
              style={{
                position: 'absolute',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
                opacity: 0.5,
              }}
            />

            {/* Main Ring - simplified for OG */}
            <div
              style={{
                width: '140px',
                height: '50px',
                borderRadius: '70px / 25px',
                background: `linear-gradient(180deg, ${colors.brand} 0%, ${colors.ring} 100%)`,
                boxShadow: `0 0 40px ${colors.glow}, 0 0 80px ${colors.glow}`,
              }}
            />

            {/* Reflection */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                width: '120px',
                height: '30px',
                borderRadius: '50%',
                background: `radial-gradient(ellipse, ${colors.glow} 0%, transparent 70%)`,
                opacity: 0.6,
              }}
            />
          </div>

          {/* Progress Bar */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              {/* Start Icon */}
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="#666666" strokeWidth="2" />
                  <line x1="9" y1="3" x2="9" y2="21" stroke="#666666" strokeWidth="2" />
                </svg>
              </div>

              {/* Progress Track */}
              <div
                style={{
                  flex: 1,
                  height: '6px',
                  backgroundColor: '#2a2a2a',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  display: 'flex',
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${colors.progress} 0%, ${colors.brand} 100%)`,
                    borderRadius: '9999px',
                  }}
                />
              </div>

              {/* End Icon */}
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill={colors.brand} opacity="0.6" />
                </svg>
              </div>
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
                    fontSize: '13px',
                    color: colors.text,
                  }}
                >
                  Already at the top
                </span>
              ) : (
                <span
                  style={{
                    fontSize: '13px',
                    color: '#888888',
                    display: 'flex',
                  }}
                >
                  {pointsToNext} pts to become a{' '}
                  <span style={{ color: colors.text, fontWeight: 600, marginLeft: '4px' }}>
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
              padding: '12px 16px',
              backgroundColor: '#1a1a1a',
              border: '1px solid #333333',
              borderRadius: '12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              {/* Avatar placeholder */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: '#333333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '18px' }}>👤</span>
              </div>
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
                  {user} 🦉
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: '#888888',
                  }}
                >
                  {handle}
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                padding: '8px 12px',
                backgroundColor: '#222222',
                borderRadius: '8px',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  color: '#888888',
                }}
              >
                Level
              </span>
              <span
                style={{
                  fontSize: '12px',
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

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
          background: '#000000',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Card Container - matching AuraCardUI */}
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

          {/* Ring Container - Golden Ring Visual */}
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
            {/* 3D Ring effect using ellipses */}
            <div
              style={{
                display: 'flex',
                position: 'relative',
                width: '340px',
                height: '80px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Outer glow */}
              <div
                style={{
                  position: 'absolute',
                  width: '320px',
                  height: '100px',
                  borderRadius: '50%',
                  background: `radial-gradient(ellipse, ${colors.glow} 0%, transparent 60%)`,
                  opacity: 0.6,
                }}
              />
              {/* Main ring - outer */}
              <div
                style={{
                  position: 'absolute',
                  width: '280px',
                  height: '60px',
                  borderRadius: '50%',
                  border: `8px solid ${colors.brand}`,
                  boxShadow: `0 0 30px ${colors.glow}, inset 0 0 20px ${colors.glow}`,
                  background: 'transparent',
                }}
              />
              {/* Inner shadow/depth */}
              <div
                style={{
                  position: 'absolute',
                  width: '260px',
                  height: '50px',
                  borderRadius: '50%',
                  background: `linear-gradient(180deg, transparent 0%, ${colors.glow} 100%)`,
                  opacity: 0.3,
                  top: '20px',
                }}
              />
              {/* Highlight on top */}
              <div
                style={{
                  position: 'absolute',
                  width: '200px',
                  height: '20px',
                  borderRadius: '50%',
                  background: `linear-gradient(180deg, ${colors.brand} 0%, transparent 100%)`,
                  opacity: 0.8,
                  top: '-5px',
                }}
              />
            </div>
          </div>

          {/* Progress Section */}
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
                alignItems: 'center',
                width: '100%',
                gap: '0px',
              }}
            >
              {/* Start Icon - Archive/Box icon */}
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '4px',
                  backgroundColor: '#000000',
                  border: `1px solid ${colors.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M19 10V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V10M21 6V8C21 8.26522 20.8946 8.51957 20.7071 8.70711C20.5196 8.89464 20.2652 9 20 9H4C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6Z" stroke={colors.brand} strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Progress Track */}
              <div
                style={{
                  flex: 1,
                  height: '10px',
                  backgroundColor: '#0C0C0C',
                  borderRadius: '5px',
                  overflow: 'hidden',
                  display: 'flex',
                  border: '1px solid #171A16',
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, rgba(255, 215, 56, 0.5) 0%, ${colors.progress} 100%)`,
                    borderRadius: '5px',
                  }}
                />
              </div>

              {/* Progress indicator line */}
              <div
                style={{
                  width: '2px',
                  height: '14px',
                  backgroundColor: colors.brand,
                  borderRadius: '1px',
                  marginLeft: '-2px',
                  marginRight: '8px',
                }}
              />

              {/* End Icon - Trophy/Star icon */}
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '4px',
                  backgroundColor: '#000000',
                  border: `1px solid rgba(255, 156, 84, 0.5)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M8 21H16M12 17V21M6 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V7C20 8.06087 19.5786 9.07828 18.8284 9.82843C18.0783 10.5786 17.0609 11 16 11H8C6.93913 11 5.92172 10.5786 5.17157 9.82843C4.42143 9.07828 4 8.06087 4 7V5C4 4.46957 4.21071 3.96086 4.58579 3.58579C4.96086 3.21071 5.46957 3 6 3Z" stroke="#FF9C54" strokeWidth="1.5"/>
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
              borderTop: '1px solid rgba(255, 215, 56, 0.3)',
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
              {/* Avatar */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" fill="#666"/>
                  <path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="#666" strokeWidth="2"/>
                </svg>
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

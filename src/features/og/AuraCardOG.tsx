import type { AuraLevel, CardColorVariant } from '@/types';
import { getOGColorSystem } from './styles';

interface AuraCardOGProps {
  user: string;
  points: string;
  date: string;
  level: AuraLevel;
  color: CardColorVariant;
  handle: string;
  progress: number;
  pointsToNext: string;
  nextLevel: AuraLevel | null;
}

export function AuraCardOG({
  user,
  points,
  date,
  level,
  color,
  handle,
  progress,
  pointsToNext,
  nextLevel,
}: AuraCardOGProps) {
  const colors = getOGColorSystem(color);
  const isAtTop = level === 'GOATED';

  return (
    <div
      style={{
        width: '1200px',
        height: '630px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
        fontFamily: 'SF Mono, Monaco, monospace',
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
          position: 'relative',
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
              textShadow: `0 0 40px ${colors.glow}`,
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

          {/* Main Ring */}
          <div
            style={{
              width: '140px',
              height: '70px',
              borderRadius: '50%',
              background: `linear-gradient(180deg, ${colors.brand} 0%, ${colors.ring} 50%, transparent 100%)`,
              boxShadow: `0 0 40px ${colors.glow}, 0 0 80px ${colors.glow}, inset 0 0 20px ${colors.highlight}`,
              transform: 'perspective(200px) rotateX(65deg)',
            }}
          />

          {/* Reflection */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              width: '120px',
              height: '40px',
              borderRadius: '50%',
              background: `linear-gradient(180deg, ${colors.glow} 0%, transparent 100%)`,
              filter: 'blur(15px)',
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
            gap: '8px',
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
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
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  background: `linear-gradient(90deg, ${colors.progress} 0%, ${colors.brand} 100%)`,
                  borderRadius: '9999px',
                  boxShadow: `0 0 10px ${colors.glow}`,
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill={colors.brand} opacity="0.6">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Progress Label */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
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
                }}
              >
                {pointsToNext} pts to become a{' '}
                <span style={{ color: colors.text, fontWeight: 600 }}>
                  {nextLevel}
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
  );
}

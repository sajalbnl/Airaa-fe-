'use client';

import type { AuraCardData } from '@/types';
import { isAtTopLevel } from '@/lib/og';
import '@/styles/card.css';

interface AuraCardUIProps {
  data: AuraCardData;
}

export function AuraCardUI({ data }: AuraCardUIProps) {
  const isTop = isAtTopLevel(data.level);

  return (
    <div className={`aura-card aura-card--${data.colorVariant}`}>
      {/* Frame Border Glow */}
      <div className="aura-card__frame" />

      {/* Header */}
      <div className="aura-card__header">
        <span className="aura-card__tagline">Join me at airaa.xyz</span>
      </div>

      {/* Points Section */}
      <div className="aura-card__points-section">
        <div className="aura-card__points">{data.points}</div>
        <div className="aura-card__points-label">
          Aura points earned on
          <br />
          {data.date}
        </div>
      </div>

      {/* Ring Container */}
      <div className="aura-card__ring-container">
        {/* Halo Glow */}
        <div className="aura-card__halo" />

        {/* Main Ring */}
        <div className="aura-card__ring">
          <div className="aura-card__ring-main" />
          <div className="aura-card__ring-inner" />
        </div>

        {/* Reflection */}
        <div className="aura-card__ring-reflection" />
      </div>

      {/* Progress Section */}
      <div className="aura-card__progress-section">
        <div className="aura-card__progress-bar-container">
          <svg
            className="aura-card__progress-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="9" y1="3" x2="9" y2="21" />
          </svg>
          <div className="aura-card__progress-bar">
            <div
              className="aura-card__progress-fill"
              style={{ width: `${data.progress}%` }}
            />
          </div>
          <svg
            className="aura-card__progress-end-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
        {isTop ? (
          <div className="aura-card__progress-label aura-card__progress-label--top">
            Already at the top
          </div>
        ) : (
          <div className="aura-card__progress-label">
            {data.pointsToNext} pts to become a <span>{data.nextLevel}</span>
          </div>
        )}
      </div>

      {/* User Badge */}
      <div className="aura-card__user-badge">
        <div className="aura-card__user-info">
          <img
            src={data.avatar}
            alt={data.username}
            className="aura-card__user-avatar"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#333';
            }}
          />
          <div className="aura-card__user-details">
            <span className="aura-card__user-name">
              {data.username}
              <span className="aura-card__user-emoji">🦉</span>
            </span>
            <span className="aura-card__user-handle">{data.handle}</span>
          </div>
        </div>
        <div className="aura-card__level-badge">
          <span className="aura-card__level-label">Level</span>
          <span className="aura-card__level-value">{data.level}</span>
        </div>
      </div>
    </div>
  );
}

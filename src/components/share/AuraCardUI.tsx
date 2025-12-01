"use client";

import type { AuraCardData } from "@/types";
import { isAtTopLevel } from "@/lib/og";
import "@/styles/card.css";
import Image from "next/image";

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
        
         <Image
          src="/assets/images/golden-ring.svg"
          alt="golden ring"
          width={340}
          height={10}
          className="aura-card__main-ring"
        />

      </div>

      {/* Progress Section */}
      <div className="aura-card__progress-section">
        <div className="aura-card__progress-bar-container">
          <Image
          src="/assets/images/progress-golden.svg"
          alt="golden ring"
          width={360}
          height={20}
        />
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
          <Image
            src="/assets/images/card-avatar.svg"
            alt="avatar"
            width={48}
            height={48}
          />
          <div className="aura-card__user-details">
            <span className="aura-card__user-name">
              {data.username}
              <span className="aura-card__user-emoji">🐳</span>
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

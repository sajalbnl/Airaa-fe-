'use client';

import '@/styles/dashboard.css';
import Image from 'next/image';

export function SmartFollowers() {
  return (
    <div className="smart-followers">
      <div className="smart-followers__header">
        <span className="smart-followers__title">Smart followers</span>
      </div>
      <div className="smart-followers__count">1</div>
      <div className="smart-followers__top">
        <span className="smart-followers__label">Top followers</span>
        <Image
                  src="/assets/images/username-img.svg"
                  alt="Info icon"
                  width={128}
                  height={38}
                />
      </div>
    </div>
  );
}

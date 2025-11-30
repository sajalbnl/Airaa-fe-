'use client';

import '@/styles/dashboard.css';

export function SmartFollowers() {
  return (
    <div className="smart-followers">
      <div className="smart-followers__header">
        <span className="smart-followers__title">Smart followers</span>
      </div>
      <div className="smart-followers__count">1</div>
      <div className="smart-followers__top">
        <span className="smart-followers__label">Top followers</span>
        <div className="smart-followers__user">
          <div className="smart-followers__avatar" />
          <span className="smart-followers__username">@Username</span>
        </div>
      </div>
    </div>
  );
}

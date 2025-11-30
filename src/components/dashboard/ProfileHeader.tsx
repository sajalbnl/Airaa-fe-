'use client';

import { MOCK_USER_PROFILE, DASHBOARD_TABS } from '@/lib/constants';
import '@/styles/dashboard.css';

interface ProfileHeaderProps {
  onDegenClick: () => void;
}

export function ProfileHeader({ onDegenClick }: ProfileHeaderProps) {
  return (
    <div className="profile-header-container">
      <div className="profile-header">
        <div className="profile-header__left">
          <img
            src={MOCK_USER_PROFILE.avatar}
            alt={MOCK_USER_PROFILE.name}
            className="profile-header__avatar"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.backgroundColor = '#333';
            }}
          />
          <div className="profile-header__info">
            <div className="profile-header__name-row">
              <span className="profile-header__name">{MOCK_USER_PROFILE.name}</span>
              {MOCK_USER_PROFILE.isVerified && (
                <svg
                  className="profile-header__verified"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
            </div>
            <p className="profile-header__bio">{MOCK_USER_PROFILE.bio}</p>
          </div>
        </div>
        <div className="profile-header__right">
          <button className="profile-header__degen-btn" onClick={onDegenClick}>
            Degen Club
            <svg
              className="profile-header__degen-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </button>
        </div>
      </div>
      <nav className="dashboard-tabs">
        {DASHBOARD_TABS.map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className={`dashboard-tabs__item ${tab.isActive ? 'dashboard-tabs__item--active' : ''}`}
          >
            {tab.label}
            {tab.hasNotification && (
              <span className="dashboard-tabs__notification" />
            )}
          </a>
        ))}
      </nav>
    </div>
  );
}

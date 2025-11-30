"use client";

import { MOCK_USER_PROFILE, DASHBOARD_TABS } from "@/lib/constants";
import "@/styles/dashboard.css";
import Image from "next/image";

interface ProfileHeaderProps {
  onDegenClick: () => void;
}

export function ProfileHeader({ onDegenClick }: ProfileHeaderProps) {
  return (
    <div className="profile-header-container">
      <div className="profile-header">
        <div className="profile-header__left">
          <Image
            src={MOCK_USER_PROFILE.avatar}
            alt={MOCK_USER_PROFILE.name}
            className="profile-header__avatar"
            width={80}
            height={80}
          />
          <div className="profile-header__info">
            <div className="profile-header__name-row">
              <span className="profile-header__name">
                {MOCK_USER_PROFILE.name}
              </span>
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
            
              <Image
                src="/assets/images/share-icon.svg"
                alt="User avatar"
                width={16}
                height={16}

              />
          
          </button>
        </div>
      </div>
      <nav className="dashboard-tabs">
        {DASHBOARD_TABS.map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className={`dashboard-tabs__item ${
              tab.isActive ? "dashboard-tabs__item--active" : ""
            }`}
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

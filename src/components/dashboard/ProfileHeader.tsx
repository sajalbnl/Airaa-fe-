"use client";

import { useState } from "react";
import { MOCK_USER_PROFILE, DASHBOARD_TABS } from "@/lib/constants";
import "@/styles/dashboard.css";
import Image from "next/image";

interface ProfileHeaderProps {
  onDegenClick: () => void;
}

export function ProfileHeader({ onDegenClick }: ProfileHeaderProps) {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyName = () => {
    navigator.clipboard.writeText(MOCK_USER_PROFILE.name);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1500);
  };

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
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <Image
                  src="/assets/images/copy-icon.svg"
                  alt="Copy name"
                  style={{ cursor: 'pointer' }}
                  width={16}
                  height={16}
                  onClick={handleCopyName}
                />
                {showCopied && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-28px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'transparent',
                      color: '#fff',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      whiteSpace: 'nowrap',
                      zIndex: 10
                    }}
                  >
                    Copied!
                  </span>
                )}
              </div>
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
          </a>
        ))}
      </nav>
    </div>
  );
}
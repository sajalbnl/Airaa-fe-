'use client';

import { NAV_ITEMS } from '@/lib/constants';
import '@/styles/layout.css';
import Link from 'next/link';
import Image from 'next/image'

export function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <Link href="/">
          <Image
            src="/assets/images/logo-airaa.svg"
            alt="airaa logo"
            width={120}
            height={40}
            
          />
        </Link>
        <nav className="navbar__nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`navbar__nav-item ${item.isActive ? 'navbar__nav-item--active' : ''}`}
            >
              <svg
                className="navbar__nav-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {item.label === 'Explore' && (
                  <circle cx="12" cy="12" r="10" />
                )}
                {item.label === 'Campaigns' && (
                  <>
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </>
                )}
                {item.label === 'Terminal' && (
                  <>
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </>
                )}
              </svg>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="navbar__right">
        <div className="navbar__search">
          <svg
            className="navbar__search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="navbar__search-input"
            placeholder="Search projects and more"
            aria-label="Search"
          />
          <div className="navbar__search-shortcut">
            <span className="navbar__search-key">⌘</span>
            <span className="navbar__search-key">K</span>
          </div>
        </div>
        <div className="navbar__user">
          <Image
            src="/assets/images/avatar-user.svg"
            alt="User avatar"
            width={120}
            height={40}
            className="navbar__user-avatar"
          />
          <span className="navbar__user-name">airaatwts</span>
        </div>
      </div>
    </header>
  );
}

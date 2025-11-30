'use client';

import { FOOTER_SECTIONS } from '@/lib/constants';
import '@/styles/layout.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <span className="footer__logo">AIRAA</span>
          <p className="footer__description">
            Airaa is the intelligence layer for Web3—turning fragmented social and
            on-chain data into real-time context. With contributor rankings,
            reputation scores, AI-powered insights, and modular APIs, Airaa helps
            communities and agents discover impact, decode narratives, and drive
            decentralized coordination. Powered by Aura.
          </p>
        </div>
        <div className="footer__right">
          {FOOTER_SECTIONS.map((section, index) => (
            <div key={index} className="footer__section">
              {section.links.map((link) => (
                <a key={link.label} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copyright">
          AIRAA© 2025 AIRAA • All Rights Reserved
        </span>
        <div className="footer__legal">
          <a href="/privacy" className="footer__legal-link">
            Privacy policy
          </a>
          <a href="/terms" className="footer__legal-link">
            Terms and Conditions
          </a>
        </div>
      </div>
    </footer>
  );
}

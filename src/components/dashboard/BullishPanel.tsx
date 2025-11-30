'use client';

import { MOCK_BULLISH_PROJECTS } from '@/lib/constants';
import '@/styles/dashboard.css';

export function BullishPanel() {
  return (
    <div className="sentiment-panel">
      <div className="sentiment-panel__header">
        <span className="sentiment-panel__title">Bullish Sentiment</span>
      </div>
      <div className="sentiment-panel__grid">
        {MOCK_BULLISH_PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`sentiment-bubble sentiment-bubble--${project.size} sentiment-bubble--${project.name.toLowerCase()}`}
          >
            <div className="sentiment-bubble__bg" />
            {project.name === 'Hyperliquid' && (
              <div
                style={{
                  width: '60%',
                  height: '60%',
                  background: 'radial-gradient(circle, #00ff88 0%, #00aa55 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: '#fff',
                    fontWeight: 500,
                    textAlign: 'center',
                  }}
                >
                  Hyperliquid
                </span>
              </div>
            )}
            {project.name === 'Ethereum' && (
              <div
                style={{
                  width: '60%',
                  height: '60%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <svg viewBox="0 0 256 417" style={{ width: '70%', height: '70%' }}>
                  <path
                    fill="#fff"
                    d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
                    opacity="0.6"
                  />
                  <path fill="#fff" d="M127.962 0L0 212.32l127.962 75.639V154.158z" />
                  <path
                    fill="#fff"
                    d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
                    opacity="0.6"
                  />
                  <path fill="#fff" d="M127.962 416.905v-104.72L0 236.585z" />
                </svg>
              </div>
            )}
            {project.name === 'USDC' && (
              <div
                style={{
                  width: '60%',
                  height: '60%',
                  background: '#2775ca',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <span style={{ fontSize: 28, color: '#fff', fontWeight: 700 }}>$</span>
              </div>
            )}
            {project.name === 'Solana' && (
              <div
                style={{
                  width: '60%',
                  height: '60%',
                  background: 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
                  borderRadius: '50%',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            )}
            {project.name === 'Avalanche' && (
              <div
                style={{
                  width: '60%',
                  height: '60%',
                  background: '#e84142',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <span style={{ fontSize: 24, color: '#fff', fontWeight: 700 }}>A</span>
              </div>
            )}
            {project.percentage !== undefined && (
              <span className="sentiment-bubble__percentage sentiment-bubble__percentage--positive">
                +{project.percentage}%
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

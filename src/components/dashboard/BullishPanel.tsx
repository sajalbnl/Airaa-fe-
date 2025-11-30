'use client';

import Image from 'next/image';
import { MOCK_BULLISH_PROJECTS } from '@/lib/constants';
import '@/styles/dashboard.css';

// Map project names to their bubble image paths
const PROJECT_BUBBLES: Record<string, string> = {
  Hyperliquid: "/assets/images/hyperliquid-1.svg",
  Ethereum: "/assets/images/ethereum.svg",
  USDC: "/assets/images/usdc.svg",
  Arb: "/assets/images/arb.svg",
  Avalanche: "/assets/images/avax.svg",
};

// Size mappings in pixels
const BUBBLE_SIZES: Record<string, number> = {
  small: 113,
  medium: 130,
  large: 181,
};

export function BullishPanel() {
  return (
    <div className="sentiment-panel">
      <div className="sentiment-panel__header">
        <span className="sentiment-panel__title">Bullish Sentiment</span>
      </div>
      <div className="sentiment-panel__grid_bullish">
        {MOCK_BULLISH_PROJECTS.map((project) => {
          const size = BUBBLE_SIZES[project.size];
          return (
            <div key={project.id} className="sentiment-bubble-wrapper">
              <Image
                src={PROJECT_BUBBLES[project.name]}
                alt={project.name}
                width={size}
                height={size}
                className="sentiment-bubble-image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

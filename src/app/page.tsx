'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProfileHeader } from '@/components/dashboard/ProfileHeader';
import { ProjectRankings } from '@/components/dashboard/ProjectRankings';
import { SmartFollowers } from '@/components/dashboard/SmartFollowers';
import { BullishPanel } from '@/components/dashboard/BullishPanel';
import { BearishPanel } from '@/components/dashboard/BearishPanel';
import { ShareModal } from '@/components/modal/ShareModal';
import { MOCK_AURA_DATA } from '@/lib/constants';
import type { AuraCardData, CardColorVariant, AuraLevel } from '@/types';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<CardColorVariant>('gold');

  const getCardDataForVariant = (variant: CardColorVariant): AuraCardData => {
    const levelMap: Record<CardColorVariant, AuraLevel> = {
      gold: 'LOWKEY',
      bronze: 'COOKER',
      pink: 'MAIN CHARACTER',
      green: 'TREND LORD',
      cyan: 'GOATED',
    };

    const nextLevelMap: Record<CardColorVariant, AuraLevel | null> = {
      gold: 'COOKER',
      bronze: 'MAIN CHARACTER',
      pink: 'TREND LORD',
      green: 'GOATED',
      cyan: null,
    };

    return {
      ...MOCK_AURA_DATA,
      colorVariant: variant,
      level: levelMap[variant],
      nextLevel: nextLevelMap[variant],
      progress: variant === 'cyan' ? 100 : MOCK_AURA_DATA.progress,
    };
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <main className="dashboard">
        <ProfileHeader onDegenClick={handleOpenModal} />

        <div className="dashboard-grid">
          <ProjectRankings />
          <SmartFollowers />
        </div>

        <div className="sentiment-grid">
          <BullishPanel />
          <BearishPanel />
        </div>

        {/* Color variant selector for demo */}
        <div
          style={{
            marginTop: '32px',
            padding: '20px',
            backgroundColor: 'var(--color-dark-100)',
            borderRadius: '12px',
            border: '1px solid var(--color-dark-300)',
          }}
        >
          <h3
            style={{
              fontSize: '14px',
              color: 'var(--color-white)',
              marginBottom: '16px',
            }}
          >
            Select Aura Card Variant
          </h3>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {(['gold', 'bronze', 'pink', 'green', 'cyan'] as CardColorVariant[]).map(
              (variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor:
                      selectedVariant === variant
                        ? 'var(--color-dark-400)'
                        : 'var(--color-dark-200)',
                    border:
                      selectedVariant === variant
                        ? '1px solid var(--color-primary)'
                        : '1px solid var(--color-dark-400)',
                    color: 'var(--color-white)',
                    fontSize: '12px',
                    textTransform: 'capitalize',
                    cursor: 'pointer',
                    transition: 'all 150ms ease',
                  }}
                >
                  {variant}
                </button>
              )
            )}
          </div>
        </div>
      </main>
      <Footer />

      <ShareModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cardData={getCardDataForVariant(selectedVariant)}
      />
    </>
  );
}

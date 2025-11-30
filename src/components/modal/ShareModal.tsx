'use client';

import { ModalOverlay } from './ModalOverlay';
import { AuraCardUI } from '../share/AuraCardUI';
import { ShareButton } from '../share/ShareButton';
import type { AuraCardData } from '@/types';
import { generateOGUrl, generateTwitterShareUrl } from '@/lib/og';
import '@/styles/modal.css';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardData: AuraCardData;
}

export function ShareModal({ isOpen, onClose, cardData }: ShareModalProps) {
  const ogUrl = generateOGUrl({
    user: cardData.username,
    points: cardData.points.toString(),
    date: cardData.date,
    level: cardData.level,
    color: cardData.colorVariant,
    handle: cardData.handle,
    progress: cardData.progress.toString(),
    pointsToNext: cardData.pointsToNext.toString(),
    nextLevel: cardData.nextLevel || undefined,
  });

  const handleShare = () => {
    const shareUrl = generateTwitterShareUrl(ogUrl, 'My Aura Score 🔥');
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ogUrl);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = ogUrl;
    link.download = `aura-score-${cardData.username}.png`;
    link.click();
  };

  return (
    <ModalOverlay isOpen={isOpen} onClose={onClose}>
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title">Daily Aura score</h2>
          <button
            className="modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg
              className="modal__close-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="share-modal__content">
          <div className="share-modal__card-container">
            <AuraCardUI data={cardData} />
          </div>
          <div className="share-modal__actions">
            <ShareButton onClick={handleShare} />
            <button
              className="share-modal__action-btn"
              onClick={handleCopy}
              aria-label="Copy link"
            >
              <svg
                className="share-modal__action-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            </button>
            <button
              className="share-modal__action-btn"
              onClick={handleDownload}
              aria-label="Download image"
            >
              <svg
                className="share-modal__action-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
}

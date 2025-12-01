"use client";

import { useState } from "react";
import { ModalOverlay } from "./ModalOverlay";
import { AuraCardUI } from "../share/AuraCardUI";
import { ShareButton } from "../share/ShareButton";
import type { AuraCardData } from "@/types";
import { generateOGUrl, generateSharePageUrl, generateTwitterShareUrl } from "@/lib/og";
import "@/styles/modal.css";
import Image from "next/image";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardData: AuraCardData;
}

export function ShareModal({ isOpen, onClose, cardData }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

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

  const ogShareUrl = generateSharePageUrl({
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
    const shareUrl = generateTwitterShareUrl(ogShareUrl, "My Aura Score 🔥");
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ogUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
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
            <Image
                src="/assets/images/close-icon.svg"
                alt="Close"
                style={{ cursor: "pointer" }}
                width={16}
                height={16}
              />
          </button>
        </div>
        <div className="share-modal__content">
          <div className="share-modal__card-container">
            <AuraCardUI data={cardData} />
          </div>
          <div className="share-modal__actions">
            <ShareButton onClick={handleShare} />
              <button
                className="share-modal__action-btn copy-btn"
                onClick={handleCopy}
                aria-label="Copy link"
              >
                <Image
                  src="/assets/images/copy-icon.svg"
                  alt="Copy name"
                  style={{ cursor: "pointer" }}
                  width={16}
                  height={16}
                />
                 {copied && <span className="copy-tooltip">Copied!</span>}
              </button>
            
            <button
              className="share-modal__action-btn"
              onClick={handleDownload}
              aria-label="Download image"
            >
              <Image
                src="/assets/images/download.svg"
                alt="Copy name"
                style={{ cursor: "pointer" }}
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
}
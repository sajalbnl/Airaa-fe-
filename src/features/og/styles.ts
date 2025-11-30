import type { CardColorVariant } from '@/types';

export interface OGColorSystem {
  brand: string;
  glow: string;
  ring: string;
  highlight: string;
  border: string;
  progress: string;
  text: string;
}

export const OG_COLOR_SYSTEMS: Record<CardColorVariant, OGColorSystem> = {
  gold: {
    brand: '#f5c842',
    glow: 'rgba(245, 200, 66, 0.6)',
    ring: 'rgba(245, 200, 66, 0.8)',
    highlight: 'rgba(245, 200, 66, 0.3)',
    border: 'rgba(245, 200, 66, 0.5)',
    progress: '#f5c842',
    text: '#f5c842',
  },
  bronze: {
    brand: '#cd7f32',
    glow: 'rgba(205, 127, 50, 0.6)',
    ring: 'rgba(205, 127, 50, 0.8)',
    highlight: 'rgba(205, 127, 50, 0.3)',
    border: 'rgba(205, 127, 50, 0.5)',
    progress: '#cd7f32',
    text: '#cd7f32',
  },
  pink: {
    brand: '#ff69b4',
    glow: 'rgba(255, 105, 180, 0.6)',
    ring: 'rgba(255, 105, 180, 0.8)',
    highlight: 'rgba(255, 105, 180, 0.3)',
    border: 'rgba(255, 105, 180, 0.5)',
    progress: '#ff69b4',
    text: '#ff69b4',
  },
  green: {
    brand: '#00ff88',
    glow: 'rgba(0, 255, 136, 0.6)',
    ring: 'rgba(0, 255, 136, 0.8)',
    highlight: 'rgba(0, 255, 136, 0.3)',
    border: 'rgba(0, 255, 136, 0.5)',
    progress: '#00ff88',
    text: '#00ff88',
  },
  cyan: {
    brand: '#52e9ff',
    glow: 'rgba(82, 233, 255, 0.6)',
    ring: 'rgba(82, 233, 255, 0.8)',
    highlight: 'rgba(82, 233, 255, 0.3)',
    border: 'rgba(82, 233, 255, 0.5)',
    progress: '#52e9ff',
    text: '#52e9ff',
  },
};

export function getOGColorSystem(variant: CardColorVariant): OGColorSystem {
  return OG_COLOR_SYSTEMS[variant] || OG_COLOR_SYSTEMS.gold;
}

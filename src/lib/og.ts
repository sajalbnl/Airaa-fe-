import type { CardColorVariant, AuraLevel, OGImageParams } from '@/types';
import { COLOR_SYSTEMS, LEVEL_ORDER, SITE_URL } from './constants';

export function getColorSystem(variant: CardColorVariant) {
  return COLOR_SYSTEMS[variant] || COLOR_SYSTEMS.gold;
}

export function getNextLevel(currentLevel: AuraLevel): AuraLevel | null {
  const currentIndex = LEVEL_ORDER.indexOf(currentLevel);
  if (currentIndex === -1 || currentIndex === LEVEL_ORDER.length - 1) {
    return null;
  }
  return LEVEL_ORDER[currentIndex + 1];
}

export function isAtTopLevel(level: AuraLevel): boolean {
  return level === 'GOATED';
}

export function generateOGUrl(params: Partial<OGImageParams>): string {
  const searchParams = new URLSearchParams();

  if (params.user) searchParams.set('user', params.user);
  if (params.points) searchParams.set('points', params.points);
  if (params.date) searchParams.set('date', params.date);
  if (params.level) searchParams.set('level', params.level);
  if (params.color) searchParams.set('color', params.color);
  if (params.handle) searchParams.set('handle', params.handle);
  if (params.progress) searchParams.set('progress', params.progress);
  if (params.pointsToNext) searchParams.set('pointsToNext', params.pointsToNext);
  if (params.nextLevel) searchParams.set('nextLevel', params.nextLevel);

  return `${SITE_URL}/api/og?${searchParams.toString()}`;
}

export function generateTwitterShareUrl(ogUrl: string, text: string): string {
  const encodedUrl = encodeURIComponent(ogUrl);
  const encodedText = encodeURIComponent(text);
  return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
}

export function formatPoints(points: number): string {
  if (points >= 1000) {
    return `${(points / 1000).toFixed(1)}k`;
  }
  return points.toFixed(points % 1 === 0 ? 0 : 1);
}

export function formatDate(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

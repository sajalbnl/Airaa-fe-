import type { AuraLevel, CardColorVariant } from '@/types';

export function parseOGParams(searchParams: URLSearchParams) {
  return {
    user: searchParams.get('user') || 'Anonymous',
    points: searchParams.get('points') || '0',
    date: searchParams.get('date') || new Date().toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }),
    level: (searchParams.get('level') || 'LOWKEY') as AuraLevel,
    color: (searchParams.get('color') || 'gold') as CardColorVariant,
    handle: searchParams.get('handle') || '@user',
    progress: parseInt(searchParams.get('progress') || '50', 10),
    pointsToNext: searchParams.get('pointsToNext') || '480',
    nextLevel: searchParams.get('nextLevel') as AuraLevel | null,
  };
}

export function isValidColorVariant(color: string): color is CardColorVariant {
  return ['gold', 'bronze', 'pink', 'green', 'cyan'].includes(color);
}

export function isValidLevel(level: string): level is AuraLevel {
  return ['LOWKEY', 'COOKER', 'MAIN CHARACTER', 'TREND LORD', 'GOATED'].includes(level);
}

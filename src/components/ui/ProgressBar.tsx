'use client';

import type { ProgressBarProps } from '@/types';

export function ProgressBar({
  value,
  max = 100,
  color,
  className = '',
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={`progress-bar ${className}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      style={{
        width: '100%',
        height: 4,
        backgroundColor: 'var(--color-dark-400)',
        borderRadius: 9999,
        overflow: 'hidden',
      }}
    >
      <div
        className="progress-bar__fill"
        style={{
          width: `${percentage}%`,
          height: '100%',
          background: color
            ? `linear-gradient(90deg, ${color} 0%, ${color} 100%)`
            : 'linear-gradient(90deg, var(--brand-progress) 0%, var(--brand-color) 100%)',
          borderRadius: 9999,
          transition: 'width 500ms ease',
          boxShadow: color
            ? `0 0 10px ${color}40`
            : '0 0 10px var(--brand-glow)',
        }}
      />
    </div>
  );
}

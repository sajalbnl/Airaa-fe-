'use client';

import type { CardProps } from '@/types';

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div
      className={`card ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: 'var(--color-dark-100)',
        border: '1px solid var(--color-dark-300)',
        borderRadius: 12,
        padding: 20,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 150ms ease',
      }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      {children}
    </div>
  );
}

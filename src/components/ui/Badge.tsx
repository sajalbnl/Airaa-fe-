'use client';

import type { BadgeProps } from '@/types';

const variantStyles = {
  default: {
    backgroundColor: 'var(--color-dark-300)',
    color: 'var(--color-white)',
  },
  success: {
    backgroundColor: 'rgba(0, 255, 136, 0.2)',
    color: 'var(--color-success)',
  },
  warning: {
    backgroundColor: 'rgba(245, 200, 66, 0.2)',
    color: 'var(--color-warning)',
  },
  error: {
    backgroundColor: 'rgba(255, 68, 68, 0.2)',
    color: 'var(--color-error)',
  },
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const styles = variantStyles[variant];

  return (
    <span
      className={`badge badge--${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '4px 12px',
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 500,
        ...styles,
      }}
    >
      {children}
    </span>
  );
}

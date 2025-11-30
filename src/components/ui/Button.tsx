'use client';

import type { ButtonProps } from '@/types';

const variantStyles = {
  primary: {
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-black)',
    border: 'none',
  },
  secondary: {
    backgroundColor: 'transparent',
    color: 'var(--color-primary)',
    border: '1px solid var(--color-primary)',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: 'var(--color-gray-400)',
    border: 'none',
  },
};

const sizeStyles = {
  sm: {
    padding: '6px 12px',
    fontSize: 12,
  },
  md: {
    padding: '10px 16px',
    fontSize: 14,
  },
  lg: {
    padding: '12px 20px',
    fontSize: 14,
  },
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
  icon,
}: ButtonProps) {
  const baseStyles = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <button
      className={`button button--${variant} button--${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        borderRadius: 8,
        fontWeight: 600,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 150ms ease',
        ...baseStyles,
        ...sizeStyle,
      }}
    >
      {icon}
      {children}
    </button>
  );
}

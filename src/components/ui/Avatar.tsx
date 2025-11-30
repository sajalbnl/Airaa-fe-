'use client';

import type { AvatarProps } from '@/types';

const sizeMap = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 48,
  xl: 72,
};

export function Avatar({ src, alt, size = 'md', className = '' }: AvatarProps) {
  const dimension = sizeMap[size];

  return (
    <div
      className={`avatar avatar--${size} ${className}`}
      style={{
        width: dimension,
        height: dimension,
        borderRadius: size === 'xl' ? 12 : size === 'lg' ? 10 : 8,
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          target.parentElement!.style.backgroundColor = '#333';
        }}
      />
    </div>
  );
}

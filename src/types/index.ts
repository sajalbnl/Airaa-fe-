// Types for AIRAA Dashboard

export type AuraLevel = 'LOWKEY' | 'COOKER' | 'MAIN CHARACTER' | 'TREND LORD' | 'GOATED';

export type CardColorVariant = 'gold' | 'bronze' | 'pink' | 'green' | 'cyan';

export interface AuraCardData {
  username: string;
  handle: string;
  avatar: string;
  points: number;
  date: string;
  level: AuraLevel;
  pointsToNext: number;
  nextLevel: AuraLevel | null;
  progress: number; // 0-100
  colorVariant: CardColorVariant;
}

export interface ProjectRanking {
  id: string;
  name: string;
  icon: string;
  rank: number;
}

export interface SmartFollower {
  id: string;
  username: string;
  avatar: string;
}

export interface SentimentProject {
  id: string;
  name: string;
  size: 'small' | 'medium' | 'large';
}

export interface UserProfile {
  name: string;
  bio: string;
  avatar: string;
  isVerified: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
  isActive?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title?: string;
  links: FooterLink[];
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export interface AvatarProps {
  src: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  className?: string;
}

// Color system type
export interface CardColorSystem {
  brand: string;
  glow: string;
  ring: string;
  highlight: string;
  border: string;
  progress: string;
  text: string;
  background: string;
}

// OG Image params
export interface OGImageParams {
  user: string;
  points: string;
  date: string;
  level: AuraLevel;
  color: CardColorVariant;
  avatar?: string;
  handle?: string;
  progress?: string;
  pointsToNext?: string;
  nextLevel?: string;
}

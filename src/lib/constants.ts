import type { CardColorSystem, CardColorVariant, AuraLevel, AuraCardData, ProjectRanking, SentimentProject, UserProfile, NavItem, FooterSection } from '@/types';

// Color Systems for each variant
export const COLOR_SYSTEMS: Record<CardColorVariant, CardColorSystem> = {
  gold: {
    brand: '#f5c842',
    glow: 'rgba(245, 200, 66, 0.6)',
    ring: 'rgba(245, 200, 66, 0.8)',
    highlight: 'rgba(245, 200, 66, 0.3)',
    border: 'rgba(245, 200, 66, 0.5)',
    progress: '#f5c842',
    text: '#f5c842',
    background: 'linear-gradient(180deg, rgba(245, 200, 66, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%)',
  },
  bronze: {
    brand: '#cd7f32',
    glow: 'rgba(205, 127, 50, 0.6)',
    ring: 'rgba(205, 127, 50, 0.8)',
    highlight: 'rgba(205, 127, 50, 0.3)',
    border: 'rgba(205, 127, 50, 0.5)',
    progress: '#cd7f32',
    text: '#cd7f32',
    background: 'linear-gradient(180deg, rgba(205, 127, 50, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%)',
  },
  pink: {
    brand: '#ff69b4',
    glow: 'rgba(255, 105, 180, 0.6)',
    ring: 'rgba(255, 105, 180, 0.8)',
    highlight: 'rgba(255, 105, 180, 0.3)',
    border: 'rgba(255, 105, 180, 0.5)',
    progress: '#ff69b4',
    text: '#ff69b4',
    background: 'linear-gradient(180deg, rgba(255, 105, 180, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%)',
  },
  green: {
    brand: '#00ff88',
    glow: 'rgba(0, 255, 136, 0.6)',
    ring: 'rgba(0, 255, 136, 0.8)',
    highlight: 'rgba(0, 255, 136, 0.3)',
    border: 'rgba(0, 255, 136, 0.5)',
    progress: '#00ff88',
    text: '#00ff88',
    background: 'linear-gradient(180deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%)',
  },
  cyan: {
    brand: '#52e9ff',
    glow: 'rgba(82, 233, 255, 0.6)',
    ring: 'rgba(82, 233, 255, 0.8)',
    highlight: 'rgba(82, 233, 255, 0.3)',
    border: 'rgba(82, 233, 255, 0.5)',
    progress: '#52e9ff',
    text: '#52e9ff',
    background: 'linear-gradient(180deg, rgba(82, 233, 255, 0.1) 0%, rgba(0, 0, 0, 0.95) 100%)',
  },
};

// Level progression
export const LEVEL_ORDER: AuraLevel[] = ['LOWKEY', 'COOKER', 'MAIN CHARACTER', 'TREND LORD', 'GOATED'];

export const LEVEL_COLORS: Record<AuraLevel, CardColorVariant> = {
  'LOWKEY': 'gold',
  'COOKER': 'bronze',
  'MAIN CHARACTER': 'pink',
  'TREND LORD': 'green',
  'GOATED': 'cyan',
};

// Mock data
export const MOCK_AURA_DATA: AuraCardData = {
  username: 'wale.moca',
  handle: '@waleswoosh',
  avatar: '/assets/images/avatar-wale.svg',
  points: 32.1,
  date: '18 Nov 2025',
  level: 'LOWKEY',
  pointsToNext: 480,
  nextLevel: 'COOKER',
  progress: 40,
  colorVariant: 'gold',
};

export const MOCK_USER_PROFILE: UserProfile = {
  name: 'Alex Thompson',
  bio: 'Crypto enthusiast and DeFi researcher. Crypto enthusiast and DeFi researcher.',
  avatar: '/assets/images/alex-avatar.svg',
  isVerified: true,
};

export const MOCK_PROJECT_RANKINGS: ProjectRanking[] = [
  { id: '1', name: 'Project name', icon: '/assets/icons/project-blue.svg', rank: 5 },
  { id: '2', name: 'Project name', icon: '/assets/icons/project-blue.svg', rank: 5 },
  { id: '3', name: 'Project name', icon: '/assets/icons/project-blue.svg', rank: 5 },
  { id: '4', name: 'Project name', icon: '/assets/icons/project-blue.svg', rank: 5 },
];

export const MOCK_BULLISH_PROJECTS: SentimentProject[] = [
  { id: '1', name: 'Hyperliquid', size: 'large' },
  { id: '2', name: 'Ethereum', size: 'large' },
  { id: '3', name: 'USDC', size: 'medium' },
  { id: '4', name: 'Arb',  size: 'large' },
  { id: '5', name: 'Avalanche',  size: 'small' },
];

export const MOCK_BEARISH_PROJECTS: SentimentProject[] = [
  { id: '1', name: 'Hyperliquid', size: 'large' },
  { id: '2', name: 'Ethereum',  size: 'large' },
  { id: '3', name: 'USDC',  size: 'medium' },
  { id: '4', name: 'Arb', size: 'large' },
  { id: '5', name: 'Avalanche',  size: 'small' },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Explore', href: '/explore', isActive: true ,icon: '/assets/images/explore-icon.svg' },
  { label: 'Campaigns', href: '/campaigns',icon: '/assets/images/campaigns-icon.svg'  },
  { label: 'Terminal', href: '/terminal' ,icon: '/assets/images/terminal-icon.svg' },
];

export const DASHBOARD_TABS = [
  { label: 'My dashboard', href: '#dashboard', isActive: true },
  // { label: 'Rewards', href: '#rewards', hasNotification: true },
  // { label: 'Wallets', href: '#wallets' },
  // { label: 'Ref', href: '#ref' },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    links: [
      { label: 'Explore', href: '/explore' },
      { label: 'List your project', href: '/list' },
      { label: 'Create a reward pool', href: '/reward-pool' },
    ],
  },
  {
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact us', href: '/contact' },
    ],
  },
  {
    links: [
      { label: 'X', href: 'https://x.com' },
      { label: 'Telegram', href: 'https://telegram.org' },
      { label: 'Discord', href: 'https://discord.com' },
    ],
  },
];

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

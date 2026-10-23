import { Platform } from 'react-native';

// Original app colors (unchanged) -- used by the existing screens.
export const COLORS = {
  primary: '#2E7D5B',
  background: '#F7F6F2',
  card: '#FFFFFF',
  textPrimary: '#14181F',
  textSecondary: '#5D6B7A',
  textOnPrimary: '#FFFFFF',
  surface: '#EFF3F0',
  border: '#DADFE3',
  shadow: '#14181F',
  warning: '#C97A2B',
  success: '#2E7D5B',
  danger: '#B3261E',
} as const;

// "Modern Campus Tech" palette: deep navy, electric blue + cyan accents,
// glass-style surfaces. Use this on screens that get the new look.
export const CAMPUS = {
  bg: '#0A0F1E',
  bgDeep: '#060A15',

  surface: 'rgba(255,255,255,0.06)',
  surfaceStrong: 'rgba(255,255,255,0.10)',
  inputBg: 'rgba(255,255,255,0.05)',
  border: 'rgba(255,255,255,0.12)',

  primary: '#4F7CFF',
  primaryDeep: '#3B5BDB',
  accent: '#22D3EE',
  mint: '#34D399',

  text: '#F1F5FF',
  textMuted: '#8B97B5',
  textFaint: '#5C6786',

  danger: '#FF7A88',
  dangerBg: 'rgba(255,107,122,0.12)',
  dangerBorder: 'rgba(255,107,122,0.35)',

  mono: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    default: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
  }) as string,
} as const;
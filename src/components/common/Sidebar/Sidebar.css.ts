import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const root = style({
  ...theme.layouts.rowBetween,
  position: 'fixed',
  top: 0,
  left: 0,
  flexDirection: 'column',
  width: '210px',
  height: '100dvh',
  paddingInline: '40px',
  paddingBlock: '44px',
});

export const topContainer = style({
  ...theme.layouts.column,
  width: '100%',
  gap: '25px',
});

export const branding = style({
  ...theme.typographies.h3,
  paddingBlock: '12.5px',
  paddingInline: '10px',
  color: theme.colors.gray.accent,
  wordBreak: 'keep-all',
  userSelect: 'none',
});

export const divider = style({
  width: '100%',
  height: '0.5px',
  border: 'none',
  background: theme.colors.gradient.sidebar_divider,
});

export const navList = style({
  ...theme.layouts.column,
  width: '100%',
  gap: '5px',
  listStyle: 'none',
});

export const navItem = style({
  width: '100%',
  height: '40px',
  borderRadius: '10px',
  transition: 'background-color 0.2s',
});

export const navItemActive = style({
  backgroundColor: theme.colors.border,
});

export const navLink = style({
  ...theme.layouts.centerY,
  ...theme.typographies.a,
  width: '100%',
  height: '100%',
  paddingInline: '10px',
  color: theme.colors.gray.mid,
});

export const bottomContainer = style({
  ...theme.layouts.column,
  width: '100%',
  gap: '20px',
});

export const themeToggle = style({
  ...theme.layouts.center,
  ...theme.typographies.h4,
  width: '100%',
  height: '40px',
  color: theme.colors.gray.accent,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: '10px',
  backgroundColor: theme.colors.toggle,
});

export const license = style({
  ...theme.typographies.h6,
  width: '100%',
  color: theme.colors.license,
});

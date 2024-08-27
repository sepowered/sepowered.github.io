import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const navList = style({
  ...theme.layouts.column,
  width: '100%',
  gap: '5px',
  listStyle: 'none',
});

export const navItem = style({
  width: '100%',
  height: '40px',
  color: theme.colors.gray.mid,
  borderRadius: '10px',
  transition: 'background-color 0.2s',
});

export const navItemActive = style({
  color: theme.colors.gray.accent,
  backgroundColor: theme.colors.border,
});

export const navLink = style({
  ...theme.layouts.centerY,
  ...theme.typographies.a,
  width: '100%',
  height: '100%',
  paddingInline: '10px',
});

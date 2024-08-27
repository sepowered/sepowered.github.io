import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';

export const root = style({
  ...theme.layouts.rowBetween,
  position: 'fixed',
  display: 'none',
  top: 0,
  left: 0,
  flexDirection: 'column',
  width: theme.sizes.sidebarWidth,
  height: '100dvh',
  paddingInline: '40px',
  paddingBlock: '44px',

  ...breakpoint({ tablet: { display: 'flex' } }),
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

export const bottomContainer = style({
  ...theme.layouts.column,
  width: '100%',
  gap: '20px',
});

export const license = style({
  ...theme.typographies.h6,
  width: '100%',
  color: theme.colors.license,
});

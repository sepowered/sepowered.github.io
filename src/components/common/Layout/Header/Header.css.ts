import { globalStyle, keyframes, style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';

const slideDown = keyframes({
  from: { height: '0' },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: '0' },
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  backdropFilter: 'blur(11px)',
  zIndex: theme.zIndices.overlay,
});

export const root = style({
  position: 'fixed',
  display: 'flex',
  top: 0,
  left: 0,
  width: '100%',
  paddingInline: theme.sizes.appInlineSpace,
  backgroundColor: theme.colors.background,
  zIndex: theme.zIndices.headerContainer,

  ...breakpoint({ tablet: { display: 'none' } }),
});

export const inner = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  paddingBlock: '13px',
  marginInline: 'auto',
});

export const branding = style({
  color: theme.colors.gray.mid,
  fontFamily: theme.fonts.mono,
  fontWeight: '500',
  fontSize: '15px',
  lineHeight: 'auto',
});

export const menu = style({
  ...theme.layouts.center,
  height: '40px',
  paddingBlock: '11px',
  paddingInline: '15px',
  color: theme.colors.gray.mid,
  fontFamily: theme.fonts.mono,
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '18px',
  border: `1px solid ${theme.colors.border}`,
  borderRadius: '10px',
  backgroundColor: theme.colors.toggle,
});

export const menuContainer = style({
  marginTop: '1px',
  overflow: 'hidden',
});

export const menuContent = style({
  position: 'fixed',
  top: '67px',
  left: 0,
  width: '100%',
  paddingInline: theme.sizes.appInlineSpace,
  backgroundColor: theme.colors.background,
  overflow: 'hidden',
});

globalStyle(`${menuContent}[data-state="open"]`, {
  animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});

globalStyle(`${menuContent}[data-state="closed"]`, {
  animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
});

export const menuContentInner = style({
  ...theme.layouts.column,
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  paddingTop: '25px',
  paddingBottom: '19px',
  marginInline: 'auto',
});

export const menuContentNavigation = style({
  ...theme.layouts.column,
  width: '100%',
  maxWidth: '122px',
  gap: '30px',
});

export const dividerContainer = style({
  display: 'block',
  paddingTop: '67px',

  ...breakpoint({ tablet: { display: 'none' } }),
});

export const license = style({
  ...theme.typographies.h7,
  width: '100%',
  marginTop: '43px',
  color: theme.colors.license,
  textAlign: 'center',
});

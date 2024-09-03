import { globalStyle, style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';

export const root = style({
  ...theme.layouts.column,
  paddingTop: '70px',
});

export const titleContainer = style({
  ...theme.layouts.rowBetween,
});

export const title = style({
  ...theme.typographies.h3,
  color: theme.colors.gray.light,
});

export const expandLink = style({
  ...theme.layouts.center,
  ...theme.typographies.h4,
  height: '32px',
  paddingInline: '12px',
  color: theme.colors.gray.light,
  border: `1px solid ${theme.colors.border}`,
  borderRadius: '10px',
  backgroundColor: theme.colors.toggle,
  gap: '8px',
});

export const expandIcon = style({
  fontSize: '14px',
  fontWeight: 600,
  color: theme.colors.gray.mid,
});

export const postGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  gap: '65px',
  marginTop: '30px',

  ...breakpoint({ tablet: { gridTemplateColumns: '1fr 1fr' } }),
});

export const postContainer = style({
  ...theme.layouts.column,
  width: '100%',
  cursor: 'pointer',
});

export const postCover = style({
  width: '100%',
  aspectRatio: '1.5 / 1',
  borderRadius: '14px',
  backgroundColor: theme.colors.border,
  userSelect: 'none',
  overflow: 'hidden',
});

export const postTitle = style({
  ...theme.typographies.post_subtitle,
  display: '-webkit-box',
  paddingBlock: '2px',
  paddingInline: '10px',
  marginTop: '16px',
  marginInline: '-10px',
  marginBottom: '-2px',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  textOverflow: 'ellipsis',
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'background-color 0.3s ease',
});

export const postDescription = style({
  ...theme.typographies.h4,
  width: 'fit-content',
  paddingBlock: '2px',
  paddingInline: '10px',
  marginTop: '16px',
  marginInline: '-10px',
  marginBottom: '-2px',
  color: theme.colors.gray.light,
  borderRadius: '8px',
  transition: 'background-color 0.3s ease',
});

globalStyle(`${postContainer}:hover ${postTitle}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${postContainer}:hover ${postDescription}`, {
  backgroundColor: theme.colors.gray.hover,
});

globalStyle(`${postContainer}:active ${postTitle}`, {
  backgroundColor: theme.colors.border,
});

globalStyle(`${postContainer}:active ${postDescription}`, {
  backgroundColor: theme.colors.border,
});

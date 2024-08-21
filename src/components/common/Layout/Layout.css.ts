import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const root = style({
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  marginInline: 'auto',
});

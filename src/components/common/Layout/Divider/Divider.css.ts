import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const divider = style({
  width: '100%',
  height: '0.5px',
  border: 'none',
  background: theme.colors.gradient.sidebar_divider,
});

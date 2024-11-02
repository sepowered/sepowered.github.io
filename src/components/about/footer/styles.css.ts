import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const root = style({});

export const date = style({
  ...theme.typographies.profile_sub,
  color: theme.colors.gray.mid,
});

import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

export const root = style({
  width: '100%',
  height: '183px',
  marginTop: '30px',
  border: `1px solid rgba(0, 0, 0, 0.03)`,
  borderRadius: '14px',
  boxShadow: `
    inset 0px -2px 2px rgba(255, 255, 255, 0.3),
    inset 0px 2px 2px rgba(255, 255, 255, 0.3)
  `,
  overflow: 'hidden',
});

export const content = style({
  ...theme.layouts.rowBetween,
  width: '100%',
  height: '100%',
  padding: '30px',
});

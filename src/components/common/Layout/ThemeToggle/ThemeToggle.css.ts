import { style } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';

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

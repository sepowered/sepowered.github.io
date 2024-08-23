import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';

export const root = style({
  width: '100%',
  maxWidth: theme.sizes.appWidth,
  marginInline: 'auto',
  paddingLeft: 0,

  ...breakpoint({
    tablet: {
      maxWidth: `calc(${theme.sizes.appWidth} + ${theme.sizes.sidebarWidth})`,
      paddingLeft: `calc(${theme.sizes.sidebarWidth} - ${theme.sizes.appInlineSpace})`,
    },
    desktop: { maxWidth: theme.sizes.appWidth, paddingLeft: 0 },
  }),
});

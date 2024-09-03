import './reset.css';

import { globalStyle } from '@vanilla-extract/css';

import { theme } from './theme.css';

globalStyle('body', {
  paddingInline: theme.sizes.appInlineSpace,
  paddingBottom: 'env(safe-area-inset-bottom)',
  fontFamily: theme.fonts.sans,
  overflowX: 'hidden',
  backgroundColor: theme.colors.background,
});

globalStyle('img', {
  userSelect: 'none',
});

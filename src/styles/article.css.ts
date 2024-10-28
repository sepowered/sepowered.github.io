import { globalStyle } from '@vanilla-extract/css';

import { theme } from '@/styles/theme.css';
import { rem } from '@/utils/pxto';

globalStyle('article', {
  ...theme.typographies.post_body,
  color: theme.colors.gray.accent,
});

globalStyle('article h1', {
  fontSize: rem(28),
  lineHeight: 1.25,
  marginTop: rem(32),
  marginBottom: rem(16),
});

globalStyle('article h2', {
  fontSize: rem(22.4),
  lineHeight: 1.2,
  marginTop: rem(40),
  marginBottom: rem(19.2),
});

globalStyle('article h3', {
  fontSize: rem(19.2),
  lineHeight: 1.1,
  marginTop: rem(48),
  marginBottom: rem(24),
});

globalStyle('article h4', {
  fontSize: rem(16),
  lineHeight: 1.3,
  marginTop: rem(56),
  marginBottom: rem(28),
});

globalStyle('article h5, article h6', {
  fontSize: rem(16),
  lineHeight: 1.3,
  marginTop: rem(56),
  marginBottom: rem(28),
});

globalStyle('article h1, article h2, article h3, article h4, article h5, article h6', {
  fontWeight: 900,
});

globalStyle('article p', {
  margin: `0 0 ${rem(28)}`,
});

globalStyle('article > div[data-content] > :last-child', {
  marginBottom: 0,
});

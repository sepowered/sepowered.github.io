import { style } from '@vanilla-extract/css';

import { breakpoint } from '@/styles/responsive.css';
import { theme } from '@/styles/theme.css';

export const root = style({
  display: 'grid',
  gridTemplateColumns: '1fr',
  width: '100%',
  paddingTop: '100px',
  gap: '65px',

  ...breakpoint({
    '1280px': { gridTemplateColumns: '1fr 1fr' },
  }),
});

export const container = style({
  ...theme.layouts.column,
  width: '100%',
});

export const title = style({
  ...theme.typographies.h3,
  color: theme.colors.gray.light,
});

export const cardProfileContainer = style({
  ...theme.layouts.rowBetween,
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const cardProfileUsername = style({
  ...theme.typographies.profile_name,
  width: '100%',
  textAlign: 'center',
});

export const cardProfileImage = style({
  width: '97px',
  height: '97px',
  borderRadius: '4px',
});

export const cardProfileTitle = style({
  ...theme.typographies.profile_sub,
});

export const cardProfileContent = style({
  ...theme.typographies.profile_title,
  color: '#302C1D',
  whiteSpace: 'pre-wrap',
});

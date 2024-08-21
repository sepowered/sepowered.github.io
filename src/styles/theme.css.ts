import { createThemeContract, createTheme, createGlobalTheme } from '@vanilla-extract/css';

const sizes = {
  appWidth: '758px',
  appInlineSpace: '24px',
};

const fonts = {
  mono: `"Roboto Mono", "Pretendard Variable", "Courier New", Courier, monospace`,
  sans: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const typographies = {
  h7: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '18px',
  },
  h6: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '18px',
  },
  h5: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: 'auto',
  },
  h4: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: 'auto',
  },
  h3: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '15px',
  },
  post_subtitle: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '26px',
  },
  post_title: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '40px',
  },
  post_description: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '26px',
  },
  post_image_description: {
    fontFamily: fonts.sans,
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '13px',
  },
  post_body: {
    fontFamily: fonts.sans,
    fontWeight: '400',
    fontSize: '20px',
    lineHeight: '40px',
  },
  profile_sub: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '20px',
  },
  profile_name: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '13px',
  },
  profile_title: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '20px',
  },
  a: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: 'auto',
  },
};

const layouts = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

export const colors = createThemeContract({
  gray: {
    accent: '--semantic-colors-gray-accent',
    bold: '--semantic-colors-gray-bold',
    mid: '--semantic-colors-gray-mid',
    light: '--semantic-colors-gray-light',
    click: '--semantic-colors-gray-click',
    hover: '--semantic-colors-gray-hover',
  },
  white: '--semantic-colors-white',
  black: '--semantic-colors-black',
  border: '--semantic-colors-border',
  background: '--semantic-colors-background',

  toggle: '--semantic-colors-toggle',
  license: '--semantic-colors-license',

  gradient: {
    sidebar_divider: '--semantic-gradient-sidebar-divider',
  },
});

export const lightColors = createTheme(colors, {
  gray: {
    accent: '#1D1D30',
    bold: '#393960',
    mid: '#6B6B87',
    light: '#B5B5C3',
    click: '#6B6B87',
    hover: '#F9F9FC',
  },
  white: '#FFFFFF',
  black: '#000000',
  border: '#F4F4F8',
  background: '#FCFCFD',
  toggle: '#FFFFFF',
  license: '#B5B5C3',

  gradient: {
    sidebar_divider: 'radial-gradient(circle, #D9DBE7 0%, rgba(217, 219, 231, 0) 100%)',
  },
});

export const darkColors = createTheme(colors, {
  gray: {
    accent: '#FFFFFF',
    bold: '#DDDDDD',
    mid: '#B2B2B2',
    light: '#888888',
    click: '#1B1B1B',
    hover: '#141414',
  },
  white: '#FFFFFF',
  black: '#000000',
  border: '#1B1B1B',
  background: '#0F0F0F',
  toggle: '#000000',
  license: '#B2B2B2',

  gradient: {
    sidebar_divider: 'radial-gradient(circle, #36363A 0%, rgba(61, 61, 67, 0) 100%)',
  },
});

export const theme = createGlobalTheme(':root', { colors, fonts, sizes, layouts, typographies });

import React from 'react';
import { GatsbySSR } from 'gatsby';
import { createElement } from 'react';

import { darkColors, lightColors } from '@/styles/theme.css';

const colorThemeScript = `
  (function() {
    window.__onThemeChange = function() {};
    function setTheme(newTheme) {
      window.__theme = newTheme;
      preferredTheme = newTheme;
      document.documentElement.className = newTheme === 'dark' ? '${darkColors}' : '${lightColors}';
      window.__onThemeChange(newTheme);
    }
    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('theme');
    } catch (err) {}
    window.__setPreferredTheme = function(newTheme) {
      setTheme(newTheme);
      try {
        localStorage.setItem('theme', newTheme);
      } catch (err) {}
    }
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addListener(function(e) {
      window.__setPreferredTheme(e.matches ? 'dark' : 'light');
    });
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
`;

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHeadComponents,
  setPreBodyComponents,
}) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/PretendardVariable.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="pretendardFont"
    />,
    <link rel="icon" type="image/svg+xml" href="/assets/favicon/favicon.svg" key="svgFavicon" />,
    <link rel="icon" type="image/png" href="/assets/favicon/favicon.png" key="pngFavicon" />,
    <meta property="og:image" content="/assets/images/thumbnail.png" key="ogImage" />,
    <meta property="og:image:alt" content="semantic" key="ogImageAlt" />,
    <meta name="twitter:image" content="/assets/images/thumbnail.png" key="twitterImage" />,
    <meta name="twitter:image:alt" content="semantic" key="twitterImageAlt" />,
  ]);

  setPreBodyComponents([
    createElement('script', {
      key: 'colorThemeScript',
      dangerouslySetInnerHTML: {
        __html: colorThemeScript,
      },
    }),
  ]);
};

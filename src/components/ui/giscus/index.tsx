/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useTheme } from 'next-themes';
import { ComponentProps, useEffect, useRef, useState } from 'react';

type GiscusProps = ComponentProps<'section'>;

export const Giscus = ({ ...props }: GiscusProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme: appTheme } = useTheme();

  const theme = appTheme === 'dark' ? 'noborder_gray' : 'noborder_light';

  useEffect(() => {
    if (!ref.current) return;

    const attributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'sepowered/stileim-blog-comments',
      'data-repo-id': 'R_kgDOMljSQQ',
      'data-category': 'General',
      'data-category-id': 'DIC_kwDOMljSQc4CpWhQ',
      'data-mapping': 'title',
    };

    const script = document.createElement('script');
    script.async = true;

    Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value));
    ref.current.appendChild(script);

    setMounted(true);
    return () => {
      if (ref.current) ref.current.innerHTML = '';
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
  }, [theme, mounted]);

  return <section ref={ref} {...props} />;
};

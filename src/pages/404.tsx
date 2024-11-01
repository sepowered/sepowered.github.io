import React from 'react';

import Layout from '@/components/common/Layout';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import * as styles from '@/styles/pages.css';

const NotFoundPage = () => {
  return <Layout className={styles.centered}>404</Layout>;
};

export default NotFoundPage;

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title>{`Not found – ${title}`}</title>;
};

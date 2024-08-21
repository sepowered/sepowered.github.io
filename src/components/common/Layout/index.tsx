import React from 'react';

import Header from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';

import * as styles from './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className={styles.root}>
      <Sidebar />
      <Header />
      {children}
    </main>
  );
};

export default Layout;

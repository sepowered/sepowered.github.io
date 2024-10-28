import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import * as styles from './styles.css';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.root}>
      <Sidebar />
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;

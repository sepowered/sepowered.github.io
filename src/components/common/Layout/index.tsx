import React from 'react';

import Header from './Header';
import * as styles from './Layout.css';
import Sidebar from './Sidebar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Sidebar />
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;

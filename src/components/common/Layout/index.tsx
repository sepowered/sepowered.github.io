import React from 'react';

import Header from './Header';
import * as styles from './Layout.css';
import Sidebar from './Sidebar';

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

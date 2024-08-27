import dayjs from 'dayjs';
import { Link } from 'gatsby';
import React from 'react';

import { siteMetadata } from '@/constants/siteMetadata';

import * as styles from './Sidebar.css';
import Divider from '../Divider';
import NavigateMenu from '../NavigateMenu';
import ThemeToggle from '../ThemeToggle';

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.root}>
      <div className={styles.topContainer}>
        <Link to="/" className={styles.branding}>
          {siteMetadata.title}
        </Link>
        <Divider />
        <NavigateMenu />
      </div>
      <div className={styles.bottomContainer}>
        <ThemeToggle />
        <p className={styles.license}>
          Copyright © {dayjs().year()} {siteMetadata.username}, All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

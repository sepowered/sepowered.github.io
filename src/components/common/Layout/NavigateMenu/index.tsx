import { useLocation } from '@reach/router';
import { clsx } from 'clsx';
import { Link } from 'gatsby';
import React from 'react';

import { menuItems } from '@/constants/menu';

import * as styles from './NavigateMenu.css';

const NavigateMenu = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className={styles.navList}>
        {menuItems.map(menu => (
          <li
            key={menu.link}
            className={clsx(styles.navItem, pathname === menu.link && styles.navItemActive)}
          >
            <Link to={menu.link} className={styles.navLink}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigateMenu;

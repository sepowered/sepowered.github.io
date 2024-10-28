import React from 'react';

import BackButton from '@/components/common/BackButton';

import * as styles from './styles.css';

const Footer = () => {
  return (
    <footer className={styles.root}>
      <BackButton />
      <button className={styles.share}>
        Share this post
        <span className="material-symbols-rounded">ios_share</span>
      </button>
    </footer>
  );
};

export default Footer;

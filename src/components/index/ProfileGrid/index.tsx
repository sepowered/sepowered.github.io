import React from 'react';

import Card from '@/components/common/Card';
import { PLAYLIST_EMBED_URL, PROFILE, SITE } from '@/constants/metadata';

import * as styles from './ProfileGrid.css';

const ProfileGrid = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h3 className={styles.title}>Profile</h3>
        <Card.Root style={{ backgroundColor: PROFILE.cardBackgroundColor }}>
          <Card.Content>
            <span className={styles.cardProfileContainer}>
              <img className={styles.cardProfileImage} src={PROFILE.imageUrl} alt="profile" />
              <p
                className={styles.cardProfileUsername}
                style={{ color: PROFILE.usernameTextColor }}
              >
                {SITE.username}
              </p>
            </span>
            <span className={styles.cardProfileContainer}>
              {PROFILE.data.map(item => (
                <span key={item.title}>
                  <h3 className={styles.cardProfileTitle} style={{ color: PROFILE.titleTextColor }}>
                    {item.title}
                  </h3>
                  <p
                    className={styles.cardProfileContent}
                    style={{ color: PROFILE.contentTextColor }}
                  >
                    {item.content}
                  </p>
                </span>
              ))}
            </span>
          </Card.Content>
        </Card.Root>
      </div>

      <div className={styles.container}>
        <h3 className={styles.title}>Playlist</h3>
        <Card.Root>
          <iframe
            title="playlist"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            frameBorder="0"
            height="182"
            style={{ width: '100%', overflow: 'hidden', borderRadius: '14px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={PLAYLIST_EMBED_URL}
          />
        </Card.Root>
      </div>
    </section>
  );
};

export default ProfileGrid;

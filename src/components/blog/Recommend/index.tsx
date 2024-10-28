import React from 'react';

import PostsGrid from '@/components/common/PostsGrid';

import * as styles from './styles.css';

type RecommendProps = {
  posts: Queries.RecommendPostsQuery['previous']['nodes'];
};

const Recommend = ({ posts }: RecommendProps) => {
  return (
    <div>
      <h3 className={styles.title}>🦾 Check them out</h3>
      <PostsGrid className={styles.postGrid} posts={posts} />
    </div>
  );
};

export default Recommend;

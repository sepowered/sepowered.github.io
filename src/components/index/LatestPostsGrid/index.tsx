import { clsx } from 'clsx';
import dayjs from 'dayjs';
import { Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import * as styles from './LatestPostsGrid.css';

type Post = Queries.LatestBlogPostsQuery['allMdx']['nodes'][number];
type Posts = ReadonlyArray<Post>;

type LatestPostsGridProps = {
  posts: Posts;
};

const LatestPostsGrid = ({ posts }: LatestPostsGridProps) => {
  return (
    <section className={styles.root}>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Update</h3>
        <Link to="/blog/" className={styles.expandLink}>
          Expand<span className={clsx(styles.expandIcon, 'material-symbols-outlined')}>add</span>
        </Link>
      </div>

      <div className={styles.postGrid}>
        {posts.map(({ id, frontmatter }) => {
          const coverImage: IGatsbyImageData | undefined = getImage(
            frontmatter?.coverImage?.childImageSharp?.gatsbyImageData || null,
          );

          return (
            <Link key={id} className={styles.postContainer} to={`/blog/${frontmatter?.slug}`}>
              <div className={styles.postCover}>
                {coverImage && (
                  <GatsbyImage alt={frontmatter?.title || 'Cover Image'} image={coverImage} />
                )}
              </div>
              <h2 className={styles.postTitle}>{frontmatter?.title}</h2>
              <p className={styles.postDescription}>{frontmatter?.date}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LatestPostsGrid;

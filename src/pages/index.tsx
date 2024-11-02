import { clsx } from 'clsx';
import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import PostsGrid from '@/components/common/PostsGrid';
import ProfileGrid from '@/components/index/ProfileGrid';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { theme } from '@/styles/theme.css';

import * as styles from '../styles/pages.css';

export const query = graphql`
  query LatestBlogPosts {
    allMdx(
      limit: 4
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } } }
    ) {
      nodes {
        id
        frontmatter {
          date
          slug
          title
          coverImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

type IndexPageProps = PageProps<Queries.LatestBlogPostsQuery>;

const IndexPage = ({ data }: IndexPageProps) => {
  const { allMdx } = data;
  const { nodes: posts } = allMdx;

  return (
    <Layout>
      <ProfileGrid />

      <section className={styles.root}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>Update</h3>
          <Link to={'/blog/'} className={styles.expandLink}>
            Expand<span className={clsx(styles.expandIcon, 'material-symbols-rounded')}>add</span>
          </Link>
        </div>
        <PostsGrid style={{ ...theme.typographies.profile_sub }} posts={posts} />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title>{title}</title>;
};

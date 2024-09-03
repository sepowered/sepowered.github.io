import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import LatestPostsGrid from '@/components/index/LatestPostsGrid';
import ProfileGrid from '@/components/index/ProfileGrid';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';

export const query = graphql`
  query LatestBlogPosts {
    allMdx(
      limit: 2
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/^(.*/contents/posts/)(.*)$/" } } }
    ) {
      nodes {
        id
        frontmatter {
          date(formatString: "YYYY-MM-DD HH:mm")
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
      <LatestPostsGrid posts={posts} />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  const { title } = useSiteMetadata();
  return <title>{title}</title>;
};

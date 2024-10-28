import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import Footer from '@/components/blog/Footer';
import Header from '@/components/blog/Header';
import Recommend from '@/components/blog/Recommend';
import BackButton from '@/components/common/BackButton';
import Divider from '@/components/common/Divider';
import Layout from '@/components/common/Layout';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';
import { rem } from '@/utils/pxto';

export const query = graphql`
  query RecommendPosts($timestamp: Int!) {
    previous: allMdx(
      filter: {
        fields: { timestamp: { lt: $timestamp } }
        internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } }
      }
      sort: { fields: { timestamp: DESC } }
      limit: 4
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
    next: allMdx(
      filter: {
        fields: { timestamp: { gt: $timestamp } }
        internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } }
      }
      sort: { fields: { timestamp: ASC } }
      limit: 4
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

type BlogPageContext = {
  id: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  coverImage: IGatsbyImageData | undefined;
};

type BlogTemplateProps = PageProps<Queries.RecommendPostsQuery, BlogPageContext>;

const BlogTemplate = ({ data, pageContext, children }: BlogTemplateProps) => {
  const { title, date, category, coverImage } = pageContext;
  const { previous, next } = data;

  let recommendedPosts = [...previous.nodes.slice(0, 2), ...next.nodes.slice(0, 2)];
  if (recommendedPosts.length < 4) {
    if (previous.nodes.length < 2)
      recommendedPosts = [...previous.nodes, ...next.nodes.slice(0, 4 - previous.nodes.length)];
    else if (next.nodes.length < 2)
      recommendedPosts = [...previous.nodes.slice(0, 4 - next.nodes.length), ...next.nodes];
  }

  return (
    <Layout>
      <BackButton />

      <article>
        <Header coverImage={coverImage} title={title} date={date} category={category} />
        <div data-content={true}>{children}</div>
        <Divider style={{ height: rem(1), marginBlock: rem(55) }} />
        <Footer />
      </article>

      <Divider style={{ height: rem(1), marginBlock: rem(55) }} />
      <Recommend posts={recommendedPosts} />
    </Layout>
  );
};

export default BlogTemplate;

export const Head = ({ pageContext }: BlogTemplateProps) => {
  const { title } = pageContext;
  const { title: siteName } = useSiteMetadata();
  return <title>{`${title} – ${siteName}`}</title>;
};

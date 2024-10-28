import { graphql, HeadFC, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';
import { useSiteMetadata } from '@/hooks/useSiteMetadata';

export const query = graphql`
  query AboutTemplate {
    mdx(internal: { contentFilePath: { regex: "/content/pages/about.mdx$/" } }) {
      frontmatter {
        date(formatString: "YYYY-MM-DD HH:mm")
      }
    }
  }
`;

type AboutTemplateProps = PageProps<Queries.AboutTemplateQuery>;

const AboutTemplate = ({ data, children }: AboutTemplateProps) => {
  const { mdx } = data;
  if (!mdx) return null;

  const { frontmatter } = mdx;

  return (
    <Layout>
      <article>{children}</article>
      <footer>
        <p>Last update: {frontmatter?.date}</p>
      </footer>
    </Layout>
  );
};

export default AboutTemplate;

export const Head = () => {
  const { title } = useSiteMetadata();
  return <title>{`About – ${title}`}</title>;
};

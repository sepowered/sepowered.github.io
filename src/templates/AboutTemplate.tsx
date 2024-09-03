import { graphql, PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/common/Layout';

export const query = graphql`
  query AboutTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
      }
    }
  }
`;

type AboutTemplateProps = PageProps<Queries.AboutTemplateQuery>;

const AboutTemplate = ({ data, children }: AboutTemplateProps) => {
  const { mdx } = data;

  return <Layout>{children}</Layout>;
};

export default AboutTemplate;

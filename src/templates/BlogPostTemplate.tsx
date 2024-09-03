import { graphql, PageProps } from 'gatsby';
import React from 'react';

export const query = graphql`
  query BlogPostTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
        date
      }
    }
  }
`;

type BlogPostTemplateProps = PageProps<Queries.BlogPostTemplateQuery>;

const BlogPostTemplate = ({ data }: BlogPostTemplateProps) => {
  const { mdx } = data;
  return <div>{JSON.stringify(mdx)}</div>;
};

export default BlogPostTemplate;

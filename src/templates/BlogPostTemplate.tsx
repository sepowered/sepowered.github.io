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

type BlogPostPageProps = PageProps<Queries.BlogPostTemplateQuery>;

const BlogPostTemplate = ({ data }: BlogPostPageProps) => {
  const { mdx } = data;
  return <div>{JSON.stringify(mdx)}</div>;
};

export default BlogPostTemplate;

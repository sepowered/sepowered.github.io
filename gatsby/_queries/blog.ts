import { IGatsbyImageData } from 'gatsby-plugin-image';

export type BlogPageQueryType = {
  allMdx: {
    nodes: {
      id: string;
      frontmatter: {
        title: string;
        subtitle: string;
        slug: string;
        date: string;
        category?: string;
        tag?: string[];
        coverImage: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          } | null;
        } | null;
      };
      internal: {
        contentFilePath: string;
      };
      fields: {
        timestamp: number;
      };
    }[];
  };
};

export const BlogPageQuery = `
    query GetAllMdxPosts {
      allMdx(filter: { internal: { contentFilePath: { regex: "/^(.*/content/posts/)(.*)$/" } } }) {
        nodes {
          id
          frontmatter {
            title
            subtitle
            slug
            date
            category
            tag
            coverImage {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          internal {
            contentFilePath
          }
          fields {
            timestamp
          }
        }
      }
    }
  `;

import type { GatsbyConfig } from 'gatsby';
import remarkGfm from 'remark-gfm';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'semantic',
    author: 'Knesssn',
    description: 'Make your ✨gorgeous blog with semantic',
    siteUrl: `https://semantic.nylonbricks.com`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-vanilla-extract`,
      options: {
        identifiers: `short`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 757,
            },
          },
          'gatsby-remark-code-buttons',
          {
            resolve: 'gatsby-remark-code-titles',
            options: {},
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts/`,
      },
    },
  ],
};

export default config;

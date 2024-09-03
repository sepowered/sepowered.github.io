import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'semantic',
    author: 'Knesssn',
    description: 'Make your ✨gorgeous blog with semantic',
    siteUrl: `https://semantic.nylonbricks.com`,
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-vanilla-extract`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/contents/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/contents/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 757,
            },
          },
        ],
      },
    },
  ],
};

export default config;

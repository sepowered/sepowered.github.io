import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `semantic`,
    siteUrl: `https://semantic.nylonbricks.com`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-vanilla-extract',
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
  ],
};

export default config;

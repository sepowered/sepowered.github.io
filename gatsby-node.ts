import path from 'path';
import { GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  getConfig,
  actions,
}) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@/constants': path.resolve(__dirname, 'src/constants'),
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/hooks': path.resolve(__dirname, 'src/hooks'),
        '@/styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
  store,
}) => {
  const { createPage } = actions;

  type MdxQueryResult = {
    allMdx: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            slug: string;
          };
        };
      }[];
    };
  };

  const result = await graphql<MdxQueryResult>(`
    query GetAllMdxPosts {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  MDX 쿼리에 오류가 발생했습니다.', result.errors);
    return;
  }

  const posts = result.data?.allMdx.edges;

  posts?.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/BlogPostTemplate.tsx`),
      context: { id: node.id },
    });
  });
};

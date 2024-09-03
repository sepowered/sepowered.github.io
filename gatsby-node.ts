import path from 'path';
import { GatsbyNode } from 'gatsby';

const templates = {
  about: path.resolve(`./src/templates/AboutTemplate.tsx`),
  post: path.resolve(`./src/templates/BlogPostTemplate.tsx`),
  category: path.resolve(`./src/templates/CategoryTemplate.tsx`),
  tag: path.resolve(`./src/templates/TagTemplate.tsx`),
  allCategories: path.resolve(`./src/templates/AllCategoriesTemplate.tsx`),
  allTags: path.resolve(`./src/templates/AllTagsTemplate.tsx`),
};

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MdxFrontmatter {
      category: String
      tag: [String]
    }
  `);
};

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
        '@/queries': path.resolve(__dirname, 'src/queries'),
      },
    },
  });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  type Data = {
    allMdx: {
      nodes: {
        id: string;
        frontmatter: {
          slug: string;
          category?: string;
          tag?: string[];
        };
        internal: {
          contentFilePath: string;
        };
      }[];
    };
  };

  const queryResult = await graphql<Data>(`
    query GetAllMdxPosts {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            category
            tag
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (queryResult.errors) {
    reporter.panicOnBuild('🚨 There was an error with the MDX query.', queryResult.errors);
    return;
  }

  const posts = queryResult.data?.allMdx.nodes || [];
  const categories = new Set<string>();
  const tags = new Set<string>();

  posts.forEach(({ id, frontmatter, internal }) => {
    const { slug, category, tag } = frontmatter;

    if (internal.contentFilePath.includes('about')) {
      createPage({
        path: `/about`,
        component: `${templates.about}?__contentFilePath=${internal.contentFilePath}`,
        context: { id },
      });
    } else {
      createPage({
        path: `/blog/${slug}`,
        component: `${templates.post}?__contentFilePath=${internal.contentFilePath}`,
        context: { id, category, tags: tag || [] },
      });

      if (category) categories.add(category);
      tag?.forEach(t => tags.add(t));
    }
  });

  categories.forEach(category =>
    createPage({
      path: `/category/${category}`,
      component: templates.category,
      context: { category },
    }),
  );

  tags.forEach(tag =>
    createPage({
      path: `/tag/${tag}`,
      component: templates.tag,
      context: { tag },
    }),
  );

  createPage({
    path: `/category`,
    component: templates.allCategories,
    context: { categories: Array.from(categories) },
  });

  createPage({
    path: `/tag`,
    component: templates.allTags,
    context: { tags: Array.from(tags) },
  });
};

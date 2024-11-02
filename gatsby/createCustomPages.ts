import path from 'path';
import { GatsbyNode } from 'gatsby';

import { AboutPageQuery, AboutPageQueryType } from './_queries/about';
import { BlogPageQuery, BlogPageQueryType } from './_queries/blog';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';

const templates = {
  about: path.resolve(`./src/templates/about-template.tsx`),
  blog: path.resolve(`./src/templates/blog-template.tsx`),
  category: path.resolve(`./src/templates/category-template.tsx`),
  categories: path.resolve(`./src/templates/categories-template.tsx`),
  tag: path.resolve(`./src/templates/tag-template.tsx`),
  tags: path.resolve(`./src/templates/tags-template.tsx`),
};

export const createCustomPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  // Blog pages
  const pageQuery = await graphql<BlogPageQueryType>(BlogPageQuery);

  if (pageQuery.errors) {
    reporter.panicOnBuild('🚨 MDX query error at BlogPageQuery', pageQuery.errors);
    return;
  }

  const blogs = pageQuery.data?.allMdx.nodes || [];
  const categories = new Set<string>();
  const tags = new Set<string>();

  blogs.forEach(({ frontmatter, fields, internal }) => {
    const { slug, category, tag, coverImage } = frontmatter;

    const cover: IGatsbyImageData | undefined = getImage(
      coverImage?.childImageSharp?.gatsbyImageData || null,
    );

    createPage({
      path: `/blog/${slug}`,
      component: `${templates.blog}?__contentFilePath=${internal.contentFilePath}`,
      context: { ...frontmatter, tags: tag ?? [], coverImage: cover, timestamp: fields.timestamp },
    });

    if (category) categories.add(category);
    tag?.forEach(t => tags.add(t));
  });

  const createMetadataPages = (items: Set<string>, pathPrefix: string, template: string) => {
    items.forEach(item => {
      createPage({
        path: `/${pathPrefix}/${item}`.toLowerCase(),
        component: template,
        context: { [pathPrefix]: item },
      });
    });
  };

  createMetadataPages(categories, 'category', templates.category);
  createMetadataPages(tags, 'tag', templates.tag);

  createPage({
    path: `/category`,
    component: templates.categories,
    context: { categories: Array.from(categories) },
  });

  createPage({
    path: `/tag`,
    component: templates.tags,
    context: { tags: Array.from(tags) },
  });

  // About page
  const aboutQuery = await graphql<AboutPageQueryType>(AboutPageQuery);

  if (aboutQuery.errors) {
    reporter.panicOnBuild('🚨 MDX query error at AboutPageQuery', aboutQuery.errors);
    return;
  }

  if (aboutQuery.data?.mdx) {
    const { id, internal } = aboutQuery.data.mdx;

    createPage({
      path: `/about`,
      component: `${templates.about}?__contentFilePath=${internal.contentFilePath}`,
      context: { id },
    });
  }
};

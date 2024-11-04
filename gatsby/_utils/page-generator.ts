import { Actions } from 'gatsby';

const perPage = 8;

export const generatePaginatedPage = (
  totalItems: number,
  basePath: string,
  component: string,
  title: string,
  createPage: Actions['createPage'],
) => {
  const totalPages = Math.ceil(totalItems / perPage);
  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/${basePath}` : `/${basePath}/p/${i + 1}`,
      component,
      context: {
        title,
        type: basePath,
        limit: perPage,
        skip: i * perPage,
        maxPages: totalPages,
        currentPage: i + 1,
      },
    });
  });
};

export const generateMetadataPages = (
  items: Set<string>,
  pathPrefix: string,
  template: string,
  createPage: Actions['createPage'],
) => {
  items.forEach(item => {
    createPage({
      path: `/${pathPrefix}/${item}`.toLowerCase(),
      component: template,
      context: { [pathPrefix]: item },
    });
  });
};

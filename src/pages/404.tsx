import { HeadFC, PageProps } from 'gatsby';
import React from 'react';

const NotFoundPage: React.FC<PageProps> = () => {
  return <>404</>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

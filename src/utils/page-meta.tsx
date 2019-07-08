import { PageMeta } from '../components/seo/types';
import { Edge } from './nodes';

export const pageMetaFromFrontmatter = (page: Edge | null): PageMeta => {
  if (!page) {
    return { title: '', description: '' };
  }

  const title = page.metaTitle || page.title || '';
  const description = page.metaDescription || page.excerpt || '';

  return {
    title,
    description,
  };
};

import React from 'react';
import Helmet from 'react-helmet';

import { SchemaDataType } from './types';

const getAuthor = (html: string): string => {
  const parser = new DOMParser();
  const htmldoc = parser.parseFromString(html, 'text/html');
  const authorString = htmldoc.querySelector('h5');
  if (authorString) {
    const authorStringComponents = authorString.innerText.split('BY ');

    if (authorStringComponents) {
      return authorStringComponents[authorStringComponents.length - 1];
    }
  }
  return '';
};

export const getSchemaData = (post: any): SchemaDataType => {
  const date = new Date(post.date);
  const formatted_date = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  const author = getAuthor(post.html);

  return {
    title: post.title,
    date: formatted_date,
    author,
    imageURL: 'https://blog.komododigital.co.uk' + post.featured_media.source_url,
    body: post.html,
    url: window.location.href,
  };
};

interface Props {
  schemaData: SchemaDataType;
}

const SchemaData: React.SFC<Props> = ({ schemaData }) => {
  if (!schemaData) {
    return null;
  }

  const authorString = schemaData.author
    ? `
      "author" : {
        "@type" : "Person",
        "name" : "${schemaData.author}"
      },`
    : '';

  const schemaDataString = `
    {
      "@context" : "http://schema.org",
      "@type" : "Article",
      "name" : "${schemaData.title}",${authorString}
      "datePublished" : "${schemaData.title}",
      "image" : "${schemaData.image}",
      "articleBody" : "${schemaData.body}"
      "url" : "${schemaData.url}",
      "publisher" : {
        "@type" : "Organization",
        "name" : "Komodo Digital"
      }
    }
  `;
  return (
    <Helmet>
      <script type="application/ld+json">{schemaDataString}</script>
    </Helmet>
  );
};

export default SchemaData;

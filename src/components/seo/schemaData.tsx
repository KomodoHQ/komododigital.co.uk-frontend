import React from 'react';
import Helmet from 'react-helmet';

import { SchemaDataType } from './types';

const getAuthor = (html: string): string => {
  // This will only return false in nodeJS as all modern browsers have a DOMParser
  if (typeof DOMParser === 'undefined') {
    return '';
  }

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

const cleanBody = (body: string): string => body.replace(/"/g, "'");

export const getSchemaData = (post: any): SchemaDataType => {
  const date = new Date(post.date);
  const formatted_date = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
  const author = getAuthor(post.html);
  const imageURL = post.featured_media
    ? 'https://blog.komododigital.co.uk' + post.featured_media.source_url
    : null;

  // This will only return false in nodeJS as all modern browsers have a window
  const url =
    typeof window === 'undefined' ? 'https://www.komododigital.co.uk' : window.location.href;

  return {
    title: post.title,
    headline: post.title,
    date: formatted_date,
    author,
    imageURL,
    body: cleanBody(post.html),
    url,
  };
};

interface Props {
  schemaData: SchemaDataType;
}

const SchemaData: React.SFC<Props> = ({ schemaData }) => {
  if (!schemaData) {
    return null;
  }

  // This will only return false in nodeJS as all modern browsers have a window
  const url =
    typeof window === 'undefined' ? 'https://www.komododigital.co.uk' : window.location.href;

  // If no image just use the Komodo Logo
  const image = schemaData.imageURL
    ? schemaData.imageURL
    : `https://www.komododigital.co.uk${schemaData.logo}`;

  const authorString = schemaData.author
    ? `
      "author" : {
        "@type" : "Person",
        "name" : "${schemaData.author}"
      },`
    : `
      "author" : {
        "@type" : "Organization",
        "name" : "Komodo Digital",
        "logo" : {
          "@type" : "ImageObject",
          "url" : "https://www.komododigital.co.uk${schemaData.logo}"
        }
      },`;

  const schemaDataString = `
    {
      "@context" : "http://schema.org",
      "@type" : "Article",
      "mainEntityOfPage": {
         "@type": "WebPage",
         "@id": "${url}"
      },
      "name" : "${schemaData.title}",${authorString}
      "headline" : "${schemaData.title}",
      "datePublished" : "${schemaData.date}",
      "dateModified" : "${schemaData.date}",
      "image" : "${image}",
      "articleBody" : "${schemaData.body}",
      "url" : "${schemaData.url}",
      "publisher" : {
        "@type" : "Organization",
        "name" : "Komodo Digital",
        "logo" : {
          "@type" : "ImageObject",
          "url" : "https://www.komododigital.co.uk${schemaData.logo}"
        }
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

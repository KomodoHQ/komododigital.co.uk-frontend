import React, { ReactNode } from 'react';
import Meta from './meta';
import Twitter from './twitter';
import Facebook from './facebook';
import SchemaData from './schemaData';
import { PageMeta, SchemaDataType } from './seo/types';

interface Props {
  title?: string;
  defaultTitle: string;
  description: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
  url: string;
  children?: ReactNode;
  siteName: string;
  noindex?: boolean;
  schemaData?: SchemaDataType;
}

const SEO: React.SFC<Props> = ({
  title,
  defaultTitle,
  description,
  image,
  url,
  children,
  siteName,
  noindex = false,
  schemaData,
}) => {
  return (
    <>
      <Meta
        title={title}
        defaultTitle={defaultTitle}
        description={description}
        noindex={noindex}
        key="seo.meta"
      >
        {children}
      </Meta>
      <Twitter
        title={title}
        description={description}
        image={image ? image.src : undefined}
        key="seo.twitter"
      />
      <Facebook
        title={title}
        description={description}
        image={image}
        siteName={siteName}
        url={url}
        key="seo.facebook"
      />
      <SchemaData schemaData={schemaData} />
    </>
  );
};

export { Meta, Twitter, Facebook };
export default SEO;

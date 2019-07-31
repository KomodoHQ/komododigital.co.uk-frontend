import React, { ReactNode } from 'react';
import Meta from './meta';
import Twitter from './twitter';
import Facebook from './facebook';

interface Props {
  title?: string;
  defaultTitle: string;
  description: string;
  separator?: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
  url: string;
  children?: ReactNode;
  siteName: string;
  noindex?: boolean;
}

const SEO: React.SFC<Props> = ({
  title,
  defaultTitle,
  description,
  separator,
  image,
  url,
  children,
  siteName,
  noindex = false
}) => {
  return (
    <>
      <Meta
        title={title}
        defaultTitle={defaultTitle}
        description={description}
        separator={separator}
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
    </>
  );
};

export { Meta, Twitter, Facebook };
export default SEO;

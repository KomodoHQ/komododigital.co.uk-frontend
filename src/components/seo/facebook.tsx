import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title?: string;
  description: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
  url: string;
  siteName: string;
}

const Facebook: React.SFC<Props> = ({
  title = 'Web Design | Mobile App Development | Newcastle',
  description,
  image = null,
  url,
  siteName,
}) => {
  return (
    <Helmet>
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image.src} />}
      {image && <meta property="og:image:width" content={image.width.toString()} />}
      {image && <meta property="og:image:height" content={image.height.toString()} />}
    </Helmet>
  );
};

export default Facebook;

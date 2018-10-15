import React from 'react';
import Helmet from 'react-helmet';

interface Props {
  title?: string;
  description: string;
  image?: string;
}

const Twitter: React.SFC<Props> = ({
  title = 'Web Design | Mobile App Development | Newcastle',
  description,
  image,
}) => {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@komododigital" />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:creator" content="@komododigital" />
    </Helmet>
  );
};

export default Twitter;

import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

interface Props {
  title?: string;
  defaultTitle: string;
  description: string;
  separator?: string;
  noindex?: boolean;
  canonical?: string;
  children?: ReactNode;
}

const Meta: React.SFC<Props> = ({
  defaultTitle,
  title,
  description,
  separator = ' - ',
  noindex = false,
  canonical = '/',
  children,
}) => {
  return (
    <Helmet
      titleTemplate={`%s${separator}Web Design | App Development | Newcastle`}
      defaultTitle={defaultTitle}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, follow" />}
      {children}
    </Helmet>
  );
};

export default Meta;

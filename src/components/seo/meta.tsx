import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

interface Props {
  title?: string;
  defaultTitle: string;
  description: string;
  noindex?: boolean;
  children?: ReactNode;
}

const Meta: React.SFC<Props> = ({
  defaultTitle,
  title,
  description,
  noindex = false,
  children,
}) => {
  return (
    <Helmet
      titleTemplate={'%s'}
      defaultTitle={defaultTitle}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      {children}
    </Helmet>
  );
};

export default Meta;

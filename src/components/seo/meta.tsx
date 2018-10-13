import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';

interface Props {
  title?: string;
  defaultTitle: string;
  description: string;
  separator?: string;
  children?: ReactNode;
}

const Meta: React.SFC<Props> = ({
  defaultTitle,
  title,
  description,
  separator = ' - ',
  children,
}) => {
  return (
    <Helmet
      titleTemplate={`%s${separator}Web Design | App Development | Newcastle`}
      defaultTitle={defaultTitle}
    >
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
      {children}
    </Helmet>
  );
};

export default Meta;

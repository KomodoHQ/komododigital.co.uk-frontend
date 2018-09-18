import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';
interface Props {
  children: ReactNode;
  data: any;
}

const Layout: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
      <Helmet defaultTitle={data.site.siteMetadata.title}>
        <html lang="en" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={data.site.siteMetadata.name} />
        <meta name="description" content={data.site.siteMetadata.description} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto: 300,400,500"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Helmet>

      {children}
    </div>
  );
};

export default Layout;

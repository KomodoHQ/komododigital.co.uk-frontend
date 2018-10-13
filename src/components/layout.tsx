import React, { ReactNode } from 'react';
// import { Helmet } from 'react-helmet';
import SEO from './seo';
import NavigationBar from './navigationbar';
import Footer from './footer';
import LegalFooter from './legalfooter';
interface Props {
  children?: ReactNode;
  data?: any;
}

const Layout: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
      <SEO
        defaultTitle={data.site.siteMetadata.title}
        siteName={data.site.siteMetadata.name}
        description={data.site.siteMetadata.description}
        // TODO: fix
        url="http://test"
        // TODO: Individual page title
      >
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto: 300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </SEO>

      <NavigationBar />
      {children}
      <Footer />
      <LegalFooter />
    </div>
  );
};

export default Layout;

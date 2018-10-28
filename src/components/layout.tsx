import React, { ReactNode } from 'react';
import SEO from './seo';
import NavigationBar from './navigationbar';
import Footer from './footer';
import LegalFooter from './legalfooter';
import '../assets/css/cookies.css';
import './layout.css';

interface Props {
  children?: ReactNode;
  data?: any;
}

const Layout: React.SFC<Props> = ({ data, children }) => {
  return (
    <>
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

        <meta
          name="google-site-verification"
          content="NjvhRGkpFOUEaqakyfa4pkVtErwqLzH3oPITur3WIYA"
        />
      </SEO>
      <NavigationBar />
      <noscript>
        You have Javascript disabled. While it isn't needed, it will make your experience nicer.
      </noscript>
      <div style={{ paddingTop: '80px' }}>
        {children}
        <Footer />
        <LegalFooter />
      </div>
      <noscript>
        <img
          height="1"
          width="1"
          alt=""
          src="https://dc.ads.linkedin.com/collect/?pid=377068&amp;fmt=gif"
        />
      </noscript>
    </>
  );
};

export default Layout;

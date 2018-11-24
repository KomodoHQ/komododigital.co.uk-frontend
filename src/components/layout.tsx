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
  background?: string;
  inverted?: boolean;
}

const Layout: React.SFC<Props> = ({ data, children, background='', inverted=false }) => {
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
        <meta
          name="google-site-verification"
          content="NjvhRGkpFOUEaqakyfa4pkVtErwqLzH3oPITur3WIYA"
        />
      </SEO>
      <noscript>
        You have Javascript disabled. While it isn't needed, it will make your experience nicer.
      </noscript>
      <NavigationBar background={background} inverted={inverted} />
      <div className="main">
        {children}
      </div>
      <Footer />
      <LegalFooter />
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

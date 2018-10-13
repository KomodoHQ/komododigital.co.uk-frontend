import React, { ReactNode } from 'react';
// import { Helmet } from 'react-helmet';
import SEO from './seo';
import NavigationBar from './navigationbar';
import Footer from './footer';
import LegalFooter from './legalfooter';

import AppleTouchIcon from '../assets/images/apple-touch-icon.png';
import AppleTouchIcon57 from '../assets/images/apple-touch-icon-57x57.png';
import AppleTouchIcon72 from '../assets/images/apple-touch-icon-72x72.png';
import AppleTouchIcon76 from '../assets/images/apple-touch-icon-76x76.png';
import AppleTouchIcon114 from '../assets/images/apple-touch-icon-114x114.png';
import AppleTouchIcon120 from '../assets/images/apple-touch-icon-120x120.png';
import AppleTouchIcon144 from '../assets/images/apple-touch-icon-144x144.png';
import AppleTouchIcon152 from '../assets/images/apple-touch-icon-152x152.png';
import AppleTouchIcon180 from '../assets/images/apple-touch-icon-180x180.png';

// import './cookies/index.css';

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
        <link rel="apple-touch-icon" href={AppleTouchIcon} />
        <link rel="apple-touch-icon" sizes="57x57" href={AppleTouchIcon57} />
        <link rel="apple-touch-icon" sizes="72x72" href={AppleTouchIcon72} />
        <link rel="apple-touch-icon" sizes="76x76" href={AppleTouchIcon76} />
        <link rel="apple-touch-icon" sizes="114x114" href={AppleTouchIcon114} />
        <link rel="apple-touch-icon" sizes="120x120" href={AppleTouchIcon120} />
        <link rel="apple-touch-icon" sizes="144x144" href={AppleTouchIcon144} />
        <link rel="apple-touch-icon" sizes="152x152" href={AppleTouchIcon152} />
        <link rel="apple-touch-icon" sizes="180x180" href={AppleTouchIcon180} />

        {/* <meta
          name="google-site-verification"
          content="NjvhRGkpFOUEaqakyfa4pkVtErwqLzH3oPITur3WIYA"
        /> */}

        {/* <script
          type="text/javascript"
          src="//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js"
          async
        /> */}
      </SEO>

      {/* <noscript>
        You have Javascript disabled. While it isn't needed, it will make your experience nicer.
      </noscript> */}

      <NavigationBar />
      {children}
      <Footer />
      <LegalFooter />

      {/* <script type="text/javascript">_linkedin_data_partner_id = "377068";</script>

      <noscript>
        <img
          height="1"
          width="1"
          alt=""
          src="https://dc.ads.linkedin.com/collect/?pid=377068&amp;fmt=gif"
        />
      </noscript> */}
    </div>
  );
};

export default Layout;

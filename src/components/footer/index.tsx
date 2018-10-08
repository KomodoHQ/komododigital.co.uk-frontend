import React, { ReactNode } from 'react';
import './footer.css';

interface Props {
  data?: any;
}

const Footer: React.SFC<Props> = ({ data }) => {
  return (
    <footer>
        <div className="komodo">Komodo</div>
        <div className="address">Address</div>
        <div className="sitemap">Sitemap</div>
    </footer>
  );
};

export default Footer;

/**
 * main navigation footer component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import './footer.css';

/**
 * Local dependencies
 */

/**
 * Props for the footer component
 * 
 * data
 */
interface Props {
  data?: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a footer doesn't need to maintain any state of its own.
 * 
 * @param data
 */
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

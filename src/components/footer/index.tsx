/**
 * main navigation footer component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

/**
 * Local dependencies
 */
import './footer.css';

/**
 * Props for the footer component
 * 
 * data
 */
interface Props {

}

/**
 * 
 * Using SFC (Stateless Functional Component) because a footer doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const Footer: React.SFC<Props> = ({  }) => {
  return (
    <footer>
        <div className="komodo">Komodo</div>
        <div className="address">
        <span>Address</span>
        <address>
          Komodo Digital,<br />
          63 Westgate Rd,<br />
          Newcastle upon Tyne,<br />
          NE1 1SG
        </address>
        <address>
          Komodo | The Core<br />
          Science Central, Bath Ln,<br />
          Newcastle upon Tyne<br />
          NE4 5TF
        </address>
        </div>
        <div className="sitemap">
          <span>Sitemap</span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Case Studies</Link></li>
            <li><Link to="/">Insights</Link></li>
            <li><Link to="/">Careers</Link></li>
          </ul>
          <ul>
            <li><Link to="/">Contact</Link></li>
            <li><a href="https://twitter.com/komodohq">Twitter</a></li>
            <li><a href="https://facebook.com/komodohq">Facebook</a></li>
            <li><a href="https://linkedin.com/komodohq">LinkedIn</a></li>
          </ul>
        </div>
    </footer>
  );
};

export default Footer;

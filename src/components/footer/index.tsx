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
interface Props {}

/**
 *
 * Using SFC (Stateless Functional Component) because a
 * footer doesn't need to maintain any state of its own.
 *
 * @param data
 */
const Footer: React.SFC<Props> = ({}) => {
  return (
    <footer className="komodoGridWrapper main-footer">
      <div className="komodo">
        <img
          src={require('../../content/images/Komodo@3x.png')}
          alt="Komodo - People Friendly Software"
          className="logo"
        />
      </div>
      <div className="address">
        <span>Address</span>
        <address>
          Komodo Digital,
          63 Westgate Rd,
          <br />
          Newcastle upon Tyne,
          NE1 1SG,
          <br />
          <a href="mailto:hello@komododigital.co.uk">hello@komododigital.co.uk</a><br />
          <a href="tel:+441912286555">0191 228 6555</a>
        </address>
      </div>
      <div className="sitemap">
        <span>Sitemap</span>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/client-stories">Client Stories</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/insights">Insights</Link>
          </li>
          <li>
            <a href="https://hire.withgoogle.com/public/jobs/komododigitalcouk">Careers</a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

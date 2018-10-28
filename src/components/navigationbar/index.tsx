/**
 * headline navigation bar that sits at the top of the page
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

/**
 * Local dependencies
 */
import './NavigationBar.css';

/**
 * Props for the navigation bar component
 * 
 * data
 */
interface Props {
  data?: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a navigation bar doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const NavigationBar: React.SFC<Props> = ({ data }) => {
  return (
    <div className="navigationBar">
      <h1><Link to="/">Komodo</Link></h1>
      <div className="hamburger">
        <Link to="/">Menu</Link>
      </div>
      <ul>
        <li>
          <Link to={'about'}>About</Link>
        </li>
        <li>
          <Link to={'case-studies'}>Case Studies</Link>
        </li>
        <li>
          <Link to={'blog-list'}>Insights</Link>
        </li>
        <li>
          <Link to={'contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;

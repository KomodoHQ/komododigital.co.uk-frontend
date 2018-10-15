/**
 * legal footer that holds information at the very bottom of the page
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

/**
 * Local dependencies
 */
import './legalfooter.css';

/**
 * Props for the legal footer component
 * 
 * data
 */
interface Props {
  data?: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a legal footer doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const LegalFooter: React.SFC<Props> = ({ data }) => {
  return (
    <footer>
      <div>
        Komodo Digital Copyright &copy; 2018<br/>
        <Link to="/">Privacy Policy</Link>|<Link to="/">Terms and Conditions</Link>
      </div>
      <div>
        Get in touch on:<br/>
        <Link to="tel:0191 228 6555">0191 228 6555</Link>
      </div>
    </footer>
  );
};

export default LegalFooter;

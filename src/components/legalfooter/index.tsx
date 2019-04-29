/**
 * legal footer that holds information at the very bottom of the page
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

import twitter from '../../content/images/icons/twitter.svg'
import linkedin from '../../content/images/icons/linkedin.svg'
import facebook from '../../content/images/icons/facebook.svg'
import youtube from '../../content/images/icons/youtube.svg'

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
    <footer className="komodoGridWrapper legal-footer">
      <div className="company">
        <span>Komodo Digital Copyright &copy; 2019</span>
        <br />
        <a href="https://www.iubenda.com/privacy-policy/86373707/full-legal" target="_blank">Privacy Policy</a> | <Link to="/terms.pdf">Terms and Conditions</Link>
      </div>
      <div className="contact">
        <ul>
          <li>
            <a href="https://www.twitter.com/komododigital">
              <img src={twitter} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/648969">
              <img src={linkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/komodohq">
              <img src={facebook} />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCFHSSacCuzJR0T67HiowWCw">
              <img src={youtube} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default LegalFooter;

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
import glassdoor from '../../content/images/icons/glassdoor.svg'

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
  const Contact = props => {
    return (
      <li>
        <a href={props.href}>
          <img src={props.src} alt={props.alt} />
        </a>
      </li>
    )
  }
  return (
    <footer className="komodoGridWrapper legal-footer">
      <div className="company">
        <span>Komodo Digital Copyright &copy; 2019</span>
        <br />
        <a href="https://www.iubenda.com/privacy-policy/86373707/full-legal" target="_blank">Privacy Policy</a> | <a href="/terms.pdf">Terms and Conditions</a>
      </div>
      <div className="contact">
        <ul>
          <Contact href="https://www.twitter.com/komododigital" src={twitter} alt='Twitter' />
          <Contact href="https://www.linkedin.com/company/648969" src={linkedin} alt='LinkedIn' />
          <Contact href="https://www.facebook.com/komodohq" src={facebook} alt='Facebook' />
          <Contact href="https://www.youtube.com/channel/UCFHSSacCuzJR0T67HiowWCw" src={youtube} alt='YouTube' />
          <Contact href="https://www.glassdoor.com/Overview/Working-at-Komodo-Digital-EI_IE1359461.11,25.htm" src={glassdoor} alt='Glassdoor' />
        </ul>
      </div>
    </footer>
  );
};

export default LegalFooter;

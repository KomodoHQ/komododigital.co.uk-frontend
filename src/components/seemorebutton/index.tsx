/**
 * a button for loading content / navigation
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

/**
 * Local dependencies
 */
import './seemorebutton.css';

/**
 * Props for the see more button component
 * 
 * data
 */
interface Props {
  title: string;
  link?: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a see more button doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const SeeMoreButton: React.SFC<Props> = ({ title, link="/About" }) => {
  return (
    <div className="seemorebutton-wrapper">
        <Link to={link}><button>{title}</button></Link>
    </div>
  );
};

export default SeeMoreButton;

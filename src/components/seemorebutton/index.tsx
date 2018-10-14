/**
 * a button for loading content / navigation
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */

/**
 * Props for the see more button component
 * 
 * data
 */
interface Props {
  title: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a see more button doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const SeeMoreButton: React.SFC<Props> = ({ title }) => {
  return (
    <div>
        {title}
    </div>
  );
};

export default SeeMoreButton;

/**
 * three column services with optional row titles and images
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */

/**
 * Props for the services component
 * 
 * data
 */
interface Props {
  data?: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a services doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const Services: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
        Services
        {children}
    </div>
  );
};

export default Services;

/**
 * Quoter component
 */

/**
 * NPM Dependencies
 */
import React from 'react';

/**
 * Local dependencies
 */
import './quoter.css';

/**
 * Props for the quoter component
 *
 * data
 */
interface Props {
  quotes: any;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a quoter component doesn't need to maintain any state of its own.
 *
 * @param data
 */
const Quoter: React.SFC<Props> = ({ quotes }) => {

    return (
      <div>
        Quoter
      </div>
    );
  };
  
  export default Quoter;

/**
 * quad grid component that holds four cards
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */
import "./quadgrid.css";

/**
 * Props for the quad grid component
 * 
 * data
 */
interface Props {
  children?: ReactNode;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a quad grid doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const QuadGrid: React.SFC<Props> = ({ children }) => {
  return (
    <div className="QuadGrid">
        {children}
    </div>
  );
};

export default QuadGrid;

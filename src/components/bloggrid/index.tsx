/**
 * bloggrid component that holds client portfolio logos
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */
import "./bloggrid.css";

/**
 * Props for the bloggrid component
 * 
 * data
 */
interface Props {
  children?: ReactNode;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a bloggrid doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const BlogGrid: React.SFC<Props> = ({ children }) => {
  return (
    <div className="BlogGrid">
        {children}
    </div>
  );
};

export default BlogGrid;

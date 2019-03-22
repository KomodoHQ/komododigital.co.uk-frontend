/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import Img from 'gatsby-image';
import './triplesection.css';

/**
 * Local dependencies
 */

/**
 * Props for the content section component
 *
 * data
 */
interface Props {
  className?: string;
  children?: ReactNode;
  background?: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a content section doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const TripleSection: React.SFC<Props> = ({ className, children, background = 'none' }) => {

  const style = { background: background };

  return <div className={`komodoGridWrapper tripleSection cs-wrapper ${className}`} style={style}>
      {children}
    </div>;
};

export default TripleSection;

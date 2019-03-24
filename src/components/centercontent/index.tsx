/**
 * testimonial component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */
import './centercontent.css';

/**
 * Props for the testimonial component
 *
 * data
 */
interface Props {
  children?: any;
  background?: string;
  className?: string;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a
 * testimonial doesn't need to maintain any state of its own.
 *
 * @param data
 */
const CenterContent: React.SFC<Props> = ({
  children = null,
  background = 'none',
  className = '',
}) => {
  return (
    <article
      className={`komodoGridWrapper centercontent-wrapper ${className}`}
      style={{ background }}
    >
      <div className="CenterContent">{children}</div>
    </article>
  );
};

export default CenterContent;

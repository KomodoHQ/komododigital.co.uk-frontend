/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import './twocolumn.css';

/**
 * Local dependencies
 */

/**
 * Props for the content section component
 *
 * data
 */
interface Props {
  title?: string;
  subtitle?: string;
  background?: string;
  className?: string;
  children: ReactNode;
  hr?: boolean;
}

/**
 *
 * Using SFC (Stateless Functional Component) because a
 * content section doesn't need to maintain any state of its own.
 *
 * @param data
 */
const TwoColumn: React.SFC<Props> = ({
  title = 'TITLE HERE',
  subtitle = null,
  background = 'none',
  className = '',
  children,
  hr = true,
}) => {
  const subtitleEl = subtitle ? <span>{subtitle}</span> : null;
  const titleEl = title ? <h2>{title}</h2> : null;
  const hrEl = hr ? <hr /> : null;

  const style = {
    background: background,
  };

  return (
    <>
      <div className={`komodoGridWrapper two-column-wrapper ${className}`} style={style}>
        <div className={`Two-Column`}>
          {subtitleEl}
          {titleEl}
          <div>{children}</div>
        </div>
      </div>
      {hrEl}
    </>
  );
};

export default TwoColumn;

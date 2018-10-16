/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import './content-section.css';

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
  invert?: boolean;
  background?: string;
  verticalPadding?: number;
  children: ReactNode;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a content section doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const ContentSection: React.SFC<Props> = ({ title = 'TITLE HERE', subtitle= null, invert, background='#ffffff', verticalPadding=100, children }) => {

  const subtitleEl = subtitle ? (<span>{subtitle}</span>) : null;
  const titleEl = title ? (<h2>{title}</h2>) : null;
  const invertedClassname = invert ? "invert" : "";

  return (
    <div className={`cs-wrapper ${invertedClassname}`} style={{ backgroundColor: background, paddingTop: verticalPadding+'px', paddingBottom: verticalPadding+'px' }}>
      <div className={`Content-Section`}>
          {subtitleEl}
          {titleEl}
          <div>{children}</div>
      </div>
    </div>

  );
};

export default ContentSection;

/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import './content-image.css';

/**
 * Local dependencies
 */

/**
 * Props for the content section component
 * 
 * data
 */
interface Props {
  children: ReactNode;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a content section doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const ContentSection: React.SFC<Props> = ({ children }) => {

  return (
    <div className={`csi-wrapper`}>
      <div>
        {children}
      </div>
    </div>

  );
};

export default ContentSection;

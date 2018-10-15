/**
 * section of a case study
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */

/**
 * Props for the case study section component
 * 
 * data
 */
interface Props {
  data: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a ccase study section doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const CaseStudySection: React.SFC<Props> = ({ data }) => {
  return (
    <div>
        <span>Subtitle</span>
        <h2>Title</h2>
        <p>Content</p>
        <p>Content</p>
        <img />
    </div>
  );
};

export default CaseStudySection;

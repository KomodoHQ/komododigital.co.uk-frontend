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
import './testimonial.css';

/**
 * Props for the testimonial component
 * 
 * data
 */
interface Props {
  name?: string;
  children?: any;
  jobtitle?: string;
  company?: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a testimonial doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const Testimonial: React.SFC<Props> = ({ name=null, children=null, jobtitle=null, company=null }) => {
  return (
    <article className="komodoGridWrapper testimonial-wrapper">
      <div className="Testimonial">
          <span className="name">{name}:</span>
          <q>{children}</q>
          <hr />
          <span className="job">{jobtitle}</span>
          <span className="company">{company}</span>
      </div>
    </article>
  );
};

export default Testimonial;

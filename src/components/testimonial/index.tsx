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
  background?: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a testimonial doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const Testimonial: React.SFC<Props> = ({ name=null, children=null, jobtitle=null, company=null, background="linear-gradient(0deg, #0F1E65 0%, #04104A 100%)" }) => {
  return (
    <article className="komodoGridWrapper testimonial-wrapper" style={{ background: background }}>
      <div className="Testimonial">
          <q>{children}</q>
          <hr />
          <span className="name">{name}</span>
          <span className="job">{jobtitle}, {company}</span>
      </div>
    </article>
  );
};

export default Testimonial;

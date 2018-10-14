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
  data?: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a testimonial doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const Testimonial: React.SFC<Props> = ({ data }) => {
  return (
    <div className="Testimonial">
        <span>Name:</span>
        <q>Testimonial</q>
        <hr />
        <span className="job">Job title</span>
        <span className="company">Company</span>
    </div>
  );
};

export default Testimonial;

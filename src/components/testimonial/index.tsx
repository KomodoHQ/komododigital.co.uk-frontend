import React, { ReactNode } from 'react';
import "./testimonial.css"

interface Props {
  data: any;
}

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

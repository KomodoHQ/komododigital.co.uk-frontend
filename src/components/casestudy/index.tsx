import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

interface Props {
  data: any;
}

const CaseStudy: React.SFC<Props> = ({ data }) => {
  return (
    <div>
        <img />
        <div>
          <span>Subtitle</span>
          <h2>Title</h2>
          <p>Description</p>
          <Link to="/">Read Case Study</Link>
        </div>
    </div>
  );
};

export default CaseStudy;

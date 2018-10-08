import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

interface Props {
  data: any;
}

const CaseStudy: React.SFC<Props> = ({ data, subtitle, title, children }) => {
  return (
    <div>
        <img />
        <div>
          <span>{subtitle}</span>
          <h2>{title}</h2>
          <p>{children}</p>
          <Link to="/">Read Case Study</Link>
        </div>
    </div>
  );
};

export default CaseStudy;

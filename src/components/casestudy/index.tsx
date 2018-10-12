import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

interface Props {
  data?: any;
  subtitle: string;
  title: string;
  link: string;
}

const CaseStudy: React.SFC<Props> = ({ data, subtitle, title, children, link }) => {
  return (
    <div>
      <img />
      <div>
        <span>{subtitle}</span>
        <h2>{title}</h2>
        {children}
        <Link to={link}>Read Case Study</Link>
      </div>
    </div>
  );
};

export default CaseStudy;

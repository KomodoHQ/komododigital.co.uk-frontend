import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

interface Props {
  subtitle: string;
  title: string;
  link: string;
}

const CaseStudy: React.SFC<Props> = ({ subtitle, title, children, link }) => {
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

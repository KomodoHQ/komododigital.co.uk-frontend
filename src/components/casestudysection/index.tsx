import React, { ReactNode } from 'react';

interface Props {
  data: any;
}

const CaseStudySection: React.SFC<Props> = ({ data, title, children}) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>Content</p>
        {children}
    </div>
  );
};

export default CaseStudySection;

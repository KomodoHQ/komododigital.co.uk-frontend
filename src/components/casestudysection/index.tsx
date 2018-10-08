import React, { ReactNode } from 'react';

interface Props {
  data: any;
}

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

import React, { ReactNode } from 'react';

interface Props {
  data: any;
}

const ContentSection: React.SFC<Props> = ({ data }) => {
  return (
    <div>
        <h2>Content section title</h2>
        <div>Content</div>
    </div>
  );
};

export default ContentSection;

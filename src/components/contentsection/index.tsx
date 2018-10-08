import React, { ReactNode } from 'react';

interface Props {
  data: any;
}

const ContentSection: React.SFC<Props> = ({ data, title = 'TITLE HERE', children }) => {
  return (
    <div>
        <h2>{title}</h2>
        <div>Content</div>
        {children}
    </div>
  );
};

export default ContentSection;

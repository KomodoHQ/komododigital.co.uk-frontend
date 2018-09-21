import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  data: any;
}

const BlogSummaryView: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
      <span>Test Text</span>
      {children}
    </div>
  );
};

export default BlogSummaryView;

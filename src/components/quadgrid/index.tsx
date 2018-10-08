import React, { ReactNode } from 'react';

interface Props {
  data?: any;
}

const QuadGrid: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
        QuadGrid

        {children}
    </div>
  );
};

export default QuadGrid;

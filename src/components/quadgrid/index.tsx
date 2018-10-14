import React, { ReactNode } from 'react';
import "./quadgrid.css";

interface Props {
  children?: ReactNode;
}

const QuadGrid: React.SFC<Props> = ({ children }) => {
  return (
    <div className="QuadGrid">
        {children}
    </div>
  );
};

export default QuadGrid;

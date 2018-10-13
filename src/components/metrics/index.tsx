import React, { ReactNode } from 'react';
import './metrics.css';

interface Props {
  metrics?: any;
}

const Metrics: React.SFC<Props> = ({ metrics, children }) => {
  return (
    <div className="Metrics">
        {children}
    </div>
  );
};

export default Metrics;

import React, { ReactNode } from 'react';
import './metric.css';

interface Props {
  data: any;
}

const Metric: React.SFC<Props> = ({ data }) => {
  return (
    <div className="Metric">
        <span className="number">Number</span>
        <span>Metric / Result</span>
        <hr />
        <p>Description</p>
    </div>
  );
};

export default Metric;

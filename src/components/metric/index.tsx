import React, { ReactNode } from 'react';
import './metric.css';

interface Props {
  value: number;
  metric: string;
  description: string;
}

const Metric: React.SFC<Props> = ({ value, metric, description }) => {
  return (
    <div className="Metric">
        <span className="number">{value}</span>
        <span>{metric}</span>
        <hr />
        <p>{description}</p>
    </div>
  );
};

export default Metric;

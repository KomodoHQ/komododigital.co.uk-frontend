/**
 * a metric card component that sits inside of the metrics triptic
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */
import './metric.css';

/**
 * Props for the metric card component
 * 
 * data
 */
interface Props {
  value: number;
  metric: string;
  description: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a metric card doesn't need to maintain any state of its own.
 * 
 * @param data
 */
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

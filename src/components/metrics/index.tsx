/**
 * three metric cards in a row
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */
import './metrics.css';

/**
 * Props for the metric cards component
 * 
 * data
 */
interface Props {
  metrics?: any;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a metric cards doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const Metrics: React.SFC<Props> = ({ metrics, children }) => {
  return (
    <div className="Metrics">
        {children}
    </div>
  );
};

export default Metrics;

/**
 * PortfolioGrid component that holds client portfolio logos
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */
import "./portfoliogrid.css";

/**
 * Props for the PortfolioGrid component
 * 
 * data
 */
interface Props {
  title?: string;
  children?: ReactNode;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a PortfolioGrid doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const PortfolioGrid: React.SFC<Props> = ({ title, children }) => {
  return (
    <div className="komodoGridWrapper PortfolioGrid">
        <span>{title}</span>
        {children}
    </div>
  );
};

export default PortfolioGrid;

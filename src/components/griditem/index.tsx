/**
 * grid item component for the quad grid
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import "./griditem.css";

/**
 * Local dependencies
 */

/**
 * Props for the grid item component
 * 
 * data
 */
interface Props {
  title?: string;
  image?: string;
  children?: ReactNode
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a grid item doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const GridItem: React.SFC<Props> = ({ title, image, children }) => {
  return (
    <div className="GridItem">
        <img src={image} />
        <h3>{title}</h3>
        {children}
    </div>
  );
};

export default GridItem;

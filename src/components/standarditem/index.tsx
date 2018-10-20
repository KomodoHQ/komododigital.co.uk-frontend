/**
 * item that sits in the services layout component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */

/**
 * Props for the item component
 * 
 * data
 */
interface Props {
  imgsrc?: string;
  link?: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a item doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const StandardItem: React.SFC<Props> = ({ imgsrc, link }) => {
  return (
    <div>
        StandardItem
    </div>
  );
};

export default StandardItem;

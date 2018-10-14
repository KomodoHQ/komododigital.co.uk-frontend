import React, { ReactNode } from 'react';
import "./griditem.css";

interface Props {
  title?: string;
  image?: string;
  children?: ReactNode
}

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

import React, { ReactNode } from 'react';

interface Props {
  data?: any;
  title?: string;
}

const GridItem: React.SFC<Props> = ({ data, title, children }) => {
  return (
    <div>
        <div>IMAGE</div>
        <h3>{title}</h3>
        {children}
    </div>
  );
};

export default GridItem;

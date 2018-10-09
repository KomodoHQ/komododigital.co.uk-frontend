import React, { ReactNode } from 'react';

interface Props {
  data?: any;
}

const Services: React.SFC<Props> = ({ data, children }) => {
  return (
    <div>
        Services
        {children}
    </div>
  );
};

export default Services;

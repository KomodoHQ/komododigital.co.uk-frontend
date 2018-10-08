import React, { ReactNode } from 'react';

interface Props {
  data?: any;
  title: string;
}

const SeeMoreButton: React.SFC<Props> = ({ data, title }) => {
  return (
    <div>
        {title}
    </div>
  );
};

export default SeeMoreButton;

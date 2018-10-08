import React, { ReactNode } from 'react';

interface Props {
  data: any;
}

const SeeMoreButton: React.SFC<Props> = ({ data, title }) => {
  return (
    <div>
        {title}
    </div>
  );
};

export default SeeMoreButton;

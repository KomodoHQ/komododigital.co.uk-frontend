import React, { ReactNode } from 'react';

interface Props {
  title: string;
}

const SeeMoreButton: React.SFC<Props> = ({ title }) => {
  return (
    <div>
        {title}
    </div>
  );
};

export default SeeMoreButton;

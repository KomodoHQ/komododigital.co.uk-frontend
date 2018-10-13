import React, { ReactNode } from 'react';

interface Props {
  avatar: string;
  name: string;
  jobtitle: string;
  email: string;
}

const VCard: React.SFC<Props> = ({ avatar, name, jobtitle, email }) => {
  return (
    <div>
      <div>{avatar}</div>
        <h1>{name}</h1>
        <h2>{jobtitle}</h2>
        <a href="mailto: {email}">{email}</a>
    </div>
  );
};

export default VCard;

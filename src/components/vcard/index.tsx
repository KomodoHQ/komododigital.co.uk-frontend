/**
 * the contact form vCards that sit over the contact form
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */

/**
 * Props for the vCard component
 * 
 * data
 */
interface Props {
  avatar: string;
  name: string;
  jobtitle: string;
  email: string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a vCard doesn't need to maintain any state of its own.
 * 
 * @param data
 */
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

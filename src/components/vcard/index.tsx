/**
 * the contact form vCards that sit over the contact form
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import Img from 'gatsby-image';

/**
 * Local dependencies
 */
import './vcard.css';

/**
 * Props for the vCard component
 *
 * data
 */
interface Props {
  person: string;
  avatar?: any;
}

const people = {
  Armin: {
    jobtitle: 'Commercial Director',
    name: 'Armin Talic',
    email: 'armin@komododigital.co.uk',
    text: `A product of ex-Yugoslavia, he’s usually the one trying to work the problem and asking
    “why?”. Doesn’t play golf to win business.`,
  },
  Phoebe: {
    jobtitle: 'Client Partner',
    name: 'Phoebe Dowley',
    email: 'phoebe@komododigital.co.uk',
    text: `Supports people from large organisations to start-ups and makes it look easy. Can usually
    be found running a 5k for breakfast.`,
  },
};

/**
 *
 * Using SFC (Stateless Functional Component) because a vCard doesn't need to maintain any state of its own.
 *
 * @param data
 */
const VCard: React.SFC<Props> = ({ person, avatar }) => {
  const { jobtitle, name, text } = people[person];
  return (
    <div className="vcard">
      <div>
        <Img fixed={avatar.childImageSharp.fixed} />
        <div>
          <h1>{name}</h1>
          <h2>{jobtitle}</h2>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default VCard;

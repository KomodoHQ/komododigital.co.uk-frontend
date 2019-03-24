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
    photo: 'person_armin',
  },
  Phoebe: {
    jobtitle: 'Client Partner',
    name: 'Phoebe Dowley',
    email: 'phoebe@komododigital.co.uk',
    text: `Supports people from large organisations to start-ups and makes it look easy. Can usually
    be found running a 5k for breakfast.`,
    photo: 'person_phoebe',
  },
  Jason: {
    jobtitle: 'Project Manager',
    name: 'Jason Christie',
    email: 'jason@komododigital.co.uk',
    text: `Spends most of his time in JIRA, SoW docs or sprint planning and retrospectives.
    Attends the BrewDog shareholders meetings.`,
    photo: 'person_jason',
  },
  Andy: {
    jobtitle: 'Founder & MD',
    name: 'Andy Greener',
    email: 'andy@komododigital.co.uk',
    text: `Entrepreneur and liker of big ideas. Alpine Saxophonist (Grade 1.5) and 
    Drone enthusiast. Miniature Schnauzer Owner.`,
    photo: 'person_andy',
  },
  Ian: {
    jobtitle: 'Development Team Lead',
    name: 'Ian Outterside',
    email: 'ian@komododigital.co.uk',
    text: `Sees the world in 1s and 0s. Tech, Travel, Dog. Repeat. Proud owner of Shadow.`,
    photo: 'person_ian',
  }
};

/**
 *
 * Using SFC (Stateless Functional Component) because a vCard doesn't need to maintain any state of its own.
 *
 * @param data
 */
const VCard: React.SFC<Props> = ({ person, avatars }) => {
  const { jobtitle, name, text, photo } = people[person];
  return (
    <div className="vcard">
      <div>
        <Img fixed={avatars[photo].childImageSharp.fixed} />
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

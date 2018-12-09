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
import './vcard.css'

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
  "Armin": {
    jobtitle: "Commercial Director",
    name:"Armin Talic",
    email:"armin@komododigital.co.uk"
  },
  "Phoebe": {
    jobtitle: "Client Partner",
    name:"Phoebe Dowley",
    email:"phoebe@komododigital.co.uk"
  }
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a vCard doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const VCard: React.SFC<Props> = ({ person, avatar }) => {
  const { jobtitle, name, email } = people[person];
  return (
    <div className="vcard">
      <Img fixed={avatar.childImageSharp.fixed} />
      <div>
        <h1>{name}</h1>
        <h2>{jobtitle}</h2>
      </div>
    </div>
  );
};

export default VCard;

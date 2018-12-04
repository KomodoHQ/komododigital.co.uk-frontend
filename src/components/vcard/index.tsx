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
import './vcard.css'

/**
 * Props for the vCard component
 * 
 * data
 */
interface Props {
  person: string;
}

const people = {
  "Armin": {
    avatar: require("../../content/images/avatar.png"),
    jobtitle: "Commercial Director",
    name:"Armin Talic",
    email:"armin@komododigital.co.uk"
  },
  "Phoebe": {
    avatar: require("../../content/images/avatar.png"),
    jobtitle: "Account Manager",
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
const VCard: React.SFC<Props> = ({ person }) => {
  const { avatar, jobtitle, name, email } = people[person];
  return (
    <div className="vcard">
      <img src={avatar} width="70" height="70" />
      <div>
        <h1>{name}</h1>
        <h2>{jobtitle}</h2>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
    </div>
  );
};

export default VCard;

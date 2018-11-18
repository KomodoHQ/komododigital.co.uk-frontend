/**
 * Header for contact form
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */
import './contactsection.css';

/**
 * Props for the contact section component
 * 
 * data
 */
interface Props {
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a contact section doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const ContactSection: React.SFC<Props> = ({ children }) => {
  return (
    <div className="komodoGridWrapper contactsection-wrapper">
      <div className="contactsection">
        {children}
      </div>
    </div>
  );
};

export default ContactSection;

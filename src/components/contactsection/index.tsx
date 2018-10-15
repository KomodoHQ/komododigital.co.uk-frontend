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
    <div>
        ContactSection
        {children}
    </div>
  );
};

export default ContactSection;

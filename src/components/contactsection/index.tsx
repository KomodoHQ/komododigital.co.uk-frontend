/**
 * Header for contact form
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import ContactForm from '../contactform';

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
  children? : ReactNode;
  className? : string;
  background? : string;
}

/**
 * 
 * Using SFC (Stateless Functional Component) because a contact section doesn't need to maintain any state of its own.
 * 
 * @param data
 */
const ContactSection: React.SFC<Props> = (props : Props) => {

  const style = {
    background: props.background ? props.background : 'none',
  };

  return (
    <div className={`komodoGridWrapper cs-wrapper contactsection-wrapper ${props.className}`} style={style}>
      <div className="contactsection">
        <h2>Contact Us</h2>
        {props.children}
      </div>
      <div className="form">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;

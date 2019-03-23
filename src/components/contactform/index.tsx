/**
 * outer component of a contact form (temp form included)
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';

/**
 * Local dependencies
 */
import './contactform.css';

/**
 * Props for the contact form component
 * 
 * data
 */
interface Props {
  data?: any;
}

/**
 * 
 * Contact form needs to switch to use stateful pattern to hold contact form data
 * 
 * @param data
 */
const ContactForm: React.SFC<Props> = ({ data }) => {
  return (
    <div className="contactform">
      <form action="https://formspree.io/hello@komododigital.co.uk" method="POST">
        <label htmlFor="form-name">
          Your Name
          <input type="text" name="name" placeholder="Joe Blogs" id="form-name" />
        </label>
        <label htmlFor="form-email">
          Your Email
          <input type="email" name="email" placeholder="joe@blogs.com" id="form-email" />
          </label>
        <label htmlFor="form-message">
          Your Message
          <textarea name="message" id="form-message" cols={30} rows={10} placeholder="Your message" />
        </label>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

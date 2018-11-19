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
        <label htmlFor="form-service">
          Service
          <select name="service" id="form-service">
            <option>Choose Service</option>
            <option value="Discovery">Discovery</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Delivery">Delivery</option>
          </select>
        </label>
        <label htmlFor="form-sector">
        Sector
          <select name="sector" id="form-sector">
            <option>Choose Sector</option>
            <option value="Education">Education</option>
            <option value="Law Enforcement">Law Enforcement</option>
            <option value="Startups">Startups</option>
            <option value="Social Housing">Social Housing</option>
          </select>
        </label>
        <label htmlFor="form-message">
          Your Message
          <textarea name="message" id="form-message" cols={30} rows={10} placeholder="Your message" />
        </label>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

import React, { ReactNode } from 'react';

interface Props {
  data?: any;
}

const ContactForm: React.SFC<Props> = ({ data }) => {
  return (
    <div>
      <form action="https://formspree.io/hello@komododigital.co.uk" method="POST">
        <label htmlFor="form-name">Your Name</label>
        <input type="text" name="name" placeholder="Joe Blogs" id="form-name" />
        <label htmlFor="form-email">Your Email</label>
        <input type="email" name="email" placeholder="joe@blogs.com" id="form-email" />
        <label htmlFor="form-service">Service</label>
        <select name="service" id="form-service">
          <option value="Discovery">Discovery</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Delivery">Delivery</option>
        </select>
        <label htmlFor="form-sector">Sector</label>
        <select name="sector" id="form-sector">
          <option value="Education">Education</option>
          <option value="Law Enforcement">Law Enforcement</option>
          <option value="Startups">Startups</option>
          <option value="Social Housing">Social Housing</option>
        </select>
        <label htmlFor="form-message">Your Message</label>
        <textarea name="message" id="form-message" cols={30} rows={10} />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactForm;

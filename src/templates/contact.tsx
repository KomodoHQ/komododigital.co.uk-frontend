import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import ContentSection from '../components/contentsection';
import VCard from '../components/vcard';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';
import { Link } from '@reach/router';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

/**
 * Note, the interfaces below will eventually exist in their own
 * components, but for now are fine here.
 */

interface ContactPageProps {
  contactsIntro: any;
  data?: any;
}

export default (props: ContactPageProps) => {
  return (
    <Layout data={props.data}>
      <ContentSection title="Contact Us" className="topPaddingLarge" background="#ffffff">
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <VCard person="Armin" avatar={props.data.avatar} />
        <VCard person="Phoebe" avatar={props.data.avatar} />
      <ContactForm />
      </ContactSection>
      <ContentSection className="topPaddingLarge bottomPaddingLarge" background="#151515" invert title="Careers">
        <p>Whether you’re looking to progress in your career or you’re a fresh-faced graduate, Komodo could be the right place for you to hone your skills and grow. The talent here is intimidatingly good, so be confident and ready to impress.</p>
        <Link to="/careers">See what careers we have available</Link>
      </ContentSection>
    </Layout>
  );
};

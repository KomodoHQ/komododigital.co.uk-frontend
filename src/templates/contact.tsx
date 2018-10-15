import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import Services from '../components/services';
import CaseStudy from '../components/casestudy';
import QuadGrid from '../components/quadgrid';
import GridItem from '../components/griditem';
import ContentSection from '../components/contentsection';
import BlogPost from '../components/blogpost';
import SeeMoreButton from '../components/seemorebutton';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';

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
      <ContactSection>
        {renderAst(props.contactsIntro)}
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

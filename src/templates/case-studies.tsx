import React from 'react';
import rehypeReact from 'rehype-react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import CaseStudy from '../components/casestudy';
import ContentSection from '../components/contentsection';
import SeeMoreButton from '../components/seemorebutton';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  return (
    <Layout data={props.data}>
      <ContentSection title="Case Studies">
        {props.caseStudies.map((study) => {
          return (
            <CaseStudy key={study.title} subtitle={study.subtitle} title={study.title}>
              {renderAst(study.htmlAst)}
            </CaseStudy>
          );
        })}
        <SeeMoreButton title="See More Work" />
      </ContentSection>
      <ContactSection>
        {renderAst(props.contactsIntro)}
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

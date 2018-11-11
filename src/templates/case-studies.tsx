import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import CaseStudy from '../components/casestudy';
import ContentSection from '../components/contentsection';
import SeeMoreButton from '../components/seemorebutton';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';

import images from "../utils/images";

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  return (
    <Layout data={props.data}>
      <ContentSection title="Case Studies">
        <p>Content</p>
      </ContentSection>
      {props.caseStudies.map((study) => {
        return (
          <CaseStudy
            key={study.title}
            subtitle={study.subtitle}
            title={study.title}
            link={study.link}
            image={images[study.image]}
          >
            {renderAst(study.htmlAst)}
          </CaseStudy>
        );
      })}
      <SeeMoreButton title="See More Work" />
      <ContentSection background={"#ffffff"}>
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

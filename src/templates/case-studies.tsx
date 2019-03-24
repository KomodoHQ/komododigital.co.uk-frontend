import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import CaseStudy from '../components/casestudy';
import ContentSection from '../components/contentsection';
import SeeMoreButton from '../components/seemorebutton';
import ContactSection from '../components/contactsection';
import VCard from '../components/vcard';
import TitleText from '../components/titletext';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  return (
    <Layout data={props.data}>
      <TitleText
        title="Case Studies"
        subtitle="What We Do"
        showShowreel={false}
        className={'topPaddingSmall bottomPaddingNone'}
      >
        {renderAst(props.caseStudiesIntro)}
      </TitleText>
      {props.caseStudies.map((study) => {
        return (
          <CaseStudy
            key={study.title}
            subtitle={study.subtitle}
            title={study.title}
            link={study.link}
            image={study.csimage}
          >
            <div>
              <p>{study.excerpt}</p>
            </div>
          </CaseStudy>
        );
      })}
      <SeeMoreButton title="See More Work" />
      <ContactSection className={`topPaddingLarge`} background="#fff">
        {renderAst(props.contactsIntro)}
        <VCard person="Armin" avatars={props.data} />
        <VCard person="Phoebe" avatars={props.data} />
      </ContactSection>
    </Layout>
  );
};

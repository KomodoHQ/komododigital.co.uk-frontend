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
  console.log(props.caseStudies)
  const orderedCaseStudies = props.caseStudies.filter(caseStudy => caseStudy.v2).concat(
    props.caseStudies.filter(caseStudy => !caseStudy.v2)
  )
  return (
    <Layout data={props.data} pageMeta={props.pageMeta} inverted={true} background="#EAEAEA">
      <TitleText
        title="Client Stories"
        subtitle="What We Do"
        className={'topPaddingSmall bottomPaddingNone'}
      >
        {renderAst(props.caseStudiesIntro)}
      </TitleText>
      {orderedCaseStudies.map((study) => {
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
      <ContactSection className={`topPaddingLarge`} background="#fff">
        {renderAst(props.contactsIntro)}
        <VCard person="Armin" avatars={props.data} />
        <VCard person="Phoebe" avatars={props.data} />
      </ContactSection>
    </Layout>
  );
};

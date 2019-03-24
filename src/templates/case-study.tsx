import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import Metrics from '../components/metrics';
import Metric from '../components/metric';
import Testimonial from '../components/testimonial';
import ContentSection from '../components/contentsection';
import CenterContent from '../components/centercontent';
import TitleText from '../components/titletext';
import ContactSection from '../components/contactsection';
import CaseStudy from '../components/casestudy';
import VCard from '../components/vcard';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  console.log(props);
  return (
    <Layout data={props.data} background={props.navBackground}>
      <TitleText
        subtitle={props.subtitle}
        title={props.title}
        background={props.background}
        invert={props.invert}
        className="topPaddingLarge bottomPaddingNone"
        coverimage={props.coverimage}
        showShowreel={false}
      >
        {renderAst(props.intro)}
      </TitleText>
      <CenterContent className="topPaddingLarge bottomPaddingSmall">
        <h2>{props.metricsTitle}</h2>
        {renderAst(props.metricsIntro)}
      </CenterContent>
      <Metrics>
        {props.metrics.map((metric, i) => {
          return (
            <Metric
              key={`metric-${i}`}
              metric={metric.metric}
              value={metric.value}
              description={metric.description}
            />
          );
        })}
      </Metrics>
      <ContentSection title={props.processTitle}>{renderAst(props.process)}</ContentSection>
      <Testimonial
        background={props.background}
        name={props.testimonial.name}
        jobtitle={props.testimonial.jobtitle}
        company={props.testimonial.company}
      >
        {renderAst(props.testimonialText)}
      </Testimonial>
      {/* <ContentSection title="Other related work">
        {renderAst(props.caseStudiesIntro)}
      </ContentSection> */}
      {props.caseStudies.map((study) => {
        return (
          <CaseStudy
            key={study.title}
            subtitle={study.subtitle}
            title={study.title}
            link={study.link}
            image={study.csimage}
          >
            {renderAst(study.htmlAst)}
          </CaseStudy>
        );
      })}
      <ContactSection>
        {renderAst(props.contactsIntro)}
        <VCard person="Armin" avatars={props.data} />
        <VCard person="Phoebe" avatars={props.data} />
      </ContactSection>
    </Layout>
  );
};

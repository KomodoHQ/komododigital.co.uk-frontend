import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import Metrics from '../components/metrics';
import Metric from '../components/metric';
import Testimonial from '../components/testimonial';
import ContentSection from '../components/contentsection';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';
import CaseStudy from '../components/casestudy';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  console.log(props.testimonial)
  return (
    <Layout data={props.data}>
      <ContentSection subtitle={props.subtitle} title={props.title}>{renderAst(props.intro)}</ContentSection>
      <ContentSection title="Solution/Project Outcome">
        {renderAst(props.metricsIntro)}
      </ContentSection>
      <Metrics>
      {props.metrics.map((metric) => {
          return (
            <Metric
              key={metric.metric}
              metric={metric.metric}
              value={metric.value}
              description={metric.description}
            />
          );
        })}
      </Metrics>
      <ContentSection title={props.processTitle}>
        {renderAst(props.process)}
      </ContentSection>
      <Testimonial name="A Developer" jobtitle="Senior Developer" company="Komodo">Testimonial content</Testimonial>
      <ContentSection title="Other related work">
        {renderAst(props.caseStudiesIntro)}
      </ContentSection>
      {props.caseStudies.map((study) => {
          return (
            <CaseStudy
              key={study.title}
              subtitle={study.subtitle}
              title={study.title}
              link={study.link}
            >
              {renderAst(study.htmlAst)}
            </CaseStudy>
          );
        })}
      <ContentSection background={"#ffffff"}>
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

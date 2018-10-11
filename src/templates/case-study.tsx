import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
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
  return (
    <Layout data={props.data}>
      <div>
        <span>{props.subtitle}</span>
        <ContentSection title={props.title}>{renderAst(props.intro)}</ContentSection>
      </div>
      <ContentSection title="Solution/Project Outcome">
        {renderAst(props.metricsIntro)}
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
      </ContentSection>
      <ContentSection title={props.processTitle}>
        {renderAst(props.process)}
      </ContentSection>
      <ContentSection title="test">
        <Testimonial />
      </ContentSection>
      <ContentSection title="Other related work">
        {renderAst(props.caseStudiesIntro)}
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
      </ContentSection>
      <ContactSection>
        {renderAst(props.contactsIntro)}
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

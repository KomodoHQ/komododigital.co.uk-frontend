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

import images from "../utils/images";

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

const data = {
  "case-studies/social-housing": {
    navBackground: "#2C8827",
    background: "linear-gradient(0deg, #82B84F 0%, #2C8827 100%)",
    invert: true,
    content: {
      cover: null,
      testimonial: {
        testimonial: "Komodo are very refreshing, a talented, engaging and flexible team completely focused on delivering the customer's objectives.",
        name: "Paul Crennell",
        title: "Chief Technology Officer",
        company: "Orchard Systems"
      }
    }
  },
  "case-studies/start-up": {
    navBackground: "#12203A",
    background: "linear-gradient(0deg, #23375A 0%, #12203A 100%)",
    invert: true,
    content: {
      cover: require("../images/casestudy/StreetStreamCover.png"),
      testimonial: {
        testimonial: "Komodo are very refreshing, a talented, engaging and flexible team completely focused on delivering the customer's objectives.",
        name: "Paul Crennell",
        title: "Chief Technology Officer",
        company: "Orchard Systems"
      }
    }
  }
}

export default (props) => {

  let page;

  if (props.pageContext && props.pageContext.hasOwnProperty("slug")) { // TODO: Work out why tests don't have the pageContext property
    page = data[props.pageContext.slug];
  } else {
    page = data["case-studies/start-up"];
  }

  return (
    <Layout data={props.data} background={page.navBackground}>
      <ContentSection subtitle={props.subtitle} title={props.title} background={page.background} invert={page.invert} paddingTop={200} paddingBottom={200} cover={page.content.cover}>{renderAst(props.intro)}</ContentSection>
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
      <Testimonial background={page.background} name={page.content.testimonial.name} jobtitle={page.content.testimonial.title} company={page.content.testimonial.company}>{page.content.testimonial.testimonial}</Testimonial>
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
              image={images[study.image]}
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

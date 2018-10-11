import React from 'react';
import rehypeReact from 'rehype-react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Metric from '../components/metric';
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

export default (props) => {
  return (
    <Layout data={props.data}>
      <div>
        <span>{props.subtitle}</span>
        <ContentSection title={props.title}>{renderAst(props.intro)}</ContentSection>
      </div>
      <ContentSection title="Solution/Project">
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
      {/*<ContentSection title="Approach">
        {renderAst(props.approachIntro)}
        <Services>
          {props.services.map((service) => {
            return (
              <GridItem key={service.title} title={service.title}>
                {renderAst(service.htmlAst)}
              </GridItem>
            );
          })}
        </Services>
      </ContentSection>
      <ContentSection title="Case Studies">
        {renderAst(props.caseStudiesIntro)}
        {props.caseStudies.map((study) => {
          return (
            <CaseStudy key={study.title} subtitle={study.subtitle} title={study.title}>
              {renderAst(study.htmlAst)}
            </CaseStudy>
          );
        })}
        <SeeMoreButton title="See More Work" />
      </ContentSection>
      <ContentSection title="Client Portfolio">
        {renderAst(props.clientPortfoliosIntro)}
        <QuadGrid>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </QuadGrid>
      </ContentSection>
      <ContentSection title="Insights">
        {renderAst(props.insightsIntro)}
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <SeeMoreButton title="See More Insights" />
      </ContentSection>
      <ContactSection>
        {renderAst(props.contactsIntro)}
        <ContactForm />
      </ContactSection> */}
    </Layout>
  );
};

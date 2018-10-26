import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import QuadGrid from '../components/quadgrid';
import GridItem from '../components/griditem';
import Services from '../components/services';
import ContentSection from '../components/contentsection';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

/**
 * Note, the interfaces below will eventually exist in their own
 * components, but for now are fine here.
 */
interface Service {
  title: string;
  htmlAst: any;
}

interface AboutPageProps {
  services: Service[];
  subtitle: string;
  title: string;
  intro: any;
  approachIntro: any;
  servicesIntro: any;
  standardsIntro: any;
  contactsIntro: any;
  data?: any;
}

export default (props: AboutPageProps) => {
  return (
    <Layout data={props.data}>
      <ContentSection subtitle={props.subtitle} title={props.title}>{renderAst(props.intro)}</ContentSection>
      <ContentSection title="Approach">
        {renderAst(props.approachIntro)}
      </ContentSection>
      <QuadGrid>
        {props.services.map((service) => {
          return (
            <GridItem key={service.title} title={service.title}>
              {renderAst(service.htmlAst)}
            </GridItem>
          );
        })}
      </QuadGrid>
      <ContentSection title="Services">
        {renderAst(props.servicesIntro)}
      </ContentSection>
      <Services>
        <ul>
          <li>Discovery Workshops</li>
          <li>Technical Audits</li>
          <li>User Research</li>
          <li>Concept Design</li>
          <li>Project Roadmapping</li>
          <li>Usability testing and research</li>
          <li>Design Research</li>
          <li>Visual Design</li>
        </ul>
        <ul>
          <li>Interaction Design</li>
          <li>Prototype Development</li>
          <li>Testing</li>
          <li>User-centered development</li>
          <li>Agile Development</li>
          <li>TDD/BDD</li>
          <li>Mobile App Development</li>
          <li>Web App Development</li>
        </ul>
        <ul>
          <li>Native iOS app development</li>
          <li>Native Android app development</li>
          <li>Infrastructure and Devops</li>
          <li>Real time application monitoring</li>
          <li>Information architecture</li>
          <li>W3C Compliance</li>
          <li>Ongoing Strategy</li>
          <li>Innovation development</li>
        </ul>
      </Services>
      <ContentSection title="Standards">
        {renderAst(props.standardsIntro)}
      </ContentSection>
      <ContentSection background="#ffffff" verticalPadding={50} >
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

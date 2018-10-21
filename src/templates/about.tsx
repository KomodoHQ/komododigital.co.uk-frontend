import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import QuadGrid from '../components/quadgrid';
import GridItem from '../components/griditem';
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
      <ContentSection title="Standards">
        {renderAst(props.standardsIntro)}
      </ContentSection>
      <QuadGrid>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </QuadGrid>
      <ContentSection background="#ffffff" verticalPadding={50} >
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import QuadGrid from '../components/quadgrid';
import GridItem from '../components/griditem';
import Services from '../components/services';
import PortfolioGrid from '../components/portfoliogrid';
import StandardItem from '../components/standarditem';
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
      <ContentSection subtitle={props.subtitle} title={props.title} invert background="#000000">{renderAst(props.intro)}</ContentSection>
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
      <PortfolioGrid title="We Design With">
        <StandardItem imgsrc={require("../images/standards/Sketch.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/AWS.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/AWS.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/AWS.png")} link="/AWS" />
      </PortfolioGrid>
      <PortfolioGrid title="We Develop With">
        <StandardItem imgsrc={require("../images/standards/PHP.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/HTML5.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Node.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/React.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Angular.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Swift.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Java.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Xamarin.png")} link="/AWS" />
      </PortfolioGrid>
      <PortfolioGrid title="We Test With">
        <StandardItem imgsrc={require("../images/standards/Codeception.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Chai.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Selenium.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Jest.png")} link="/AWS" />
      </PortfolioGrid>
      <PortfolioGrid title="We Deploy With">
        <StandardItem imgsrc={require("../images/standards/Apple.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Android.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/AWS.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/Azure.png")} link="/AWS" />
      </PortfolioGrid>
      <PortfolioGrid title="We Are Certified By">
        <StandardItem imgsrc={require("../images/standards/CyberEssentials.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/ISTQB.png")} link="/AWS" />
        <StandardItem imgsrc={require("../images/standards/AWS.png")} link="/AWS" />
      </PortfolioGrid>
      <ContentSection background="#ffffff" verticalPadding={50} >
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

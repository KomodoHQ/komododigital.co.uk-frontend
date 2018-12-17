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

import images from "../utils/images";

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
      <ContentSection subtitle={props.subtitle} title={props.title} invert background="#000000" className="topPaddingLarge bottomPaddingLarge">{renderAst(props.intro)}</ContentSection>
      <ContentSection title="Approach" className="bottomPaddingSmall">
        {renderAst(props.approachIntro)}
      </ContentSection>
      <QuadGrid>
        {props.services.map((service) => {
          return (
            <GridItem key={service.title} title={service.title} image={images[`images/approach/${service.title}.png`]}>
              {renderAst(service.htmlAst)}
            </GridItem>
          );
        })}
      </QuadGrid>
      <ContentSection title="Services" className="bottomPaddingSmall">
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
      <ContentSection title="Standards" className="topPaddingLarge bottomPaddingSmall">
        {renderAst(props.standardsIntro)}
      </ContentSection>
      <PortfolioGrid title="We Design With">
        <StandardItem imgsrc={props.data.standard_sketch} title="Sketch" link="https://www.sketchapp.com/" />
        <StandardItem imgsrc={props.data.standard_abstract} link="https://www.goabstract.com/" />
        <StandardItem imgsrc={props.data.standard_invision} link="https://www.invisionapp.com/" />
        <StandardItem imgsrc={props.data.standard_adobecc} link="https://www.adobe.com/uk/creativecloud.html" />
      </PortfolioGrid>
      <PortfolioGrid title="We Develop With">
        <StandardItem imgsrc={props.data.standard_php} link="http://www.php.net/" />
        <StandardItem imgsrc={props.data.standard_html5} link="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" />
        <StandardItem imgsrc={props.data.standard_node} link="https://nodejs.org/en/" />
        <StandardItem imgsrc={props.data.standard_react} link="https://reactjs.org/" />
        <StandardItem imgsrc={props.data.standard_angular} link="https://angularjs.org/" />
        <StandardItem imgsrc={props.data.standard_swift} link="https://developer.apple.com/swift/" />
        <StandardItem imgsrc={props.data.standard_java} link="https://www.java.com/en/" />
        <StandardItem imgsrc={props.data.standard_xamarin} link="https://visualstudio.microsoft.com/xamarin/" />
      </PortfolioGrid>
      <PortfolioGrid title="We Test With">
        <StandardItem imgsrc={props.data.standard_codeception} link="https://codeception.com/" />
        <StandardItem imgsrc={props.data.standard_chai} link="https://www.chaijs.com/" />
        <StandardItem imgsrc={props.data.standard_selenium} link="https://www.seleniumhq.org/" />
        <StandardItem imgsrc={props.data.standard_jest} link="https://jestjs.io/" />
      </PortfolioGrid>
      <PortfolioGrid title="We Deploy With">
        <StandardItem imgsrc={props.data.standard_apple} link="https://www.apple.com/uk/" />
        <StandardItem imgsrc={props.data.standard_android} link="https://www.android.com/" />
        <StandardItem imgsrc={props.data.standard_aws} link="https://aws.amazon.com/" />
        <StandardItem imgsrc={props.data.standard_azure} link="https://azure.microsoft.com/en-gb/" />
      </PortfolioGrid>
      <PortfolioGrid title="We Are Certified By">
        <StandardItem imgsrc={props.data.standard_cyberessentials} link="https://www.cyberessentials.ncsc.gov.uk/" />
        <StandardItem imgsrc={props.data.standard_istqb} link="https://www.istqb.org/" />
        <StandardItem>NPPV 2</StandardItem>
      </PortfolioGrid>
      <ContentSection title="Contact Us" className="topPaddingLarge bottomPaddingSmall" background="#FFFFFF">
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

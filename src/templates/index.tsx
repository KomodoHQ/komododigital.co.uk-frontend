import React from 'react';
import rehypeReact from 'rehype-react';
import Layout from '../components/layout';
import VCard from '../components/vcard';
import CaseStudy from '../components/casestudy';
import QuadGrid from '../components/quadgrid';
import PortfolioGrid from '../components/portfoliogrid';
import GridItem from '../components/griditem';
import StandardItem from '../components/standarditem';
import ContentSection from '../components/contentsection';
import ContentImage from '../components/contentimage';
import BlogGrid from "../components/bloggrid";
import BlogPost from '../components/blogpost';
import SeeMoreButton from '../components/seemorebutton';
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
interface Insight {
  node: any;
}

 interface Service {
  title: string;
  image: any;
  htmlAst: any;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  link: string;
  htmlAst: any;
  csimage: any;
}

interface IndexPageProps {
  services: Service[];
  caseStudies: CaseStudy[];
  insights: Insight[];
  subtitle: string;
  title: string;
  intro: any;
  aboutUsIntro: any;
  approachIntro: any;
  caseStudiesIntro: any;
  clientPortfoliosIntro: any;
  insightsIntro: any;
  contactsIntro: any;
  data?: any;
}

export default (props: IndexPageProps) => {
  return (
    <Layout data={props.data} >
      <ContentSection title={props.title} subtitle={props.subtitle} invert background="#000000" paddingTop={200} paddingBottom={200}>
        {renderAst(props.intro)}
      </ContentSection>
      <ContentSection title="About Us" paddingTop={200} paddingBottom={30}>
        {renderAst(props.aboutUsIntro)}
      </ContentSection>
      <ContentImage>
        <img src={require("../content/images/illustration@1.5x.svg")} alt={"Komodo at work"} />
      </ContentImage>
      <ContentSection title="Approach" paddingTop={200} paddingBottom={0}>
        {renderAst(props.approachIntro)}
      </ContentSection>
      <QuadGrid>
        {props.services.map((service) => {
          return (
            <GridItem key={service.title} title={service.title} image={images[`images/approach/${service.title}@1.5x.svg`]}>
              {renderAst(service.htmlAst)}
            </GridItem>
          );
        })}
      </QuadGrid>
      <ContentSection title="Case Studies" paddingTop={200} paddingBottom={0}>
        {renderAst(props.caseStudiesIntro)}
      </ContentSection>
      {props.caseStudies.map((study) => {
        console.log(study)
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
      <SeeMoreButton title="See More Work" />
      <ContentSection title="Client Portfolio" paddingTop={0} paddingBottom={0}>
        {renderAst(props.clientPortfoliosIntro)}
      </ContentSection>
      <PortfolioGrid>

        <StandardItem imgsrc={props.data.client_cop} title="College of Policing" link="/About" />
        <StandardItem imgsrc={props.data.client_digitalbarriers} title="Digital Barriers" link="/About" />
        <StandardItem imgsrc={props.data.client_elanders} title="eLanders" link="/About" />
        <StandardItem imgsrc={props.data.client_gichd} title="GICHD" link="/About" />
        <StandardItem imgsrc={props.data.client_htl} title="HTL" link="/About" />
        <StandardItem imgsrc={props.data.client_isg} title="ISG" link="/About" />
        <StandardItem imgsrc={props.data.client_itv} title="ITV" link="/About" />
        <StandardItem imgsrc={props.data.client_legrand} title="LeGrand" link="/About" />
        <StandardItem imgsrc={props.data.client_spacegroup} title="Space Group" link="/About" />
        <StandardItem imgsrc={props.data.client_newcastleuni} title="Newcastle University" link="/About" />
        <StandardItem imgsrc={props.data.client_northumbriapolice} title="Northumbria Police" link="/About" />
        <StandardItem imgsrc={props.data.client_northumbriauni} title="Northumbria University" link="/About" />
        <StandardItem imgsrc={props.data.client_onward} title="Onward" link="/About" />
        <StandardItem imgsrc={props.data.client_orchard} title="Orchard" link="/About" />
        <StandardItem imgsrc={props.data.client_streetstream} title="Streetstream" link="/About" />
        <StandardItem imgsrc={props.data.client_thingco} title="ThingCo" link="/About" />

      </PortfolioGrid>
      <ContentSection title="Insights">
        {renderAst(props.insightsIntro)}
      </ContentSection>
      <BlogGrid>
      {props.insights.map((insight) => {
        return <BlogPost key={insight.node.title} slug={insight.node.slug} title={insight.node.title} image={insight.node.imageSource} />;
      })}
      </BlogGrid>
      <SeeMoreButton title="See More Insights" link={"/blog-list"} />
      <ContentSection title="Contact Us" background="#FFFFFF">
        {renderAst(props.contactsIntro)}
      </ContentSection>
      <ContactSection>
        <VCard avatar={require("../content/images/avatar.png")} jobtitle="Commercial Director" name="Armin Talic" email="story@vcard.com" />
        <VCard avatar={require("../content/images/avatar.png")} jobtitle="Director" name="Matt Moran" email="story@vcard.com" />
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

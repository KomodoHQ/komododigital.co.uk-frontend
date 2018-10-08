import React from 'react';
import rehypeReact from 'rehype-react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import NavigationBar from '../components/navigationbar';
import Services from '../components/services';
import CaseStudySection from '../components/casestudysection';
import CaseStudy from '../components/casestudy';
import QuadGrid from '../components/quadgrid';
import GridItem from '../components/griditem';
import ContentSection from '../components/contentsection';
import BlogPost from '../components/blogpost';
import SeeMoreButton from '../components/seemorebutton';
import ContactSection from '../components/contactsection';
import ContactForm from '../components/contactform';
import Footer from '../components/footer';
import LegalFooter from '../components/legalfooter';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler;

export default (props) => {
  return (
    <Layout data={props.data}>
      <NavigationBar />
      <div>
        HEADER HERE
      </div>
      <ContentSection />
      <div>
        IMAGE HERE
      </div>
      <ContentSection />
      <Services>
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </Services>
      <CaseStudySection>
        <CaseStudy />
        <CaseStudy />
      </CaseStudySection>
      <SeeMoreButton />
      <ContentSection />
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
      <ContentSection />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <SeeMoreButton />
      <ContactSection>
        <ContactForm />
      </ContactSection>
      <Footer />
      <LegalFooter />
    </Layout>
  );
};

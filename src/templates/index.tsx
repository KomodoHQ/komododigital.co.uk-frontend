import React from 'react';
import rehypeReact from 'rehype-react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
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
        <span>Subtitle</span>
        <ContentSection title="People Friendly Software" />
      </div>
      <ContentSection title="About Us">
        <div>
          IMAGE HERE
        </div>
      </ContentSection>
      <ContentSection title="Approach">
        <Services>
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </Services>
      </ContentSection>
      <ContentSection title="Case Studies">
        <CaseStudy />
        <CaseStudy />
        <SeeMoreButton />
      </ContentSection>
      <ContentSection title="Client Portfolio">
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
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <SeeMoreButton />
      </ContentSection>
      <ContactSection>
        <ContactForm />
      </ContactSection>
    </Layout>
  );
};

import React from 'react';
import { graphql } from 'gatsby';
import Index from '../templates/index';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  // Basename is the top level, should have sections
  // Use sections to pull out sub content in order
  const rootNode = findNode('index', props);
  const services = findNodes('group', props, 'services');
  const caseStudies = findNodes('group', props, 'case-studies');
  const caseStudiesIntro = findNode('case_studies', props);
  const aboutUsIntro = findNode('about_us', props);
  const approachIntro = findNode('approach', props);
  const clientPortfoliosIntro = findNode('client_portfolio', props);
  const insightsIntro = findNode('insights', props);
  const contactsIntro = findNode('contacts', props);

  const hocProps = {
    services,
    caseStudies,
    subtitle: rootNode.frontmatter.subtitle,
    title: rootNode.frontmatter.title,
    intro: rootNode.htmlAst,
    aboutUsIntro: aboutUsIntro.htmlAst,
    approachIntro: approachIntro.htmlAst,
    caseStudiesIntro: caseStudiesIntro.htmlAst,
    clientPortfoliosIntro: clientPortfoliosIntro.htmlAst,
    insightsIntro: insightsIntro.htmlAst,
    contactsIntro: contactsIntro.htmlAst,
    ...props,
  };

  return <Index {...hocProps} />;
};

export const pageQuery = graphql`
  query pageQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index|case-studies|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            group
          }
          fileAbsolutePath
        }
      }
    }
  }
`;

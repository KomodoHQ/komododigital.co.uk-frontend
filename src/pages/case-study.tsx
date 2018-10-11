import React from 'react';
import { graphql } from 'gatsby';
import CaseStudy from '../templates/case-study';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  // Basename is the top level, should have sections
  // Use sections to pull out sub content in order
  const rootNode = findNode(props.pageContext.slug, props);
  // const services = findNodes('group', props, 'Services');
  // const caseStudies = findNodes('group', props, 'CaseStudies');
  // const caseStudiesIntro = findNode('case_studies.md', props);
  const metricsIntro = findNode(`${props.pageContext.slug}/metrics`, props);
  // const approachIntro = findNode('approach.md', props);
  // const clientPortfoliosIntro = findNode('client_portfolio.md', props);
  // const insightsIntro = findNode('insights.md', props);
  // const contactsIntro = findNode('contacts.md', props);

  const hocProps = {
    // services,
    // caseStudies,
    // subtitle: rootNode.frontmatter.subtitle,
    // title: rootNode.frontmatter.title,
    intro: rootNode.htmlAst,
    metricsIntro: metricsIntro.htmlAst,
    // approachIntro: approachIntro.htmlAst,
    // caseStudiesIntro: caseStudiesIntro.htmlAst,
    // clientPortfoliosIntro: clientPortfoliosIntro.htmlAst,
    // insightsIntro: insightsIntro.htmlAst,
    // contactsIntro: contactsIntro.htmlAst,
    ...props,
  };

  return <CaseStudy {...hocProps} />;
};

export const caseStudyQuery = graphql`
  query caseStudyQuery {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/case-studies|contacts/" } }) {
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

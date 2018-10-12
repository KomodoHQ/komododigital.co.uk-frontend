import React from 'react';
import { graphql } from 'gatsby';
import CaseStudy from '../templates/case-study';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  // Basename is the top level, should have sections
  // Use sections to pull out sub content in order
  const rootNode = findNode(props.pageContext.slug, props);
  let caseStudies = findNodes('group', props, 'case-studies');
  const caseStudiesIntro = findNode('case_studies', props);
  const metrics = findNode(`${props.pageContext.slug}/metrics`, props);
  const process = findNode(`${props.pageContext.slug}/process`, props);
  const contactsIntro = findNode('contacts', props);

  // Show other case studies, but filter this one
  caseStudies = caseStudies.filter((study) => study.fileAbsolutePath !== rootNode.fileAbsolutePath);

  const hocProps = {
    caseStudies,
    intro: rootNode.htmlAst,
    metricsIntro: metrics.htmlAst,
    metrics: metrics.frontmatter.scores,
    processTitle: process.frontmatter.title,
    process: process.htmlAst,
    caseStudiesIntro: caseStudiesIntro.htmlAst,
    contactsIntro: contactsIntro.htmlAst,
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
            scores {
              metric
              value
              description
            }
          }
          fileAbsolutePath
        }
      }
    }
  }
`;

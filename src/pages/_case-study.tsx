/**
 * This is a template for an individual case-study page. As this page is dynamically
 * used to create pages via the "createPages" function in `gatsby-node.js`, we
 * prefix the filename with an _ (underscore) so that a HTML page is not generated
 * for it.
 */
import React from 'react';
import { graphql } from 'gatsby';
import CaseStudy from '../templates/case-study';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  const rootNode = findNode(props.pageContext.slug, props);
  let caseStudies = findNodes('group', props, 'case-studies');
  const caseStudiesIntro = findNode('case-studies/index', props);
  const metrics = findNode(`${props.pageContext.slug}/metrics`, props);
  const testimonial = findNode(`${props.pageContext.slug}/testimonial`, props);
  const process = findNode(`${props.pageContext.slug}/process`, props);
  const contactsIntro = findNode('contacts', props);

  if (rootNode) {
    // Show other case studies, but filter this one
    caseStudies = caseStudies.filter(
      (study) => study.fileAbsolutePath !== rootNode.fileAbsolutePath,
    );
  }

  const hocProps = {
    caseStudies,
    intro: (rootNode) ? rootNode.htmlAst : '',
    metricsIntro: (metrics) ? metrics.htmlAst : '',
    metrics: (metrics) ? metrics.frontmatter.scores : '',
    testimonial: (testimonial) ? testimonial.frontmatter.testimonial : '',
    testimonialText: (testimonial) ? testimonial.htmlAst : '',
    processTitle: (process) ? process.frontmatter.title : '',
    process: (process) ? process.htmlAst : '',
    caseStudiesIntro: (caseStudiesIntro) ? caseStudiesIntro.htmlAst : '',
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
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
            image
            group
            headercolor
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

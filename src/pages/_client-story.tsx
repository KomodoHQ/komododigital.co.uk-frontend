/**
 * This is a template for an individual case-study page. As this page is dynamically
 * used to create pages via the "createPages" function in `gatsby-node.js`, we
 * prefix the filename with an _ (underscore) so that a HTML page is not generated
 * for it.
 */
import React from 'react';
import { graphql } from 'gatsby';
import CaseStudy from '../templates/client-story';
import CaseStudyV2 from '../templates/client-story-v2';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import { findNodes, findNode, findNodeRaw } from '../utils/nodes';
import { pageMetaFromFrontmatter } from '../utils/page-meta';

export default (props) => {
  const rootNode = findNode(`${props.pageContext.slug}/index`, props);
  let caseStudies = findNodes('group', props, 'client-stories');
  const caseStudiesIntro = findNodeRaw('client-stories/other', props.data.others);
  const metrics = findNodeRaw(`${props.pageContext.slug}/metrics`, props.data.metrics);
  const testimonial = findNodeRaw(`${props.pageContext.slug}/testimonial`, props.data.testimonial);
  const process = findNodeRaw(`${props.pageContext.slug}/process`, props.data.process);
  const contactsIntro = findNode('client-stories/contact_us', props);

  if (rootNode) {
    // Show other case studies, but filter this one
    caseStudies = caseStudies.filter(
      (study) => study.fileAbsolutePath !== rootNode.fileAbsolutePath,
    );
  }

  const caseStudy = caseStudies.sort(() => .5 - Math.random())[0];

  const hocProps = (rootNode && rootNode.frontmatter && rootNode.frontmatter.v2) ? {
    caseStudy,
    intro: rootNode ? rootNode.htmlAst : '',
    title: rootNode ? rootNode.frontmatter.title : '',
    subtitle: rootNode ? rootNode.frontmatter.subtitle : '',
    coverimage: rootNode ? rootNode.frontmatter.coverimage : '',
    navBackground: rootNode ? rootNode.frontmatter.navBackground : '',
    background: rootNode ? rootNode.background : '',
    invert: rootNode ? rootNode.invert : false,
    pageMeta: pageMetaFromFrontmatter(rootNode),
    ...props,
  } : {
    caseStudy,
    intro: rootNode ? rootNode.htmlAst : '',
    title: rootNode ? rootNode.frontmatter.title : '',
    subtitle: rootNode ? rootNode.frontmatter.subtitle : '',
    coverimage: rootNode ? rootNode.frontmatter.coverimage : '',
    navBackground: rootNode ? rootNode.frontmatter.navBackground : '',
    background: rootNode ? rootNode.background : '',
    invert: rootNode ? rootNode.invert : false,
    metricsIntro: metrics ? metrics.htmlAst : '',
    metricsTitle: metrics ? metrics.frontmatter.title : '',
    metrics: metrics ? metrics.frontmatter.scores : '',
    testimonial: testimonial ? testimonial.frontmatter : null,
    processTitle: process ? process.frontmatter.title : '',
    process: process ? process.htmlAst : '',
    caseStudiesIntro: caseStudiesIntro ? caseStudiesIntro.htmlAst : '',
    caseStudiesTitle: caseStudiesIntro ? caseStudiesIntro.frontmatter.title : '',
    contactsIntro: contactsIntro ? contactsIntro.htmlAst : '',
    pageMeta: pageMetaFromFrontmatter(rootNode),
    ...props,
  };

  console.log(rootNode);
  console.log(hocProps);

  return (rootNode && rootNode.frontmatter && rootNode.frontmatter.v2) ? <CaseStudyV2 {...hocProps} /> : <CaseStudy {...hocProps} />;
  // return <CaseStudy {...hocProps} />;
};

export const caseStudyQuery = graphql`
  query caseStudyQuery {
    ...siteMeta
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/client-stories/.*/index|client-stories/contact_us|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            excerpt
            v2
            csimage {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            coverimage {
              childImageSharp {
                fluid(maxWidth: 1170) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            group
            headercolor
            navBackground
            background
            invert
            ...pageMeta
          }
          fileAbsolutePath
        }
      }
    }
    metrics: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/metrics/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
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
    process: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/process/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
          }
          fileAbsolutePath
        }
      }
    }
    testimonial: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/testimonial/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
            jobtitle
            company
            testimonial
          }
          fileAbsolutePath
        }
      }
    }
    others: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/other/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
          }
          fileAbsolutePath
        }
      }
    }
    ...komodoLogo
    ...avatars
  }
`;

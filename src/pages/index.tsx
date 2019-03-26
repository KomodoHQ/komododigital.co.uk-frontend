import React from 'react';
import { graphql } from 'gatsby';
import Index from '../templates/index';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import { findNodes, findNode, findNodeRaw } from '../utils/nodes';
import CleanSourceURL from '../utils/clean-source-url';

export default (props) => {
  const rootNode = findNode('index/index', props);
  const services = findNodes('group', props, 'services');
  const caseStudies = findNodes('group', props, 'case-studies');
  const caseStudiesIntro = findNode('index/case-studies', props);
  const aboutUsIntro = findNode('index/about_us', props);
  const approachIntro = findNode('index/approach', props);
  const clientPortfoliosIntro = findNode('index/client_portfolio', props);
  const insightsIntro = findNode('index/insights', props);
  const contactsIntro = findNode('index/contact_us', props);
  const testimonial = findNodeRaw('case-studies/onward/testimonial', props.data.testimonial);

  const insights = props.data.allWordpressPost.edges.map((edge) => {
    const data = {
      node: {
        imageSource: CleanSourceURL(edge.node.featured_media.source_url),
        ...edge.node,
      },
    };
    return data;
  });

  const hocProps = {
    services,
    caseStudies,
    insights,
    subtitle: (rootNode) ? rootNode.subtitle : '',
    title: (rootNode) ? rootNode.title : '',
    intro: (rootNode) ? rootNode.htmlAst : '',
    image: (rootNode) ? rootNode.csimage : '',
    aboutUsIntro: (aboutUsIntro) ? aboutUsIntro.htmlAst : '',
    approachIntro: (approachIntro) ? approachIntro.htmlAst : '',
    caseStudiesIntro: (caseStudiesIntro) ? caseStudiesIntro.htmlAst : '',
    clientPortfoliosIntro: (clientPortfoliosIntro) ? clientPortfoliosIntro.htmlAst : '',
    insightsIntro: (insightsIntro) ? insightsIntro.htmlAst : '',
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
    testimonial: (testimonial) ? testimonial.frontmatter : '',
    ...props,
  };

  return <Index {...hocProps} />;
};

export const pageQuery = graphql`
  query pageQuery {
    ...siteMeta
    allWordpressPost(limit: 3) {
      edges {
        node {
          status
          slug
          title
          date
          featured_media {
            source_url
          }
        }
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index|case-studies|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            excerpt
            csimage {
              childImageSharp {
                fluid: fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
                fluidFull: fluid(maxWidth: 1170, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            group
          }
          fileAbsolutePath
        }
      }
    }
    testimonial: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/case-studies/onward/testimonial/" } }
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
    ...clientLogos
    ...komodoLogo
    ...icons
    ...avatars
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import Index from '../templates/index';
import Placeholder from '../assets/images/placeholder.png';
import { findNodes, findNode, findNodeRaw } from '../utils/nodes';
import CleanSourceURL from '../utils/clean-source-url';

export default (props) => {
  const rootNode = findNode('index/index', props);
  const services = findNodes('group', props, 'services');
  const caseStudies = findNodes('group', props, 'client-stories');
  const caseStudiesRandom = caseStudies.sort(() => .5 - Math.random()).slice(0, 2);
  const caseStudiesIntro = findNode('index/client-stories', props);
  const aboutUsIntro = findNode('index/about_us', props);
  const approachIntro = findNode('index/approach', props);
  const clientPortfoliosIntro = findNode('index/client_portfolio', props);
  const insightsIntro = findNode('index/insights', props);
  const contactsIntro = findNode('index/contact_us', props);
  const testimonial = findNodeRaw('client-stories/onward/testimonial', props.data.testimonial);

  const insights = props.data.allWordpressPost.edges.map((edge) => {
    const media = edge.node.featured_media;
    return {
      node: {
        imageSource: media === null ? Placeholder : CleanSourceURL(media.source_url),
        ...edge.node,
      },
    };
  });

  const hocProps = {
    services,
    caseStudies,
    caseStudiesRandom,
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index|client-stories|contacts/" } }) {
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
      filter: { fileAbsolutePath: { regex: "/client-stories/onward/testimonial/" } }
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

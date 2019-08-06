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

const getV1HocProps = (caseStudy, rootNode, metrics, testimonial, process, caseStudiesIntro, contactsIntro, props) => ({
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
  ...props
});

const getV2HocProps = (caseStudy, rootNode, simpleNodes, sideQuoteNodes, quotesNodes, largeQuoteNodes, quoteVideoBannerNodes, props) => {
  const hocProps = {
    caseStudy,
    intro: rootNode ? rootNode.htmlAst : '',
    title: rootNode ? rootNode.frontmatter.title : '',
    subtitle: rootNode ? rootNode.frontmatter.subtitle : '',
    coverimage: rootNode ? rootNode.frontmatter.coverimage : '',
    navBackground: rootNode ? rootNode.frontmatter.navBackground : '',
    background: rootNode ? rootNode.background : '',
    invert: rootNode ? rootNode.invert : false,
    one: simpleNodes[0] ? simpleNodes[0].htmlAst : '',
    oneTitle: simpleNodes[0] ? simpleNodes[0].frontmatter.title : '',
    two: sideQuoteNodes[0] ? sideQuoteNodes[0].htmlAst : '',
    twoTitle: sideQuoteNodes[0] ? sideQuoteNodes[0].frontmatter.title : '',
    twoQuoteName: sideQuoteNodes[0] ? sideQuoteNodes[0].frontmatter.quotename : '',
    twoQuoteTitle: sideQuoteNodes[0] ? sideQuoteNodes[0].frontmatter.quotetitle : '',
    twoQuoteCompany: sideQuoteNodes[0] ? sideQuoteNodes[0].frontmatter.quotecompany : '',
    twoQuoteContent: sideQuoteNodes[0] ? sideQuoteNodes[0].frontmatter.quotecontent : '',
    twoQuoteLeft: sideQuoteNodes[0] ? sideQuoteNodes[0].frontmatter.quoteleft : '',
    twoQuoteImage: sideQuoteNodes[0] ? sideQuoteNodes[0].frontmatter.quoteimage : '',
    three: simpleNodes[1] ? simpleNodes[1].htmlAst : '',
    threeTitle: simpleNodes[1] ? simpleNodes[1].frontmatter.title : '',
    four: sideQuoteNodes[1] ? sideQuoteNodes[1].htmlAst : '',
    fourTitle: sideQuoteNodes[1] ? sideQuoteNodes[1].frontmatter.title : '',
    fourQuoteName: sideQuoteNodes[1] ? sideQuoteNodes[1].frontmatter.quotename : '',
    fourQuoteTitle: sideQuoteNodes[1] ? sideQuoteNodes[1].frontmatter.quotetitle : '',
    fourQuoteCompany: sideQuoteNodes[1] ? sideQuoteNodes[1].frontmatter.quotecompany : '',
    fourQuoteContent: sideQuoteNodes[1] ? sideQuoteNodes[1].frontmatter.quotecontent : '',
    fourQuoteLeft: sideQuoteNodes[1] ? sideQuoteNodes[1].frontmatter.quoteleft : '',
    fourQuotePicture: sideQuoteNodes[1] ? sideQuoteNodes[1].frontmatter.quotepicture : '',
    fourQuoteImage: sideQuoteNodes[1] ? sideQuoteNodes[1].frontmatter.quoteimage : '',
    five: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].htmlAst : '',
    fiveTitle: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].frontmatter.title : '',
    fiveQuoteName: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].frontmatter.quotename : '',
    fiveQuoteTitle: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].frontmatter.quotetitle : '',
    fiveQuoteCompany: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].frontmatter.quotecompany : '',
    fiveQuoteContent: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].frontmatter.quotecontent : '',
    fiveQuoteLeft: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].frontmatter.quoteleft : '',
    fiveQuoteImage: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].frontmatter.quoteimage : '',
    fiveVideo: quoteVideoBannerNodes[0] ? quoteVideoBannerNodes[0].frontmatter.video : '',
    sixQuotes: quotesNodes[0] ? quotesNodes[0].frontmatter.quotes : '',
    seven: largeQuoteNodes[0] ? largeQuoteNodes[0].htmlAst : '',
    sevenQuoteName: largeQuoteNodes[0] ? largeQuoteNodes[0].frontmatter.quotename : '',
    sevenQuoteTitle: largeQuoteNodes[0] ? largeQuoteNodes[0].frontmatter.quotetitle : '',
    sevenQuoteCompany: largeQuoteNodes[0] ? largeQuoteNodes[0].frontmatter.quotecompany : '',
    sevenQuoteImage: largeQuoteNodes[0] ? largeQuoteNodes[0].frontmatter.quoteimage : '',
    eight: sideQuoteNodes[2] ? sideQuoteNodes[2].htmlAst : '',
    eightTitle: sideQuoteNodes[2] ? sideQuoteNodes[2].frontmatter.title : '',
    eightQuoteName: sideQuoteNodes[2] ? sideQuoteNodes[2].frontmatter.quotename : '',
    eightQuoteTitle: sideQuoteNodes[2] ? sideQuoteNodes[2].frontmatter.quotetitle : '',
    eightQuoteCompany: sideQuoteNodes[2] ? sideQuoteNodes[2].frontmatter.quotecompany : '',
    eightQuoteContent: sideQuoteNodes[2] ? sideQuoteNodes[2].frontmatter.quotecontent : '',
    eightQuoteLeft: sideQuoteNodes[2] ? sideQuoteNodes[2].frontmatter.quoteleft : '',
    eightQuoteImage: sideQuoteNodes[2] ? sideQuoteNodes[2].frontmatter.quoteimage : '',
    pageMeta: pageMetaFromFrontmatter(rootNode),
    ...props
  }
  return hocProps;
}

export default (props) => {
  const rootNode = findNode(`${props.pageContext.slug}/index`, props);
  let caseStudies = findNodes('group', props, 'client-stories');
  const caseStudiesIntro = findNodeRaw('client-stories/other', props.data.others);
  const metrics = findNodeRaw(`${props.pageContext.slug}/metrics`, props.data.metrics);
  const testimonial = findNodeRaw(`${props.pageContext.slug}/testimonial`, props.data.testimonial);
  const process = findNodeRaw(`${props.pageContext.slug}/process`, props.data.process);
  const contactsIntro = findNode('client-stories/contact_us', props);

  const simpleNodes = Array.from(Array(2).keys())
    .map(i => findNodeRaw(`${props.pageContext.slug}/simple${i + 1}`, props.data[`simple${i + 1}`]));
  const sideQuoteNodes = Array.from(Array(3).keys())
    .map(i => findNodeRaw(`${props.pageContext.slug}/sidequote${i + 1}`, props.data[`sidequote${i + 1}`]));
  const quotesNodes = Array.from(Array(1).keys())
    .map(i => findNodeRaw(`${props.pageContext.slug}/quotes${i + 1}`, props.data[`quotes${i + 1}`]));
  const largeQuoteNodes = Array.from(Array(1).keys())
    .map(i => findNodeRaw(`${props.pageContext.slug}/largequote${i + 1}`, props.data[`largequote${i + 1}`]));
  const quoteVideoBannerNodes = Array.from(Array(1).keys())
    .map(i => findNodeRaw(`${props.pageContext.slug}/quotevideobanner${i + 1}`, props.data[`quotevideobanner${i + 1}`]));

  if (rootNode) {
    // Show other case studies, but filter this one
    caseStudies = caseStudies.filter(
      (study) => study.fileAbsolutePath !== rootNode.fileAbsolutePath,
    );
  }

  const caseStudy = caseStudies.sort(() => .5 - Math.random())[0];

  return (rootNode && rootNode.frontmatter && rootNode.frontmatter.v2) ?
    <CaseStudyV2 {...getV2HocProps(caseStudy, rootNode, simpleNodes, sideQuoteNodes, quotesNodes, largeQuoteNodes, quoteVideoBannerNodes, props)} /> :
    <CaseStudy {...getV1HocProps(caseStudy, rootNode, metrics, testimonial, process, caseStudiesIntro, contactsIntro, props)} />;
};


// TODO: String interpolation is not allowed in graphql, but there needs to be a better way to achieve this.
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
    simple1: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/simple1/" } }
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
    simple2: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/simple2/" } }
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
    simple3: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/simple3/" } }
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
    sidequote1: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/sidequote1/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            quotename
            quotetitle
            quotecompany
            quotecontent
            quoteleft
            quoteimage {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    sidequote2: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/sidequote2/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            quotename
            quotetitle
            quotecompany
            quotecontent
            quoteleft
            quoteimage {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    sidequote3: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/sidequote3/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            quotename
            quotetitle
            quotecompany
            quotecontent
            quoteleft
            quoteimage {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    quotes1: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/quotes1/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            quotes {
              name
              title
              company
              content
              image {
                childImageSharp {
                  fluid(maxWidth: 450) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    quotevideobanner1: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/quotevideobanner1/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            quotename
            quotetitle
            quotecompany
            quotecontent
            quoteleft
            quoteimage {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
            video {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    largequote1: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/client-stories/.*/largequote1/" } }
    ) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            quotename
            quotetitle
            quotecompany
            quoteimage {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    ...komodoLogo
    ...avatars
  }
`;

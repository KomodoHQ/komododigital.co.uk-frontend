import React from 'react';
import { graphql } from 'gatsby';
import About from '../templates/about';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import { findNodes, findNode } from '../utils/nodes';
import { pageMetaFromFrontmatter } from '../utils/page-meta';

export default (props) => {
  const rootNode = findNode('about/index', props);
  const contactsIntro = findNode('contacts/index', props);
  const values = findNode('about/values', props);
  const culture = findNode('about/culture', props);
  const purpose = findNode('about/purpose', props);

  const hocProps = {
    subtitle: (rootNode) ? rootNode.subtitle : '',
    title: (rootNode) ? rootNode.title : '',
    intro: (rootNode) ? rootNode.htmlAst : '',
    image: (rootNode) ? rootNode.csimage : '',
    values: (values) ? values.htmlAst : '',
    valuesIntro: (values) ? values.frontmatter.title : '',
    culture: (culture) ? culture.htmlAst : '',
    cultureIntro: (culture) ? culture.frontmatter.title : '',
    purpose: (purpose) ? purpose.htmlAst : '',
    purposeIntro: (purpose) ? purpose.frontmatter.title : '',
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
    pageMeta: pageMetaFromFrontmatter(rootNode),
    ...props,
  };

  return <About {...hocProps} />;
};

export const aboutQuery = graphql`
  query aboutQuery {
    ...siteMeta
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index|about|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            group
            ...pageMeta
            csimage {
              childImageSharp {
                fluidFull: fluid(maxWidth: 1170, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          fileAbsolutePath
        }
      }
    }
    ...komodoLogo
    ...standardsLogos
    ...avatars
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import About from '../templates/about';
import { siteMeta, komodoLogo } from '../utils/site-queries';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  const rootNode = findNode('about/index', props);
  const services = findNodes('group', props, 'services');
  const servicesIntro = findNode('about/services', props);
  const approachIntro = findNode('index/approach', props);
  const standardsIntro = findNode('about/standards', props);
  const contactsIntro = findNode('contacts/index', props);

  const hocProps = {
    services,
    subtitle: (rootNode) ? rootNode.subtitle : '',
    title: (rootNode) ? rootNode.title : '',
    intro: (rootNode) ? rootNode.htmlAst : '',
    approachIntro: (approachIntro) ? approachIntro.htmlAst : '',
    servicesIntro: (servicesIntro) ? servicesIntro.htmlAst : '',
    standardsIntro: (standardsIntro) ? standardsIntro.htmlAst : '',
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
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
          }
          fileAbsolutePath
        }
      }
    }
    ...komodoLogo
    ...standardsLogos
  }
`;

import React from 'react';
import { graphql } from 'gatsby';
import Services from '../templates/services';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  const rootNode = findNode('services/index', props);
  const services = findNodes('group', props, 'services');
  const servicesIntro = findNode('services/services', props);
  const wheelhouseIntro = findNode('services/wheelhouse', props);
  const standardsIntro = findNode('services/standards', props);
  const contactsIntro = findNode('services/contact_us', props);

  const hocProps = {
    services,
    subtitle: (rootNode) ? rootNode.subtitle : '',
    title: (rootNode) ? rootNode.title : '',
    intro: (rootNode) ? rootNode.htmlAst : '',
    image: (rootNode) ? rootNode.csimage : '',
    wheelhouseIntro: (wheelhouseIntro) ? wheelhouseIntro.htmlAst : '',
    servicesIntro: (servicesIntro) ? servicesIntro.htmlAst : '',
    standardsIntro: (standardsIntro) ? standardsIntro.htmlAst : '',
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
    ...props,
  };

  return <Services {...hocProps} />;
};

export const servicesQuery = graphql`
  query servicesQuery {
    ...siteMeta
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index|services|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            group
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
    ...icons
    ...avatars
  }
`;

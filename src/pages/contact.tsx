import React from 'react';
import { graphql } from 'gatsby';
import Contact from '../templates/contact';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  const contactsIntro = findNode('contacts/index', props);

  const hocProps = {
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
    ...props,
  };

  return <Contact {...hocProps} />;
};

export const contactQuery = graphql`
  query contactQuery {
    ...siteMeta
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index|case-studies|contacts/" } }) {
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
    ...avatars
  }
`;

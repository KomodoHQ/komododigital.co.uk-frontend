import React from 'react';
import { graphql } from 'gatsby';
import Contact from '../templates/contact';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import { findNodes, findNode } from '../utils/nodes';
import { pageMetaFromFrontmatter } from '../utils/page-meta';

export default (props) => {
  const rootNode = findNode('contact/index', props);
  const contactsIntro = findNode('contacts/index', props);
  const career = findNode('contacts/career', props);

  const hocProps = {
    contactsIntro: (contactsIntro) ? contactsIntro.htmlAst : '',
    career: (career) ? career.htmlAst : '',
    pageMeta: pageMetaFromFrontmatter(rootNode),
    ...props,
  };

  return <Contact {...hocProps} />;
};

export const contactQuery = graphql`
  query contactQuery {
    ...siteMeta
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index|client-stories|contacts/" } }) {
      edges {
        node {
          htmlAst
          frontmatter {
            title
            subtitle
            group
            ...pageMeta
          }
          fileAbsolutePath
        }
      }
    }
    ...komodoLogo
    ...avatars
    ...icons
  }
`;

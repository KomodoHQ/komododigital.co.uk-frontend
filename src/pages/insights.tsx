import React from 'react';
import { graphql } from 'gatsby';
import Insights from '../templates/insights';
import { siteMeta, komodoLogo, clientLogos, icons, avatars } from '../utils/site-queries';
import CleanSourceURL from '../utils/clean-source-url';
import { findNodes, findNode } from '../utils/nodes';

export default (props) => {
  const posts = props.data.allWordpressPost.edges.map((edge) => {
    const data = {
      node: {
        imageSource: CleanSourceURL(edge.node.featured_media.source_url),
        ...edge.node,
      },
    };

    return data;
  });

  const insightsIntro = findNode('insights/index', props);

  const hocProps = {
    insightsIntro: (insightsIntro) ? insightsIntro.htmlAst : '',
    ...props,
  };

  return <Insights posts={posts} {...hocProps} />;
};

export const blogListQuery = graphql`
  query blogListQuery {
    ...siteMeta
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/insights/" } }) {
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
    allWordpressPost(limit: 20) {
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
    ...komodoLogo
    ...avatars
  }
`;

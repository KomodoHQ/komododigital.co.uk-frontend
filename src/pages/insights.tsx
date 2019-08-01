import React from 'react';
import { graphql } from 'gatsby';
import Insights from '../templates/insights';
import Placeholder from '../assets/images/placeholder.png';
import CleanSourceURL from '../utils/clean-source-url';
import { findNode } from '../utils/nodes';
import { pageMetaFromFrontmatter } from '../utils/page-meta';

export default (props) => {
  console.log(props);
  const posts = props.data.allWordpressPost.edges.map((edge) => {
    const media = edge.node.featured_media;
    return {
      node: {
        imageSource: media === null ? Placeholder : CleanSourceURL(media.source_url),
        ...edge.node,
      },
    };
  });

  const insightsIntro = findNode('insights/index', props);

  const hocProps = {
    insightsIntro: (insightsIntro) ? insightsIntro.htmlAst : '',
    pageMeta: pageMetaFromFrontmatter(insightsIntro),
    ...props,
  };

  console.log(hocProps);

  return <Insights posts={posts} {...hocProps} />;
};

export const blogListQuery = graphql`
  query blogListQuery($limit: Int, $skip: Int) {
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
            ...pageMeta
          }
          fileAbsolutePath
        }
      }
    }
    allWordpressPost(limit: $limit, skip: $skip) {
      edges {
        node {
          status
          slug
          title
          date
          content
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

const _ = require('lodash');
const path = require('path');
const slash = require('slash');
const { fileToSlug } = require('./src/utils/file-to-slug');

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    // ==== POSTS (WORDPRESS NATIVE AND ACF) ====
    graphql(`
      {
        allWordpressPost {
          edges {
            node {
              id
              slug
              status
              template
              format
            }
          }
        }
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/client-stories/" } }) {
          edges {
            node {
              frontmatter {
                title
                subtitle
                group
              }
              fileAbsolutePath
            }
          }
        }
      }
    `).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      // Templates are prefixed with underscore
      const blogPostTemplate = path.resolve('./src/pages/_blog.tsx');
      const caseStudyTemplate = path.resolve('./src/pages/_client-story.tsx');

      // Create a page for every 21 blog posts.
      // This sets up pagination allowing all blog posts to be viewed
      const posts = result.data.allWordpressPost.edges;
      const postsPerPage = 21;
      const totalArticles = posts.length;
      const numPages = Math.ceil(totalArticles / postsPerPage);

      Array.from({length: numPages}).forEach((edge, index) => {
        createPage({
          path: index === 0 ? `/insights` : `/insights/${index}/`,
          component: path.resolve('./src/pages/insights.tsx'),
          context: {
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            totalArticles,
            nextPage: index + 1,
          },
        });
      });

      // We want to create a detailed page for each
      // post node. We'll just use the WordPress Slug for the slug.
      // The Post ID is prefixed with 'POST_'
      _.each(result.data.allWordpressPost.edges, (edge) => {
        createPage({
          path: `/insights/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.slug,
          },
        });
      });

      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        // Only create pages for files with index in
        if (edge.node.fileAbsolutePath.endsWith('index.md')) {
          const slug = fileToSlug(edge.node.fileAbsolutePath);

          createPage({
            path: `/${slug}/`,
            component: slash(caseStudyTemplate),
            context: {
              slug: slug,
            },
          });
        }
      });

      resolve();
    });
    // ==== END POSTS ====
  });
};

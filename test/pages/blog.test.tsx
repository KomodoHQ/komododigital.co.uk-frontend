import React from 'react';
//import Blog from '../../src/pages/blog';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Blog page is rendered', () => {
  const data = {
    site: GatsbyData,
    allWordpressPost: {
      edges: [
        {
          node: {
            featured_media: {
              source_url: 'https://www.komododigital.co.uk/static/media/logo.50a4b652.svg',
            },
            content: 'TEST CONTENT',
            title: 'TEST TITLE',
          },
        },
      ],
    },
  };
  // const component = renderer.create(<Blog data={data} />);
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});

import React from 'react';
import Blog from '../../src/templates/blog';
import renderer from 'react-test-renderer';
import GatsbyData from '../../gatsby-config';

test('Blog template is rendered', () => {
  const hocProps = {
    imagesource: 'https://www.komododigital.co.uk/static/media/logo.50a4b652.svg',
    html: '<p>Test</p>',
    data: {
      site: GatsbyData,
    },
  };

  const component = renderer.create(<Blog {...hocProps} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import BlogSummaryView from '../../src/components/blogsummaryview.tsx';
import renderer from 'react-test-renderer';

test('BlogSummaryView element is rendered', () => {
  const data = {
    imageSource: 'https://www.komododigital.co.uk/static/media/logo.50a4b652.svg',
    date: "2018-09-22"
  };
  const component = renderer.create(<BlogSummaryView data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

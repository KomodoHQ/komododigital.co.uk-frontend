import React from 'react';
import BlogSummaryView from '../../src/components/blogsummaryview.tsx';
import renderer from 'react-test-renderer';

test('BlogSummaryView element is rendered', () => {
  const component = renderer.create(<BlogSummaryView />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

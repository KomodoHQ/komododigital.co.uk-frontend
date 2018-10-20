import React from 'react';
import Footer from '../../src/components/footer';
import renderer from 'react-test-renderer';

test('Footer element is rendered', () => {
  const component = renderer.create(<Footer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

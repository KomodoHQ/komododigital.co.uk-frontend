import React from 'react';
import Footer from '../../src/components/footer';
import renderer from 'react-test-renderer';

test('Footer element is rendered', () => {
  const data = {
  };
  const component = renderer.create(<Footer data={data} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
